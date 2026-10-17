import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'before-after',
  no: 9,
  category: 'kousei',
  name: 'Before／After型',
  en: 'Before and after',
  aka: ['ビフォーアフター', '導入前後', '改善前後', '改善効果', '変化の比較'],
  mode: 'static',
  title: 'Before／After型とは？改善の前と後を並べて見せるスライドの作り方',
  description:
    '同じものの前と後を左右に並べて変化を見せる「Before／After型」のスライドを見本で解説。数字のそろえ方、変化の見せ方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '同じ物差しで前と後を左右に並べ、変化を数字で見せる。',
  what: [
    '同じ項目を使って、改善の前（Before）と後（After）を左右に並べる型です。見本では月次の売上報告の作り方を、「作成にかかる日数・転記ミス・担当者」の3つの物差しで比べています。左の前は灰色で控えめに、右の後はアクセント色で目立たせ、真ん中の矢印で時間の流れを示しています。右の端には「−83%」のような変化の数字を添えています。',
    'この型のよさは、改善した成果が、説明なしで伝わることです。決まりごとは、前と後で物差しを完全に同じにすること。項目の数・単位・順番が前後でずれると、聞き手が頭の中で計算し直すことになり、成果が薄れます。変化の数字は、画面の値から計算して、必ず検算します。',
  ],
  when: [
    '新しいツールや業務の進め方を導入した成果を、報告するとき',
    '社内改善の取り組みを発表し、効果を数字で見せたいとき',
    '導入事例や提案書で、お客さまの課題の「改善前」と「改善後」を見せたいとき',
    '店舗・画面デザイン・書類などの見た目の改善を、写真で並べて見せたいとき',
  ],
  avoid: [
    '前と後ではなく、別々の2つの案から選んでもらうとき（2カラム比較型にする）',
    '前後の間に何が変わったかが重要なとき（課題・原因・解決型で、原因と打ち手を見せる）',
    '数字が増えたり減ったりの推移を、年ごとに見せたいとき（折れ線推移型か縦棒グラフ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「Before／After型（before and after）」で作ってください。いちばん上に小さく「営業報告の自動化」、その下に結論の見出し「月次の売上報告は、3日から半日になります」を1行で置きます。その下に、角の丸い大きな枠を左右に2つ並べ、真ん中に右向きの矢印の丸を置いてください。左の枠は「Before」の札と「手作業で集計」、右の枠は「After」の札と「自動で集計」を上に書きます。どちらの枠にも同じ3つの項目を、同じ順番・同じ高さで並べます。項目名は左に16pt、値は右に38ptの太字で、単位は20ptです。Beforeの値は灰色にします。内容は、作成にかかる日数：Beforeは3日、Afterは0.5日。転記ミス（月あたり）：4件、0件。担当者：3人、1人。強調のしかたは「{{focus:t}}」にしてください（強調する場合は、Afterの枠線をアクセント色にして太くし、薄く塗って、札と値と矢印の丸をアクセント色にする）。変化の数字は「{{delta:t}}」にしてください（表示する場合は、Afterの各項目の右に、角の丸い小さな札で「−83%」「ゼロに」「2人減」と書く）。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。文字の大きさは、見出し32〜36pt、枠の名前22pt、札15pt、変化の数字16pt、注記13pt。最下部に「※ Beforeは2026年4〜6月の平均、Afterは7月の試行運用の結果。」と入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で、左右に2つの枠があるレイアウト（「2つのコンテンツ」）を選ぶと、左右を同じ大きさで始められます。見本のように揃えたいときは、左右それぞれに「挿入」→「表」で2列×3行の表（項目名と値）を作り、2つの表の高さをそろえます。真ん中には「挿入」→「図形」→「矢印: 右」を置きます。変化の数字は、右の表の外側に小さな「角丸四角形」を3つ置いて入れます。写真で前後を見せる場合は、「挿入」→「画像」で左右に同じ大きさで並べ、「図の形式」→「トリミング」で縦横の比率をそろえます。',
    'Googleスライドでも作り方は同じで、「挿入」→「表」で表を2つ作り、「挿入」→「図形」→「矢印」→「右矢印」を真ん中に置きます。Afterの枠だけに色を付けると、前から後への変化に目が行きます。数字の変化をグラフで見せたいときは、ExcelやGoogleスプレッドシートで、「前」と「後」の2本の棒グラフを作り、スライドに貼り付ける方法もあります。そのときも、目盛りは0から始めます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。左右の枠は同じ3行のグリッドなので、項目の高さは自然にそろいます。変化の数字（−83%など）は、値から計算し直して書き換えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-delta="{{delta}}">
  <p class="kicker">営業報告の自動化</p>
  <h1 class="title">月次の売上報告は、3日から半日になります</h1>

  <div class="body">
    <!-- 前 -->
    <div class="panel before">
      <div class="head"><span class="tag">Before</span><span class="name">手作業で集計</span></div>
      <div class="rows">
        <div class="row"><span class="k">作成にかかる日数</span><span class="v">3<small>日</small></span></div>
        <div class="row"><span class="k">転記ミス（月あたり）</span><span class="v">4<small>件</small></span></div>
        <div class="row"><span class="k">担当者</span><span class="v">3<small>人</small></span></div>
      </div>
    </div>

    <span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg></span>

    <!-- 後 -->
    <div class="panel after">
      <div class="head"><span class="tag">After</span><span class="name">自動で集計</span></div>
      <div class="rows">
        <div class="row"><span class="k">作成にかかる日数</span><span class="v">0.5<small>日</small></span><span class="d">−83%</span></div>
        <div class="row"><span class="k">転記ミス（月あたり）</span><span class="v">0<small>件</small></span><span class="d">ゼロに</span></div>
        <div class="row"><span class="k">担当者</span><span class="v">1<small>人</small></span><span class="d">2人減</span></div>
      </div>
    </div>
  </div>

  <p class="note">※ Beforeは2026年4〜6月の平均、Afterは7月の試行運用の結果。</p>
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
  font-size: 18px;
  line-height: 1.4;
}
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); }
.title { margin: 0; font-size: 34px; font-weight: 800; line-height: 1.3; letter-spacing: 0.01em; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

.body { flex: 1; display: grid; grid-template-columns: minmax(0, 1fr) 64px minmax(0, 1fr); align-items: stretch; margin: 20px 0 12px; min-height: 0; }
.panel { display: flex; flex-direction: column; padding: 18px 24px 8px; border: 2px solid #e3e5ea; border-radius: 12px; background: #fff; }
.head { display: flex; align-items: center; gap: 12px; padding-bottom: 12px; border-bottom: 1px solid #e3e5ea; }
.tag { padding: 2px 12px; border-radius: 999px; background: #f3f4f7; color: #5a6070; font-size: 15px; font-weight: 800; letter-spacing: 0.04em; }
.name { font-size: 22px; font-weight: 800; }
.rows { flex: 1; display: grid; grid-template-rows: repeat(3, minmax(0, 1fr)); }
.row { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; column-gap: 14px; border-bottom: 1px solid #f3f4f7; }
.row:last-child { border-bottom: 0; }
.k { font-size: 16px; color: #5a6070; }
.v { font-size: 38px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; text-align: right; }
.v small { margin-left: 2px; font-size: 20px; font-weight: 700; }
.before .v { color: #8a8f9c; }
.d { display: none; min-width: 76px; padding: 2px 10px; border-radius: 999px; background: #f3f4f7; color: #1f2430; font-size: 16px; font-weight: 800; text-align: center; }
.arrow { display: grid; place-items: center; }
.arrow svg { width: 44px; height: 44px; box-sizing: border-box; padding: 10px; border-radius: 50%; background: #f3f4f7; color: #5a6070; }

/* 変化の数字（つまみ: 変化の数字） */
.slide[data-delta="show"] .d { display: block; }

/* 強調（つまみ: 強調） */
.slide[data-focus="after"] .after { border-color: var(--accent); border-width: 3px; background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="after"] .after .tag { background: var(--accent); color: #fff; }
.slide[data-focus="after"] .after .v { color: var(--accent); }
.slide[data-focus="after"] .after .d { background: color-mix(in srgb, var(--accent) 14%, #fff); color: var(--accent); }
.slide[data-focus="after"] .arrow svg { background: var(--accent); color: #fff; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調',
      value: 'after',
      options: [
        { value: 'after', label: 'After（後）を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'delta',
      type: 'select',
      label: '変化の数字',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '前と後で、物差し（項目・単位・数え方）を完全にそろえます。前は「日数」、後は「時間」で書くと、聞き手が計算し直すことになります。見本のように、同じ項目を同じ順番で並べます。',
    '都合のいい項目だけを並べないことです。改善で増えたもの（費用や手間）も、同じ物差しで載せます。隠した項目があとで質問されると、資料全体の信用が下がります。',
    '変化の数字は、画面の数字から計算して、必ず検算します。「3日から0.5日」なら、減った割合は（3−0.5）÷3＝83%です。四捨五入のしかた（切り上げか切り捨てか）も、資料の中でそろえます。',
    '「いつ・どれだけの期間で・どの範囲で測った数字か」を、注記に書きます。見本のように、Beforeは過去3か月の平均、Afterは試行1か月の結果、と分かれば、聞き手は結果の確かさを判断できます。',
  ],
  similar: [
    { slug: 'two-column', diff: '2カラム比較型は、別々の2つの案を比べて1つを選んでもらう型です。Before／After型は、同じものの前と後を並べて、成果を見せます。' },
    { slug: 'as-is-to-be', diff: '現状・理想・差分型は、今の姿と目指す姿の差と、それを埋める打ち手を示す型です。Before／After型は、すでに起きた変化の報告に向いています。' },
    { slug: 'slope', diff: 'スロープグラフ型は、多くの項目の2時点の変化を、傾きのある線で比べる型です。項目が2〜4つまでなら、Before／After型の方が数字を大きく見せられます。' },
  ],
  faq: [
    {
      q: 'ビフォーアフターの資料で、見やすい数字の見せ方はありますか？',
      a: '前の値は灰色で小さめに、後の値はアクセント色で大きく書き、差を割合や「〇日減」のように言葉で添えます。数字だけを並べるより、一目で「良くなった」と分かります。',
    },
    {
      q: '写真でBefore／Afterを見せるときの注意点は？',
      a: '同じ場所・同じ角度・同じ明るさで撮った写真を、同じ大きさで並べます。条件がずれていると、実際の改善ではなく、撮り方の違いだと疑われます。人の顔や個人情報が写っていないかも確認します。',
    },
    {
      q: 'Before／After型と、2カラム比較型はどう使い分けますか？',
      a: '「同じものが、どう変わったか」を見せるならBefore／After型です。「どちらの案を選ぶか」を見てもらうなら2カラム比較型です。前者は成果の報告、後者は意思決定のための資料に向いています。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
