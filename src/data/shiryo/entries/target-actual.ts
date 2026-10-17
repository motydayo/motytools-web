import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'target-actual',
  no: 47,
  category: 'data',
  name: '目標・実績型',
  en: 'Target vs actual (bullet chart)',
  aka: ['ブレットチャート', '目標達成グラフ', '予実グラフ', '予実対比', '達成率グラフ'],
  mode: 'static',
  title: '目標・実績型とは？達成度をひと目で見せる作り方【PowerPoint・Excel】見本つき',
  description:
    '目標に対して実績がどこまで届いたかを見せる「目標・実績型」のスライドを見本で解説。目標の印の付け方、未達の見せ方、PowerPoint・Excelでの作り方、AIへの指示文とHTMLのコードまでまとめました。そのまま使えます。',
  oneLine: '目標の印と実績の棒を同じ目盛りに置き、達成度を見せる。',
  what: [
    '目標と実績を同じ目盛りの上に置き、どこまで届いたかを見せる型です。見本では、6つの営業所の半期売上を横棒にしています。灰色の帯が目標までの長さ、色付きの棒が実績、細い縦線が目標の位置です。右には実績・目標・達成率の数字を並べ、達成率の高い順に並べています。目標に届いた4つの営業所はアクセント色、届かなかった札幌と名古屋は灰色（または赤）にして、見出しの結論「全体では目標の102%」と合わせています。',
    '決まりごとは、目盛りを0から始めることと、目標の印をすべての行で同じ形にすることです。棒だけでは、目標との差が数%のとき見分けにくいので、達成率を数字でも右に書きます。目標の大きさが違う行（東京400と札幌120）を同じ目盛りに置くと、小さな行の棒は短くなりますが、達成度は帯と棒の比で読めます。',
  ],
  when: [
    '営業所・店舗・担当者ごとに、目標に対する実績を一覧で報告したいとき',
    '月次・四半期の定例会議で、「どこが届いて、どこが届かなかったか」を見せたいとき',
    '実績が目標を超えた分、届かなかった分を、数字の大きさのまま見せたいとき',
  ],
  avoid: [
    '目標が1つだけで、進み具合を大きく見せたいとき（KPIダッシュボード型の数字カードにする）',
    '月ごとの推移を見せたいとき（折れ線推移型にする）',
    '目標との差だけを大きさで比べたいとき（ダンベル比較型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「目標・実績型（bullet chart。目標の印と実績の棒を重ねた横棒グラフ）」で作ってください。いちばん上に小さく「営業所別の半期売上：目標と実績（2025年4〜9月）」、その下に結論の見出し「全体では目標の102%、札幌と名古屋が未達」を置きます。見出しの下の広い場所に、横棒を6行、同じ間隔で並べてください。営業所と数字（単位は百万円、目標→実績）は、達成率の高い順に、東京が400→432（108%）、福岡が180→189（105%）、仙台が150→156（104%）、大阪が300→309（103%）、札幌が120→108（90%）、名古屋が220→198（90%）です。各行は、0から目標までの長さの薄い灰色の帯を敷き、その上に実績の棒（高さ24pt）を重ね、目標の位置に黒い細い縦線を引きます。横の目盛りは0〜450を100刻みにし、必ず0から始めてください。棒の長さは値にきっちり比例させます。目標に届いた棒はアクセント色{{accent:t}}にし、届かなかった棒は「{{miss:t}}」にしてください。左に営業所名（18pt、太字）、右に「実績」「目標」「達成率」の3列（実績と達成率は22〜24pt、太字。目標は灰色）を置きます。達成率の色も棒と同じにします。グラフの上に凡例（目標を達成・未達・目標）を置いてください。立体・影・グラデーションは使いません。下に「※ 単位は百万円。灰色の帯が目標まで、細い縦線が目標。達成率は 実績 ÷ 目標。全体は目標1,370に対して実績1,392。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「横棒」→「集合横棒」を選び、表に営業所ごとの「目標」と「実績」の2列を入れます。グラフを選んで「目標」の系列を右クリック→「データ系列の書式設定」で、「系列の重なり」を100%にして、目標を薄い灰色の太い棒にします。次に「実績」の系列を同じ設定画面で「第2軸」にし、「要素の間隔」を大きくして細い棒にし、アクセント色にします。目標の位置の縦線は、「挿入」→「図形」の直線で足すと確実です（バージョンによって画面の名前が少し違います）。',
    'Googleスライドでは、グラフの機能で棒を重ねるのが難しいので、「挿入」→「図形」から四角形（目標の帯と実績の棒）と直線（目標の印）を描くのが確実です。長さは「値 ÷ 450 × 目盛りの幅」で計算し、図形を選んで右上の「書式オプション」の「サイズと回転」に数字で入れます。行の数が多いときは、先にスプレッドシートで長さを計算してから描くと楽です。Excelなら、PowerPointと同じ手順の横棒グラフで作れます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。帯・棒・縦線の位置は「値 ÷ 450 × 506 ＋ 84」で決めた数値を書いているので、数字を変えるときは、帯・棒・縦線・右の列の数字と達成率を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-miss="{{miss}}">
  <p class="kicker">営業所別の半期売上：目標と実績（2025年4〜9月）</p>
  <h1 class="title">全体では目標の102%、札幌と名古屋が未達</h1>
  <div class="body">
    <svg class="svg" viewBox="0 0 848 338" role="img" aria-label="営業所ごとの目標と実績">
      <line class="base" x1="84" x2="84" y1="38" y2="306" />
      <text class="tick" x="84" y="330" text-anchor="middle">0</text>
      <line class="grid" x1="196.44" x2="196.44" y1="38" y2="306" />
      <text class="tick" x="196.44" y="330" text-anchor="middle">100</text>
      <line class="grid" x1="308.89" x2="308.89" y1="38" y2="306" />
      <text class="tick" x="308.89" y="330" text-anchor="middle">200</text>
      <line class="grid" x1="421.33" x2="421.33" y1="38" y2="306" />
      <text class="tick" x="421.33" y="330" text-anchor="middle">300</text>
      <line class="grid" x1="533.78" x2="533.78" y1="38" y2="306" />
      <text class="tick" x="533.78" y="330" text-anchor="middle">400</text>
      <rect class="bar ok" x="84" y="7" width="22" height="12" rx="2" />
      <text class="legend" x="114" y="19">目標を達成</text>
      <rect class="bar ng" x="224" y="7" width="22" height="12" rx="2" />
      <text class="legend" x="254" y="19">未達</text>
      <line class="tgt" x1="324" x2="324" y1="3" y2="23" />
      <text class="legend" x="336" y="19">目標</text>
      <text class="head" x="690" y="19" text-anchor="end">実績</text>
      <text class="head" x="760" y="19" text-anchor="end">目標</text>
      <text class="head" x="848" y="19" text-anchor="end">達成率</text>
      <text class="name" x="0" y="64">東京</text>
      <rect class="track" x="84" y="41" width="449.78" height="34" rx="2" />
      <rect class="bar ok act" x="84" y="46" width="485.76" height="24" rx="2" />
      <line class="tgt" x1="533.78" x2="533.78" y1="38" y2="78" />
      <text class="v" x="690" y="66" text-anchor="end">432</text>
      <text class="v tv" x="760" y="66" text-anchor="end">400</text>
      <text class="pct ok" x="848" y="67" text-anchor="end">108%</text>
      <text class="name" x="0" y="110">福岡</text>
      <rect class="track" x="84" y="87" width="202.4" height="34" rx="2" />
      <rect class="bar ok act" x="84" y="92" width="212.52" height="24" rx="2" />
      <line class="tgt" x1="286.4" x2="286.4" y1="84" y2="124" />
      <text class="v" x="690" y="112" text-anchor="end">189</text>
      <text class="v tv" x="760" y="112" text-anchor="end">180</text>
      <text class="pct ok" x="848" y="113" text-anchor="end">105%</text>
      <text class="name" x="0" y="156">仙台</text>
      <rect class="track" x="84" y="133" width="168.67" height="34" rx="2" />
      <rect class="bar ok act" x="84" y="138" width="175.41" height="24" rx="2" />
      <line class="tgt" x1="252.67" x2="252.67" y1="130" y2="170" />
      <text class="v" x="690" y="158" text-anchor="end">156</text>
      <text class="v tv" x="760" y="158" text-anchor="end">150</text>
      <text class="pct ok" x="848" y="159" text-anchor="end">104%</text>
      <text class="name" x="0" y="202">大阪</text>
      <rect class="track" x="84" y="179" width="337.33" height="34" rx="2" />
      <rect class="bar ok act" x="84" y="184" width="347.45" height="24" rx="2" />
      <line class="tgt" x1="421.33" x2="421.33" y1="176" y2="216" />
      <text class="v" x="690" y="204" text-anchor="end">309</text>
      <text class="v tv" x="760" y="204" text-anchor="end">300</text>
      <text class="pct ok" x="848" y="205" text-anchor="end">103%</text>
      <text class="name" x="0" y="248">札幌</text>
      <rect class="track" x="84" y="225" width="134.93" height="34" rx="2" />
      <rect class="bar ng act" x="84" y="230" width="121.44" height="24" rx="2" />
      <line class="tgt" x1="218.93" x2="218.93" y1="222" y2="262" />
      <text class="v" x="690" y="250" text-anchor="end">108</text>
      <text class="v tv" x="760" y="250" text-anchor="end">120</text>
      <text class="pct ng" x="848" y="251" text-anchor="end">90%</text>
      <text class="name" x="0" y="294">名古屋</text>
      <rect class="track" x="84" y="271" width="247.38" height="34" rx="2" />
      <rect class="bar ng act" x="84" y="276" width="222.64" height="24" rx="2" />
      <line class="tgt" x1="331.38" x2="331.38" y1="268" y2="308" />
      <text class="v" x="690" y="296" text-anchor="end">198</text>
      <text class="v tv" x="760" y="296" text-anchor="end">220</text>
      <text class="pct ng" x="848" y="297" text-anchor="end">90%</text>
    </svg>
  </div>
  <p class="note">※ 単位は百万円。灰色の帯が目標まで、細い縦線が目標。達成率は 実績 ÷ 目標。全体は目標1,370に対して実績1,392。</p>
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

/* 横の位置は 値 ÷ 450 × 506（目盛りは0〜450）。灰色の帯は目標まで、青い棒は実績。座標は幅848×高さ338の中で数字で決めている */
/*svg*/
.svg { display: block; width: 100%; height: 100%; overflow: visible; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.base { stroke: #8a8f9c; stroke-width: 1.5; }
.tick { font-size: 14px; fill: #8a8f9c; font-variant-numeric: tabular-nums; }
.legend { font-size: 15px; fill: #5a6070; }
.head { font-size: 15px; font-weight: 700; fill: #5a6070; }
.name { font-size: 18px; font-weight: 700; fill: #1f2430; }
.track { fill: #eceef2; }
.bar.ok { fill: var(--accent); }
.bar.ng { fill: #8a8f9c; }
.tgt { stroke: #1f2430; stroke-width: 3; }
.v { font-size: 22px; font-weight: 800; fill: #1f2430; font-variant-numeric: tabular-nums; }
.v.tv { fill: #8a8f9c; font-weight: 700; }
.pct { font-size: 24px; font-weight: 800; font-variant-numeric: tabular-nums; }
.pct.ok { fill: var(--accent); }
.pct.ng { fill: #8a8f9c; }

/* 未達の見せ方（data-miss="red" なら、未達の棒と達成率を赤にする） */
.slide[data-miss="red"] .bar.ng { fill: #d0453a; }
.slide[data-miss="red"] .pct.ng { fill: #d0453a; }
/*end*/`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'miss',
      type: 'select',
      label: '未達の見せ方',
      value: 'gray',
      options: [
        { value: 'gray', label: '灰色にする' },
        { value: 'red', label: '赤にする' },
      ],
    },
  ],
  cautions: [
    '横の目盛りは0から始めます。途中から始めると、108%と90%の差が実際より何倍にも大きく見えます。達成率の数字も右に並べて書き、棒の長さだけで判断させないようにします。',
    '目標の印は、すべての行で同じ形・同じ色にします。行によって印が違ったり、実績の棒より目立たなかったりすると、「どこが目標か」を探すことになります。見本は黒い細い縦線で統一しています。',
    '未達に赤を使うときは、赤は未達だけにします。目標を超えた行にも別の色を付けたり、棒を3色にしたりすると、何が良くて何が悪いのかが分かりません。見本のように「達成＝アクセント色、未達＝灰色（または赤）」の2通りにします。',
    '達成率の分母（目標）を書きます。「105%」だけでは、目標がいくらなのか分かりません。見本のように、右の列に実績と目標の数字を並べ、全体の合計も注記に書いておくと、聞き手が検算できます。',
  ],
  similar: [
    { slug: 'kpi-dashboard', diff: 'KPIダッシュボード型は、大事な数字を複数のカードで一覧にする型です。1つの指標の達成度を大きく見せたいときに向きます。目標・実績型は、同じ指標を営業所などの項目ごとに並べます。' },
    { slug: 'dumbbell', diff: 'ダンベル比較型は、項目ごとの2つの値を点と線で結んで差を見せる型です。目標・実績型は、目標までの帯と実績の棒で達成度を見せます。' },
    { slug: 'bar-chart', diff: '縦棒グラフ型は、年度や項目ごとの数の大きさを比べる型です。目標との比較が主題のときは、目標の印を付けられる目標・実績型を使います。' },
  ],
  faq: [
    {
      q: 'ブレットチャートとは何ですか？',
      a: '目標の印と実績の棒を同じ目盛りの上に重ねた、横棒のグラフです。灰色の帯で目標までの範囲を、色付きの棒で実績を、縦線で目標の位置を示します。1枚で多くの項目の達成度を比べられます。',
    },
    {
      q: '目標・実績のグラフはExcelで作れますか？',
      a: '作れます。横棒グラフに「目標」と「実績」の2系列を入れ、系列の重なりを100%にして、実績を第2軸の細い棒にすると、見本のような形になります。目標の縦線は、図形の直線で足すのが確実です。',
    },
    {
      q: '達成率は何%を超えたら色を変えますか？',
      a: '100%以上をアクセント色、100%未満を灰色（または赤）の2通りにするのが分かりやすいです。「90%以上は黄色」のように段階を増やすと、色の意味を説明する手間が増えるので、見本のように2通りに絞ります。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
