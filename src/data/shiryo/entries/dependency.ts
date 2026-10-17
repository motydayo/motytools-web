import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'dependency',
  no: 75,
  category: 'keikaku',
  name: '依存関係ネットワーク型',
  en: 'Dependency network',
  aka: ['依存関係図', '作業の前後関係図', 'アローダイアグラム', 'PERT図', 'クリティカルパス図'],
  mode: 'static',
  title: '依存関係図とは？作業の順序と最長の道すじを見せるスライドの作り方【クリティカルパス】',
  description:
    '作業どうしの「これが済まないとあれができない」を矢印でつなぐ「依存関係ネットワーク型」のスライドを見本で解説。クリティカルパス（最長の道すじ）の見つけ方、余裕日数、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '作業の前後関係を矢印でつなぎ、遅れに弱い最長の道すじを見つける。',
  what: [
    '作業を四角で置き、「これが済まないとあれが始められない」という前後関係を矢印でつなぐ型です。見本は、Webサイトの作り直しの7つの作業です。要件整理から公開まで、複数の道すじがあり、その中でいちばん日数の合計が長いのは「要件整理（3日）→デザイン（5日）→画面開発（6日）→結合テスト（3日）→公開（1日）」の合計18日です。この道すじを太いアクセント色の線にして、遅れると全体が遅れることを示しています。',
    'この型のよさは、ガントチャートでは見えにくい「どの作業の遅れが全体に響くか」が一目で分かることです。最も長い道すじを「クリティカルパス」と呼びます。ここにない作業には、遅れても全体に響かない「余裕」（見本では、文章作成が1日、画像撮影が9日）があります。作業は7〜10個までにして、矢印が交差しないように並べるのが決まりです。',
  ],
  when: [
    'プロジェクトの計画で、作業の順序と、遅れが許されない部分を関係者に共有するとき',
    '工期が遅れそうなとき、どの作業を急がせれば間に合うかを示したいとき',
    '複数の担当にまたがる作業で、「あの人の作業が終わらないと自分の作業が始まらない」関係を見せたいとき',
    'システム開発や工事などで、部品や工程の依存関係を整理するとき',
  ],
  avoid: [
    '作業の期間や重なりを、日付で見せたいとき（ガントチャート型にする）',
    '作業が一直線に並ぶだけで、分かれ道や合流がないとき（フロー型にする）',
    '作業が20個を超えるとき（スライドでは主な作業だけにし、細かい図は別資料にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「依存関係ネットワーク型（dependency network）」で作ってください。いちばん上に小さく「Webサイト作り直しの作業の順序」、その下に結論の見出し「公開までは最短18日。遅れに弱い道すじは1本」を置きます。その下に、左から右へ作業の四角を並べ、「これが済まないとあれができない」を矢印でつないでください。四角は角丸で白地・灰色の枠にし、上に作業名（17pt前後の太字）、下に日数（16pt・灰色）を書きます。左から5列に置き、1列目は「要件整理 3日」、2列目は上から「デザイン 5日」「文章作成 4日」「画像撮影 2日」、3列目は「画面開発 6日」（デザインと文章作成の間の高さ）、4列目は「結合テスト 3日」、5列目は「公開 1日」です。矢印は、要件整理からデザイン・文章作成・画像撮影の3つへ、デザインと文章作成から画面開発へ、画面開発と画像撮影から結合テストへ、結合テストから公開へ引き、緩やかな曲線にします。強調は「{{focus:t}}」にしてください（強調するときは、要件整理→デザイン→画面開発→結合テスト→公開の道すじ（合計18日）の矢印を太くしてアクセント色{{accent:t}}にし、その道すじの5つの四角の枠もアクセント色にしてごく薄い色を塗り、日数を太字のアクセント色にする。左下に、同じ色の短い太線と「太い線 ＝ 遅れると全体が遅れる、いちばん長い道すじ（合計18日）」の説明を置く。ほかの矢印と四角は灰色のまま）。余裕の日数は「{{slack:t}}」にしてください（表示するときは、「文章作成」の下に「余裕 1日」、「画像撮影」の下に「余裕 9日」を、灰色の太字で書く）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt。最下部に「※ 数字は各作業の日数。「余裕」は、遅れても全体に響かない日数。」と注記を入れてください。文言と数字は私が書いたものだけを使い、新しいものを足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」で作業の四角を置き、列ごとに「図形の書式」→「配置」→「左揃え」「上下に整列」で位置をそろえます。矢印は「挿入」→「図形」の「線」の仲間にある、なめらかに曲がる矢印を使い、四角の端にある点に線を近づけると吸い付くので、四角を動かしても矢印が付いてきます。いちばん長い道すじの矢印は、線を選んで「図形の書式」→「図形の枠線」→「太さ」で太くして、色を変えます。日数の合計は、Excelなどで1つずつ足して確かめると間違いません。',
    'Googleスライドでは、「挿入」→「図形」→「図形」で角丸四角形を置き、「挿入」→「線」→「曲線」または「矢印」で結びます。線の端を四角の点に近づけると吸い付きます。強調する道すじは、ツールバーの「枠線の太さ」と「枠線の色」で変えます。作業が多いときや日程が変わりやすいときは、プロジェクト管理の専用ツールで図を作り、画像として貼る方法もあります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。作業の四角の位置と、矢印の曲線は、1枚の図（SVG）の中の座標で決めています。作業の日数を変えたときは、いちばん長い道すじが入れ替わっていないか、合計を計算し直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-slack="{{slack}}">
  <p class="kicker">Webサイト作り直しの作業の順序</p>
  <h1 class="title">公開までは最短18日。遅れに弱い道すじは1本</h1>

  <svg class="dp-svg" viewBox="0 0 848 320" role="img" aria-label="要件整理から公開までの7つの作業と、その順序を矢印で結んだ図。要件整理、デザイン、画面開発、結合テスト、公開の道すじが合計18日で最も長い">
    <!-- 矢印（細い線 → 太い線の順に重ねる） -->
    <g class="dp-edges">
      <path d="M128 150 C152 150 147.5 150 171.5 150" />
      <path d="M128 150 C152 150 147.5 240 171.5 240" />
      <path d="M307.5 150 C331.5 150 327 106 351 106" />
      <path d="M307.5 240 C331.5 240 506.5 150 530.5 150" />
    </g>
    <g class="dp-edges dp-edges-crit">
      <path d="M128 150 C152 150 147.5 62 171.5 62" />
      <path d="M307.5 62 C331.5 62 327 106 351 106" />
      <path d="M487 106 C511 106 506.5 150 530.5 150" />
      <path d="M666.5 150 C690.5 150 686 150 710 150" />
    </g>
    <g class="dp-heads">
      <polygon points="179.5,150 169.5,144 169.5,156" />
      <polygon points="179.5,240 169.5,234 169.5,246" />
      <polygon points="359,106 349,100 349,112" />
      <polygon points="538.5,150 528.5,144 528.5,156" />
    </g>
    <g class="dp-heads dp-heads-crit">
      <polygon points="179.5,62 169.5,56 169.5,68" />
      <polygon points="359,106 349,100 349,112" />
      <polygon points="538.5,150 528.5,144 528.5,156" />
      <polygon points="718,150 708,144 708,156" />
    </g>

    <!-- 作業（名前と日数） -->
    <g class="dp-node dp-crit">
      <rect x="0" y="122" width="128" height="56" rx="10" />
      <text class="dp-name" x="64" y="146" text-anchor="middle">要件整理</text>
      <text class="dp-days" x="64" y="167" text-anchor="middle">3日</text>
    </g>
    <g class="dp-node dp-crit">
      <rect x="179.5" y="34" width="128" height="56" rx="10" />
      <text class="dp-name" x="243.5" y="58" text-anchor="middle">デザイン</text>
      <text class="dp-days" x="243.5" y="79" text-anchor="middle">5日</text>
    </g>
    <g class="dp-node">
      <rect x="179.5" y="122" width="128" height="56" rx="10" />
      <text class="dp-name" x="243.5" y="146" text-anchor="middle">文章作成</text>
      <text class="dp-days" x="243.5" y="167" text-anchor="middle">4日</text>
    </g>
    <g class="dp-node">
      <rect x="179.5" y="212" width="128" height="56" rx="10" />
      <text class="dp-name" x="243.5" y="236" text-anchor="middle">画像撮影</text>
      <text class="dp-days" x="243.5" y="257" text-anchor="middle">2日</text>
    </g>
    <g class="dp-node dp-crit">
      <rect x="359" y="78" width="128" height="56" rx="10" />
      <text class="dp-name" x="423" y="102" text-anchor="middle">画面開発</text>
      <text class="dp-days" x="423" y="123" text-anchor="middle">6日</text>
    </g>
    <g class="dp-node dp-crit">
      <rect x="538.5" y="122" width="128" height="56" rx="10" />
      <text class="dp-name" x="602.5" y="146" text-anchor="middle">結合テスト</text>
      <text class="dp-days" x="602.5" y="167" text-anchor="middle">3日</text>
    </g>
    <g class="dp-node dp-crit">
      <rect x="718" y="122" width="128" height="56" rx="10" />
      <text class="dp-name" x="782" y="146" text-anchor="middle">公開</text>
      <text class="dp-days" x="782" y="167" text-anchor="middle">1日</text>
    </g>

    <!-- 余裕の日数 -->
    <g class="dp-slack">
      <text x="243.5" y="198" text-anchor="middle">余裕 1日</text>
      <text x="243.5" y="290" text-anchor="middle">余裕 9日</text>
    </g>

    <!-- 凡例 -->
    <g class="dp-legend">
      <path d="M0 309 H34" />
      <text x="46" y="315">太い線 ＝ 遅れると全体が遅れる、いちばん長い道すじ（合計18日）</text>
    </g>
  </svg>

  <p class="note">※ 数字は各作業の日数。「余裕」は、遅れても全体に響かない日数。</p>
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
.dp-svg { display: block; flex: 1; min-height: 0; width: 100%; margin: 8px 0 4px; }
.dp-svg text { font-family: inherit; }
.dp-edges { fill: none; stroke: #c3c8d2; stroke-width: 2.5; stroke-linecap: round; }
.dp-heads { fill: #c3c8d2; }
.dp-node rect { fill: #fff; stroke: #c3c8d2; stroke-width: 2.5; }
.dp-name { font-size: 17px; font-weight: 800; fill: #1f2430; }
.dp-days { font-size: 16px; fill: #5a6070; font-variant-numeric: tabular-nums; }
.dp-slack text { font-size: 16px; font-weight: 700; fill: #8a8f9c; }
.dp-legend { display: none; }
.dp-legend path { fill: none; stroke: var(--accent); stroke-width: 5; stroke-linecap: round; }
.dp-legend text { font-size: 16px; fill: #5a6070; }
.dp-edges-crit { stroke: #8a8f9c; stroke-width: 2.5; }
.dp-heads-crit { fill: #8a8f9c; }

/* いちばん長い道すじを強調（data-focus="path"） */
.slide[data-focus="path"] .dp-edges-crit { stroke: var(--accent); stroke-width: 5; }
.slide[data-focus="path"] .dp-heads-crit { fill: var(--accent); }
.slide[data-focus="path"] .dp-crit rect { stroke: var(--accent); stroke-width: 3; fill: color-mix(in srgb, var(--accent) 8%, #fff); }
.slide[data-focus="path"] .dp-crit .dp-days { fill: var(--accent); font-weight: 800; }
.slide[data-focus="path"] .dp-legend { display: block; }

/* 余裕の日数を隠す（data-slack="hide"） */
.slide[data-slack="hide"] .dp-slack { display: none; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'path',
      options: [
        { value: 'path', label: '最長の道すじを強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'slack',
      type: 'select',
      label: '余裕の日数',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '最も長い道すじの合計は、必ず足して確かめます。見本は3＋5＋6＋3＋1＝18日です。ほかの道すじ（3＋4＋6＋3＋1＝17日、3＋2＋3＋1＝9日）と比べて、いちばん長いものを選び、太くします。日数を変えたら、道すじも入れ替わることがあります。',
    '矢印は「左から右へ」だけにして、交差を減らすこと。矢印が逆向きや交差だらけだと、前後関係が読めなくなります。四角を置く高さを調整して、交差を最小にします。',
    '矢印は「この作業が終わらないと始められない」関係だけに引きます。「なんとなく関係する」程度のものまで引くと、線が増えて、本当に大事な前後関係が埋もれます。',
    '強調は最も長い道すじだけに。作業ごとに色を変えたり、全部の線を太くしたりすると、遅れに弱い場所が分からなくなります。余裕のある作業は灰色のままにし、「余裕○日」と添えます。',
  ],
  similar: [
    { slug: 'gantt', diff: 'ガントチャート型は、作業の期間と重なりを日付の横棒で見せる型です。依存関係ネットワーク型は、日付ではなく、作業どうしの前後関係を見せます。両方を並べて使うことも多くあります。' },
    { slug: 'flow', diff: 'フロー型は、手順を矢印でつなぐ型です。依存関係ネットワーク型は、分かれ道と合流が複数あり、日数の長さまで見る点が違います。' },
    { slug: 'branch-merge', diff: '分岐・合流型は、流れが分かれてまた合わさる様子を見せる型です。依存関係ネットワーク型は、そこに日数を加えて、最も長い道すじを見つけます。' },
  ],
  faq: [
    {
      q: 'クリティカルパスとは何ですか？',
      a: 'プロジェクトの作業のうち、前後関係をたどって合計の日数がいちばん長い道すじのことです。この道すじ上の作業が1日遅れると、全体が1日遅れます。見本では、要件整理から公開までの合計18日の道すじがそれにあたります。',
    },
    {
      q: 'ガントチャートと依存関係図は、どちらを使えばよいですか？',
      a: '日付と進み具合を見せたいときはガントチャート、作業の前後関係と最も長い道すじを見せたいときは依存関係図です。計画を立てる段階で依存関係図で道すじを見つけ、日程にまとめたものをガントチャートで示すと、両方の長所を生かせます。',
    },
    {
      q: '余裕の日数は、どう計算しますか？',
      a: '最も長い道すじの日数（見本では18日）から、その作業を通る道すじの合計日数を引きます。たとえば「文章作成」を通る道すじは3＋4＋6＋3＋1＝17日なので、18−17＝1日の余裕です。「画像撮影」は9日の道すじなので、18−9＝9日の余裕があります。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
