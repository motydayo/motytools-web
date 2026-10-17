import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'org-chart',
  no: 61,
  category: 'keikaku',
  name: '組織図型',
  en: 'Organization chart',
  aka: ['組織図', 'オーガニゼーションチャート', '組織体制図', '体制図', '部署の図', '会社組織図'],
  mode: 'static',
  title:
    '組織図とは？PowerPointで見やすい組織図を作る方法【見本つき】',
  description:
    '部署や人の上下の関係を木の形で見せる「組織図型」のスライドを見本で解説。部の積み方、人数の添え方、検算のしかた、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '部署や人の上下の関係を、木の形で見せる。',
  what: [
    '一番上に社長、その下に本部、さらにその下に部を置き、上下を線でつないで「誰の下に誰がいるか」を見せる型です。見本では架空の食品会社を、3つの本部と8つの部で描いています。本部の箱はアクセント色で塗って、部の箱は薄い灰色にして段の違いを見せ、横には広げずに部を縦に積んで、スライドの幅に収めています。人数は部ごとに右端にそろえ、本部と全社の人数は部の合計にしています。',
    '組織図のよさは、会社の「形」が一目で分かることです。聞き手は、自分の部署がどこにあり、誰の下で、ほかの部署とどう並んでいるのかを数秒で理解できます。決まりごとは、上下の段を3段までにすること、同じ段の箱は同じ大きさにすること、人数を添えるなら合計が合っていることです。数字が合わない組織図は、資料全体の信用を落とします。',
  ],
  when: [
    '会社説明や採用の資料で、会社の規模と構成を見せたいとき',
    '組織変更や新部署の設置を、関係者に周知するとき',
    '提案書や入札書類で、プロジェクトの体制を示すとき',
    '新入社員や取引先に、部署ごとの役割の位置を説明するとき',
  ],
  avoid: [
    '部署をまたぐ業務の流れを見せたいとき（スイムレーン型にする）',
    '作業ごとの責任の分担を見せたいとき（RACI責任分担型にする）',
    '社外の関係者との関係を見せたいとき（ステークホルダー型やハブ＆スポーク型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「組織図型（organization chart）」で作ってください。いちばん上に小さく「株式会社ミナト食品の組織（2026年10月1日現在）」、その下に結論の見出し「3本部8部、132名で会社を動かしている」を置きます。その下に、最上段の中央に黒い角丸の箱「代表取締役社長」（白い太字18pt）と、その下に小さく「全社 132名」を置きます。社長の下に横線（バス）を引き、3本の短い縦線で3つの本部の箱につなぎます。本部の箱は同じ幅で横に並べ、「{{fill:t}}」にしてください（色で塗るときは、アクセント色{{accent:t}}で塗って白い太字20ptにし、枠だけにするときは白地にアクセント色の枠で文字は黒にする）。各本部の箱の右端に、人数を同じ太さで書きます。本部の下には、部の箱を縦に積みます（各本部の箱の左下から縦線を下ろし、部ごとに短い横線で枝分かれさせる）。部の箱は薄い灰色塗りの角丸で、部の名前は17ptの太字、右端に人数を書きます。中身は、営業本部（68名）＝東日本営業部28名・西日本営業部24名・法人営業部16名、商品開発本部（36名）＝開発部22名・品質保証部14名、管理本部（28名）＝経理部9名・総務人事部12名・情報システム部7名です。人数の表示は「{{count:t}}」にしてください。色はアクセント色の1色と灰色と黒だけ。見出しは32〜36pt。最下部に「※ 人数は正社員のみ（社長を除く）。本部の人数は配下の部の合計。」と注記を入れてください。人数は私が書いたものだけを使い、新しい部署や数字を足さないでください。',
  howTo: [
    'PowerPointでは、SmartArtが手早く作れます。「挿入」→「SmartArt」→「階層構造」から「組織図」を選ぶと、箱と線ができあがり、箱の文字を打つだけで組織図になります。箱を足すときは、足したい箱を選んで「SmartArtのデザイン」→「図形の追加」を使います。見本のように部を縦に積みたいときは、本部の箱を選んで「SmartArtのデザイン」の「レイアウト」から、下の箱が縦に並ぶ（ぶら下がる）形を選びます。人数は箱の文字に「営業部 28名」のように入れます。',
    'Googleスライドには、「挿入」→「図表」→「階層」があり、組織図に近い形が作れます。箱の数が多く細かく直したいときは、「挿入」→「図形」→「図形」と「挿入」→「線」→「カギ線コネクタ」で自分で組みます。箱を同じ大きさにそろえるときは、複数の図形を選んで上の「配置」メニューのそろえる機能を使います。社員が数十人を超える会社の全体図は、1枚に詰めず、全体図と部署ごとの詳細図に分けます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。図は1つのSVG（図形を描く仕組み）で、箱と線を座標で置いています。部が増えるときは、その本部の列に箱を1つ足し、左の縦線の長さを伸ばします。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-count="{{count}}" data-fill="{{fill}}">
  <p class="kicker">株式会社ミナト食品の組織（2026年10月1日現在）</p>
  <h1 class="title">3本部8部、132名で会社を動かしている</h1>
  <div class="oc-diagram">
    <svg viewBox="0 0 848 340" role="img" aria-label="株式会社ミナト食品の組織図（社長の下に3つの本部と8つの部）">
      <g class="oc-lines">
        <path d="M424 60 V80 M136 80 H712" />
        <path d="M136 80 V100" />
        <path d="M18 148 V280 M18 188 H32 M18 234 H32 M18 280 H32" />
        <path d="M424 80 V100" />
        <path d="M306 148 V234 M306 188 H320 M306 234 H320" />
        <path d="M712 80 V100" />
        <path d="M594 148 V280 M594 188 H608 M594 234 H608 M594 280 H608" />
      </g>
      <rect class="oc-root" x="324" y="0" width="200" height="60" rx="12" />
      <text class="oc-root-t" x="424" y="26" text-anchor="middle">代表取締役社長</text>
      <text class="oc-root-n oc-n" x="424" y="48" text-anchor="middle">全社 132名</text>
      <g class="oc-head">
        <rect x="0" y="100" width="272" height="48" rx="10" />
        <text class="oc-head-t" x="18" y="131">営業本部</text>
        <text class="oc-head-n oc-n" x="254" y="131" text-anchor="end">68名</text>
      </g>
      <g class="oc-leaf">
        <rect x="32" y="168" width="240" height="40" rx="8" />
        <text class="oc-leaf-t" x="46" y="194">東日本営業部</text>
        <text class="oc-leaf-n oc-n" x="258" y="194" text-anchor="end">28名</text>
      </g>
      <g class="oc-leaf">
        <rect x="32" y="214" width="240" height="40" rx="8" />
        <text class="oc-leaf-t" x="46" y="240">西日本営業部</text>
        <text class="oc-leaf-n oc-n" x="258" y="240" text-anchor="end">24名</text>
      </g>
      <g class="oc-leaf">
        <rect x="32" y="260" width="240" height="40" rx="8" />
        <text class="oc-leaf-t" x="46" y="286">法人営業部</text>
        <text class="oc-leaf-n oc-n" x="258" y="286" text-anchor="end">16名</text>
      </g>
      <g class="oc-head">
        <rect x="288" y="100" width="272" height="48" rx="10" />
        <text class="oc-head-t" x="306" y="131">商品開発本部</text>
        <text class="oc-head-n oc-n" x="542" y="131" text-anchor="end">36名</text>
      </g>
      <g class="oc-leaf">
        <rect x="320" y="168" width="240" height="40" rx="8" />
        <text class="oc-leaf-t" x="334" y="194">開発部</text>
        <text class="oc-leaf-n oc-n" x="546" y="194" text-anchor="end">22名</text>
      </g>
      <g class="oc-leaf">
        <rect x="320" y="214" width="240" height="40" rx="8" />
        <text class="oc-leaf-t" x="334" y="240">品質保証部</text>
        <text class="oc-leaf-n oc-n" x="546" y="240" text-anchor="end">14名</text>
      </g>
      <g class="oc-head">
        <rect x="576" y="100" width="272" height="48" rx="10" />
        <text class="oc-head-t" x="594" y="131">管理本部</text>
        <text class="oc-head-n oc-n" x="830" y="131" text-anchor="end">28名</text>
      </g>
      <g class="oc-leaf">
        <rect x="608" y="168" width="240" height="40" rx="8" />
        <text class="oc-leaf-t" x="622" y="194">経理部</text>
        <text class="oc-leaf-n oc-n" x="834" y="194" text-anchor="end">9名</text>
      </g>
      <g class="oc-leaf">
        <rect x="608" y="214" width="240" height="40" rx="8" />
        <text class="oc-leaf-t" x="622" y="240">総務人事部</text>
        <text class="oc-leaf-n oc-n" x="834" y="240" text-anchor="end">12名</text>
      </g>
      <g class="oc-leaf">
        <rect x="608" y="260" width="240" height="40" rx="8" />
        <text class="oc-leaf-t" x="622" y="286">情報システム部</text>
        <text class="oc-leaf-n oc-n" x="834" y="286" text-anchor="end">7名</text>
      </g>
    </svg>
  </div>
  <p class="note">※ 人数は正社員のみ（社長を除く）。本部の人数は配下の部の合計。</p>
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

.oc-diagram { position: relative; flex: 1; margin: 12px 0 8px; min-height: 0; }
.oc-diagram svg { position: absolute; inset: 0; width: 100%; height: 100%; }
/* 図の中の寸法は、viewBox（幅848）の数字そのまま */
.oc-lines path { fill: none; stroke: #c3c8d2; stroke-width: 2.5; }
.oc-root { fill: #1f2430; }
.oc-root-t { font-size: 18px; font-weight: 800; fill: #fff; }
.oc-root-n { font-size: 16px; font-weight: 700; fill: #c3c8d2; }
.oc-head rect { fill: var(--accent); stroke: var(--accent); stroke-width: 2.5; }
.oc-head-t { font-size: 20px; font-weight: 800; fill: #fff; }
.oc-head-n { font-size: 20px; font-weight: 800; fill: #fff; }
.oc-leaf rect { fill: #f3f4f7; }
.oc-leaf-t { font-size: 17px; font-weight: 700; fill: #1f2430; }
.oc-leaf-n { font-size: 17px; font-weight: 800; fill: #5a6070; }
.oc-n { font-variant-numeric: tabular-nums; }
.slide[data-fill="line"] .oc-head rect { fill: #fff; }
.slide[data-fill="line"] .oc-head-t { fill: #1f2430; }
.slide[data-fill="line"] .oc-head-n { fill: var(--accent); }
.slide[data-count="hide"] .oc-leaf-n,
.slide[data-count="hide"] .oc-head-n,
.slide[data-count="hide"] .oc-root-n { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'count',
      type: 'select',
      label: '人数',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
    {
      key: 'fill',
      type: 'select',
      label: '本部の箱',
      value: 'solid',
      options: [
        { value: 'solid', label: '色で塗る' },
        { value: 'line', label: '枠だけにする' },
      ],
    },
  ],
  cautions: [
    '段の数を増やしすぎないようにします。社長・本部・部の3段が読める限度です。課やグループまで1枚に入れると、箱が細かくなって読めません。必要なら部ごとの詳細図を別のスライドにします。',
    '人数を載せるなら、合計が合っているか必ず検算します。見本なら、68名＋36名＋28名＝132名です。部の人数の合計と本部の人数がずれた組織図は、すぐに指摘されます。',
    '同じ段の箱は、大きさと色をそろえます。部署の重要さで大きさを変えると、組織の序列が変わったように見えてしまいます。',
    '実際の組織図と違う並べ方をしないようにします。たとえば営業本部が組織図上は管理本部の右にあるのに、スライドでは左に置くと、混乱のもとです。公式の組織図と順番をそろえます。',
  ],
  similar: [
    { slug: 'raci', diff: 'RACI責任分担型は、作業ごとに誰が実行・承認・相談・報告かを表にする型です。組織図型は、組織の上下の関係を見せます。' },
    { slug: 'logic-tree', diff: 'ロジックツリー型は、課題や原因を枝分かれで分解する型です。組織図型は、人や部署の上下関係を見せる点が違います。' },
    { slug: 'stakeholder', diff: 'ステークホルダー型は、関係者を影響の大きさと関心の高さで位置づける型です。組織図型は、組織内の上下の関係を見せます。' },
  ],
  faq: [
    {
      q: 'PowerPointで組織図を簡単に作る方法はありますか？',
      a: 'SmartArtが最も手早い方法です。「挿入」→「SmartArt」→「階層構造」から「組織図」を選んで、箱に文字を打つだけでできます。箱の追加は「SmartArtのデザイン」→「図形の追加」で行います。',
    },
    {
      q: '組織図は何段まで書けますか？',
      a: 'スライド1枚で読めるのは3段までです。見本のように、社長・本部・部で3段にすると、文字を大きくできます。課やグループまで見せるときは、部ごとの詳細図を別のスライドに分けます。',
    },
    {
      q: '組織図に人数を載せてもよいですか？',
      a: '載せても問題ありません。会社の規模が伝わるので、採用や会社説明の資料では効果があります。ただし、合計が合っていることと、いつ時点の数字かを注記に書くことが必要です。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
