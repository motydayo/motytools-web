import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'small-multiples',
  no: 45,
  category: 'data',
  name: 'スモールマルチプル型',
  en: 'Small multiples',
  aka: ['スモールマルチプル', '小さなグラフの並べ', 'グラフの小分け表示', 'トレリスチャート', '同じ形のグラフを並べる'],
  mode: 'static',
  title: 'スモールマルチプルとは？小さなグラフを並べて比べる作り方【PowerPoint】',
  description:
    '同じ形の小さなグラフを格子状に並べて比べる「スモールマルチプル型」のスライドを見本で解説。目盛りをそろえる決まり、強調のコツ、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLのコードまでまとめました。',
  oneLine: '同じ形・同じ目盛りの小さなグラフを並べ、形の違いで比べる。',
  what: [
    '同じ形・同じ目盛りの小さなグラフを、格子状にいくつも並べる型です。見本では、6つの店の月間来店数を店ごとの小さな折れ線にして、2行×3列に並べています。どのグラフも縦の目盛りは0〜1,200人にそろえ、グラフの上に店名と4月に対する増減、線の端に9月の数字を書きました。減少した池袋店の線だけに色を付け、見出しの結論「6店中5店で増え、池袋店だけが減少」と合わせています。',
    '6本の線を1つのグラフに重ねると、線が絡み合ってどれがどの店か分からなくなります。1店ずつ分けると、右上がり・横ばい・右下がりという各店の形が、ひと目で見分けられます。決まりごとは、すべてのグラフで縦の目盛りと横の範囲をそろえることです。そろえていないと、小さな変化が大きく見えるグラフと、大きな変化が小さく見えるグラフが混ざり、比べられません。',
  ],
  when: [
    '店舗・商品・地域など、5〜12個の項目の推移を、1つのグラフに重ねると線が絡んで読めないとき',
    '「どの項目が伸びて、どれが落ちたか」を、形の違いで一目で見せたいとき',
    '全体の動きと、それぞれの内訳の動きを1枚で見比べたいとき',
  ],
  avoid: [
    '項目が2〜3個しかないとき（1つのグラフに重ねる折れ線推移型にする）',
    '項目どうしの値の差を正確に読み取らせたいとき（棒グラフや表にする）',
    '項目が12個を超えるとき（上位・下位だけに絞るか、ヒートマップ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「スモールマルチプル型（small multiples。同じ形の小さなグラフを並べる型）」で作ってください。いちばん上に小さく「店舗別の月間来店数の推移（4月〜9月）」、その下に結論の見出し「6店中5店で来店数が増え、池袋店だけが減少」を置きます。見出しの下の広い場所に、小さな折れ線グラフを2行×3列、同じ大きさ・同じ間隔で6つ並べてください。店と値は、4月から9月までの月間来店数（人）で、渋谷店が820・860・900・880・950・1,010、新宿店が1,100・1,080・1,120・1,150・1,130・1,180、池袋店が650・640・620・600・580・560、横浜店が520・560・610・680・740・790、大宮店が410・400・430・420・440・450、千葉店が700・690・720・760・780・800です。6つのグラフはすべて縦の目盛りを0〜1,200人にそろえ（0、600、1,200に薄い線）、左の列にだけ目盛りの数字を書いてください。各グラフの左上に店名（18pt、太字）、右上に4月に対する増減（渋谷店+23%、新宿店+7%、池袋店−14%、横浜店+52%、大宮店+10%、千葉店+14%）、線の右端に9月の来店数を16ptの太字で書き、グラフの下に「4月」「9月」と添えます。線は{{w:t}}の太さにし、色を付けるグラフは「{{focus:t}}」にして、色を付けるものはアクセント色{{accent:t}}（線・点・店名・増減）、それ以外は濃い灰色にします。立体・影・グラデーションは使いません。下に「※ 6つのグラフはすべて同じ縦の目盛り（0〜1,200人）。数字は9月の来店数（人）、％は4月に対する増減。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「グラフ」→「折れ線」で1つめのグラフを作り、縦軸を右クリック→「軸の書式設定」で「境界値」の最小値を0、最大値を1200に固定します。タイトルと凡例を消してから、グラフをコピーして5つ貼り付け、それぞれ「グラフのデザイン」→「データの編集」で値を入れ替えます。最後に、6つを選んで「図形の書式」→「配置」の「上下に整列」「左右に整列」で、等間隔に整えます。色を付けるグラフは、線を1回クリックして色を変えます。',
    'Googleスライドでは、「挿入」→「グラフ」から折れ線グラフを作り、右上の︙（その他）→「ソースを開く」でスプレッドシートを開きます。グラフの編集画面の「カスタマイズ」→「縦軸」で、最小値を0、最大値を1200に固定します。同じ設定のグラフを6つ作って、それぞれ別の列のデータを指定すると、目盛りがそろったグラフが並びます。スライドに戻って大きさと位置をそろえ、「更新」を押します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。線の高さは「来店数 ÷ 1,200 × 90」で決めた数値を書いているので、来店数を変えるときは、目盛りの最大（1,200）を超えていないかを確かめ、線・点・数字を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">店舗別の月間来店数の推移（4月〜9月）</p>
  <h1 class="title">6店中5店で来店数が増え、池袋店だけが減少</h1>
  <div class="body">
    <svg class="svg" viewBox="0 0 848 338" role="img" aria-label="6つの店の来店数の推移を同じ目盛りで並べたグラフ">
      <g class="cell x" transform="translate(0 0)">
        <text class="name" x="0" y="20">渋谷店</text>
        <text class="chg" x="272" y="20" text-anchor="end">+23%</text>
        <line class="base" x1="44" x2="216" y1="126" y2="126" />
        <line class="grid" x1="44" x2="216" y1="81" y2="81" />
        <line class="grid" x1="44" x2="216" y1="36" y2="36" />
        <text class="tick" x="38" y="131" text-anchor="end">0</text>
        <text class="tick" x="38" y="86" text-anchor="end">600</text>
        <text class="tick" x="38" y="41" text-anchor="end">1,200</text>
        <polyline class="line" points="44,64.5 78.4,61.5 112.8,58.5 147.2,60 181.6,54.75 216,50.25" />
        <circle class="dot" cx="216" cy="50.25" r="4.5" />
        <text class="last" x="226" y="55.25">1,010</text>
        <text class="mon" x="44" y="146" text-anchor="start">4月</text>
        <text class="mon" x="216" y="146" text-anchor="end">9月</text>
      </g>
      <g class="cell x" transform="translate(288 0)">
        <text class="name" x="0" y="20">新宿店</text>
        <text class="chg" x="272" y="20" text-anchor="end">+7%</text>
        <line class="base" x1="44" x2="216" y1="126" y2="126" />
        <line class="grid" x1="44" x2="216" y1="81" y2="81" />
        <line class="grid" x1="44" x2="216" y1="36" y2="36" />
        <polyline class="line" points="44,43.5 78.4,45 112.8,42 147.2,39.75 181.6,41.25 216,37.5" />
        <circle class="dot" cx="216" cy="37.5" r="4.5" />
        <text class="last" x="226" y="42.5">1,180</text>
        <text class="mon" x="44" y="146" text-anchor="start">4月</text>
        <text class="mon" x="216" y="146" text-anchor="end">9月</text>
      </g>
      <g class="cell down" transform="translate(576 0)">
        <text class="name" x="0" y="20">池袋店</text>
        <text class="chg" x="272" y="20" text-anchor="end">−14%</text>
        <line class="base" x1="44" x2="216" y1="126" y2="126" />
        <line class="grid" x1="44" x2="216" y1="81" y2="81" />
        <line class="grid" x1="44" x2="216" y1="36" y2="36" />
        <polyline class="line" points="44,77.25 78.4,78 112.8,79.5 147.2,81 181.6,82.5 216,84" />
        <circle class="dot" cx="216" cy="84" r="4.5" />
        <text class="last" x="226" y="89">560</text>
        <text class="mon" x="44" y="146" text-anchor="start">4月</text>
        <text class="mon" x="216" y="146" text-anchor="end">9月</text>
      </g>
      <g class="cell up" transform="translate(0 178)">
        <text class="name" x="0" y="20">横浜店</text>
        <text class="chg" x="272" y="20" text-anchor="end">+52%</text>
        <line class="base" x1="44" x2="216" y1="126" y2="126" />
        <line class="grid" x1="44" x2="216" y1="81" y2="81" />
        <line class="grid" x1="44" x2="216" y1="36" y2="36" />
        <text class="tick" x="38" y="131" text-anchor="end">0</text>
        <text class="tick" x="38" y="86" text-anchor="end">600</text>
        <text class="tick" x="38" y="41" text-anchor="end">1,200</text>
        <polyline class="line" points="44,87 78.4,84 112.8,80.25 147.2,75 181.6,70.5 216,66.75" />
        <circle class="dot" cx="216" cy="66.75" r="4.5" />
        <text class="last" x="226" y="71.75">790</text>
        <text class="mon" x="44" y="146" text-anchor="start">4月</text>
        <text class="mon" x="216" y="146" text-anchor="end">9月</text>
      </g>
      <g class="cell x" transform="translate(288 178)">
        <text class="name" x="0" y="20">大宮店</text>
        <text class="chg" x="272" y="20" text-anchor="end">+10%</text>
        <line class="base" x1="44" x2="216" y1="126" y2="126" />
        <line class="grid" x1="44" x2="216" y1="81" y2="81" />
        <line class="grid" x1="44" x2="216" y1="36" y2="36" />
        <polyline class="line" points="44,95.25 78.4,96 112.8,93.75 147.2,94.5 181.6,93 216,92.25" />
        <circle class="dot" cx="216" cy="92.25" r="4.5" />
        <text class="last" x="226" y="97.25">450</text>
        <text class="mon" x="44" y="146" text-anchor="start">4月</text>
        <text class="mon" x="216" y="146" text-anchor="end">9月</text>
      </g>
      <g class="cell x" transform="translate(576 178)">
        <text class="name" x="0" y="20">千葉店</text>
        <text class="chg" x="272" y="20" text-anchor="end">+14%</text>
        <line class="base" x1="44" x2="216" y1="126" y2="126" />
        <line class="grid" x1="44" x2="216" y1="81" y2="81" />
        <line class="grid" x1="44" x2="216" y1="36" y2="36" />
        <polyline class="line" points="44,73.5 78.4,74.25 112.8,72 147.2,69 181.6,67.5 216,66" />
        <circle class="dot" cx="216" cy="66" r="4.5" />
        <text class="last" x="226" y="71">800</text>
        <text class="mon" x="44" y="146" text-anchor="start">4月</text>
        <text class="mon" x="216" y="146" text-anchor="end">9月</text>
      </g>
    </svg>
  </div>
  <p class="note">※ 6つのグラフはすべて同じ縦の目盛り（0〜1,200人）。数字は9月の来店数（人）、％は4月に対する増減。</p>
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

/* 6つのグラフはすべて同じ縦の目盛り（0〜1,200人）。高さ = 来店数 ÷ 1,200 × 90。座標は幅848×高さ338の中で数字で決めている */
/*svg*/
.svg { display: block; width: 100%; height: 100%; overflow: visible; }
.name { font-size: 18px; font-weight: 800; fill: #1f2430; }
.chg { font-size: 16px; font-weight: 800; fill: #5a6070; font-variant-numeric: tabular-nums; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.base { stroke: #8a8f9c; stroke-width: 1.5; }
.tick { font-size: 13px; fill: #8a8f9c; font-variant-numeric: tabular-nums; }
.mon { font-size: 14px; fill: #8a8f9c; }
.line { fill: none; stroke: #5a6070; stroke-width: {{w}}; stroke-linejoin: round; stroke-linecap: round; }
.dot { fill: #5a6070; }
.last { font-size: 16px; font-weight: 800; fill: #1f2430; font-variant-numeric: tabular-nums; }

/* 色を付けるグラフ（data-focus: down＝減った店、top＝伸びが最大の店、none＝なし） */
.slide[data-focus="down"] .cell.down .line,
.slide[data-focus="top"] .cell.up .line { stroke: var(--accent); }
.slide[data-focus="down"] .cell.down .dot,
.slide[data-focus="top"] .cell.up .dot { fill: var(--accent); }
.slide[data-focus="down"] .cell.down .chg,
.slide[data-focus="down"] .cell.down .name,
.slide[data-focus="top"] .cell.up .chg,
.slide[data-focus="top"] .cell.up .name { fill: var(--accent); }
/*end*/`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付けるグラフ',
      value: 'down',
      options: [
        { value: 'down', label: '減った店だけ' },
        { value: 'top', label: '伸びが最大の店だけ' },
        { value: 'none', label: '色を付けない' },
      ],
    },
    { key: 'w', label: '線の太さ', min: 2, max: 5, step: 1, value: 3, unit: 'px' },
  ],
  cautions: [
    'すべてのグラフで、縦の目盛りと横の範囲をそろえます。グラフごとに目盛りの最大が違うと、来店数が400人台の大宮店の小さな上下が、1,000人台の店と同じ大きさの変化に見えてしまいます。目盛りの数字は、左の列にだけ書けば十分です。',
    '色を付けるのは1つか2つのグラフだけです。6つ全部に違う色を付けると、グラフを並べた意味が消えます。ほかは同じ灰色にして、結論に関わる店だけをアクセント色にします。',
    '並べる順番にも意味を持たせます。見本は元の店の順ですが、数字の大きい順、増減の大きい順に並べると、読み手が探さずに済みます。順番は注記か口頭で伝えます。',
    '1つのグラフを小さくしすぎないようにします。店名と数字は16pt以上、グラフは2行×3列（6個）か、3行×4列（12個）までにします。それ以上は、上位・下位だけに絞ります。',
  ],
  similar: [
    { slug: 'line-chart', diff: '折れ線推移型は、1つのグラフに線を重ねて推移を見せる型です。線が2〜3本ならこちらが向きます。スモールマルチプル型は、線が多くて絡むときに、グラフを分けて並べます。' },
    { slug: 'sparkline-table', diff: 'スパークライン表型は、表の各行に文字ほどの小さな推移の線を添える型です。数字を表で読ませつつ形も見せたいときに向きます。スモールマルチプル型は、グラフそのものを主役にします。' },
    { slug: 'heatmap', diff: 'ヒートマップ型は、表の数の大小を色の濃さで見せる型です。項目が12個を超えるときは、グラフを並べるより色で見せる方が収まります。' },
  ],
  faq: [
    {
      q: 'スモールマルチプルとは何ですか？',
      a: '同じ形・同じ目盛りの小さなグラフを、格子状に並べて見せる方法です。1つのグラフに線を何本も重ねると読めなくなる場合に、項目ごとにグラフを分けて並べ、形の違いで比べます。',
    },
    {
      q: 'スモールマルチプルはPowerPointやExcelで作れますか？',
      a: '作れます。1つめのグラフを作り、縦軸の最小値と最大値を数字で固定してから、コピーして値を入れ替えていきます。最後に「配置」の機能で等間隔に並べると、見本のような見た目になります。',
    },
    {
      q: '縦の目盛りはそろえるべきですか？',
      a: '原則そろえます。そろえないと、グラフごとに大きさの印象が変わり、項目どうしの比較にならないからです。変化の「形」だけを見せたいときは、目盛りを変えることもありますが、そのときは必ず「目盛りは各グラフで違います」と注記に書きます。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
