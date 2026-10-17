import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'logic-tree',
  no: 65,
  category: 'keikaku',
  name: 'ロジックツリー型',
  en: 'Logic tree',
  aka: ['ロジックツリー', '課題分解', '原因分解ツリー', 'ツリー図', 'なぜなぜ分析のツリー'],
  mode: 'static',
  title: 'ロジックツリーとは？原因を枝分かれで分解するスライドの作り方【見本・テンプレート】',
  description:
    '結果を左に置き、原因を右へ枝分かれで分解していく「ロジックツリー型」のスライドを見本で解説。モレとダブりを防ぐ分け方、数字で検算するコツ、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '結果を左に置き、原因を右へ枝分かれで掘り下げて、手を打つ場所を絞る。',
  what: [
    '左端に「見せたい結果」を1つ置き、右へ向かって「何と何でできているか」を枝分かれで分解していく型です。見本では、新規会員が月300人から240人に減った理由を、まず「来店客数」と「入会率」に分けています。来店客数は変わっていないので、入会率の下がり（5.0%から4.0%）に絞り、さらに「声かけ」「特典」「申込の手順」に分けて、レジでの声かけ率が70%から45%に落ちたことまで突き止めています。原因にあたる枝だけ色を付け、変わっていない枝は灰色のままにしています。',
    'ロジックツリーのよさは、「どこが悪いのか」を、探し回らずに絞り込めることです。大切な決まりは、枝を分けたときに「モレ」（抜け）と「ダブり」（重なり）が無いことです。見本の300人＝6,000人×5.0%、6,000人＝1,800人＋4,200人のように、掛け算や足し算で元の数に戻ると、分け方が正しいと確かめられます。段は3段までにし、枝の数は1つの親につき2〜3本に抑えます。',
  ],
  when: [
    '売上・会員数・コストなどの数が変わったときに、どこに原因があるかを会議で絞り込みたいとき',
    '課題の原因を、思いつきではなく筋道を立てて探したことを上司や取引先に示したいとき',
    '大きな目標を、担当ごとの小さな目標に割り振るとき',
    '施策を考える前に、手を打つ場所を1つに決めたいとき',
  ],
  avoid: [
    '原因がすでに分かっていて、対策を提案したいだけのとき（課題・原因・解決型にする）',
    '原因が互いに影響し合い、ぐるぐる悪くなっているとき（因果ループ型にする）',
    '「人・設備・手順」など、原因の種類ごとに自由に洗い出したい段階のとき（フィッシュボーン型の方が書き出しやすい）',
  ],
  prompt:
    '16:9のスライドを1枚、「ロジックツリー型（logic tree）」で作ってください。いちばん上に小さく「新規会員が減った原因の分解（雑貨店チェーン）」、その下に結論の見出し「会員が減った原因は、声かけの減少にあった」を置きます。その下に、左から右へ広がる3段の木を描いてください。左端の根は黒い角丸の四角で、白い文字で「新規会員数（月）」と「300 → 240人」（数字は26pt前後の太字）を書きます。2段目は「来店客数 6,000人 → 6,000人」と「入会率 5.0% → 4.0%」の2つの四角、3段目は右端に5つの横長の四角を縦に並べ、左に項目名、右に値を書きます。3段目は、来店客数の下に「新規のお客さま 1,800人 → 1,800人」「再来店のお客さま 4,200人 → 4,200人」、入会率の下に「レジでの声かけ率 70% → 45%」「入会特典（500円引き） 変更なし」「申込の手順 変更なし」です。親と子は、直角に曲がる線でつないでください。線の太さは{{line:t}}ptの灰色にします。強調は「{{focus:t}}」にしてください（強調するときは、根から入会率、入会率からレジでの声かけ率までの線と、この2つの四角の枠をアクセント色{{accent:t}}にして枠を太くし、声かけ率の数字を太字にする。ほかの四角は白地に灰色の枠のまま）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、項目名は16pt以上。最下部に「※ 入会率＝新規会員数 ÷ 来店客数。1店舗あたりの月平均で、前年度の同じ月と比べた値。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「図形」→「四角形: 角を丸くする」で、根・2段目・3段目の四角を置きます。3段目の5つを全部選んで「図形の書式」→「配置」→「上下に整列」を押すと、縦の間隔がそろいます。親と子は「図形」の「線」の中にある、直角に曲がる線（カギ線）でつなぎ、線の端を四角の端に近づけると吸い付きます。四角を動かしても線が付いてくるので、あとから並べ替えやすくなります。早く形にしたいときは、「挿入」→「SmartArt」→「階層構造」から横向きに枝が伸びるもの（横方向の階層構造など）を選び、文字を入れてから「変換」→「図形に変換」で普通の図形に戻します。',
    'Googleスライドでは、「挿入」→「図形」→「図形」から角丸四角形を置き、つなぐ線は「挿入」→「線」→「カギ線コネクタ」を使います。四角の端にある点に線を近づけると吸い付き、四角を動かしても線が付いてきます。「挿入」→「図表」→「階層」にも枝分かれの図があるので、たたき台にしてもかまいません。強調したい枝は、線の色と太さ（3pt）、四角の枠線だけを変えます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。木は1枚の図（SVG）で描いていて、四角の位置と大きさを数字で決めています。枝を増やすときは、四角と線を1組ずつ足して、縦の位置をそろえてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">新規会員が減った原因の分解（雑貨店チェーン）</p>
  <h1 class="title">会員が減った原因は、声かけの減少にあった</h1>

  <svg class="lt-svg" viewBox="0 0 848 320" role="img" aria-label="新規会員数を来店客数と入会率に分け、入会率の下がりを声かけの減少まで掘り下げた図">
    <!-- 枝の線 -->
    <g class="lt-lines">
      <path d="M212 139 H232 V58 H252" />
      <path d="M212 139 H232 V220 H252" />
      <path d="M462 58 H495 V28 H528" />
      <path d="M462 58 H495 V88 H528" />
      <path d="M462 220 H495 V160 H528" />
      <path d="M462 220 H495 V220 H528" />
      <path d="M462 220 H495 V280 H528" />
    </g>
    <g class="lt-lines lt-hotlines">
      <path d="M212 139 H232 V220 H252" />
      <path d="M462 220 H495 V160 H528" />
    </g>

    <!-- 結果（根） -->
    <g class="lt-root">
      <rect x="0" y="94" width="212" height="90" rx="12" />
      <text class="lt-t1" x="106" y="128" text-anchor="middle">新規会員数（月）</text>
      <text class="lt-big" x="106" y="167" text-anchor="middle">300 → 240人</text>
    </g>

    <!-- 1段目の枝 -->
    <g class="lt-node">
      <rect x="252" y="26" width="210" height="64" rx="10" />
      <text class="lt-t1" x="268" y="53">来店客数</text>
      <text class="lt-t2" x="268" y="77">6,000人 → 6,000人</text>
    </g>
    <g class="lt-node lt-hot">
      <rect x="252" y="188" width="210" height="64" rx="10" />
      <text class="lt-t1" x="268" y="215">入会率</text>
      <text class="lt-t2" x="268" y="239">5.0% → 4.0%</text>
    </g>

    <!-- 2段目の枝 -->
    <g class="lt-leaf">
      <rect x="528" y="4" width="320" height="48" rx="8" />
      <text class="lt-t1" x="544" y="34">新規のお客さま</text>
      <text class="lt-t2" x="832" y="34" text-anchor="end">1,800人 → 1,800人</text>
    </g>
    <g class="lt-leaf">
      <rect x="528" y="64" width="320" height="48" rx="8" />
      <text class="lt-t1" x="544" y="94">再来店のお客さま</text>
      <text class="lt-t2" x="832" y="94" text-anchor="end">4,200人 → 4,200人</text>
    </g>
    <g class="lt-leaf lt-hot">
      <rect x="528" y="136" width="320" height="48" rx="8" />
      <text class="lt-t1" x="544" y="166">レジでの声かけ率</text>
      <text class="lt-t2" x="832" y="166" text-anchor="end">70% → 45%</text>
    </g>
    <g class="lt-leaf">
      <rect x="528" y="196" width="320" height="48" rx="8" />
      <text class="lt-t1" x="544" y="226">入会特典（500円引き）</text>
      <text class="lt-t2" x="832" y="226" text-anchor="end">変更なし</text>
    </g>
    <g class="lt-leaf">
      <rect x="528" y="256" width="320" height="48" rx="8" />
      <text class="lt-t1" x="544" y="286">申込の手順</text>
      <text class="lt-t2" x="832" y="286" text-anchor="end">変更なし</text>
    </g>
  </svg>

  <p class="note">※ 入会率＝新規会員数 ÷ 来店客数。1店舗あたりの月平均で、前年度の同じ月と比べた値。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  box-sizing: border-box;
  width: 960px;
  height: 540px;
  padding: 44px 56px 40px;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #1f2430;
  font-family: "Hiragino Sans", "Noto Sans JP", sans-serif;
  line-height: 1.4;
}
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; color: var(--accent); }
.title { margin: 0; font-size: 34px; font-weight: 800; line-height: 1.3; }
.lt-svg { display: block; flex: 1; min-height: 0; width: 100%; margin: 8px 0 4px; }
.lt-svg text { font-family: inherit; }
.lt-lines { fill: none; stroke: #c3c8d2; stroke-width: {{line:n}}; stroke-linejoin: round; }
.lt-hotlines { display: none; }
.lt-root rect { fill: #1f2430; }
.lt-root text { fill: #fff; }
.lt-node rect, .lt-leaf rect { fill: #fff; stroke: #c3c8d2; stroke-width: 2; }
.lt-t1 { font-size: 16px; font-weight: 800; fill: #1f2430; }
.lt-t2 { font-size: 16px; fill: #5a6070; font-variant-numeric: tabular-nums; }
.lt-big { font-size: 26px; font-weight: 800; font-variant-numeric: tabular-nums; }
.lt-root .lt-t1 { fill: #fff; }

/* 原因の筋を強調（data-focus="cause"）: 根 → 入会率 → 声かけ率 */
.slide[data-focus="cause"] .lt-hotlines { display: block; stroke: var(--accent); stroke-width: calc({{line:n}} + 1.5); }
.slide[data-focus="cause"] .lt-hot rect { stroke: var(--accent); stroke-width: 3; fill: color-mix(in srgb, var(--accent) 7%, #fff); }
.slide[data-focus="cause"] .lt-hot .lt-t1 { fill: var(--accent); }
.slide[data-focus="cause"] .lt-leaf.lt-hot .lt-t2 { fill: var(--accent); font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'cause',
      options: [
        { value: 'cause', label: '原因の筋を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'line', label: '枝の線の太さ', min: 1, max: 4, step: 0.5, value: 2, unit: '' },
  ],
  cautions: [
    'モレとダブりを数字で確かめること。「来店客数」と「入会率」のように掛け算で元の数に戻るか、「新規」と「再来店」のように足して元の数になるかを、発表の前に電卓で確かめます。足しても合わない分け方は、聞き手に必ず突っ込まれます。',
    '段を深くしすぎないこと。見本は3段で、5つの末端があります。それ以上深くすると文字が小さくなり、読めません。深い分析はExcelなどに残し、スライドには「手を打つ筋」に当たる枝を残します。',
    '同じ段の枝は、同じ切り口でそろえます。「来店客数」「入会率」のあとに「天気」を並べるような、種類の違うものを混ぜた分け方にしない。何で分けたのかを一言で言えるか確かめましょう。',
    '原因の枝だけ色を付け、変わっていない枝は灰色にします。全部の枝に色を付けると、結局どこが言いたいのか伝わりません。',
  ],
  similar: [
    { slug: 'fishbone', diff: 'フィッシュボーン型は、人・設備・手順などの種類ごとに、結果に効いていそうな原因を自由に洗い出す型です。ロジックツリー型は、モレなくダブりなく分けて、数字で絞り込む型です。' },
    { slug: 'problem-solution', diff: '課題・原因・解決型は、原因を1つに絞ったあとの提案用の型です。ロジックツリー型は、その前に「原因はどこか」を探した過程を見せるのに使います。' },
    { slug: 'decision-tree', diff: '意思決定ツリー型は、条件の分かれ道で「どれを選ぶか」を示す型です。ロジックツリー型は選ぶためではなく、分解して理解するための木です。' },
  ],
  faq: [
    {
      q: 'ロジックツリーとMECE（ミーシー）は何が違いますか？',
      a: 'MECEは「モレなく、ダブりなく」という考え方の名前で、ロジックツリーは、その考え方で課題を分解して描く図の名前です。ロジックツリーの枝を分けるときに、MECEになっているかを確かめます。',
    },
    {
      q: 'PowerPointにロジックツリーを作る機能はありますか？',
      a: '専用の機能はありませんが、「挿入」→「SmartArt」→「階層構造」に、横向きに枝が伸びる図があります。ただし文字数が多いと崩れやすいので、四角形とカギ線で組む方が、枝の長さや強調を細かく直せます。',
    },
    {
      q: 'ロジックツリーの木の向きは、左から右と上から下のどちらがよいですか？',
      a: 'スライドは横長なので、左から右が収まりやすく、項目名も横書きで読めます。上から下は、枝の数が多いときや、組織図のように見せたいときに向きます。どちらでも、結果を端に置き、読む向きと分解する向きをそろえましょう。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
