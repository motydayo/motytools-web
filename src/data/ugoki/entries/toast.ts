import type { Ugoki } from '../types';

export default {
  slug: 'toast',
  no: 30,
  category: 'inform',
  name: 'トースト通知',
  en: 'Toast notification',
  aka: ['トースト', 'スナックバー', 'ポップアップ通知', '完了メッセージ', '元に戻す通知'],
  mode: 'script',
  title: 'トースト通知の作り方と使いどころ｜「元に戻す」付きの見本とコード',
  description:
    '画面の下にさっと出て数秒で消えるトースト通知を動く見本で解説。role="status"での読み上げ対応、「元に戻す」ボタンの付け方、マウスを乗せると消えるまでの時間が止まる工夫、大事なエラーに使ってはいけない理由まで分かります。',
  oneLine: '操作の結果が画面の下に小さく出て、数秒で自然に消える。',
  what: [
    'お気に入りのハートを押すと、その宿が一覧からすっと消え、画面の下に『「海の宿」をお気に入りから外しました』という帯（トースト）が出ます。帯の中の「元に戻す」を押せば宿が一覧に戻ります。何もしなければ、下のオレンジの線が縮み切った5秒後に帯は消えます。',
    'トーストは、操作がうまくいったことを、作業の手を止めずに伝える通知です。「本当に外しますか？」と毎回確認する小窓を出す代わりに、すぐ実行して「元に戻す」を用意すれば、操作は速いまま、間違えたときにも取り返せます。マウスを乗せている間やキーボードの焦点がある間は、消えるまでの時間が止まります。',
  ],
  when: [
    'お気に入りやカートへの追加・削除など、すぐ取り消せる操作の結果を知らせたいとき',
    '設定や下書きを保存したとき、「保存しました」と一言だけ返したいとき',
    'メールやメッセージを送ったあと、「送信しました」と「取り消す」を出したいとき',
    'URLやクーポンコードをコピーしたとき、「コピーしました」と伝えたいとき',
  ],
  avoid: [
    '支払いの失敗・入力エラー・通信が切れたなど、読み逃すと困る大事なエラー（数秒で消えるトーストだけでは見落とされる）',
    '読んでから選ぶ必要がある質問（「保存しますか？」など。確認の小窓や画面内の表示にする）',
    '一度に何件も続けて出る通知（重なって読めない。まとめて1件にする）',
  ],
  prompt:
    '操作の結果を「トースト通知（toast notification）」で知らせてください。画面の下中央に紺色の角丸の帯を position: fixed で出し、下から{{rise:t}}ずれた位置から{{enter:t}}の減速でせり上がり、{{show:t}}たったら0.2秒かけて消えるようにします。帯の中には結果の文と「元に戻す」ボタンを置き、押したら操作を取り消してください。帯は role="status" の箱の中に置き、文を書き換えて読み上げソフトに伝えます。マウスが乗っている間とキーボードの焦点がある間は、消えるまでの時間を止めてください。動きを減らす設定の人にはせり上がりをなくし、フェードだけにすること。ライブラリは使わず、大事なエラーはトーストではなく画面内に表示してください。',
  howTo: [
    'トーストの箱は最初から role="status"（中の文が変わったら、読み上げソフトが手を止めずに読む場所）としてHTMLに置いておき、出すときに文を書き換えてクラスを付けます。箱を後からJavaScriptで作ると、読み上げソフトが変化に気付かないことがあるからです。',
    '消えるまでの5秒は、帯の下の細い線を縮めるCSSアニメーションで数えます。線が縮み切ったとき（animationend）に帯を消せば、:hover と :focus-within で animation-play-state: paused にするだけで「乗せている間は止まる」ができます。隠すときは visibility: hidden も付け、見えない「元に戻す」にキーボードの焦点が入らないようにします。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="remove" data-name="海の宿">お気に入りから外す</button>

<!-- 最初から置いておく（中の文が変わると読み上げられる） -->
<div class="toast" role="status">
  <span class="toast-msg"></span>
  <button type="button" class="toast-undo">元に戻す</button>
  <i class="toast-timer" aria-hidden="true"></i>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.toast {
  position: fixed;
  left: 50%;
  bottom: 16px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: calc(100% - 32px);
  padding: 8px 8px 8px 16px;
  border-radius: 10px;
  background: #1d2541;
  color: #fff;
  overflow: hidden;
  /* 隠れているとき（visibility で焦点も入らなくする） */
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, {{rise}});
  transition: opacity 0.2s ease-in, transform 0.2s ease-in, visibility 0s linear 0.2s;
}
.toast.is-shown {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
  transition: opacity {{enter}} ease-out, transform {{enter}} ease-out, visibility 0s;
}
.toast-undo {
  min-height: 36px;
  padding: 0 12px;
  border: 0;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffb08e;
  font-weight: 700;
  cursor: pointer;
}
/* 残り時間の線（表示時間で縮み切る）。乗せている間・焦点がある間は止める */
.toast-timer {
  position: absolute; left: 0; bottom: 0;
  width: 100%; height: 3px;
  background: #f06a35;
  transform-origin: left;
}
.toast.is-shown .toast-timer { animation: toast-timer {{show}} linear forwards; }
.toast:hover .toast-timer,
.toast:focus-within .toast-timer { animation-play-state: paused; }
@keyframes toast-timer { to { transform: scaleX(0); } }

@media (prefers-reduced-motion: reduce) {
  .toast, .toast.is-shown { transform: translate(-50%, 0); }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const toast = document.querySelector('.toast');
const msg = toast.querySelector('.toast-msg');
const undoBtn = toast.querySelector('.toast-undo');
let undo = null; // 取り消すときにやること

function showToast(text, onUndo) {
  msg.textContent = text;
  undo = onUndo;
  toast.classList.remove('is-shown');
  void toast.offsetWidth; // 残り時間の線を最初から動かし直す
  toast.classList.add('is-shown');
}
const hideToast = () => toast.classList.remove('is-shown');

// 線が縮み切ったら消す
toast.querySelector('.toast-timer').addEventListener('animationend', hideToast);
undoBtn.addEventListener('click', () => {
  undo?.();
  hideToast();
});

// 使い方の例: 押したらすぐ外して、「元に戻す」を出す
document.querySelectorAll('.remove').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('li') ?? btn;
    item.hidden = true;
    showToast(\`「\${btn.dataset.name}」をお気に入りから外しました\`, () => {
      item.hidden = false;
      btn.focus(); // キーボードの焦点を元の場所へ戻す
    });
  });
});`,
    },
  ],
  tune: [
    { key: 'show', label: '表示しておく時間', min: 2, max: 10, step: 0.5, value: 5, unit: 's' },
    { key: 'enter', label: '出る速さ', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
    { key: 'rise', label: 'せり上がる距離', min: 0, max: 40, step: 4, value: 16, unit: 'px' },
  ],
  cautions: [
    '大事なエラーをトーストだけで済ませないでください。数秒で消えるので、目を離していた人・読むのが遅い人・拡大して見ている人は気付けません。支払いの失敗や入力の誤りは、その場所の近くに消えない文で出します。',
    '消えるまでの時間は短すぎないようにします。文と「元に戻す」がある場合は5秒以上が目安で、マウスが乗っている間・焦点がある間は止めてください。キーボードで「元に戻す」までたどり着く時間も必要です。',
    'role="status" の箱は最初からページに置いておき、文だけを書き換えてください。表示のたびに箱ごと作ると、読み上げソフトが読まないことがあります。急ぎでないお知らせに role="alert" を使うと、読んでいる途中の文を遮ってしまいます。',
    'スマホでは、画面下の固定ボタンやタブバーにトーストが被らないよう、bottom の位置をその分だけ上げてください。',
  ],
  similar: [
    {
      slug: 'exit-intent',
      diff: '離脱防止ポップアップは画面の中央に出て、閉じるまで作業を止めます。トーストは画面の端に小さく出て、作業を止めずに自然に消えます。',
    },
    {
      slug: 'back-to-top',
      diff: '上に戻るボタンも画面の下に浮かぶ部品ですが、ページを読んでいる間ずっと残ります。トーストは操作の結果を知らせたら数秒で消えます。',
    },
  ],
  faq: [
    {
      q: 'トーストとスナックバーの違いは何ですか？',
      a: 'ほぼ同じものです。GoogleのMaterial Designでは、画面の下に出て「元に戻す」などの操作を1つ持てる通知を「スナックバー」と呼んでいます。一般には、どちらも数秒で消える小さな通知をまとめて「トースト」と呼ぶことが多いです。',
    },
    {
      q: 'トーストは何秒で消すのがいいですか？',
      a: '短い完了の一言なら3〜4秒、「元に戻す」などのボタンがあるなら5〜10秒が目安です。マウスが乗っている間とキーボードの焦点がある間は止めて、読み終わる前に消えないようにしてください。',
    },
    {
      q: 'トーストの表示に alert() を使ってもいいですか？',
      a: 'おすすめしません。alert() は画面全体を止めて「OK」を押すまで何もできなくなり、見た目も変えられません。作業を止めずに結果を知らせたいなら、この記事のトーストのように画面の中に表示してください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
