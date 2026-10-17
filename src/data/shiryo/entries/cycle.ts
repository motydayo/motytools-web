import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'cycle',
  no: 57,
  category: 'keikaku',
  name: '循環サイクル型',
  en: 'Cycle diagram',
  aka: ['サイクル図', '循環図', 'PDCAサイクル図', '繰り返しの図', '円環図', 'ループ図'],
  mode: 'static',
  title:
    '循環サイクル図とは？PDCAなど繰り返しの流れの資料の作り方【見本つき】',
  description:
    '繰り返す流れを輪のように矢印でつなぐ「循環サイクル型」のスライドを見本で解説。4つの手順の置き方、1周の長さの書き方、始まりの印、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '繰り返す流れを、輪のように矢印でつなぐ。',
  what: [
    '手順を輪の形に並べ、矢印で時計回りにつないで「最後は最初に戻る」ことを見せる型です。見本では、お客さまの声を改善につなげる4つの手順（集める・分ける・直す・確かめる）を、上・右・下・左に置いています。輪の真ん中には、1周にかかる時間（1か月）を大きな数字で置き、「毎月1周まわす」というこの流れの決まりごとを伝えています。1つ目の手順には「START」の札を付けて、どこから読み始めるかも示しています。',
    'この型のよさは、「一度やって終わり」ではなく「続けて回す」仕事の性質を、形で伝えられることです。PDCAサイクル（計画・実行・確認・改善）が代表例です。決まりごとは、手順は3〜6個まで、矢印の向きは時計回りに統一すること、そして1周にかかる期間を中央に書くことです。回す頻度が書いていない輪は、お飾りになりがちです。',
  ],
  when: [
    'PDCAなど、継続的な改善の仕組みを社内に説明するとき',
    '月次・週次の定例の流れ（集計・報告・見直し）を共有するとき',
    '採用やお客さま対応など、繰り返し行う業務の全体像を見せるとき',
    '運用ルールを決めて、「毎月ここまで回す」という約束をそろえたいとき',
  ],
  avoid: [
    '一度きりで終わる手順（フロー型にする）',
    '手順が7つ以上になるとき（輪が大きくなりすぎるので、大きな段階にまとめる）',
    '原因と結果が互いに影響し合う関係を見せたいとき（因果ループ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「循環サイクル型（cycle diagram）」で作ってください。いちばん上に小さく「お客さまの声を改善につなげる4つの手順」、その下に結論の見出し「声を集めて直す流れを、毎月1周まわす」を置きます。その下に、4つの手順の箱を、横長の楕円（輪）の上の上・右・下・左の位置に置いてください。箱は白地に薄い灰色の枠の角丸で、左側にアクセント色{{accent:t}}の丸（白い番号）、右側に題（太字21pt）と補足2行（16pt）を入れます。手順は時計回りに、上＝1「集める」（アンケートと問い合わせを回収）、右＝2「分ける」（内容を5種類に仕分けする）、下＝3「直す」（多い順に2件を改善する）、左＝4「確かめる」（翌月の声で効果を見る）です。箱と箱の間は、楕円に沿った曲線の矢印（灰色・太さ{{line:t}}pt・先に三角の矢じり）で時計回りにつなぎ、4つ目から1つ目に戻します。輪の真ん中には、上から順に、16ptの灰色で「1周の長さ」、アクセント色の太字48ptで「1か月」、16ptの灰色で「毎月の第1週に始める」と書いてください。始まりの印は「{{start:t}}」にしてください（表示するときは、1つ目の箱の上辺にまたがるように、アクセント色の小さな札に白文字で「START」と書く）。色はアクセント色の1色と灰色だけ。見出しは32〜36pt。最下部に「※ 矢印の向きに進み、4つ目の次は1つ目に戻る。」と注記を入れてください。内容は私が書いたものだけを使い、新しい手順や数字を足さないでください。',
  howTo: [
    'PowerPointでは、SmartArtが手早く作れます。「挿入」→「SmartArt」→「循環」から「基本の循環」を選び、文字を入れると、矢印でつながった輪ができます。見本のように箱の中に番号と補足を入れたいときは、図形で作ります。「挿入」→「図形」から角丸四角形を上・右・下・左に置き、基本図形の「円弧」を使って輪に沿った線を引き、線の端に矢じりを付けます。円弧は、黄色の丸いハンドルを動かすと長さが変わります。',
    'Googleスライドには、「挿入」→「図表」→「サイクル」があり、手順の数を選ぶと輪の形が出ます。細かく整えたいときは、「挿入」→「図形」→「図形」で箱を置き、「挿入」→「線」→「曲線」で矢印を引きます。手順が5〜6個になるときは、箱を小さくしないと矢印の通り道がなくなるので、補足の文字を削ってから箱を並べます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。図は1つのSVG（図形を描く仕組み）で、矢印は楕円の弧として描いています。手順の位置は、楕円の上の角度で決まっているので、手順を足すときは、角度を等分に割り振り直します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-start="{{start}}">
  <p class="kicker">お客さまの声を改善につなげる4つの手順</p>
  <h1 class="title">声を集めて直す流れを、毎月1周まわす</h1>
  <div class="cy-diagram">
    <svg viewBox="0 0 848 340" role="img" aria-label="お客さまの声を改善につなげる4つの手順（集める・分ける・直す・確かめるを毎月1周まわす）">
      <path class="cy-arc" d="M558 71.8 A270 120 0 0 1 660.1 117.8" />
      <polygon class="cy-tip" points="667.2,123.9 654.7,121.2 663.5,111.6" />
      <path class="cy-arc" d="M669.2 226.2 A270 120 0 0 1 568.1 277.5" />
      <polygon class="cy-tip" points="559,279.9 568,270.9 571.3,283.5" />
      <path class="cy-arc" d="M290 280.2 A270 120 0 0 1 187.9 234.2" />
      <polygon class="cy-tip" points="180.8,228.1 193.3,230.8 184.5,240.4" />
      <path class="cy-arc" d="M178.8 125.8 A270 120 0 0 1 279.9 74.5" />
      <polygon class="cy-tip" points="289,72.1 280,81.1 276.7,68.5" />
      <g class="cy-step">
        <rect class="cy-box" x="299" y="14" width="250" height="84" rx="14" />
        <circle class="cy-no" cx="329" cy="56" r="16" />
        <text class="cy-no-t" x="329" y="62" text-anchor="middle">1</text>
        <text class="cy-t" x="357" y="44">集める</text>
        <text class="cy-s" x="357" y="64">アンケートと</text>
        <text class="cy-s" x="357" y="84">問い合わせを回収</text>
      </g>
      <g class="cy-step">
        <rect class="cy-box" x="569" y="134" width="250" height="84" rx="14" />
        <circle class="cy-no" cx="599" cy="176" r="16" />
        <text class="cy-no-t" x="599" y="182" text-anchor="middle">2</text>
        <text class="cy-t" x="627" y="164">分ける</text>
        <text class="cy-s" x="627" y="184">内容を5種類に</text>
        <text class="cy-s" x="627" y="204">仕分けする</text>
      </g>
      <g class="cy-step">
        <rect class="cy-box" x="299" y="254" width="250" height="84" rx="14" />
        <circle class="cy-no" cx="329" cy="296" r="16" />
        <text class="cy-no-t" x="329" y="302" text-anchor="middle">3</text>
        <text class="cy-t" x="357" y="284">直す</text>
        <text class="cy-s" x="357" y="304">多い順に2件を</text>
        <text class="cy-s" x="357" y="324">改善する</text>
      </g>
      <g class="cy-step">
        <rect class="cy-box" x="29" y="134" width="250" height="84" rx="14" />
        <circle class="cy-no" cx="59" cy="176" r="16" />
        <text class="cy-no-t" x="59" y="182" text-anchor="middle">4</text>
        <text class="cy-t" x="87" y="164">確かめる</text>
        <text class="cy-s" x="87" y="184">翌月の声で</text>
        <text class="cy-s" x="87" y="204">効果を見る</text>
      </g>
      <g class="cy-start"><rect x="313" y="0" width="70" height="24" rx="12" /><text x="348" y="17" text-anchor="middle">START</text></g>
      <text class="cy-c1" x="424" y="154" text-anchor="middle">1周の長さ</text>
      <text class="cy-c2" x="424" y="202" text-anchor="middle">1か月</text>
      <text class="cy-c3" x="424" y="232" text-anchor="middle">毎月の第1週に始める</text>
    </svg>
  </div>
  <p class="note">※ 矢印の向きに進み、4つ目の次は1つ目に戻る。</p>
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

.cy-diagram { position: relative; flex: 1; margin: 12px 0 6px; min-height: 0; }
.cy-diagram svg { position: absolute; inset: 0; width: 100%; height: 100%; }
/* 図の中の寸法は、viewBox（幅848）の数字そのまま */
.cy-arc { fill: none; stroke: #8a8f9c; stroke-width: {{line}}; stroke-linecap: butt; }
.cy-tip { fill: #8a8f9c; }
.cy-box { fill: #fff; stroke: #c3c8d2; stroke-width: 2; }
.cy-no { fill: var(--accent); }
.cy-no-t { font-size: 18px; font-weight: 800; fill: #fff; }
.cy-t { font-size: 21px; font-weight: 800; fill: #1f2430; }
.cy-s { font-size: 16px; fill: #5a6070; }
.cy-start rect { fill: var(--accent); }
.cy-start text { font-size: 14px; font-weight: 800; fill: #fff; letter-spacing: 0.06em; }
.slide[data-start="hide"] .cy-start { display: none; }
.cy-c1 { font-size: 16px; fill: #5a6070; }
.cy-c2 { font-size: 48px; font-weight: 800; fill: var(--accent); }
.cy-c3 { font-size: 16px; fill: #5a6070; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'start',
      type: 'select',
      label: '始まりの印',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
    { key: 'line', label: '矢印の太さ（pt）', min: 2, max: 6, step: 1, value: 3, unit: '' },
  ],
  cautions: [
    '矢印の向きは、時計回りに統一します。反時計回りにすると、読み手は時間の流れが逆になったように感じます。見本のように、上から始めて右へ進みます。',
    '手順を6つ以上にしないようにします。輪が大きくなって箱が小さくなり、文字が読めなくなります。「計画・実行・確認・改善」のように、4つ前後にまとめます。',
    '輪の中に「1周にかかる期間」を書きます。回す頻度が書かれていない輪は「いつか回す」で終わります。毎月か毎週かを中央に大きく書くと、運用の約束になります。',
    'どこから始めるかを示します。輪には始点がないので、どの手順から読むのかが分かりません。「START」の札や、1つ目の番号で始点を示します。',
  ],
  similar: [
    { slug: 'flow', diff: 'フロー型は、手順を一方向に矢印でつなぐ型です。循環サイクル型は、最後が最初に戻って繰り返す点が違います。' },
    { slug: 'causal-loop', diff: '因果ループ型は、原因と結果が互いに影響し合って増えたり減ったりする様子を見せる型です。循環サイクル型は、決まった手順を順に繰り返す流れです。' },
    { slug: 'steps', diff: '操作手順型は、番号つきで操作を順に見せる型です。循環サイクル型は、戻ってくる流れに向いています。' },
  ],
  faq: [
    {
      q: 'PDCAサイクルの図はPowerPointで作れますか？',
      a: '作れます。「挿入」→「SmartArt」→「循環」から「基本の循環」を選んで、4つの枠に「計画・実行・確認・改善」を入れるのが最も手早い方法です。見た目を整えたいときは、図形で箱と円弧の矢印を自分で置きます。',
    },
    {
      q: '循環サイクル図とフロー図は何が違いますか？',
      a: 'フロー図は、始まりから終わりまで一方向に進む流れを描きます。循環サイクル図は、最後の手順から最初の手順に戻る流れを描き、繰り返して回し続けることを見せます。',
    },
    {
      q: 'サイクルの手順は何個がよいですか？',
      a: '3〜5個が見やすい範囲です。PDCAのように4つにまとめると、上・右・下・左にきれいに置けます。6つを超えるなら、似た手順を大きな段階にまとめます。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
