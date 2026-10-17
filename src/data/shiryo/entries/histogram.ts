import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'histogram',
  no: 42,
  category: 'data',
  name: 'ヒストグラム型',
  en: 'Histogram',
  aka: ['ヒストグラム', '度数分布図', '度数分布グラフ', '分布図', '柱状グラフ'],
  mode: 'static',
  title: 'ヒストグラムとは？数の分布を件数で見せる作り方【Excel・PowerPoint】',
  description:
    '対応時間などの「数の分布」を、同じ幅の区切りごとの件数で見せる「ヒストグラム型」のスライドを見本で解説。縦棒グラフとの違い、区切りの幅の決め方、Excel・PowerPointでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '数の散らばり方を、同じ幅の区切りごとの件数で見せる。',
  what: [
    '数の大きさを同じ幅の区切りに分け、区切りごとの件数を棒の高さで見せる型です。見本では、電話での問い合わせ120件の対応時間を10分ごとに区切り、20〜50分の棒だけに色を付けて、「65%は20〜50分に集まっている」と結論を書いています。山の形から、いちばん多い時間帯、時間のばらつき、長くかかったものの割合（60分以上は14件、12%）が読み取れます。',
    '決まりごとは、区切りの幅をすべて同じにすることと、棒をくっつけて並べることです。縦棒グラフは項目の比較なので棒を離しますが、ヒストグラムは連続した数の分布なので隙間を詰め、横軸には区切りの境目の数字を書きます。区切りの幅を変えると山の形が変わって見えるので、幅は必ず資料に書いておきます。',
  ],
  when: [
    '対応時間・待ち時間・年齢・購入金額など、数の散らばり方（どこに多く集まるか）を見せたいとき',
    '平均だけでは分からない「長くかかるものがどれくらいあるか」を示したいとき',
    '品質検査の寸法や、テストの点数の分布を報告したいとき',
  ],
  avoid: [
    '項目ごとの数を比べたいとき（縦棒グラフ型にする。ヒストグラムは棒をくっつける別物）',
    'データが20個に満たないとき（山の形が安定しない。点をそのまま並べるか、数字で示す）',
    'グループどうしのばらつきを並べて比べたいとき（箱ひげ図型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ヒストグラム型（histogram。数の分布を区切りごとの件数で表す、棒がくっついたグラフ）」で作ってください。いちばん上に小さく「お客さま窓口の電話対応にかかった時間（2025年9月・120件）」、その下に結論の見出し「対応時間の65%は、20〜50分に集まっている」を置きます。見出しの下の広い場所に縦棒を10本、隙間を空けずに（棒の間は{{gap:t}}の白い線だけ）並べてください。横軸は0〜100分で、10分ごとの境目に数字（0、10、20…100）を書き、右端に「（分）」と添えます。各区切りの件数は左から順に、0〜10分が4、10〜20分が12、20〜30分が26、30〜40分が31、40〜50分が21、50〜60分が12、60〜70分が7、70〜80分が4、80〜90分が2、90〜100分が1です（合計120件）。縦の目盛りは0〜40件を10刻みにし、必ず0から始めます。棒の高さは件数にきっちり比例させ、各棒の上に件数を16ptの太字で書きます。棒の色は「{{focus:t}}」にして、色を付ける棒はアクセント色{{accent:t}}、それ以外は薄い灰色にします。20〜50分を強調するときは、その3本の上にかっこを付け、「20〜50分に65%（78件）」とアクセント色の18pt太字で書きます。右側の60〜100分の4本の上には、灰色のかっこと「60分以上は14件（12%）」の文字を置いてください。立体・影・グラデーションは使いません。下に「※ 対応時間を10分ごとに区切った件数（20〜30は「20分以上30分未満」）。合計120件。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、新しいバージョンなら「挿入」→「グラフ」の一覧に「ヒストグラム」があり、生のデータ（見本なら120件の対応時間）を入れると自動で区切って数えてくれます。区切りの幅は、横軸を右クリック→「軸の書式設定」から「ビンの幅」（区切りの幅のこと）を10にして決めます。古いバージョンでは、先に表で「0〜10分は4件」のように区切りごとの件数を数え、「挿入」→「グラフ」→「縦棒」で描いたあと、棒を右クリック→「データ系列の書式設定」で「要素の間隔」を0%にすると、棒がくっつきます。',
    'Googleスライドでは、「挿入」→「グラフ」から入れたあと、右上の︙（その他）→「ソースを開く」でスプレッドシートを開きます。スプレッドシートのグラフの種類には「ヒストグラム」があり、生のデータの列を選ぶと描けます。区切りの幅は、グラフの編集画面の「カスタマイズ」から指定します。区切りごとの件数を先に数えている場合は、縦棒グラフにして棒の間隔を詰める方法でも作れます。Excelなら、PowerPointと同じ「ヒストグラム」で作れます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。棒の高さは「件数 ÷ 40 × 240」で決めた数値を書いているので、件数を変えるときは、棒の高さ・上の数字・かっこの位置を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">お客さま窓口の電話対応にかかった時間（2025年9月・120件）</p>
  <h1 class="title">対応時間の65%は、20〜50分に集まっている</h1>
  <div class="body">
    <svg class="svg" viewBox="0 0 848 338" role="img" aria-label="対応時間の分布を表すヒストグラム">
      <line class="base" x1="48" x2="832" y1="290" y2="290" />
      <text class="tick" x="38" y="295" text-anchor="end">0</text>
      <line class="grid" x1="48" x2="832" y1="230" y2="230" />
      <text class="tick" x="38" y="235" text-anchor="end">10</text>
      <line class="grid" x1="48" x2="832" y1="170" y2="170" />
      <text class="tick" x="38" y="175" text-anchor="end">20</text>
      <line class="grid" x1="48" x2="832" y1="110" y2="110" />
      <text class="tick" x="38" y="115" text-anchor="end">30</text>
      <line class="grid" x1="48" x2="832" y1="50" y2="50" />
      <text class="tick" x="38" y="55" text-anchor="end">40</text>
      <text class="unit" x="38" y="28" text-anchor="end">（件）</text>
      <rect class="bar out x" x="48" y="266" width="78.4" height="24" />
      <text class="val" x="87.2" y="258" text-anchor="middle">4</text>
      <rect class="bar out x" x="126.4" y="218" width="78.4" height="72" />
      <text class="val" x="165.6" y="210" text-anchor="middle">12</text>
      <rect class="bar in x" x="204.8" y="134" width="78.4" height="156" />
      <text class="val" x="244" y="126" text-anchor="middle">26</text>
      <rect class="bar in mode" x="283.2" y="104" width="78.4" height="186" />
      <text class="val" x="322.4" y="96" text-anchor="middle">31</text>
      <rect class="bar in x" x="361.6" y="164" width="78.4" height="126" />
      <text class="val" x="400.8" y="156" text-anchor="middle">21</text>
      <rect class="bar out x" x="440" y="218" width="78.4" height="72" />
      <text class="val" x="479.2" y="210" text-anchor="middle">12</text>
      <rect class="bar out x" x="518.4" y="248" width="78.4" height="42" />
      <text class="val" x="557.6" y="240" text-anchor="middle">7</text>
      <rect class="bar out x" x="596.8" y="266" width="78.4" height="24" />
      <text class="val" x="636" y="258" text-anchor="middle">4</text>
      <rect class="bar out x" x="675.2" y="278" width="78.4" height="12" />
      <text class="val" x="714.4" y="270" text-anchor="middle">2</text>
      <rect class="bar out x" x="753.6" y="284" width="78.4" height="6" />
      <text class="val" x="792.8" y="276" text-anchor="middle">1</text>
      <text class="xt" x="48" y="314" text-anchor="middle">0</text>
      <text class="xt" x="126.4" y="314" text-anchor="middle">10</text>
      <text class="xt" x="204.8" y="314" text-anchor="middle">20</text>
      <text class="xt" x="283.2" y="314" text-anchor="middle">30</text>
      <text class="xt" x="361.6" y="314" text-anchor="middle">40</text>
      <text class="xt" x="440" y="314" text-anchor="middle">50</text>
      <text class="xt" x="518.4" y="314" text-anchor="middle">60</text>
      <text class="xt" x="596.8" y="314" text-anchor="middle">70</text>
      <text class="xt" x="675.2" y="314" text-anchor="middle">80</text>
      <text class="xt" x="753.6" y="314" text-anchor="middle">90</text>
      <text class="xt" x="832" y="314" text-anchor="middle">100</text>
      <text class="unit" x="832" y="338" text-anchor="end">（分）</text>
      <g class="rng">
        <path class="brk" d="M204.8 86v-9h235.2v9" />
        <text class="brk-t" x="322.4" y="66" text-anchor="middle">20〜50分に65%（78件）</text>
      </g>
      <path class="brk gray" d="M518.4 216v-9h313.6v9" />
      <text class="brk-t gray" x="675.2" y="192" text-anchor="middle">60分以上は14件（12%）</text>
    </svg>
  </div>
  <p class="note">※ 対応時間を10分ごとに区切った件数（20〜30は「20分以上30分未満」）。合計120件。</p>
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
.body { flex: 1; min-height: 0; margin: 18px 0 10px; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 棒の高さは 件数 ÷ 40 × 240。棒の幅（区切り）はすべて同じ。座標は幅848×高さ338の中で数字で決めている */
/*svg*/
.svg { display: block; width: 100%; height: 100%; overflow: visible; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.base { stroke: #8a8f9c; stroke-width: 1.5; }
.tick { font-size: 14px; fill: #8a8f9c; font-variant-numeric: tabular-nums; }
.xt { font-size: 16px; fill: #5a6070; font-variant-numeric: tabular-nums; }
.unit { font-size: 14px; fill: #8a8f9c; }
.bar { fill: #c3c8d2; stroke: #fff; stroke-width: {{gap}}; }
.val { font-size: 16px; font-weight: 800; fill: #1f2430; font-variant-numeric: tabular-nums; }
.brk { fill: none; stroke: var(--accent); stroke-width: 2; stroke-linejoin: round; }
.brk-t { font-size: 18px; font-weight: 800; fill: var(--accent); }
.brk.gray { stroke: #8a8f9c; }
.brk-t.gray { font-size: 16px; fill: #5a6070; }

/* 色を付ける棒（data-focus: range＝20〜50分、mode＝いちばん多い区切り、none＝すべて灰色） */
.slide[data-focus="range"] .bar.in { fill: var(--accent); }
.slide[data-focus="mode"] .bar.mode { fill: var(--accent); }
.slide[data-focus="mode"] .rng,
.slide[data-focus="none"] .rng { display: none; }
/*end*/`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける棒',
      value: 'range',
      options: [
        { value: 'range', label: '20〜50分の3本に色を付ける' },
        { value: 'mode', label: 'いちばん多い1本だけ色を付ける' },
        { value: 'none', label: 'すべて灰色' },
      ],
    },
    { key: 'gap', label: '棒の間の白い線の太さ', min: 0, max: 8, step: 1, value: 2, unit: 'px' },
  ],
  cautions: [
    '区切りの幅はすべて同じにします。「0〜10分」の次が「10〜30分」のように幅が違うと、棒の高さが件数でなく「幅のぶん」膨らんで見え、山の形がうそになります。',
    '区切りの幅を資料に書きます。同じデータでも、5分刻みと20分刻みでは山の形がまるで違って見えます。「10分ごと」と注記に書き、境目の数字（20〜30は20分以上30分未満）も決めておきます。',
    '棒は離さずにくっつけます。縦棒グラフのように隙間を空けると、「別々の項目の比較」に見えてしまいます。見本のように、白い細い線で区切る程度にします。',
    '縦の目盛りは0から始めます。途中から始めると、山の高低の差が実際より大きく見えます。強調する棒は、結論に関わる区切りだけにします。',
  ],
  similar: [
    { slug: 'bar-chart', diff: '縦棒グラフ型は、年度や項目ごとの数を比べる型で、棒は離して並べます。ヒストグラム型は、1つの数の分布を区切りごとの件数にした別の型で、棒をくっつけます。' },
    { slug: 'boxplot', diff: '箱ひげ図型は、グループごとの中央値とばらつきを並べて比べる型です。山の形は分かりませんが、いくつものグループを1枚で比べられます。' },
    { slug: 'pareto', diff: 'パレート図型は、項目を多い順に並べて累計の線を重ねる型です。ヒストグラム型は数の区切りの順に並べ、並べ替えません。' },
  ],
  faq: [
    {
      q: 'ヒストグラムと棒グラフの違いは何ですか？',
      a: '棒グラフは項目ごとの数を比べるもので、棒の間を空けます。ヒストグラムは1つの数（対応時間など）を同じ幅の区切りに分けて件数を数えたもので、棒の間を空けません。横軸は区切りの境目の数字で、順番を入れ替えることもできません。',
    },
    {
      q: 'ヒストグラムの区切りの幅はどう決めますか？',
      a: 'データの最小と最大の間を、おおよそ5〜10個に分ける幅が目安です。見本は0〜100分を10分ごとの10区切りにしています。幅を変えても結論が変わらないかを一度試し、切りのいい数字（5、10、100など）にすると読み手が迷いません。',
    },
    {
      q: 'ヒストグラムはExcelで作れますか？',
      a: '作れます。新しいバージョンのExcelなら、「挿入」→「グラフ」の「ヒストグラム」に生のデータを入れると自動で区切ってくれます。古いバージョンでは、区切りごとの件数を数えて縦棒グラフにし、棒の間隔を0%にすれば同じ形になります。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
