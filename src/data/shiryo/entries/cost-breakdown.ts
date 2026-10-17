import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'cost-breakdown',
  no: 90,
  category: 'teian',
  name: 'コスト内訳型',
  en: 'Cost breakdown',
  aka: ['費用の内訳', '費用内訳', '予算内訳', 'コスト構成', '見積もりの内訳', '費用の見せ方'],
  mode: 'static',
  title: 'コスト内訳型とは？費用の合計と中身を1枚で見せる資料の作り方【見本つき】',
  description:
    '費用の合計と、何にいくらかかるかの内訳を見せる「コスト内訳型」のスライドを見本で解説。縦の棒と一覧を組み合わせる見せ方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLまでまとめました。',
  oneLine: '費用の合計と、何にいくらかかるかの内訳を見せる。',
  what: [
    '左に費用の合計を大きく置き、その下の縦の棒を内訳の大きさで段に分け、右に項目ごとの金額と割合を並べる型です。見本では新しい受発注システムの初年度費用1,200万円を、開発費・機器・研修・保守・予備費の5つに分けています。いちばん大きい「開発費」の段だけに色を付け、見出しは「合計1,200万円、半分が開発費」と結論を書いています。',
    '決まりは、内訳の合計が見出しの合計とぴったり合うことと、大きい順に並べることです。棒の段の高さは金額に比例させ、棒と一覧で同じ並びにそろえます。そうすると、聞き手は棒で「どこが重いか」をつかみ、一覧で金額を確かめられます。5〜6項目を超えるときは、小さい項目を「その他」にまとめます。',
  ],
  when: [
    '稟議や予算申請で、「合計でいくらか」と「何にいくらかかるか」を一緒に説明するとき',
    '見積もりの中身を、お客さまに分かりやすく伝えたいとき',
    'プロジェクトの予算が、どこに偏っているかを共有したいとき',
    '前年に比べて、どの費用が増えたのかを説明する土台にしたいとき',
  ],
  avoid: [
    '内訳の項目が10以上あり、段が細すぎて読めなくなるとき（上位5つ程度とその他にまとめるか、表にする）',
    '年ごとの費用の移り変わりを見せたいとき（縦棒グラフ型・積み上げ棒型にする）',
    'かけた費用に対して、いくら戻ってくるかを見せたいとき（ROI試算型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「コスト内訳型（cost breakdown）」で作ってください。いちばん上に小さく「新・受発注システムの導入費用」、その下に結論の見出し「初年度の費用は合計1,200万円、半分が開発費」を1行で置きます。左側には「初年度の費用 合計」の文字と「1,200万円」（数字は50pt前後の太字）を置き、その下に縦長の棒を1本置いて、内訳の金額に比例した高さの5段に分けます。右側には5行の一覧を置き、大きい順に「開発費 600万円（50%）・画面と機能の作り込み（外部委託）」「機器・環境費 240万円（20%）・サーバーと端末20台の購入」「研修・データ移行 180万円（15%）・現場向けの研修と過去データの移行」「運用保守 120万円（10%）・稼働後12か月の保守契約」「予備費 60万円（5%）・想定外の変更に備える」とします。棒の段と一覧の行は、同じ並び・同じ色の小さな四角でつなぎます。色の付け方は「{{tone:t}}」にしてください。使う色はアクセント色{{accent:t}}と灰色だけにします。棒の幅は{{bar:t}}ptにします。金額は24pt以上の太字、項目名は18pt以上、説明は15pt以上、見出しは32〜36pt。最下部に「※ 税抜。割合は合計に対する比率。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、棒は「挿入」→「グラフ」→「縦棒」→「100%積み上げ縦棒」で作れます。表に1列だけ金額を5行入れ、「グラフのデザイン」→「行/列の切り替え」を押すと、1本の棒が5段に分かれます。データラベルは「グラフ要素を追加」→「データラベル」で出します。右の一覧は、「挿入」→「表」で4列×5行にし、色の四角・項目名・金額・割合を入れます。線は下線だけにすると軽く見えます。棒の段と表の行は、同じ順番・同じ色にそろえてください。',
    'Googleスライドでは、「挿入」→「グラフ」→「縦棒」で作り、スプレッドシートに金額を入れて「更新」を押します。積み上げにしたいときは、グラフの編集画面の「設定」→「積み上げ」で「標準」を選びます。ExcelやGoogleスプレッドシートで先にグラフを作って貼る方法もあります。一覧は「挿入」→「表」で作ります。1項目だけ濃い色にして、ほかを薄い灰色にすると、見出しの結論と見どころが重なります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。棒の段の高さは、金額をそのまま比率にして決めています（CSSの「--v」）。金額を変えたら、見出しの合計と、割合の数字も一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-tone="{{tone}}">
  <p class="kicker">新・受発注システムの導入費用</p>
  <h1 class="title">初年度の費用は合計1,200万円、半分が開発費</h1>

  <div class="body">
    <div class="left">
      <span class="total-label">初年度の費用 合計</span>
      <span class="total"><b>1,200</b>万円</span>
      <!-- 縦の棒。--v は金額、--k は大きい順の番号 -->
      <div class="stack">
        <span class="seg" style="--k: 0; --v: 600">50%</span>
        <span class="seg" style="--k: 1; --v: 240">20%</span>
        <span class="seg" style="--k: 2; --v: 180">15%</span>
        <span class="seg" style="--k: 3; --v: 120">10%</span>
        <span class="seg" style="--k: 4; --v: 60"></span>
      </div>
    </div>

    <ul class="rows">
      <li><i class="chip" style="--k: 0"></i><span class="text"><span class="name">開発費</span><span class="desc">画面と機能の作り込み（外部委託）</span></span><span class="amt">600<small>万円</small></span><span class="pct">50%</span></li>
      <li><i class="chip" style="--k: 1"></i><span class="text"><span class="name">機器・環境費</span><span class="desc">サーバーと端末20台の購入</span></span><span class="amt">240<small>万円</small></span><span class="pct">20%</span></li>
      <li><i class="chip" style="--k: 2"></i><span class="text"><span class="name">研修・データ移行</span><span class="desc">現場向けの研修と過去データの移行</span></span><span class="amt">180<small>万円</small></span><span class="pct">15%</span></li>
      <li><i class="chip" style="--k: 3"></i><span class="text"><span class="name">運用保守</span><span class="desc">稼働後12か月の保守契約</span></span><span class="amt">120<small>万円</small></span><span class="pct">10%</span></li>
      <li><i class="chip" style="--k: 4"></i><span class="text"><span class="name">予備費</span><span class="desc">想定外の変更に備える</span></span><span class="amt">60<small>万円</small></span><span class="pct">5%</span></li>
    </ul>
  </div>

  <p class="note">※ 税抜。割合は合計に対する比率。</p>
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
.body { flex: 1; display: flex; gap: 44px; margin: 18px 0 10px; min-height: 0; }

/* 左: 合計と縦の棒。各段の高さ = 金額 ÷ 合計（flex の比率で決まる） */
.left { flex: 0 0 230px; display: flex; flex-direction: column; min-height: 0; }
.total-label { font-size: 15px; color: #5a6070; }
.total { font-size: 22px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; }
.total b { margin-right: 4px; font-size: 52px; }
.stack { flex: 1; display: flex; flex-direction: column; width: {{bar:n}}px; margin-top: 10px; gap: 2px; min-height: 0; }
.seg { flex: var(--v) 1 0; display: flex; align-items: center; justify-content: center; min-height: 0; font-size: 17px; font-weight: 800; }
.seg:first-child { border-radius: 6px 6px 0 0; }
.seg:last-child { border-radius: 0 0 6px 6px; }

/* 右: 項目の一覧 */
.rows { flex: 1; display: grid; grid-template-rows: repeat(5, 1fr); margin: 0; padding: 0; list-style: none; }
.rows li { display: flex; align-items: center; gap: 14px; border-bottom: 1px solid #e3e5ea; }
.rows li:last-child { border-bottom: 0; }
.chip { flex: none; width: 16px; height: 16px; border-radius: 4px; }
.text { flex: 1; display: flex; flex-direction: column; }
.name { font-size: 20px; font-weight: 800; }
.desc { font-size: 15px; color: #5a6070; }
.amt { font-size: 28px; font-weight: 800; font-variant-numeric: tabular-nums; white-space: nowrap; }
.amt small { margin-left: 2px; font-size: 16px; font-weight: 700; color: #5a6070; }
.pct { flex: none; width: 48px; text-align: right; font-size: 18px; font-weight: 700; color: #5a6070; font-variant-numeric: tabular-nums; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 色の付け方（data-tone="top" なら最大の項目だけ色を付け、"shade" なら濃淡で並べる） */
.slide[data-tone="top"] :is(.seg, .chip) { background: color-mix(in srgb, #c3c8d2 calc(100% - var(--k) * 20%), #fff); }
.slide[data-tone="top"] :is(.seg:first-child, li:first-child .chip) { background: var(--accent); color: #fff; }
.slide[data-tone="shade"] :is(.seg, .chip) { background: color-mix(in srgb, var(--accent) calc(100% - var(--k) * 16%), #fff); color: #fff; }
.slide[data-tone="shade"] .seg:nth-child(n+4) { color: #1f2430; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'tone',
      type: 'select',
      label: '色の付け方',
      value: 'top',
      options: [
        { value: 'top', label: '最大の項目だけ色を付ける' },
        { value: 'shade', label: '濃淡で並べる' },
      ],
    },
    { key: 'bar', label: '棒の幅（pt）', min: 80, max: 200, step: 20, value: 120, unit: '' },
  ],
  cautions: [
    '内訳の合計を、見出しの合計とぴったり合わせます。1万円でもずれると、「他にも費用があるのでは」と疑われ、説明が内訳の計算に引き戻されます。端数を丸めたときは、注記に「端数処理のため合計が合わない場合があります」と書きます。',
    '項目は大きい順に並べ、棒と一覧で同じ順番にします。棒は金額順、一覧は支払いの順、のようにずれると、色の四角をたどって探すことになります。',
    '割合は、棒の段にも一覧にも同じ数字を書きます。割合は合計に対する比率なので、一覧の金額の列と別の分母で計算してはいけません。小さい項目は、棒の中に文字を入れず、一覧だけに書くと読みやすくなります。',
    '予備費やその他を多く取りすぎないでください。合計の1割を超えると「何に使うか決まっていない」と見えて、内訳の説得力が落ちます。多くなるなら、中身を分けて書きます。',
  ],
  similar: [
    { slug: 'roi', diff: 'ROI試算型は、かけるお金と、戻ってくるお金を比べる型です。費用の中身を説明するコスト内訳型と組み合わせると、決裁の説得力が上がります。' },
    { slug: 'stacked-bar', diff: '積み上げ棒型は、年ごとなど複数の棒それぞれを内訳に分ける型です。内訳が時間とともにどう変わるかを見せたいときに向きます。' },
    { slug: 'donut', diff: 'ドーナツ内訳型は、割合を輪で見せて中央に合計を置く型です。割合の大きさをひと目で伝えたいとき、金額の一覧を添えなくてよいときに向きます。' },
  ],
  faq: [
    {
      q: 'コストの内訳は、円グラフと棒のどちらで見せるのがよいですか？',
      a: '金額を比べたいなら棒がおすすめです。円グラフは角度で大きさを読むので、20%と15%のような近い値の違いが分かりにくくなります。縦の棒は、段の高さで比べられ、上から大きい順に並ぶので読み順もはっきりします。「全体のうち、この項目が半分」と印象づけたいだけなら、ドーナツ内訳型も使えます。',
    },
    {
      q: '内訳の項目は何個までにするとよいですか？',
      a: '5〜6個までが目安です。それ以上あるときは、金額の小さいものを「その他」にまとめ、詳細は別の資料に回します。スライドで読めない文字の大きさになるなら、項目が多すぎるサインです。',
    },
    {
      q: 'ExcelやGoogleスプレッドシートで作った内訳の表は、そのまま貼ってよいですか？',
      a: '貼れますが、そのままでは行数も列数も多く、文字が小さくなります。会議で話す項目だけを5つ前後に絞り、合計・金額・割合の3つの列にして作り直すと、読みやすくなります。元の細かい表は、参考資料として別に配ります。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
