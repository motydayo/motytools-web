import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'modal',
  no: 1,
  category: 'overlay',
  name: 'モーダル',
  en: 'Modal dialog',
  aka: ['モーダルウィンドウ', 'ダイアログ', 'ポップアップ', 'モーダルダイアログ'],
  mode: 'script',
  title: 'モーダルとは？ダイアログとの違いと<dialog>での作り方【見本つき】',
  description:
    'モーダル（モーダルウィンドウ）を触れる見本で解説。ポップアップやドロワーとの違い、HTMLの<dialog>とshowModal()で作る方法、Escで閉じる・後ろを触らせない・閉じたら元の場所に戻るといった決まりごと、AIに頼むときの指示文までまとめました。',
  oneLine: '画面の真ん中に小窓が出て、閉じるまで後ろは触れない。',
  what: [
    '今の画面の上に小窓を重ね、後ろを暗くして「まずこれに答えてください」と伝える部品です。見本では「予約内容を確認する」を押すと確認の小窓が出て、「予約する」か「やめる」を選ぶまで後ろのページは押せません。',
    'モーダルの価値は「ページを移動せずに、ひとつの判断に集中してもらえる」ことです。その代わり、利用者の作業を止めるので、本当に今決めてほしいことだけに使います。',
  ],
  when: [
    '予約・購入・削除など、取り消しにくい操作の直前に内容を確かめてもらうとき',
    'ログインや短い入力（名前の変更・メモの追加）を、今のページから離れずに済ませたいとき',
    '一覧の中の1件の詳細を、一覧の位置を失わずにさっと見せたいとき',
  ],
  avoid: [
    'ページを開いた直後に、頼まれてもいないお知らせや登録の勧誘を出すとき（追い払われるだけで嫌われる）',
    '長い文章や入力欄が多いフォーム（小窓の中でさらにスクロールが必要になるなら、普通のページにする）',
    'モーダルの上にさらにモーダルを重ねるとき（どれを閉じればいいか分からなくなる）',
  ],
  prompt:
    '予約の確認画面を「モーダル（modal dialog）」で作ってください。HTMLの <dialog> 要素と showModal() を使い、div を自作しないでください。小窓は画面の中央に出し、後ろには濃さ{{dim:t}}の暗幕（::backdrop）を敷いてください。開くときは{{dur:t}}かけて、{{scale:t}}倍の大きさから等倍へ、透明から不透明へ減速しながら出してください。閉じ方は「×ボタン」「やめるボタン」「Escキー」「暗幕を押す」の4つを用意し、閉じたら開く前に押したボタンへキーボードの焦点を戻してください。開いている間は後ろのページをスクロール・操作できないようにし、小窓には見出しを aria-labelledby で結びつけてください。動きを減らす設定（prefers-reduced-motion）の人には、動きなしで表示してください。',
  howTo: [
    '今は HTML の <dialog> 要素を使うのがいちばん確実です。JavaScript で showModal() を呼ぶだけで、画面の中央に出る・後ろを押せなくなる・Escキーで閉じる・暗幕（::backdrop）が付く、というモーダルの決まりごとがまとめて手に入ります。自作の div でこれを全部そろえるのは大変で、漏れが出やすい部分です。',
    '開閉の動きは CSS で付けます。[open] になった瞬間の見た目を @starting-style で「透明・少し小さい」と指定しておくと、開くたびに減速しながら現れます。暗幕を押して閉じる動作だけは <dialog> に入っていないので、数行の JavaScript で足します。見本は枠の中に収めるため div で作っていますが、仕組みは同じです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="open-btn">予約内容を確認する</button>

<dialog class="modal" aria-labelledby="modal-title">
  <form method="dialog">
    <button class="modal-x" value="cancel" aria-label="閉じる">×</button>
    <h2 id="modal-title">この内容で予約しますか？</h2>
    <p>11月3日（月）から1泊・大人2名・合計30,000円</p>
    <button value="cancel">やめる</button>
    <button value="ok">予約する</button>
  </form>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.modal {
  width: min(90vw, 360px);
  padding: 24px;
  border: 0;
  border-radius: 16px;
  /* 開閉の動き（出るときは減速） */
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out,
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.modal:not([open]) {
  opacity: 0;
  transform: scale({{scale:n}});
}
/* 開いた瞬間の「出発点」 */
@starting-style {
  .modal[open] { opacity: 0; transform: scale({{scale:n}}); }
}

/* 後ろの暗幕 */
.modal::backdrop {
  background: rgb(20 24 40 / {{dim:n}});
}

/* 開いている間は後ろをスクロールさせない */
body:has(dialog[open]) { overflow: hidden; }

@media (prefers-reduced-motion: reduce) {
  .modal { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const dialog = document.querySelector('.modal');
const openBtn = document.querySelector('.open-btn');

openBtn.addEventListener('click', () => dialog.showModal());

// 暗幕（小窓の外）を押したら閉じる
dialog.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close('cancel');
});

// 閉じたら結果を受け取る（焦点は開いたボタンへ自動で戻る）
dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'ok') {
    // 予約の処理
  }
});`,
    },
  ],
  tune: [
    { key: 'dim', label: '暗幕の濃さ', min: 0, max: 0.8, step: 0.05, value: 0.45, unit: '' },
    { key: 'dur', label: '開く速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
    { key: 'scale', label: '出始めの大きさ', min: 0.8, max: 1, step: 0.02, value: 0.94, unit: '' },
  ],
  cautions: [
    '閉じ方は1つでは足りません。×ボタン・キャンセルボタン・Escキー・暗幕を押す、の4つがそろっていて初めて「閉じ込められた」と感じさせずに済みます。',
    '開いている間に後ろのページがスクロールしてしまうと、閉じたときに位置がずれます。body:has(dialog[open]) { overflow: hidden; } で止めておきます。',
    'スマホでは画面の真ん中より、下からせり上がるボトムシートの方が親指が届きやすい場合があります。中身が選択肢の一覧なら、ボトムシートも検討してください。',
    '読み上げソフト向けに、小窓の見出しを aria-labelledby で結びつけます。<dialog> と showModal() を使えば「後ろが読み上げられない」状態は自動で作られます。',
  ],
  similar: [
    { slug: 'bottom-sheet', diff: 'ボトムシートは画面の下からせり上がる板です。スマホで選択肢を並べるときに向き、モーダルほど作業を止めない作りにもできます。' },
    { slug: 'drawer', diff: 'ドロワーは画面の端から引き出すメニュー用の板です。モーダルは真ん中に出て、ひとつの判断や入力に集中してもらうためのものです。' },
    { slug: 'exit-intent', book: 'ugoki', diff: '離脱防止ポップアップはモーダルの使い方の一つで、マウスがページの外へ出ようとした瞬間に自動で出します。押し付けがましくならない工夫が要ります。' },
  ],
  faq: [
    {
      q: 'モーダルとダイアログとポップアップは何が違いますか？',
      a: 'ダイアログは「利用者とやりとりする小窓」全般の呼び名で、そのうち閉じるまで後ろを操作できないものをモーダルと呼びます。ポップアップは画面に飛び出して出てくるもの全般を指す、もっと広い日常語です。AIに頼むときは「モーダル（modal dialog）」と書くと伝わります。',
    },
    {
      q: '<dialog> 要素はすべてのブラウザで使えますか？',
      a: '使えます。Chrome・Safari・Firefox・Edge の現行版はすべて対応しています。開閉の動きに使う @starting-style は比較的新しい指定ですが、対応していないブラウザでは動きなしで開閉するだけなので、壊れることはありません。',
    },
    {
      q: 'モーダルを閉じたあと、キーボードの焦点はどこへ行けばいいですか？',
      a: '開く前に押したボタンへ戻すのが決まりです。showModal() で開いた <dialog> は、閉じると自動でそこへ戻ります。自作の div で作る場合は、開く前の要素を覚えておき、閉じたときに focus() で戻します。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
