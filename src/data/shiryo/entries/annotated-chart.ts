import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'annotated-chart',
  no: 50,
  category: 'data',
  name: '注釈付きグラフ型',
  en: 'Annotated chart',
  aka: ['注釈つきグラフ', 'アノテーション付きグラフ', '吹き出し付きグラフ', '理由を書き込んだグラフ', '出来事つき折れ線'],
  mode: 'static',
  title: '注釈付きグラフとは？山と谷に理由を書き込む作り方【PowerPoint・Excel】',
  description:
    '折れ線の山や谷に「なぜそうなったか」を書き込む「注釈付きグラフ型」のスライドを見本で解説。注釈の数と置き場所、色の使い方、PowerPoint・Excelでの作り方、AIへの指示文とHTMLのコードまでまとめました。そのまま使えます。',
  oneLine: 'グラフの山や谷に、理由を番号つきの短い文で書き込む。',
  what: [
    '折れ線グラフの目立つ変化に、番号つきの丸と短い文で「なぜそうなったか」を書き込んだ型です。見本では、1年間の月間訪問数に3つの注釈を付けています。3月の新生活セール、7月のサーバー障害による3日間の停止、9月のテレビ紹介で、それぞれ前の月との差を数字で添えました。見出しの結論「9月のテレビ紹介で、訪問数は年間最高の8.4万人に」と、いちばん高い山の注釈が対応しています。',
    'グラフだけでは「何が起きたか」は分かっても、「なぜ」は分かりません。注釈があると、会議で必ず出る「この山は何？」「この谷はどうして？」という質問に、先回りして答えられます。決まりごとは、注釈を変化の大きい3つ程度までに絞ること、1つの注釈を2行（原因と数字）までにすること、線や他の注釈と重ならない場所に置くことです。',
  ],
  when: [
    '売上・訪問数・問い合わせ件数の推移で、特別な出来事（キャンペーン、障害、報道）があったとき',
    '定例会議で、「先月はなぜ増えた（減った）のか」を数字と一緒に説明したいとき',
    '年間の振り返りや、施策の効果の報告で、グラフの変化と施策の日付を結びつけたいとき',
  ],
  avoid: [
    '注釈が5つを超えるとき（文字が線を隠すので、出来事の一覧をタイムライン型で別に見せる）',
    '変化の原因がまだ分からないとき（推測を注釈にせず、「要調査」と別に書く）',
    '点が多い日次データで、細かな上がり下がりをすべて説明したいとき（主な山と谷だけに絞る）',
  ],
  prompt:
    '16:9のスライドを1枚、「注釈付きグラフ型（annotated chart。折れ線グラフの山や谷に、理由の注釈を書き込む型）」で作ってください。いちばん上に小さく「自社サイトの月間訪問数（2025年1〜12月）」、その下に結論の見出し「9月のテレビ紹介で、訪問数は年間最高の8.4万人に」を置きます。見出しの下の広い場所に折れ線グラフを置き、横に1月〜12月を並べます。値（千人）は順に、48、51、63、59、57、54、41、55、84、79、74、70です。縦の目盛りは0〜100を20刻みにし、必ず0から始めてください。線は濃い灰色の{{w:t}}の太さにし、各月に小さな白抜きの丸を置きます。変化の大きい3つの月には、アクセント色{{accent:t}}の丸（直径24pt前後、白い太字の番号1〜3つき）を重ね、その近くに注釈を2行で書きます。注釈は、1行目に原因（17pt、太字、黒）、2行目に前の月との差（15pt、太字、アクセント色）にして、「注釈の数」は「{{notes:t}}」にしてください。内容は、1番が3月「新生活セールを開始」「+12千人（2月から）」で、丸の上に置きます。2番が7月「サーバー障害で3日間停止」「−13千人（6月から）」で、丸の下に置きます。3番が9月「テレビで紹介され急増」「+29千人（8月から）」で、丸の左に置きます。注釈は、線や他の注釈と重ならない場所に置いてください。立体・影・グラデーションは使いません。下に「※ 月間の訪問数（千人）。注釈の数字は、前の月との差。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「グラフ」→「折れ線」で、月ごとの訪問数のグラフを作り、縦軸の最小値を0に固定します。注釈は、「挿入」→「図形」から丸とテキストボックスを置いて、グラフの上に重ねるのが確実です。グラフの機能だけでやるなら、点を2回クリックして1つの点だけを選び、「グラフ要素を追加」→「データラベル」→「その他のデータラベルオプション」で、その点だけに値や文字を表示できます（バージョンによって名前が少し違います）。',
    'Googleスライドでは、「挿入」→「グラフ」から折れ線グラフを入れ、右上の︙（その他）→「ソースを開く」でスプレッドシートを開いて値を入れます。注釈は、スライド側で「挿入」→「図形」の楕円とテキストボックスを重ねて書きます。グラフを動かしたときに注釈がずれないよう、完成したらグラフと図形をまとめて選び、右クリックの「グループ化」で1つにしておきます。Excelなら、PowerPointと同じ手順で作れます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。折れ線と丸の位置は「訪問数 ÷ 100 × 266」で決めた数値を書いているので、数字を変えるときは、線・丸・注釈の位置を一緒に直してください。注釈の文字の位置は、線と重ならないように、数字を見て決め直します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-notes="{{notes}}">
  <p class="kicker">自社サイトの月間訪問数（2025年1〜12月）</p>
  <h1 class="title">9月のテレビ紹介で、訪問数は年間最高の8.4万人に</h1>
  <div class="body">
    <svg class="svg" viewBox="0 0 848 338" role="img" aria-label="月間訪問数の折れ線グラフと、山と谷への注釈">
      <line class="base" x1="48" x2="840" y1="290" y2="290" />
      <text class="tick" x="38" y="295" text-anchor="end">0</text>
      <line class="grid" x1="48" x2="840" y1="236.8" y2="236.8" />
      <text class="tick" x="38" y="241.8" text-anchor="end">20</text>
      <line class="grid" x1="48" x2="840" y1="183.6" y2="183.6" />
      <text class="tick" x="38" y="188.6" text-anchor="end">40</text>
      <line class="grid" x1="48" x2="840" y1="130.4" y2="130.4" />
      <text class="tick" x="38" y="135.4" text-anchor="end">60</text>
      <line class="grid" x1="48" x2="840" y1="77.2" y2="77.2" />
      <text class="tick" x="38" y="82.2" text-anchor="end">80</text>
      <line class="grid" x1="48" x2="840" y1="24" y2="24" />
      <text class="tick" x="38" y="29" text-anchor="end">100</text>
      <text class="unit" x="38" y="8" text-anchor="end">（千人）</text>
      <text class="mon" x="81" y="314" text-anchor="middle">1月</text>
      <text class="mon" x="147" y="314" text-anchor="middle">2月</text>
      <text class="mon" x="213" y="314" text-anchor="middle">3月</text>
      <text class="mon" x="279" y="314" text-anchor="middle">4月</text>
      <text class="mon" x="345" y="314" text-anchor="middle">5月</text>
      <text class="mon" x="411" y="314" text-anchor="middle">6月</text>
      <text class="mon" x="477" y="314" text-anchor="middle">7月</text>
      <text class="mon" x="543" y="314" text-anchor="middle">8月</text>
      <text class="mon" x="609" y="314" text-anchor="middle">9月</text>
      <text class="mon" x="675" y="314" text-anchor="middle">10月</text>
      <text class="mon" x="741" y="314" text-anchor="middle">11月</text>
      <text class="mon" x="807" y="314" text-anchor="middle">12月</text>
      <polyline class="line" points="81,162.32 147,154.34 213,122.42 279,133.06 345,138.38 411,146.36 477,180.94 543,143.7 609,66.56 675,79.86 741,93.16 807,103.8" />
      <circle class="dot" cx="81" cy="162.32" r="4" />
      <circle class="dot" cx="147" cy="154.34" r="4" />
      <circle class="dot" cx="213" cy="122.42" r="4" />
      <circle class="dot" cx="279" cy="133.06" r="4" />
      <circle class="dot" cx="345" cy="138.38" r="4" />
      <circle class="dot" cx="411" cy="146.36" r="4" />
      <circle class="dot" cx="477" cy="180.94" r="4" />
      <circle class="dot" cx="543" cy="143.7" r="4" />
      <circle class="dot" cx="609" cy="66.56" r="4" />
      <circle class="dot" cx="675" cy="79.86" r="4" />
      <circle class="dot" cx="741" cy="93.16" r="4" />
      <circle class="dot" cx="807" cy="103.8" r="4" />
      <g class="note n1">
        <circle class="badge" cx="213" cy="122.42" r="12" />
        <text class="bn" x="213" y="127.42" text-anchor="middle">1</text>
        <text class="nt" x="213" y="82.42" text-anchor="middle">新生活セールを開始</text>
        <text class="nd" x="213" y="102.42" text-anchor="middle">+12千人（2月から）</text>
      </g>
      <g class="note n2">
        <circle class="badge" cx="477" cy="180.94" r="12" />
        <text class="bn" x="477" y="185.94" text-anchor="middle">2</text>
        <text class="nt" x="477" y="218.94" text-anchor="middle">サーバー障害で3日間停止</text>
        <text class="nd" x="477" y="238.94" text-anchor="middle">−13千人（6月から）</text>
      </g>
      <g class="note n3">
        <circle class="badge" cx="609" cy="66.56" r="12" />
        <text class="bn" x="609" y="71.56" text-anchor="middle">3</text>
        <text class="nt" x="587" y="54.56" text-anchor="end">テレビで紹介され急増</text>
        <text class="nd" x="587" y="74.56" text-anchor="end">+29千人（8月から）</text>
      </g>
    </svg>
  </div>
  <p class="note">※ 月間の訪問数（千人）。注釈の数字は、前の月との差。</p>
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

/* 高さ = 訪問数 ÷ 100 × 266（目盛りは0〜100千人）。注釈は、前の月との差が大きい3つの月に、番号つきの丸と短い文でつける。座標は幅848×高さ338の中で数字で決めている */
/*svg*/
.svg { display: block; width: 100%; height: 100%; overflow: visible; }
.grid { stroke: #e3e5ea; stroke-width: 1; }
.base { stroke: #8a8f9c; stroke-width: 1.5; }
.tick { font-size: 14px; fill: #8a8f9c; font-variant-numeric: tabular-nums; }
.unit { font-size: 14px; fill: #8a8f9c; }
.mon { font-size: 15px; fill: #5a6070; }
.line { fill: none; stroke: #5a6070; stroke-width: {{w}}; stroke-linejoin: round; stroke-linecap: round; }
.dot { fill: #fff; stroke: #5a6070; stroke-width: 2; }
.badge { fill: var(--accent); stroke: #fff; stroke-width: 2; }
.bn { font-size: 14px; font-weight: 800; fill: #fff; }
.nt { font-size: 17px; font-weight: 800; fill: #1f2430; }
.nd { font-size: 15px; font-weight: 700; fill: var(--accent); font-variant-numeric: tabular-nums; }

/* 注釈の数（data-notes: all＝3つ、peak＝最大の山だけ、none＝つけない） */
.slide[data-notes="peak"] .note.n1,
.slide[data-notes="peak"] .note.n2,
.slide[data-notes="none"] .note { display: none; }
/*end*/`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'notes',
      type: 'select',
      label: '注釈の数',
      value: 'all',
      options: [
        { value: 'all', label: '3つすべて' },
        { value: 'peak', label: '最大の山（3番）だけ' },
        { value: 'none', label: 'つけない' },
      ],
    },
    { key: 'w', label: '線の太さ', min: 2, max: 5, step: 1, value: 3, unit: 'px' },
  ],
  cautions: [
    '注釈は変化の大きい3つ程度までにします。月ごとの小さな上下まですべてに注釈を付けると、文字がグラフを埋め、結論が分からなくなります。見出しの結論に関わる注釈を、いちばん目立たせます。',
    '注釈は2行までにします。「原因」と「前の月との差」だけを書き、長い説明は口頭か次のスライドに回します。注釈の文が長いと、聞き手はグラフを見ずに文字を読んでしまいます。',
    '注釈が、線や他の注釈と重ならないようにします。山の注釈は線の下がった側、谷の注釈は線の下の空いた所に置くと、重なりにくくなります。重なって読めない文字は、置き場所を直します。',
    '原因が確認できていないことは、注釈に書かないでください。「たぶんテレビの影響」のような推測を断定して書くと、後で訂正する資料になります。確認中のものは「要確認」と書くか、注釈にしません。',
  ],
  similar: [
    { slug: 'line-chart', diff: '折れ線推移型は、数の移り変わりを線で見せる型です。注釈付きグラフ型は、その折れ線に、山や谷の理由を書き込んだものです。理由がまだない推移だけなら、折れ線推移型で足ります。' },
    { slug: 'timeline', diff: 'タイムライン型は、出来事を時間の順に1本の線に並べる型です。注釈の数が5つを超えるときは、グラフと出来事の一覧を、タイムライン型で別に見せる方が読みやすくなります。' },
    { slug: 'waterfall', diff: 'ウォーターフォール型は、増減の積み重ねで最初から最後への変化を説明する型です。注釈付きグラフ型は、時間の流れの中の山や谷の理由を説明します。' },
  ],
  faq: [
    {
      q: '注釈付きグラフとは何ですか？',
      a: 'グラフの目立つ変化（山や谷）に、番号や吹き出しで理由を書き込んだグラフです。数字の変化と、その原因（キャンペーン、障害、報道など）を結びつけて説明できるので、会議での「なぜ？」という質問に先回りして答えられます。',
    },
    {
      q: 'グラフに吹き出しや注釈はPowerPointでどう付けますか？',
      a: '「挿入」→「図形」から丸とテキストボックスを置いて、グラフの上に重ねるのが確実です。グラフの機能では、点を2回クリックして1つの点だけを選び、その点に「データラベル」を付ける方法もあります。ずれないように、完成したらグラフと図形をグループにしておきます。',
    },
    {
      q: '注釈はいくつまで付けてよいですか？',
      a: '3つ程度までが目安です。多くても5つまでにして、それ以上は出来事の一覧を別に作ります。見出しの結論に関わる注釈を1つ決めて、そこを最も目立たせると、グラフの見どころが伝わります。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
