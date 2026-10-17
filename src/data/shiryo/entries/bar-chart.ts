import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'bar-chart',
  no: 26,
  category: 'data',
  name: '縦棒グラフ型',
  en: 'Column chart',
  aka: ['棒グラフ', '縦棒グラフ', '売上推移グラフ', '年度比較グラフ', 'バーチャート'],
  mode: 'static',
  title: '縦棒グラフ型のスライドとは？売上の推移を1枚で伝える作り方と色の付け方',
  description:
    '年度ごとの売上などを縦棒で並べる「縦棒グラフ型」のスライドを見本で解説。目盛りを0から始める理由、伝えたい棒だけに色を付けるコツ、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '年度や項目ごとの数を縦の棒で並べ、大きさの違いを見せる。',
  what: [
    '横に年度や項目を並べ、それぞれの数の大きさを縦の棒の高さで見せる型です。見本では5年分の売上高を並べ、いちばん新しい2025年度の棒だけに色を付けています。右側には、グラフから読み取ってほしい数字「前年度比+23%」を大きく置き、見出しには「売上高は4年で1.8倍」と結論を書いています。',
    '棒の高さは数に比例させるのが決まりです。目盛りは必ず0から始め、棒の上に数を書きます。こうすると、聞き手は棒の高さで大小をつかみ、数字で正確な値を確かめられます。グラフは「見せたい1点」が決まっていてこそ伝わるので、色を付ける棒は1本か2本に絞ります。',
  ],
  when: [
    '売上・会員数・問い合わせ件数など、年度や月ごとの数を並べて伸びを見せたいとき',
    '支店・商品・担当者など、いくつかの項目の数を比べたいとき（項目は多くて7つ程度まで）',
    '決算説明・月次報告・事業計画の発表で、成長や落ち込みを1枚で伝えたいとき',
  ],
  avoid: [
    '項目の名前が長く、下に並べると文字が重なるとき（横棒ランキング型の方が名前を読みやすい）',
    '24か月分など点の数が多く、細かな上がり下がりを見せたいとき（折れ線推移型にする）',
    '全体に占める割合を見せたいとき（円グラフ型・100%積み上げ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「縦棒グラフ型（column chart）」で作ってください。いちばん上に小さく「売上高の推移（2021〜2025年度）」、その下に結論の見出し「売上高は4年で1.8倍、2025年度は22.5億円」を置きます。左の広い場所に縦棒グラフを置き、横に2021〜2025年度の5本、値は順に12.4・14.1・16.0・18.3・22.5（億円）です。縦の目盛りは0から25まで5刻みにし、必ず0から始めてください。棒の高さは値にきっちり比例させ、各棒の上に値を書きます。棒の色は「{{highlight:t}}」にして、色を付ける棒はアクセント色{{accent:t}}、それ以外は薄い灰色にします。棒の太さは1本ぶんの幅の{{bar:t}}にします。右側の細い列には「+23%」を60pt前後の太字・アクセント色で大きく置き、その下に「2025年度の前年度比」、区切り線を挟んで「2021年度の1.8倍」と書いてください。立体・影・グラデーションは使わず、目盛りの線は薄い灰色にします。見出しは32〜36pt、目盛りと年度は14pt以上。下に「※ 全社の売上高（税抜）。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「縦棒」→「集合縦棒」を選び、出てきた表に年度と値を入れます。グラフを選んで「グラフのデザイン」→「グラフ要素を追加」から「データラベル」→「外側上」で棒の上に値を出し、凡例は消します（1種類だけのグラフに凡例は要りません）。色を付けたい棒は、1回クリックで全部、もう1回クリックでその1本だけが選ばれるので、「書式」→「図形の塗りつぶし」で色を変えます。ほかの棒は薄い灰色にします。棒の太さは、棒を右クリック→「データ系列の書式設定」→「要素の間隔」で調整します（間隔を小さくすると太くなります）。',
    'Googleスライドでは、「挿入」→「グラフ」から、棒が縦に立つ種類を選びます。グラフを選んで右上の︙（その他）→「ソースを開く」でスプレッドシートが開くので、そこで年度と値を入れ、グラフの編集画面の「カスタマイズ」→「系列」で色とデータラベル（棒の上の数字）を設定します。特定の1本だけ色を変えるときは、同じ「系列」の中の「データポイントの書式設定」で年度を追加します。直したらスライドに戻り、グラフの「更新」を押します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。棒の高さは「値 ÷ 目盛りの最大（25）」で決めているので、値を変えるときは目盛りの最大も一緒に見直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-highlight="{{highlight}}">
  <p class="kicker">売上高の推移（2021〜2025年度）</p>
  <h1 class="title">売上高は4年で1.8倍、2025年度は22.5億円</h1>

  <div class="body">
    <div class="chart">
      <!-- 目盛り（--v は値。0から25まで） -->
      <div class="y">
        <span class="unit">（億円）</span>
        <span style="--v: 0">0</span><span style="--v: 5">5</span><span style="--v: 10">10</span>
        <span style="--v: 15">15</span><span style="--v: 20">20</span><span style="--v: 25">25</span>
      </div>
      <div class="plot">
        <div class="bars">
          <div class="slot" style="--v: 12.4"><span class="val">12.4</span><span class="bar"></span></div>
          <div class="slot" style="--v: 14.1"><span class="val">14.1</span><span class="bar"></span></div>
          <div class="slot" style="--v: 16.0"><span class="val">16.0</span><span class="bar"></span></div>
          <div class="slot" style="--v: 18.3"><span class="val">18.3</span><span class="bar"></span></div>
          <div class="slot" style="--v: 22.5"><span class="val">22.5</span><span class="bar"></span></div>
        </div>
      </div>
      <div class="x">
        <span>2021年度</span><span>2022年度</span><span>2023年度</span><span>2024年度</span><span>2025年度</span>
      </div>
    </div>

    <div class="side">
      <span class="big">+23%</span>
      <span class="big-label">2025年度の前年度比</span>
      <span class="sub">2021年度の1.8倍</span>
    </div>
  </div>

  <p class="note">※ 全社の売上高（税抜）。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --max: 25; /* 目盛りの最大。棒の高さ = 値 ÷ 最大 */
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
.body { flex: 1; display: flex; gap: 40px; margin: 20px 0 10px; min-height: 0; }

.chart { flex: 1; display: grid; grid-template-columns: 52px 1fr; grid-template-rows: 1fr 30px; padding-top: 30px; }
.y, .plot { position: relative; }
.y span { position: absolute; right: 10px; bottom: calc(var(--v) / var(--max) * 100%); transform: translateY(50%); font-size: 14px; color: #8a8f9c; }
.y .unit { bottom: 100%; left: 0; right: auto; transform: none; margin-bottom: 8px; font-size: 13px; white-space: nowrap; }
/* 目盛りの線（5刻み） */
.plot {
  /* 上端の線と0の線（影で描くので高さは変わらない） */
  box-shadow: inset 0 1px #e3e5ea, inset 0 -1px #8a8f9c;
  background: repeating-linear-gradient(to top, #e3e5ea 0 1px, transparent 1px 20%);
}
.bars { position: absolute; inset: 0; display: flex; }
.slot { position: relative; flex: 1; display: flex; justify-content: center; align-items: flex-end; }
.bar {
  width: {{bar}};
  height: calc(var(--v) / var(--max) * 100%);
  border-radius: 4px 4px 0 0;
  background: var(--accent);
}
.val {
  position: absolute; left: 0; right: 0;
  bottom: calc(var(--v) / var(--max) * 100%);
  padding-bottom: 6px;
  text-align: center; font-size: 18px; font-weight: 700; color: #5a6070;
}
.slot:last-child .val { font-size: 24px; font-weight: 800; color: #1f2430; }
.x { grid-column: 2; display: flex; align-items: flex-end; }
.x span { flex: 1; text-align: center; font-size: 15px; color: #5a6070; }

/* 色を付ける棒（data-highlight="last" なら最新の年度だけ） */
.slide[data-highlight="last"] .bar { background: #c3c8d2; }
.slide[data-highlight="last"] .slot:last-child .bar { background: var(--accent); }
.slide[data-highlight="last"] .slot:last-child .val { color: var(--accent); }

.side { flex: 0 0 210px; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding-left: 28px; border-left: 1px solid #e3e5ea; }
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
      value: 'last',
      options: [
        { value: 'last', label: '最新の年度だけ色を付ける' },
        { value: 'all', label: 'すべて同じ色' },
      ],
    },
    { key: 'bar', label: '棒の太さ', min: 30, max: 80, step: 2, value: 56, unit: '%' },
  ],
  cautions: [
    '縦の目盛りは必ず0から始めます。途中（たとえば10）から始めると、12.4と14.1の差が何倍にも大きく見え、意図しなくても数字を盛った資料になります。',
    '色を付ける棒は、伝えたい1本か2本だけにします。全部に違う色を付けると、どこを見ればいいか分からなくなります。ほかの棒は薄い灰色で十分です。',
    '立体（3D）・影・グラデーションの棒は使いません。奥行きがあると棒の上端がどこか分かりにくく、高さを正しく読めなくなります。',
    '棒の上に値を書いたら、目盛りの数字や線は控えめにします。両方を濃く出すと線が多すぎて読みにくくなります。凡例も、棒が1種類なら消します。',
  ],
  similar: [
    { slug: 'ranking-bar', diff: '横棒ランキング型は、棒を横に寝かせて大きい順に並べる型です。項目名が長いときや、順位を見せたいときに向きます。' },
    { slug: 'line-chart', diff: '折れ線推移型は、点を線でつないで流れを見せる型です。点が多いとき（月ごとに24か月分など）や、複数の系列の動きを比べるときに向きます。' },
    { slug: 'stacked-bar', diff: '積み上げ棒型は、1本の棒を内訳ごとに積み重ねる型です。合計の伸びと、その中身の変化を一緒に見せたいときに使います。' },
  ],
  faq: [
    {
      q: '棒グラフと縦棒グラフは同じですか？',
      a: 'ほぼ同じものです。棒が縦に立つものを縦棒グラフ、横に寝るものを横棒グラフと呼び分けます。英語では縦棒を column chart、横棒を bar chart と呼ぶことが多く、単に「棒グラフ」と頼むと横棒が出てくることがあります。AIには「縦棒グラフ（column chart。棒が縦に立つもの）」と書くと確実です。',
    },
    {
      q: '縦棒グラフの目盛りを0から始めないのはだめですか？',
      a: '棒グラフでは0から始めるのが原則です。棒の長さで大きさを比べるグラフなので、途中から始めると差が実際より大きく見えてしまいます。小さな変化を見せたいときは、棒グラフではなく折れ線グラフを使うか、目盛りを省略したことを図の中ではっきり示します。',
    },
    {
      q: '棒の色は何色を使えばいいですか？',
      a: '資料全体で決めたアクセント色1色と、灰色の2色で足ります。伝えたい棒をアクセント色、ほかを薄い灰色にすると、見出しの結論とグラフの見どころが一致します。赤と緑の組み合わせは見分けにくい人がいるので避けます。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
