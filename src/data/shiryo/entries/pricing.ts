import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'pricing',
  no: 89,
  category: 'teian',
  name: '価格プラン型',
  en: 'Pricing plans',
  aka: ['料金プラン', '料金表', '価格表', 'プラン比較', '松竹梅プラン', '料金体系'],
  mode: 'static',
  title: '価格プラン型とは？料金プランを3つ並べておすすめを伝える資料の作り方【見本つき】',
  description:
    '料金プランを3つ並べておすすめを示す「価格プラン型」のスライドを見本で解説。おすすめの強調のしかた、プランの選び方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '料金プランを3つ並べ、おすすめの1つを強調する。',
  what: [
    '価格の違う3つのプランを、同じ大きさのカードで横に並べる型です。見本では予約管理サービスの「ライト・スタンダード・プレミアム」を並べ、月額の料金を大きく、どんなお店向けかを1行、できることを4つずつ載せています。真ん中のスタンダードだけが色付きの太い枠と「おすすめ」の札で目立ち、見出しにも「おすすめはスタンダード」と結論を書いています。',
    '価格プラン型の決まりは、3つのカードで項目の数と順番をそろえることです。「店舗数・予約件数・通知・サポート」のように同じ物差しで並べると、上のプランほど何が増えるのかが目で追えます。おすすめは1つだけに絞ります。2つ以上に札を付けると、聞き手が選べなくなります。',
  ],
  when: [
    '見積もりや提案書で、お客さまに料金プランの中から選んでもらうとき',
    '自社サービスの値段表を、営業資料やサービス紹介のスライドに載せるとき',
    '社内の新しい制度やサービスに、利用の段階（ライト・標準・フル）を設けて説明するとき',
    '「なぜこのプランを勧めるのか」を、料金と中身の両方で示したいとき',
  ],
  avoid: [
    'プランが5つ以上あり、カードに分けると文字が小さくなるとき（選択肢比較表型で表にする）',
    '2つの案だけを比べるとき（2カラム比較型の方が大きな文字で見せられる）',
    '費用の中身（何にいくらかかるか）を説明したいとき（コスト内訳型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「価格プラン型（pricing plans）」で作ってください。いちばん上に小さく「予約管理サービス「ヨヤクノート」の料金」、その下に結論の見出し「おすすめはスタンダード：3店舗まで月9,800円」を1行で置きます。その下に、同じ大きさのカードを横に3枚、間を{{gap:t}}pt空けて並べます。左から「ライト・月3,000円・1店舗で始める個人のお店向け」「スタンダード・月9,800円・店舗を増やしていくお店向け」「プレミアム・月24,800円・多店舗のチェーン向け」です。各カードは、上から プラン名、料金（数字は42pt前後の太字）、向いているお店を1行、できること4つ（チェックマークつき）の順に並べ、項目の順番を3枚でそろえます。できることは、ライトが「1店舗まで・予約は月100件まで・メールで通知・問い合わせはメールのみ」、スタンダードが「3店舗まで・予約は月500件まで・LINEで通知・売上レポートつき」、プレミアムが「店舗数は無制限・予約も無制限・専任の担当者がつく・他のシステムと連携」です。強調のしかたは「{{focus:t}}」にしてください（強調するカードは線を太くしてアクセント色にし、枠の上に「おすすめ」の札を付ける）。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。文字の大きさは、見出し32〜36pt、プラン名22pt、できること16pt以上、注記12pt以上。最下部に「※ 税抜。初期費用はかかりません。年払いにすると2か月分お得です。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「タイトルのみ」を選び、見出しに結論の1文を入れます。カードは「挿入」→「図形」→「四角形: 角を丸くする」で1枚作り、中に価格やできることを書いたら、コピーして3枚にします。3枚を全部選んで「図形の書式」→「配置」→「上揃え」と「左右に整列」を押すと、高さと間隔がそろいます。できることの行頭は、「ホーム」の「箇条書き」からチェックマークの記号を選びます。おすすめの1枚だけ、「図形の枠線」で太さ3pt・アクセント色にして、上に小さな角丸の四角を重ねて「おすすめ」と書きます。',
    'Googleスライドでは、「挿入」→「図形」から角丸の四角形を選んでカードを1枚作り、コピーして3枚並べます。3枚を選んで「配置」→「均等に配置」→「横方向」で間隔をそろえます。表を使う方法もあり、「挿入」→「表」で3列×6行の表を作ると、プラン名・料金・向いているお店・できること4行が自然に同じ高さになります。色を付けるのは、おすすめの列と「おすすめ」の札だけにします。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。幅960px・高さ540pxで、PowerPointの16:9（960pt×540pt）と同じ比率です。プランの数を変えるときは、HTMLのカードを足し引きし、CSSの「repeat(3, 1fr)」の数字も合わせて直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">予約管理サービス「ヨヤクノート」の料金</p>
  <h1 class="title">おすすめはスタンダード：3店舗まで月9,800円</h1>

  <div class="cards">
    <div class="card card-light">
      <span class="badge">おすすめ</span>
      <p class="plan">ライト</p>
      <p class="price"><span class="yen">¥</span><b>3,000</b><span class="per">/月</span></p>
      <p class="target">1店舗で始める個人のお店向け</p>
      <ul>
        <li>1店舗まで</li>
        <li>予約は月100件まで</li>
        <li>メールで通知</li>
        <li>問い合わせはメールのみ</li>
      </ul>
    </div>
    <div class="card card-standard">
      <span class="badge">おすすめ</span>
      <p class="plan">スタンダード</p>
      <p class="price"><span class="yen">¥</span><b>9,800</b><span class="per">/月</span></p>
      <p class="target">店舗を増やしていくお店向け</p>
      <ul>
        <li>3店舗まで</li>
        <li>予約は月500件まで</li>
        <li>LINEで通知</li>
        <li>売上レポートつき</li>
      </ul>
    </div>
    <div class="card card-premium">
      <span class="badge">おすすめ</span>
      <p class="plan">プレミアム</p>
      <p class="price"><span class="yen">¥</span><b>24,800</b><span class="per">/月</span></p>
      <p class="target">多店舗のチェーン向け</p>
      <ul>
        <li>店舗数は無制限</li>
        <li>予約も無制限</li>
        <li>専任の担当者がつく</li>
        <li>他のシステムと連携</li>
      </ul>
    </div>
  </div>

  <p class="note">※ 税抜。初期費用はかかりません。年払いにすると2か月分お得です。</p>
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

/* 3枚のカード。項目の順番と高さをそろえる */
.cards {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: {{gap:n}}px;
  margin: 30px 0 12px;
}
.card { position: relative; display: flex; flex-direction: column; padding: 22px 22px 16px; border: 2px solid #e3e5ea; border-radius: 12px; }
.plan { margin: 0; font-size: 22px; font-weight: 800; }
.price { white-space: nowrap; display: flex; align-items: baseline; gap: 4px; margin: 4px 0 0; }
.yen { font-size: 22px; font-weight: 800; }
.price b { font-size: 42px; font-weight: 800; line-height: 1.1; font-variant-numeric: tabular-nums; }
.per { font-size: 16px; color: #5a6070; }
.target { margin: 4px 0 0; padding-bottom: 12px; border-bottom: 1px solid #e3e5ea; font-size: 15px; color: #5a6070; }
ul { flex: 1; display: grid; grid-template-rows: repeat(4, 1fr); margin: 0; padding: 0; list-style: none; }
li { display: flex; align-items: center; gap: 10px; font-size: 17px; }
li::before { content: "✓"; width: 20px; font-weight: 800; color: #8a8f9c; }
.badge { display: none; position: absolute; top: -15px; left: 22px; padding: 3px 14px; border-radius: 999px; background: var(--accent); color: #fff; font-size: 14px; font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 強調するプラン（data-focus="standard" / "light" / "premium" / "none"） */
.slide[data-focus="light"] .card-light,
.slide[data-focus="standard"] .card-standard,
.slide[data-focus="premium"] .card-premium {
  border: 3px solid var(--accent);
  background: color-mix(in srgb, var(--accent) 6%, #fff);
}
.slide[data-focus="light"] .card-light .badge,
.slide[data-focus="standard"] .card-standard .badge,
.slide[data-focus="premium"] .card-premium .badge { display: inline-block; }
.slide[data-focus="light"] .card-light b,
.slide[data-focus="standard"] .card-standard b,
.slide[data-focus="premium"] .card-premium b,
.slide[data-focus="light"] .card-light li::before,
.slide[data-focus="standard"] .card-standard li::before,
.slide[data-focus="premium"] .card-premium li::before { color: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調するプラン',
      value: 'standard',
      options: [
        { value: 'standard', label: 'スタンダードを強調' },
        { value: 'premium', label: 'プレミアムを強調' },
        { value: 'light', label: 'ライトを強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'gap', label: 'カードの間隔（pt）', min: 12, max: 40, step: 4, value: 24, unit: '' },
  ],
  cautions: [
    'おすすめの札は1枚だけにします。「人気」「お得」「おすすめ」を別々のカードに付けると、結局どれを選べばいいのか伝わりません。どうしても分けたいなら、札は「おすすめ」だけにして、ほかは文章で補います。',
    'プランごとにできることの項目と順番をそろえます。ライトにだけ「サポート」の行があってプレミアムには無い、のようにずれると、聞き手が頭の中で並べ替えることになります。ないものは「なし」「—」と書いて行を残します。',
    '料金が税込か税抜か、月払いか年払いかを必ず書きます。見本のように注記で足りますが、料金の数字と離れた場所に書くと見落とされます。初期費用や最低利用期間があるときも、ここで書いておかないと契約のときにもめます。',
    '一番安いプランを、使い物にならないほど削らないでください。「結局スタンダードしか選べない」と見え、押し付けられた印象になります。ライトでも小さなお店なら困らない中身にしておくと、おすすめが信頼されます。',
  ],
  similar: [
    { slug: 'option-table', diff: '選択肢比較表型は、3つ以上の案を表にして細かく比べる型です。カードにすると読みにくい5つ以上のプランや、項目が多いときに向きます。' },
    { slug: 'recommend', diff: '推奨案強調型は、複数の案のうち推奨を1つ大きく示す型です。価格の違いよりも「なぜこの案か」の理由を見せたいときに使います。' },
    { slug: 'cost-breakdown', diff: 'コスト内訳型は、合計の費用が何にいくらかかるのかを分けて見せる型です。プランの選び方ではなく、費用の中身を説明するときに使います。' },
  ],
  faq: [
    {
      q: '料金プランは何種類に分けるのがよいですか？',
      a: '3種類が基本です。2種類だと選ぶ幅が足りず、4種類以上になると違いを覚えきれません。3つあれば、真ん中が自然とおすすめになり、上は「もっと使いたい人」、下は「まず試したい人」の受け皿になります。',
    },
    {
      q: '価格プランはPowerPointの表で作れますか？',
      a: '作れます。3列の表にして、1行目にプラン名、2行目に料金、3行目以降に中身を入れると、高さと項目の順番が自動でそろいます。おすすめの列だけ背景色と太い枠線を付ければ、見本と同じ見た目になります。カードを並べる方法は、見た目を自由にしやすい代わりに、位置をそろえる手間がかかります。',
    },
    {
      q: '料金プランの資料をAIに頼むときのコツはありますか？',
      a: 'プラン名・料金・できること（各4つ程度）を、自分で全部書いて渡すことです。「それらしい料金を考えて」と頼むと、根拠のない数字が入ります。強調するプランと、税抜か税込かも一言添えると、書き直しが減ります。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
