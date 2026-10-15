import type { Ugoki } from '../types';

export default {
  slug: 'scroll-snap',
  no: 6,
  category: 'scroll',
  name: 'スクロールスナップ',
  en: 'Scroll snap',
  aka: ['スナップスクロール', '1画面ずつスクロール', 'フルページスクロール', 'scroll-snap-type'],
  mode: 'scroll',
  title: 'スクロールスナップとは？CSSだけで1画面ずつ止める作り方【見本】',
  description:
    'スクロールすると1画面ずつピタッと止まる「スクロールスナップ」を動く見本で解説。CSSのscroll-snap-typeとscroll-snap-alignだけでの作り方、縦と横の使い分け、効かないときの原因、AIへの指示文まで。',
  oneLine: '少しスクロールして手を離すと、次の画面の頭にピタッと止まる。',
  what: [
    'スクロールを途中でやめても、近い方の区切りまで自動で動いて、画面1つ分ずつピタッと止まる演出です。写真を1枚ずつめくるような感覚で、中途半端な位置で止まって画像や見出しが半分切れる、ということがなくなります。',
    '見本では、宿の紹介を4つの画面に分けています。少しだけスクロールして手を離すと、次の画面の上端まで吸い付くように移動します。右の縦長の点は、いま何枚目かを表しています。昔はJavaScriptのライブラリで作っていましたが、今はCSSの数行で作れます。',
  ],
  when: [
    '旅館・ホテル・ブランドのLPで、写真を1画面に1枚ずつ大きく見せたいとき',
    '商品の特長を「1画面に1つ」で区切り、スライドのように見せたいとき',
    'スマホで、カードや写真を横に1枚ずつめくるカルーセル（横並びの切り替え）を作りたいとき',
    'プレゼン資料のような、章ごとに区切ったページを作りたいとき',
  ],
  avoid: [
    '1画面に収まらない長い文章があるページ（下の方を読もうとしても次の画面へ飛ばされる）',
    '記事・ブログ・料金表など、自分のペースで少しずつ読み進めたいページ',
    'ページの一部だけで使い、残りは普通に読ませたいとき（mandatory は吸い付きが強く、読みにくくなる）',
  ],
  prompt:
    'トップページを「スクロールスナップ（scroll snap）」にしてください。CSSだけで作り、JavaScriptやライブラリは使わないでください。html に scroll-snap-type: y mandatory; を指定し、各セクションを height: 100svh; にして scroll-snap-align: start; と scroll-snap-stop: always; を付け、1画面ずつ必ず止まるようにしてください。いま何枚目かが分かる点の目印を右端に置いてください。セクションの中身が画面に収まらないときは、そのセクションだけ高さを auto にし、吸い付きを proximity（近いときだけ吸い付く）に弱めてください。',
  howTo: [
    '作り方はCSSの2種類の指定だけです。スクロールする箱（ページ全体なら html）に scroll-snap-type: y mandatory（縦方向で、必ずどこかに止める）を付け、止めたい要素に scroll-snap-align: start（その要素の上端で止める）を付けます。各要素の高さを画面1つ分にすれば、1画面ずつ止まります。',
    'scroll-snap-stop: always を足すと、勢いよくスクロールしても途中の画面を飛ばさず、必ず1枚ずつ止まります。吸い付きを弱めたいときは mandatory を proximity（区切りの近くで手を離したときだけ吸い付く）に変えます。横向きにしたいときは x にして、要素を横に並べるだけです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="slide">
  <h2>波の音で目覚める朝</h2>
</section>
<section class="slide">
  <h2>海が見える和室</h2>
</section>
<section class="slide">
  <h2>地魚の炭火焼き</h2>
</section>
<section class="slide">
  <h2>1泊2食 18,000円〜</h2>
  <a href="/reserve">空室を見る</a>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* スクロールする箱（ページ全体なら html）に付ける */
html {
  scroll-snap-type: y mandatory; /* 縦方向で、必ずどこかに止める */
}
body { margin: 0; }

.slide {
  height: 100svh;              /* 画面1つ分（スマホのバーの出し入れにも強い） */
  display: grid;
  place-items: center;
  scroll-snap-align: start;    /* この要素の上端で止める */
  scroll-snap-stop: always;    /* 勢いよく動かしても1枚ずつ止める */
}
.slide:nth-child(odd) { background: #dfe8fb; }
.slide:nth-child(even) { background: #ffe3d4; }

/* 「動きを減らす」設定の人には、吸い付きを弱める */
@media (prefers-reduced-motion: reduce) {
  html { scroll-snap-type: y proximity; }
}`,
    },
  ],
  cautions: [
    'スクロールする箱を間違えると効きません。ページ全体なら html に、枠の中だけなら overflow: auto（または scroll）を付けた箱に scroll-snap-type を指定してください。',
    'スマホでは 100vh だとアドレスバーの分だけ高さがずれ、止まる位置が半端になることがあります。100svh を使ってください。',
    '中身が画面に収まらない画面があると、その下の方は読めなくなります。文字の多い画面は高さを auto にするか、proximity に弱めてください。',
    'スクロールの仕方そのものを変える演出なので、マウスのホイールやキーボードの矢印キー・スペースキーで1枚ずつ移れるか、実際に試して確かめてください。',
  ],
  similar: [
    {
      slug: 'pinning',
      diff: 'ピン留めはパネルを止めたまま中身を切り替えます。スクロールスナップは画面ごと次へ移り、区切りで止まります。',
    },
    {
      slug: 'smooth-scroll',
      diff: 'スムーススクロールは、リンクを押したときに目的の場所までなめらかに移動させる演出です。止まる位置を区切りにそろえる働きはありません。',
    },
    {
      slug: 'horizontal-scroll',
      diff: '横スクロール演出は縦スクロールで中身を横へ流します。スクロールスナップを横向き（x）にすると、指で横にめくって1枚ずつ止まる並びになります。',
    },
  ],
  faq: [
    {
      q: 'scroll-snap が効かないのはなぜですか？',
      a: 'scroll-snap-type を付けた箱が、実際にスクロールしている箱と違うことがほとんどです。ページ全体なら body ではなく html に付けてください。止めたい要素に scroll-snap-align を付け忘れている場合も効きません。',
    },
    {
      q: 'mandatory と proximity はどう使い分けますか？',
      a: 'mandatory は必ずどこかの区切りに止める強い指定で、1画面ずつ見せるスライドのようなページに向きます。proximity は区切りの近くで手を離したときだけ吸い付く弱い指定で、普通に読ませたいページに少しだけ使うときに向きます。',
    },
    {
      q: 'fullPage.js などのライブラリとどう違いますか？',
      a: '1画面ずつ止まる見た目は同じです。CSSの scroll-snap はブラウザ標準の機能なので、読み込むファイルが増えず、スマホの指の動きにも自然に合います。ライブラリは、切り替えのたびに凝った動きを付けたいときに向きます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
