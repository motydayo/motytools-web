import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'slope',
  no: 43,
  category: 'data',
  name: 'スロープグラフ型',
  en: 'Slope chart',
  aka: ['スロープチャート', 'スロープ図', '傾きグラフ', '2時点比較グラフ', '前年比較の線グラフ'],
  mode: 'static',
  title: 'スロープグラフとは？2時点の変化を傾きで比べる作り方【PowerPoint・Excel】',
  description:
    '前年と今年など「2つの時点」の変化を、線の傾きで比べる「スロープグラフ型」のスライドを見本で解説。見方、色の付け方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLのコードまでまとめました。',
  oneLine: '2つの時点の数を線で結び、伸びと落ち込みを傾きで比べる。',
  what: [
    '左に前の時点、右に後の時点の数字を縦に並べ、同じ項目どうしを線で結ぶ型です。見本では、6つの営業所の顧客満足度を2024年度と2025年度で並べています。線が右上がりなら上がった、右下がりなら下がった、傾きが急なほど変化が大きいという読み方です。色を付けた福岡は58点から74点へ16点伸び、右の列に、その増減を数字で書いています。',
    '決まりごとは、時点を2つだけにすることと、項目の名前と数字を線の両端に書いて、縦の目盛りを省くことです。目盛りの代わりに数字を直接書くので、読み手は軸と見比べずに済みます。縦の位置は点数に比例させ、強調する線は1本か2本に絞ります。2025年度の順位が入れ替わった様子（名古屋と仙台が下位に）も、線の交わりで自然に見えます。',
  ],
  when: [
    '前年と今年、施策の前と後など、2つの時点で項目ごとの数がどう変わったかを見せたいとき',
    '全体の平均より、「どの項目が伸びて、どの項目が落ちたか」を伝えたいとき',
    '項目が4〜8個で、順位の入れ替わりも見せたいとき',
  ],
  avoid: [
    '3つ以上の時点の推移を見せたいとき（折れ線推移型にする）',
    '項目が10個を超え、線が交差して読めなくなるとき（表にするか、上位・下位だけに絞る）',
    '差の大きさを長さで正確に比べたいとき（ダンベル比較型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「スロープグラフ型（slope chart。2つの時点を線で結んで変化を見せるグラフ）」で作ってください。いちばん上に小さく「営業所別の顧客満足度（2024年度 → 2025年度・100点満点）」、その下に結論の見出し「福岡が+16点で最大の伸び、仙台だけが大きく低下」を置きます。見出しの下の左側に、縦に長い2本の見えない軸を立て、左を2024年度、右を2025年度として、営業所ごとに左右の点を線で結んでください。点数は営業所ごとに、福岡が58→74、札幌が62→68、名古屋が66→64、仙台が70→60、大阪が74→80、東京が78→84です（100点満点）。縦の位置は点数に比例させ、50〜90点の範囲を使います。左の点の左側に「営業所名と点数」、右の点の右側に「点数と営業所名」を18ptの太字で書き、一番右の列に増減（福岡+16、札幌+6、名古屋−2、仙台−10、大阪+6、東京+6）を書いてください。線は{{w:t}}の太さで、色を付ける線は「{{focus:t}}」にして、色を付けるものはアクセント色{{accent:t}}、ほかは灰色にします。右側の細い列には、強調した線の増減を44ptの太字・アクセント色で大きく書き（いちばん伸びたときは「+16点」と「福岡の伸び（最大）」と「58点 → 74点」）、その下に区切り線を挟んで点数の変化を書きます。立体・影・グラデーションは使いません。下に「※ アンケートの平均点。縦の位置は点数に比例（50〜90点の範囲を表示）。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「グラフ」→「折れ線」→「マーカー付き折れ線」を選び、出てきた表に、営業所を行、「2024年度」「2025年度」を列として入れます。そのままだと横軸が営業所になるので、グラフを選んで「グラフのデザイン」→「行/列の切り替え」を押し、横軸が2つの年度になるようにします。続けて、横の目盛り線と縦の目盛りは消し、線の右端に「データラベル」を付けて、「ラベルオプション」で「系列名」と「値」を表示します。強調する線だけ色を変えます。',
    'Googleスライドでは、「挿入」→「グラフ」から折れ線グラフを入れ、右上の︙（その他）→「ソースを開く」でスプレッドシートを開きます。表は、営業所を列、年度を行にします（グラフ編集画面の「設定」にある「行/列を切り替える」で入れ替えられます）。「カスタマイズ」の「系列」から、線の色とデータラベルを設定します。縦軸の範囲は「縦軸」の最小値・最大値を数字で決めて、2つのグラフを並べるときにそろえます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。縦の位置は「(90 − 点数) ÷ 40 × 270 ＋ 56」で決めた数値を書いているので、点数を変えるときは、線と点の位置、両側の数字を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">営業所別の顧客満足度（2024年度 → 2025年度・100点満点）</p>
  <h1 class="title">福岡が+16点で最大の伸び、仙台だけが大きく低下</h1>
  <div class="body">
    <div class="row">
      <svg class="svg" viewBox="0 0 630 338" role="img" aria-label="営業所ごとの満足度の2024年度から2025年度への変化">
        <text class="year" x="170" y="20" text-anchor="middle">2024年度</text>
        <text class="year" x="470" y="20" text-anchor="middle">2025年度</text>
        <text class="year sm" x="630" y="20" text-anchor="end">増減（点）</text>
        <g class="g up">
          <line class="ln" x1="170" y1="272" x2="470" y2="164" />
          <circle class="dt" cx="170" cy="272" r="6" />
          <circle class="dt" cx="470" cy="164" r="6" />
          <text class="lb" x="108" y="278" text-anchor="end">福岡</text>
          <text class="lb num" x="150" y="278" text-anchor="end">58</text>
          <text class="lb num" x="494" y="170">74</text>
          <text class="lb" x="528" y="170">福岡</text>
          <text class="lb num chg" x="630" y="170" text-anchor="end">+16</text>
        </g>
        <g class="g x">
          <line class="ln" x1="170" y1="245" x2="470" y2="204.5" />
          <circle class="dt" cx="170" cy="245" r="6" />
          <circle class="dt" cx="470" cy="204.5" r="6" />
          <text class="lb" x="108" y="251" text-anchor="end">札幌</text>
          <text class="lb num" x="150" y="251" text-anchor="end">62</text>
          <text class="lb num" x="494" y="210.5">68</text>
          <text class="lb" x="528" y="210.5">札幌</text>
          <text class="lb num chg" x="630" y="210.5" text-anchor="end">+6</text>
        </g>
        <g class="g down">
          <line class="ln" x1="170" y1="218" x2="470" y2="231.5" />
          <circle class="dt" cx="170" cy="218" r="6" />
          <circle class="dt" cx="470" cy="231.5" r="6" />
          <text class="lb" x="108" y="224" text-anchor="end">名古屋</text>
          <text class="lb num" x="150" y="224" text-anchor="end">66</text>
          <text class="lb num" x="494" y="237.5">64</text>
          <text class="lb" x="528" y="237.5">名古屋</text>
          <text class="lb num chg" x="630" y="237.5" text-anchor="end">−2</text>
        </g>
        <g class="g down">
          <line class="ln" x1="170" y1="191" x2="470" y2="258.5" />
          <circle class="dt" cx="170" cy="191" r="6" />
          <circle class="dt" cx="470" cy="258.5" r="6" />
          <text class="lb" x="108" y="197" text-anchor="end">仙台</text>
          <text class="lb num" x="150" y="197" text-anchor="end">70</text>
          <text class="lb num" x="494" y="264.5">60</text>
          <text class="lb" x="528" y="264.5">仙台</text>
          <text class="lb num chg" x="630" y="264.5" text-anchor="end">−10</text>
        </g>
        <g class="g x">
          <line class="ln" x1="170" y1="164" x2="470" y2="123.5" />
          <circle class="dt" cx="170" cy="164" r="6" />
          <circle class="dt" cx="470" cy="123.5" r="6" />
          <text class="lb" x="108" y="170" text-anchor="end">大阪</text>
          <text class="lb num" x="150" y="170" text-anchor="end">74</text>
          <text class="lb num" x="494" y="129.5">80</text>
          <text class="lb" x="528" y="129.5">大阪</text>
          <text class="lb num chg" x="630" y="129.5" text-anchor="end">+6</text>
        </g>
        <g class="g x">
          <line class="ln" x1="170" y1="137" x2="470" y2="96.5" />
          <circle class="dt" cx="170" cy="137" r="6" />
          <circle class="dt" cx="470" cy="96.5" r="6" />
          <text class="lb" x="108" y="143" text-anchor="end">東京</text>
          <text class="lb num" x="150" y="143" text-anchor="end">78</text>
          <text class="lb num" x="494" y="102.5">84</text>
          <text class="lb" x="528" y="102.5">東京</text>
          <text class="lb num chg" x="630" y="102.5" text-anchor="end">+6</text>
        </g>
      </svg>
      <div class="side side-top">
        <span class="big">+16点</span>
        <span class="big-label">福岡の伸び（最大）</span>
        <span class="sub">58点 → 74点</span>
      </div>
      <div class="side side-down">
        <span class="big">−10点</span>
        <span class="big-label">仙台の低下（最大）</span>
        <span class="sub">70点 → 60点</span>
      </div>
    </div>
  </div>
  <p class="note">※ アンケートの平均点。縦の位置は点数に比例（50〜90点の範囲を表示）。</p>
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

/* 縦の位置は (90 − 点数) ÷ 40 × 270 ＋ 56。座標は幅630×高さ338の中で数字で決めている（左に2024年度、右に2025年度） */
.row { display: flex; gap: 40px; height: 100%; }
.svg { display: block; flex: 0 0 630px; width: 630px; height: 100%; overflow: visible; }
/*svg*/
.year { font-size: 18px; font-weight: 800; fill: #5a6070; }
.year.sm { font-size: 15px; font-weight: 700; fill: #8a8f9c; }
.g .ln { stroke: #8a8f9c; stroke-opacity: 0.55; stroke-width: {{w}}; stroke-linecap: round; }
.g .dt { fill: #8a8f9c; fill-opacity: 0.8; }
.g .lb { font-size: 18px; font-weight: 700; fill: #5a6070; }
.g .num { font-weight: 800; font-variant-numeric: tabular-nums; }
.g .chg { fill: #8a8f9c; }

/* 色を付ける線（data-focus: top＝いちばん伸びた営業所、down＝下がった営業所、none＝なし） */
.slide[data-focus="top"] .g.up .ln,
.slide[data-focus="down"] .g.down .ln { stroke: var(--accent); stroke-opacity: 1; stroke-width: calc({{w}} + 2px); }
.slide[data-focus="top"] .g.up .dt,
.slide[data-focus="down"] .g.down .dt { fill: var(--accent); fill-opacity: 1; }
.slide[data-focus="top"] .g.up .lb,
.slide[data-focus="down"] .g.down .lb { fill: var(--accent); }
/*end*/

.side { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding-left: 28px; border-left: 1px solid #e3e5ea; }
.big { font-size: 44px; font-weight: 800; line-height: 1.05; color: var(--accent); font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }
.big-label { font-size: 16px; color: #5a6070; }
.sub { margin-top: 14px; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 20px; font-weight: 800; font-variant-numeric: tabular-nums; }
.side-down { display: none; }
.slide[data-focus="down"] .side-top { display: none; }
.slide[data-focus="down"] .side-down { display: flex; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける線',
      value: 'top',
      options: [
        { value: 'top', label: 'いちばん伸びた営業所だけ' },
        { value: 'down', label: '下がった営業所だけ' },
        { value: 'none', label: '色を付けない' },
      ],
    },
    { key: 'w', label: '線の太さ', min: 2, max: 6, step: 1, value: 3, unit: 'px' },
  ],
  cautions: [
    '両端に数字と項目名を書き、縦の目盛りは省きます。目盛りを残すと、読み手が軸を見てから数字を探すことになり、スロープグラフの読みやすさが消えます。縦の位置は数字に比例させます。',
    '強調する線は1本か2本にします。全部に色を付けると、どれを見ればいいか分からなくなります。見本のように、ほかは灰色の細い線にして、結論に関わる線だけアクセント色にします。',
    '数字が近い項目の文字が重なります。2本の線の端が接近すると、名前や数字が読めなくなるので、縦の幅を広めに取り、重なるときは文字の位置を少しずらします。',
    '縦軸の範囲を途中から始める場合は、注記に範囲を書きます。見本は50〜90点の範囲です。グラフどうしを並べるときは、同じ範囲にそろえないと、傾きの急さを比べられません。',
  ],
  similar: [
    { slug: 'line-chart', diff: '折れ線推移型は、3つ以上の時点を線でつないで流れを見せる型です。スロープグラフ型は、2つの時点に絞って、項目ごとの傾きを比べます。' },
    { slug: 'dumbbell', diff: 'ダンベル比較型は、項目ごとの2つの値を横に点で置いて線で結ぶ型です。差が長さで見えるので、差の大きさを比べたいときに向きます。順位の入れ替わりを見せたいなら、スロープグラフ型です。' },
    { slug: 'bar-chart', diff: '縦棒グラフ型は、年度や項目ごとの数を棒の高さで見せる型です。2時点の変化を項目ごとに見せたいときは、棒を並べるよりスロープグラフ型がすっきりします。' },
  ],
  faq: [
    {
      q: 'スロープグラフとは何ですか？',
      a: '2つの時点の数を左右に並べ、同じ項目どうしを線で結んだグラフです。線の傾きで、上がったか下がったか、どれくらい変わったかが分かります。前年と今年、施策の前と後のような比較に向いています。',
    },
    {
      q: 'スロープグラフはExcelやPowerPointで作れますか？',
      a: '作れます。2つの年度の列を持つ表から「マーカー付き折れ線」グラフを作り、「行/列の切り替え」で横軸を年度にするだけです。目盛りを消してデータラベルに系列名と値を出すと、スロープグラフの形になります。',
    },
    {
      q: '折れ線グラフとの違いは何ですか？',
      a: '折れ線グラフは、時間の流れの中での変化を見せるものです。スロープグラフは時点を2つに絞り、項目ごとの変化の違いを比べるのが目的です。点が2つだけなので、線が増えても読みやすく、順位の入れ替わりも見せられます。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
