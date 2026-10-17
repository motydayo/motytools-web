import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'priority',
  no: 92,
  category: 'teian',
  name: '優先順位リスト型',
  en: 'Priority list',
  aka: ['優先順位', '優先度リスト', 'やることリスト', '施策の優先順位', 'ランキング形式', '優先順位づけ'],
  mode: 'static',
  title: '優先順位リスト型とは？やることを大事な順に並べるスライドの作り方【見本つき】',
  description:
    'やることを大事な順に並べ、実施する範囲に線を引く「優先順位リスト型」のスライドを見本で解説。効果と手間の見せ方、順位の決め方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: 'やることを大事な順に並べ、どこまで実施するかを示す。',
  what: [
    '左に順位の番号を丸で置き、右にやることの名前、ひとこと説明、効果と手間を並べた縦のリストです。見本ではネットショップの改善テーマを5つ並べ、上位3つの丸だけアクセント色にしています。3位と4位の間に点線を引き、「来期に実施するのはここまで」と書いて、やる・やらないの境目をはっきり見せています。',
    '決まりは、順位の理由を数字や段階で添えることです。見本では「効果」と「手間」を、丸の数（1〜3つ）と「小・中・大」の文字で示しています。効果が大きく手間が小さいものが上に来るので、聞き手は順位に納得できます。リストは5〜7件までに絞り、線を引いて「ここまでやる」を決めると、会議が「何を落とすか」の話に進みます。',
  ],
  when: [
    '来期にやる施策の候補が多く、予算や人手の都合で絞らなければならないとき',
    '課題や改善案を出し合ったあと、どれから手を付けるかを決める会議で',
    '依頼がたまっているとき、取り組む順番と、後回しにするものを説明したいとき',
    'お客さまの要望を、対応する順にして伝えたいとき',
  ],
  avoid: [
    '順位より、いつまでに誰がやるかを決める場面（アクション一覧型にする）',
    '効果と手間の2つの軸で、候補を図の上に位置づけたいとき（マトリクス型（2×2）にする）',
    '項目が10件以上あるとき（上位だけを載せて、全体は別の資料にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「優先順位リスト型（priority list）」で作ってください。いちばん上に小さく「ネットショップの改善テーマ（2027年度）」、その下に結論の見出し「来期は上位3つに集中：効果大・手間小の順」を1行で置きます。その下に、順位の丸（左）・やること（名前は太字、その下に1行の説明）・効果・手間の4列で、5行のリストを作ります。見出しの行（順位・やること・効果・手間）も付けてください。内容は、1位「配送料の自動見積もり：問い合わせの4割を占める配送料の質問をなくす」効果大・手間小、2位「会員ポイントの統合：実店舗とネットで同じポイントを使えるようにする」効果大・手間中、3位「売れ筋20点の写真の撮り直し：閲覧の多い商品から、見栄えをそろえる」効果中・手間小、4位「レビュー投稿の仕組み：購入者の声を商品ページに載せる」効果中・手間中、5位「英語サイトの開設：海外からの注文を受けられるようにする」効果小・手間大です。効果と手間は、3つの小さな丸のうち塗りつぶした数（大＝3、中＝2、小＝1）と、「小・中・大」の文字を並べて示します。3位と4位の間に点線を引き、線の上に「来期に実施するのはここまで」と書きます。色の付け方は「{{focus:t}}」にしてください。使う色はアクセント色{{accent:t}}と灰色だけです。順位の丸の直径は{{size:t}}ptにします。見出しは32〜36pt、やることの名前は20pt以上、説明は15pt以上、注記は12pt以上。最下部に「※ 効果と手間は担当部署の見積もり（3段階）。」と注記を入れてください。内容は私が書いたものだけを使い、新しい項目を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で4列×6行（見出しの行を含む）の表を作り、1列目に順位、2列目にやること、3・4列目に効果と手間を入れます。順位の丸は、「挿入」→「図形」→「楕円」を、Shiftキーを押しながらドラッグして正円にし、中に数字を書いて1列目の上に重ねます。丸を5個選んで「図形の書式」→「配置」→「左右中央揃え」と「上下に整列」を押すと、きれいにそろいます。実施する線は、「挿入」→「図形」→「線」で引き、「図形の枠線」→「実線/点線」から点線にします。効果と手間の丸は、記号の「●」と「○」を文字で並べると手早く作れます。',
    'Googleスライドでは、「挿入」→「表」で4列×6行を作り、「挿入」→「図形」→「図形」→「楕円」で順位の丸を重ねます。丸の並びは、複数選んで「配置」→「均等に配置」→「縦方向」でそろえます。点線は「挿入」→「線」→「線」で引き、ツールバーの「枠線のスタイル」（破線のマーク）で点線を選びます。順位の上位3つだけ丸にアクセント色を付けると、境目の線と合わせて「ここまで」が伝わります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。丸の大きさは、CSSの「--size」を変えると全部の丸が一緒に変わります。行を増やすときは、HTMLの行を足して、見出しの結論も見直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">ネットショップの改善テーマ（2027年度）</p>
  <h1 class="title">来期は上位3つに集中：効果大・手間小の順</h1>

  <div class="list">
    <div class="head"><span>順位</span><span>やること</span><span>効果</span><span>手間</span></div>

    <div class="row r1">
      <span class="rank">1</span>
      <span class="what"><b>配送料の自動見積もり</b><span>問い合わせの4割を占める配送料の質問をなくす</span></span>
      <span class="meter"><span class="dots"><i class="on"></i><i class="on"></i><i class="on"></i></span><em>大</em></span>
      <span class="meter"><span class="dots"><i class="on"></i><i></i><i></i></span><em>小</em></span>
    </div>
    <div class="row r2">
      <span class="rank">2</span>
      <span class="what"><b>会員ポイントの統合</b><span>実店舗とネットで同じポイントを使えるようにする</span></span>
      <span class="meter"><span class="dots"><i class="on"></i><i class="on"></i><i class="on"></i></span><em>大</em></span>
      <span class="meter"><span class="dots"><i class="on"></i><i class="on"></i><i></i></span><em>中</em></span>
    </div>
    <div class="row r3">
      <span class="rank">3</span>
      <span class="what"><b>売れ筋20点の写真の撮り直し</b><span>閲覧の多い商品から、見栄えをそろえる</span></span>
      <span class="meter"><span class="dots"><i class="on"></i><i class="on"></i><i></i></span><em>中</em></span>
      <span class="meter"><span class="dots"><i class="on"></i><i></i><i></i></span><em>小</em></span>
    </div>

    <div class="cut"><span>来期に実施するのはここまで</span></div>

    <div class="row r4">
      <span class="rank">4</span>
      <span class="what"><b>レビュー投稿の仕組み</b><span>購入者の声を商品ページに載せる</span></span>
      <span class="meter"><span class="dots"><i class="on"></i><i class="on"></i><i></i></span><em>中</em></span>
      <span class="meter"><span class="dots"><i class="on"></i><i class="on"></i><i></i></span><em>中</em></span>
    </div>
    <div class="row r5">
      <span class="rank">5</span>
      <span class="what"><b>英語サイトの開設</b><span>海外からの注文を受けられるようにする</span></span>
      <span class="meter"><span class="dots"><i class="on"></i><i></i><i></i></span><em>小</em></span>
      <span class="meter"><span class="dots"><i class="on"></i><i class="on"></i><i class="on"></i></span><em>大</em></span>
    </div>
  </div>

  <p class="note">※ 効果と手間は担当部署の見積もり（3段階）。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --size: {{size:n}}px; /* 順位の丸の直径 */
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
.list { flex: 1; display: flex; flex-direction: column; margin: 14px 0 8px; min-height: 0; }

/* 列: 順位 / やること / 効果 / 手間 */
.head, .row { display: grid; grid-template-columns: calc(var(--size) + 28px) 1fr 96px 96px; align-items: center; }
.head { padding-bottom: 6px; border-bottom: 1px solid #e3e5ea; font-size: 14px; font-weight: 700; color: #8a8f9c; }
.row { flex: 1; border-bottom: 1px solid #e3e5ea; }
.rank { display: flex; align-items: center; justify-content: center; width: var(--size); height: var(--size); border-radius: 50%; background: #f3f4f7; color: #5a6070; font-size: calc(var(--size) * 0.55); font-weight: 800; }
.what { display: flex; flex-direction: column; padding-right: 12px; }
.what b { font-size: 21px; font-weight: 800; }
.what span { font-size: 15px; color: #5a6070; }
.meter { display: flex; align-items: center; gap: 8px; }
.dots { display: flex; gap: 4px; }
.dots i { box-sizing: border-box; width: 12px; height: 12px; border: 2px solid #c3c8d2; border-radius: 50%; }
.dots i.on { background: #5a6070; border-color: #5a6070; }
.meter em { font-style: normal; font-size: 16px; font-weight: 700; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 実施する線（点線） */
.cut { position: relative; height: 26px; display: flex; align-items: center; }
.cut::before { content: ""; position: absolute; left: 0; right: 0; top: 50%; border-top: 2px dashed #8a8f9c; }
.cut span { position: relative; margin-left: 28px; padding: 0 10px; background: #fff; font-size: 14px; font-weight: 700; color: #5a6070; }

/* 色の付け方（data-focus="top3" / "top1" / "none"） */
.slide[data-focus="top3"] :is(.r1, .r2, .r3) .rank,
.slide[data-focus="top1"] .r1 .rank { background: var(--accent); color: #fff; }
.slide[data-focus="top3"] :is(.r4, .r5) { opacity: 0.62; }
.slide[data-focus="top1"] .cut,
.slide[data-focus="none"] .cut { visibility: hidden; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '色を付ける順位',
      value: 'top3',
      options: [
        { value: 'top3', label: '上位3つに色を付ける（実施の線あり）' },
        { value: 'top1', label: '1位だけに色を付ける' },
        { value: 'none', label: '色を付けない' },
      ],
    },
    { key: 'size', label: '順位の丸の大きさ（pt）', min: 32, max: 56, step: 4, value: 44, unit: '' },
  ],
  cautions: [
    '順位を付けた理由を、必ず1つは添えます。順位だけを並べると「なぜこれが1位か」と聞かれ、会議が順位の議論から先に進みません。見本のように効果と手間を段階で示すか、「問い合わせの4割」のような数字を一言入れます。',
    '同じ順位を2つ作らないでください。「どれも大事」で同率にすると、リソースの足りない中でどれを選ぶかという目的に答えられません。同じに見えるときは、効果が大きいもの・手間が小さいものを上にします。',
    '色を付けるのは、実際にやる範囲だけにします。全部の丸にアクセント色を付けると、境目が見えなくなります。線の上は色付き、下は薄くする、と見た目でも分けると伝わります。',
    '線の下の項目を、消さずに載せておくのも大事です。「やらない」ではなく「来期はやらない」と分かれば、関係者も納得しやすく、再来期の候補にも引き継げます。',
  ],
  similar: [
    { slug: 'matrix', diff: 'マトリクス型（2×2）は、効果と手間のような2つの軸で候補を4つの箱に分けて位置づける型です。順位を付ける前の整理に向いています。' },
    { slug: 'action-list', diff: 'アクション一覧型は、誰が・何を・いつまでにやるかを表にする型です。優先順位が決まったあと、実行の担当と期限を決めるために使います。' },
    { slug: 'checklist', diff: 'チェックリスト型は、確認する項目と済んだかどうかを並べる型です。順位ではなく、やり終えたかの確認に使います。' },
  ],
  faq: [
    {
      q: '優先順位は、どんな基準で決めればよいですか？',
      a: '「効果の大きさ」と「手間（費用・時間）」の2つで決めるのが基本です。効果が大きく手間が小さいものが1位になります。ほかに、期限が決まっているもの、ほかの作業の前提になるものを上げる考え方もあります。基準は資料の中に書いておくと、順位に納得してもらえます。',
    },
    {
      q: '優先順位のスライドは、何件まで載せてよいですか？',
      a: '5〜7件が上限の目安です。それ以上は文字が小さくなり、会議でも全部を議論できません。上位の5件を載せ、残りは「その他の候補」として別の資料に回します。',
    },
    {
      q: '優先順位の資料をAIに作らせるときのコツはありますか？',
      a: '並べる項目と、効果・手間の評価を自分で決めて渡すことです。「優先順位をつけて」とだけ頼むと、AIが一般論で順位を付けてしまい、会社の事情に合いません。「この順位で資料にして」と順位を決めてから頼むと、間違いが減ります。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
