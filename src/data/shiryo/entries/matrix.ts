import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'matrix',
  no: 8,
  category: 'kousei',
  name: 'マトリクス型（2×2）',
  en: '2×2 matrix',
  aka: ['2×2マトリクス', '4象限', '4象限マトリクス', 'ポジショニングマップ', '優先度マトリクス', '効果と手間の表'],
  mode: 'static',
  title: 'マトリクス型（2×2）とは？2つの軸で4つに仕分けるスライドの作り方',
  description:
    '2つの軸で4つの箱に分けて位置づける「マトリクス型（2×2）」のスライドを見本で解説。軸の決め方、各箱の名前の付け方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '2つの軸で4つの箱に分け、どれから手を付けるかを見せる。',
  what: [
    '縦と横の2つの軸で、物事を4つの箱に仕分ける型です。見本では、総務部の業務改善案8件を「効果の大きさ」と「かかる手間」で分け、左上の「すぐやる」（効果が大きく、手間が小さい）をアクセント色で強調しています。箱の名前は「何をするか」を動詞で書き、箱の名前の右には「効果 大・手間 小」のように位置を添えます。',
    'この型のよさは、「全部大事」に見える案件に、はっきりと優先順位が付くことです。決まりごとは、軸を2つだけにすること。3つ以上の軸で比べたい場合は、表の型を使います。また、軸の「大きい側」を、上と右にそろえます。向きが資料の中でばらつくと、読み手が毎回軸を読み直すことになります。',
  ],
  when: [
    '改善案や施策が多く、どれから着手するかを決める会議の資料をつくるとき',
    '自社と競合の商品を、価格と品質のような2つの軸の上に並べて見せたいとき',
    '顧客やプロジェクトを「重要度」と「緊急度」で仕分けたいとき',
    '案件を「やる・やらない」に分けた理由を、説明したいとき',
  ],
  avoid: [
    '比べる軸が3つ以上あるとき（選択肢比較表型にして、表で比べる）',
    '項目が20個を超えて、箱の中に収まらないとき（上位の数件に絞るか、優先順位リスト型にする）',
    '軸の大小を、数字で測れないとき（「なんとなく」で分けると、聞き手に理由を聞かれて答えられません。測れる物差しを先に決める）',
  ],
  prompt:
    '16:9のスライドを1枚、「マトリクス型（2×2 matrix）」で作ってください。いちばん上に小さく「総務部の業務改善（効果と手間で仕分け）」、その下に結論の見出し「改善案8件のうち、まず着手するのは3件」を1行で置きます。その下に、2×2の4つの箱を置き、箱と箱の間は{{gap:t}}pt空けます。左端に縦軸のラベル（上から「大」「効果の大きさ」「小」）、下に横軸のラベル（左から「小」「かかる手間」「大」）を灰色で入れてください。4つの箱の内容は、左上：「すぐやる」「効果 大・手間 小」請求書の電子化／会議室予約の一本化／備品の発注フォーム統一。右上：「計画して進める」「効果 大・手間 大」勤怠システムの入れ替え／紙の稟議の電子化。左下：「余裕があれば」「効果 小・手間 小」掲示板の整理／名刺の共有ルール。右下：「見送る」「効果 小・手間 大」社内ポータルの作り直し。強調のしかたは「{{focus:t}}」にしてください（強調する箱は、枠線をアクセント色にして太くし、薄い色で塗り、箱の名前と点もアクセント色にする）。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒です。文字の大きさは、見出し32〜36pt、箱の名前20pt、項目16pt、位置の説明（箱の名前の右に並べる）と軸のラベル15pt、注記13pt。最下部に「※ 効果は年間の削減時間、手間は準備にかかる担当者の作業日数をもとに、総務部で大小に分けた。」と入れてください。項目と数字は私が書いたものだけを使い、新しい案を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「SmartArt」→「マトリクス」から「基本マトリクス」を選ぶと、2×2の4つの箱が入ります。見本のように箱の大きさや文字を細かく整えたいときは、「挿入」→「図形」→「四角形: 角を丸くする」を4つ置き、4つを選んで「図形の書式」→「配置」で「左右に整列」「上下に整列」をして、高さ・幅をそろえます。軸のラベルは「テキスト ボックス」で置き、縦の軸は、文字を選んで「ホーム」→「文字列の方向」→「縦書き」にします。',
    'Googleスライドでは、「挿入」→「表」→「2×2」で表を作ると、箱の大きさが自然にそろいます。表の線の色と太さは、表の中を選んで「枠線の色」「枠線の太さ」で変えます。強調する箱だけ、セルの「塗りつぶしの色」を薄いアクセント色にします。案が点として位置を持つ場合（競合の価格と品質など）は、箱を使わずに十字線を引いて、その上に丸を置く方法もあります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。縦軸・横軸・4つの箱は1つのグリッドで並べているので、箱の文字が増えても配置がずれません。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">総務部の業務改善（効果と手間で仕分け）</p>
  <h1 class="title">改善案8件のうち、まず着手するのは3件</h1>

  <div class="grid">
    <!-- 縦軸（左端）。上が「効果が大きい」 -->
    <div class="y"><span>大</span><span class="axis-name">効果の大きさ</span><span>小</span></div>

    <div class="box tl">
      <span class="head">すぐやる</span>
      <span class="cond">効果 大・手間 小</span>
      <span class="items"><span>請求書の電子化</span><span>会議室予約の一本化</span><span>備品の発注フォーム統一</span></span>
    </div>
    <div class="box tr">
      <span class="head">計画して進める</span>
      <span class="cond">効果 大・手間 大</span>
      <span class="items"><span>勤怠システムの入れ替え</span><span>紙の稟議の電子化</span></span>
    </div>
    <div class="box bl">
      <span class="head">余裕があれば</span>
      <span class="cond">効果 小・手間 小</span>
      <span class="items"><span>掲示板の整理</span><span>名刺の共有ルール</span></span>
    </div>
    <div class="box br">
      <span class="head">見送る</span>
      <span class="cond">効果 小・手間 大</span>
      <span class="items"><span>社内ポータルの作り直し</span></span>
    </div>

    <!-- 横軸（下端）。右が「手間が大きい」 -->
    <div class="x"><span>小</span><span>かかる手間</span><span>大</span></div>
  </div>

  <p class="note">※ 効果は年間の削減時間、手間は準備にかかる担当者の作業日数をもとに、総務部で大小に分けた。</p>
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
  font-size: 18px;
  line-height: 1.4;
}
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); }
.title { margin: 0; font-size: 34px; font-weight: 800; line-height: 1.3; letter-spacing: 0.01em; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

.grid {
  flex: 1;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) 30px;
  gap: {{gap:n}}px;
  margin: 16px 0 10px;
  min-height: 0;
}
/* 縦軸は1列目に2行ぶん、横軸は3行目に2列ぶん */
.y { grid-column: 1; grid-row: 1 / span 2; display: flex; flex-direction: column; align-items: center; justify-content: space-between; font-size: 15px; font-weight: 700; color: #8a8f9c; }
.axis-name { writing-mode: vertical-rl; letter-spacing: 0.1em; }
.x { grid-column: 2 / span 2; grid-row: 3; display: flex; align-items: center; justify-content: space-between; font-size: 15px; font-weight: 700; color: #8a8f9c; }
.box { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-content: start; column-gap: 12px; padding: 12px 18px; border: 2px solid #e3e5ea; border-radius: 12px; background: #fff; min-height: 0; }
.tl { grid-column: 2; grid-row: 1; }
.tr { grid-column: 3; grid-row: 1; }
.bl { grid-column: 2; grid-row: 2; }
.br { grid-column: 3; grid-row: 2; }
.head { font-size: 20px; font-weight: 800; line-height: 1.3; }
.cond { align-self: center; font-size: 15px; color: #8a8f9c; white-space: nowrap; }
.items { grid-column: 1 / -1; display: grid; gap: 2px; margin-top: 8px; }
.items span { position: relative; padding-left: 14px; font-size: 16px; line-height: 1.5; color: #5a6070; }
.items span::before { content: ''; position: absolute; left: 0; top: 0.66em; width: 6px; height: 6px; border-radius: 50%; background: #c3c8d2; }

/* 強調する箱（つまみ: 強調する箱） */
.slide[data-focus="tl"] .tl,
.slide[data-focus="tr"] .tr { border-color: var(--accent); border-width: 3px; background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="tl"] .tl .head,
.slide[data-focus="tr"] .tr .head { color: var(--accent); }
.slide[data-focus="tl"] .tl .items span::before,
.slide[data-focus="tr"] .tr .items span::before { background: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する箱',
      value: 'tl',
      options: [
        { value: 'tl', label: '左上（すぐやる）を強調' },
        { value: 'tr', label: '右上（計画して進める）を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'gap', label: '箱の間隔（pt）', min: 4, max: 24, step: 4, value: 12, unit: '' },
  ],
  cautions: [
    '軸の向きは「大きい側が上と右」にそろえます。ある資料では右が「手間が大きい」、別の資料では右が「手間が小さい」になっていると、読み手が混乱します。1つの資料の中でも、全ページで向きを守ります。',
    '軸は、数字で測れる物差しにします。「効果」だけだと、人によって意味が変わります。見本のように「年間の削減時間」「担当者の作業日数」と、何で測ったかを注記に書いておくと、「なぜここに入るの」と聞かれても答えられます。',
    '箱の名前を、場所の説明（「右上」「第2象限」）にしないことです。「すぐやる」「見送る」のように、次にとる行動を動詞で書くと、聞き手が結論をつかめます。',
    '1つの箱に入れる項目は3つまでにします。それ以上は、文字が小さくなり、箱の大きさも不ぞろいになります。項目が多いときは、強調する箱だけ項目を書き、ほかは件数だけにします。',
  ],
  similar: [
    { slug: 'option-table', diff: '選択肢比較表型は、3つ以上の案を、複数の項目で表にして比べる型です。マトリクス型は、軸を2つに絞り、案を4つの箱に仕分けます。' },
    { slug: 'priority', diff: '優先順位リスト型は、やることを大事な順に1列で並べる型です。マトリクス型は、なぜその順になるのかを、2つの軸で説明するのに向いています。' },
    { slug: 'stakeholder', diff: 'ステークホルダー型は、関係者を「影響の大きさ」と「関心の高さ」の2軸で位置づける型で、マトリクス型の使い方のひとつです。' },
  ],
  faq: [
    {
      q: '2×2のマトリクスで、軸はどうやって決めればいいですか？',
      a: '聞き手が判断したいことに直結する物差しを2つ選びます。「どれから着手するか」を決めたいなら、効果と手間（またはお金）。「誰に優先して連絡するか」なら、影響の大きさと関心の高さ。軸の組み合わせが決まれば、4つの箱の名前も自然に決まります。',
    },
    {
      q: '4象限や、ポジショニングマップとの違いは何ですか？',
      a: '4象限は、2×2のマトリクス型の別名です。ポジショニングマップは、商品や会社を2つの軸の上に点で置いて、位置の違いを見せる図です。箱に分けるのがマトリクス型、点で置くのがポジショニングマップだと覚えてください。',
    },
    {
      q: 'PowerPointのSmartArtで2×2マトリクスは作れますか？',
      a: '作れます。「挿入」→「SmartArt」→「マトリクス」の「基本マトリクス」を選ぶと、4つの箱が入ります。ただし、軸のラベルや、箱の中の項目を細かく整えたいときは、図形を4つ置いて作る方が自由に直せます。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
