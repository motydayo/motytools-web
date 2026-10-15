import type { Ugoki } from '../types';

export default {
  slug: 'horizontal-scroll',
  no: 5,
  category: 'scroll',
  name: '横スクロール',
  en: 'Horizontal scroll',
  aka: ['横スクロール演出', '縦スクロールで横移動', 'horizontal scroll section', '横流れ'],
  mode: 'scroll',
  title: '縦スクロールで横に動く「横スクロール」の作り方と使いどころ【見本】',
  description:
    '縦にスクロールすると、ある区間だけカードが横に流れる「横スクロール」演出を動く見本で解説。position: stickyとtransformでの作り方、区間の高さの計算、スマホでの注意点、AIへの指示文まで。',
  oneLine: '縦にスクロールしているのに、ある区間だけ中身が横へ流れる。',
  what: [
    '縦にスクロールしているのに、ある区間に入ると画面が止まり、カードや写真の列が右から左へ流れていく演出です。流し終わると、また普通に下へ進みます。作品集やブランドサイトでよく見かけます。',
    '見本では、施工事例の5枚のカードが横一列に並んでいて、スクロールした量だけ左へずれていきます。下の細い線は、横の列をどこまで見たかを表しています。縦に5枚積むより1枚ずつ大きく見せられ、「次は何だろう」と読み進めてもらいやすくなります。',
  ],
  when: [
    '建築・デザイン事務所の作品集で、事例を1枚ずつ大きく見せたいとき',
    '会社の沿革や商品の歴史を、年表のように左から右へ見せたいとき',
    '新商品の特設ページで、カラーや種類を横に並べて見比べてほしいとき',
    'ブランドサイトで、縦長のページに変化をつけたいとき',
  ],
  avoid: [
    '並べるものが2〜3個しかないとき（流れる距離が短く、止まった感じだけが残る）',
    '商品一覧や比較表など、全部を一度に見渡したい情報',
    'スマホで指で横にスワイプしたくなる見た目のとき（縦にスクロールしないと動かず、迷わせる）',
  ],
  prompt:
    '施工事例のセクションを「横スクロール（縦スクロールに連動して横に流れる、horizontal scroll section）」にしてください。セクションの中のパネルを position: sticky; top: 0; height: 100vh; で固定し、カードを横一列（display: flex）に並べてください。セクションの高さは「画面の高さ＋カード列の横幅−画面の幅」にし、区間をスクロールした量と同じだけカード列を transform: translateX で左へ動かしてください。進み具合が分かる細い線も付けてください。ライブラリは使わないでください。prefers-reduced-motion: reduce の人には固定せず、指やバーで動かせる普通の横スクロール（overflow-x: auto）にしてください。',
  howTo: [
    '仕組みは「ピン留め」と同じです。外側の区間に高さを持たせ、中のパネルを position: sticky で止めておきます。止まっている間、縦にスクロールした量（px）と同じだけカード列を左へずらすと、縦の動きが横の動きに置き換わって見えます。',
    'ポイントは区間の高さです。「画面の高さ＋横に流す距離（カード列の幅−画面の幅）」にすると、流し終わったちょうどそのときに区間を抜けます。カードの枚数や画面の幅で距離が変わるので、高さはJavaScriptで計算して入れ、画面の大きさが変わったら計算し直します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="hs-sec">
  <div class="hs-pin">
    <h2>施工事例</h2>
    <div class="hs-track">
      <article class="work">古民家の再生</article>
      <article class="work">海辺のカフェ</article>
      <article class="work">山小屋のホテル</article>
      <article class="work">駅前の図書館</article>
      <article class="work">湖畔のサウナ</article>
    </div>
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 区間の中にいる間、パネルを画面に止める */
.hs-pin {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
/* カードは横一列。JavaScriptで左へずらす */
.hs-track {
  display: flex;
  gap: 16px;
  width: max-content;
  padding: 0 24px;
  will-change: transform;
}
/* flex: none でカードが縮まないようにする */
.work {
  flex: none;
  width: 280px;
  height: 200px;
  border-radius: 12px;
  background: #e9eefb;
}

/* 「動きを減らす」設定の人には、普通の横スクロールにする */
@media (prefers-reduced-motion: reduce) {
  .hs-sec { height: auto !important; }
  .hs-pin { position: static; height: auto; }
  .hs-track { width: auto; overflow-x: auto; transform: none !important; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const sec = document.querySelector('.hs-sec');
const pin = sec.querySelector('.hs-pin');
const track = sec.querySelector('.hs-track');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let dist = 0;

// 区間の高さ＝画面の高さ＋横に流す距離
function fit() {
  dist = Math.max(0, track.scrollWidth - pin.clientWidth);
  sec.style.height = reduce.matches ? '' : \`\${window.innerHeight + dist}px\`;
  update();
}

// 区間を縦に進んだ量だけ、横へずらす
function update() {
  if (reduce.matches) return;
  const p = Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / dist || 0));
  track.style.transform = \`translate3d(\${-p * dist}px, 0, 0)\`;
}

window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
window.addEventListener('resize', fit);
fit();`,
    },
  ],
  cautions: [
    '親要素に overflow: hidden などが付いていると position: sticky が効かず、パネルが止まりません。止まらないときは親を確認してください。',
    'スマホでは、横に並んだカードを見ると指で横にスワイプしたくなります。「スクロールで進みます」の一言や進み具合の線を添え、縦に動かせば進むことを伝えてください。',
    'キーボードのTabで横の列の中のリンクへ移ったとき、画面外のカードにフォーカスが行くことがあります。リンクは各カードに1つまでにし、見えない位置のものを減らしてください。',
    '流す距離が長いほど、縦に何度もスクロールさせることになります。カードは4〜6枚程度、1区間で画面2〜3枚分までに抑えると疲れません。',
  ],
  similar: [
    {
      slug: 'pinning',
      diff: 'ピン留めは止めている間に中身を同じ場所で入れ替えます。横スクロールは止めている間に中身を横へ流します。',
    },
    {
      slug: 'marquee',
      diff: 'マーキーはスクロールと関係なく、文字やロゴが一定の速さで流れ続けます。横スクロールは読む人がスクロールした分だけ動き、止めれば止まります。',
    },
    {
      slug: 'scroll-snap',
      diff: 'スクロールスナップを横向きにすると、指で横にスワイプしてカードが1枚ずつ止まる作り方になります。こちらは縦スクロールで横に動きます。',
    },
  ],
  faq: [
    {
      q: '縦スクロールで横に動かすには、どんなライブラリが必要ですか？',
      a: 'ライブラリはなくても作れます。position: sticky でパネルを止め、縦に進んだ量だけ transform で横にずらすJavaScriptを20行ほど書けば動きます。GSAPの ScrollTrigger を使う方法もよく紹介されていますが、この演出1つだけなら不要です。',
    },
    {
      q: 'スマホで横スクロール演出は使っても大丈夫ですか？',
      a: '使えますが、指で横にスワイプしても動かない点で迷わせることがあります。スマホでは区間を短くするか、overflow-x: auto で指で横に動かせる普通の横並びに切り替えるのも手です。',
    },
    {
      q: '最後のカードまで流れる前に区間が終わってしまいます。',
      a: '区間の高さが足りていません。「画面の高さ＋カード列の幅−画面の幅」になっているか確認してください。画像の読み込みでカードの幅が後から変わる場合は、読み込み後と画面の大きさが変わったときに計算し直す必要があります。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
