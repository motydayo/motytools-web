import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'radar',
  no: 37,
  category: 'data',
  name: 'レーダーチャート型',
  en: 'Radar chart',
  aka: ['レーダーチャート', 'クモの巣グラフ', '蜘蛛の巣チャート', '多角形グラフ', '評価の比較グラフ'],
  mode: 'static',
  title: 'レーダーチャートとは？評価を多角形で比べるスライドの作り方と見本',
  description:
    '品質・価格・サポートなど複数の観点の評価を多角形で比べる「レーダーチャート型」のスライドを見本で解説。観点を5〜8個に絞るコツ、評価の基準を揃える決まり、PowerPoint・Googleスライドでの作り方、AIへの指示とHTMLまで。',
  oneLine: 'いくつかの観点の評価を多角形にして、2つ以上を重ねて比べる。',
  what: [
    '観点の数だけ中心から軸を放射状に伸ばし、各観点の評価の点を結んで多角形にした型です（形から「クモの巣グラフ」とも呼ばれます）。見本では見積もりサービスを価格・品質・納期・サポート・機能・使いやすさの6観点で5段階評価し、当社（アクセント色の塗り）と競合A社（灰色の破線）を重ねています。当社の多角形が、品質とサポートの方向に大きく張り出しているのが読み取れます。',
    'レーダーチャートの価値は、「どの観点が強く、どの観点が弱いか」という形の違いを一目で見せることです。決まりは、全部の観点を同じ評価の物差し（見本では1〜5）にそろえること、中心を0にすること、観点は5〜8個に絞ることです。細かい数字は読み取りにくいので、右に「上回る・下回る」の要約を数字で添えます。',
  ],
  when: [
    '自社と競合、候補A案とB案のように、複数の観点で総合的な強み・弱みを見せたいとき',
    '人事評価・スキル診断・商品の機能比較など、観点の物差しがそろったデータを見せたいとき',
    '「平均すると同じでも、得意な分野が違う」という形の違いを見せたいとき',
  ],
  avoid: [
    '観点が3つ以下、または9つ以上のとき（3つ以下は横棒ランキング型、多いときは選択肢比較表型にする）',
    '観点ごとに物差し（単位）が違うとき（円や点数が混ざる場合は、5段階に直すか、表にする）',
    '正確な数値の大小を比べたいとき（人は多角形の面積の比較が苦手。横棒ランキング型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「レーダーチャート型（radar chart）」で作ってください。いちばん上に小さく「見積もりサービスの比較（5段階評価）」、その下に結論の見出し「当社は品質とサポートで競合A社を上回る」を置きます。左にレーダーチャート、右に要約の列を置きます。観点は真上から時計回りに「価格」「品質」「納期」「サポート」「機能」「使いやすさ」の6つで、評価は当社が順に3・5・4・5・3・4、競合A社が5・3・4・2・4・4です。中心を0、外側を5として、1から5まで5段の多角形の目盛りの線を薄い灰色で引き、各観点の名前は16pt前後の太字で外側に書いてください。当社の多角形はアクセント色{{accent:t}}の線（3.5pt前後）で、内側を{{fill:t}}の濃さで塗ります。競合A社は灰色の破線にし、塗りはほとんどつけません。競合A社の線は「{{compare:t}}」にします。右の列には、上から凡例（当社・競合A社）、「当社が上回る」（サポート 5対2、品質 5対3）、「当社が下回る」（価格 3対5、機能 3対4）、「同じ」（納期・使いやすさ 4対4）を、見出しは15pt、中身は19pt前後の太字で並べてください。見出しは32〜36pt。下に「※ 5が最高。評価は2025年10月の社内調査による。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「レーダー」→「塗りつぶしレーダー」または「マーカー付きレーダー」を選び、出てきた表の1列目に観点、2列目以降に比べる相手ごとの評価を入れます。目盛りは、中心から真上に伸びる軸の数字（0〜5）を右クリックして「軸の書式設定」を開き、最小値を0、最大値を5、間隔を1にします。比べる線は「マーカー付きレーダー」にして、当社の線だけ太くアクセント色にし、競合は灰色の細い線にします。塗りつぶしレーダーは重なる面が後ろを隠すので、「塗りつぶし」の透明度を上げるか、線だけのレーダーにします。',
    'Googleスライドでは、レーダーチャートをスプレッドシートで作ります。観点を行、比べる相手を列にして表を作り、「挿入」→「グラフ」→グラフエディタの「設定」→「グラフの種類」で「レーダーチャート」を選びます。「カスタマイズ」→「系列」で、相手ごとの色と線の太さを整えます。できたら、スライドで「挿入」→「グラフ」→「スプレッドシートから」で貼り付けます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。多角形の頂点は「評価 ÷ 5」を中心からの距離にして、6等分した角度に置いた座標で書いてあります。評価を変えるときは、当社と競合の頂点の座標をAIに計算し直してもらってください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-compare="{{compare}}">
  <p class="kicker">見積もりサービスの比較（5段階評価）</p>
  <h1 class="title">当社は品質とサポートで競合A社を上回る</h1>

  <div class="body">
    <!-- 図は幅440×高さ340、中心(220,172)・半径116。評価1段 = 23.2。真上から時計回りに6観点 -->
    <svg class="chart" viewBox="0 0 440 340">
      <polygon class="ring" points="220,148.8 240.1,160.4 240.1,183.6 220,195.2 199.9,183.6 199.9,160.4" />
      <polygon class="ring" points="220,125.6 260.2,148.8 260.2,195.2 220,218.4 179.8,195.2 179.8,148.8" />
      <polygon class="ring" points="220,102.4 280.3,137.2 280.3,206.8 220,241.6 159.7,206.8 159.7,137.2" />
      <polygon class="ring" points="220,79.2 300.4,125.6 300.4,218.4 220,264.8 139.6,218.4 139.6,125.6" />
      <polygon class="ring outer" points="220,56 320.5,114 320.5,230 220,288 119.5,230 119.5,114" />
      <text class="lv" x="225" y="152.8">1</text>
      <text class="lv" x="225" y="129.6">2</text>
      <text class="lv" x="225" y="106.4">3</text>
      <text class="lv" x="225" y="83.2">4</text>
      <text class="lv" x="225" y="60">5</text>
      <line class="axis" x1="220" y1="172" x2="220" y2="56" />
      <line class="axis" x1="220" y1="172" x2="320.5" y2="114" />
      <line class="axis" x1="220" y1="172" x2="320.5" y2="230" />
      <line class="axis" x1="220" y1="172" x2="220" y2="288" />
      <line class="axis" x1="220" y1="172" x2="119.5" y2="230" />
      <line class="axis" x1="220" y1="172" x2="119.5" y2="114" />
      <polygon class="rival" points="220,56 280.3,137.2 300.4,218.4 220,218.4 139.6,218.4 139.6,125.6" />
      <polygon class="own" points="220,102.4 320.5,114 300.4,218.4 220,288 159.7,206.8 139.6,125.6" />
      <circle class="pt" cx="220" cy="102.4" r="5" />
      <circle class="pt" cx="320.5" cy="114" r="5" />
      <circle class="pt" cx="300.4" cy="218.4" r="5" />
      <circle class="pt" cx="220" cy="288" r="5" />
      <circle class="pt" cx="159.7" cy="206.8" r="5" />
      <circle class="pt" cx="139.6" cy="125.6" r="5" />
      <text class="name" x="220" y="38" text-anchor="middle">価格</text>
      <text class="name" x="334.3" y="104" text-anchor="start">品質</text>
      <text class="name" x="334.3" y="252" text-anchor="start">納期</text>
      <text class="name" x="220" y="318" text-anchor="middle">サポート</text>
      <text class="name" x="105.7" y="252" text-anchor="end">機能</text>
      <text class="name" x="105.7" y="104" text-anchor="end">使いやすさ</text>
    </svg>

    <div class="panel">
      <div class="legend">
        <span class="key"><i class="sw own"></i>当社</span>
        <span class="key"><i class="sw rival"></i>競合A社</span>
      </div>
      <div class="group up"><span class="head">当社が上回る</span><span class="item">サポート　5 対 2</span><span class="item">品質　5 対 3</span></div>
      <div class="group"><span class="head">当社が下回る</span><span class="item">価格　3 対 5</span><span class="item">機能　3 対 4</span></div>
      <div class="group"><span class="head">同じ</span><span class="item">納期・使いやすさ　4 対 4</span></div>
    </div>
  </div>

  <p class="note">※ 5が最高。評価は2025年10月の社内調査による。</p>
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
.body { flex: 1; display: flex; align-items: center; gap: 30px; margin: 10px 0 6px; min-height: 0; }
.chart { flex: 0 0 440px; display: block; width: 440px; height: auto; overflow: visible; }

.ring { fill: none; stroke: #e3e5ea; stroke-width: 1; }
.ring.outer { stroke: #c3c8d2; }
.axis { stroke: #e3e5ea; stroke-width: 1; }
.lv { font-size: 13px; fill: #8a8f9c; paint-order: stroke; stroke: #fff; stroke-width: 3px; stroke-linejoin: round; }
.name { font-size: 16px; font-weight: 700; fill: #1f2430; }
.rival { fill: #8a8f9c; fill-opacity: 0.08; stroke: #8a8f9c; stroke-width: 2.5; stroke-linejoin: round; stroke-dasharray: 7 5; }
.own { fill: var(--accent); fill-opacity: {{fill}}; stroke: var(--accent); stroke-width: 3.5; stroke-linejoin: round; }
.pt { fill: var(--accent); stroke: #fff; stroke-width: 2; }

/* 競合A社の線（data-compare="self" なら消す） */
.slide[data-compare="self"] .rival { display: none; }

.panel { flex: 1; display: flex; flex-direction: column; gap: 14px; padding-left: 28px; border-left: 1px solid #e3e5ea; }
.legend { display: flex; gap: 22px; font-size: 17px; font-weight: 800; }
.key { display: inline-flex; align-items: center; gap: 8px; }
.sw { display: inline-block; width: 26px; height: 0; }
.sw.own { border-top: 4px solid var(--accent); }
.sw.rival { border-top: 3px dashed #8a8f9c; }
.group { display: flex; flex-direction: column; gap: 3px; }
.head { font-size: 15px; font-weight: 700; color: #8a8f9c; }
.group.up .head { color: var(--accent); }
.item { font-size: 19px; font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'compare',
      type: 'select',
      label: '競合A社の線',
      value: 'both',
      options: [
        { value: 'both', label: '重ねて表示する' },
        { value: 'self', label: '表示しない（当社だけ）' },
      ],
    },
    { key: 'fill', label: '当社の面の濃さ', min: 5, max: 40, step: 5, value: 20, unit: '%' },
  ],
  cautions: [
    '観点は5〜8個に絞ります。3つ以下では三角形になって形の違いが分からず、10個以上では軸が細かくなって読めません。',
    '全部の観点を同じ物差し（見本は1〜5）にそろえます。売上は億円、満足度は点数のように単位がばらばらだと、多角形の形に意味がなくなります。',
    '観点の並び順で、多角形の形が変わります。似た観点を隣に置くと、形が整って読みやすくなります。同じ資料内で何度もレーダーを出すなら、並びを同じにします。',
    '比べる相手は2つまで。3本以上を重ねると、線が交わって誰がどこで勝っているか分かりません。多いときは自社と1社を重ねたものを、相手ごとに並べます。',
  ],
  similar: [
    { slug: 'option-table', diff: '選択肢比較表型は、案を表で比べる型です。評価の根拠や細かい理由まで文字で書き込みたいときは、表のほうが向きます。' },
    { slug: 'two-column', diff: '2カラム比較型は、2つの案を左右に並べて同じ項目で比べる型です。数字ではなく、項目ごとの違いを文章で見せたいときに使います。' },
    { slug: 'ranking-bar', diff: '横棒ランキング型は、1つの観点について大きい順に棒で比べる型です。正確な大小を読ませたいときはこちらです。' },
  ],
  faq: [
    {
      q: 'レーダーチャートは何項目まで入れられますか？',
      a: '5〜8項目が読みやすい範囲です。多いと軸の間隔が狭くなり、名前が重なります。項目が多いときは、大分類にまとめて6つ前後にするか、表で見せます。',
    },
    {
      q: 'PowerPointでレーダーチャートの目盛りを0から5に固定するには？',
      a: 'グラフの中の目盛りの数字を右クリックして「軸の書式設定」を開き、「軸のオプション」で最小値を0、最大値を5、目盛りの間隔を1にします。自動のままだと、値の範囲に合わせて目盛りが勝手に変わり、比較がずれます。',
    },
    {
      q: 'レーダーチャートは見づらいと言われるのはなぜですか？',
      a: '多角形の面積や形は、棒の長さほど正確に比べにくいためです。強み・弱みの「形」を見せるのには向きますが、数字の大小を厳密に比べるなら棒グラフ向きです。そのため、見本のように、右に上回る・下回るを要約して添えます。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
