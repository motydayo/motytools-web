import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'case-compare',
  no: 88,
  category: 'teian',
  name: 'ケース横断比較型',
  en: 'Case comparison',
  aka: ['事例比較', '導入事例の比較表', '事例一覧', '横断比較', '事例まとめ'],
  mode: 'static',
  title: '導入事例の比較表の作り方｜複数の事例を同じ項目で並べるスライド【PowerPoint・Googleスライド】',
  description:
    '3社の導入事例を、課題・導入内容・期間・成果の同じ項目で並べるケース横断比較型のスライドを見本で解説。項目のそろえ方、成果の行の強調、PowerPoint・Googleスライドでの作り方、AIへの指示文、HTMLまでまとめました。',
  oneLine: '複数の事例を同じ項目の行で並べ、共通点と違いを見せる。',
  what: [
    '横に事例（会社）を3つ並べ、縦に「課題・導入したこと・期間・成果」の同じ項目を並べて、表の形で比べる型です。見本では、規模も業種も違う3社が、同じ勤怠システムを入れて、どんな課題をどう解決し、どれだけ成果が出たかを1枚にしています。いちばん下の成果の行だけを、薄いアクセント色の背景と太い数字で目立たせています。',
    '事例を1つずつ紹介するより、並べて比べるほうが「どんな会社にも効く」という説得力が出ます。決まりごとは、全部の事例で項目と順番をそろえること、成果の指標をそろえること（時間なら時間、件数なら件数）、事例を3〜4つに絞ることです。事例ごとに項目がばらばらだと、比べる意味がなくなります。',
  ],
  when: [
    '営業資料で、いろいろな業種・規模の導入事例をまとめて見せたいとき',
    '社内の複数の部署や拠点での取り組みを、同じ項目で振り返るとき',
    '自社の検討に使う参考事例を、他社の例で3つ集めて比べるとき',
    '導入の進め方（期間・費用・体制）の違いを、事例で見せたいとき',
  ],
  avoid: [
    '1つの事例を詳しく紹介したいとき（事例紹介カード型か顧客の声＋成果型にする）',
    '比べるものが事例ではなく、自社の案や商品のとき（選択肢比較表型にする）',
    '事例が6つ以上あり、文字が小さくなるとき（代表の3つに絞り、残りは別の資料にまとめる）',
  ],
  prompt:
    '16:9のスライドを1枚、「ケース横断比較型（case comparison）」で作ってください。いちばん上に小さく「勤怠システム「はたらきノート」導入3社の比較」、その下に結論の見出し「3社とも、勤怠の集計の手間と間違いが大きく減った」を1行で置きます。その下に表を置き、左端に項目名の列（課題・導入したこと・期間・成果）、右に3社の列を並べてください。1行目は見出し行で、各列に会社名（20pt程度・太字）と、その下に業種・人数（15pt以上・灰色）を書き、下に太い線を引きます。3社は、やまぶき薬局グループ（薬局・80名）、大和精機（製造・210名）、北斗運輸（物流・45名）です。課題の行＝やまぶき「紙のタイムカードの集計に毎月丸1日」、大和精機「3拠点で締め日と形式がばらばら」、北斗運輸「ドライバーの打刻漏れが多い」。導入したことの行＝やまぶき「スマホで打刻できる勤怠アプリ」、大和精機「3拠点を1つの勤怠システムに統一」、北斗運輸「乗務開始と同時に打刻できる車載端末」。期間の行＝1か月、3か月、2週間。成果の行＝やまぶき「月の集計時間 24時間 → 3時間」、大和精機「修正依頼（月） 40件 → 6件」、北斗運輸「打刻漏れ（月） 30件 → 0件」（導入前の数字は灰色、導入後の数字は32pt程度・太字）。課題・導入・期間の行は17pt以上の文字で、行の間は細い灰色の線で区切ります。成果の行は「{{focus:t}}」にしてください（目立たせるときは、行全体に薄いアクセント色{{accent:t}}の背景を敷き、導入後の数字と項目名をアクセント色にする）。項目名の列は「{{labels:t}}」にしてください。最下部に「※ 会社名・数字は架空の例。成果は導入前と導入後6か月目の比較。」と注記（12pt以上）を入れてください。会社名と数字は私が書いたものだけを使い、新しいものを足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で4列×6行（見出し行を含む）の表を作ります。1列目を項目名、2〜4列目を3社にして、見出し行の下の線だけを太く黒に、そのほかの罫線は細い灰色の横線だけにします（「テーブル デザイン」→「罫線」）。成果の行だけ、行全体を選んで「塗りつぶし」で薄いアクセント色にし、導入後の数字を太字・大きい文字にします。列の幅を3社とも同じにするには、3つの列を選んで「レイアウト」→「幅をそろえる」を使います。',
    'Googleスライドでも「挿入」→「表」で同じ形の表を作り、セルを選んで上のバーの「塗りつぶしの色」「枠線の色」「枠線の太さ」で整えます。事例の元データは、まずスプレッドシートに「会社・業種・課題・導入内容・期間・導入前の数字・導入後の数字」の列で整理し、事例ごとに同じ項目が埋まっているかを確かめてからスライドに写すと、項目の抜けを防げます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。表は div の格子（grid）で作ってあり、1つの事例は縦に並ぶ4つのセルです。事例を増やすときは、列数（grid-template-columns）の数も増やしてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-labels="{{labels}}">
  <p class="kicker">勤怠システム「はたらきノート」導入3社の比較</p>
  <h1 class="title">3社とも、勤怠の集計の手間と間違いが大きく減った</h1>

  <!-- 1列目が項目名、2〜4列目が3社 -->
  <div class="table">
    <span class="corner"></span>
    <span class="head"><span class="cname">やまぶき薬局グループ</span><span class="csub">薬局・80名</span></span>
    <span class="head"><span class="cname">大和精機</span><span class="csub">製造・210名</span></span>
    <span class="head"><span class="cname">北斗運輸</span><span class="csub">物流・45名</span></span>

    <span class="label">課題</span>
    <span class="cell">紙のタイムカードの集計に毎月丸1日</span>
    <span class="cell">3拠点で締め日と形式がばらばら</span>
    <span class="cell">ドライバーの打刻漏れが多い</span>

    <span class="label">導入したこと</span>
    <span class="cell">スマホで打刻できる勤怠アプリ</span>
    <span class="cell">3拠点を1つの勤怠システムに統一</span>
    <span class="cell">乗務開始と同時に打刻できる車載端末</span>

    <span class="label">期間</span>
    <span class="cell">1か月</span>
    <span class="cell">3か月</span>
    <span class="cell">2週間</span>

    <span class="label res-label">成果</span>
    <span class="cell res"><span class="what">月の集計時間</span><span class="nums"><span class="before">24時間</span><span class="arrow">→</span><b class="after">3時間</b></span></span>
    <span class="cell res"><span class="what">修正依頼（月）</span><span class="nums"><span class="before">40件</span><span class="arrow">→</span><b class="after">6件</b></span></span>
    <span class="cell res"><span class="what">打刻漏れ（月）</span><span class="nums"><span class="before">30件</span><span class="arrow">→</span><b class="after">0件</b></span></span>
  </div>

  <p class="note">※ 会社名・数字は架空の例。成果は導入前と導入後6か月目の比較。</p>
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
.title { margin: 0; font-size: 34px; font-weight: 800; }

.table {
  flex: 1;
  display: grid;
  grid-template-columns: 112px repeat(3, 1fr);
  grid-template-rows: 58px repeat(3, 1fr) 1.25fr;
  margin: 16px 0 10px;
}
.head { display: flex; flex-direction: column; justify-content: center; padding: 0 16px; border-bottom: 2px solid #1f2430; }
.cname { font-size: 20px; font-weight: 800; line-height: 1.25; }
.csub { font-size: 15px; font-weight: 700; color: #5a6070; }
.label { display: flex; align-items: center; border-bottom: 1px solid #e3e5ea; font-size: 16px; font-weight: 800; color: #5a6070; }
.cell { display: flex; align-items: center; padding: 0 16px; border-bottom: 1px solid #e3e5ea; font-size: 17px; font-weight: 700; }

/* 成果の行 */
.res { flex-direction: column; align-items: flex-start; justify-content: center; gap: 2px; border-bottom: 0; }
.res-label { border-bottom: 0; }
.what { font-size: 15px; font-weight: 700; color: #5a6070; }
.nums { display: inline-flex; align-items: center; gap: 8px; }
.before { font-size: 20px; font-weight: 800; color: #8a8f9c; }
.arrow { color: #8a8f9c; }
.after { font-size: 32px; font-weight: 800; line-height: 1.15; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 成果の行を目立たせる（data-focus="on"） */
.slide[data-focus="on"] .res,
.slide[data-focus="on"] .res-label { background: color-mix(in srgb, var(--accent) 8%, #fff); }
.slide[data-focus="on"] .res-label { padding-left: 8px; color: var(--accent); }
.slide[data-focus="on"] .after { color: var(--accent); }

/* 項目名の列を隠す（data-labels="hide"） */
.slide[data-labels="hide"] .corner,
.slide[data-labels="hide"] .label { display: none; }
.slide[data-labels="hide"] .table { grid-template-columns: repeat(3, 1fr); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '成果の行',
      value: 'on',
      options: [
        { value: 'on', label: '色で目立たせる' },
        { value: 'off', label: '目立たせない' },
      ],
    },
    {
      key: 'labels',
      type: 'select',
      label: '項目名の列',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '全部の事例で、項目と順番をそろえます。ある事例だけ「費用」がある、別の事例だけ「担当者の声」があるとなると、比べられません。項目に合わせて情報を集め直すか、載せられない項目は「非公開」と書きます。',
    '成果の数字は、指標と単位をそろえます。1社は「時間」、1社は「件数」、1社は「金額」だと、どれがすごいのか分かりません。見本のように指標が違うときは、行の中に何の数字か（月の集計時間、修正依頼の件数）を必ず書きます。',
    '事例は3〜4つに絞ります。5つ以上並べると、1つあたりの幅が狭くなって文字が小さくなります。業種・規模・課題がばらけた代表例を選ぶと、「うちにも当てはまる」と思ってもらえます。',
    '共通点を見出しで言い切ります。表を並べただけで、聞き手に共通点を探させないこと。見本の見出しのように、「3社とも〜が減った」と1文で結論を書きます。事例によって成果の出方が違うなら、その違いが何で生まれたかも注記に書きます。',
  ],
  similar: [
    { slug: 'option-table', diff: '選択肢比較表型は、自社が選ぶ3つ以上の案を表で比べる型です。ケース横断比較型は、他社などの事例を同じ項目で比べ、共通点を見せます。' },
    { slug: 'case-card', diff: '事例紹介カード型は、1つの事例を写真・課題・成果のカードにまとめる型です。ケース横断比較型は、複数の事例を1枚で並べます。' },
    { slug: 'testimonial', diff: '顧客の声＋成果型は、1社のお客さまの言葉と数字の成果を並べる型です。ケース横断比較型は、数字を中心に、複数社の違いを見せます。' },
  ],
  faq: [
    {
      q: '導入事例の比較表には、どんな項目を入れればよいですか？',
      a: '「課題・導入したこと・期間・成果」の4つが基本です。費用を出せるときは「費用」の行を足します。項目は全部の事例でそろえ、成果の数字は同じ指標（時間・件数・金額のどれか）で比べられるようにします。',
    },
    {
      q: '事例は何社まで並べられますか？',
      a: '3〜4社が見やすい上限です。5社を超えると、列の幅が狭くなり、文字が小さくなって読めません。多くの事例を見せたいときは、スライドを分けるか、別の事例集にまとめます。',
    },
    {
      q: '導入事例に会社名を載せるには、許可が必要ですか？',
      a: '必要です。社名を出すと、お客さまの広告のように見えるため、事前に載せてよいか書面などで確認しておきます。許可が取れない場合は、「製造・210名」のように業種と規模だけにします。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
