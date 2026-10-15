import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'carousel',
  no: 24,
  category: 'display',
  name: 'カルーセル',
  en: 'Carousel (slider)',
  aka: ['スライダー', 'スライドショー', '画像スライダー', 'カルーセルスライダー', 'Swiper'],
  mode: 'script',
  title: 'カルーセルとは？自動再生しない作り方とscroll-snapのCSS【見本】',
  description:
    '画像やカードを横に1枚ずつ送るカルーセル（スライダー）を触れる見本で解説。scroll-snapを土台にした作り方、前後ボタン・現在位置の点・矢印キー・スワイプの決まりごと、自動で回るカルーセルの問題点までまとめました。',
  oneLine: '横に並んだ板を、ボタンやスワイプで1枚ずつ送って見せる。',
  what: [
    '同じ種類の写真やカードを横一列に並べ、決まった枠の中で1枚ずつ送って見せる部品です。見本では5つのお部屋を並べています。右の矢印ボタン・下の点・スワイプ（指で横に払う）・キーボードの左右キーのどれでも送れて、点と「2 / 5」の表示で今どこを見ているかが分かります。次の板が少しだけ見えているのは「横にまだ続く」という合図です。',
    'カルーセルには決まりごとがあります。前後のボタンを置く。点や枚数で現在位置を見せる。指でもキーボードでも送れる。そして勝手に動かさないことです。自動で回るカルーセルは、読んでいる途中で中身が替わる・止め方が分からない・2枚目以降がほとんど見られない、といった理由で、使いやすさの調査では長く評判がよくありません。',
    '似た部品との違いも押さえておきましょう。同じ横並びでも、ページ全体を1画面ずつ止めるのは「スクロールスナップ」という仕組みそのもので、カルーセルはそれを枠の中で使った部品です。写真を押すと画面いっぱいに拡大するのは「ライトボックス」で、カルーセルと組み合わせて使うことがよくあります。',
  ],
  when: [
    'ホテル・賃貸・中古車の詳細ページで、同じ物件の写真を何枚も見せたいとき',
    'ECサイトの「この商品を見た人はこんな商品も」のように、関連商品を横に並べたいとき',
    'スマホで、縦に並べると長くなりすぎるカード（お客さまの声・事例など）をまとめたいとき',
    'アプリの初回案内で、3〜4枚の説明を順番にめくってもらいたいとき',
  ],
  avoid: [
    'トップページのいちばん上に大事なお知らせを何枚も入れるとき（2枚目以降はほとんど見られないので、並べて見せる）',
    '比べてほしい情報（料金プラン・スペック）を入れるとき（同時に見えないと比べられない）',
    '中身が1〜2枚しかないとき（送る手間だけが増える）',
    '自動で次々に切り替えたいとき（読み終わる前に替わる・止められない、という不満の元になる）',
  ],
  prompt:
    '宿のお部屋の写真を「カルーセル（carousel / slider）」で見せてください。ライブラリは使わず、横スクロールとCSSの scroll-snap（scroll-snap-type: x mandatory と scroll-snap-align: start）を土台にしてください。1枚の幅は枠の{{width:t}}、板と板の間隔は{{gap:t}}にして、次の板が少し見えるようにしてください。自動再生はしないでください。前後の矢印ボタン（端では押せない見た目にする）、今どこかが分かる点と「2 / 5」の表示、スワイプ、キーボードの左右キーで送れるようにしてください。全体に aria-roledescription="カルーセル"、各板に role="group" と「1 / 5」のような aria-label を付けてください。動きを減らす設定（prefers-reduced-motion）の人には、なめらかなスクロールをやめて一瞬で切り替えてください。',
  howTo: [
    '土台は横スクロールです。板を横一列に並べた箱に overflow-x: auto と scroll-snap-type: x mandatory を付け、各板に scroll-snap-align: start を付けると、指で払っても板の頭でピタッと止まります。スワイプ・トラックパッドの横スクロール・慣性での送りは、ブラウザがそのまま面倒を見てくれます。JavaScriptで位置を計算して動かす昔の作り方より、軽くて壊れにくい方法です。',
    'JavaScriptで足すのは、前後ボタンと点を押したときに scrollTo() で目的の板まで送る処理と、スクロールのたびに「いま何枚目か」を計算して点と枚数表示を更新する処理だけです。端に来たら矢印を薄くして押せないことを伝えます。disabled にすると押した直後に焦点が消えるので、aria-disabled を使います。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="carousel" aria-roledescription="カルーセル" aria-label="お部屋の写真">
  <div class="carousel-track" tabindex="0">
    <div class="carousel-slide" role="group" aria-roledescription="スライド" aria-label="1 / 3">
      <img src="room1.jpg" alt="和室 10畳" width="800" height="500">
    </div>
    <div class="carousel-slide" role="group" aria-roledescription="スライド" aria-label="2 / 3">
      <img src="room2.jpg" alt="露天風呂つき客室" width="800" height="500">
    </div>
    <div class="carousel-slide" role="group" aria-roledescription="スライド" aria-label="3 / 3">
      <img src="room3.jpg" alt="離れ「月見」" width="800" height="500">
    </div>
  </div>
  <div class="carousel-ctrl">
    <button type="button" class="carousel-prev" aria-label="前の写真">‹</button>
    <div class="carousel-dots"></div>
    <p class="carousel-count" aria-live="polite">1 / 3</p>
    <button type="button" class="carousel-next" aria-label="次の写真">›</button>
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.carousel-track {
  display: flex;
  gap: {{gap}};
  overflow-x: auto;
  /* 横方向で、必ず板の頭に止める */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
}
.carousel-slide {
  flex: 0 0 {{width}}; /* 100% 未満にすると次の板が少し見える */
  scroll-snap-align: start;
}
.carousel-slide img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
}
.carousel-ctrl { display: flex; align-items: center; gap: 8px; }
.carousel-ctrl > button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
}
.carousel-ctrl [aria-disabled="true"] { opacity: 0.35; }
.carousel-dots button {
  width: 24px;
  height: 24px;
  border: 0;
  background: none;
}
.carousel-dots button::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  margin: auto;
  border-radius: 4px;
  background: #cfccc4;
}
.carousel-dots [aria-current="true"]::before { width: 20px; background: #1d2541; }

@media (prefers-reduced-motion: reduce) {
  .carousel-track { scroll-behavior: auto; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const root = document.querySelector('.carousel');
const track = root.querySelector('.carousel-track');
const slides = [...track.children];
const prev = root.querySelector('.carousel-prev');
const next = root.querySelector('.carousel-next');
const count = root.querySelector('.carousel-count');
const dotsBox = root.querySelector('.carousel-dots');
let index = 0;

// 点を枚数ぶん作る
const dots = slides.map((_, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.setAttribute('aria-label', \`\${i + 1}枚目を表示\`);
  b.addEventListener('click', () => go(i));
  dotsBox.append(b);
  return b;
});

const maxLeft = () => track.scrollWidth - track.clientWidth;
const leftOf = (i) => Math.min(slides[i].offsetLeft - track.offsetLeft, maxLeft());
const go = (i) => {
  i = Math.max(0, Math.min(slides.length - 1, i));
  track.scrollTo({ left: leftOf(i) });
};

// スクロールのたびに「いま何枚目か」を更新する
const update = () => {
  const x = track.scrollLeft;
  index = x >= maxLeft() - 2 ? slides.length - 1
    : slides.reduce((best, _, i) =>
        Math.abs(leftOf(i) - x) < Math.abs(leftOf(best) - x) ? i : best, 0);
  dots.forEach((d, i) =>
    i === index ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current'));
  count.textContent = \`\${index + 1} / \${slides.length}\`;
  prev.setAttribute('aria-disabled', index === 0);
  next.setAttribute('aria-disabled', index === slides.length - 1);
};
track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });

prev.addEventListener('click', () => go(index - 1));
next.addEventListener('click', () => go(index + 1));
// 左右の矢印キーで送る
root.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
});
update();`,
    },
  ],
  tune: [
    { key: 'width', label: '1枚の幅', min: 60, max: 100, step: 5, value: 85, unit: '%' },
    { key: 'gap', label: '板の間隔', min: 0, max: 32, step: 4, value: 12, unit: 'px' },
  ],
  cautions: [
    '自動再生はおすすめしません。どうしても回すなら、目に見える「一時停止」ボタンを最初に置き、マウスを乗せたときやキーボードの焦点が入ったときは止め、動きを減らす設定の人には回さない、の3つが最低条件です。',
    '矢印と点は、見た目が小さくても押せる範囲を広くします。矢印は44px四方、点も24px四方以上あると、スマホで隣を押し間違えにくくなります。',
    '読み上げソフトには「カルーセル」「1 / 5 スライド」のように役割と位置を伝えます。全体に aria-roledescription、各板に role="group" と aria-label を付け、枚数の表示は aria-live="polite" で読み上げさせます。',
    '写真には width と height を書き、2枚目以降には loading="lazy" を付けます。場所が先に確保されるのでガタつかず、見られない写真の読み込みも後回しにできます。',
    'パソコンのマウスでは横に払う操作ができません。前後ボタンを省くと、マウスの人は2枚目以降に進めなくなります。',
  ],
  similar: [
    { slug: 'scroll-snap', book: 'ugoki', diff: 'スクロールスナップは「近い区切りにピタッと止める」CSSの仕組みです。カルーセルはそれを横向きの枠の中で使い、前後ボタンと現在位置を足した部品です。' },
    { slug: 'horizontal-scroll', book: 'ugoki', diff: '横スクロールの演出は、縦にスクロールするとページの一部が横へ流れるものです。カルーセルは利用者が自分で1枚ずつ送ります。' },
    { slug: 'lightbox', diff: 'ライトボックスは、押した写真を画面いっぱいに拡大して見せる部品です。カルーセルの写真を押したらライトボックスで開く、という組み合わせがよくあります。' },
  ],
  faq: [
    {
      q: 'カルーセルとスライダーは何が違いますか？',
      a: 'Webの画面の部品としてはほぼ同じものを指します。英語圏のデザインの資料では carousel、日本の現場や配布されている部品集ではスライダーと呼ぶことが多いです。ただし「スライダー」はつまみを動かして数値を選ぶ部品（range slider）も指すので、AIに頼むときは「カルーセル（carousel）」と書くと取り違えが起きません。',
    },
    {
      q: '自動で切り替わるカルーセルはなぜ良くないのですか？',
      a: '読んでいる途中で中身が替わり、押そうとした瞬間に別の板になるからです。2枚目以降はほとんど見られないことも多く、目立たせたかった情報が届きません。また、動き続けるものを止める手段がないと、アクセシビリティの国際基準（WCAG）の「一時停止・停止・非表示」の考え方に反します。',
    },
    {
      q: 'SwiperなどのライブラリとCSSのscroll-snapはどちらがいいですか？',
      a: '写真やカードを1枚ずつ送るだけなら scroll-snap で十分で、読み込みも軽くなります。無限に回り続ける・3D風に回転する、といった凝った動きが必要なときにライブラリを検討します。どちらでも、前後ボタン・現在位置・キーボード操作がそろっているかを確かめてください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
