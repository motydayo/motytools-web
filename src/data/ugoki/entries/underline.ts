import type { Ugoki } from '../types';

export default {
  slug: 'underline',
  no: 14,
  category: 'pointer',
  name: '下線アニメーション',
  en: 'Underline animation',
  aka: ['ホバー下線', 'リンク下線アニメーション', 'アンダーラインアニメーション', '下線がのびる'],
  mode: 'pointer',
  title: '下線アニメーションのCSS｜ホバーで左からのびるリンクの作り方',
  description:
    'メニューやリンクにマウスを乗せると、下線が左からすっとのびる「下線アニメーション」を見本で解説。疑似要素とscaleXだけのCSS、離れるときに右へ消す工夫、スマホと現在地表示の注意点まで。',
  oneLine: 'メニューやリンクに乗せると、文字の下に線が左からすっとのびる。',
  what: [
    'メニューや文中のリンクにマウスを乗せると、文字の下に線が左から右へのびていく演出です。見本では「サービス」「料金」と文中の「プランの一覧」に矢印が乗るたびに線がのび、離れると右へ縮んで消えます。',
    '「ここは押せる」「いまここを指している」を、文字の形を変えずに伝えられるのが価値です。動きが細く短いので、落ち着いたデザインのサイトにもなじみます。いまいるページの項目には、色を変えた下線を出しっぱなしにしておくと現在地も分かります。',
  ],
  when: [
    '会社サイトやお店のサイトのメニュー（グローバルナビ）で、押せる項目だと伝えたいとき',
    'ブログや記事ページの文中リンクを、上品に目立たせたいとき',
    'フッターのリンク一覧など、文字だけが並ぶ場所に手ざわりを足したいとき',
    'いまいるページの項目に下線を付けて、現在地を示したいとき',
  ],
  avoid: [
    '文中リンクの下線を「乗せたときだけ」出す作り（ふだんは文字の色だけでリンクと分からせる必要があり、見落とされやすい）',
    'ボタンやカードなど、すでに形で押せると分かる部品（下線まで足すとうるさい）',
    '何行にも折り返す長いリンク（疑似要素の線は1本しか作れず、行ごとの下線にならない）',
  ],
  prompt:
    'メニューのリンクに「下線アニメーション（underline animation）」を付けてください。リンクに position: relative を付け、::after で高さ{{thick:t}}の線を文字の下{{offset:t}}に置きます。ふだんは transform: scaleX(0)、乗せたら scaleX(1) にして、{{dur:t}}の ease-out で左からのびるようにします（乗せたときは transform-origin: left、離れたときは right にして右へ縮んで消える）。:hover は @media (hover: hover) の中に書き、:focus-visible でも線を出してください。いまいるページ（aria-current="page"）は別の色で線を出しっぱなしにし、prefers-reduced-motion: reduce のときはのびる動きをやめて表示を切り替えるだけにしてください。CSSだけで作ってください。',
  howTo: [
    'リンクの ::after（文字のあとに飾りを足すCSSの指定）で細い線を作り、ふだんは transform: scaleX(0) で横幅0に縮めておきます。乗せたら scaleX(1) に戻すだけで、線がのびます。width を0から100%に変えるより、transform の方がなめらかに動きます。',
    'のびる向きは transform-origin（変形の基準点）で決まります。ふだんは right、乗せたときは left にしておくと、「左からのびて、右へ抜けていく」流れのある動きになります。速さは0.2〜0.3秒、線は2px前後が目安です。0.5秒を超えるとマウスを動かす速さに線が追いつかず、太すぎると下線ではなく飾りの帯に見えてきます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<nav class="menu">
  <a href="/" class="ul" aria-current="page">ホーム</a>
  <a href="/service" class="ul">サービス</a>
  <a href="/price" class="ul">料金</a>
  <a href="/contact" class="ul">お問い合わせ</a>
</nav>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.menu { display: flex; gap: 20px; }
.ul {
  position: relative;
  color: #1f2433;
  text-decoration: none;
}
.ul::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -{{offset}};        /* 文字との間 */
  height: {{thick}};           /* 線の太さ */
  border-radius: {{thick}};
  background: #f06a35;
  transform: scaleX(0);       /* ふだんは幅0 */
  transform-origin: right;    /* 離れるときは右へ縮む */
  transition: transform {{dur}} ease-out;
}

/* マウスのある端末だけ、乗せたら左からのびる */
@media (hover: hover) {
  .ul:hover::after { transform: scaleX(1); transform-origin: left; }
}
/* キーボードで選んだとき・いまいるページ */
.ul:focus-visible::after,
.ul[aria-current='page']::after { transform: scaleX(1); transform-origin: left; }
.ul[aria-current='page']::after { background: #1d2541; }
.ul:focus-visible { outline: 2px solid #4f73d9; outline-offset: 4px; }

/* 動きを減らす設定なら、のびずにぱっと出す */
@media (prefers-reduced-motion: reduce) {
  .ul::after { transition: none; }
}`,
    },
  ],
  tune: [
    { key: 'dur', label: 'のびる速さ', min: 0.05, max: 0.8, step: 0.05, value: 0.25, unit: 's' },
    { key: 'thick', label: '線の太さ', min: 1, max: 6, step: 1, value: 2, unit: 'px' },
    { key: 'offset', label: '文字との間', min: 0, max: 10, step: 1, value: 4, unit: 'px' },
  ],
  cautions: [
    'スマホにはマウスがないので、乗せたときの下線は見えません。メニューの項目は文字の大きさと並びで押せると分かるようにし、いまいる項目の下線は最初から出しておきます。',
    '文章の中のリンクを「乗せたときだけ下線」にすると、色の見分けがつきにくい人には普通の文字と区別できません。文中のリンクは色に加えて、ふだんから細い下線を付けておくのが安全です。',
    '::after の線は1本しか作れないので、リンクが2行に折り返すと各行の下にきれいに付きません。長いリンクには background-image で線を描き、background-size を0%から100%に変える作り方を使います。',
    'Tabキーで選んだときにも線が出るよう :focus-visible にも同じ指定を書き、焦点の枠線（outline）も消さないでください。',
  ],
  similar: [
    {
      slug: 'tab-indicator',
      diff: 'タブの下線スライドは、1本の線がタブからタブへ横に移動します。下線アニメーションは項目ごとに線がのび縮みします。',
    },
    {
      slug: 'highlighter',
      diff: 'マーカーアニメーションは、スクロールで文に太い蛍光ペンの線が引かれる演出です。下線アニメーションはマウスを乗せたときの細い線です。',
    },
  ],
  faq: [
    {
      q: '下線が左からではなく真ん中からのびます。',
      a: 'transform-origin の指定がないと、真ん中が基準になって左右へ同時にのびます。乗せたときの指定に transform-origin: left を書いてください。真ん中からのびる動きが好みなら、指定しないままで構いません。',
    },
    {
      q: 'text-decoration の下線をアニメーションできますか？',
      a: 'text-decoration の線そのものは、のびる動きにはできません。色や太さ、文字との距離（text-underline-offset）は変化させられます。のびる線にしたいときは、この記事のように ::after で線を作ります。',
    },
    {
      q: 'スマホでは下線アニメーションはどう見えますか？',
      a: 'マウスがないので、乗せたときの動きは見えません。タップした瞬間に一瞬だけ線が出て、すぐ次のページへ移ることが多いです。スマホでは下線の動きに頼らず、押せることが見た目で分かるようにしておきます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
