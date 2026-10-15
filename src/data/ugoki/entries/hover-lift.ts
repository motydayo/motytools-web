import type { Ugoki } from '../types';

export default {
  slug: 'hover-lift',
  no: 9,
  category: 'pointer',
  name: 'ホバーで浮き上がる',
  en: 'Hover lift',
  aka: ['ホバーリフト', 'カードが浮く', 'ホバーで影', 'リフトアップ'],
  mode: 'pointer',
  title: 'ホバーで浮き上がるカードの作り方｜CSSのtransformと影【見本つき】',
  description:
    'マウスを乗せるとカードがふわっと浮く「ホバーで浮き上がる」演出を動く見本で解説。transformとbox-shadowだけで作るCSS、スマホでの扱い、AIに頼むときの指示文までまとめました。',
  oneLine: 'マウスを乗せたカードが、影をつけて少し浮き上がる。',
  what: [
    'カードやボタンにマウスを乗せると、数ピクセルだけ上へ持ち上がり、下に影が落ちる演出です。見本では宿の写真カードに矢印が乗るたび、そのカードだけが浮いて「これは押せる」「いまこれを選ぼうとしている」と伝えます。',
    '動きはごく小さいので、ページ全体のじゃまをしません。並んだカードのどれを指しているかがはっきりするため、一覧ページやプラン選択で迷いにくくなります。',
  ],
  when: [
    '宿・商品・記事などのカードが並ぶ一覧で、押せるカードだと気づいてほしいとき',
    '料金プランを3つ並べたLPで、選ぼうとしているプランを目立たせたいとき',
    '制作会社の実績ページで、作品の一覧に軽い手ざわりを足したいとき',
    'ブログのおすすめ記事欄など、文字だけでは押せるかどうか分かりにくいとき',
  ],
  avoid: [
    '押しても何も起きない飾りのカード（浮くのに押せないと、裏切られた気分になる）',
    '表やフォームの入力欄など、ずれると読みにくく入力しにくい部品',
    'カードが密に詰まった一覧（浮いた影が隣のカードに重なって見にくい）',
  ],
  prompt:
    'カード一覧に「ホバーで浮き上がる（hover lift）」演出を付けてください。マウスを乗せたら transform: translateY で{{lift:t}}だけ上へ動かし、box-shadow で下に柔らかい影（濃さ {{shadow:t}}、浮いた距離に合わせて下へずらし広くぼかす）を付けます。時間は{{dur:t}}、緩急は ease-out。CSSだけで作り、JavaScriptは使わないでください。:hover は @media (hover: hover) の中に書き、スマホでは浮かせずに押した瞬間（:active）だけ scale(0.98) で少し縮めて沈んだように見せてください。キーボード操作のため :focus-visible でも同じ見た目にし、prefers-reduced-motion: reduce のときは動かさず影だけ変えてください。',
  howTo: [
    '作り方はCSSだけです。カードに transition を指定しておき、乗せたとき（:hover）に transform で少し上へ動かし、box-shadow で影を付けます。top や margin で動かすと周りの並びまで動いてしまうので、見た目だけを動かせる transform を使います。',
    'スマホにはマウスがないため、:hover を @media (hover: hover)（マウスなど乗せる操作ができる端末だけ）の中に入れます。こうするとスマホでタップしたあとカードが浮いたまま残る、というよくある不具合を防げます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="cards">
  <a class="card" href="/stay/mountain">
    <img src="mountain.jpg" alt="山の宿の外観" width="320" height="200">
    <span class="card-body">山の宿<small>1泊 12,000円〜</small></span>
  </a>
  <!-- カードを並べる -->
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.card {
  display: block;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  color: inherit;
  text-decoration: none;
  transition: transform {{dur}} ease-out, box-shadow {{dur}} ease-out;
}
.card img { display: block; width: 100%; height: auto; }

/* マウスのある端末だけ、乗せたら浮かせる */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-{{lift}});
    /* 影は浮いた距離の2倍下へ、4倍ぼかす */
    box-shadow: 0 calc({{lift}} * 2) calc({{lift}} * 4) -12px rgba(0, 0, 0, {{shadow:n}});
  }
}
/* キーボードで選んだときも同じ見た目に */
.card:focus-visible {
  transform: translateY(-{{lift}});
  box-shadow: 0 calc({{lift}} * 2) calc({{lift}} * 4) -12px rgba(0, 0, 0, {{shadow:n}});
  outline: 2px solid #4f73d9;
  outline-offset: 2px;
}
/* 押した瞬間は少し縮めて沈んだように見せる（スマホのタップにも反応が出る） */
.card:active { transform: scale(0.98); transition-duration: 0.1s; }

/* 動きを減らす設定なら、動かさず影だけ */
@media (prefers-reduced-motion: reduce) {
  .card, .card:hover, .card:focus-visible, .card:active { transform: none; }
}`,
    },
  ],
  tune: [
    { key: 'lift', label: '浮き上がる距離', min: 0, max: 20, step: 1, value: 6, unit: 'px' },
    { key: 'dur', label: '動く速さ', min: 0.05, max: 0.8, step: 0.05, value: 0.2, unit: 's' },
    { key: 'shadow', label: '影の濃さ', min: 0, max: 0.8, step: 0.05, value: 0.35, unit: '' },
  ],
  cautions: [
    'スマホにはマウスがないので「乗せる」操作がありません。スマホのブラウザはタップした要素に :hover を付けたまま残すことがあり、浮いたカードが戻らなく見えます。:hover は @media (hover: hover) の中に書いてください。',
    'カードの中身（値段・説明）を乗せたときだけ出す作りにすると、スマホの人にはずっと見えないままです。浮き上がりはあくまで「押せる」の合図にとどめ、情報は最初から出しておきます。',
    'top や margin-top で動かすと、まわりのカードの位置まで計算し直しになり、カクつきます。動かすのは transform だけにしてください。',
    'カードをdivにして中にリンクを入れるより、カード全体を1つの a 要素にすると、どこを押しても移動でき、キーボードでも1回で選べます。',
  ],
  similar: [
    {
      slug: 'image-zoom',
      diff: '画像ズームはカードの枠は動かさず、中の写真だけが大きくなります。浮き上がりはカード全体が持ち上がります。両方を同時に付けるのもよくある組み合わせです。',
    },
    {
      slug: 'magnetic-button',
      diff: 'マグネティックボタンはマウスの方向へボタンが引き寄せられます。浮き上がりは真上に少し動くだけで、マウスの位置には左右されません。',
    },
  ],
  faq: [
    {
      q: 'ホバーで浮き上がるのに、カクカクするのはなぜですか？',
      a: 'top や margin で動かしているか、box-shadow を大きくぼかしすぎている可能性があります。位置は transform: translateY で動かし、影のぼかしは30px前後までに抑えてください。それでも重いときは、影を疑似要素（::after）に付けて opacity だけを切り替える方法があります。',
    },
    {
      q: 'スマホでタップしたら浮いたまま戻りません。',
      a: 'スマホのブラウザが、タップした要素を「乗せたまま」と見なすためです。:hover の指定を @media (hover: hover) で囲むと、マウスのある端末でだけ浮くようになり、スマホでは起きなくなります。',
    },
    {
      q: '浮き上がる距離と時間はどれくらいがいいですか？',
      a: '距離は4〜8px、時間は0.15〜0.25秒が目安です。これより大きく遅いと、カードが跳ねて落ち着かない印象になります。影は距離に合わせて少し広げると、自然に浮いて見えます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
