---
title: "AIに「いい感じに動かして」が通じない理由と、動きの名前で頼む方法"
emoji: "🎞"
type: "tech"
topics: ["css", "frontend", "ai", "webdesign", "javascript"]
published: false
---

<!--
投稿メモ（公開前に消す）
- Zenn は emoji が必須項目のため1つだけ入れている。
- published: false のまま下書き保存 → プレビュー確認 → true にして公開。
- 図鑑へのリンクは本文中3か所＋末尾1か所。これ以上増やさない。
-->

ClaudeやChatGPTにLPを作ってもらうとき、「おしゃれに動かして」「いい感じのアニメーションを付けて」と頼んだことはありませんか。

返ってくる動きは毎回ばらばらで、全部の要素がふわふわ動いたり、1画面目の見出しまで遅れて出てきたり、スマホでは意味のないホバー演出が付いたりします。何度言い直しても、狙った動きに近づかない。

原因はシンプルで、**「いい感じ」には仕様が1つも入っていない**からです。AIは「どの要素に」「どの動きを」「何秒で」「どれだけ動かすか」を全部自分で決めることになり、その結果が「平均的に派手な何か」になります。

この記事では、Webでよく使う動きに名前で頼む方法と、そのまま使えるCSSを6つ紹介します。

## 頼み方の型：名前＋場所＋数字＋配慮

動きの演出には、ほぼ決まった名前があります。「スクロールでフェードイン（fade-in on scroll）」「追従ヘッダー（sticky header）」「マーキー（marquee）」など。名前で頼むと、AIは学習した中から「その名前で普通どう作るか」を引っ張ってこられるので、ぶれが一気に減ります。

ただ、名前だけでは足りません。次の4つをそろえると、ほぼ一発で狙った動きになります。

1. **名前を日本語と英語の両方で書く**　例：「下線アニメーション（underline animation）」。片方だけより取り違えが減ります
2. **どこに付けるかを書く**　例：「メニューのリンクに」「料金カードに」。全部に付けると騒がしくなります
3. **速さと距離を数字で書く**　例：「0.25秒」「下から16px」。小さな変化は0.2秒前後、場面の切り替えは0.3秒前後が目安です
4. **動きを減らす設定への配慮を書く**　`prefers-reduced-motion: reduce`（OSの「視差効果を減らす」設定）の人には動かさない、と一言添えます

加えて「ライブラリは使わない」「CSSだけで」と技術の縛りを書くと、不要な依存が入りにくくなります。

以下、よく使う6つの動きを、この型の指示文と実際のCSSで見ていきます。数値はどれも「これくらいが読む邪魔にならない」と判断した初期値です。

## 1. スクロールでフェードイン（Fade-in on scroll）

画面に入った見出しやカードが、下からふわっと現れる演出です。いちばん頼まれて、いちばんやりすぎになりやすい動きでもあります。

**指示文の例**

> セクションの見出しとカードに「スクロールでフェードイン（fade-in on scroll）」を付けてください。最初は opacity: 0 で16px下にずらしておき、画面の下から10%入ったら0.5秒の ease-out で元の位置に表示してください。横に並ぶカードは0.1秒ずつ遅らせて順番に出してください。判定は IntersectionObserver で行い、一度表示したら監視をやめてください。ライブラリは使わないでください。prefers-reduced-motion: reduce の人には最初から表示し、JavaScriptが動かない環境でも内容が見えるようにしてください。

```html
<script>document.documentElement.classList.add('js');</script>

<section>
  <h2 class="reveal">選ばれる3つの理由</h2>
  <div class="cards">
    <div class="card reveal">朝食つき</div>
    <div class="card reveal">駅から5分</div>
    <div class="card reveal">星がきれい</div>
  </div>
</section>
```

```css
/* JavaScriptが動いたときだけ隠す（失敗しても中身は見える） */
.js .reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.js .reveal.is-in {
  opacity: 1;
  transform: none;
}
/* 横に並ぶカードは少しずつ遅らせる */
.cards .reveal:nth-child(2) { transition-delay: 0.1s; }
.cards .reveal:nth-child(3) { transition-delay: calc(0.1s * 2); }

@media (prefers-reduced-motion: reduce) {
  .js .reveal { opacity: 1; transform: none; transition: none; }
}
```

```js
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    io.unobserve(entry.target); // 一度出したら監視をやめる
  });
}, { rootMargin: '0px 0px -10% 0px' }); // 画面の下から10%入ったら

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
```

**ポイント**

- 隠す指定を `.js` クラスの下に置くのが地味に大事です。CSSだけで `opacity: 0` にすると、スクリプトの読み込みに失敗したとき中身が消えたままになります。指示文に明記しておくと確実です
- **1画面目の要素には付けない。** ページを開いた瞬間に一瞬空っぽに見え、表示が遅いと感じさせます
- 距離50px以上・1秒以上にすると「待たされている感じ」が強くなります。16〜24px、0.3〜0.5秒くらいが無難です

## 2. ホバーで浮き上がる（Hover lift）

カードにマウスを乗せると、少し上に浮いて影が濃くなる演出です。「押せる」ことを伝えるための動きなので、CSSだけで十分です。

**指示文の例**

> カード一覧に「ホバーで浮き上がる（hover lift）」演出を付けてください。マウスを乗せたら transform: translateY で6pxだけ上へ動かし、box-shadow で下に柔らかい影（濃さ 0.35、浮いた距離に合わせて下へずらし広くぼかす）を付けます。時間は0.2秒、緩急は ease-out。CSSだけで作り、JavaScriptは使わないでください。:hover は @media (hover: hover) の中に書き、スマホでは浮かせずに押した瞬間（:active）だけ scale(0.98) で少し縮めて沈んだように見せてください。キーボード操作のため :focus-visible でも同じ見た目にし、prefers-reduced-motion: reduce のときは動かさず影だけ変えてください。

```css
.card {
  display: block;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

/* マウスのある端末だけ、乗せたら浮かせる */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-6px);
    /* 影は浮いた距離の2倍下へ、4倍ぼかす */
    box-shadow: 0 calc(6px * 2) calc(6px * 4) -12px rgba(0, 0, 0, 0.35);
  }
}
/* キーボードで選んだときも同じ見た目に */
.card:focus-visible {
  transform: translateY(-6px);
  box-shadow: 0 calc(6px * 2) calc(6px * 4) -12px rgba(0, 0, 0, 0.35);
  outline: 2px solid #4f73d9;
  outline-offset: 2px;
}
/* 押した瞬間は少し縮めて沈んだように見せる（スマホのタップにも反応が出る） */
.card:active { transform: scale(0.98); transition-duration: 0.1s; }

@media (prefers-reduced-motion: reduce) {
  .card, .card:hover, .card:focus-visible, .card:active { transform: none; }
}
```

**ポイント**

- `:hover` を `@media (hover: hover)` に入れるのを忘れると、スマホではタップ後に「浮いたまま戻らない」状態が残ります
- 浮く距離と影を連動させる（影は距離の2倍下・4倍ぼかす）と、数字を変えても見た目が破綻しません

## 3. 下線アニメーション（Underline animation）

メニューのリンクに乗せると、下線が左からのびる演出です。乗せたときは左から、離れたときは右へ縮んで消えるようにすると、ぐっと丁寧に見えます。

**指示文の例**

> メニューのリンクに「下線アニメーション（underline animation）」を付けてください。リンクに position: relative を付け、::after で高さ2pxの線を文字の下4pxに置きます。ふだんは transform: scaleX(0)、乗せたら scaleX(1) にして、0.25秒の ease-out で左からのびるようにします（乗せたときは transform-origin: left、離れたときは right にして右へ縮んで消える）。:hover は @media (hover: hover) の中に書き、:focus-visible でも線を出してください。いまいるページ（aria-current="page"）は別の色で線を出しっぱなしにし、prefers-reduced-motion: reduce のときはのびる動きをやめて表示を切り替えるだけにしてください。CSSだけで作ってください。

```css
.ul {
  position: relative;
  color: #1f2433;
  text-decoration: none;
}
.ul::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  border-radius: 2px;
  background: #f06a35;
  transform: scaleX(0);       /* ふだんは幅0 */
  transform-origin: right;    /* 離れるときは右へ縮む */
  transition: transform 0.25s ease-out;
}
@media (hover: hover) {
  .ul:hover::after { transform: scaleX(1); transform-origin: left; }
}
.ul:focus-visible::after,
.ul[aria-current='page']::after { transform: scaleX(1); transform-origin: left; }
.ul[aria-current='page']::after { background: #1d2541; }

@media (prefers-reduced-motion: reduce) {
  .ul::after { transition: none; }
}
```

**ポイント**

- `width` ではなく `transform: scaleX` で伸ばすと、レイアウトの再計算が起きず軽く動きます
- `transform-origin` を状態ごとに切り替えるのがこの演出の肝です。「乗せたら left、離れたら right」まで指示文に書いておくと、この動きになります

## 4. マーカーアニメーション（Highlighter animation）

大事な言葉の下に、蛍光ペンで線を引くように色の帯が伸びる演出です。日本のLPでは定番の演出です。「マーカーっぽく」だけだと背景色を変えるだけの実装も返ってきうるので、「左から伸ばす」まで書きます。

**指示文の例**

> 見出しと本文の大事な言葉に「マーカーアニメーション（highlighter animation）」を付けてください。対象は `<mark class="marker">` で囲み、文字の下45%に #ffdf6b の帯を linear-gradient で描いてください。最初は background-size を 0% にしておき、要素がすべて画面に入ったら0.5秒で 100% まで伸ばして、左から蛍光ペンを引いたように見せてください。判定は IntersectionObserver（threshold: 1）で行い、一度引いたら監視をやめてください。2行にまたがっても切れずに続くようにしてください。prefers-reduced-motion: reduce の人には最初から線を引いた状態で見せてください。

```css
.marker {
  color: inherit;
  background-color: transparent; /* mark の黄色い背景を消す */
  background-image: linear-gradient(transparent calc(100% - 45%), #ffdf6b 0);
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 0% 100%; /* 最初は幅0 */
  transition: background-size 0.5s ease-out;
  padding: 0 2px;
}
.marker.is-on {
  background-size: 100% 100%; /* 左から右へ伸ばす */
}
@media (prefers-reduced-motion: reduce) {
  .marker { background-size: 100% 100%; transition: none; }
}
```

JavaScriptはフェードインとほぼ同じで、クラス名を `is-on`、オプションを `{ threshold: 1 }`（言葉が全部見えてから引く）にするだけです。

**ポイント**

- `::after` で線を描く方法だと、2行に折り返したとき1行目にしか引かれません。インライン要素の `background` で描くと、折り返しても自然につながります
- `<mark>` を使うと、読み上げソフトや検索エンジンにも「強調された語」として伝わります

## 5. スクロールプログレスバー（Scroll progress bar）

記事を読んだ割合を、画面上端の細い線で見せる演出です。長い記事で「あとどれくらいか」を伝えるのに効きます。

**指示文の例**

> 記事ページに「スクロールプログレスバー（reading progress bar、読了バー）」を付けてください。画面の上端（追従ヘッダーの真下）に太さ4px・色 #f06a35 の線を position: sticky で固定し、読み進めた割合（スクロール量÷スクロールできる最大量）だけ左から伸ばしてください。伸ばすのは width ではなく transform: scaleX で、scroll イベントは requestAnimationFrame で間引いてください。線には role="progressbar" と aria-valuenow を付けて、読み上げにも割合が伝わるようにしてください。ライブラリは使わないでください。transition は付けず、スクロールにそのまま合わせてください。

```html
<div class="progress" role="progressbar" aria-label="記事を読んだ割合"
     aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
  <span class="progress-bar"></span>
</div>
```

```css
.progress {
  position: sticky;
  top: 0;
  z-index: 10;
  height: 4px;
  background: #e4e2dc;
}
.progress-bar {
  display: block;
  height: 100%;
  background: #f06a35;
  transform: scaleX(var(--p, 0)); /* 0〜1 で伸び縮み */
  transform-origin: left center;
}
```

```js
const progress = document.querySelector('.progress');
let ticking = false;

function update() {
  ticking = false;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  progress.style.setProperty('--p', p);
  progress.setAttribute('aria-valuenow', Math.round(p * 100));
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}, { passive: true });
window.addEventListener('resize', update);
update();
```

**ポイント**

- JavaScriptからは割合をCSS変数 `--p` に渡すだけにして、見た目はCSS側に任せると、色や太さの変更がCSSだけで済みます
- 線に `transition` を付けると「追いかけてくる」感じが出ますが、スクロールとずれて見えます。付けないのがおすすめです

## 6. マーキー（Marquee）

導入企業のロゴや名前が、横に流れ続ける帯です。つなぎ目なく流すには「同じ並びを2回並べて、半分動いたら最初に戻す」のが定番の作り方です。

**指示文の例**

> 導入企業の名前を並べた帯を「マーキー（marquee）」にしてください。同じ並びを2回続けて並べ、CSSの @keyframes で transform: translateX(0) から translateX(-50%) へ、1周20秒・linear・無限に動かして、つなぎ目が見えないようにしてください。項目と項目の間隔は32pxにし、2つの並びの間にも同じ間隔を空けてください。2回目の並びには aria-hidden="true" を付けて読み上げが重複しないようにし、マウスを乗せたら animation-play-state: paused で止めてください。prefers-reduced-motion が reduce の人にはアニメーションを止めてください。JavaScriptやライブラリは使わないでください。

```html
<div class="marquee">
  <div class="marquee-track">
    <ul class="marquee-set">
      <li>山の宿</li><li>まちの本屋</li><li>みなと珈琲</li><li>森のパン工房</li>
    </ul>
    <!-- 同じ並びをもう1回。読み上げでは重複させない -->
    <ul class="marquee-set" aria-hidden="true">
      <li>山の宿</li><li>まちの本屋</li><li>みなと珈琲</li><li>森のパン工房</li>
    </ul>
  </div>
</div>
```

```css
.marquee { overflow: hidden; }
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 20s linear infinite;
}
.marquee-set {
  display: flex;
  gap: 32px;
  margin: 0;
  padding: 0 32px 0 0; /* 2つの並びの間もそろえる */
  list-style: none;
  white-space: nowrap;
}
@keyframes marquee {
  to { transform: translateX(-50%); }
}
.marquee:hover .marquee-track { animation-play-state: paused; }

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
```

**ポイント**

- 2つ目の並びの右側に `gap` と同じ `padding` を入れないと、1周するたびに一瞬だけ間隔が詰まって「カクッ」と見えます
- 古い `<marquee>` タグは非推奨です。名前が同じなので、取り違えを防ぐために「CSSの @keyframes で」と添えておきます

## 名前が分からないときは

ここまでの6つは名前を知っていれば頼めますが、困るのは「あのサイトのあの動き、何て言うんだっけ」というときです。

そのために、よく使う動き32種を動く見本つきで名前から引ける [Webの動きの図鑑](https://motytools.com/ugoki/) を作りました。各ページに「使う場面・使わない場面」「似た動きとの違い」と、この記事と同じ型の指示文が載っています。

各ページの見本の下にはつまみ（スライダー）があり、たとえばフェードインの「出てくる速さ」を0.5秒から0.3秒に動かすと、**見本の動き・CSSのコード・AIへの指示文の数値が同時に変わります**。目で見てちょうどいい数値を決めて、そのままコピーしてAIに貼れます。[フェードインのページ](https://motytools.com/ugoki/fade-in/) で試せます。

## まとめ

- 「いい感じに動かして」には仕様が入っていない。AIは毎回ちがう「平均的に派手な何か」を返す
- **名前（日英）＋付ける場所＋数字＋動きを減らす設定への配慮**の4点セットで頼むと、ぶれがほぼなくなる
- 実装面では「`transform` で動かす」「`:hover` は `@media (hover: hover)` に入れる」「JSが動かないときに中身が消えない」の3つを指示文に入れておくと、AIの出力の質が目に見えて上がる

動きだけでなく、モーダル・ドロワー・ボトムシートのような画面の部品についても、同じ形式で30種まとめた [UI部品の図鑑](https://motytools.com/ui/) があります。部品の名前と使い分けに迷ったときにどうぞ。
