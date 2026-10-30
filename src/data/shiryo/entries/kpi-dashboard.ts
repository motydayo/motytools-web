import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'kpi-dashboard',
  no: 10,
  category: 'kousei',
  name: 'KPIダッシュボード型',
  en: 'KPI dashboard',
  aka: ['KPIスライド', '主要指標', '数字カード', 'ダッシュボード', '実績サマリー', '指標一覧'],
  mode: 'static',
  title: 'KPIダッシュボード型とは？大事な数字をカードで一覧にするスライドの作り方',
  description:
    '大事な数字を複数のカードで一覧にする「KPIダッシュボード型」のスライドを見本で解説。目標との比べ方、達成と未達の見せ方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '大事な数字を同じ形のカードで並べ、目標に届いたかを示す。',
  what: [
    '大事な数字を、同じ形のカードにして並べる型です。見本では営業部の上期の実績を「売上高・新規契約・解約率・顧客満足度」の4つのカードで示しています。どのカードも「名前・大きな数字・前年との比べ・目標と達成状況・月ごとの小さな棒」の順に同じ形で、未達の新規契約だけが赤い枠と「未達」の札になっています。見出しには、4つを見た結論を書きます。',
    'この型のよさは、会議の最初の1分で、全体の調子が分かることです。決まりごとは、カードを4つ前後に絞ることと、「良い・悪い」を色だけで伝えないこと。見本のように「達成／未達」の文字と印を併用すると、白黒で印刷しても、色の見分けがつきにくい人にも伝わります。',
  ],
  when: [
    '月次・四半期の会議で、部署の実績をまとめて報告するとき',
    '経営層に、主要な指標の現在地を1枚で見せたいとき',
    '事業の目標（KPI）に対して、どこまで進んでいるかを共有するとき',
    '前年との比較や、目標との差を、数字で一覧にしたいとき',
  ],
  avoid: [
    '指標が8個以上あり、カードに収まらないとき（重要な4つに絞り、残りは別のスライドか資料にする）',
    '1つの数字だけを印象づけたいとき（数字インパクト型にして、画面いっぱいに見せる）',
    '数字の推移を詳しく読ませたいとき（折れ線推移型や縦棒グラフ型で、グラフを大きく見せる）',
  ],
  prompt:
    '16:9のスライドを1枚、「KPIダッシュボード型（KPI dashboard）」で作ってください。いちばん上に小さく「営業部 上期の実績（2026年4〜9月）」、その下に結論の見出し「4指標のうち3つが目標を達成、新規契約だけが未達」を1行で置きます。その下に、同じ大きさのカードを{{layout:t}}で4つ並べてください。どのカードも、上から「指標の名前（16pt）」「大きな数字（44〜48pt）と単位（20pt）」「前年との比べ（16pt）」「細い線で区切って、目標（15pt）と達成状況の札（15pt）」の順で書きます。月ごとの棒は「{{bars:t}}」にしてください（表示する場合は、カードの下に4月〜9月の6本の小さな縦棒を並べ、下の線を0にして、最後の1本だけをアクセント色、ほかは薄い灰色にし、左下に「4月」、右下に「9月」と書く）。カードの内容は、(1)売上高 1.28億円、前年比 +12%、目標 1.20億円、達成。月ごとの値は（億円）0.19・0.20・0.21・0.22・0.23・0.23。(2)新規契約 342件、前年比 +8%、目標 360件、未達。月ごとの値は50・52・56・60・62・62。(3)解約率（月平均）1.9%、前年差 −0.4pt、目標 2.0%以下、達成。月ごとの値は2.4・2.2・2.0・1.8・1.6・1.4。(4)顧客満足度 4.3（5点満点）、前年差 +0.2、目標 4.2以上、達成。月ごとの値は4.1・4.2・4.2・4.3・4.4・4.6。達成の札は灰色の地に黒の文字とチェックの印、未達のカードだけは枠線と札を赤（#d0453a）にして、「未達」の文字と印を付けます。色はアクセント色{{accent:t}}の1色と、未達を示す赤だけで、ほかは白・灰色・黒です。最下部に「※ 棒は月ごとの値で、下の線が0。売上高・新規契約は6か月の合計、解約率・満足度は6か月の平均。」と13ptで入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」を4つ並べてカードにし、「図形の書式」→「配置」で、大きさと間隔をそろえます。カードの中の文字は、1つの図形に全部入れず、名前・数字・比べ・目標を別々の「テキスト ボックス」で置くと、数字の大きさを自由に変えられます。月ごとの棒は、「挿入」→「グラフ」→「縦棒」で小さなグラフを作り、軸と目盛りと枠線を消して貼り付けます。このとき縦軸の最小値は必ず0にします（軸の書式設定で「最小値」を0にする）。',
    'Googleスライドでも、角丸四角形を4つ並べてカードにします。月ごとの棒は、Googleスプレッドシートで、数字の範囲を選んで「挿入」→「グラフ」→「縦棒グラフ」を作り、凡例・軸・枠線を消してから、スライドに貼り付けます（貼り付けるときに「スプレッドシートへのリンク」を選ぶと、後で数字を更新しやすくなります）。目標に届かなかったカードだけ、枠線の色を赤に変えると、そこに目が行きます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。棒の高さは、値を目盛りの最大で割った割合で決めているので、値を書き換えるときは、棒の最大（max）も一緒に見直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-layout="{{layout}}" data-bars="{{bars}}">
  <p class="kicker">営業部 上期の実績（2026年4〜9月）</p>
  <h1 class="title">4指標のうち3つが目標を達成、新規契約だけが未達</h1>

  <!-- 棒の高さ = 値 ÷ max × 100%（下の線が0） -->
  <div class="cards">
    <div class="card">
      <span class="label">売上高</span>
      <span class="value">1.28<small>億円</small></span>
      <span class="delta">前年比 +12%</span>
      <span class="status"><span class="target">目標 1.20億円</span><span class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>達成</span></span>
      <span class="chart">
        <span class="bars" style="--max: 0.25"><i style="--v: 0.19"></i><i style="--v: 0.2"></i><i style="--v: 0.21"></i><i style="--v: 0.22"></i><i style="--v: 0.23"></i><i style="--v: 0.23"></i></span>
        <span class="x"><span>4月</span><span>9月</span></span>
      </span>
    </div>
    <div class="card is-ng">
      <span class="label">新規契約</span>
      <span class="value">342<small>件</small></span>
      <span class="delta">前年比 +8%</span>
      <span class="status"><span class="target">目標 360件</span><span class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v7M12 18v.5" /></svg>未達</span></span>
      <span class="chart">
        <span class="bars" style="--max: 70"><i style="--v: 50"></i><i style="--v: 52"></i><i style="--v: 56"></i><i style="--v: 60"></i><i style="--v: 62"></i><i style="--v: 62"></i></span>
        <span class="x"><span>4月</span><span>9月</span></span>
      </span>
    </div>
    <div class="card">
      <span class="label">解約率（月平均）</span>
      <span class="value">1.9<small>%</small></span>
      <span class="delta">前年差 −0.4pt</span>
      <span class="status"><span class="target">目標 2.0%以下</span><span class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>達成</span></span>
      <span class="chart">
        <span class="bars" style="--max: 3"><i style="--v: 2.4"></i><i style="--v: 2.2"></i><i style="--v: 2.0"></i><i style="--v: 1.8"></i><i style="--v: 1.6"></i><i style="--v: 1.4"></i></span>
        <span class="x"><span>4月</span><span>9月</span></span>
      </span>
    </div>
    <div class="card">
      <span class="label">顧客満足度</span>
      <span class="value">4.3<small>/ 5</small></span>
      <span class="delta">前年差 +0.2</span>
      <span class="status"><span class="target">目標 4.2以上</span><span class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>達成</span></span>
      <span class="chart">
        <span class="bars" style="--max: 5"><i style="--v: 4.1"></i><i style="--v: 4.2"></i><i style="--v: 4.2"></i><i style="--v: 4.3"></i><i style="--v: 4.4"></i><i style="--v: 4.6"></i></span>
        <span class="x"><span>4月</span><span>9月</span></span>
      </span>
    </div>
  </div>

  <p class="note">※ 棒は月ごとの値で、下の線が0。売上高・新規契約は6か月の合計、解約率・満足度は6か月の平均。</p>
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

.cards { flex: 1; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin: 18px 0 10px; min-height: 0; }
.card { display: flex; flex-direction: column; padding: 16px; border: 2px solid #e3e5ea; border-radius: 12px; background: #fff; min-width: 0; }
.label { font-size: 16px; font-weight: 700; color: #5a6070; }
.value { margin-top: 4px; font-size: 48px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
.value small { margin-left: 4px; font-size: 20px; font-weight: 700; letter-spacing: 0; }
.delta { margin-top: 4px; font-size: 16px; font-weight: 700; color: #5a6070; }
.status { display: flex; flex-direction: column; align-items: flex-start; gap: 6px; margin-top: 10px; padding-top: 10px; border-top: 1px solid #e3e5ea; }
.target { font-size: 15px; color: #5a6070; }
.chip { display: inline-flex; align-items: center; gap: 4px; padding: 2px 12px 2px 8px; border-radius: 999px; background: #f3f4f7; color: #1f2430; font-size: 15px; font-weight: 800; }
.chip svg { width: 14px; height: 14px; }
.card.is-ng { border-color: #d0453a; }
.card.is-ng .chip { background: #fbeceb; color: #d0453a; }
.chart { display: flex; flex-direction: column; gap: 4px; margin-top: auto; padding-top: 12px; }
.bars { display: flex; align-items: flex-end; gap: 4px; height: 52px; border-bottom: 1px solid #8a8f9c; }
.bars i { display: block; flex: 1; height: calc(var(--v) / var(--max) * 100%); border-radius: 2px 2px 0 0; background: #c3c8d2; }
.bars i:last-child { background: var(--accent); }
.x { display: flex; justify-content: space-between; font-size: 13px; color: #8a8f9c; }

/* 月ごとの棒（つまみ: 月ごとの棒） */
.slide[data-bars="hide"] .chart { display: none; }

/* 2×2（つまみ: 並べ方）。左に数字、右に棒 */
.slide[data-layout="grid"] .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 14px; }
.slide[data-layout="grid"] .card { display: grid; grid-template-columns: minmax(0, 1fr) auto; grid-template-rows: auto auto auto 1fr; padding: 12px 18px; }
.slide[data-layout="grid"] .label,
.slide[data-layout="grid"] .value,
.slide[data-layout="grid"] .delta,
.slide[data-layout="grid"] .status { grid-column: 1; }
.slide[data-layout="grid"] .value { font-size: 44px; margin-top: 0; }
.slide[data-layout="grid"] .status { flex-direction: row; align-items: center; flex-wrap: wrap; gap: 4px 10px; margin-top: 8px; padding-top: 8px; align-self: end; }
.slide[data-layout="grid"] .chart { grid-column: 2; grid-row: 1 / span 4; width: 150px; margin: 0 0 0 20px; padding: 4px 0 0; justify-content: flex-end; }
.slide[data-layout="grid"] .bars { height: auto; flex: 1; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'layout',
      type: 'select',
      label: '並べ方',
      value: 'row',
      options: [
        { value: 'row', label: '横に4つ' },
        { value: 'grid', label: '2×2' },
      ],
    },
    {
      key: 'bars',
      type: 'select',
      label: '月ごとの棒',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '指標は4つ前後に絞ります。8個、10個とカードを並べると、全部が同じ重さに見え、どれを見ればいいか分からなくなります。「会議で口に出す数字」だけを残し、残りは資料に回します。',
    '数字だけを並べず、必ず「比べる相手」を添えます。1.28億円と言われても、多いのか少ないのか分かりません。目標、前年、前月のどれと比べるのかを、見本のように全カードで同じにそろえます。',
    '良い・悪いを色だけで伝えないことです。赤と緑の見分けがつきにくい人もいますし、白黒で印刷すると色は消えます。「達成」「未達」の文字と、チェックや「！」の印を一緒に付けます。',
    '「低いほうが良い」指標（解約率・不良率・待ち時間など）は、増減の向きと良し悪しが逆になります。見本の解約率のように、前年差の符号（−0.4pt）と目標の言い方（2.0%以下）を丁寧に書き、「−0.4pt」を悪化と読み間違えられないようにします。',
  ],
  similar: [
    { slug: 'big-number', diff: '数字インパクト型は、1つの数字を画面いっぱいに見せる型です。KPIダッシュボード型は、複数の数字を同じ形で並べ、全体の調子を見せます。' },
    { slug: 'target-actual', diff: '目標・実績型は、目標に対する達成度を、棒やメーターで詳しく見せる型です。KPIダッシュボード型は、達成か未達かを札で示すにとどめ、数を多く並べます。' },
    { slug: 'executive-summary', diff: 'エグゼクティブサマリー型は、資料全体の結論と要点を文章でまとめる型です。KPIダッシュボード型は、数字を中心にした一覧です。' },
  ],
  faq: [
    {
      q: 'KPIとは何ですか？スライドにはいくつ載せるのが適切ですか？',
      a: 'KPIは「重要業績評価指標」のことで、目標に向かって進んでいるかを測る数字です。スライドには、4つ前後に絞るのが読みやすい目安です。多すぎると、聞き手はどれが大事なのか判断できなくなります。',
    },
    {
      q: 'ダッシュボードのスライドに、グラフは入れたほうがいいですか？',
      a: '数字の推移が重要な指標だけ、小さな棒を添えると、傾向が分かります。見本の棒は、傾向を見せるための補助なので、目盛りや数字は付けず、ただし下の線は必ず0にします。詳しく読ませたいグラフは、別のスライドで大きく見せます。',
    },
    {
      q: 'PowerPointやExcelで、KPIのカードを手早く作るには？',
      a: '1枚目のカードを完成させ、コピーして中身だけ書き換えると、形がそろいます。数字はExcelで計算して貼り付けると、検算の間違いを防げます。毎月作り直す場合は、カードの図形を残しておき、数字だけを入れ替える運用にします。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
