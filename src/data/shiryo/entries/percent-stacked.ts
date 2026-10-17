import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'percent-stacked',
  no: 30,
  category: 'data',
  name: '100%積み上げ型',
  en: '100% stacked bar chart',
  aka: ['100%積み上げ棒グラフ', '構成比グラフ', '割合比較グラフ', '帯グラフ', '百分率積み上げ'],
  mode: 'static',
  title: '100%積み上げ棒グラフとは？割合の違いを比べるスライドの作り方と見本',
  description:
    '年代ごとの割合の違いを、同じ長さの横棒で比べる「100%積み上げ型」のスライドを見本で解説。帯グラフとの関係、強調する内訳を左端に置く理由、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '内訳の割合の違いを、同じ長さの棒に並べて比べる。',
  what: [
    '棒の全体を100%にそろえ、その中を内訳の割合で区切った型です（日本では「帯グラフ」とも呼ばれます）。見本では年代ごとの注文方法を、アプリ・Web・電話・FAXの3つに分けて5本の横棒で並べています。どの棒も同じ長さなので、アプリの割合が20代の62%から60代以上の12%へ下がっていく様子が、左端の色の長さだけでたどれます。',
    '決まりは、内訳を並べる順番を全部の棒でそろえることと、見せたい内訳をいちばん左（縦棒なら下）に置くことです。左端が同じ位置から始まるので、長さを直接比べられます。段の中には割合を書き、行の合計は必ず100%にします。',
  ],
  when: [
    '年代・地域・店舗など、グループごとに「何がどれだけを占めるか」の配分の違いを見せたいとき',
    '調査の回答（とても満足〜不満）の割合を、質問ごとや年度ごとに並べて比べたいとき',
    '売上の構成比が、去年と今年でどう変わったかを見せたいとき',
  ],
  avoid: [
    '合計の大きさそのものの違いも伝えたいとき（積み上げ棒型にする）',
    '全体の割合を1つだけ見せたいとき（円グラフ型・ドーナツ内訳型にする）',
    '内訳が5つを超え、段が細くて割合を書けないとき（上位を残して「その他」にまとめる）',
  ],
  prompt:
    '16:9のスライドを1枚、「100%積み上げ型（100% stacked bar chart）」で作ってください。いちばん上に小さく「年代別の注文方法の割合（2025年度）」、その下に結論の見出し「アプリ注文は20代で62%、60代以上では12%」を置きます。見出しの下に凡例を横一列に置き、「アプリ」「Web（パソコン）」「電話・FAX」を四角い色見本と一緒に並べます。その下に横棒を5本、上から20代・30代・40代・50代・60代以上の順に並べます。どの棒も全体を100%の長さにそろえ、左から「アプリ」「Web」「電話・FAX」の順に積みます。割合は20代が62・31・7、30代が54・38・8、40代が41・44・15、50代が27・47・26、60代以上が12・38・50（%）で、各段の中に値を書きます。下の目盛りは0%から100%まで25%刻みにします。色は「{{focus:t}}」にして、色を付ける段（アプリ）はアクセント色{{accent:t}}、ほかは灰色にします。棒の太さは1行ぶんの高さの{{bar:t}}にします。立体・影・グラデーションは使わず、見出しは32〜36pt、年代と値は16pt以上にしてください。下に「※ 年代ごとの注文件数に占める割合。回答のあった注文のみ。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「横棒」→「100%積み上げ横棒」を選び、出てきた表に年代（行）と内訳（列）の割合を入れます（縦に立てたいときは「縦棒」の「100%積み上げ縦棒」）。「グラフ要素を追加」→「データラベル」→「中央」で段の中に値を出し、凡例は上に置きます。段の色は、段を1回クリックで同じ内訳が全部、もう1回で1つだけ選ばれるので、「書式」→「図形の塗りつぶし」で変えます。横棒は表の1行目がいちばん下に出るので、縦軸の「軸を反転する」にチェックを入れて並びを直します。',
    'Googleスライドでは、「挿入」→「グラフ」→「横棒」を入れ、右上の︙（その他）→「ソースを開く」でスプレッドシートに値を入れます。グラフの編集画面の「設定」→「積み上げ」で「100%」を選びます。「カスタマイズ」→「系列」で内訳ごとの色とデータラベルを設定し、直したらスライドに戻って「更新」を押します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。各段の長さは「割合 ÷ 100」で決めているので、各行の合計が100になるように値を変えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">年代別の注文方法の割合（2025年度）</p>
  <h1 class="title">アプリ注文は20代で62%、60代以上では12%</h1>

  <div class="body">
    <div class="legend">
      <span class="key"><i class="sw s1"></i>アプリ</span>
      <span class="key"><i class="sw s2"></i>Web（パソコン）</span>
      <span class="key"><i class="sw s3"></i>電話・FAX</span>
    </div>
    <div class="chart">
      <div class="names"><span>20代</span><span>30代</span><span>40代</span><span>50代</span><span>60代以上</span></div>
      <div class="plot">
        <i class="grid base" style="--v: 0"></i><i class="grid" style="--v: 25"></i><i class="grid" style="--v: 50"></i>
        <i class="grid" style="--v: 75"></i><i class="grid" style="--v: 100"></i>
        <!-- 1本 = .track。段の長さ = --v（%）。各行の合計は100 -->
        <div class="row"><div class="track"><span class="seg s1" style="--v: 62">62%</span><span class="seg s2" style="--v: 31">31%</span><span class="seg s3" style="--v: 7">7%</span></div></div>
        <div class="row"><div class="track"><span class="seg s1" style="--v: 54">54%</span><span class="seg s2" style="--v: 38">38%</span><span class="seg s3" style="--v: 8">8%</span></div></div>
        <div class="row"><div class="track"><span class="seg s1" style="--v: 41">41%</span><span class="seg s2" style="--v: 44">44%</span><span class="seg s3" style="--v: 15">15%</span></div></div>
        <div class="row"><div class="track"><span class="seg s1" style="--v: 27">27%</span><span class="seg s2" style="--v: 47">47%</span><span class="seg s3" style="--v: 26">26%</span></div></div>
        <div class="row"><div class="track"><span class="seg s1" style="--v: 12">12%</span><span class="seg s2" style="--v: 38">38%</span><span class="seg s3" style="--v: 50">50%</span></div></div>
      </div>
      <div class="axis">
        <span style="--v: 0">0%</span><span style="--v: 25">25%</span><span style="--v: 50">50%</span><span style="--v: 75">75%</span><span style="--v: 100">100%</span>
      </div>
    </div>
  </div>

  <p class="note">※ 年代ごとの注文件数に占める割合。回答のあった注文のみ。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --c1: var(--accent); --c2: #b4bac6; --c3: #dfe2e8; /* 左の段から順の色 */
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
.body { flex: 1; display: flex; flex-direction: column; margin: 14px 0 10px; min-height: 0; }

.legend { display: flex; gap: 28px; padding-left: 104px; height: 30px; align-items: center; font-size: 16px; font-weight: 700; color: #5a6070; }
.key { display: inline-flex; align-items: center; gap: 8px; }
.sw { display: inline-block; width: 14px; height: 14px; border-radius: 3px; }

.chart { flex: 1; display: grid; grid-template-columns: 104px 1fr; grid-template-rows: 1fr 28px; min-height: 0; padding-right: 8px; }
.names { display: flex; flex-direction: column; }
.names span { flex: 1; display: flex; align-items: center; font-size: 18px; font-weight: 700; }
.plot { position: relative; display: flex; flex-direction: column; }
.grid { position: absolute; top: 0; bottom: 0; left: calc(var(--v) * 1%); width: 1px; background: #e3e5ea; }
.grid.base { background: #8a8f9c; }
.row { position: relative; flex: 1; }
.track { position: absolute; left: 0; right: 0; top: calc((100% - {{bar}}) / 2); bottom: calc((100% - {{bar}}) / 2); display: flex; }
.seg {
  flex: 0 0 calc(var(--v) * 1%);
  display: flex; align-items: center; justify-content: center;
  box-shadow: inset -2px 0 #fff;
  font-size: 16px; font-weight: 700; color: #1f2430;
  font-variant-numeric: tabular-nums; overflow: hidden; white-space: nowrap;
}
.s1 { background: var(--c1); color: #fff; }
.s2 { background: var(--c2); }
.s3 { background: var(--c3); }
.axis { grid-column: 2; position: relative; }
.axis span { position: absolute; top: 6px; left: calc(var(--v) * 1%); transform: translateX(-50%); font-size: 14px; color: #8a8f9c; }

/* 色を付ける内訳（data-focus="tint" なら3つとも同じ色の濃淡） */
.slide[data-focus="tint"] { --c2: color-mix(in srgb, var(--accent) 45%, #fff); --c3: color-mix(in srgb, var(--accent) 18%, #fff); }

.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける内訳',
      value: 'app',
      options: [
        { value: 'app', label: 'アプリの段だけ色を付ける' },
        { value: 'tint', label: '3つとも同じ色の濃淡' },
      ],
    },
    { key: 'bar', label: '棒の太さ', min: 40, max: 90, step: 2, value: 66, unit: '%' },
  ],
  cautions: [
    '見せたい内訳を、いちばん左（縦棒なら下）に置きます。ここだけが全部の棒で同じ位置から始まるため、長さを直接比べられます。真ん中や右の段は、位置がずれるので比べにくくなります。',
    '各行の合計を、必ず100%にします。四捨五入で99%や101%になるときは、いちばん大きい項目で調整するか、「四捨五入のため合計は100%にならない場合があります」と注記を入れます。',
    '内訳の並べ順を、行ごとに変えません。「大きい順」にすると行ごとに順番が入れ替わり、色を探し直すことになります。並びを固定して、色で追えるようにします。',
    '割合だけでは、そもそもの人数や金額が分かりません。20代の注文が10件なのか1万件なのかで意味が変わるときは、各行の件数を注記か棒の横に添えます。',
  ],
  similar: [
    { slug: 'stacked-bar', diff: '積み上げ棒型は、棒の高さが合計そのものになる型です。合計の大きさと内訳を一緒に見せたいときに使います。' },
    { slug: 'pie-chart', diff: '円グラフ型は、全体の割合を1つの円で見せる型です。グループが1つだけで、項目も少ないときはこちらが簡単です。' },
    { slug: 'ranking-bar', diff: '横棒ランキング型は、項目を大きい順に並べて値を比べる型です。割合ではなく、大きさそのものを比べたいときに使います。' },
  ],
  faq: [
    {
      q: '100%積み上げ棒グラフと帯グラフは同じですか？',
      a: 'ほぼ同じものです。全体を100%にそろえた帯を、内訳で区切って並べたグラフを、日本では帯グラフと呼ぶことがあります。ExcelやPowerPointのメニューでは「100%積み上げ棒」という名前で探します。',
    },
    {
      q: '100%積み上げ棒グラフと円グラフはどちらがよいですか？',
      a: '比べるグループが複数あるなら、100%積み上げ棒が向いています。円は並べると大きさや角度の比較が難しいのに対し、棒は長さで直接比べられます。グループが1つで、項目が3〜5個なら円でも構いません。',
    },
    {
      q: '割合の合計が100%にならないときはどうしますか？',
      a: '四捨五入で1%ずれることはよくあります。いちばん大きい項目の数字を1%調整するか、注記に「四捨五入のため合計が100%にならない場合があります」と書きます。無言でずれたままにすると、見た人が計算を疑います。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
