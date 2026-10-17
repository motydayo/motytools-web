import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'exploded',
  no: 84,
  category: 'teian',
  name: '製品分解図型',
  en: 'Exploded view',
  aka: ['分解図', '部品図', '構造図', 'エクスプローデッドビュー', '製品の中身'],
  mode: 'static',
  title: '製品分解図とは？部品をばらして名前を添えるスライドの作り方【PowerPoint・Googleスライド】',
  description:
    '製品の部品を縦にばらして並べ、番号と名前と一言を線で結ぶ製品分解図型のスライドを見本で解説。間隔と順番のそろえ方、PowerPoint・Googleスライドでの描き方、AIへの指示文、HTMLとCSSまでまとめました。',
  oneLine: '製品の部品をばらして並べ、名前と役目を線で結ぶ。',
  what: [
    '組み立てた状態の製品を、部品ごとに上下へずらして、真ん中の点線にそろえて並べる型です。各部品には右へ線を引き、番号・名前・一言の説明を添えます。見本では卓上加湿器を、フタ・水タンク・振動板ユニット・本体ベースの4部品に分けています。いちばん大事な部品（振動板ユニット）だけをアクセント色で塗り、「ここが中心だ」と目が行くようにしています。',
    '製品の中身を文章で説明すると長くなりますが、ばらして並べれば「何がいくつ、どの順で重なっているか」が一目で伝わります。決まりごとは、部品を真ん中の線にそろえること、ずらす間隔を全部同じにすること、説明を左右どちらか片側にそろえることです。部品は4〜6個に絞ります。',
  ],
  when: [
    '新製品の仕組みや構造を、営業やお客さまに説明するとき',
    '部品の名前や役目を、研修や取扱説明の資料で教えるとき',
    '自社の製品の特長（どの部品に工夫があるか）を、1枚で見せたいとき',
    '修理や点検の手順の前に、部品の位置関係を共有するとき',
  ],
  avoid: [
    '部品が10個以上あり、1枚に収まらないとき（大きなまとまりごとに2〜3枚に分ける）',
    '部品どうしの上下関係ではなく、データや人の流れを見せたいとき（システム構成型にする）',
    '仕組みを層（階層）として見せたいとき（レイヤー構造型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「製品分解図型（exploded view）」で作ってください。いちばん上に小さく「卓上加湿器「うるおいミニ」」、その下に結論の見出し「4つの部品に分かれるので、水の通り道まで洗える」を1行で置きます。その下の左側に、製品を4つの部品に分けて縦に並べたイラストを置いてください。画面の左寄りに縦の点線を1本引き、4つの部品をその線の中心にそろえて、上から順に並べます。部品の上下の間隔は{{spread:t}}ptずつ空けてください。上から、1＝フタ（半円形のふた。上に小さな吹き出し口。灰色）、2＝水タンク（四角い容器。下側に水が入っている。薄い灰色）、3＝振動板ユニット（横長の板。中央に丸い振動板。アクセント色{{accent:t}}で塗る）、4＝本体ベース（台形の台。灰色）。各部品の右へ水平の細い線を引き、線の先に、アクセント色の丸に白い番号、太字の部品名（22pt程度）、灰色の一言の説明（16pt程度）を置きます。説明は次のとおりです。1＝フタ「霧の出口つき。外して洗える」、2＝水タンク「300mL入り。上から水を足せる」、3＝振動板ユニット「水を細かい霧に変える部分」、4＝本体ベース「USBでつなぐ。電源を入れる所」。一言の説明は「{{detail:t}}」にしてください。色は、アクセント色の1色と灰色だけにします。最下部に「※ 説明用のイメージ図。実際の製品とは異なる。」と注記（12pt以上）を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、部品を「挿入」→「図形」の組み合わせで描くか、製品の写真を部品ごとに切り抜いて並べます。写真を使う場合は、「図の形式」→「背景の削除」で背景を消すと切り抜けます。部品を縦に並べたら、全部を選んで「図形の書式」→「配置」→「左右中央揃え」を押して真ん中の線にそろえ、続けて「上下に整列」で間隔をそろえます。真ん中の点線は「挿入」→「図形」→「直線」を「図形の枠線」→「実線/点線」で点線にします。線で結ぶ説明は、「直線」と「テキストボックス」を部品ごとに置きます。',
    'Googleスライドでも、「挿入」→「図形」や「画像」で部品を置き、「配置」メニューの「配置」から中央揃え、「配置」メニューの「均等に分布」で間隔をそろえます。ばらす間隔を変えたいときは、部品を1つずつ動かすより、まず全部の部品を重ねた状態（組み立てた形）に戻してから、下の部品ほど大きく下へずらすと、間隔が自然にそろいます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。部品の絵はSVG（図形を文字で書く形式）で書いてあり、部品の上下の間隔は1か所の数字（--spread）で変えられます。実際の製品の写真に変えたいときは、SVGの図形を img に差し替えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-detail="{{detail}}">
  <p class="kicker">卓上加湿器「うるおいミニ」</p>
  <h1 class="title">4つの部品に分かれるので、水の通り道まで洗える</h1>

  <svg class="fig" viewBox="0 0 848 336">
    <!-- 真ん中の点線 -->
    <line x1="190" y1="0" x2="190" y2="336" class="axis" />

    <!-- 部品1: フタ。--k は上から数えた順番（0から）、--y は組み立てたときの高さ -->
    <g class="part" style="--k: 0; --y: 34px">
      <line x1="256" x2="372" class="lead" />
      <g transform="translate(190 0)">
        <rect x="-14" y="-26" width="28" height="14" rx="4" fill="#5a6070" />
        <path d="M-60 20Q-60 -14 0 -14Q60 -14 60 20Z" fill="#8a8f9c" />
      </g>
      <circle cx="394" r="15" class="dot" /><text x="394" y="6" class="num">1</text>
      <text x="422" y="-2" class="name">フタ</text>
      <text x="422" y="22" class="desc">霧の出口つき。外して洗える</text>
    </g>

    <!-- 部品2: 水タンク -->
    <g class="part" style="--k: 1; --y: 94px">
      <line x1="256" x2="372" class="lead" />
      <g transform="translate(190 0)">
        <rect x="-60" y="-40" width="120" height="80" rx="8" fill="#e3e5ea" stroke="#c3c8d2" stroke-width="2.5" />
        <rect x="-55" y="-4" width="110" height="39" rx="4" fill="#c3c8d2" opacity="0.7" />
      </g>
      <circle cx="394" r="15" class="dot" /><text x="394" y="6" class="num">2</text>
      <text x="422" y="-2" class="name">水タンク</text>
      <text x="422" y="22" class="desc">300mL入り。上から水を足せる</text>
    </g>

    <!-- 部品3: 振動板ユニット（いちばん大事な部品だけアクセント色） -->
    <g class="part" style="--k: 2; --y: 152px">
      <line x1="262" x2="372" class="lead" />
      <g transform="translate(190 0)">
        <rect x="-66" y="-18" width="132" height="36" rx="9" class="key" />
        <ellipse cx="0" cy="0" rx="26" ry="8" fill="#fff" opacity="0.85" />
        <circle cx="0" cy="0" r="3" class="key" />
      </g>
      <circle cx="394" r="15" class="dot" /><text x="394" y="6" class="num">3</text>
      <text x="422" y="-2" class="name">振動板ユニット</text>
      <text x="422" y="22" class="desc">水を細かい霧に変える部分</text>
    </g>

    <!-- 部品4: 本体ベース -->
    <g class="part" style="--k: 3; --y: 205px">
      <line x1="274" x2="372" class="lead" />
      <g transform="translate(190 0)">
        <path d="M-70 -32H70L80 32H-80Z" fill="#8a8f9c" stroke="#8a8f9c" stroke-width="6" stroke-linejoin="round" />
        <circle cx="44" cy="0" r="6" fill="#fff" opacity="0.85" />
        <rect x="-44" y="-4" width="40" height="8" rx="4" fill="#fff" opacity="0.45" />
      </g>
      <circle cx="394" r="15" class="dot" /><text x="394" y="6" class="num">4</text>
      <text x="422" y="-2" class="name">本体ベース</text>
      <text x="422" y="22" class="desc">USBでつなぐ。電源を入れる所</text>
    </g>
  </svg>

  <p class="note">※ 説明用のイメージ図。実際の製品とは異なる。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --spread: {{spread}}; /* 部品の上下の間隔（図の中の数字） */
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

.fig { display: block; width: 100%; height: auto; margin: 8px 0 6px; flex: 1; min-height: 0; }
.axis { stroke: #c3c8d2; stroke-width: 2; stroke-dasharray: 4 6; }

/* 下の部品ほど（順番×間隔）だけ下へずらす。間隔を0にすると組み立てた形になる */
.part { transform: translateY(calc(var(--y) + var(--k) * var(--spread) * 1px)); }
.lead { stroke: #c3c8d2; stroke-width: 1.5; }
.dot, .key { fill: var(--accent); }
.num { fill: #fff; font-size: 17px; font-weight: 800; text-anchor: middle; }
.name { fill: #1f2430; font-size: 22px; font-weight: 800; }
.desc { fill: #5a6070; font-size: 16px; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 一言の説明を隠す（data-detail="hide"） */
.slide[data-detail="hide"] .desc { display: none; }
.slide[data-detail="hide"] .name { transform: translateY(8px); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    { key: 'spread', label: '部品の上下の間隔（pt）', min: 0, max: 28, step: 4, value: 20, unit: '' },
    {
      key: 'detail',
      type: 'select',
      label: '一言の説明',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない（名前だけ）' },
      ],
    },
  ],
  cautions: [
    '部品を真ん中の線に正確にそろえます。少しでもずれていると「どの部品がどこに入るのか」が分からなくなり、分解図の意味が薄れます。PowerPointでは「左右中央揃え」を使います。',
    'ばらす間隔は、全部の部品で同じにします。間隔がばらばらだと、重なり順や大きさの違いまで違って見えます。順番と間隔で「組み立てる順番」が伝わるように、上から下へ順に並べます。',
    'アクセント色にする部品は1つだけです。全部の部品に色を付けると、どれが大事か分かりません。製品の特長がある部品（見本では振動板ユニット）だけを塗り、ほかは灰色にします。',
    '部品の数は4〜6個に絞ります。ねじやケーブルまで全部載せると、肝心の特長が埋もれます。ねじなどの細かい部品は、「そのほかの部品」としてまとめるか、別の資料に回します。',
  ],
  similar: [
    { slug: 'layer', diff: 'レイヤー構造型は、上下に積み重なる層の関係を見せる型です。製品分解図型は、1つの製品を物理的な部品に分けて、位置関係と名前を見せます。' },
    { slug: 'system-diagram', diff: 'システム構成型は、仕組みの部品とデータの流れを図にする型です。製品分解図型は、実物の部品の重なりを見せ、流れは扱いません。' },
    { slug: 'hub-spoke', diff: 'ハブ＆スポーク型は、中心と周りの要素のつながりを放射状に見せる型です。製品分解図型は、部品を1本の軸にそろえて上下に並べます。' },
  ],
  faq: [
    {
      q: '分解図と構造図は何が違いますか？',
      a: '分解図は、部品を少しずつずらしてばらして見せる絵のことです。構造図は、中身のつくりを説明する図全般を指し、分解図もその1つです。部品の位置関係と名前を見せたいときは分解図が向いています。',
    },
    {
      q: '部品の写真がないと、分解図は作れませんか？',
      a: '作れます。四角形・丸・台形などの図形を組み合わせて、部品の特徴だけを簡単に描けば十分です。写真は、部品が複雑で形で見分けてもらう必要があるときに使います。写真を使うときは、背景を消して、光の向きをそろえます。',
    },
    {
      q: 'AIに分解図を作らせるときのコツはありますか？',
      a: '部品の数・名前・上からの順番・一言の説明を、全部書いて渡すことです。絵は「簡単な図形で」と指定すると、形が崩れません。画像生成AIで分解図を作ると部品が増えたり減ったりしやすいので、HTMLやSVGで書いてもらう方法が確実です。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
