import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'area-chart',
  no: 33,
  category: 'data',
  name: '面グラフ型',
  en: 'Area chart',
  aka: ['面グラフ', 'エリアチャート', '量の推移グラフ', '塗りつぶし折れ線', '時間帯別グラフ'],
  mode: 'static',
  title: '面グラフとは？量の移り変わりを塗りで見せるスライドの作り方と見本',
  description:
    '時間帯ごとの出荷件数など、量の移り変わりを線の下の面で見せる「面グラフ型」のスライドを見本で解説。折れ線グラフとの使い分け、強調する時間帯の塗り分け、PowerPoint・Googleスライドでの作り方、AIへの指示とHTMLまで。',
  oneLine: '量の移り変わりを、線の下を塗った面の大きさで見せる。',
  what: [
    '折れ線グラフの線の下を塗りつぶして、「量の大きさ」を面積で感じさせる型です。見本では倉庫の1日の出荷件数を、8時から19時まで1時間ごとに並べ、午後の山をはっきり見せています。ピークの15時台（740件）に点と数字を付け、14〜16時台の面だけを濃い色にして、右の「42%」と結びつけています。',
    '折れ線との違いは、塗りがあるぶん「山の大きさ」「量の多さ」が目に入ることです。そのため、縦の目盛りは必ず0から始めます（塗りの面積が量を表すため、途中から始めると嘘になります）。見せたい時間帯だけ濃くして、ほかは薄い色にすると、見出しの結論と図が一致します。',
  ],
  when: [
    '時間帯・曜日・月ごとの量（来店数・出荷件数・アクセス数）の山と谷を見せたいとき',
    '「午後に集中する」「冬に増える」のように、ある期間の偏りを見せたいとき',
    '累計の量や、全体の大きさの感覚を面で印象づけたいとき',
  ],
  avoid: [
    '複数の系列の動きを細かく比べたいとき（面が重なって隠れるので、折れ線推移型にする）',
    '年度ごとの数を一つずつ正確に比べたいとき（縦棒グラフ型にする）',
    '内訳の変化を見せたいとき（内訳を積んだ面は読み取りにくい。積み上げ棒型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「面グラフ型（area chart）」で作ってください。いちばん上に小さく「倉庫の時間帯別の出荷件数（1日の合計）」、その下に結論の見出し「出荷は午後に集中し、ピークは15時台」を置きます。左の広い場所に面グラフを置き、横に8時から19時まで1時間ごとの12点、値は順に120・260・410・520・300・480・690・740・610・420・230・110（件）です。縦の目盛りは0から800まで200刻みにし、必ず0から始めてください。線はアクセント色{{accent:t}}、線の下の面は同じ色を{{fill:t}}の濃さで塗ります。強調する時間帯は「{{band:t}}」にして、強調するときは14時台〜16時台の面だけを濃くします。ピーク（15時台）には丸い点を打ち、24pt前後の太字で「740」と書いてください。右側の細い列には「42%」を60pt前後の太字・アクセント色で大きく置き、その下に「14〜16時台に集中する出荷の割合」、区切り線を挟んで「ピーク 15時台 740件」と書きます。目盛りの線は薄い灰色にし、凡例は付けません。見出しは32〜36pt、目盛りと時刻は14pt以上にしてください。下に「※ 平日平均。1日の出荷は合計4,890件。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「面」→「面」を選び、出てきた表に時刻と値を入れます。凡例は系列が1つなら不要なので、「グラフのデザイン」→「グラフ要素を追加」→「凡例」→「なし」で消します。面を右クリックして「データ系列の書式設定」で、塗りの色と「透明度」を決め、「枠線」を実線にして線の色を濃くします。縦軸をダブルクリックして出る設定で、最小値が0になっているかを確かめます。強調したい時間帯は、その範囲に半透明の四角（「挿入」→「図形」→「四角形」）を重ねるのが簡単です。',
    'Googleスライドでは、「挿入」→「グラフ」から作ったグラフは棒・折れ線・円などに限られるため、面グラフはスプレッドシートで作ります。スプレッドシートに時刻と値を入れて「挿入」→「グラフ」を選び、グラフエディタの「設定」→「グラフの種類」で「面グラフ」を選びます。できたら、スライドで「挿入」→「グラフ」→「スプレッドシートから」で貼り付けます。色と透明度はグラフエディタの「カスタマイズ」→「系列」で整えます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。点の位置は「時刻の順番」と「値 ÷ 目盛りの最大（800）」から計算した数字で書いてあるので、値を変えるときはAIに「面と線の座標も計算し直して」と頼んでください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-band="{{band}}">
  <p class="kicker">倉庫の時間帯別の出荷件数（1日の合計）</p>
  <h1 class="title">出荷は午後に集中し、ピークは15時台</h1>

  <div class="body">
    <!-- 図は幅600×高さ330。横=時刻の順番、縦=値 ÷ 800 から計算した位置 -->
    <svg class="chart" viewBox="0 0 600 330">
      <defs><clipPath id="band"><rect x="315" y="0" width="146.7" height="330" /></clipPath></defs>
      <text class="unit" x="0" y="14">（件）</text>
      <line class="grid base" x1="46" x2="584" y1="290" y2="290" /><text class="ytick" x="36" y="295" text-anchor="end">0</text>
      <line class="grid" x1="46" x2="584" y1="225" y2="225" /><text class="ytick" x="36" y="230" text-anchor="end">200</text>
      <line class="grid" x1="46" x2="584" y1="160" y2="160" /><text class="ytick" x="36" y="165" text-anchor="end">400</text>
      <line class="grid" x1="46" x2="584" y1="95" y2="95" /><text class="ytick" x="36" y="100" text-anchor="end">600</text>
      <line class="grid" x1="46" x2="584" y1="30" y2="30" /><text class="ytick" x="36" y="35" text-anchor="end">800</text>
      <path class="area" d="M46,290 L46,251 L94.9,205.5 L143.8,156.8 L192.7,121 L241.6,192.5 L290.5,134 L339.5,65.8 L388.4,49.5 L437.3,91.8 L486.2,153.5 L535.1,215.3 L584,254.3 L584,290 Z" />
      <path class="band" d="M46,290 L46,251 L94.9,205.5 L143.8,156.8 L192.7,121 L241.6,192.5 L290.5,134 L339.5,65.8 L388.4,49.5 L437.3,91.8 L486.2,153.5 L535.1,215.3 L584,254.3 L584,290 Z" clip-path="url(#band)" />
      <polyline class="line" points="46,251 94.9,205.5 143.8,156.8 192.7,121 241.6,192.5 290.5,134 339.5,65.8 388.4,49.5 437.3,91.8 486.2,153.5 535.1,215.3 584,254.3" />
      <circle class="dot" cx="388.4" cy="49.5" r="6.5" /><text class="peak" x="388.4" y="35.5" text-anchor="middle">740</text>
      <text class="xtick" x="46" y="316" text-anchor="middle">8時</text>
      <text class="xtick" x="94.9" y="316" text-anchor="middle">9時</text>
      <text class="xtick" x="143.8" y="316" text-anchor="middle">10時</text>
      <text class="xtick" x="192.7" y="316" text-anchor="middle">11時</text>
      <text class="xtick" x="241.6" y="316" text-anchor="middle">12時</text>
      <text class="xtick" x="290.5" y="316" text-anchor="middle">13時</text>
      <text class="xtick" x="339.5" y="316" text-anchor="middle">14時</text>
      <text class="xtick" x="388.4" y="316" text-anchor="middle">15時</text>
      <text class="xtick" x="437.3" y="316" text-anchor="middle">16時</text>
      <text class="xtick" x="486.2" y="316" text-anchor="middle">17時</text>
      <text class="xtick" x="535.1" y="316" text-anchor="middle">18時</text>
      <text class="xtick" x="584" y="316" text-anchor="middle">19時</text>
    </svg>

    <div class="side">
      <span class="big">42%</span>
      <span class="big-label">14〜16時台に集中する出荷の割合</span>
      <span class="sub">ピーク 15時台 740件</span>
    </div>
  </div>

  <p class="note">※ 平日平均。1日の出荷は合計4,890件。</p>
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
.body { flex: 1; display: flex; align-items: center; gap: 40px; margin: 14px 0 6px; min-height: 0; }
.chart { flex: 0 0 600px; display: block; width: 600px; height: auto; overflow: visible; }

.unit { font-size: 13px; fill: #8a8f9c; }
.ytick { font-size: 14px; fill: #8a8f9c; }
.xtick { font-size: 14px; fill: #5a6070; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.grid.base { stroke: #8a8f9c; }
.area { fill: var(--accent); fill-opacity: {{fill}}; }
.band { fill: var(--accent); fill-opacity: 0.55; display: none; }
.line { fill: none; stroke: var(--accent); stroke-width: 3; stroke-linejoin: round; }
.dot { fill: var(--accent); stroke: #fff; stroke-width: 2.5; }
.peak { font-size: 24px; font-weight: 800; fill: #1f2430; }

/* 強調する時間帯（data-band="on" なら14〜16時台の面を濃くする） */
.slide[data-band="on"] .band { display: block; }

.side { flex: 1; align-self: stretch; display: flex; flex-direction: column; justify-content: center; gap: 6px; padding-left: 28px; border-left: 1px solid #e3e5ea; }
.big { font-size: 60px; font-weight: 800; line-height: 1.05; color: var(--accent); }
.big-label { font-size: 16px; color: #5a6070; }
.sub { margin-top: 14px; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 17px; font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'band',
      type: 'select',
      label: '強調する時間帯',
      value: 'on',
      options: [
        { value: 'on', label: '14〜16時台を濃くする' },
        { value: 'off', label: '強調しない' },
      ],
    },
    { key: 'fill', label: '面の濃さ', min: 10, max: 60, step: 5, value: 25, unit: '%' },
  ],
  cautions: [
    '縦の目盛りは必ず0から始めます。面グラフは「塗りの大きさ」で量を伝えるので、途中から始めると山が実際より大きく見え、量を盛った資料になります。',
    '面を何枚も重ねないでください。後ろの面が前の面に隠れて、小さい系列が読めなくなります。2系列以上を見せたいときは、折れ線にするか、小さな図を並べます。',
    '塗りは薄く、線は濃くします。塗りが濃すぎると目盛りの線や文字が見にくくなり、線がないと山の形があいまいになります。強調する部分だけ濃くします。',
    '横軸の間隔は、時間の間隔に合わせてそろえます。8時・9時・10時のあとが12時、と抜けているのに同じ間隔で並べると、山の形が変わって見えます。',
  ],
  similar: [
    { slug: 'line-chart', diff: '折れ線推移型は、塗りのない線だけで推移を見せる型です。複数の線を重ねて動きを比べたいときは、こちらが向いています。' },
    { slug: 'bar-chart', diff: '縦棒グラフ型は、年度ごとの数を棒の高さで一つずつ比べる型です。点が少なく、離れた数を並べるときに向きます。' },
    { slug: 'annotated-chart', diff: '注釈付きグラフ型は、山や谷に理由の注釈を書き込む型です。ピークの理由まで説明したいときに使います。' },
  ],
  faq: [
    {
      q: '面グラフと折れ線グラフの違いは何ですか？',
      a: '折れ線は線の位置で「変化の形」を、面は塗りの大きさで「量の多さ」を見せます。時間帯ごとの来店数のように、山の大きさそのものが意味を持つときは面、複数の線を重ねて動きを比べたいときは折れ線が向いています。',
    },
    {
      q: '面グラフの縦軸は0から始めなければいけませんか？',
      a: '0から始めてください。塗りの面積が量を表しているため、途中から始めると面積の比が実際とずれてしまいます。小さな変化を見せたい場合は、面グラフではなく折れ線グラフにします。',
    },
    {
      q: '面グラフで特定の時間帯だけ色を変えるには？',
      a: 'PowerPointでは、その時間帯の範囲に半透明の四角を重ねるのが簡単です。「挿入」→「図形」から四角形を引き、塗りの透明度を上げて、グラフの上に置きます。正確さが必要なら、強調したい範囲を別の系列にして色を分けます。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
