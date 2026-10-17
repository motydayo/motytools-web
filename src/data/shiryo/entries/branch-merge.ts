import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'branch-merge',
  no: 58,
  category: 'keikaku',
  name: '分岐・合流型',
  en: 'Branch and merge diagram',
  aka: ['分岐合流図', '並行作業の図', 'アローダイアグラム', '分岐と合流', '並列フロー', 'クリティカルパス図'],
  mode: 'static',
  title:
    '分岐・合流の図とは？並行して進む作業の資料の作り方【PowerPoint・見本つき】',
  description:
    '流れが分かれて同時に進み、また合わさる「分岐・合流型」のスライドを見本で解説。箱の幅で期間を見せる工夫、いちばん長い道すじの強調、PowerPointとGoogleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '流れが分かれて同時に進み、また合わさる様子を見せる。',
  what: [
    '1本の流れが途中で複数に分かれ、同時に進んだあと、1つに合わさる型です。見本では新商品の発売準備を、企画決定のあとに「商品開発・販促・販売準備」の3本に分け、全部そろったら発売日に進む形で描いています。箱の幅は作業にかかる週数に比例させ、商品開発が5週間、販促が3週間、販売準備が2週間と、長さの違いがそのまま見えるようにしています。いちばん長い商品開発だけを色で示し、見出しで「この5週間が発売日を決める」と言い切っています。',
    '分岐・合流型のよさは、「同時に進められる作業」と「全体の日程を決める作業」を見分けられることです。ふつうのフロー型では、どの作業を待たなければいけないのかが分かりません。決まりごとは、分かれる本数を3本までにすること、合流する場所で「全部そろったら次へ」と条件を書くこと、いちばん長い道すじを1本だけ強調することです。',
  ],
  when: [
    '発売・開店・システム切り替えなど、複数の作業を同時に進めて期日に合わせるとき',
    '「どの作業が遅れると全体が遅れるのか」をチームに共有したいとき',
    '部署ごとの並行作業の合流の条件（全部そろったらレビューするなど）を説明するとき',
    '作業を並行にすれば何週間短くできるかを、提案で見せたいとき',
  ],
  avoid: [
    '作業が一列に順番に進むだけのとき（フロー型にする）',
    '条件によって行き先が1つに決まるとき（意思決定ツリー型にする。分岐・合流型は全部の道が進む）',
    '担当ごとの受け渡しを見せたいとき（スイムレーン型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「分岐・合流型（branch and merge diagram）」で作ってください。いちばん上に小さく「新商品の発売準備（企画決定から発売まで）」、その下に結論の見出し「商品開発の5週間が、発売日を決める」を置きます。その下に、左から右へ進む図を描いてください。左端に白地に灰色の枠の角丸の箱「企画決定（2/25）」を置き、右へ短い線を引いて、黒い太い縦線（分岐点）につなぎます。分岐点から3本の横線が出て、上から順に3つの作業の道すじにつながります。各道すじは、左上に16ptの太字の灰色で名前を書き、右向きの五角形の箱（薄い灰色塗り・文字は16pt）を2つずつ連ねます。箱の幅は作業の週数に比例させてください。1つ目の道すじ「商品開発」＝「試作」（3週間）・「品質検査」（2週間）、2つ目「販促」＝「チラシ制作」（2週間）・「告知準備」（1週間）、3つ目「販売準備」＝「倉庫手配」（1週間）・「在庫登録」（1週間）です。道すじの終わりから右の黒い縦線（合流点）まで、短い道すじは薄い灰色の点線でつなぎ、線の上に太字17ptで合計の週数（5週間・3週間・2週間）を縦にそろえて書きます。合流点から右へ矢印を引き、黒く塗った角丸の箱「発売日 4/1」（4/1は白い太字26pt）につなぎます。合流点の下に「全部そろったら次へ」、分岐点の下に「同時に進める」と16ptの灰色で書きます。いちばん長い道すじは「{{critical:t}}」にしてください（示すときは、商品開発の箱をアクセント色{{accent:t}}で塗って白文字にし、名前と「5週間」もアクセント色にする）。色はアクセント色の1色と灰色だけ。見出しは32〜36pt。最下部に「※ 箱の幅は作業にかかる週数に比例。販促は3週間、販売準備は2週間で終わる。」と注記を入れてください。内容と数字は私が書いたものだけを使い、新しい作業や数字を足さないでください。',
  howTo: [
    'PowerPointでは、作業の箱を「挿入」→「図形」→「ブロック矢印」の「五角形（ホームベース）」で作ります。図形の幅を「週数×一定の長さ」にそろえるのがこつです。たとえば1週間を2cmと決め、3週間なら6cm、2週間なら4cmに設定します（図形を右クリックして「図形の書式設定」から幅を指定）。分岐と合流の縦線は「挿入」→「図形」→「直線」を太くして引きます。箱どうしや線は「線矢印: カギ線」でつなぐと、動かしても外れません。',
    'Googleスライドでも、「挿入」→「図形」→「矢印」から五角形に近い矢印の箱を作るか、角丸四角形を並べます。幅を週数に比例させたいときは、図形を選んで右クリックから「書式設定オプション」を開き、サイズの欄に幅の数字を直接入力します。道すじの数が多いときは、ひと目で長さが比べられる幅の違いが小さくなるので、3本までに絞ります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。箱の幅は「週数×84」の座標で決めているので、週数が変わったときは箱の幅と、右の週数の文字を一緒に書き換えます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-critical="{{critical}}">
  <p class="kicker">新商品の発売準備（企画決定から発売まで）</p>
  <h1 class="title">商品開発の5週間が、発売日を決める</h1>
  <div class="bm-diagram">
    <svg viewBox="0 0 848 340" role="img" aria-label="新商品の発売準備の分岐・合流（企画決定から3つの作業が同時に進み、発売日に合流する）">
      <path class="bm-line" d="M112 170 H146" />
      <path class="bm-bar" d="M146 70 V270" />
      <path class="bm-bar" d="M700 70 V270" />
      <path class="bm-line" d="M700 170 H728" />
      <polygon class="bm-tip" points="738,170 728,164 728,176" />
      <g class="bm-track is-crit">
        <path class="bm-line" d="M146 70 H180" />
        <polygon class="bm-tip" points="190,70 180,64 180,76" />
        <text class="bm-name" x="190" y="36">商品開発</text>
        <polygon class="bm-box" points="190,44 426,44 438,70 426,96 190,96" />
        <text class="bm-text" x="311" y="76" text-anchor="middle">試作</text>
        <polygon class="bm-box" points="442,44 594,44 606,70 594,96 442,96" />
        <text class="bm-text" x="521" y="76" text-anchor="middle">品質検査</text>
        <path class="bm-line bm-slack" d="M610 70 H700" />
        <text class="bm-wk" x="618" y="76">5週間</text>
      </g>
      <g class="bm-track">
        <path class="bm-line" d="M146 170 H180" />
        <polygon class="bm-tip" points="190,170 180,164 180,176" />
        <text class="bm-name" x="190" y="136">販促</text>
        <polygon class="bm-box" points="190,144 342,144 354,170 342,196 190,196" />
        <text class="bm-text" x="269" y="176" text-anchor="middle">チラシ制作</text>
        <polygon class="bm-box" points="358,144 426,144 438,170 426,196 358,196" />
        <text class="bm-text" x="395" y="176" text-anchor="middle">告知準備</text>
        <path class="bm-line bm-slack" d="M442 170 H700" />
        <text class="bm-wk" x="618" y="176">3週間</text>
      </g>
      <g class="bm-track">
        <path class="bm-line" d="M146 270 H180" />
        <polygon class="bm-tip" points="190,270 180,264 180,276" />
        <text class="bm-name" x="190" y="236">販売準備</text>
        <polygon class="bm-box" points="190,244 258,244 270,270 258,296 190,296" />
        <text class="bm-text" x="227" y="276" text-anchor="middle">倉庫手配</text>
        <polygon class="bm-box" points="274,244 342,244 354,270 342,296 274,296" />
        <text class="bm-text" x="311" y="276" text-anchor="middle">在庫登録</text>
        <path class="bm-line bm-slack" d="M358 270 H700" />
        <text class="bm-wk" x="618" y="276">2週間</text>
      </g>
      <rect class="bm-node" x="0" y="138" width="112" height="64" rx="12" />
      <text class="bm-node-t" x="56" y="167" text-anchor="middle">企画決定</text>
      <text class="bm-node-d" x="56" y="190" text-anchor="middle">2/25</text>
      <rect class="bm-end" x="738" y="138" width="110" height="64" rx="12" />
      <text class="bm-end-t" x="793" y="167" text-anchor="middle">発売日</text>
      <text class="bm-end-d" x="793" y="192" text-anchor="middle">4/1</text>
      <text class="bm-cap" x="170" y="312" text-anchor="end">同時に進める</text>
      <text class="bm-cap" x="700" y="312" text-anchor="middle">全部そろったら次へ</text>
    </svg>
  </div>
  <p class="note">※ 箱の幅は作業にかかる週数に比例。販促は3週間、販売準備は2週間で終わる。</p>
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
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

.bm-diagram { position: relative; flex: 1; margin: 12px 0 8px; min-height: 0; }
.bm-diagram svg { position: absolute; inset: 0; width: 100%; height: 100%; }
/* 図の中の寸法は、viewBox（幅848）の数字そのまま。箱の幅は週数 × 84 */
.bm-line { fill: none; stroke: #8a8f9c; stroke-width: 2.5; }
.bm-slack { stroke: #c3c8d2; stroke-dasharray: 2 6; stroke-linecap: round; }
.bm-bar { fill: none; stroke: #1f2430; stroke-width: 5; stroke-linecap: round; }
.bm-tip { fill: #8a8f9c; }
.bm-name { font-size: 16px; font-weight: 800; fill: #5a6070; }
.bm-box { fill: #f3f4f7; stroke: #c3c8d2; stroke-width: 1.5; }
.bm-text { font-size: 16px; font-weight: 700; fill: #1f2430; }
.bm-wk { font-size: 17px; font-weight: 800; fill: #5a6070; paint-order: stroke; stroke: #fff; stroke-width: 7px; stroke-linejoin: round; }
.bm-node { fill: #fff; stroke: #8a8f9c; stroke-width: 2.5; }
.bm-node-t { font-size: 18px; font-weight: 800; fill: #1f2430; }
.bm-node-d { font-size: 16px; fill: #5a6070; }
.bm-end { fill: #1f2430; }
.bm-end-t { font-size: 16px; fill: #fff; }
.bm-end-d { font-size: 26px; font-weight: 800; fill: #fff; }
.bm-cap { font-size: 16px; fill: #8a8f9c; }
/* いちばん長い道すじ（data-critical="on"） */
.slide[data-critical="on"] .bm-track.is-crit .bm-box { fill: var(--accent); stroke: var(--accent); }
.slide[data-critical="on"] .bm-track.is-crit .bm-text { fill: #fff; }
.slide[data-critical="on"] .bm-track.is-crit .bm-wk { fill: var(--accent); }
.slide[data-critical="on"] .bm-track.is-crit .bm-name { fill: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'critical',
      type: 'select',
      label: 'いちばん長い道すじ',
      value: 'on',
      options: [
        { value: 'on', label: '色で示す' },
        { value: 'off', label: '示さない' },
      ],
    },
  ],
  cautions: [
    '箱の幅を、期間と関係なくそろえないようにします。幅が同じだと、5週間の作業も1週間の作業も同じ重さに見えます。この型は「長さの違い」が主役なので、幅は期間に比例させます。',
    '分かれる本数を増やしすぎないようにします。4本以上になると、図が縦に伸びて文字が小さくなります。小さな作業は大きな作業にまとめて、3本までに絞ります。',
    '合流する場所の条件を書きます。「どれか1つ終われば進む」のか「全部そろったら進む」のかで意味が変わります。見本のように、合流点の下に条件を1行書いておきます。',
    '全部の道すじを強調しないようにします。色を付けるのは、全体の日程を決めるいちばん長い1本だけです。短い道すじには余裕があることを、点線で見せます。',
  ],
  similar: [
    { slug: 'flow', diff: 'フロー型は、手順を一方向に矢印でつなぐ型です。分岐・合流型は、途中で分かれて同時に進み、また合わさる点が違います。' },
    { slug: 'decision-tree', diff: '意思決定ツリー型は、条件に応じて行き先が1つに決まる型です。分岐・合流型は、分かれた道すじが全部進み、あとで合流します。' },
    { slug: 'gantt', diff: 'ガントチャート型は、作業の期間と重なりを日付の精度で見せる型です。分岐・合流型は、並行する作業の長さとつながり方を見せます。' },
  ],
  faq: [
    {
      q: '分岐・合流の図で「クリティカルパス」とは何ですか？',
      a: '全体の日程を決める、いちばん長い道すじのことです。この道すじの作業が1日遅れると、全体が1日遅れます。見本では商品開発の5週間がクリティカルパスで、販促と販売準備には余裕があります。',
    },
    {
      q: '分岐・合流の図はPowerPointでどう作りますか？',
      a: '作業の箱を「五角形（ホームベース）」で作り、幅を週数に比例させて並べます。分岐と合流は太い縦線で表し、線は「線矢印: カギ線」でつなぎます。',
    },
    {
      q: '分岐・合流型とフロー型は何が違いますか？',
      a: 'フロー型は手順が一列に進みます。分岐・合流型は、途中で流れが分かれて同時に進み、あとで合流します。同時にできる作業を見せて、日程の短縮を提案したいときに向いています。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
