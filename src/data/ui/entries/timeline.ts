import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'timeline',
  no: 28,
  category: 'display',
  name: 'タイムライン',
  en: 'Timeline',
  aka: ['縦のタイムライン', '年表', '沿革', '時系列表示', 'ヒストリー'],
  mode: 'scroll',
  title: 'タイムライン（縦の年表）をCSSで作る方法｜沿革・履歴の見せ方【見本】',
  description:
    '会社の沿革や更新履歴を時間順に並べる「タイムライン」を動く見本で解説。<ol>と<time>で作る正しいHTML、縦線と印をCSSだけで描く方法、ステップ表示との違い、スマホで読みやすくするコツまでまとめました。',
  oneLine: '縦の線に沿って、日付と出来事を時間の順に並べる。',
  what: [
    '縦に1本の線を引き、そこに印（丸）を打って、日付と出来事を時間の順に並べる部品です。見本は旅館の60年あまりの歩みで、上が古く、下へ読み進めるほど新しくなります。スクロールすると、読んだところまで線がオレンジ色に伸び、通り過ぎた印が塗りつぶされます。いちばん下の「新館オープン」はまだ先の予定なので、印と日付の札を点線にして区別しています。',
    'タイムラインの決まりごとは、順番がひと目で分かることです。古い順か新しい順かをページ内で統一し、日付は毎回同じ位置・同じ書き方にそろえます。HTMLでは順番に意味があるので番号付きリスト <ol> を使い、日付は <time datetime="1962"> で書くと、プログラムにも「日付」だと分かる形で残せます。',
    'ステップ表示（ステッパー）と見た目は似ていますが、役割が違います。ステップ表示は「申し込みの3段階のうち今2段目」のように、利用者がこれから進む手順を示します。タイムラインは、すでに起きた出来事（と予定）の記録を見せるものです。',
  ],
  when: [
    '会社・お店・旅館の「沿革」「私たちの歩み」のページ',
    'アプリやサービスの更新履歴（いつ・何が変わったか）を見せたいとき',
    '配送状況や対応履歴など、1つの出来事の経過を時間順に見せたいとき',
    'イベントの当日の流れ（10:00 受付、10:30 開会…）を案内したいとき',
  ],
  avoid: [
    '出来事が2〜3件しかないとき（ただの箇条書きで十分）',
    '利用者がこれから進む手順を示したいとき（ステップ表示の役割）',
    '日付の順番に意味がない情報（特長の一覧などは、カードや箇条書きの方が読みやすい）',
  ],
  prompt:
    '会社の沿革ページに「縦のタイムライン（vertical timeline）」を作ってください。HTMLは <ol> と <li> で古い順に並べ、日付は <time datetime="…"> で書いてください。左側に太さ{{line:t}}の縦線を1本引き、各項目の頭に直径{{dot:t}}の丸い印を線の真ん中に重ねてください。項目どうしの間隔は{{gap:t}}にしてください。左右交互には並べず、スマホでも読みやすい片側だけの配置にしてください。まだ起きていない予定の項目は、印を点線にし「予定」の札を付けて区別してください（色だけで区別しない）。線と印はCSSの疑似要素（::before）で描き、画像は使わないでください。',
  howTo: [
    '線と印は画像を使わず、CSSの疑似要素で描きます。リスト全体（ol）の ::before で縦線を1本引き、各項目（li）の ::before で丸い印を作って、線の真ん中に重なる位置へ置きます。印の左右の位置は「印の大きさの半分」から計算すると、印の大きさを変えても線の中心からずれません。',
    '英語圏の見本でよく見る「左右交互」の並べ方は、パソコンの広い画面では見栄えがしますが、目が左右に行き来して読みにくく、スマホでは結局片側に直すことになります。最初から片側に並べる方が、どの画面でも同じように読めます。読み進めたところまで線を色づける演出は、なくても成立するおまけとして JavaScript で足します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<ol class="timeline">
  <li>
    <time datetime="1962">1962年</time>
    <h3>創業</h3>
    <p>6部屋の湯治宿として、初代の夫婦が開きました。</p>
  </li>
  <li>
    <time datetime="1988">1988年</time>
    <h3>露天風呂を新設</h3>
    <p>山を望む露天風呂を造り、日帰りの入浴も始めました。</p>
  </li>
  <li class="is-future">
    <time datetime="2027-04">2027年4月</time> <span class="up">予定</span>
    <h3>新館オープン</h3>
    <p>地元の野菜を使う食事処と、貸切風呂を備えた新館を建てています。</p>
  </li>
</ol>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.timeline {
  --dot: {{dot}};
  --line: {{line}};
  --rail: calc(var(--dot) + 16px);
  position: relative;
  display: grid;
  gap: {{gap}};
  margin: 0;
  padding: 0 0 0 var(--rail);
  list-style: none;
}
/* 縦の線 */
.timeline::before {
  content: "";
  position: absolute;
  top: 6px;
  bottom: 0;
  left: calc(var(--dot) / 2 - var(--line) / 2);
  width: var(--line);
  background: #e4e2dc;
}
.timeline li { position: relative; }
/* 丸い印（線の真ん中に重ねる） */
.timeline li::before {
  content: "";
  position: absolute;
  top: 5px;
  left: calc(var(--rail) * -1);
  width: var(--dot);
  height: var(--dot);
  box-sizing: border-box;
  border: 2px solid #f06a35;
  border-radius: 50%;
  background: #fff;
}
.timeline li.is-past::before { background: #f06a35; }
/* 予定は点線（色だけで区別しない） */
.timeline li.is-future::before { border-style: dashed; border-color: #5d6272; }
.timeline time {
  font-weight: 700;
  color: #c2410c;
  font-variant-numeric: tabular-nums;
}
.timeline h3 { margin: 2px 0 0; font-size: 18px; }

@media (prefers-reduced-motion: no-preference) {
  .timeline li::before { transition: background-color 0.2s ease-out; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript（おまけ）',
      code: `// 画面の真ん中を通り過ぎた項目の印を塗る（なくても成立する演出）
const items = document.querySelectorAll('.timeline li:not(.is-future)');
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    // 項目の頭が画面の真ん中より上にある＝読み終えた項目
    e.target.classList.toggle('is-past', e.boundingClientRect.top < e.rootBounds.bottom);
  }
}, { rootMargin: '0px 0px -50% 0px' });
items.forEach((li) => io.observe(li));`,
    },
  ],
  tune: [
    { key: 'dot', label: '印の大きさ', min: 8, max: 24, step: 2, value: 14, unit: 'px' },
    { key: 'line', label: '線の太さ', min: 1, max: 6, step: 1, value: 2, unit: 'px' },
    { key: 'gap', label: '項目の間隔', min: 16, max: 64, step: 8, value: 32, unit: 'px' },
  ],
  cautions: [
    '順番に意味があるので、<ul> ではなく <ol> を使います。読み上げソフトでは「7項目のリスト」と件数も伝わり、どこまで聞いたかが分かります。',
    '日付は <time datetime="2026-10"> のように機械が読める形も一緒に書きます。見た目の「2026年10月」は自由に書いたまま、プログラムが読める正確な日付も残せます。',
    '過去と予定、完了と未完了を色だけで分けないでください。点線の印や「予定」の文字を添えると、色の見分けがつきにくい人にも伝わります。',
    '項目が多い年表は、年代ごとに見出しを入れて区切るか、新しい順にして最近の出来事を先に見せます。何十件も同じ調子で続くと、どこを読んでいるか分からなくなります。',
  ],
  similar: [
    { slug: 'stepper', diff: 'ステップ表示は、申し込みなどで「これから進む手順のうち今どこか」を示します。タイムラインは、起きた出来事を時間順に記録して見せます。' },
    { slug: 'scrollspy', book: 'ugoki', diff: 'スクロールスパイは、目次の中で今読んでいる見出しを光らせる演出です。見本の「読んだところまで線が伸びる」動きと考え方は同じです。' },
    { slug: 'progress-bar', book: 'ugoki', diff: 'スクロールプログレスバーはページ全体のどこまで読んだかを細い帯で示します。タイムラインの線の色づけは、年表の中だけでそれを行うものです。' },
  ],
  faq: [
    {
      q: 'タイムラインは左右交互に並べた方がいいですか？',
      a: '見栄えはしますが、読みやすさでは片側に並べる方が有利です。左右交互は視線が行き来し、スマホでは画面が狭くて結局片側に直すことになります。写真を大きく見せたい沿革ページなど、見た目を優先する場合に限って検討してください。',
    },
    {
      q: '古い順と新しい順、どちらで並べるべきですか？',
      a: '会社の沿革のように「物語」として読ませたいなら古い順、更新履歴やお知らせのように「最近どうなったか」が知りたい情報なら新しい順が向いています。どちらにしても、ページの中で順番を混ぜないことが大切です。',
    },
    {
      q: 'タイムラインはCSSだけで作れますか？',
      a: '作れます。縦線はリスト全体の ::before、丸い印は各項目の ::before で描けるので、JavaScriptは要りません。読み進めたところまで線を色づけるような演出を足したいときだけ、IntersectionObserver などのJavaScriptを使います。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
