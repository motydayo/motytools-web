import type { Ugoki } from '../types';

export default {
  slug: 'progress-bar',
  no: 7,
  category: 'scroll',
  name: 'スクロールプログレスバー',
  en: 'Scroll progress bar',
  aka: ['読了バー', '読み進みバー', 'リーディングプログレスバー', 'reading progress bar', 'スクロールインジケーター'],
  mode: 'scroll',
  title: 'スクロールプログレスバー（読了バー）の作り方｜CSSとJS【見本つき】',
  description:
    '記事をどこまで読んだかを画面上端の線で見せる「スクロールプログレスバー」を動く見本で解説。JavaScript十数行での作り方、CSSだけで作る新しい書き方、読み上げへの配慮、AIへの指示文まで。',
  oneLine: '画面の上端の線が、読み進めた分だけ左から伸びていく。',
  what: [
    'ページの上端に細い線を置き、スクロールして読み進めた割合だけ、線が左から右へ伸びていく演出です。ページの最後まで読むと、線は右端まで届きます。「読了バー」とも呼ばれ、ブログやニュースの記事でよく使われます。',
    '見本では、上端に固定したヘッダーの下にオレンジの線があり、右上の数字が読んだ割合を表しています。縦長の記事は、スクロールバーが細くて「あとどれくらい残っているか」が分かりにくいもの。残りの量が見えると、最後まで読む気持ちを後押しできます。',
  ],
  when: [
    'ブログやオウンドメディアの長い記事で、残りの量を見せて最後まで読んでもらいたいとき',
    '解説記事・ハウツー記事など、読み終えるのに数分かかるページ',
    '利用規約やマニュアルなど、どこまで読んだか分かると助かる長い文書',
    'ヘッダーを上端に固定していて、その下に細い線を足すだけで済むとき',
  ],
  avoid: [
    '1〜2画面で読み終わる短いページ（すぐに右端まで届いて意味がない）',
    '下に一覧が無限に続くページ（ページの長さが変わり、線が伸びたり縮んだりする）',
    'ネットショップの商品ページなど、最後まで読むことが目的ではないページ',
  ],
  prompt:
    '記事ページに「スクロールプログレスバー（reading progress bar、読了バー）」を付けてください。画面の上端（追従ヘッダーの真下）に太さ{{thick:t}}・色 {{color}} の線を position: sticky で固定し、読み進めた割合（スクロール量÷スクロールできる最大量）だけ左から伸ばしてください。伸ばすのは width ではなく transform: scaleX で、scroll イベントは requestAnimationFrame で間引いてください。線には role="progressbar" と aria-valuenow を付けて、読み上げにも割合が伝わるようにしてください。ライブラリは使わないでください。線が追いつくまでの時間（transform の transition）は{{lag:t}}にしてください。0なら transition を付けず、スクロールにそのまま合わせます（動きを減らす設定 prefers-reduced-motion の人にも負担が小さいため、これがおすすめです）。',
  howTo: [
    '割合の計算は「いまのスクロール量 ÷ スクロールできる最大量（ページの高さ − 画面の高さ）」の1行です。0なら先頭、1なら最後まで読んだことになります。この値を線の横の伸び縮み（transform: scaleX）にそのまま入れ、左端を起点に伸ばします。',
    'width を書き換えるより transform の方がブラウザの負担が小さく、スクロール中もなめらかです。scroll イベントは requestAnimationFrame（画面の描き替えに合わせて1回だけ実行する仕組み）でまとめて処理します。なお、新しいブラウザではCSSの animation-timeline: scroll() でJavaScriptなしでも作れますが、まだ対応していないブラウザがあるため、ここではJavaScriptで作っています。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="progress" role="progressbar" aria-label="記事を読んだ割合"
     aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
  <span class="progress-bar"></span>
</div>

<article>
  <h1>はじめての山歩き、準備で外せない4つのこと</h1>
  <!-- 本文 -->
</article>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.progress {
  position: sticky; /* ヘッダーがあるなら、その中か真下に置く */
  top: 0;
  z-index: 10;
  height: {{thick}};
  background: #e4e2dc;
}
.progress-bar {
  display: block;
  height: 100%;
  background: {{color}};
  transform: scaleX(var(--p, 0)); /* 0〜1 で伸び縮み */
  transform-origin: left center;  /* 左端を起点にする */
  transition: transform {{lag}} ease-out; /* 0s（付けない）がおすすめ */
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const progress = document.querySelector('.progress');
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
update();`,
    },
  ],
  tune: [
    { key: 'thick', label: '線の太さ', min: 2, max: 10, step: 1, value: 4, unit: 'px' },
    { key: 'color', type: 'color', label: '線の色', value: '#f06a35' },
    { key: 'lag', label: '線が追いつくまでの時間', min: 0, max: 0.6, step: 0.05, value: 0, unit: 's' },
  ],
  cautions: [
    'フッターや関連記事の一覧まで含めて計算すると、本文を読み終えても線が右端まで届きません。本文（article）の範囲だけで割合を出すと、より正確になります。',
    '画像の読み込みでページの高さが後から変わると、割合がずれます。resize のときに加え、画像が読み込まれたあとにも計算し直してください。',
    '線の色は背景と十分な差（3:1以上）をつけてください。細い線なので、薄い色だとほとんど見えません。',
    'スクロールに合わせて伸びるだけの控えめな動きなので、動きを減らす設定の人にも大きな負担はありません。気になる場合は transition を付けず、スクロールにそのまま合わせてください。',
  ],
  similar: [
    {
      slug: 'scrollspy',
      diff: 'スクロールスパイは、目次の中で「いま読んでいる見出し」を色で示します。プログレスバーは見出しに関係なく、全体の何割まで来たかを線の長さで示します。',
    },
    {
      slug: 'sticky-header',
      diff: '追従ヘッダーはメニューを上端に残す演出です。プログレスバーはその下に足して使うことが多く、組み合わせて使うのが定番です。',
    },
    {
      slug: 'back-to-top',
      diff: '「上に戻る」ボタンは先頭へ戻るための部品です。プログレスバーは位置を知らせるだけで、押して移動はしません。',
    },
  ],
  faq: [
    {
      q: 'スクロールプログレスバーはCSSだけで作れますか？',
      a: '新しいブラウザでは、animation-timeline: scroll() を使ってCSSだけで作れます。ただし対応していないブラウザでは線が伸びないため、今はJavaScriptで作るか、CSS版に加えてJavaScriptの予備を用意するのが確実です。',
    },
    {
      q: '線を画面の一番上ではなく、ヘッダーの下に出したいです。',
      a: 'ヘッダーの中の一番下に線を入れるのが簡単です。ヘッダーを position: sticky で上端に固定していれば、線も一緒に上端に残ります。見本もこの作り方です。',
    },
    {
      q: '読了バーを付けると、最後まで読まれるようになりますか？',
      a: '残りの量が分かると読み進めやすくなる、という考え方で使われる演出ですが、効果はページの内容によって変わります。付ける前後で「最後までスクロールした人の割合」を測って確かめるのがおすすめです。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
