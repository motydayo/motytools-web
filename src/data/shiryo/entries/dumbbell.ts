import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'dumbbell',
  no: 44,
  category: 'data',
  name: 'ダンベル比較型',
  en: 'Dumbbell chart',
  aka: ['ダンベルチャート', 'ダンベルプロット', '2点比較グラフ', '前後比較の点グラフ', '差を見せるグラフ'],
  mode: 'static',
  title: 'ダンベル比較型とは？2つの値の差を点と線で見せる作り方【Excel・PowerPoint】',
  description:
    '導入前と導入後など、項目ごとの「2つの値の差」を点と線で見せる「ダンベル比較型」のスライドを見本で解説。並べ方の決まり、色の使い方、Excel・PowerPointでの作り方、AIへの指示文とHTMLのコードまでまとめました。',
  oneLine: '項目ごとの2つの値を点で置き、線で結んで差を長さで見せる。',
  what: [
    '項目ごとに、2つの値（導入前と導入後、計画と実績など）を横の目盛りの上に点で置き、2つの点を線で結ぶ型です。両端に点のあるダンベルの形になり、線の長さがそのまま差になります。見本では、6つの部署の月間残業時間を、導入前（灰色）と導入後（アクセント色）の点で示し、右の列に短縮した時間を書いています。',
    '決まりごとは、差の大きい順に並べることと、横の目盛りを0から始めることです。点の位置は値に比例させ、2つの点の意味（前と後など）は、すべての行で左右の向きをそろえます。棒グラフを2本ずつ並べるより場所を取らず、線の長さで差の大小を比べられるのが強みです。差の数字は右の列に書き、10時間以上の短縮だけに色を付けています。',
  ],
  when: [
    '部署・店舗・商品ごとに、導入前と導入後、前年と今年などの2つの値を比べて、差の大きさを見せたいとき',
    '目標と実績、男性と女性など、同じ項目の2つの数がどれくらい離れているかを見せたいとき',
    '項目が5〜15個あり、棒グラフを2本ずつ並べると窮屈になるとき',
  ],
  avoid: [
    '3つ以上の値を比べたいとき（折れ線推移型や表にする）',
    '順位の入れ替わりを見せたいとき（スロープグラフ型にする）',
    '合計と内訳を見せたいとき（積み上げ棒型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ダンベル比較型（dumbbell chart。2つの値を点と線で結んで差を見せるグラフ）」で作ってください。いちばん上に小さく「時差出勤・在宅勤務の導入前後の、部署別の月間残業時間（4月と9月）」、その下に結論の見出し「全部署で残業が減り、3部署は10時間以上の短縮」を置きます。見出しの下の広い場所に、横向きのグラフを6行、同じ間隔で並べてください。各行の左に部署名（18pt、太字）、中央の目盛りの上に「導入前」と「導入後」の2つの点を置いて線で結びます。横の目盛りは0〜50時間を10刻みにし、必ず0から始めます。点の位置は値にきっちり比例させ、点の大きさは{{dot:t}}にします。部署は短縮した時間の大きい順に、営業が32→21、経理が28→18、総務が22→12、開発が41→34、企画が26→22、人事が18→15です（時間）。導入前の点は灰色、導入後の点はアクセント色{{accent:t}}にし、導入前の数字は点の右、導入後の数字は点の左に18ptの太字で書きます。グラフの上に「導入前（4月）」と「導入後（9月）」の凡例を置いてください。右端の列「短縮した時間」は「{{delta:t}}」にし、出すときは各行に24ptの太字で−11、−10、−10、−7、−4、−3と書き、10時間以上のもの（営業・経理・総務）だけアクセント色にします。立体・影・グラデーションは使いません。下に「※ 部署ごとの月間残業時間の平均（時間）。全部署の単純平均は27.8時間から20.3時間へ。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「散布図」を選び、縦の位置に部署の番号（1〜6）、横の位置に時間を入れて2つの系列（導入前・導入後）を作ります。点どうしを結ぶ線は、グラフを選んで「グラフのデザイン」→「グラフ要素を追加」→「誤差範囲」から、「ユーザー設定」で左右の長さに「導入前と導入後の差」を指定する方法が定番ですが、手間がかかります。簡単に作るなら、「挿入」→「図形」から丸と線を描いて、横の位置を「値 ÷ 50 × 目盛りの幅」で置く方法が確実です。',
    'Googleスライドでも同じく、「挿入」→「図形」で丸と線を描き、値から計算した位置に置く方法が手軽です。グラフの機能で作るなら、スプレッドシートの「散布図」で2つの系列を作り、点の大きさと色を「カスタマイズ」で設定します。部署名は縦軸に出せないので、テキストボックスで左に並べます。Excelなら、PowerPointと同じ「散布図」と誤差範囲で作れます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。点の横の位置は「時間 ÷ 50 × 600 ＋ 96」で決めた数値を書いているので、時間を変えるときは、点・線・数字の位置と、右の列の差を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-delta="{{delta}}">
  <p class="kicker">時差出勤・在宅勤務の導入前後の、部署別の月間残業時間（4月と9月）</p>
  <h1 class="title">全部署で残業が減り、3部署は10時間以上の短縮</h1>
  <div class="body">
    <svg class="svg" viewBox="0 0 848 338" role="img" aria-label="部署ごとの導入前と導入後の残業時間">
      <line class="base" x1="96" x2="96" y1="40" y2="306" />
      <text class="tick" x="96" y="330" text-anchor="middle">0</text>
      <line class="grid" x1="216" x2="216" y1="40" y2="306" />
      <text class="tick" x="216" y="330" text-anchor="middle">10</text>
      <line class="grid" x1="336" x2="336" y1="40" y2="306" />
      <text class="tick" x="336" y="330" text-anchor="middle">20</text>
      <line class="grid" x1="456" x2="456" y1="40" y2="306" />
      <text class="tick" x="456" y="330" text-anchor="middle">30</text>
      <line class="grid" x1="576" x2="576" y1="40" y2="306" />
      <text class="tick" x="576" y="330" text-anchor="middle">40</text>
      <line class="grid" x1="696" x2="696" y1="40" y2="306" />
      <text class="tick" x="696" y="330" text-anchor="middle">50</text>
      <text class="unit" x="84" y="330" text-anchor="end">（時間）</text>
      <circle class="dot before" cx="104" cy="14" r="7" />
      <text class="legend" x="118" y="20">導入前（4月）</text>
      <circle class="dot after" cx="260" cy="14" r="7" />
      <text class="legend" x="274" y="20">導入後（9月）</text>
      <text class="head" x="848" y="20" text-anchor="end">短縮した時間</text>
      <text class="name" x="0" y="68">営業</text>
      <line class="bar" x1="348" x2="480" y1="62" y2="62" />
      <circle class="dot before" cx="480" cy="62" r="9" />
      <circle class="dot after" cx="348" cy="62" r="9" />
      <text class="v va" x="330" y="68" text-anchor="end">21</text>
      <text class="v vb" x="498" y="68">32</text>
      <text class="dv big" x="848" y="70" text-anchor="end">−11</text>
      <text class="name" x="0" y="112">経理</text>
      <line class="bar" x1="312" x2="432" y1="106" y2="106" />
      <circle class="dot before" cx="432" cy="106" r="9" />
      <circle class="dot after" cx="312" cy="106" r="9" />
      <text class="v va" x="294" y="112" text-anchor="end">18</text>
      <text class="v vb" x="450" y="112">28</text>
      <text class="dv big" x="848" y="114" text-anchor="end">−10</text>
      <text class="name" x="0" y="156">総務</text>
      <line class="bar" x1="240" x2="360" y1="150" y2="150" />
      <circle class="dot before" cx="360" cy="150" r="9" />
      <circle class="dot after" cx="240" cy="150" r="9" />
      <text class="v va" x="222" y="156" text-anchor="end">12</text>
      <text class="v vb" x="378" y="156">22</text>
      <text class="dv big" x="848" y="158" text-anchor="end">−10</text>
      <text class="name" x="0" y="200">開発</text>
      <line class="bar" x1="504" x2="588" y1="194" y2="194" />
      <circle class="dot before" cx="588" cy="194" r="9" />
      <circle class="dot after" cx="504" cy="194" r="9" />
      <text class="v va" x="486" y="200" text-anchor="end">34</text>
      <text class="v vb" x="606" y="200">41</text>
      <text class="dv x" x="848" y="202" text-anchor="end">−7</text>
      <text class="name" x="0" y="244">企画</text>
      <line class="bar" x1="360" x2="408" y1="238" y2="238" />
      <circle class="dot before" cx="408" cy="238" r="9" />
      <circle class="dot after" cx="360" cy="238" r="9" />
      <text class="v va" x="342" y="244" text-anchor="end">22</text>
      <text class="v vb" x="426" y="244">26</text>
      <text class="dv x" x="848" y="246" text-anchor="end">−4</text>
      <text class="name" x="0" y="288">人事</text>
      <line class="bar" x1="276" x2="312" y1="282" y2="282" />
      <circle class="dot before" cx="312" cy="282" r="9" />
      <circle class="dot after" cx="276" cy="282" r="9" />
      <text class="v va" x="258" y="288" text-anchor="end">15</text>
      <text class="v vb" x="330" y="288">18</text>
      <text class="dv x" x="848" y="290" text-anchor="end">−3</text>
    </svg>
  </div>
  <p class="note">※ 部署ごとの月間残業時間の平均（時間）。全部署の単純平均は27.8時間から20.3時間へ。</p>
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

/* 横の位置は 時間 ÷ 50 × 600。線の長さがそのまま差になる。座標は幅848×高さ338の中で数字で決めている */
/*svg*/
.svg { display: block; width: 100%; height: 100%; overflow: visible; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.base { stroke: #8a8f9c; stroke-width: 1.5; }
.tick { font-size: 14px; fill: #8a8f9c; font-variant-numeric: tabular-nums; }
.unit { font-size: 14px; fill: #8a8f9c; }
.legend { font-size: 15px; fill: #5a6070; }
.head { font-size: 15px; font-weight: 700; fill: #5a6070; }
.name { font-size: 18px; font-weight: 700; fill: #1f2430; }
.bar { stroke: #c3c8d2; stroke-width: 5; stroke-linecap: round; }
.dot { r: {{dot}}px; }
.dot.before { fill: #8a8f9c; }
.dot.after { fill: var(--accent); }
.v { font-size: 18px; font-weight: 800; fill: #5a6070; font-variant-numeric: tabular-nums; }
.v.va { fill: var(--accent); }
.dv { font-size: 24px; font-weight: 800; fill: #1f2430; font-variant-numeric: tabular-nums; }
.dv.big { fill: var(--accent); }
/* 短縮した時間の列（data-delta="hide" で消す） */
.slide[data-delta="hide"] .dv,
.slide[data-delta="hide"] .head { display: none; }
/*end*/`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'delta',
      type: 'select',
      label: '短縮した時間の列',
      value: 'show',
      options: [
        { value: 'show', label: '出す' },
        { value: 'hide', label: '出さない' },
      ],
    },
    { key: 'dot', label: '点の大きさ（半径）', min: 6, max: 12, step: 1, value: 9, unit: '' },
  ],
  cautions: [
    '横の目盛りは0から始めます。途中から始めると、短縮した時間（線の長さ）の差が大きく見え、効果を盛った資料になります。差の数字も必ず並べて書きます。',
    '2つの点の意味と色を、すべての行で同じにします。導入前が左の行と右の行が混ざると、減った行と増えた行の見分けがつきません。上の凡例で、どちらが前でどちらが後かを必ず示します。',
    '差の大きい順に並べます。部署名の順に並べると、読み手は結論（どこが大きく変わったか）を自分で探すことになります。差が同じ行は、元の順番のままにします。',
    '色を付けるのは、結論に関わる点と数字だけです。見本は10時間以上短縮した3つの部署だけです。全部の行に色を付けたり、点を3色にしたりしないようにします。',
  ],
  similar: [
    { slug: 'slope', diff: 'スロープグラフ型は、2つの時点の値を左右に並べ、線の傾きで変化を見せる型です。順位の入れ替わりを見せたいときに向きます。ダンベル比較型は、差を長さで比べたいときに向きます。' },
    { slug: 'bar-chart', diff: '縦棒グラフ型は、項目ごとの数を棒の高さで見せる型です。2つの値を比べるために棒を2本ずつ並べると窮屈になるときは、ダンベル比較型の方がすっきりします。' },
    { slug: 'target-actual', diff: '目標・実績型は、目標に対して実績がどれだけ届いたかを見せる型です。2つの値の「差」ではなく、「達成度」を見せたいときに向きます。' },
  ],
  faq: [
    {
      q: 'ダンベルチャートとは何ですか？',
      a: '項目ごとに2つの値を点で示し、2つの点を線で結んだグラフです。両端に点のある線が、ダンベルの形に似ています。前と後、計画と実績のように、同じ項目の2つの値の差を長さで見せたいときに使います。',
    },
    {
      q: 'ダンベルチャートはExcelで作れますか？',
      a: '専用のグラフはないので、散布図と誤差範囲を組み合わせるのが定番です。手間がかかるので、スライドに1枚だけ入れるなら、丸と線の図形を値から計算した位置に置く方が確実です。',
    },
    {
      q: 'ダンベル比較型と棒グラフはどう使い分けますか？',
      a: '項目ごとの値そのものを比べるなら棒グラフ、2つの値の差を比べるならダンベル比較型です。2本ずつの棒を並べると、差が読み取りにくくなりますが、ダンベルなら線の長さがそのまま差になります。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
