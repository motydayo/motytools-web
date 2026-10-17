---
title: モーダル・ドロワー・ボトムシート・ポップオーバー・ツールチップ・トーストの使い分けと、<dialog>/popoverで作る最小実装
tags:
  - HTML
  - CSS
  - JavaScript
  - アクセシビリティ
  - UI
private: false
updated_at: ''
id: null
organization_url_name: null
slide: false
ignorePublish: true
---

<!--
投稿メモ（公開前に消す）
- Qiita CLI 形式の前置き。ブラウザの投稿画面に貼る場合は、この前置き（--- から --- まで）を消し、タイトルとタグを画面で入力する。
- 図鑑へのリンクは本文中2か所＋末尾1か所。
-->

「画面の上に何かを重ねて出す」部品は、名前が多くて紛らわしいものの代表です。モーダル、ドロワー、ボトムシート、ポップオーバー、ツールチップ、トースト。見た目はどれも「何かがふわっと出る」ですが、**後ろを触れるか・どう閉じるか・キーボードでどう動くか**の約束がそれぞれ違います。

この約束を外すと、「Escで閉じない」「閉じたらフォーカスがページの先頭に飛ぶ」「スマホで読めない注意書き」のような、地味だけど確実に嫌われる不具合になります。

この記事では、6つの使い分けの判断基準と、HTMLに標準で入っている `<dialog>` と `popover` 属性を土台にした最小実装をまとめます。

## 一覧表

| 部品 | 出る場所 | 後ろの画面 | 開き方 | 主な閉じ方 | HTMLの土台 |
|---|---|---|---|---|---|
| モーダル | 画面の中央 | 触れない（暗幕） | ボタンを押す | ×・キャンセル・Esc・暗幕 | `<dialog>` + `showModal()` |
| ドロワー | 画面の左右の端 | 触れない（暗幕） | 三本線ボタンなど | ×・Esc・暗幕 | `<dialog>` + `showModal()` |
| ボトムシート | 画面の下 | 触れない（暗幕） | ボタンを押す | ×・Esc・暗幕・取っ手を下へ引く | `<dialog>` + `showModal()` |
| ポップオーバー | ボタンのすぐそば | 触れる | ボタンを押す | 外を押す・Esc・決定ボタン | `popover` 属性 |
| ツールチップ | 要素のすぐそば | 触れる | 乗せる・フォーカス | 離れる・Esc | `role="tooltip"` |
| トースト | 画面の下（または上）の端 | 触れる | 操作の結果として自動 | 時間で自動・×ボタン | `role="status"` |

判断の軸は2つだけです。

1. **今の作業を止めてでも答えてほしいか** → 止めるならモーダル系（モーダル・ドロワー・ボトムシート）、止めないならそれ以外
2. **中に押せるもの（ボタン・リンク・入力欄）があるか** → あるならポップオーバー以上、ないならツールチップかトースト

## 1. モーダル：取り消しにくい判断の直前に

**使う場面**：予約・購入・削除など、取り消しにくい操作の確認。ログインや名前の変更のような短い入力。
**使わない場面**：開いた直後に頼まれてもいない勧誘を出す、入力欄の多い長いフォーム、モーダルの上にモーダルを重ねる。

今は `<dialog>` を使うのがいちばん確実です。`showModal()` を呼ぶだけで、次の約束がまとめて手に入ります。

- 最前面の層（top layer）に出て、`z-index` 合戦をしなくていい
- 後ろの要素が操作できなくなり、読み上げソフトにも読まれなくなる
- Escキーで閉じる
- `::backdrop` で暗幕を付けられる
- 閉じると、開く前に押したボタンへフォーカスが戻る

足りないのは「暗幕を押したら閉じる」だけなので、数行で足します。

```html
<button type="button" class="open-btn">予約内容を確認する</button>

<dialog class="modal" aria-labelledby="modal-title">
  <form method="dialog" class="modal-body">
    <button class="modal-x" value="cancel" aria-label="閉じる">×</button>
    <h2 id="modal-title">この内容で予約しますか？</h2>
    <p>11月3日（月）から1泊・大人2名・合計30,000円</p>
    <button value="cancel">やめる</button>
    <button value="ok">予約する</button>
  </form>
</dialog>
```

```css
.modal {
  width: min(90vw, 360px);
  padding: 0; /* 余白は内側の箱に（暗幕を押したかの判定を正しくするため） */
  border: 0;
  border-radius: 16px;
  transition: opacity 0.25s ease-out, transform 0.25s ease-out,
    overlay 0.25s allow-discrete, display 0.25s allow-discrete;
}
.modal:not([open]) { opacity: 0; transform: scale(0.94); }
@starting-style {
  .modal[open] { opacity: 0; transform: scale(0.94); }
}
.modal-body { padding: 24px; }
.modal::backdrop { background: rgb(20 24 40 / 0.45); }

/* 開いている間は後ろをスクロールさせない */
body:has(dialog[open]) { overflow: hidden; }

@media (prefers-reduced-motion: reduce) {
  .modal { transition: none; }
}
```

```js
const dialog = document.querySelector('.modal');
document.querySelector('.open-btn')
  .addEventListener('click', () => dialog.showModal());

// 暗幕を押したら閉じる（dialog 自体に余白が無いので、ここに届くのは暗幕だけ）
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close('cancel');
});

// <form method="dialog"> のボタンの value が returnValue に入る
dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'ok') {
    // 予約の処理
  }
});
```

**ハマりどころ**

- `<dialog>` 自体に `padding` を付けると、余白部分のクリックも `e.target === dialog` になり、中を押したのに閉じてしまいます。余白は内側の要素に付けます
- 開閉の動きに使う `@starting-style` と `transition-behavior: allow-discrete` は比較的新しい指定ですが、未対応のブラウザでは「動きなしで開閉する」だけで壊れません
- 見出しを `aria-labelledby` で結び付けると、開いたときに「何の小窓か」が読み上げられます

## 2. ドロワー：行き先の一覧をしまう板

**使う場面**：スマホでヘッダーに並べきれないメニュー（5〜10項目）。管理画面で、PCでは常に出している左メニューをスマホでは引き出し式にする。
**使わない場面**：PCの広い画面で3〜5個しかないメニューを隠す。いちばん押してほしい行き先（予約・購入）をドロワーの中だけに置く。

モーダルとの違いは「出る場所」と「中身」です。モーダルは判断を求め、ドロワーは行き先を選ばせます。仕組みはモーダルと同じ `<dialog>` で、位置だけ左端に変えます。

```css
.drawer {
  margin: 0;
  inset: 0 auto 0 0;          /* 左端に上から下まで */
  width: min(280px, 85vw);    /* 画面いっぱいにしない */
  max-width: none;
  height: 100dvh;
  max-height: none;
  padding: 0;
  border: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in,
    overlay 0.3s allow-discrete, display 0.3s allow-discrete;
}
.drawer[open] {
  transform: translateX(0);
  transition-timing-function: ease-out; /* 出るときは減速、閉じるときは加速 */
}
@starting-style {
  .drawer[open] { transform: translateX(-100%); }
}
html:has(.drawer[open]) { overflow: hidden; }
```

```html
<button type="button" class="menu-btn" aria-label="メニューを開く"
  aria-controls="drawer" aria-expanded="false">…</button>
```

**ハマりどころ**

- 板の幅は画面の80〜85%まで。右に暗幕が少し見えていると「ここを押せば戻れる」と分かります
- アイコンだけの三本線ボタンには `aria-label` で名前を、`aria-expanded` で開閉状態を付けます。`close` イベントで `aria-expanded="false"` に戻すと、Escや暗幕で閉じたときも状態がずれません
- 画面の左端からのスワイプで開く操作は、iPhoneの「前のページに戻る」とぶつかるので避けます

## 3. ボトムシート：スマホで親指の届く選択肢

**使う場面**：並び替え・表示件数の選択、「共有・保存・報告」のような1件への操作、地図を見せたまま詳細を半分重ねる。
**使わない場面**：PCの広い画面、入力欄の多いフォーム（キーボードが出ると窮屈になる）、ページ全体のメニュー。

これも `<dialog>` で作れます。下端に張り付けるだけです。

```css
.sheet {
  margin: auto auto 0;   /* 画面の下端に張り付ける */
  width: 100%;
  max-width: 560px;
  max-height: 85dvh;
  padding: 0;
  border: 0;
  border-radius: 16px 16px 0 0;
  transform: translateY(100%);
  transition: transform 0.3s ease-in,
    overlay 0.3s allow-discrete, display 0.3s allow-discrete;
}
.sheet[open] { transform: translateY(0); transition-timing-function: ease-out; }
@starting-style {
  .sheet[open] { transform: translateY(100%); }
}
/* iPhone の下端のホームバーに最後の選択肢が重ならないように */
.sheet-inner { padding: 0 8px calc(8px + env(safe-area-inset-bottom)); }
```

**ハマりどころ**

- 上の取っ手（横線）だけでは閉じ方が分からない人もいます。×ボタンも置き、Escと暗幕でも閉じられるようにします
- 取っ手を引いて閉じる操作を付けるなら、引けるのは取っ手と見出しの帯だけに（`touch-action: none`）。中身全体を引けるようにすると、中のスクロールとぶつかります
- PCでも同じ板を下から出すと視線の移動が大きいので、広い画面ではモーダルやポップオーバーに切り替えるのが一般的です

## 4. ポップオーバー：後ろを止めない小窓

**使う場面**：宿や航空券の検索の「人数」設定、「?」を押したときのリンク付き説明、アイコンを押して出すアカウントメニュー。
**使わない場面**：取り消しにくい判断（後ろも触れるので、確認はモーダルにする）、長いフォーム、ただの操作の一覧（矢印キーで選べるドロップダウンメニューの方が向く）。

`popover` 属性を付けると、JavaScriptなしで開閉・外を押したら閉じる・Escで閉じるが手に入ります。

```html
<button type="button" class="guests-btn" popovertarget="guests">
  人数：<span class="guests-sum">大人2名</span>
</button>

<div id="guests" class="guests-pop" popover role="dialog" aria-labelledby="guests-h">
  <h2 id="guests-h">人数</h2>
  <!-- ＋−のボタンなど -->
  <button type="button" popovertarget="guests" popovertargetaction="hide">決定</button>
</div>
```

```css
.guests-btn { anchor-name: --guests; }

.guests-pop {
  position-anchor: --guests;
  position-area: bottom span-right;   /* ボタンの真下、左端をそろえる */
  position-try-fallbacks: flip-block; /* 下に入らなければ上へ */
  inset: auto;
  margin: 8px 0;
  width: 280px;
  padding: 16px;
  border-radius: 12px;
}
```

```js
// アンカー配置に未対応のブラウザでは、開いた瞬間に位置を計算する
if (!CSS.supports('position-area', 'bottom span-right')) {
  const btn = document.querySelector('.guests-btn');
  document.querySelector('#guests').addEventListener('toggle', (e) => {
    if (e.newState !== 'open') return;
    const r = btn.getBoundingClientRect();
    e.target.style.left = `${r.left}px`;
    e.target.style.top = `${r.bottom}px`;
  });
}
```

**ハマりどころ**

- ポップオーバーは**フォーカスを閉じ込めません**。Tabキーで進むと、ボタンの次に小窓の中、そのあとページの続きへ移ります。HTML上で小窓を開くボタンのすぐ後ろに置くと、この順番が自然になります
- 中身が「選ぶ・入力する」なら `role="dialog"` と見出しを、操作の一覧なら `role="menu"` のドロップダウンメニューとして作ります
- アンカー配置（`anchor-name` / `position-area`）は新しい機能です。未対応だと画面の中央に出るので、上のように位置計算の予備を入れておきます

## 5. ツールチップ：読むだけの短い補足

**使う場面**：アイコンだけのボタンの名前、料金の横の「i」マークに1文の補足、グラフの点の値。
**使わない場面**：必ず読んでほしい注意や条件（スマホでは乗せる操作がない）、リンクやボタンを入れたいとき（それはポップオーバー）、文字のあるボタンに同じ言葉を繰り返す。

```html
<!-- アイコンだけのボタン: 吹き出しの文がボタンの名前になる -->
<span class="tip-wrap">
  <button type="button" class="icon-btn" aria-labelledby="tip-share">
    <svg width="20" height="20" aria-hidden="true">…</svg>
  </button>
  <span role="tooltip" id="tip-share" class="tip">共有する</span>
</span>

<!-- 補足説明: ボタンの名前のあとに読まれる -->
<span class="tip-wrap">
  <button type="button" class="info-btn" aria-label="料金について"
    aria-describedby="tip-tax">i</button>
  <span role="tooltip" id="tip-tax" class="tip">入湯税150円は別途、現地でお支払いください</span>
</span>
```

**ハマりどころ**

- 名前として使うなら `aria-labelledby`、補足なら `aria-describedby`。役割で付け方が変わります
- WCAG 1.4.13（乗せると出る中身の基準）では、**吹き出しの上にマウスを移しても消えない・Escで消せる・勝手に消えない**の3つが求められます。ボタンと吹き出しのすき間に透明な `::before` を置いて「橋」をかけると、移動中に消えません
- 出るまでの待ち時間は200〜500ミリ秒が目安。0だと通り過ぎただけでちらつき、1秒近いと出る前に諦められます

## 6. トースト：操作の結果を、作業を止めずに知らせる

**使う場面**：「お気に入りから外しました」「保存しました」のような結果の通知。「元に戻す」を添えると、確認モーダルを出さずに済む場面も多いです。
**使わない場面**：大事なエラー。数秒で消えるものに、読み逃すと困る情報を入れてはいけません。エラーは画面内に表示します。

```html
<!-- 最初から置いておく（中の文が変わると読み上げられる） -->
<div class="toast" role="status">
  <span class="toast-msg"></span>
  <button type="button" class="toast-undo">元に戻す</button>
</div>
```

```css
.toast {
  position: fixed;
  left: 50%;
  bottom: 16px;
  opacity: 0;
  visibility: hidden; /* 隠れている間はフォーカスも入らない */
  transform: translate(-50%, 16px);
  transition: opacity 0.2s ease-in, transform 0.2s ease-in, visibility 0s linear 0.2s;
}
.toast.is-shown {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
  transition: opacity 0.25s ease-out, transform 0.25s ease-out, visibility 0s;
}
```

**ハマりどころ**

- `role="status"` の箱は**最初からDOMに置いておき、中の文だけ書き換えます**。表示のたびに箱ごと追加すると、読み上げソフトが変化に気づかないことがあります
- マウスが乗っている間とフォーカスがある間は、消えるまでのタイマーを止めます。「元に戻す」を押そうとした瞬間に消えるのは最悪です

## まとめ：迷ったときの3つの質問

1. **作業を止めてでも答えてほしい？** → はい：モーダル（判断）／ドロワー（行き先）／ボトムシート（スマホの選択肢）
2. **中に押せるものがある？** → はい：ポップオーバー／いいえ：ツールチップ
3. **ユーザーの操作の結果を伝えるだけ？** → トースト（ただし大事なエラーは画面内に）

そして、作る前に「HTMLに標準の部品がないか」を確かめるのが近道です。`<dialog>` と `popover` 属性だけで、自作すると漏れやすいフォーカス管理やEscキーの処理がほぼ手に入ります。

---

この記事で取り上げた6つを含む、よく使うUI部品30種（パンくずリスト・トグルスイッチ・セグメントコントロール・日付ピッカーなど）を、触れる見本・似た部品との違い・決まりごと・コードつきでまとめた [UI部品の図鑑](https://motytools.com/ui/) を作りました。たとえば [モーダルのページ](https://motytools.com/ui/modal/) では、暗幕の濃さや開く速さをつまみで変えると、見本・コード・AIに頼むときの指示文が一緒に変わります。

トーストの動きやフェードインのような「動きの演出」は、同じ形式の [Webの動きの図鑑](https://motytools.com/ugoki/)（32種）にあります。
