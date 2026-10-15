import type { Ugoki } from '../types';

export default {
  slug: 'highlighter',
  no: 8,
  category: 'scroll',
  name: 'マーカーアニメーション',
  en: 'Highlighter animation',
  aka: ['マーカー線', '蛍光ペン風の下線', 'マーカーを引く演出', 'highlight on scroll', '黄色マーカー'],
  mode: 'scroll',
  title: 'マーカーアニメーションの作り方｜CSSで蛍光ペンを左から引く【見本】',
  description:
    '見出しや文の下に、蛍光ペンの線が左からスッと引かれる「マーカーアニメーション」を動く見本で解説。linear-gradientとbackground-sizeだけの作り方、2行にまたがるときのコツ、使いすぎの注意点、AIへの指示文まで。',
  oneLine: '見出しや文の下に、蛍光ペンの線が左からスッと引かれる。',
  what: [
    '大事な言葉の下半分に、蛍光ペンで線を引いたような色の帯を付け、その帯が画面に入ったときに左から右へスッと引かれていく演出です。紙の資料に蛍光ペンで線を引くのと同じで、「ここが大事」とひと目で伝わります。',
    '見本では「はじめての方も、1泊から」「全室に温泉がついた」など、読んでほしい言葉だけに黄色い線が引かれます。同じ画面に2つあるときは0.3秒ずらして順番に引くので、読む順番も自然に伝わります。線は最初から引いておくより、目の前で引かれる方が目に留まりやすくなります。',
  ],
  when: [
    'LP（紹介ページ）で、いちばん伝えたい一言を見出しの中で目立たせたいとき',
    '「キャンセル料無料」「送料無料」など、申し込みの不安を消す一言を強調したいとき',
    '料金や割引の数字など、読み飛ばしてほしくない部分',
    'ブログ記事で、要点の一文に目を留めてもらいたいとき',
  ],
  avoid: [
    '1画面に3か所以上引くとき（どれも目立たず、大事な所が分からなくなる）',
    'リンクの文字（下線や色と混ざって、押せるのかどうかが分かりにくくなる）',
    '濃い色の背景の上（黄色い帯が文字を読みにくくする）',
  ],
  prompt:
    '見出しと本文の大事な言葉に「マーカーアニメーション（highlighter animation）」を付けてください。対象は <mark class="marker"> で囲み、文字の下45%に黄色（#ffdf6b）の帯を linear-gradient で描いてください。最初は background-size を 0% にしておき、要素がすべて画面に入ったら0.5秒で 100% まで伸ばして、左から蛍光ペンを引いたように見せてください。判定は IntersectionObserver（threshold: 1）で行い、一度引いたら監視をやめてください。2行にまたがっても切れずに続くようにしてください。prefers-reduced-motion: reduce の人には最初から線を引いた状態で見せてください。',
  howTo: [
    '線の正体は背景のグラデーションです。linear-gradient(transparent 55%, 黄色 55%) と書くと、上55%が透明・下45%が黄色の帯になります。この背景の幅（background-size）を 0% から 100% へ transition で伸ばすと、左から線を引いているように見えます。画像もSVGも要りません。',
    'いつ引くかは IntersectionObserver（要素が画面に入ったかを教えてくれるブラウザの仕組み）で判断して、クラスを付けます。画像を読み込まず、文字はそのまま残るので、表示速度や検索エンジンへの影響はほとんどありません。見本では何度でも見られるよう画面から出ると消し直していますが、実際のサイトでは一度引いたら終わりにするのが一般的です。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<h2><mark class="marker">はじめての方も、1泊から</mark>気軽に。</h2>
<p>山の宿 ひかりは、<mark class="marker">全室に温泉がついた</mark>小さな宿です。</p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.marker {
  color: inherit;
  background-color: transparent; /* mark の黄色い背景を消す */
  /* 上55%は透明、下45%を蛍光ペンの色に */
  background-image: linear-gradient(transparent 55%, #ffdf6b 55%);
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 0% 100%; /* 最初は幅0 */
  transition: background-size 0.5s ease-out;
  padding: 0 2px;
}
.marker.is-on {
  background-size: 100% 100%; /* 左から右へ伸ばす */
}

/* 「動きを減らす」設定の人には、最初から引いておく */
@media (prefers-reduced-motion: reduce) {
  .marker { background-size: 100% 100%; transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-on');
    io.unobserve(entry.target); // 一度引いたら監視をやめる
  });
}, { threshold: 1 }); // 言葉が全部見えてから引く

document.querySelectorAll('.marker').forEach((el) => io.observe(el));`,
    },
  ],
  cautions: [
    '1ページに引く数は、大事な所だけ2〜4か所までにしてください。あちこちに引くと、どれも目立たなくなります。',
    '黄色の帯の上の文字は、背景との差（コントラスト）が下がります。文字は濃い色のままにし、帯の色は薄めの黄色にしてください。',
    '<mark> は「注目してほしい部分」を表すタグですが、読み上げソフトの多くは特別に読み分けません。強調の意味を伝えたいなら、言葉そのものを分かりやすく書くことが大切です。',
    'threshold: 1（全部見えてから）にすると、画面より長い文に付けたときは引かれません。長い文には付けないか、threshold を小さくしてください。',
  ],
  similar: [
    {
      slug: 'underline',
      diff: '下線アニメーションは、マウスを乗せたときにリンクの下に細い線が伸びる演出です。マーカーはスクロールで画面に入ったときに、太い帯が引かれます。',
    },
    {
      slug: 'fade-in',
      diff: 'フェードインは要素そのものを透明な状態から表示します。マーカーは文字は最初から見えていて、下の帯だけが動きます。',
    },
  ],
  faq: [
    {
      q: 'マーカーが2行目に折り返すと、どう見えますか？',
      a: 'この作り方なら、1行目の左端から引き始めて、1行目の右端まで行ったら2行目へ続くように伸びます。行ごとに別々に引きたいときは box-decoration-break: clone を付けますが、その場合は各行が同時に伸びます。',
    },
    {
      q: 'マーカーはCSSだけで作れますか？',
      a: '線を引く動きそのものはCSSだけで作れます。「画面に入ったときに引く」ためのきっかけだけ、IntersectionObserver で数行のJavaScriptを使います。最初から引かれていてよいなら、JavaScriptは不要です。',
    },
    {
      q: 'マーカーの色は黄色以外でもいいですか？',
      a: 'かまいません。サイトの色に合わせて薄いオレンジや水色を使うこともあります。ただし、文字が読みにくくならないよう、明るく薄い色を選んでください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
