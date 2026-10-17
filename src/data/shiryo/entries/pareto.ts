import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'pareto',
  no: 40,
  category: 'data',
  name: 'パレート図型',
  en: 'Pareto chart',
  aka: ['パレート図', 'パレートチャート', 'ABC分析のグラフ', '累積比率グラフ', '主な原因を絞る図'],
  mode: 'static',
  title: 'パレート図とは？主な原因を絞り込む作り方【PowerPoint・Excel】見本つき',
  description:
    '大きい順の棒と累計の線で「どの原因を先に直すか」を示す「パレート図型」のスライドを見本で解説。2つの目盛りのそろえ方、8割の目安線、PowerPoint・Excelでの作り方、AIへの指示文とHTMLのコードまでまとめました。',
  oneLine: '多い順の棒と累計の線で、先に直す原因を絞る。',
  what: [
    '項目を多い順に左から並べた棒グラフに、「ここまでで全体の何%か」を表す累計の折れ線を重ねた型です。見本では、ガラス食器の不良200件を原因ごとに数え、傷・汚れ、寸法不良、色ムラの3つで83%を占めることを見せています。棒は件数（左の目盛り）、線は累計の割合（右の目盛り）で、上位3つの棒だけに色を付け、見出しの結論「上位3つの原因で83%」と合わせています。',
    '決まりごとは、棒を必ず多い順に並べることと、左の目盛りの最大を合計に、右の目盛りの最大を100%にそろえることです。こうすると累計の線は最後の棒の上で100%にぴたりと届き、線の高さがそのまま「全体の何割か」になります。「少数の原因が結果の大半を生む」という考え方を、1枚で見せられるのが強みです。',
  ],
  when: [
    '不良・クレーム・遅延など、原因が複数あるとき、どれから手を付けるかを決めて説明したいとき',
    '売上を商品別に並べて、「上位の数品で売上の8割を占める」ことを示したいとき',
    '改善活動の報告で、対策の対象を絞った根拠を見せたいとき',
  ],
  avoid: [
    '項目の数が少なく（2〜3個）、累計の線を引く意味がないとき（縦棒グラフ型や横棒ランキング型にする）',
    '項目に順番がある数字（月・年度など）のとき（棒を多い順に並べ替えると意味が壊れるので、縦棒グラフ型にする）',
    '割合そのものを見せたいとき（円グラフ型・100%積み上げ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「パレート図型（Pareto chart。多い順の棒と、累計の折れ線を重ねたグラフ）」で作ってください。いちばん上に小さく「ガラス食器「ひだまり」の検品で見つかった不良（2025年9月・200件）」、その下に結論の見出し「上位3つの原因で、不良の83%を占めている」を置きます。見出しの下の広い場所にグラフを置き、横に原因6つを多い順に並べます。件数は左から、傷・汚れ82件、寸法不良50件、色ムラ34件、異物混入16件、梱包ミス10件、その他8件です（合計200件）。左の縦の目盛りは0〜200件を40刻み、右の縦の目盛りは0〜100%を20%刻みにして、2つの目盛りの高さをそろえてください（左の200件が右の100%と同じ高さ）。棒の高さは件数にきっちり比例させ、棒の下に原因の名前（16pt）と件数（18pt、太字）を書きます。棒の上を通る累計の折れ線は濃い灰色の{{line:t}}の太さで、各棒の中央に白い丸を置き、丸の上に累計の割合（41%、66%、83%、91%、96%、100%）を16ptの太字で書きます。棒の色は「{{focus:t}}」にして、色を付ける棒はアクセント色{{accent:t}}、それ以外は薄い灰色にします。80%の位置に点線を引き、「8割の目安」と書く表示は「{{guide:t}}」にしてください。右上には凡例（件数と累計の割合）を入れます。立体・影・グラデーションは使いません。下に「※ 棒は件数（左の目盛り）、線は累計の割合（右の目盛り）。件数の合計は200件。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」を開き、新しいバージョンなら「ヒストグラム」の中にある「パレート図」を選びます。出てきた表に原因と件数を入れると、多い順に並べ替えて累計の線も自動で描いてくれます。色を変えたい棒は、1回クリックで全部、もう1回クリックでその1本だけが選ばれるので、「書式」→「図形の塗りつぶし」で変えます。パレート図がない場合は、「挿入」→「グラフ」→「組み合わせ」で、件数を棒、累計の割合を折れ線にして、折れ線を第2軸（右の目盛り）に割り当てます。',
    'Googleスライドでは、「挿入」→「グラフ」から棒グラフを入れ、右上の︙（その他）→「ソースを開く」でスプレッドシートを開きます。表には「原因」「件数」「累計の割合」の列を作り、累計の割合は「その行までの件数の合計 ÷ 全体の件数」で計算しておきます。グラフの編集画面で「グラフの種類」を「複合グラフ」にし、累計の割合の系列だけ「右軸」にします。左右の目盛りの最大は、左を合計（200）、右を100%にそろえます。Excelで作るときも、同じ手順の「組み合わせグラフ」で作れます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。棒の高さは「件数 ÷ 200 × 250」、線の高さは「累計 ÷ 200 × 250」で数値を書いているので、件数を変えるときは合計も確かめ、棒・線・目盛りの数字を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-guide="{{guide}}">
  <p class="kicker">ガラス食器「ひだまり」の検品で見つかった不良（2025年9月・200件）</p>
  <h1 class="title">上位3つの原因で、不良の83%を占めている</h1>
  <div class="body">
    <svg class="svg" viewBox="0 0 848 338" role="img" aria-label="不良の原因を多い順に並べた棒と、累計の割合の線">
      <line class="base" x1="56" x2="792" y1="284" y2="284" />
      <text class="tick" x="46" y="289" text-anchor="end">0</text>
      <text class="tick" x="802" y="289">0%</text>
      <line class="grid" x1="56" x2="792" y1="234" y2="234" />
      <text class="tick" x="46" y="239" text-anchor="end">40</text>
      <text class="tick" x="802" y="239">20%</text>
      <line class="grid" x1="56" x2="792" y1="184" y2="184" />
      <text class="tick" x="46" y="189" text-anchor="end">80</text>
      <text class="tick" x="802" y="189">40%</text>
      <line class="grid" x1="56" x2="792" y1="134" y2="134" />
      <text class="tick" x="46" y="139" text-anchor="end">120</text>
      <text class="tick" x="802" y="139">60%</text>
      <line class="grid" x1="56" x2="792" y1="84" y2="84" />
      <text class="tick" x="46" y="89" text-anchor="end">160</text>
      <text class="tick" x="802" y="89">80%</text>
      <line class="grid" x1="56" x2="792" y1="34" y2="34" />
      <text class="tick" x="46" y="39" text-anchor="end">200</text>
      <text class="tick" x="802" y="39">100%</text>
      <text class="unit" x="46" y="18" text-anchor="end">（件）</text>
      <line class="guide" x1="56" x2="792" y1="84" y2="84" />
      <text class="guide-t" x="64" y="76">8割の目安</text>
      <rect class="bar g3 g1" x="79.33" y="181.5" width="76" height="102.5" rx="3" />
      <text class="xname" x="117.33" y="306" text-anchor="middle">傷・汚れ</text>
      <text class="xval" x="117.33" y="330" text-anchor="middle">82件</text>
      <rect class="bar g3 x" x="202" y="221.5" width="76" height="62.5" rx="3" />
      <text class="xname" x="240" y="306" text-anchor="middle">寸法不良</text>
      <text class="xval" x="240" y="330" text-anchor="middle">50件</text>
      <rect class="bar g3 x" x="324.67" y="241.5" width="76" height="42.5" rx="3" />
      <text class="xname" x="362.67" y="306" text-anchor="middle">色ムラ</text>
      <text class="xval" x="362.67" y="330" text-anchor="middle">34件</text>
      <rect class="bar rest x" x="447.33" y="264" width="76" height="20" rx="3" />
      <text class="xname" x="485.33" y="306" text-anchor="middle">異物混入</text>
      <text class="xval" x="485.33" y="330" text-anchor="middle">16件</text>
      <rect class="bar rest x" x="570" y="271.5" width="76" height="12.5" rx="3" />
      <text class="xname" x="608" y="306" text-anchor="middle">梱包ミス</text>
      <text class="xval" x="608" y="330" text-anchor="middle">10件</text>
      <rect class="bar rest x" x="692.67" y="274" width="76" height="10" rx="3" />
      <text class="xname" x="730.67" y="306" text-anchor="middle">その他</text>
      <text class="xval" x="730.67" y="330" text-anchor="middle">8件</text>
      <polyline class="line" points="117.33,181.5 240,119 362.67,76.5 485.33,56.5 608,44 730.67,34" />
      <circle class="dot" cx="117.33" cy="181.5" r="5" />
      <text class="cum" x="117.33" y="168.5" text-anchor="middle">41%</text>
      <circle class="dot" cx="240" cy="119" r="5" />
      <text class="cum" x="240" y="106" text-anchor="middle">66%</text>
      <circle class="dot" cx="362.67" cy="76.5" r="5" />
      <text class="cum" x="362.67" y="63.5" text-anchor="middle">83%</text>
      <circle class="dot" cx="485.33" cy="56.5" r="5" />
      <text class="cum" x="485.33" y="43.5" text-anchor="middle">91%</text>
      <circle class="dot" cx="608" cy="44" r="5" />
      <text class="cum" x="608" y="31" text-anchor="middle">96%</text>
      <circle class="dot" cx="730.67" cy="34" r="5" />
      <text class="cum" x="730.67" y="21" text-anchor="middle">100%</text>
      <rect class="bar g3 key" x="64" y="6" width="14" height="14" rx="2" />
      <text class="legend" x="86" y="19">件数（左の目盛り）</text>
      <line class="line" x1="286" x2="314" y1="13" y2="13" />
      <circle class="dot" cx="300" cy="13" r="5" />
      <text class="legend" x="324" y="19">累計の割合（右の目盛り）</text>
    </svg>
  </div>
  <p class="note">※ 棒は件数（左の目盛り）、線は累計の割合（右の目盛り）。件数の合計は200件。</p>
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

/* 棒の高さは 件数 ÷ 200 × 250、線の高さは 累計 ÷ 200 × 250。座標は幅848×高さ338の中で数字で決めている */
/*svg*/
.svg { display: block; width: 100%; height: 100%; overflow: visible; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.base { stroke: #8a8f9c; stroke-width: 1.5; }
.tick { font-size: 14px; fill: #8a8f9c; font-variant-numeric: tabular-nums; }
.unit { font-size: 14px; fill: #8a8f9c; }
.guide { stroke: #8a8f9c; stroke-width: 1.5; stroke-dasharray: 6 5; }
.guide-t { font-size: 14px; font-weight: 700; fill: #5a6070; }
.bar { fill: #c3c8d2; }
.xname { font-size: 16px; fill: #5a6070; }
.xval { font-size: 18px; font-weight: 800; fill: #1f2430; font-variant-numeric: tabular-nums; }
.line { fill: none; stroke: #1f2430; stroke-width: {{line}}; stroke-linejoin: round; stroke-linecap: round; }
.dot { fill: #fff; stroke: #1f2430; stroke-width: 2.5; }
.cum { font-size: 16px; font-weight: 800; fill: #1f2430; font-variant-numeric: tabular-nums; }
.legend { font-size: 14px; fill: #5a6070; }
.bar.key { fill: var(--accent); }

/* 色を付ける棒（data-focus: top3＝上位3つ、first＝いちばん多い1つ、all＝すべて） */
.slide[data-focus="top3"] .bar.g3 { fill: var(--accent); }
.slide[data-focus="first"] .bar.g1 { fill: var(--accent); }
.slide[data-focus="all"] .bar { fill: var(--accent); }
.slide[data-guide="hide"] .guide,
.slide[data-guide="hide"] .guide-t { display: none; }
/*end*/`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける棒',
      value: 'top3',
      options: [
        { value: 'top3', label: '上位3つの棒だけ色を付ける' },
        { value: 'first', label: 'いちばん多い棒だけ色を付ける' },
        { value: 'all', label: 'すべて同じ色' },
      ],
    },
    {
      key: 'guide',
      type: 'select',
      label: '8割の目安線',
      value: 'show',
      options: [
        { value: 'show', label: '点線で出す' },
        { value: 'hide', label: '出さない' },
      ],
    },
    { key: 'line', label: '累計の線の太さ', min: 2, max: 6, step: 1, value: 3, unit: 'px' },
  ],
  cautions: [
    '棒は必ず多い順に並べます。「その他」は件数が多くても、いちばん右に置きます。途中に混ざると累計の線がなだらかに増えなくなり、「上位の何個で何割」という読み方ができません。',
    '左右の目盛りの高さをそろえます。左の最大を最大の棒（82件）に合わせ、右を100%にすると、棒の高さと線の高さの対応がずれ、「最初の棒だけで全体の4割」という読み方ができなくなります。左の最大は合計の件数（200件）にします。',
    '色を付けるのは、対策の対象にする上位の棒だけにします。全部に色を付けたり、線にも棒にも別の色を付けたりすると、どこを見ればいいのかが伝わりません。',
    '累計の割合は、棒の件数とあわせて書きます。割合だけだと「全体で何件か」が分からず、少ない件数の話を大きく見せた資料に見えてしまいます。合計の件数は注記にも書いておきます。',
  ],
  similar: [
    { slug: 'ranking-bar', diff: '横棒ランキング型は、大きい順に項目を横棒で並べる型です。累計の線がなく、順位と大きさを読みやすく見せたいときに向きます。パレート図型は「上位の何個で何割か」まで見せます。' },
    { slug: 'histogram', diff: 'ヒストグラム型は、数の分布を区切りごとの件数で見せる型です。棒がくっついていて、並べ替えません。パレート図型は項目ごとに分かれていて、多い順に並べ替えます。' },
    { slug: 'waterfall', diff: 'ウォーターフォール型は、増減を積み重ねて最初から最後への変化を説明する型です。パレート図型は、原因ごとの大きさと累計で「何を先に直すか」を絞る型です。' },
  ],
  faq: [
    {
      q: 'パレート図とは何ですか？',
      a: '項目ごとの件数を多い順に並べた棒グラフに、累計の割合の折れ線を重ねた図です。「少数の項目が全体の大半を占める」ことを見せ、どの原因から手を付けるかを決めるときに使います。不良・クレーム・売上の分析で広く使われます。',
    },
    {
      q: 'パレート図はExcelで作れますか？',
      a: '新しいバージョンのExcelなら、「挿入」の統計グラフの中に「パレート図」があり、原因と件数を入れるだけで描けます。ない場合は、件数を棒、累計の割合を折れ線にした「組み合わせグラフ」で作り、折れ線を右の目盛り（第2軸）にします。',
    },
    {
      q: '8割で線を引くのはなぜですか？',
      a: '「全体の約8割は、2割ほどの項目が生む」という経験則（パレートの法則）から、8割までの項目を優先して直す目安にしています。必ず8割になるわけではないので、見本のように「目安」と書き、実際の数字で説明します。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
