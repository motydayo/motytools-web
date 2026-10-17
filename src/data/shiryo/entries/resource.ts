import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'resource',
  no: 93,
  category: 'teian',
  name: 'リソース配分型',
  en: 'Resource allocation',
  aka: ['リソース配分', '人員配分', '予算配分', '工数配分', '人員計画', '配分比率'],
  mode: 'static',
  title: 'リソース配分とは？人やお金の割り振りを1枚で見せるスライドの作り方【見本つき】',
  description:
    '人やお金を、どこに何割使うかを見せる「リソース配分型」のスライドを見本で解説。今期と来期を同じ並びの帯で比べる見せ方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '人やお金を、どこにどれだけ使うかを帯で比べる。',
  what: [
    '全体を横長の帯にして、使い道ごとの段に分ける型です。見本では開発チーム10人の配分を、「今期」と「来期」の2本の帯で上下に並べています。段は同じ並び（保守・改善・新機能）にそろえ、新機能の段だけにアクセント色を付けています。帯の下には3つの枠で、それぞれの増減（新機能 +2人、保守 −2人、改善 ±0人）を大きな数字で示しています。',
    '決まりは、2本の帯の全体の長さと段の並び順を同じにすることです。そろっていると、聞き手は「新機能の段が右に伸びた」と目で比べられます。人数・金額・時間のどれでも使えます。帯の段が多いと読めなくなるので、使い道は3〜5つに絞ります。',
  ],
  when: [
    '来期の人員計画や予算の配り方を、今期と比べて説明するとき',
    'チームの時間を、新しい仕事と保守にどれだけ使っているかを共有するとき',
    'プロジェクトの予算を、フェーズごとに割り振って承認を取るとき',
    '「リソースが足りない」ことを、現状の配分で示したいとき',
  ],
  avoid: [
    '1時点の割合だけを見せたいとき（円グラフ型・ドーナツ内訳型にする）',
    '年ごとの合計の変化も一緒に見せたいとき（積み上げ棒型にする）',
    '個々の作業にいつ誰が就くかを見せたいとき（ガントチャート型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「リソース配分型（resource allocation）」で作ってください。いちばん上に小さく「開発チーム10人の人員配分」、その下に結論の見出し「来期は保守を5人から3人に減らし、新機能に5人を振る」を1行で置きます。その下に、全体が10人の横長の帯を2本、上下に並べます。1本目は左に「今期（2026年度）」と書き、段は左から「保守5人・改善2人・新機能3人」、2本目は「来期（2027年度）」で「保守3人・改善2人・新機能5人」です。段の幅は人数に比例させ、2本の帯の全体の長さと段の並び順を同じにします。各段には、区分の名前（16pt）と人数（26pt前後の太字）を書きます。帯の太さは{{bar:t}}ptにしてください。色の付け方は「{{focus:t}}」にします。使う色はアクセント色{{accent:t}}と灰色の3段階だけで、色を付ける区分以外は灰色にします。帯の下に小さく「増減（今期から来期）」と書き、3つの枠を横に並べてください。枠の中は、区分の名前、「5人→3人」のような変化、大きな増減の数字（40pt前後）で、保守は−2人、改善は±0人、新機能は+2人です。見出しは32〜36pt。最下部に「※ 人数は専任に換算。外部委託は含まない。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、帯は「挿入」→「グラフ」→「横棒」→「積み上げ横棒」で作れます。表に今期・来期の2行、保守・改善・新機能の3列で人数を入れ、「グラフのデザイン」→「グラフ要素を追加」→「データラベル」で人数を表示します。2本の帯の長さをそろえるため、人数の目盛り（横軸）を右クリック→「軸の書式設定」で、最小値を0、最大値を10に固定します。系列ごとに色を変え、伝えたい区分だけアクセント色、残りは灰色の濃淡にします。増減の3つの枠は「挿入」→「図形」→「四角形: 角を丸くする」を3つ並べ、「図形の書式」→「配置」→「左右に整列」でそろえます。',
    'Googleスライドでは、「挿入」→「グラフ」でグラフを入れたあと、スプレッドシート側で今期・来期の行に人数を入れます。グラフの編集画面の「設定」→「グラフの種類」で、積み上げ横棒グラフを選びます。系列ごとの色は「カスタマイズ」→「系列」で変えます。図形で帯を作る方法もあり、四角形を人数に比例した幅（たとえば1人あたり60pt）で3つ並べ、幅を数値で指定すると、2本の帯の長さがぴったりそろいます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。段の幅は人数をそのまま比率にして決めているので（CSSの「--n」）、人数を変えたら、見出しと増減の数字も一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">開発チーム10人の人員配分</p>
  <h1 class="title">来期は保守を5人から3人に減らし、新機能に5人を振る</h1>

  <!-- 帯。--n は人数（段の幅 = 人数 ÷ 10）。2本とも同じ並び順 -->
  <div class="bars">
    <div class="bar-row">
      <span class="period"><b>今期</b><small>2026年度</small></span>
      <div class="bar">
        <span class="seg keep" style="--n: 5"><span class="name">保守</span><span class="n">5<small>人</small></span></span>
        <span class="seg fix" style="--n: 2"><span class="name">改善</span><span class="n">2<small>人</small></span></span>
        <span class="seg new" style="--n: 3"><span class="name">新機能</span><span class="n">3<small>人</small></span></span>
      </div>
    </div>
    <div class="bar-row">
      <span class="period"><b>来期</b><small>2027年度</small></span>
      <div class="bar">
        <span class="seg keep" style="--n: 3"><span class="name">保守</span><span class="n">3<small>人</small></span></span>
        <span class="seg fix" style="--n: 2"><span class="name">改善</span><span class="n">2<small>人</small></span></span>
        <span class="seg new" style="--n: 5"><span class="name">新機能</span><span class="n">5<small>人</small></span></span>
      </div>
    </div>
  </div>

  <p class="delta-title">増減（今期から来期）</p>
  <div class="deltas">
    <div class="delta d-keep"><span class="d-name">保守</span><span class="d-flow">5人 → 3人</span><span class="d-num">−2<small>人</small></span></div>
    <div class="delta d-fix"><span class="d-name">改善</span><span class="d-flow">2人 → 2人</span><span class="d-num">±0<small>人</small></span></div>
    <div class="delta d-new"><span class="d-name">新機能</span><span class="d-flow">3人 → 5人</span><span class="d-num">+2<small>人</small></span></div>
  </div>

  <p class="note">※ 人数は専任に換算。外部委託は含まない。</p>
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

/* 2本の帯 */
.bars { display: flex; flex-direction: column; gap: 14px; margin: 24px 0 18px; }
.bar-row { display: flex; align-items: center; gap: 16px; }
.period { flex: 0 0 92px; display: flex; flex-direction: column; }
.period b { font-size: 24px; font-weight: 800; line-height: 1.2; }
.period small { font-size: 14px; color: #5a6070; }
.bar { flex: 1; display: flex; gap: 3px; height: {{bar:n}}px; }
.seg { flex: var(--n) 1 0; display: flex; flex-direction: column; justify-content: center; padding: 0 14px; overflow: hidden; }
.seg:first-child { border-radius: 8px 0 0 8px; }
.seg:last-child { border-radius: 0 8px 8px 0; }
.name { font-size: 16px; font-weight: 700; line-height: 1.2; }
.n { font-size: 26px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; }
.n small, .d-num small { margin-left: 2px; font-size: 15px; font-weight: 700; }
.keep { background: #5a6070; color: #fff; }
.fix { background: #c3c8d2; }
.new { background: #aeb3c0; }

/* 増減の3つの枠 */
.delta-title { margin: 0 0 8px; font-size: 15px; font-weight: 700; color: #5a6070; }
.deltas { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 10px; }
.delta { display: grid; grid-template-columns: 1fr auto; grid-template-rows: auto 1fr; align-items: end; padding: 12px 18px; border: 2px solid #e3e5ea; border-radius: 10px; }
.d-name { font-size: 18px; font-weight: 800; }
.d-flow { font-size: 16px; color: #5a6070; text-align: right; }
.d-num { grid-column: 1 / 3; font-size: 40px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 色を付ける区分（data-focus="new" / "keep" / "none"） */
.slide[data-focus="new"] .new,
.slide[data-focus="keep"] .keep { background: var(--accent); color: #fff; }
.slide[data-focus="new"] .d-new,
.slide[data-focus="keep"] .d-keep { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="new"] .d-new .d-num,
.slide[data-focus="keep"] .d-keep .d-num { color: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける区分',
      value: 'new',
      options: [
        { value: 'new', label: '新機能に色を付ける' },
        { value: 'keep', label: '保守に色を付ける' },
        { value: 'none', label: '色を付けない' },
      ],
    },
    { key: 'bar', label: '帯の太さ（pt）', min: 48, max: 88, step: 8, value: 64, unit: '' },
  ],
  cautions: [
    '2本の帯は、全体の長さも段の並び順もそろえます。今期は「保守・改善・新機能」、来期は「新機能・保守・改善」のように並べ替えると、段の伸び縮みが比べられなくなります。',
    '人数の合計は、帯ごとに同じにします。来期が11人になるなら、帯の長さを変えず「割合」で比べるか、合計が増えることを見出しで説明します。黙って長さを変えると、増減が誤解されます。',
    '割合（%）と人数のどちらを段に書くのか、決めて統一します。人数で配分を決める会議なら人数、予算の配分を決める会議なら金額と割合を書きます。両方を段の中に詰めると、文字が小さくなります。',
    '「保守」「改善」のような区分の名前は、聞き手が分かる言葉にします。社内の略称だけで書くと、別の部署の人に伝わりません。1行の説明が必要なら、帯の下ではなく注記に書きます。',
  ],
  similar: [
    { slug: 'stacked-bar', diff: '積み上げ棒型は、年ごとなどの複数の棒それぞれを内訳に分ける型です。合計も変わる場合や、期間が3つ以上ならこちらが向きます。' },
    { slug: 'percent-stacked', diff: '100%積み上げ型は、内訳の割合の違いを同じ長さの棒で比べる型です。リソース配分型を、割合だけで見せたいときの形です。' },
    { slug: 'cost-breakdown', diff: 'コスト内訳型は、費用の合計が何にいくらかかるのかを見せる型です。配分を比べるリソース配分型に対し、1時点の中身を説明するときに使います。' },
  ],
  faq: [
    {
      q: 'リソースとは、人のことですか？',
      a: '人だけではありません。リソースは「資源」の意味で、人員・お金（予算）・時間・設備などをまとめた言葉です。スライドでは、どれを配るのかをタイトルや帯の単位（人・万円・時間）ではっきり書くと、混乱が避けられます。',
    },
    {
      q: 'リソース配分の資料は、円グラフではだめですか？',
      a: '1時点の配分だけなら円グラフでも構いません。ただ、今期と来期のように2つを比べるときは、円を2つ並べても、角度の違いは読み取りにくいです。同じ長さの横の帯なら、段の伸び縮みがそのまま見えるので、変化を伝えたいときに向いています。',
    },
    {
      q: '配分の根拠は、どう示せばよいですか？',
      a: '帯の下か次のスライドに、配分を決めた理由を1行ずつ添えます。見本なら「保守の件数が前年の半分になった」「新機能の要望が増えた」のような、数字の事実です。理由のない配分は「なんとなく決めた」と受け取られます。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
