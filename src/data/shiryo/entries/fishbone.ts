import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'fishbone',
  no: 66,
  category: 'keikaku',
  name: 'フィッシュボーン型',
  en: 'Fishbone diagram',
  aka: ['特性要因図', 'フィッシュボーン図', '魚の骨図', '石川ダイアグラム', '原因分析図'],
  mode: 'static',
  title: 'フィッシュボーン図とは？特性要因図の書き方とスライドの作り方【見本・PowerPoint】',
  description:
    '結果を魚の頭に見立て、原因を骨の形で洗い出す「フィッシュボーン型（特性要因図）」を見本で解説。人・設備・手順・環境の分け方、割合の置き方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '結果を魚の頭に、原因の種類を骨にして、効いている原因を洗い出す。',
  what: [
    '右端に「困っている結果」を魚の頭として置き、そこへ向かう太い背骨に、原因の種類ごとの骨を斜めにつなぐ型です。見本では、宅配の遅れ（遅延率8.2%）の原因を「人」「設備・機器」「手順」「環境」の4つの骨に分け、骨ごとに3つずつ具体的な原因を書いています。見出しの結論に合わせて、遅れの約7割を占める「人」と「設備・機器」の骨だけに色を付けています。',
    '特性要因図とも呼ばれ、工場の品質管理で生まれた図です。この図のよさは、思いつく原因を種類ごとに漏れなく書き出せることです。骨の名前（種類）を先に決めておくと、「手順の面はどうだろう」と考える糸口になり、議論が止まりません。ただし書き出しただけでは「どれが効いているか」は分からないので、見本のように割合や件数を添えて、手を打つ骨を絞ります。',
  ],
  when: [
    '不良・遅れ・クレームなどの原因を、現場のメンバーで洗い出す会議の記録を資料にするとき',
    '原因の分析結果を、上司や他部署に「抜けなく考えた」ことを示して報告するとき',
    '品質改善やトラブル対策の提案で、対策の前に原因の全体像を見せたいとき',
    '新人教育で、問題の考え方（人・設備・手順・環境に分ける）を教えるとき',
  ],
  avoid: [
    '原因を数字で分解して、1つの筋に絞りたいとき（ロジックツリー型にする）',
    '原因がすでに1つに決まっていて、対策を提案したいとき（課題・原因・解決型にする）',
    '原因どうしが影響し合って悪化し続けているとき（因果ループ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「フィッシュボーン型（fishbone diagram、特性要因図）」で作ってください。いちばん上に小さく「配送遅延の原因分析（物流センター）」、その下に結論の見出し「遅れの約7割は、「人」と「設備」が原因」を置きます。その下に魚の骨の図を描いてください。右端に黒い角丸の四角で魚の頭を置き、白い文字で「配送の遅れ」と「遅延率 8.2%」を書きます。頭から左へ太い黒の背骨を水平に引き、背骨の上側に2本、下側に2本、右下がり・右上がりの斜めの骨を、背骨に向かってつないでください。骨の端には名前の札を置きます。上は左から「人」と「設備・機器」、下は左から「手順」と「環境」です。札には名前と、遅れ全体に占める割合を書いてください（人38%・設備・機器31%・手順17%・環境14%）。割合は「{{badge:t}}」にしてください。各骨からは横に短い線を3本出し、線の上に原因を16pt以上で書きます。人は「新人の割合が高い」「繁忙期の人手不足」「応援の連絡が遅い」、設備・機器は「仕分け機の停止が多い」「配送端末の通信不良」「車両の点検待ち」、手順は「積み込み順が不統一」「再配達の受付が分散」「伝票の確認が二度手間」、環境は「不在の再配達が多い」「雨・雪の日の渋滞」「入館制限で待たされる」です。強調は「{{focus:t}}」にしてください（強調するときは、人と設備・機器の骨を太くしてアクセント色{{accent:t}}にし、札をアクセント色で塗って白い文字にする。ほかの骨は灰色のまま）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt。最下部に「※ 割合は、遅れた配送の主な原因を現場のリーダーが1件ずつ分類した結果（2025年9月）。」と注記を入れてください。数字と原因は私が書いたものだけを使い、新しいものを足さないでください。',
  howTo: [
    'PowerPointには専用の部品がないので、線と図形で描きます。まず「挿入」→「図形」→「線」→「直線」で背骨を水平に引き、Shiftキーを押しながらドラッグすると、まっすぐに引けます。斜めの骨も同じ直線で引き、横の短い線（原因の線）を重ねます。原因の文字は、線の上に「テキスト ボックス」を置いて書きます。魚の頭と骨の名前の札は「四角形: 角を丸くする」です。全部ができたら、骨1本ぶん（斜めの線・横の線・文字・札）を選んで「配置」→「グループ化」をしておくと、位置を動かすときに崩れません。骨の数は上下2本ずつの4本が、スライド1枚にちょうど収まります。',
    'Googleスライドでも同じ作り方で、「挿入」→「線」→「線」で背骨と骨を引き、「挿入」→「テキスト ボックス」で原因を書きます。骨1本ぶんを選んで「配置」→「グループ化」でまとめます。枠線の太さと色は、ツールバーの「枠線の太さ」「枠線の色」で変えます。原因が多いときは、スライドに全部書かず、骨ごとに3つまでに絞り、詳しい一覧は別の資料に回します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。骨は1枚の図（SVG）の中の線と文字で描いていて、骨の位置は数字で決めています。色が付くのは「hot」と書かれた骨だけなので、強調したい骨に hot を書き足してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-badge="{{badge}}">
  <p class="kicker">配送遅延の原因分析（物流センター）</p>
  <h1 class="title">遅れの約7割は、「人」と「設備」が原因</h1>

  <svg class="fb-svg" viewBox="0 0 848 320" role="img" aria-label="配送の遅れの原因を、人・設備・機器・手順・環境の4つの骨に分けて並べた特性要因図">
    <path class="fb-spine" d="M0 160 H696" />
    <g class="fb-bone fb-hot">
      <path class="fb-line" d="M165 32 L250 160" />
      <path class="fb-cause-line" d="M11.599999999999994 66 H187.6" />
      <text class="fb-cause" x="15.599999999999994" y="60">新人の割合が高い</text>
      <path class="fb-cause-line" d="M32.80000000000001 98 H208.8" />
      <text class="fb-cause" x="36.80000000000001" y="92">繁忙期の人手不足</text>
      <path class="fb-cause-line" d="M54.099999999999994 130 H230.1" />
      <text class="fb-cause" x="58.099999999999994" y="124">応援の連絡が遅い</text>
      <rect class="fb-label" x="80" y="0" width="170" height="32" rx="8" />
      <text class="fb-cat" x="165" y="22" text-anchor="middle">人<tspan class="fb-pct" dx="10">38%</tspan></text>
    </g>
    <g class="fb-bone fb-hot">
      <path class="fb-line" d="M445 32 L530 160" />
      <path class="fb-cause-line" d="M291.6 66 H467.6" />
      <text class="fb-cause" x="295.6" y="60">仕分け機の停止が多い</text>
      <path class="fb-cause-line" d="M312.8 98 H488.8" />
      <text class="fb-cause" x="316.8" y="92">配送端末の通信不良</text>
      <path class="fb-cause-line" d="M334.1 130 H510.1" />
      <text class="fb-cause" x="338.1" y="124">車両の点検待ち</text>
      <rect class="fb-label" x="360" y="0" width="170" height="32" rx="8" />
      <text class="fb-cat" x="445" y="22" text-anchor="middle">設備・機器<tspan class="fb-pct" dx="10">31%</tspan></text>
    </g>
    <g class="fb-bone">
      <path class="fb-line" d="M165 288 L250 160" />
      <path class="fb-cause-line" d="M11.599999999999994 254 H187.6" />
      <text class="fb-cause" x="15.599999999999994" y="248">積み込み順が不統一</text>
      <path class="fb-cause-line" d="M32.80000000000001 222 H208.8" />
      <text class="fb-cause" x="36.80000000000001" y="216">再配達の受付が分散</text>
      <path class="fb-cause-line" d="M54.099999999999994 190 H230.1" />
      <text class="fb-cause" x="58.099999999999994" y="184">伝票の確認が二度手間</text>
      <rect class="fb-label" x="80" y="288" width="170" height="32" rx="8" />
      <text class="fb-cat" x="165" y="310" text-anchor="middle">手順<tspan class="fb-pct" dx="10">17%</tspan></text>
    </g>
    <g class="fb-bone">
      <path class="fb-line" d="M445 288 L530 160" />
      <path class="fb-cause-line" d="M291.6 254 H467.6" />
      <text class="fb-cause" x="295.6" y="248">不在の再配達が多い</text>
      <path class="fb-cause-line" d="M312.8 222 H488.8" />
      <text class="fb-cause" x="316.8" y="216">雨・雪の日の渋滞</text>
      <path class="fb-cause-line" d="M334.1 190 H510.1" />
      <text class="fb-cause" x="338.1" y="184">入館制限で待たされる</text>
      <rect class="fb-label" x="360" y="288" width="170" height="32" rx="8" />
      <text class="fb-cat" x="445" y="310" text-anchor="middle">環境<tspan class="fb-pct" dx="10">14%</tspan></text>
    </g>
    <g class="fb-head">
      <rect x="696" y="106" width="152" height="108" rx="12" />
      <text class="fb-head-t" x="772" y="148" text-anchor="middle">配送の遅れ</text>
      <text class="fb-head-n" x="772" y="184" text-anchor="middle">遅延率 8.2%</text>
    </g>
  </svg>

  <p class="note">※ 割合は、遅れた配送の主な原因を現場のリーダーが1件ずつ分類した結果（2025年9月）。</p>
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
.fb-svg { display: block; flex: 1; min-height: 0; width: 100%; margin: 8px 0 4px; }
.fb-svg text { font-family: inherit; }
.fb-spine { fill: none; stroke: #1f2430; stroke-width: 4; stroke-linecap: round; }
.fb-line { fill: none; stroke: #8a8f9c; stroke-width: 3; stroke-linecap: round; }
.fb-cause-line { fill: none; stroke: #c3c8d2; stroke-width: 1.5; }
.fb-cause { font-size: 16px; fill: #1f2430; }
.fb-label { fill: #f3f4f7; stroke: #c3c8d2; stroke-width: 1.5; }
.fb-cat { font-size: 17px; font-weight: 800; fill: #1f2430; }
.fb-pct { font-size: 17px; font-weight: 800; fill: #5a6070; font-variant-numeric: tabular-nums; }
.fb-head rect { fill: #1f2430; }
.fb-head-t { font-size: 18px; font-weight: 800; fill: #fff; }
.fb-head-n { font-size: 20px; font-weight: 800; fill: #fff; font-variant-numeric: tabular-nums; }

/* 主な原因の骨を強調（data-focus="main"） */
.slide[data-focus="main"] .fb-hot .fb-line { stroke: var(--accent); stroke-width: 5; }
.slide[data-focus="main"] .fb-hot .fb-label { fill: var(--accent); stroke: var(--accent); }
.slide[data-focus="main"] .fb-hot .fb-cat,
.slide[data-focus="main"] .fb-hot .fb-pct { fill: #fff; }

/* 割合を隠す（data-badge="hide"） */
.slide[data-badge="hide"] .fb-pct { display: none; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'main',
      options: [
        { value: 'main', label: '主な原因の骨を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'badge',
      type: 'select',
      label: '割合（％）',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '書き出しただけで終わらせないこと。フィッシュボーン図は原因を並べる図なので、そのままでは「どれが効いているか」が分かりません。見本のように骨ごとの割合や件数を添え、色を付ける骨を決めて、結論を見出しに書きます。',
    '骨の名前（種類）は、4〜6個にそろえます。工場では人・機械・材料・方法の「4M」に、環境や測定を足した切り口がよく使われます。サービスの仕事なら「人・設備・手順・環境」の4つで十分です。種類を多くすると、スライドに収まりません。',
    '原因の文は、事実として書きます。「意識が低い」「連携が悪い」のような評価の言葉は、何を直せばよいか分からないので、「応援の連絡が遅い」のように、見て確かめられる出来事に言い換えます。',
    '骨の上に原因を詰め込みすぎないこと。1本につき3つまで、1つが10文字前後を目安にします。収まらない原因は、グラフや別資料に回し、ここには効いているものだけを置きます。',
  ],
  similar: [
    { slug: 'logic-tree', diff: 'ロジックツリー型は、結果を数字で分けて原因を絞り込む型です。フィッシュボーン型は、種類ごとに原因を自由に洗い出す型で、書き出しの段階に向いています。' },
    { slug: 'pareto', diff: 'パレート図型は、原因を大きい順の棒と累計の線で並べ、主な原因を絞る型です。フィッシュボーン型で洗い出した原因の件数を数えたあと、どれに手を打つかを決めるときに使います。' },
    { slug: 'causal-loop', diff: '因果ループ型は、原因と結果がぐるぐる影響し合う様子を見せる型です。フィッシュボーン型は原因から結果への一方向の関係を整理します。' },
  ],
  faq: [
    {
      q: 'フィッシュボーン図と特性要因図は同じものですか？',
      a: '同じものです。形が魚の骨に似ているのでフィッシュボーン図、「特性（結果）」と「要因（原因）」の関係を整理するので特性要因図と呼ばれます。考えた人の名前から、石川ダイアグラムと呼ぶこともあります。',
    },
    {
      q: 'フィッシュボーン図の骨の名前は何にすればよいですか？',
      a: '工場では「人・機械・材料・方法」の4つ（4M）や、そこに「環境・測定」を足した切り口がよく使われます。サービスや事務の仕事では、「人・設備・手順・環境」のように、自分たちの仕事に合う言葉にして構いません。大事なのは、骨の名前が重ならず、抜けがないことです。',
    },
    {
      q: 'PowerPointでフィッシュボーン図を簡単に作る方法はありますか？',
      a: '専用の図はありません。PowerPointのSmartArtにも魚の骨の形はないので、直線とテキストボックスで組みます。最初に背骨と魚の頭、骨の名前の札を置き、そのあとに原因を書いていくと、バランスが崩れません。1本ぶんを作ってからコピーして文字を入れ替えると、時間が節約できます。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
