import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'ranking-bar',
  no: 27,
  category: 'data',
  name: '横棒ランキング型',
  en: 'Ranking bar chart',
  aka: ['横棒グラフ', 'ランキング', '順位グラフ', '項目別比較', '横向きの棒グラフ'],
  mode: 'static',
  title: '横棒グラフ（ランキング）のスライドとは？大きい順に並べる作り方と見本',
  description:
    '支店や商品を大きい順に横棒で並べる「横棒ランキング型」のスライドを見本で解説。項目名が長くても読める理由、大きい順に並べる決まり、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '項目を大きい順に並べ、棒の長さで差と順位を見せる。',
  when: [
    '支店・商品・部署など、項目の名前が長いものを数の大きい順に比べたいとき',
    '売上・件数・満足度などの順位をひと目で見せ、上位だけを強調したいとき',
    '項目が5〜10個ほどあり、縦棒では名前が重なってしまうとき',
  ],
  what: [
    '項目の名前を左に縦に並べ、数の大きさを右へ伸びる横棒の長さで見せる型です。見本では7つの支店の売上高を、大きい順に上から並べています。上位2支店の棒だけに色を付け、右側には読み取ってほしい数字「45%」（上位2支店の売上シェア）を置いて、見出しの結論と合わせています。',
    '決まりは3つあります。①大きい順（または小さい順）に並べる。順位が分かることがこの型の価値です。②棒の長さは数に比例させ、目盛りは0から始める。③棒の先に数を書く。名前が左に横書きで並ぶので、長い名前や小さな文字でも読みやすく、これが縦棒グラフとの大きな違いです。',
  ],
  avoid: [
    '年度や月のように時間の順に並べたいとき（縦棒グラフ型にする。並べ替えると時間の流れが崩れます）',
    '全体に占める割合を見せたいとき（円グラフ型・ドーナツ内訳型にする）',
    '項目が15個を超えるとき（上位10個と「その他」にまとめるか、全体は別の資料に回す）',
  ],
  prompt:
    '16:9のスライドを1枚、「横棒ランキング型（horizontal bar chart）」で作ってください。いちばん上に小さく「支店別の売上高（2025年度）」、その下に結論の見出し「上位2支店で全社売上の45%を占める」を置きます。左の広い場所に横棒グラフを置き、支店名を左に縦に並べて、売上高の大きい順に上から東京本店482・大阪支店391・名古屋支店326・福岡支店254・札幌支店198・仙台支店163・広島支店121（単位は百万円）とします。横の目盛りは0から500まで100刻みにし、必ず0から始めてください。棒の長さは値にきっちり比例させ、各棒の先に値を書きます。棒の色は「{{highlight:t}}」にして、色を付ける棒はアクセント色{{accent:t}}、それ以外は薄い灰色にします。棒の太さは1行ぶんの高さの{{bar:t}}にします。右側の細い列には「45%」を60pt前後の太字・アクセント色で大きく置き、その下に「上位2支店の売上シェア」、区切り線を挟んで「合計 873百万円」と書いてください。立体・影・グラデーションは使わず、目盛りの線は薄い灰色にします。見出しは32〜36pt、項目名は18pt以上。下に「※ 全社の売上高は1,935百万円（税抜）。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「横棒」→「集合横棒」を選び、出てきた表に支店名と値を入れます。横棒グラフは表の1行目がいちばん下に出るので、表を「小さい順」に入れるか、縦軸（支店名）をダブルクリックして出る設定の中の「軸を反転する」にチェックを入れると、大きい順に上から並びます。「グラフのデザイン」→「グラフ要素を追加」→「データラベル」→「外側」で棒の先に値を出し、凡例は消します。色を付けたい棒は、1回クリックで全部、もう1回クリックでその1本だけが選ばれるので、「書式」→「図形の塗りつぶし」で変えます。棒の太さは、棒を右クリック→「データ系列の書式設定」→「要素の間隔」で調整します。',
    'Googleスライドでは、「挿入」→「グラフ」→「横棒」を選ぶと、サンプルのグラフが入ります。右上の︙（その他）→「ソースを開く」でスプレッドシートが開くので、支店名と値を大きい順に入れ直します。グラフの編集画面の「カスタマイズ」→「系列」で色とデータラベル（棒の先の数字）を設定します。特定の1本だけ色を変えるときは、同じ「系列」の中の「データポイントの書式設定」で項目を追加します。直したらスライドに戻り、グラフの「更新」を押します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。棒の長さは「値 ÷ 目盛りの最大（500）」で決めているので、値を変えるときは目盛りの最大も一緒に見直してください。支店の数を変えるときは、名前の列と棒の行を同じ数だけ足し引きします。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-highlight="{{highlight}}">
  <p class="kicker">支店別の売上高（2025年度）</p>
  <h1 class="title">上位2支店で全社売上の45%を占める</h1>

  <div class="body">
    <div class="chart">
      <span class="unit">（百万円）</span>
      <!-- 項目名（大きい順） -->
      <div class="names">
        <span><b>1</b>東京本店</span><span><b>2</b>大阪支店</span><span><b>3</b>名古屋支店</span><span><b>4</b>福岡支店</span>
        <span><b>5</b>札幌支店</span><span><b>6</b>仙台支店</span><span><b>7</b>広島支店</span>
      </div>
      <!-- 棒（--v は値。長さ = 値 ÷ 500） -->
      <div class="plot">
        <i class="grid base" style="--v: 0"></i><i class="grid" style="--v: 100"></i><i class="grid" style="--v: 200"></i>
        <i class="grid" style="--v: 300"></i><i class="grid" style="--v: 400"></i><i class="grid" style="--v: 500"></i>
        <div class="row top" style="--v: 482"><span class="bar"></span><span class="val">482</span></div>
        <div class="row top" style="--v: 391"><span class="bar"></span><span class="val">391</span></div>
        <div class="row" style="--v: 326"><span class="bar"></span><span class="val">326</span></div>
        <div class="row" style="--v: 254"><span class="bar"></span><span class="val">254</span></div>
        <div class="row" style="--v: 198"><span class="bar"></span><span class="val">198</span></div>
        <div class="row" style="--v: 163"><span class="bar"></span><span class="val">163</span></div>
        <div class="row" style="--v: 121"><span class="bar"></span><span class="val">121</span></div>
      </div>
      <div class="axis">
        <span style="--v: 0">0</span><span style="--v: 100">100</span><span style="--v: 200">200</span>
        <span style="--v: 300">300</span><span style="--v: 400">400</span><span style="--v: 500">500</span>
      </div>
    </div>

    <div class="side">
      <span class="big">45%</span>
      <span class="big-label">上位2支店の売上シェア</span>
      <span class="sub">合計 873百万円</span>
    </div>
  </div>

  <p class="note">※ 全社の売上高は1,935百万円（税抜）。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --max: 500; /* 目盛りの最大。棒の長さ = 値 ÷ 最大 */
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
.body { flex: 1; display: flex; gap: 36px; margin: 16px 0 10px; min-height: 0; }

.chart { flex: 1; display: grid; grid-template-columns: 132px 1fr; grid-template-rows: 22px 1fr 28px; min-width: 0; }
.unit { grid-column: 2; align-self: end; padding-bottom: 4px; font-size: 13px; color: #8a8f9c; }
.names { display: flex; flex-direction: column; }
.names span { flex: 1; display: flex; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; white-space: nowrap; }
.names b { width: 18px; text-align: right; font-size: 15px; color: #8a8f9c; }

.plot { position: relative; display: flex; flex-direction: column; }
.grid { position: absolute; top: 0; bottom: 0; left: calc(var(--v) / var(--max) * 100%); width: 1px; background: #e3e5ea; }
.grid.base { background: #8a8f9c; }
.row { position: relative; flex: 1; }
.bar {
  position: absolute; left: 0;
  top: calc((100% - {{bar}}) / 2);
  height: {{bar}};
  width: calc(var(--v) / var(--max) * 100%);
  border-radius: 0 4px 4px 0;
  background: var(--accent);
}
.val {
  position: absolute; top: 50%; transform: translateY(-50%);
  left: calc(var(--v) / var(--max) * 100% + 8px);
  font-size: 18px; font-weight: 700; color: #5a6070;
}
.axis { grid-column: 2; position: relative; }
.axis span { position: absolute; top: 6px; left: calc(var(--v) / var(--max) * 100%); transform: translateX(-50%); font-size: 14px; color: #8a8f9c; }

/* 色を付ける棒（data-highlight="top2" なら上位2本だけ） */
.slide[data-highlight="top2"] .bar { background: #c3c8d2; }
.slide[data-highlight="top2"] .row.top .bar { background: var(--accent); }
.slide[data-highlight="top2"] .row.top .val { color: #1f2430; font-weight: 800; }

.side { flex: 0 0 200px; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding-left: 26px; border-left: 1px solid #e3e5ea; }
.big { font-size: 60px; font-weight: 800; line-height: 1.05; color: var(--accent); }
.big-label { font-size: 16px; color: #5a6070; }
.sub { margin-top: 14px; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 20px; font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'highlight',
      type: 'select',
      label: '色を付ける棒',
      value: 'top2',
      options: [
        { value: 'top2', label: '上位2本だけ色を付ける' },
        { value: 'all', label: 'すべて同じ色' },
      ],
    },
    { key: 'bar', label: '棒の太さ', min: 30, max: 80, step: 2, value: 56, unit: '%' },
  ],
  cautions: [
    '大きい順（または小さい順）に並べます。支店コード順や五十音順のままだと、せっかくの横棒が「ランキング」に見えず、どれが一番かを探すことになります。',
    '横棒グラフは、表の1行目がいちばん下に出ます。表の順番どおりに上から並べたつもりが逆さになる失敗が多いので、作ったら必ず「1位が上にあるか」を確かめます。',
    '目盛りは必ず0から始めます。途中から始めると、1位と2位の差が実際より大きく見えます。棒の先に数を書いたら、目盛りの数字は控えめで十分です。',
    '全部の棒に違う色を付けません。強調するのは上位や自社など1〜2本だけにして、見出しの結論と色の付いた棒を一致させます。',
  ],
  similar: [
    { slug: 'bar-chart', diff: '縦棒グラフ型は、棒を縦に立てて年度や月の移り変わりを並べる型です。時間の順に並べたいときはこちらにします。' },
    { slug: 'pareto', diff: 'パレート図型は、大きい順の棒に「累計の線」を重ねる型です。上位いくつで全体の何割かを示し、主な原因を絞りたいときに使います。' },
    { slug: 'pie-chart', diff: '円グラフ型は、全体に占める割合を円で見せる型です。項目が少なく、「全体の何割か」だけを伝えたいときに向きます。' },
  ],
  faq: [
    {
      q: '横棒グラフと縦棒グラフはどう使い分けますか？',
      a: '年度や月など時間の流れを見せるときは縦棒、支店や商品など名前で比べるときは横棒が向いています。横棒は項目名が横書きのまま読め、大きい順に並べて順位を見せられます。項目名が長いときも横棒にすると文字が重なりません。',
    },
    {
      q: 'PowerPointで横棒グラフを大きい順に並べるには？',
      a: '表に入れるデータを、あらかじめ小さい順に並べておくのが確実です。横棒グラフは表の下の行が上に出るため、小さい順に入れると大きい順に上から並びます。または縦軸（項目名）の設定で「軸を反転する」にチェックを入れても、上下が入れ替わります。',
    },
    {
      q: 'ランキングは何位まで載せるのがよいですか？',
      a: 'スライド1枚なら5〜10位までが読みやすい目安です。それ以上ある場合は、上位10位と「その他」にまとめるか、全体の一覧は別の資料にして、スライドには上位だけを載せます。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
