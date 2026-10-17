import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'line-chart',
  no: 28,
  category: 'data',
  name: '折れ線推移型',
  en: 'Line chart',
  aka: ['折れ線グラフ', '推移グラフ', '時系列グラフ', 'トレンドグラフ', 'ラインチャート'],
  mode: 'static',
  title: '折れ線グラフとは？数の推移を1枚で伝えるスライドの作り方と見本【PowerPoint】',
  description:
    '月ごとの利用者数など、数の移り変わりを線でつなぐ「折れ線推移型」のスライドを見本で解説。点の数字を書く場所、縦軸を0から始める理由、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '数の移り変わりを、点を結んだ1本の線で見せる。',
  what: [
    '横に時間（月や年）を並べ、それぞれの数の高さに点を打って、順番に線でつなぐ型です。見本では12か月の月間利用者数を1本の線で描き、いちばん最初の点（18.2万人）と最後の点（30.2万人）にだけ数字を書いています。見出しには「1年で1.7倍の30万人に」と結論を書き、線の右上がりがその根拠になっています。',
    '折れ線は「上がっているか、下がっているか、どこで曲がったか」を見せるのが得意です。縦の目盛りは0から始めるのが原則で、点の数字は最初と最後、そして伝えたい山や谷だけに絞ります。全部の点に数字を書くと、線の形が読めなくなります。',
  ],
  when: [
    '月次の売上・利用者数・問い合わせ件数など、期間が長く点の数が多いデータの流れを見せたいとき',
    '「いつから増えたか」「どこで落ちたか」という変化のきっかけを会議で説明したいとき',
    '計画と実績、去年と今年のように、2〜3本の線を重ねて動きを比べたいとき',
  ],
  avoid: [
    '点が3〜5個しかなく、一つひとつの大きさを比べたいとき（縦棒グラフ型にする）',
    '線の下の「量の大きさ」そのものを見せたいとき（面グラフ型にする）',
    '全体に占める割合の移り変わりを見せたいとき（100%積み上げ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「折れ線推移型（line chart）」で作ってください。いちばん上に小さく「月間アクティブ利用者数（2025年4月〜2026年3月）」、その下に結論の見出し「月間利用者は1年で1.7倍の30万人に」を置きます。スライドの残りの広い場所に折れ線グラフを1つ置き、横に4月から3月までの12か月を並べ、値は順に18.2・18.9・19.4・20.8・21.5・22.9・24.1・25.3・26.0・27.8・28.9・30.2（万人）です。縦の目盛りは0から35まで5刻みにし、必ず0から始めてください。線の色はアクセント色{{accent:t}}、太さは{{w:t}}pt前後にし、点は小さな丸にします。数字を書く点は「{{labels:t}}」にして、最後の点（30.2）は24pt前後の太字・アクセント色で大きくします。目盛りの線は薄い灰色にし、凡例は付けません。立体・影・グラデーションは使わず、見出しは32〜36pt、目盛りと月の名前は14pt以上にしてください。下に「※ 各月末時点の、その月に1回以上使った人の数。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「折れ線」→「マーカー付き折れ線」を選び、出てきた表に月と値を入れます。凡例（線の名前の表示）は線が1本なら不要なので、「グラフのデザイン」→「グラフ要素を追加」→「凡例」→「なし」で消します。縦軸を右クリックして「軸の書式設定」を開き、最小値が0になっているか確かめます。数字は、最後の点を1回クリックで全体、もう1回クリックでその点だけが選ばれるので、右クリック→「データラベルの追加」で出します。最初の点も同じようにします。線の太さと色は、線を右クリック→「データ系列の書式設定」で変えます。',
    'Googleスライドでは、「挿入」→「グラフ」→「折れ線」を選ぶとサンプルのグラフが入ります。右上の︙（その他）→「ソースを開く」でスプレッドシートが開くので、月と値を入れます。グラフの編集画面の「カスタマイズ」→「系列」で線の色・太さ・点の大きさを整え、「縦軸」で最小値を0にします。特定の点の数字は、同じ「系列」の中の「データポイントの書式設定」で点を追加して出します。直したらスライドに戻り、グラフの「更新」を押します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。点の位置は「月の順番」と「値 ÷ 目盛りの最大（35）」から計算した数字で書いてあるので、値を変えるときはAIに「点の座標も計算し直して」と頼んでください。ExcelやスプレッドシートのグラフをAIに説明するだけなら、表の値を貼るのが確実です。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-labels="{{labels}}">
  <p class="kicker">月間アクティブ利用者数（2025年4月〜2026年3月）</p>
  <h1 class="title">月間利用者は1年で1.7倍の30万人に</h1>

  <!-- 図は幅848×高さ330。横=月の順番、縦=値 ÷ 35 から計算した位置 -->
  <div class="body">
    <svg class="chart" viewBox="0 0 848 330">
      <text class="unit" x="0" y="14">（万人）</text>
      <line class="grid base" x1="48" x2="776" y1="292" y2="292" /><text class="ytick" x="38" y="297" text-anchor="end">0</text>
      <line class="grid" x1="48" x2="776" y1="254.6" y2="254.6" /><text class="ytick" x="38" y="259.6" text-anchor="end">5</text>
      <line class="grid" x1="48" x2="776" y1="217.1" y2="217.1" /><text class="ytick" x="38" y="222.1" text-anchor="end">10</text>
      <line class="grid" x1="48" x2="776" y1="179.7" y2="179.7" /><text class="ytick" x="38" y="184.7" text-anchor="end">15</text>
      <line class="grid" x1="48" x2="776" y1="142.3" y2="142.3" /><text class="ytick" x="38" y="147.3" text-anchor="end">20</text>
      <line class="grid" x1="48" x2="776" y1="104.9" y2="104.9" /><text class="ytick" x="38" y="109.9" text-anchor="end">25</text>
      <line class="grid" x1="48" x2="776" y1="67.4" y2="67.4" /><text class="ytick" x="38" y="72.4" text-anchor="end">30</text>
      <line class="grid" x1="48" x2="776" y1="30" y2="30" /><text class="ytick" x="38" y="35" text-anchor="end">35</text>
      <text class="xtick" x="78.3" y="318" text-anchor="middle">4月</text>
      <text class="xtick" x="139" y="318" text-anchor="middle">5月</text>
      <text class="xtick" x="199.7" y="318" text-anchor="middle">6月</text>
      <text class="xtick" x="260.3" y="318" text-anchor="middle">7月</text>
      <text class="xtick" x="321" y="318" text-anchor="middle">8月</text>
      <text class="xtick" x="381.7" y="318" text-anchor="middle">9月</text>
      <text class="xtick" x="442.3" y="318" text-anchor="middle">10月</text>
      <text class="xtick" x="503" y="318" text-anchor="middle">11月</text>
      <text class="xtick" x="563.7" y="318" text-anchor="middle">12月</text>
      <text class="xtick" x="624.3" y="318" text-anchor="middle">1月</text>
      <text class="xtick" x="685" y="318" text-anchor="middle">2月</text>
      <text class="xtick" x="745.7" y="318" text-anchor="middle">3月</text>
      <polyline class="line" points="78.3,155.8 139,150.5 199.7,146.8 260.3,136.3 321,131.1 381.7,120.6 442.3,111.6 503,102.6 563.7,97.4 624.3,83.9 685,75.7 745.7,65.9" />
      <circle class="dot edge" cx="78.3" cy="155.8" r="4.5" /><text class="lab edge" x="78.3" y="143.8" text-anchor="middle">18.2</text>
      <circle class="dot" cx="139" cy="150.5" r="4.5" /><text class="lab" x="139" y="138.5" text-anchor="middle">18.9</text>
      <circle class="dot" cx="199.7" cy="146.8" r="4.5" /><text class="lab" x="199.7" y="134.8" text-anchor="middle">19.4</text>
      <circle class="dot" cx="260.3" cy="136.3" r="4.5" /><text class="lab" x="260.3" y="124.3" text-anchor="middle">20.8</text>
      <circle class="dot" cx="321" cy="131.1" r="4.5" /><text class="lab" x="321" y="119.1" text-anchor="middle">21.5</text>
      <circle class="dot" cx="381.7" cy="120.6" r="4.5" /><text class="lab" x="381.7" y="108.6" text-anchor="middle">22.9</text>
      <circle class="dot" cx="442.3" cy="111.6" r="4.5" /><text class="lab" x="442.3" y="99.6" text-anchor="middle">24.1</text>
      <circle class="dot" cx="503" cy="102.6" r="4.5" /><text class="lab" x="503" y="90.6" text-anchor="middle">25.3</text>
      <circle class="dot" cx="563.7" cy="97.4" r="4.5" /><text class="lab" x="563.7" y="85.4" text-anchor="middle">26.0</text>
      <circle class="dot" cx="624.3" cy="83.9" r="4.5" /><text class="lab" x="624.3" y="71.9" text-anchor="middle">27.8</text>
      <circle class="dot" cx="685" cy="75.7" r="4.5" /><text class="lab" x="685" y="63.7" text-anchor="middle">28.9</text>
      <circle class="dot edge" cx="745.7" cy="65.9" r="7" /><text class="lab edge last" x="745.7" y="49.9" text-anchor="middle">30.2</text>
    </svg>
  </div>

  <p class="note">※ 各月末時点の、その月に1回以上使った人の数。</p>
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
.body { flex: 1; display: flex; align-items: center; margin: 14px 0 6px; min-height: 0; }
.chart { display: block; width: 100%; height: auto; overflow: visible; }

.unit { font-size: 13px; fill: #8a8f9c; }
.ytick { font-size: 14px; fill: #8a8f9c; }
.xtick { font-size: 15px; fill: #5a6070; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.grid.base { stroke: #8a8f9c; }
.line { fill: none; stroke: var(--accent); stroke-width: {{w}}; stroke-linejoin: round; stroke-linecap: round; }
.dot { fill: #fff; stroke: var(--accent); stroke-width: 2.5; }
.dot.edge { fill: var(--accent); }
.lab { font-size: 15px; font-weight: 700; fill: #5a6070; }
.lab.last { font-size: 24px; font-weight: 800; fill: var(--accent); }

/* 数字を書く点（data-labels="edge" なら最初と最後だけ） */
.slide[data-labels="edge"] .lab:not(.edge),
.slide[data-labels="edge"] .dot:not(.edge) { display: none; }

.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'labels',
      type: 'select',
      label: '数字を書く点',
      value: 'edge',
      options: [
        { value: 'edge', label: '最初と最後の点だけ' },
        { value: 'all', label: 'すべての点' },
      ],
    },
    { key: 'w', label: '線の太さ', min: 2, max: 7, step: 0.5, value: 4, unit: '' },
  ],
  cautions: [
    '縦の目盛りは0から始めます。18から始めると、18.2から30.2への増え方が実際の何倍にも急に見え、数字を盛った資料に見えます。差を細かく見せたいときは、目盛りを途中から始めたことを図の中で必ず断ります。',
    '全部の点に数字を書かないでください。最初・最後・山・谷など、伝えたい点だけにします。全点に書くと数字が線にかぶり、肝心の「形」が読めなくなります。',
    '線を何本も重ねすぎない。2〜3本までにして、強調したい1本だけアクセント色、ほかは灰色にします。色が多いと、凡例と線を目で往復して疲れます。',
    '月ごとの点が不規則に欠けているのに、そのまま線でつながない。データが無い月は線を切るか、注記で書きます。つなぐと「その間も増えていた」ように見えてしまいます。',
  ],
  similar: [
    { slug: 'bar-chart', diff: '縦棒グラフ型は、年度や月ごとの数を棒の高さで比べる型です。点が少なく、一つひとつの大きさを比べたいときに向きます。' },
    { slug: 'area-chart', diff: '面グラフ型は、折れ線の下を塗りつぶして「量の大きさ」を見せる型です。山の大きさや、全体の量の感覚を見せたいときに使います。' },
    { slug: 'annotated-chart', diff: '注釈付きグラフ型は、折れ線などの山や谷に「なぜそうなったか」の理由を書き込む型です。変化の理由まで説明したいときに使います。' },
  ],
  faq: [
    {
      q: '折れ線グラフと棒グラフはどう使い分けますか？',
      a: '時間の流れで「どう変わったか」を見せたいときは折れ線、各項目の「大きさ」を比べたいときは棒が向いています。点が10個以上と多いときは折れ線の方が読みやすく、3〜5個で一つひとつを比べるなら棒にします。',
    },
    {
      q: '折れ線グラフの縦軸は0から始めなくてもいいですか？',
      a: '棒グラフと違い、折れ線は長さではなく「形」を見るグラフなので、0から始めないこともあります。ただし始めた値が分かるように軸の数字を必ず出し、数字を大きく見せる意図に見えないよう注意します。迷ったら0から始めておくのが安全です。',
    },
    {
      q: 'AIに折れ線グラフのスライドを頼むコツは？',
      a: '月ごとの値を全部書き、目盛りの範囲（0から35など）、数字を書く点（最初と最後だけ）、線の色（1色）を指定します。値を省略すると、AIが数字を作ってしまうことがあるので、「数字は私が書いたものだけを使う」と添えます。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
