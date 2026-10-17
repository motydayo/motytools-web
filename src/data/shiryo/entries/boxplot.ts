import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'boxplot',
  no: 41,
  category: 'data',
  name: '箱ひげ図型',
  en: 'Box plot',
  aka: ['箱ひげ図', 'ボックスプロット', '箱髭図', 'ばらつきの比較', '四分位図'],
  mode: 'static',
  title: '箱ひげ図とは？ばらつきと中央値を比べる見方と作り方【PowerPoint・Excel】',
  description:
    '営業所ごとの売上など、グループのばらつきを比べる「箱ひげ図型」のスライドを見本で解説。箱・太い線・ひげ・外れ値の意味、四分位の求め方、PowerPoint・Excelでの作り方、AIへの指示文とHTMLのコードまでまとめました。',
  oneLine: '真ん中の値とばらつきを、箱とひげでグループごとに比べる。',
  what: [
    '数の集まりを「箱」と「ひげ」で表し、グループどうしの真ん中の値とばらつきを並べて比べる型です。見本では、3つの営業所の担当者11人ずつの月間売上を横に並べています。箱は真ん中の半数の人が入る範囲、箱の中の太い線は中央値（小さい順に並べたちょうど真ん中の値）、ひげは箱の端から箱の幅の1.5倍以内にある最小と最大、丸はそれより大きく外れた値です。右には、中央値と箱の幅を数字で書いています。',
    '平均だけで比べると、大阪（平均244万円）と名古屋（平均241万円）はほぼ同じに見えますが、箱の幅は95と38で、大阪は担当者の差がとても大きいと分かります。決まりごとは、箱の両端の求め方を決めて注記に書くことと、グループの人数を書くことです。見本は、小さい順に並べて真ん中の値で前半と後半に分け、それぞれの真ん中を箱の両端にしています。点を重ねて出すと、聞き手は箱の根拠となる実際の人数と散らばりを自分の目で確かめられます。',
  ],
  when: [
    '営業所・店舗・商品ごとに、売上や所要時間などの「ばらつき」まで比べたいとき',
    '平均が同じでも中身が違うことを見せたいとき（品質検査の寸法、テストの点数、作業時間など）',
    '少数の飛び抜けた値（外れ値）があることを、聞き手に気づかせたいとき',
  ],
  avoid: [
    '各グループの数が5つ未満のとき（箱が意味を持たない。点をそのまま並べる散布図型にする）',
    '聞き手が箱ひげ図を初めて見る人ばかりで、読み方を説明する時間が取れないとき（縦棒グラフ型に平均を出し、ばらつきは数字で添える）',
    '分布の山の形（どこに多く集まるか）を見せたいとき（ヒストグラム型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「箱ひげ図型（box plot。ばらつきを箱とひげで表すグラフ）」で作ってください。いちばん上に小さく「営業所別の、担当者ひとりあたりの月間売上（2025年9月・各11人）」、その下に結論の見出し「中央値は東京が最高、ばらつきは大阪が最大」を置きます。見出しの下の広い場所に、横向きの箱ひげ図を3行、同じ間隔で上から東京・大阪・名古屋の順に並べます。横の目盛りは0〜500（万円）を100刻みで、必ず0から始めてください。各行の数字は、東京が最小180・第1四分位220・中央値260・第3四分位298・最大340、大阪が最小150・第1四分位185・中央値232・第3四分位280・ひげの上端296、外れ値が1つで440、名古屋が最小205・第1四分位222・中央値240・第3四分位260・最大275です。箱は第1四分位から第3四分位まで、箱の中の太い線は中央値、ひげは最小と最大（大阪は上端296）まで線で結び、大阪の440だけは白抜きの丸で別に置きます。箱の高さは{{boxh:t}}にし、箱の色はアクセント色{{accent:t}}の薄い色と、同じ色の縁取りにします。11人ぶんの売上を小さな灰色の点で箱の上に重ねる表示は「{{dots:t}}」にしてください。箱の上に中央値の数字を16ptの太字で書き、左に営業所の名前（18pt、太字）を置きます。右端に「中央値」と「箱の幅（第3四分位−第1四分位）」の2列を作り、数字（東京260・78、大阪232・95、名古屋240・38）を24ptの太字で書きます。このうち、中央値は東京、箱の幅は大阪の数字だけをアクセント色にします。色はアクセント色と灰色だけで、立体・影・グラデーションは使いません。下に「※ 単位は万円。箱＝真ん中の半数の人が入る範囲、太い線＝中央値、ひげ＝箱の端から箱の幅の1.5倍以内の最小・最大、○＝それより外れた値。箱の両端は、小さい順に並べて真ん中の値で前半・後半に分け、それぞれの真ん中。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、新しいバージョンなら「挿入」→「グラフ」の一覧に「箱ひげ図」があります。選ぶと出てくる表に、グループごとの列を作って値を入れるだけで描けます（見本なら、東京・大阪・名古屋の3列に11人ぶんずつ）。グラフを選んで「データ系列の書式設定」を開くと、全員の点の表示、外れ値の表示、四分位の計算方法を選べます。計算方法で値が少し変わるので、注記に書く方法と合わせます。色は、グラフを選んで「書式」→「図形の塗りつぶし」で変えます。',
    'Googleスライド（スプレッドシート）のグラフには、箱ひげ図の種類がありません。「ローソク足チャート」に、最小・第1四分位・第3四分位・最大の4つの数字を入れると箱ひげ図に近い形を作れますが、中央値の線は図形で足すことになります。見本のように読みやすくそろえたいときは、「挿入」→「図形」から四角形と線を並べて描き、値から位置を計算して置く方法が確実です。Excelなら、PowerPointと同じ「箱ひげ図」で作れます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。横の位置は「値 ÷ 500 × 560」で決めた数値を書いているので、売上を変えるときは、箱・線・点の位置と、右の列の数字を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-dots="{{dots}}">
  <p class="kicker">営業所別の、担当者ひとりあたりの月間売上（2025年9月・各11人）</p>
  <h1 class="title">中央値は東京が最高、ばらつきは大阪が最大</h1>
  <div class="body">
    <svg class="svg" viewBox="0 0 848 320" role="img" aria-label="3つの営業所の月間売上の箱ひげ図">
      <line class="base" x1="140" x2="140" y1="40" y2="278" />
      <text class="tick" x="140" y="302" text-anchor="middle">0</text>
      <line class="grid" x1="252" x2="252" y1="40" y2="278" />
      <text class="tick" x="252" y="302" text-anchor="middle">100</text>
      <line class="grid" x1="364" x2="364" y1="40" y2="278" />
      <text class="tick" x="364" y="302" text-anchor="middle">200</text>
      <line class="grid" x1="476" x2="476" y1="40" y2="278" />
      <text class="tick" x="476" y="302" text-anchor="middle">300</text>
      <line class="grid" x1="588" x2="588" y1="40" y2="278" />
      <text class="tick" x="588" y="302" text-anchor="middle">400</text>
      <line class="grid" x1="700" x2="700" y1="40" y2="278" />
      <text class="tick" x="700" y="302" text-anchor="middle">500</text>
      <text class="head" x="760" y="20" text-anchor="end">中央値</text>
      <text class="head" x="848" y="20" text-anchor="end">箱の幅</text>
      <text class="name" x="0" y="80">東京</text>
      <g class="plot" style="--cy: 74px">
        <line class="whisk" x1="341.6" x2="520.8" y1="74" y2="74" />
        <line class="whisk" x1="341.6" x2="341.6" y1="65" y2="83" />
        <line class="whisk" x1="520.8" x2="520.8" y1="65" y2="83" />
        <rect class="box" x="386.4" y="54" width="87.36" height="40" rx="3" />
        <line class="med" x1="431.2" x2="431.2" y1="54" y2="94" />
        <circle class="dot" cx="341.6" cy="66" r="3.5" />
        <circle class="dot" cx="369.6" cy="74" r="3.5" />
        <circle class="dot" cx="386.4" cy="82" r="3.5" />
        <circle class="dot" cx="403.2" cy="70" r="3.5" />
        <circle class="dot" cx="417.76" cy="78" r="3.5" />
        <circle class="dot" cx="431.2" cy="66" r="3.5" />
        <circle class="dot" cx="444.64" cy="74" r="3.5" />
        <circle class="dot" cx="459.2" cy="82" r="3.5" />
        <circle class="dot" cx="473.76" cy="70" r="3.5" />
        <circle class="dot" cx="492.8" cy="78" r="3.5" />
        <circle class="dot" cx="520.8" cy="66" r="3.5" />
      </g>
      <text class="mlabel" x="431.2" y="42" text-anchor="middle">260</text>
      <text class="val hl" x="760" y="82" text-anchor="end">260</text>
      <text class="val x" x="848" y="82" text-anchor="end">78</text>
      <text class="name" x="0" y="158">大阪</text>
      <g class="plot" style="--cy: 152px">
        <line class="whisk" x1="308" x2="471.52" y1="152" y2="152" />
        <line class="whisk" x1="308" x2="308" y1="143" y2="161" />
        <line class="whisk" x1="471.52" x2="471.52" y1="143" y2="161" />
        <rect class="box" x="347.2" y="132" width="106.4" height="40" rx="3" />
        <line class="med" x1="399.84" x2="399.84" y1="132" y2="172" />
        <circle class="dot" cx="308" cy="144" r="3.5" />
        <circle class="dot" cx="330.4" cy="152" r="3.5" />
        <circle class="dot" cx="347.2" cy="160" r="3.5" />
        <circle class="dot" cx="364" cy="148" r="3.5" />
        <circle class="dot" cx="380.8" cy="156" r="3.5" />
        <circle class="dot" cx="399.84" cy="144" r="3.5" />
        <circle class="dot" cx="420" cy="152" r="3.5" />
        <circle class="dot" cx="433.44" cy="160" r="3.5" />
        <circle class="dot" cx="453.6" cy="148" r="3.5" />
        <circle class="dot" cx="471.52" cy="156" r="3.5" />
        <circle class="out" cx="632.8" cy="152" r="6" />
      </g>
      <text class="mlabel" x="399.84" y="120" text-anchor="middle">232</text>
      <text class="val x" x="760" y="160" text-anchor="end">232</text>
      <text class="val hl" x="848" y="160" text-anchor="end">95</text>
      <text class="name" x="0" y="236">名古屋</text>
      <g class="plot" style="--cy: 230px">
        <line class="whisk" x1="369.6" x2="448" y1="230" y2="230" />
        <line class="whisk" x1="369.6" x2="369.6" y1="221" y2="239" />
        <line class="whisk" x1="448" x2="448" y1="221" y2="239" />
        <rect class="box" x="388.64" y="210" width="42.56" height="40" rx="3" />
        <line class="med" x1="408.8" x2="408.8" y1="210" y2="250" />
        <circle class="dot" cx="369.6" cy="222" r="3.5" />
        <circle class="dot" cx="380.8" cy="230" r="3.5" />
        <circle class="dot" cx="388.64" cy="238" r="3.5" />
        <circle class="dot" cx="397.6" cy="226" r="3.5" />
        <circle class="dot" cx="404.32" cy="234" r="3.5" />
        <circle class="dot" cx="408.8" cy="222" r="3.5" />
        <circle class="dot" cx="415.52" cy="230" r="3.5" />
        <circle class="dot" cx="423.36" cy="238" r="3.5" />
        <circle class="dot" cx="431.2" cy="226" r="3.5" />
        <circle class="dot" cx="440.16" cy="234" r="3.5" />
        <circle class="dot" cx="448" cy="222" r="3.5" />
      </g>
      <text class="mlabel" x="408.8" y="198" text-anchor="middle">240</text>
      <text class="val x" x="760" y="238" text-anchor="end">240</text>
      <text class="val x" x="848" y="238" text-anchor="end">38</text>
    </svg>
  </div>
  <p class="note">※ 単位は万円。箱＝真ん中の半数の人が入る範囲、太い線＝中央値、ひげ＝箱の端から箱の幅の1.5倍以内の最小・最大、○＝それより外れた値。箱の両端は、小さい順に並べて真ん中の値で前半・後半に分け、それぞれの真ん中。</p>
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

/* 横の位置は 値 ÷ 500 × 560。箱の両端は小さい順に並べた前半・後半の真ん中の値。座標は幅848×高さ320の中で数字で決めている */
/*svg*/
.svg { display: block; width: 100%; height: 100%; overflow: visible; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.base { stroke: #8a8f9c; stroke-width: 1.5; }
.tick { font-size: 14px; fill: #8a8f9c; font-variant-numeric: tabular-nums; }
.head { font-size: 16px; font-weight: 700; fill: #5a6070; }
.name { font-size: 18px; font-weight: 700; fill: #1f2430; }
.whisk { stroke: #5a6070; stroke-width: 2; }
.box { fill: color-mix(in srgb, var(--accent) 24%, #fff); stroke: var(--accent); stroke-width: 2; }
.med { stroke: #1f2430; stroke-width: 4; }
.dot { display: none; fill: #5a6070; fill-opacity: 0.6; }
.out { fill: #fff; stroke: #1f2430; stroke-width: 2.5; }
.mlabel { font-size: 16px; font-weight: 800; fill: #1f2430; font-variant-numeric: tabular-nums; }
.val { font-size: 24px; font-weight: 800; fill: #1f2430; font-variant-numeric: tabular-nums; }
.val.hl { fill: var(--accent); }
/* 箱の太さ（つまみ）: 行の中心を軸に上下へ広げる */
.box, .med { transform-box: fill-box; }
.plot .box, .plot .med { transform-origin: center; transform: scaleY(calc({{boxh}} / 40)); }

/* 全員の点（data-dots="on" で、11人ぶんの売上を箱の上に重ねる） */
.slide[data-dots="on"] .dot { display: inline; }
/*end*/`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'dots',
      type: 'select',
      label: '全員の点',
      value: 'on',
      options: [
        { value: 'on', label: '11人ぶんの点を重ねる' },
        { value: 'off', label: '重ねない' },
      ],
    },
    { key: 'boxh', label: '箱の高さ（pt）', min: 24, max: 56, step: 4, value: 40, unit: '' },
  ],
  cautions: [
    '箱の両端の求め方（四分位の計算方法）を注記に書きます。ソフトによって計算方法が少し違い、同じ数字でも箱の位置が少しずれることがあります。後から別の資料と数字が合わなくなったときに、説明できなくなります。',
    '箱ひげ図は、初めて見る人には読み方が分かりません。見本の注記のように「箱＝真ん中の半数、太い線＝中央値」と1行で書き添えます。「四分位範囲」「外れ値」などの言葉も、普通の言葉に言い換えます。',
    'グループごとの人数が違うときは、人数を書きます。3人のグループの箱と100人のグループの箱が同じ見た目で並ぶと、どちらも同じくらい確かな数字に見えてしまいます。',
    '外れ値を、最初から消して見せないようにします。飛び抜けた値は、入力ミスか、特別な事情の合図です。見本のように丸で示して、「大阪に1人、440万円の人がいる」と口頭で触れられるようにします。',
  ],
  similar: [
    { slug: 'histogram', diff: 'ヒストグラム型は、数の分布を区切りごとの件数で見せる型です。山の形（どこに多く集まるか）は分かりますが、グループを並べて比べるには箱ひげ図型の方が省スペースです。' },
    { slug: 'scatter', diff: '散布図型は、2つの数の関係を点の散らばりで見せる型です。箱ひげ図型は1つの数のばらつきをグループごとに比べます。' },
    { slug: 'bar-chart', diff: '縦棒グラフ型は、グループごとの平均や合計の大きさを比べる型です。ばらつきは見えないので、平均が同じでも中身が違うことを見せたいときは箱ひげ図型にします。' },
  ],
  faq: [
    {
      q: '箱ひげ図の見方を教えてください',
      a: '箱は真ん中の半数のデータが入る範囲、箱の中の線は中央値（ちょうど真ん中の値）です。箱の上下から伸びる線（ひげ）は、飛び抜けていない範囲の最小と最大、ひげの外の丸は外れ値です。箱が長いほどばらつきが大きく、線の位置が上にあるほど真ん中の値が大きいと読みます。',
    },
    {
      q: '箱ひげ図は、PowerPointやExcelで作れますか？',
      a: '新しいバージョンのPowerPointとExcelなら、「挿入」→「グラフ」に「箱ひげ図」があり、グループごとの列に値を入れるだけで作れます。Googleスライドには専用のグラフがないので、ローソク足チャートで近い形を作るか、図形で描きます。',
    },
    {
      q: '箱ひげ図の「ひげ」はどこまで伸ばしますか？',
      a: '広く使われる決め方は、「箱の端から、箱の幅の1.5倍の距離までに入っている最小と最大の値」までです。それより外にある値は、ひげに含めず丸で別に描きます。決め方は資料の注記に書いておきます。最小と最大の値までひげを伸ばす流儀もあるので、どちらにしたかを書きます。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
