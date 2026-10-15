import type { Ugoki } from '../types';

export default {
  slug: 'before-after',
  no: 15,
  category: 'pointer',
  name: 'ビフォーアフタースライダー',
  en: 'Before/after slider',
  aka: ['比較スライダー', 'ビフォーアフター画像', '画像比較スライダー', 'コンペアスライダー'],
  mode: 'script',
  title: 'ビフォーアフタースライダーの作り方｜2枚の写真を比べるHTML・CSS・JS',
  description:
    '2枚の写真を重ね、つまみを左右にドラッグして見比べる「ビフォーアフタースライダー」を見本で解説。input type="range"とclip-pathで作る方法、キーボードとスマホでの操作、AIへの指示文まで。',
  oneLine: 'つまみを左右に動かして、前と後の写真を見比べる。',
  what: [
    '同じ構図の「前」と「後」の写真を重ね、真ん中の縦線とつまみを左右に動かすと、境目から左が前・右が後に切り替わって見える部品です。見本では、くすんだ写真が色補正でどれだけ鮮やかになったかを、つまみを動かして確かめられます。',
    '2枚を横に並べるより、同じ場所の違いがはっきり分かるのが価値です。見る人が自分で動かして確かめるので、「本当に変わった」という納得につながります。',
  ],
  when: [
    'リフォーム・外壁塗装・ハウスクリーニングの施工事例で、前と後を見せたいとき',
    '写真の加工・レタッチ・画像を高画質にするサービスの効果を見せたいとき',
    '美容室・エステ・歯科などで、施術の前後を比べて見せたいとき（掲載の同意と広告の決まりを守ったうえで）',
    'Webサイトのリニューアル事例で、古いデザインと新しいデザインを比べたいとき',
  ],
  avoid: [
    '構図がそろっていない2枚の写真（境目でずれて、かえって比べにくい）',
    '違いが細かすぎて、横に並べた方が分かりやすい写真',
    '1ページに何個も並べる使い方（どれを動かしているか分からなくなる）',
  ],
  prompt:
    '施工事例に「ビフォーアフタースライダー（before/after slider）」を作ってください。同じ大きさの「前」と「後」の画像を重ね、上に重ねた「前」を clip-path: inset(0 calc(100% - var(--pos)) 0 0) で切り取ります。操作は全面に重ねた透明の input type="range"（0〜100）で受け、値を CSS変数 --pos に入れてください。これでドラッグ・タップ・キーボードの左右キーがそのまま使えます。境目には白い縦線と、直径44pxの丸いつまみ（左右の矢印アイコン）を出します。スライダーには aria-label を付け、縦のスクロールを邪魔しないよう touch-action: pan-y にしてください。境目は操作に合わせて動かすだけにし、勝手に動くアニメーションは付けないでください（動きを減らす設定 prefers-reduced-motion の人にも負担がないように）。ライブラリは使わないでください。',
  howTo: [
    '「後」の画像の上に「前」の画像を重ね、「前」の右側を clip-path（要素の一部だけを見せるCSSの指定）で切り取ります。切り取る位置をCSS変数 --pos に入れておけば、その数字を変えるだけで境目が動きます。',
    '操作には input type="range"（つまみを動かして数字を選ぶ、HTML標準の部品）を使い、画像の全面に透明にして重ねます。自分でドラッグの処理を書かなくても、マウスのドラッグ・スマホの指・キーボードの左右キーがすべて最初から動き、読み上げソフトにも「スライダー」と伝わります。JavaScriptは、選ばれた数字を --pos に渡す1行だけです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="ba" style="--pos: 50%">
  <img class="ba-after" src="after.jpg" alt="補正後の写真" width="800" height="450">
  <img class="ba-before" src="before.jpg" alt="補正前の写真" width="800" height="450">
  <div class="ba-handle" aria-hidden="true">
    <span class="ba-knob">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
      </svg>
    </span>
  </div>
  <input class="ba-range" type="range" min="0" max="100" value="50"
    aria-label="補正前と補正後の境目">
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.ba {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  user-select: none;
}
.ba img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* 「前」の右側を、境目の位置から切り取る */
.ba-before { clip-path: inset(0 calc(100% - var(--pos)) 0 0); }

.ba-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--pos);
  width: 3px;
  margin-left: -1.5px;
  background: #fff;
  pointer-events: none;
}
.ba-knob {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  margin: -22px 0 0 -22px;
  border-radius: 50%;
  background: #fff;
  color: #1d2541;
  box-shadow: 0 4px 14px -4px rgba(0, 0, 0, 0.4);
}
/* 操作は、全面に重ねた透明のスライダーで受ける */
.ba-range {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  appearance: none; /* つまみの形を変えるのに必要 */
  background: transparent;
  opacity: 0;
  cursor: ew-resize;
  touch-action: pan-y; /* 縦のスクロールはページに任せる */
}
.ba-range::-webkit-slider-thumb { appearance: none; width: 44px; height: 100%; }
.ba-range::-moz-range-thumb { width: 44px; height: 100%; border: 0; }
/* キーボードで選んだら、つまみに枠を出す */
.ba:has(.ba-range:focus-visible) .ba-knob { outline: 3px solid #4f73d9; outline-offset: 2px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `document.querySelectorAll('.ba').forEach((ba) => {
  const range = ba.querySelector('.ba-range');
  range.addEventListener('input', () => {
    ba.style.setProperty('--pos', range.value + '%');
  });
});`,
    },
  ],
  cautions: [
    'スマホでは指でつまみを左右になぞって動かします。画像の上を縦になぞったときはページがスクロールするよう、スライダーに touch-action: pan-y を付けておきます。付けないと、画像の上で指を置いたままスクロールできなくなることがあります。',
    '2枚の画像は、同じ大きさ・同じ構図で書き出してください。少しでもずれていると、境目で物が二重に見えて比較になりません。',
    '透明にしたスライダーは目に見えないので、キーボードで選ばれたことが分かるよう、つまみ側に焦点の枠を出します（:has() が使えない古いブラウザでは枠が出ないので、気になる場合はJavaScriptでクラスを付けます）。',
    '「前」と「後」がどちら側か分かるよう、左右の下に BEFORE・AFTER の札を付けておくと迷いません。',
    '美容・医療の前後写真は、広告の決まり（医療広告ガイドラインなど）で載せ方に制限がある場合があります。掲載前に確認してください。',
  ],
  similar: [
    {
      slug: 'image-zoom',
      diff: '画像ズームは1枚の写真に乗せたときに寄って見せる反応です。ビフォーアフターは2枚の写真を自分で動かして見比べる部品です。',
    },
    {
      slug: 'horizontal-scroll',
      diff: '横スクロールは何枚もの写真やカードを横に送って見る作りです。ビフォーアフターは2枚を重ねて、境目だけを動かします。',
    },
  ],
  faq: [
    {
      q: 'ビフォーアフタースライダーをCSSだけで作れますか？',
      a: 'CSSの resize を使う作り方などもありますが、スマホで動かしにくく、キーボード操作もできません。input type="range" と数行のJavaScriptで作る方が、スマホでもキーボードでも安定して動きます。',
    },
    {
      q: 'スマホでつまみがうまく動きません。',
      a: 'スライダーが画像の全面を覆っているか、touch-action: pan-y を付けているかを確認してください。つまみの当たり判定（::-webkit-slider-thumb の幅）が細いと指でつかみにくいので、44px以上にします。',
    },
    {
      q: 'WordPressでビフォーアフターを付けるには？',
      a: 'プラグインを使う方法と、カスタムHTMLのブロックに上のコードを貼る方法があります。コードを貼る場合は、CSSを追加CSSに、JavaScriptをフッターに入れると動きます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
