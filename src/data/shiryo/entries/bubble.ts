import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'bubble',
  no: 35,
  category: 'data',
  name: 'バブルチャート型',
  en: 'Bubble chart',
  aka: ['バブルチャート', 'バブルグラフ', '3軸の散布図', '円の大きさで表すグラフ', 'ポートフォリオ図'],
  mode: 'static',
  title: 'バブルチャートとは？3つの数を円で見せるスライドの作り方と見本【PowerPoint】',
  description:
    '成長率・利益率・売上の3つの数を、位置と円の大きさで同時に見せる「バブルチャート型」のスライドを見本で解説。円の面積を値に比例させる決まり、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '2つの数を位置で、3つ目の数を円の大きさで見せる。',
  what: [
    '散布図の点を円（バブル）に変えて、円の大きさで3つ目の数を表す型です。見本では6つの商品カテゴリを、横軸「市場の成長率」・縦軸「営業利益率」の位置に置き、円の大きさを売上高にしています。除菌スプレーだけにアクセント色を付け、売上は小さくても「成長も利益率も最大」という見出しの結論につなげています。',
    '最大の決まりは、円の「面積」を値に比例させることです。半径を値に比例させると、値が2倍の円の面積は4倍になって、実際より大きく見えます。半径は値の平方根（√）に比例させるので、見本でもそう計算して描いています。円の横に名前と値を直接書くと、凡例を探す手間がなくなります。',
  ],
  when: [
    '商品・事業・顧客を「成長率×利益率」のように2つの軸で位置づけ、売上などの規模も同時に見せたいとき',
    '複数の事業の優先順位を、経営会議で1枚で議論したいとき（事業ポートフォリオの整理）',
    '国・地域・店舗ごとに、2つの指標と人口や売上のような規模を同時に比べたいとき',
  ],
  avoid: [
    '円が10個を超えて重なり、名前が読めなくなるとき（上位だけにするか、散布図型にする）',
    '大きさの違いを正確に比べたいとき（人は面積の比較が苦手。横棒ランキング型にする）',
    '3つ目の数が不要で、2つの数の関係だけを見せたいとき（散布図型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「バブルチャート型（bubble chart）」で作ってください。いちばん上に小さく「商品カテゴリの位置づけ（2025年度）」、その下に結論の見出し「除菌スプレーは成長も利益率も最大」を置きます。スライドの残りの広い場所にバブルチャートを1つ置き、横軸は「市場の成長率（%／年）」で0から16まで4刻み、縦軸は「営業利益率（%）」で0から40まで10刻みにし、どちらも必ず0から始めてください。円は6つで、（名前, 成長率, 利益率, 売上高[億円]）を順に（洗濯洗剤, 2, 20, 42）（食器用洗剤, 6, 14, 28）（柔軟剤, 8, 26, 35）（除菌スプレー, 14, 31, 16）（入浴剤, 11, 12, 9）（芳香剤, 3, 7, 12）とします。円の面積が売上高に比例するよう、半径は売上高の平方根に比例させてください。色は「{{highlight:t}}」にして、色を付ける円（除菌スプレー）はアクセント色{{accent:t}}、それ以外は半透明の灰色にします。円の大きさは標準の{{size:t}}の比率にします。各円の横に、商品名（17pt前後の太字）と売上高（14pt以上、例: 42億円）を直接書き、凡例は付けません。見出しは32〜36pt、目盛りは14pt以上にしてください。目盛りの線は薄い灰色にします。下に「※ 円の面積が売上高（億円）。営業利益率は売上に対する営業利益の割合。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「散布図」→「バブル」を選び、出てきた表のX列に成長率、Y列に利益率、サイズ列に売上高を入れます。バブルは値が大きさ（面積）になる設定が最初から入っています。「グラフ要素を追加」→「データラベル」で商品名を出したいときは、データラベルを右クリックして「データラベルの書式設定」を開き、「セルの値」を選んでラベルにしたい列の範囲を指定します（この操作は新しいバージョンのPowerPointとExcelにあります）。円の色は、円を1回クリックで全体、もう1回でその1つだけが選ばれるので、「書式」→「図形の塗りつぶし」で変えます。',
    'Googleスライドでは、バブルチャートをスプレッドシートで作ります。スプレッドシートに「名前・X・Y・色・サイズ」の列を入れて「挿入」→「グラフ」→グラフエディタの「設定」→「グラフの種類」で「バブルチャート」を選びます。「カスタマイズ」→「系列」で色と透明度を整えます。できたら、スライドで「挿入」→「グラフ」→「スプレッドシートから」で貼り付けます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。円の位置は「成長率 ÷ 16」「利益率 ÷ 40」、半径は「44 × √（売上 ÷ 最大の売上42）」から計算した数字で書いてあります。値を変えるときは、円の位置と半径をAIに計算し直してもらってください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-highlight="{{highlight}}">
  <p class="kicker">商品カテゴリの位置づけ（2025年度）</p>
  <h1 class="title">除菌スプレーは成長も利益率も最大</h1>

  <div class="body">
    <!-- 図は幅848×高さ332。横=成長率 ÷ 16、縦=利益率 ÷ 40。半径 = 44 × √(売上 ÷ 42) -->
    <svg class="chart" viewBox="0 0 848 332">
      <text class="axis" x="0" y="14">営業利益率（%）</text>
      <line class="grid base" x1="56" x2="800" y1="282" y2="282" /><text class="tick" x="46" y="287" text-anchor="end">0</text>
      <line class="grid" x1="56" x2="800" y1="217.5" y2="217.5" /><text class="tick" x="46" y="222.5" text-anchor="end">10</text>
      <line class="grid" x1="56" x2="800" y1="153" y2="153" /><text class="tick" x="46" y="158" text-anchor="end">20</text>
      <line class="grid" x1="56" x2="800" y1="88.5" y2="88.5" /><text class="tick" x="46" y="93.5" text-anchor="end">30</text>
      <line class="grid" x1="56" x2="800" y1="24" y2="24" /><text class="tick" x="46" y="29" text-anchor="end">40</text>
      <text class="tick" x="56" y="305" text-anchor="middle">0</text>
      <line class="grid" x1="242" x2="242" y1="24" y2="282" /><text class="tick" x="242" y="305" text-anchor="middle">4</text>
      <line class="grid" x1="428" x2="428" y1="24" y2="282" /><text class="tick" x="428" y="305" text-anchor="middle">8</text>
      <line class="grid" x1="614" x2="614" y1="24" y2="282" /><text class="tick" x="614" y="305" text-anchor="middle">12</text>
      <line class="grid" x1="800" x2="800" y1="24" y2="282" /><text class="tick" x="800" y="305" text-anchor="middle">16</text>
      <text class="axis" x="800" y="330" text-anchor="end">市場の成長率（%／年）</text>
      <g>
        <circle class="circle" cx="149" cy="153" r="44" />
        <text class="name" x="202" y="151" text-anchor="start">洗濯洗剤</text>
        <text class="val" x="202" y="170" text-anchor="start">42億円</text>
      </g>
      <g>
        <circle class="circle" cx="335" cy="191.7" r="35.9" />
        <text class="name" x="379.9" y="189.7" text-anchor="start">食器用洗剤</text>
        <text class="val" x="379.9" y="208.7" text-anchor="start">28億円</text>
      </g>
      <g>
        <circle class="circle" cx="428" cy="114.3" r="40.2" />
        <text class="name" x="477.2" y="112.3" text-anchor="start">柔軟剤</text>
        <text class="val" x="477.2" y="131.3" text-anchor="start">35億円</text>
      </g>
      <g class="pick">
        <circle class="circle" cx="707" cy="82" r="27.2" />
        <text class="name" x="670.8" y="80" text-anchor="end">除菌スプレー</text>
        <text class="val" x="670.8" y="99" text-anchor="end">16億円</text>
      </g>
      <g>
        <circle class="circle" cx="567.5" cy="204.6" r="20.4" />
        <text class="name" x="596.9" y="202.6" text-anchor="start">入浴剤</text>
        <text class="val" x="596.9" y="221.6" text-anchor="start">9億円</text>
      </g>
      <g>
        <circle class="circle" cx="195.5" cy="236.8" r="23.5" />
        <text class="name" x="228" y="234.8" text-anchor="start">芳香剤</text>
        <text class="val" x="228" y="253.8" text-anchor="start">12億円</text>
      </g>
    </svg>
  </div>

  <p class="note">※ 円の面積が売上高（億円）。営業利益率は売上に対する営業利益の割合。</p>
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
.body { flex: 1; display: flex; align-items: center; margin: 12px 0 6px; min-height: 0; }
.chart { display: block; width: 100%; height: auto; overflow: visible; }

.axis { font-size: 13px; fill: #8a8f9c; }
.tick { font-size: 14px; fill: #8a8f9c; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.grid.base { stroke: #8a8f9c; }
/* 円の大きさの倍率（100が標準）。円の中心を基準に拡大縮小する */
.circle { fill: #8a8f9c; fill-opacity: 0.45; stroke: #fff; stroke-width: 2; transform-box: fill-box; transform-origin: center; transform: scale(calc({{size}} / 100)); }
.name { font-size: 17px; font-weight: 800; fill: #1f2430; }
.val { font-size: 14px; fill: #5a6070; }
.pick .circle { fill: var(--accent); fill-opacity: 0.85; }
.pick .name { fill: var(--accent); }

/* 色を付ける円（data-highlight="all" ならすべて同じ色） */
.slide[data-highlight="all"] .circle { fill: var(--accent); fill-opacity: 0.5; }
.slide[data-highlight="all"] .pick .name { fill: #1f2430; }

.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'highlight',
      type: 'select',
      label: '色を付ける円',
      value: 'pick',
      options: [
        { value: 'pick', label: '除菌スプレーだけ色を付ける' },
        { value: 'all', label: 'すべて同じ色' },
      ],
    },
    { key: 'size', label: '円の大きさ', min: 70, max: 110, step: 5, value: 100, unit: '' },
  ],
  cautions: [
    '円の「面積」を値に比例させます。半径を値に比例させると、値が2倍の円は面積が4倍になり、大きい円が実際以上に目立ちます。表計算ソフトのバブルチャートは面積が基準になる設定にしておきます。',
    '円が重なって名前が隠れるときは、円を半透明にするか、重なる円の位置を少し離したレイアウトにします。それでも重なるなら、円の数を減らします。10個を超えるとバブルチャートは読めなくなります。',
    '「円の大きさは何か」を必ず注記に書きます。軸には名前が付いていても、円の大きさだけは説明が抜けやすく、聞き手が「大きいほどいいのか」と迷います。',
    '軸の目盛りは0から始めます。途中から始めると、円の位置の差が大きく見えます。また、円のラベルは円の横に直接書き、凡例との往復をなくします。',
  ],
  similar: [
    { slug: 'scatter', diff: '散布図型は、2つの数の関係を点の位置だけで見せる型です。3つ目の数が不要なとき、点が多いときはこちらが読みやすくなります。' },
    { slug: 'matrix', diff: 'マトリクス型（2×2）は、2つの軸で4つの箱に分けて位置づける型です。正確な数ではなく、大まかな優先順位を議論したいときに使います。' },
    { slug: 'ranking-bar', diff: '横棒ランキング型は、1つの数を大きい順に棒で比べる型です。円の大きさより棒の長さの方が、大小を正確に比べられます。' },
  ],
  faq: [
    {
      q: 'バブルチャートの円の大きさは、半径と面積のどちらを値に比例させますか？',
      a: '面積を値に比例させるのが正しい作り方です。ExcelやPowerPointのバブルチャートも、初期設定ではバブルのサイズが面積になっています。半径を比例させると、値の違いが実際より大きく見えてしまいます。',
    },
    {
      q: 'バブルチャートと散布図はどう使い分けますか？',
      a: '2つの数の関係だけを見せたいなら散布図、「規模の大きさも」同時に見せたいならバブルチャートです。バブルチャートは見る人の負担が増えるので、円は10個以内に抑えます。',
    },
    {
      q: 'PowerPointでバブルに商品名を表示するには？',
      a: 'データラベルを右クリックして「データラベルの書式設定」を開き、「セルの値」を選んで、商品名が入った列の範囲を指定します。古いバージョンでは使えないことがあり、その場合は商品名をテキストボックスで円の横に重ねます。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
