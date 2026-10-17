import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'donut',
  no: 32,
  category: 'data',
  name: 'ドーナツ内訳型',
  en: 'Donut chart',
  aka: ['ドーナツグラフ', 'ドーナツチャート', '輪の内訳グラフ', '構成比ドーナツ', '合計入りの円グラフ'],
  mode: 'static',
  title: 'ドーナツグラフとは？合計と内訳を輪で見せるスライドの作り方と見本',
  description:
    '輪の真ん中に合計を置き、費用などの内訳を割合で見せる「ドーナツ内訳型」のスライドを見本で解説。円グラフとの違い、輪の太さの決め方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '割合を輪で見せ、くり抜いた真ん中に合計を置く。',
  what: [
    '円グラフの中心をくり抜き、輪の形にした型です。見本では販売費の合計8,400万円を、広告宣伝費・販促物・営業の人件費など5つの内訳に分けています。輪の真ん中に「8,400万円」と合計を大きく置き、右の一覧には項目ごとの金額と割合を並べ、最大の広告宣伝費だけにアクセント色を付けています。',
    '円グラフとの違いは、くり抜いた真ん中に「全体の数字」を置けることです。聞き手は「全部でいくらで、そのうち何が大きいか」を1か所で読めます。決まりは、輪の太さを細すぎず（中の文字が入る太さ）、項目を5つ以内にすることです。中央の数字は輪の項目と必ず合計が合うようにします。',
  ],
  when: [
    '費用・売上・予算などの合計と、その内訳の割合を同時に見せたいとき',
    '「全体で〜円。そのうち〜が4割」という流れで、合計から内訳へ話を進めたいとき',
    '1つの数字を主役に、割合を添える形で見せたいとき（ダッシュボードや決算の概要のスライドなど）',
  ],
  avoid: [
    '項目が6つ以上あり、輪が細切れになって見分けがつかないとき（横棒ランキング型にする）',
    '年度ごとの内訳の変化を比べたいとき（積み上げ棒型・100%積み上げ型にする）',
    '合計が不要で、割合だけを見せたいとき（円グラフ型のほうがシンプル）',
  ],
  prompt:
    '16:9のスライドを1枚、「ドーナツ内訳型（donut chart）」で作ってください。いちばん上に小さく「販売費の内訳（2025年度）」、その下に結論の見出し「販売費8,400万円の4割は広告宣伝費」を置きます。左にドーナツグラフ、右に内訳の一覧を置きます。内訳は大きい順に、広告宣伝費3,360万円（40%）・販促物・イベント2,100万円（25%）・営業の人件費1,680万円（20%）・物流費840万円（10%）・その他420万円（5%）で、合計は8,400万円です。12時の位置から時計回りにこの順に並べ、輪の間には細い白い隙間を入れます。輪の真ん中には、上に小さく「販売費の合計」、その下に「8,400」を50pt前後の太字、さらにその下に小さく「万円」と書いてください。輪の太さは{{ring:t}}pt前後にします。色は「{{focus:t}}」にして、色を付ける内訳（広告宣伝費）はアクセント色{{accent:t}}、ほかは灰色にします。右の一覧は、色見本・項目名・金額・割合の順に1行ずつ置き、割合は28pt前後の太字にします。立体・影・グラデーションは使わず、見出しは32〜36pt、項目名は18pt以上にしてください。下に「※ 割合は販売費の合計に対する比率。金額の単位は万円。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「グラフ」→「円」→「ドーナツ」を選び、出てきた表に項目と金額を入れます。合計の数字は、グラフの真ん中に「テキストボックス」を重ねて書きます（「挿入」→「テキストボックス」）。輪の太さは、輪を右クリック→「データ系列の書式設定」の「ドーナツの穴の大きさ」で変えます（数字を大きくすると輪が細くなります）。「グラフ要素を追加」→「データラベル」で割合を出し、色は、扇形を1回クリックで全体、もう1回でその1つだけが選ばれるので、「書式」→「図形の塗りつぶし」で変えます。',
    'Googleスライドでは、「挿入」→「グラフ」→「円」で入れてから、右上の︙（その他）→「ソースを開く」でスプレッドシートに値を入れ、グラフの編集画面の「カスタマイズ」→「円グラフ」で「ドーナツ型」にチェックを入れます。穴の大きさもそこで調整できます。真ん中の合計は、スライドに「テキストボックス」を重ねて書きます。直したらスライドに戻り、グラフの「更新」を押します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。輪は「円を太い線で描く」作りで、円周を100と数えて、割合をそのまま線の長さにしています。金額を変えるときは、合計と、各項目の「割合」「長さ」「位置」の数字を一緒に直してもらってください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">販売費の内訳（2025年度）</p>
  <h1 class="title">販売費8,400万円の4割は広告宣伝費</h1>

  <div class="body">
    <div class="ring">
      <!-- 円周を100として、stroke-dasharray=「長さ 残り」、stroke-dashoffset=「−始まりの位置」。12時から時計回り -->
      <svg viewBox="0 0 340 340" class="svg">
        <g transform="rotate(-90 170 170)">
          <circle class="s1" cx="170" cy="170" r="120" pathLength="100" stroke-dasharray="39.4 60.6" stroke-dashoffset="-0.3" />
          <circle class="s2" cx="170" cy="170" r="120" pathLength="100" stroke-dasharray="24.4 75.6" stroke-dashoffset="-40.3" />
          <circle class="s3" cx="170" cy="170" r="120" pathLength="100" stroke-dasharray="19.4 80.6" stroke-dashoffset="-65.3" />
          <circle class="s4" cx="170" cy="170" r="120" pathLength="100" stroke-dasharray="9.4 90.6" stroke-dashoffset="-85.3" />
          <circle class="s5" cx="170" cy="170" r="120" pathLength="100" stroke-dasharray="4.4 95.6" stroke-dashoffset="-95.3" />
        </g>
        <text class="cap" x="170" y="144" text-anchor="middle">販売費の合計</text>
        <text class="total" x="170" y="190" text-anchor="middle">8,400</text>
        <text class="unit" x="170" y="216" text-anchor="middle">万円</text>
      </svg>
    </div>

    <div class="legend">
      <div class="item"><i class="sw s1"></i><span class="label">広告宣伝費</span><span class="amt">3,360</span><span class="pct">40<small>%</small></span></div>
      <div class="item"><i class="sw s2"></i><span class="label">販促物・イベント</span><span class="amt">2,100</span><span class="pct">25<small>%</small></span></div>
      <div class="item"><i class="sw s3"></i><span class="label">営業の人件費</span><span class="amt">1,680</span><span class="pct">20<small>%</small></span></div>
      <div class="item"><i class="sw s4"></i><span class="label">物流費</span><span class="amt">840</span><span class="pct">10<small>%</small></span></div>
      <div class="item"><i class="sw s5"></i><span class="label">その他</span><span class="amt">420</span><span class="pct">5<small>%</small></span></div>
    </div>
  </div>

  <p class="note">※ 割合は販売費の合計に対する比率。金額の単位は万円。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --c1: var(--accent); --c2: #9aa0ac; --c3: #b9bec9; --c4: #d0d4dc; --c5: #e1e4ea; /* 大きい順の色 */
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
.body { flex: 1; display: flex; align-items: center; gap: 52px; margin: 12px 0 6px; min-height: 0; }

.ring { flex: 0 0 316px; height: 316px; margin-left: 20px; }
.svg { display: block; width: 100%; height: auto; }
.svg circle { fill: none; stroke-width: {{ring}}; } /* 半径120の円を、この太さの線で描くと輪になる */
.svg .s1 { stroke: var(--c1); } .svg .s2 { stroke: var(--c2); } .svg .s3 { stroke: var(--c3); }
.svg .s4 { stroke: var(--c4); } .svg .s5 { stroke: var(--c5); }
.cap { font-size: 16px; font-weight: 700; fill: #5a6070; }
.total { font-size: 50px; font-weight: 800; fill: #1f2430; }
.unit { font-size: 18px; font-weight: 700; fill: #5a6070; }

.legend { flex: 1; display: flex; flex-direction: column; border-top: 1px solid #e3e5ea; }
.item { display: flex; align-items: center; gap: 12px; padding: 11px 0; border-bottom: 1px solid #e3e5ea; }
.sw { display: block; width: 18px; height: 18px; border-radius: 4px; }
.sw.s1 { background: var(--c1); } .sw.s2 { background: var(--c2); } .sw.s3 { background: var(--c3); }
.sw.s4 { background: var(--c4); } .sw.s5 { background: var(--c5); }
.label { flex: 1; font-size: 19px; font-weight: 700; }
.amt { font-size: 18px; color: #5a6070; font-variant-numeric: tabular-nums; }
.pct { width: 76px; text-align: right; font-size: 28px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; }
.pct small { margin-left: 2px; font-size: 16px; font-weight: 700; color: #5a6070; }
.item:first-child .pct { color: var(--accent); }

/* 色を付ける内訳（data-focus="tint" なら5つとも同じ色の濃淡） */
.slide[data-focus="tint"] {
  --c2: color-mix(in srgb, var(--accent) 62%, #fff); --c3: color-mix(in srgb, var(--accent) 42%, #fff);
  --c4: color-mix(in srgb, var(--accent) 26%, #fff); --c5: color-mix(in srgb, var(--accent) 14%, #fff);
}

.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける内訳',
      value: 'top',
      options: [
        { value: 'top', label: '最大の内訳だけ色を付ける' },
        { value: 'tint', label: '5つとも同じ色の濃淡' },
      ],
    },
    { key: 'ring', label: '輪の太さ', min: 30, max: 70, step: 5, value: 50, unit: '' },
  ],
  cautions: [
    '中央の合計と、輪の内訳の合計を必ず一致させます。「その他」を抜いたまま合計だけ全体の数字にすると、聞き手が足し算して合わず、資料全体の信用を落とします。',
    '輪を細くしすぎないでください。細い輪では色の違いが見分けにくくなり、扇形の大きさも読めません。逆に太くしすぎると、中央の数字が入りません。見本くらいの太さが目安です。',
    '内訳は5つ以内にして、12時の位置から時計回りに大きい順に並べます。小さい項目は「その他」にまとめます。',
    '輪の上に割合を直接書くと、細い項目の文字がはみ出します。割合は右の一覧にまとめて大きく書き、輪は色と大きさの感覚を伝える役にします。',
  ],
  similar: [
    { slug: 'pie-chart', diff: '円グラフ型は、中心をくり抜かない円で割合を見せる型です。合計を置く必要がなく、割合だけを簡単に見せたいときに向きます。' },
    { slug: 'stacked-bar', diff: '積み上げ棒型は、合計と内訳を棒の積み重ねで見せる型です。年度ごとの内訳の変化まで見せたいときに使います。' },
    { slug: 'big-number', diff: '数字インパクト型は、1つの数字だけを大きく見せる型です。内訳が不要で、合計だけを印象づけたいときに使います。' },
  ],
  faq: [
    {
      q: 'ドーナツグラフと円グラフの違いは何ですか？',
      a: '見せている割合の情報はどちらも同じです。違いは、ドーナツは真ん中が空いていて、そこに合計などの数字を書ける点です。割合に加えて「全体の大きさ」を1か所で示したいときはドーナツ、割合だけなら円グラフで十分です。',
    },
    {
      q: 'PowerPointのドーナツグラフで真ん中に文字を入れるには？',
      a: '「挿入」→「テキストボックス」で文字の箱を作り、ドーナツの真ん中に重ねます。グラフを動かしても文字はついてこないので、位置が決まったあとで、テキストボックスとグラフを一緒に選んで「グループ化」しておくと崩れません。',
    },
    {
      q: 'ドーナツグラフを複数重ねてもよいですか？',
      a: 'PowerPointでは輪を二重にもできますが、内側と外側で比べにくくなるのでおすすめしません。2つの時点を比べたいときは、ドーナツを2つ横に並べるか、100%積み上げ型にします。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
