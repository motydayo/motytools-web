import type { Ugoki } from '../types';

export default {
  slug: 'parallax',
  no: 1,
  category: 'scroll',
  name: 'パララックススクロール',
  en: 'Parallax scrolling',
  aka: ['パララックス', '視差効果', '視差スクロール', 'パララックス効果'],
  mode: 'scroll',
  title: 'パララックススクロールとは？仕組みと作り方・使いどころ【見本つき】',
  description:
    'パララックス（視差効果）を動く見本で解説。手前と奥の絵を違う速さで動かす仕組み、JavaScript数行での作り方、スマホや酔いやすい人への配慮、AIに頼むときの指示文までまとめました。',
  oneLine: 'スクロールすると、奥の絵ほどゆっくり動いて奥行きが出る。',
  what: [
    'スクロールしたとき、重ねた絵や写真を「奥にあるものほどゆっくり」動かして、平らな画面に奥行きを感じさせる演出です。電車の窓から見ると、近くの電柱は速く、遠くの山はゆっくり流れて見えます。あの見え方（視差）をWebページで再現しています。',
    '見本の1画面目は、太陽・奥の山・見出し・手前の山を別々の層に分けています。スクロールすると太陽がいちばんゆっくり、手前の山がいちばん速く動き、見出しは山の向こうへ沈んでいきます。下の「夕暮れの露天風呂」の帯は、枠は普通に流れて中の絵だけがゆっくり動く、よく使う控えめな型です。',
  ],
  when: [
    '旅館・ホテル・観光地のLPで、1画面目の景色に奥行きと空気感を出したいとき',
    '新商品やブランドの特設ページで、読み始めの印象を強く残したいとき',
    '写真の帯を区切りに挟んで、長いページの章の変わり目を分かりやすくしたいとき',
    '採用ページや会社紹介で、文字ばかりの流れにひと呼吸置きたいとき',
  ],
  avoid: [
    '料金表・手続きの説明など、内容を正確に読ませたいページ（動きが読む邪魔になる）',
    '一覧や記事など、何度も行き来して使うページ（毎回動いて疲れる）',
    '1ページに何か所も入れたいとき（どこを見ればいいか分からなくなり、表示も重くなる）',
  ],
  prompt:
    'トップの1画面目を「パララックススクロール（parallax scrolling）」にしてください。背景の空・奥の山・見出し・手前の山を別々の層（position: absolute）に分け、スクロール量に対して奥の層ほど大きく下へずらして、ゆっくり動いて見えるようにしてください（係数は太陽0.75、奥の山0.5、見出し0.35、手前の山0.15）。動かすのは transform: translate3d だけにし、scroll イベントは requestAnimationFrame で間引いてください。ライブラリは使わないでください。prefers-reduced-motion: reduce の人には層をずらさず止めた絵で見せてください。',
  howTo: [
    '絵を層に分けて重ね、スクロール量（scrollY）に係数をかけた分だけ、各層を下へずらします。ページ自体は上へ流れるので、下へずらした層ほど「ゆっくり上がっていく」ように見えます。係数が1に近いほど遠く、0なら普通のスクロールと同じ速さです。',
    '動かすのは transform だけにします。top や margin を変えるとブラウザが毎回レイアウトを計算し直してカクつきます。scroll イベントは1秒に何十回も来るので、requestAnimationFrame（画面の描き替えに合わせて1回だけ実行する仕組み）でまとめて処理します。なお、CSSだけで作れる animation-timeline: scroll() という新しい書き方もありますが、まだ対応していないブラウザがあるため、ここではJavaScriptで作っています。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- 画像のかわりにSVGで描いた層。写真を使うなら <img class="layer"> に差し替える -->
<section class="hero">
  <svg class="layer" data-speed="0.75" viewBox="0 0 320 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <circle cx="236" cy="62" r="22" fill="#f06a35" />
  </svg>
  <svg class="layer" data-speed="0.5" viewBox="0 0 320 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <path d="M0 150 L70 86 L130 136 L190 74 L260 128 L320 98 V260 H0Z" fill="#8fa9ec" />
  </svg>
  <div class="layer hero-text" data-speed="0.35">
    <h1>静かな朝を、山の上で。</h1>
  </div>
  <svg class="layer" data-speed="0.15" viewBox="0 0 320 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <path d="M0 260 V164 L90 116 L170 176 L250 124 L320 168 V260Z" fill="#4f73d9" />
  </svg>
</section>
<main style="height: 150vh">ここから本文</main>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.hero {
  position: relative;
  height: 100vh;
  overflow: hidden; /* ずらした層をはみ出させない */
  background: linear-gradient(#dfe8fb, #f3f6fd);
}
.layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  will-change: transform; /* 動かす層だと先に伝えておく */
}

.hero-text {
  height: auto;
  padding: 10vh 24px 0;
}

/* 「動きを減らす」設定の人には止めた絵で見せる */
@media (prefers-reduced-motion: reduce) {
  .layer { transform: none !important; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const layers = document.querySelectorAll('[data-speed]');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let ticking = false;

function update() {
  ticking = false;
  if (reduce.matches) return;
  const y = window.scrollY;
  layers.forEach((el) => {
    // 奥の層ほど係数が大きい＝ゆっくり動いて見える
    el.style.transform = \`translate3d(0, \${y * el.dataset.speed}px, 0)\`;
  });
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}, { passive: true });
update();`,
    },
  ],
  cautions: [
    '画面が大きく動く演出は、乗り物酔いのような症状を起こす人がいます。prefers-reduced-motion: reduce（端末の「動きを減らす」設定。iPhoneでは「視差効果を減らす」）のときは必ず止めてください。',
    '重ねる画像の枚数だけ読み込みが増えます。1画面目の画像は圧縮して軽くし、層は3〜4枚までに抑えてください。',
    'background-attachment: fixed を使った昔ながらの作り方は、iPhoneのSafariでは効かず、表示も重くなりがちです。transform で動かす作り方をおすすめします。',
    '層を下へずらすと、上端や下端に隙間が出ることがあります。画像を枠より少し大きめにするか、ずらす量に上限を付けてください。',
  ],
  similar: [
    {
      slug: 'fade-in',
      diff: 'フェードインは、要素が画面に入ったときに一度だけふわっと現れる演出です。パララックスはスクロールしている間ずっと、量に合わせて動き続けます。',
    },
    {
      slug: 'pinning',
      diff: 'ピン留めは要素をある区間だけ止める演出です。パララックスは止めずに、層ごとの速さを変えて奥行きを出します。',
    },
    {
      slug: 'horizontal-scroll',
      diff: '横スクロールは縦の動きを横の動きに置き換えます。パララックスは向きは縦のまま、速さだけを変えます。',
    },
  ],
  faq: [
    {
      q: 'パララックスと視差効果は同じものですか？',
      a: '同じものです。英語の parallax（パララックス）を日本語にしたのが「視差」です。Webでは「スクロールに合わせて奥と手前が違う速さで動く演出」を指して、どちらの呼び方もよく使われます。',
    },
    {
      q: 'スマホでパララックスが効かない・カクつくのはなぜですか？',
      a: 'background-attachment: fixed で作っている場合、iPhoneのSafariなどでは効きません。また、top や background-position をスクロールのたびに書き換えると、処理が重くてカクつきます。transform: translate3d で層を動かし、requestAnimationFrame でまとめて処理すると改善します。',
    },
    {
      q: 'パララックスはSEOに悪いですか？',
      a: '演出そのものが検索順位を下げることはありません。ただし、大きな画像を何枚も重ねて表示が遅くなると、読む人の体験が悪くなります。画像を軽くし、見出しや本文は画像ではなく文字で書いておけば問題ありません。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
