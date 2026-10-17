import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'funnel',
  no: 39,
  category: 'data',
  name: 'ファネル型',
  en: 'Funnel chart',
  aka: ['ファネルチャート', 'じょうご型', '漏斗グラフ', 'コンバージョンファネル', '購入までの流れ図'],
  mode: 'static',
  title: 'ファネル型とは？購入までの人数の減り方を1枚で見せる作り方【PowerPoint】',
  description:
    '段階ごとに人数が減る様子を、じょうごの形で見せる「ファネル型」のスライドを見本で解説。棒の幅を人数に比例させる決まり、離れる割合の強調のコツ、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '段階ごとに人数が絞られる様子を、幅の違う棒で見せる。',
  what: [
    '上から順に、サイトへの訪問、商品ページの閲覧、カートに入れる、購入手続き、購入完了という5つの段階を並べ、それぞれの人数を横棒の幅で見せる型です。段階が進むほど棒が細くなり、じょうご（英語でファネル）の形になります。見本では、棒と棒のあいだに「進む55%」のように次へ進んだ割合を置き、いちばん低い「カートに入れる」の手前だけを色付きの帯で目立たせて、見出しの結論「68%は離れている」と合わせています。',
    '決まりごとは、棒の幅を人数にきっちり比例させることと、割合の分母を「ひとつ前の段階」にそろえることです。幅が人数に比例していないと、どこで減ったのかを目で判断できません。また、いちばん大きく減った所を1か所だけ強調し、そこに原因の見立てと次の手を添えると、報告が「現状の説明」から「改善の相談」に変わります。',
  ],
  when: [
    'ネットショップや会員登録など、お客さまが段階を踏んで進む流れで、どこで離れているかを報告するとき',
    '採用（応募→書類通過→面接→内定→入社）や営業（問い合わせ→商談→見積→受注）のように、人数や件数が段階ごとに絞られる流れを見せるとき',
    '改善の前と後で、どの段階の割合が変わったかを比べたいとき（2つのじょうごを左右に並べる）',
  ],
  avoid: [
    '段階が7つを超え、棒が細すぎて数字が読めなくなるとき（主な5段階前後に絞る）',
    '段階の順番が決まっていない、または途中で数が増える数字のとき（縦棒グラフ型にする）',
    '全体の中の内訳を見せたいとき（円グラフ型・100%積み上げ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ファネル型（funnel chart。上から下へ人数が絞られていく図）」で作ってください。いちばん上に小さく「ネットショップ「ことりや」の購入までの流れ（2025年9月）」、その下に結論の見出し「商品を見た人の68%は、カートに入れず離れている」を置きます。見出しの下に、横向きの棒を上から5本、同じ高さ・同じ間隔で縦に並べてください。段階と人数は上から順に、サイトへの訪問12,000人、商品ページを見た6,600人、カートに入れた2,100人、購入手続きに進んだ1,320人、購入が完了した840人です。棒の幅は人数にきっちり比例させ（最初の12,000人を最大の幅にする）、棒は{{align:t}}にそろえます。左に段階の名前（18pt、太字）、右端に人数（24pt、太字）を置いてください。棒と棒のあいだには、ひとつ前の段階から次へ進んだ割合を小さく書きます（進む55%、進む32%、進む63%、進む64%）。強調の仕方は「{{focus:t}}」にし、強調するときは、割合がいちばん低い「商品ページを見た」と「カートに入れた」のあいだを、アクセント色{{accent:t}}の角丸の帯にして白い太字で「進む32%／離れる68%」と書き、その前後の2本の棒だけをアクセント色、ほかの棒は薄い灰色にします。強調しないときは、すべての棒をアクセント色にします。色はアクセント色と灰色の2色だけで、立体・影・グラデーションは使いません。下に「※ 「進む」は、ひとつ前の段階の人数に対する割合。訪問数を100%とした購入率は7.0%（840 ÷ 12,000）。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」から角丸四角形を1つ置き、高さをそろえて5つにコピーします。幅は「人数 ÷ 12,000 × 最大の幅」で計算した値を、「図形の書式」→「サイズ」の「幅」に入れます（最大の幅を20cmにするなら、6,600人は11cm、2,100人は3.5cm）。5つを選んで「図形の書式」→「配置」から「左右中央揃え」、続けて「上下に整列」を押すと、じょうごの形になります。左右の文字はテキストボックスで置きます。バージョンによってはグラフの一覧に「じょうご」があり、数字を入れるだけで描けますが、割合の帯などは図形で足すことになります。',
    'Googleスライドでも作り方は同じです。「挿入」→「図形」から角丸四角形を描いてコピーし、図形を選んで右上の「書式オプション」を開くと、サイズを数字で入れられます。そろえるときは、メニューの「配置」にある「中央でそろえる」機能と「間隔を均等にする」機能を使います。Excelやスプレッドシートのグラフで作る場合は、横棒グラフを「積み上げ」にして、各行の左に目に見えない「すき間」の系列（最大値と人数の差の半分）を足すと、中央にそろった形になります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。棒の幅は「人数 ÷ 12,000 × 500」で決めた数値を書いているので、人数を変えるときは棒の幅（width）と、段階の間の「進む○%」も一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-align="{{align}}">
  <p class="kicker">ネットショップ「ことりや」の購入までの流れ（2025年9月）</p>
  <h1 class="title">商品を見た人の68%は、カートに入れず離れている</h1>
  <div class="body">
    <svg viewBox="0 0 848 338" role="img" aria-label="購入までの人数を幅で表したファネル">
      <line class="rule" x1="200" x2="720" y1="21" y2="21" />
      <line class="rule" x1="200" x2="720" y1="95" y2="95" />
      <line class="rule" x1="200" x2="720" y1="169" y2="169" />
      <line class="rule" x1="200" x2="720" y1="243" y2="243" />
      <line class="rule" x1="200" x2="720" y1="317" y2="317" />
      <text class="name" x="0" y="27">サイトへの訪問</text>
      <rect class="bar sh" x="200" y="0" width="500" height="42" rx="4" style="--sx: 0px" />
      <text class="count" x="848" y="29" text-anchor="end">12,000<tspan class="unit" dx="3">人</tspan></text>
      <text class="name" x="0" y="101">商品ページを見た</text>
      <rect class="bar sh hot" x="312.5" y="74" width="275" height="42" rx="4" style="--sx: -112.5px" />
      <text class="count" x="848" y="103" text-anchor="end">6,600<tspan class="unit" dx="3">人</tspan></text>
      <text class="name" x="0" y="175">カートに入れた</text>
      <rect class="bar sh hot" x="406.25" y="148" width="87.5" height="42" rx="4" style="--sx: -206.25px" />
      <text class="count" x="848" y="177" text-anchor="end">2,100<tspan class="unit" dx="3">人</tspan></text>
      <text class="name" x="0" y="249">購入手続きに進んだ</text>
      <rect class="bar sh" x="422.5" y="222" width="55" height="42" rx="4" style="--sx: -222.5px" />
      <text class="count" x="848" y="251" text-anchor="end">1,320<tspan class="unit" dx="3">人</tspan></text>
      <text class="name" x="0" y="323">購入が完了した</text>
      <rect class="bar sh" x="432.5" y="296" width="35" height="42" rx="4" style="--sx: -232.5px" />
      <text class="count" x="848" y="325" text-anchor="end">840<tspan class="unit" dx="3">人</tspan></text>
      <g class="sh plain" style="--sx: -210px">
        <path class="tri" d="M410 54h10l-5 8z" />
        <text class="rate" x="426" y="63.5">進む55%</text>
      </g>
      <g class="sh plain hot" style="--sx: -210px">
        <path class="tri" d="M410 128h10l-5 8z" />
        <text class="rate" x="426" y="137.5">進む32%</text>
      </g>
      <g class="sh pill" style="--sx: -150px">
        <rect x="350" y="120" width="200" height="24" rx="12" />
        <text x="450" y="137.5" text-anchor="middle">進む32%／離れる68%</text>
      </g>
      <g class="sh plain" style="--sx: -210px">
        <path class="tri" d="M410 202h10l-5 8z" />
        <text class="rate" x="426" y="211.5">進む63%</text>
      </g>
      <g class="sh plain" style="--sx: -210px">
        <path class="tri" d="M410 276h10l-5 8z" />
        <text class="rate" x="426" y="285.5">進む64%</text>
      </g>
    </svg>
  </div>
  <p class="note">※ 「進む」は、ひとつ前の段階の人数に対する割合。訪問数を100%とした購入率は7.0%（840 ÷ 12,000）。</p>
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
svg { display: block; width: 100%; height: 100%; overflow: visible; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 棒の幅は 人数 ÷ 12,000 × 500。座標は幅848×高さ338の中で数字で決めている */
.rule { stroke: #e3e5ea; stroke-width: 1; stroke-dasharray: 2 4; }
.name { font-size: 18px; font-weight: 700; fill: #1f2430; }
.count { font-size: 24px; font-weight: 800; fill: #1f2430; font-variant-numeric: tabular-nums; }
.unit { font-size: 16px; font-weight: 700; fill: #5a6070; }
.bar { fill: var(--accent); }
.tri { fill: #8a8f9c; }
.rate { font-size: 16px; font-weight: 700; fill: #5a6070; font-variant-numeric: tabular-nums; }
.pill { display: none; }
.pill rect { fill: var(--accent); }
.pill text { font-size: 16px; font-weight: 800; fill: #fff; }

/* 強調する段階（data-focus="drop" なら、いちばん低い所だけ色を付ける） */
.slide[data-focus="drop"] .bar { fill: #c3c8d2; }
.slide[data-focus="drop"] .bar.hot { fill: var(--accent); }
.slide[data-focus="drop"] .pill { display: inline; }
.slide[data-focus="drop"] .plain.hot { display: none; }

/* 棒を左にそろえる（data-align="left"） */
.slide[data-align="left"] .sh { transform: translateX(var(--sx)); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調',
      value: 'drop',
      options: [
        { value: 'drop', label: '割合がいちばん低い所だけ強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'align',
      type: 'select',
      label: '棒のそろえ方',
      value: 'center',
      options: [
        { value: 'center', label: '中央' },
        { value: 'left', label: '左端' },
      ],
    },
  ],
  cautions: [
    '棒の幅は人数にきっちり比例させます。見た目を整えるために840人の棒を少し太くすると、購入まで残った人が実際より多く見えてしまい、どこが問題なのかが伝わらなくなります。幅は「人数 ÷ 最初の人数」で計算します。',
    '割合の分母をそろえます。段階の間は「ひとつ前の段階に対する割合」、注記の購入率は「最初に対する割合」と、分母が違う数字を同じ見た目で並べると、32%と7.0%のどちらが言いたいのか分からなくなります。何に対する割合かを、注記で必ず書きます。',
    '強調はいちばん大きく減った1か所だけにします。全部の段階に目立つ印を付けると、どこから手を付ければいいのか決められません。強調した所には、見出しや次のスライドで「なぜ減るのか」の見立てと、次の手を言い切ります。',
    '「商品ページを見た」「カートに入れた」の数え方（人数か、回数か）を決めてから集計します。同じ人が何度も見た回数を混ぜると、段階が進んでも数が減らず、じょうごの形にならなくなります。',
  ],
  similar: [
    { slug: 'pareto', diff: 'パレート図型は、大きい順に並べた棒と累計の線で、主な原因を絞る型です。ファネル型が「流れの途中での減り方」を見るのに対し、パレート図は「どの項目が全体の大半を占めるか」を見ます。' },
    { slug: 'bar-chart', diff: '縦棒グラフ型は、項目ごとの数を比べる型です。段階の順番に意味があり、前の段階から減っていく数字ならファネル型、順番に意味のない比較なら縦棒グラフ型にします。' },
    { slug: 'waterfall', diff: 'ウォーターフォール型は、増えた分・減った分を積み重ねて、最初から最後への変化を説明する型です。人数の絞られ方ではなく、金額などの増減の内訳を見せるときに向きます。' },
  ],
  faq: [
    {
      q: 'ファネルチャートとは何ですか？',
      a: 'お客さまが購入や申し込みまで進む段階ごとの人数を、じょうごの形に並べた図です。上の段階ほど人数が多く、進むにつれて減っていくので、どの段階でいちばん多く離れているかがひと目で分かります。',
    },
    {
      q: 'PowerPointでファネルチャートは作れますか？',
      a: '作れます。新しいバージョンならグラフの一覧に「じょうご」があり、段階と人数を入れるだけで描けます。見つからない場合は、角丸四角形の幅を人数に比例させて並べ、中央でそろえれば同じ形になります。割合の帯や注釈は、図形で足すのが手軽です。',
    },
    {
      q: 'ファネルの割合は、最初の人数と前の段階のどちらを分母にしますか？',
      a: 'どちらも使えますが、混ぜないことが大切です。「どこで減ったか」を見せたいときは前の段階を分母にし、「全体のうち何%が最後まで進んだか」を見せたいときは最初の人数を分母にします。見本は前者を段階の間に、後者を注記に書いています。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
