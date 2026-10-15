import type { Ugoki } from '../types';

export default {
  slug: 'skeleton',
  no: 27,
  category: 'inform',
  name: 'スケルトンスクリーン',
  en: 'Skeleton screen',
  aka: ['スケルトンローディング', 'スケルトン表示', '骨組み表示', 'プレースホルダー表示', 'シマー'],
  mode: 'script',
  title: 'スケルトンスクリーンとは？読み込み中の骨組みをCSSで作る【見本】',
  description:
    '読み込み中に灰色の骨組みを見せるスケルトンスクリーンを、動く見本で解説。本物の中身と同じ形にしてガタつきを防ぐ作り方、光が流れるシマーの付け方、くるくる表示との使い分け、読み上げへの配慮まで分かります。',
  oneLine: '読み込み中は灰色の骨組みを出し、届いたら本物の中身に差し替える。',
  what: [
    '「今週のおすすめ」の一覧が、最初は写真・宿名・料金の位置に灰色の帯が並んだ骨組みとして出て、光の筋が左から右へ流れます。データが届くと、同じ場所に本物の写真と文字がふわっと現れます。右上の「更新」を押すと、もう一度読み込みからやり直せます。',
    '骨組みは、これから何が・どこに・どれくらい出るかを先に教えてくれます。待っている間も画面の形が分かるので、真っ白な画面やくるくる回る印だけよりも、待ち時間が短く感じられやすいと言われています。本物と同じ大きさで作れば、差し替わったときに画面がガタッと動くこともありません。',
  ],
  when: [
    'ネットショップや予約サイトの一覧で、商品や宿のカードを読み込んでいるとき',
    'SNSやニュースアプリのように、記事や投稿の並びを読み込むとき',
    '管理画面のダッシュボードで、グラフや表の数字を取りに行っている間',
    'ページの一部だけを後から読み込む（おすすめ欄・コメント欄など）とき',
  ],
  avoid: [
    '0.3秒もかからず終わる読み込み（骨組みが一瞬だけ見えて、かえってちらつく）',
    '何件・どんな形で出るか決まっていない画面（骨組みと本物の形が違うと、差し替えでガタつく）',
    'ファイルの書き出しや送信など、終わるまでの進み具合を知りたい処理（進捗の棒や残り時間の方が親切）',
  ],
  prompt:
    'カード一覧の読み込み中を「スケルトンスクリーン（skeleton screen）」にしてください。本物のカードと同じ要素・同じ大きさのまま、写真・タイトル・説明・料金の場所を灰色（#ecebe7）の角丸の帯にし、明るい光の筋を1.4秒で左から右へ流し続けてください（シマー）。データが届いたら is-loading クラスを外し、中身を0.3秒でフェードインさせ、カードごとに0.06秒ずつずらしてください。読み込み中は一覧に aria-busy="true" を付け、終わったら role="status" の見えない文字で「4件表示しました」と知らせてください。動きを減らす設定の人には光の筋を止めてください。CSSとJavaScriptだけで作ること。',
  howTo: [
    '骨組みを別の部品として用意するのではなく、本物のカードに is-loading クラスを付けて「中身を透明にし、同じ場所を灰色の帯にする」CSSを当てます。形も大きさも本物と同じなので、データが届いてクラスを外したとき、画面の位置がほとんどずれません。見本もこの方法で作っています。',
    '光の筋は、横長の linear-gradient（色が少しずつ変わる背景）を background-position で流して作ります。データが届いたらJavaScriptで文字を入れてクラスを外すだけです。本物のサイトでは、下のコードの loadItems() の中身を fetch（サーバーからデータを取ってくる命令）に置き換えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- 読み込み中は is-loading と aria-busy="true" -->
<ul class="list is-loading" aria-busy="true">
  <li class="item">
    <div class="thumb"></div>
    <div class="txt"><p class="title">&nbsp;</p><p class="price">&nbsp;</p></div>
  </li>
  <li class="item">
    <div class="thumb"></div>
    <div class="txt"><p class="title">&nbsp;</p><p class="price">&nbsp;</p></div>
  </li>
  <li class="item">
    <div class="thumb"></div>
    <div class="txt"><p class="title">&nbsp;</p><p class="price">&nbsp;</p></div>
  </li>
</ul>
<p class="visually-hidden" role="status"></p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.list { display: grid; gap: 12px; padding: 0; list-style: none; }
.item { display: grid; grid-template-columns: 96px 1fr; gap: 12px; align-items: center; }
.thumb { aspect-ratio: 16 / 10; border-radius: 8px; background: #ddd center / cover; }
.txt p { margin: 0 0 4px; line-height: 18px; }

/* 読み込み中: 同じ場所を灰色の帯にして、光の筋を流す */
.is-loading .thumb,
.is-loading .txt p {
  color: transparent;
  border-radius: 6px;
  background: linear-gradient(90deg, #ecebe7 40%, #f7f6f3 50%, #ecebe7 60%);
  background-size: 300% 100%;
  animation: shimmer 1.4s linear infinite;
}
.is-loading .title { width: 72%; }
.is-loading .price { width: 34%; }
@keyframes shimmer {
  from { background-position: 100% 0; }
  to { background-position: 0 0; }
}

/* 届いたら中身をふわっと出す */
.list:not(.is-loading) .item > * { animation: fade-in 0.3s ease-out both; }
.list:not(.is-loading) .item:nth-child(2) > * { animation-delay: 0.06s; }
.list:not(.is-loading) .item:nth-child(3) > * { animation-delay: 0.12s; }
@keyframes fade-in { from { opacity: 0; } }

.visually-hidden {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .is-loading .thumb, .is-loading .txt p,
  .list:not(.is-loading) .item > * { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// 本物のサイトでは fetch('/api/items').then((r) => r.json()) に置き換える
const loadItems = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve([
      { title: '山の宿 はなれ', price: '1泊 12,000円〜', img: 'yama.jpg' },
      { title: '海の宿 しおさい', price: '1泊 15,000円〜', img: 'umi.jpg' },
      { title: '星の宿 そらの', price: '1泊 9,800円〜', img: 'hoshi.jpg' },
    ]), 1600)
  );

const list = document.querySelector('.list');
const status = document.querySelector('[role="status"]');

loadItems().then((items) => {
  list.querySelectorAll('.item').forEach((li, i) => {
    li.querySelector('.title').textContent = items[i].title;
    li.querySelector('.price').textContent = items[i].price;
    li.querySelector('.thumb').style.backgroundImage = \`url(\${items[i].img})\`;
  });
  list.classList.remove('is-loading');
  list.setAttribute('aria-busy', 'false');
  status.textContent = \`\${items.length}件を表示しました\`;
});`,
    },
  ],
  cautions: [
    '骨組みと本物の形・大きさが違うと、差し替えた瞬間に画面がガタッと動きます。骨組みは本物と同じ要素に is-loading を付けて作るのがいちばん確実です。',
    '読み込みが0.3秒未満で終わるなら、骨組みは出さない方が自然です。一瞬だけ灰色が見えるちらつきの方が気になります。逆に3秒を超えるなら「時間がかかっています」の一言を添えてください。',
    '読み込みに失敗したとき、骨組みを出しっぱなしにしないでください。「読み込めませんでした」と「もう一度読み込む」ボタンに切り替えます。',
    '骨組みは目で見る人向けの表示です。読み上げソフトには aria-busy="true" で読み込み中であることを伝え、終わったら role="status" で件数などを知らせてください。',
  ],
  similar: [
    {
      slug: 'preloader',
      diff: 'ローディング画面はページ全体を覆って、準備ができるまで中身を見せません。スケルトンスクリーンは画面の形を先に見せ、届いた部分から本物に差し替えます。',
    },
    {
      slug: 'lazy-loading',
      diff: '遅延読み込みは、画面に近づくまで画像などを読み込まない仕組みです。読み込んでいる間の見せ方としてスケルトンスクリーンを組み合わせることがよくあります。',
    },
  ],
  faq: [
    {
      q: 'スケルトンスクリーンとくるくる回る読み込み表示は、どちらがいいですか？',
      a: '一覧やカードのように「何がどこに出るか」が決まっている画面ならスケルトンスクリーンが向いています。ボタンを押したあとの短い処理や、形が決まらない処理なら、ボタンの中に小さなくるくるを出す方が分かりやすいです。',
    },
    {
      q: 'スケルトンスクリーンはライブラリがないと作れませんか？',
      a: 'CSSだけで作れます。灰色の背景と、光の筋を流す linear-gradient のアニメーションがあれば十分です。データを入れて is-loading クラスを外す部分だけ JavaScript を使います。',
    },
    {
      q: 'スケルトンスクリーンは表示速度やSEOに影響しますか？',
      a: '骨組み自体はCSSだけなので軽く、表示速度への悪影響はほぼありません。本物と同じ大きさで作れば、レイアウトのずれ（CLS：表示中に画面がずれる量の指標）も抑えられます。ただし、検索で読ませたい本文まで後から読み込む作りにすると、内容が伝わりにくくなります。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
