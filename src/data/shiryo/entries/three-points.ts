import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'three-points',
  no: 4,
  category: 'kousei',
  name: '3ポイント並列型',
  en: 'Three-point layout',
  aka: ['3つの柱', '3列レイアウト', '3カラム', '要点3つ', '3つの理由', '3本柱'],
  mode: 'static',
  title: '3ポイント並列型とは？要点を3つ横に並べるスライドの作り方【PowerPoint】',
  description:
    '要点を3つの柱にして横に並べる「3ポイント並列型」のスライドを見本で解説。3つに絞る理由、柱の中身のそろえ方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '要点を3つの柱にして、同じ形で横に並べる。',
  what: [
    'スライドを横に3等分し、要点を3つの柱として並べる型です。見本では「新しい在庫システムを選ぶ理由」を3つに分け、どの柱も「番号・見出し・変化を示す数字・短い説明」の順に同じ形で書いています。1つ目を強調するか、3つとも同じ強さにするかは、伝えたい内容で決めます。',
    'この型のよさは、聞き手が「理由は3つあるのだな」と最初に見通しを持てることです。3つは人が一度に覚えられるちょうどいい数で、1つでは弱く、5つでは覚えきれません。決まりごとは、3つの柱の形と順番をそろえること。柱ごとに書く項目が違うと、並べて比べる意味がなくなります。',
  ],
  when: [
    '提案や稟議で、「選ぶ理由」「やる理由」を3つに整理して見せたいとき',
    '新商品・新サービスの特長を、3つの強みにまとめて伝えたいとき',
    '施策や方針を3本柱で示し、あとのスライドで1本ずつ詳しく説明する前置きにしたいとき',
    '会社紹介や事業紹介で、「私たちの強み」を短く伝えたいとき',
  ],
  avoid: [
    '3つに順番や前後関係があるとき（フロー型にして矢印でつなぐ）',
    '要点が4つ以上あり、無理に3つへまとめると意味が変わってしまうとき（選択肢比較表型や、箇条書きのまとめ型にする）',
    '3つの要点に重さの差が大きく、1つだけが決め手のとき（1メッセージ型で決め手だけを言い切る）',
  ],
  prompt:
    '16:9のスライドを1枚、「3ポイント並列型（three-point layout）」で作ってください。いちばん上に小さく「在庫管理システムの入れ替え」、その下に結論の見出し「新しい在庫システムを選ぶ理由は、この3つ」を1行で置きます。その下に、同じ大きさの柱（角の丸い四角）を横に3つ並べ、柱と柱の間は{{gap:t}}pt空けます。どの柱も上から「番号の丸」「見出し」「変化を示す数字（前→後）」「数字の説明」「短い説明文」の順に同じ形で並べてください。内容は、1つ目：見出し「入力の手間が半分に」、数字「90分→45分」、説明「1日の入出庫の入力時間」、文「バーコードを読み取るだけで記録。手入力は例外のときだけです。」。2つ目：「欠品が減る」、「12件→3件」、「月あたりの欠品」、「在庫が基準を下回ると担当者に自動で通知。発注の遅れを防ぎます。」。3つ目：「すぐ使い始められる」、「5日→2日」、「初期設定の日数」、「今のデータをそのまま取り込めます。社員向けの説明会は半日で済みます。」。強調のしかたは「{{focus:t}}」にしてください（強調する柱は枠線をアクセント色にして太くし、薄い色で塗り、後ろの数字もアクセント色にする。3つとも同じ強さのときは、番号の丸だけをアクセント色にする）。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒です。文字の大きさは、見出し32〜36pt、柱の見出し24pt、数字（後）40pt、数字（前）22pt、説明文16pt、注記13pt。最下部に「※ 入力時間・欠品は、倉庫2か所での2か月の試験運用の平均。初期設定の日数は、現行システムの導入時との比較。」と入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で、見出しの下に内容の枠が並ぶレイアウトを選び、「挿入」→「図形」→「四角形: 角を丸くする」を3つ置きます。1つ目を作り込んでから、コピーして貼り付け、「図形の書式」→「配置」→「左右に整列」で間隔を等しくします。柱の中は、1つの図形に文字を全部入れず、番号の丸・見出し・数字・説明を別々のテキストボックスで置くと、3つの柱で高さが自然にそろいます。',
    'Googleスライドでも作り方は同じで、「挿入」→「図形」→「図形」→「角丸四角形」を3つ置きます。複数の図形を選んで「配置」→「均等に配置」→「横方向」を押すと、間隔がそろいます。3つの柱を同じ形にするため、1つ目を完成させてからコピーして中身だけ書き換えると、ずれが出ません。SmartArtに近いものを使いたいときは、PowerPointなら「挿入」→「SmartArt」→「リスト」から横に並ぶ型を選び、文字を入れる方法もあります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。柱は横3等分のグリッドで並べているので、柱の中の文を書き換えても幅がずれません。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">在庫管理システムの入れ替え</p>
  <h1 class="title">新しい在庫システムを選ぶ理由は、この3つ</h1>

  <div class="cards">
    <div class="card">
      <span class="num">1</span>
      <span class="head">入力の手間が半分に</span>
      <span class="stat"><span class="from">90分</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg><b class="to">45分</b></span>
      <span class="label">1日の入出庫の入力時間</span>
      <span class="body">バーコードを読み取るだけで記録。手入力は例外のときだけです。</span>
    </div>
    <div class="card">
      <span class="num">2</span>
      <span class="head">欠品が減る</span>
      <span class="stat"><span class="from">12件</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg><b class="to">3件</b></span>
      <span class="label">月あたりの欠品</span>
      <span class="body">在庫が基準を下回ると担当者に自動で通知。発注の遅れを防ぎます。</span>
    </div>
    <div class="card">
      <span class="num">3</span>
      <span class="head">すぐ使い始められる</span>
      <span class="stat"><span class="from">5日</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg><b class="to">2日</b></span>
      <span class="label">初期設定の日数</span>
      <span class="body">今のデータをそのまま取り込めます。社員向けの説明会は半日で済みます。</span>
    </div>
  </div>

  <p class="note">※ 入力時間・欠品は、倉庫2か所での2か月の試験運用の平均。初期設定の日数は、現行システムの導入時との比較。</p>
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

.cards { flex: 1; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: {{gap:n}}px; margin: 20px 0 12px; min-height: 0; }
.card { display: flex; flex-direction: column; padding: 20px 22px; border: 2px solid #e3e5ea; border-radius: 12px; background: #fff; }
.num { display: grid; place-items: center; width: 40px; height: 40px; border-radius: 50%; background: #f3f4f7; color: #5a6070; font-size: 20px; font-weight: 800; font-variant-numeric: tabular-nums; }
.head { margin-top: 12px; font-size: 24px; font-weight: 800; line-height: 1.3; }
.stat { display: flex; align-items: center; gap: 8px; margin-top: 14px; font-variant-numeric: tabular-nums; line-height: 1.1; }
.from { font-size: 22px; font-weight: 700; color: #8a8f9c; }
.stat svg { width: 20px; height: 20px; color: #8a8f9c; flex: none; }
.to { font-size: 40px; font-weight: 800; }
.label { margin-top: 4px; font-size: 15px; color: #5a6070; }
.body { margin-top: auto; padding-top: 12px; border-top: 1px solid #e3e5ea; font-size: 16px; line-height: 1.5; color: #5a6070; }

/* 強調のしかた（つまみ: 強調） */
.slide[data-focus="all"] .num { background: var(--accent); color: #fff; }
.slide[data-focus="1"] .card:nth-child(1),
.slide[data-focus="2"] .card:nth-child(2),
.slide[data-focus="3"] .card:nth-child(3) { border-color: var(--accent); border-width: 3px; background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="1"] .card:nth-child(1) .num,
.slide[data-focus="2"] .card:nth-child(2) .num,
.slide[data-focus="3"] .card:nth-child(3) .num { background: var(--accent); color: #fff; }
.slide[data-focus="1"] .card:nth-child(1) .to,
.slide[data-focus="2"] .card:nth-child(2) .to,
.slide[data-focus="3"] .card:nth-child(3) .to { color: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調',
      value: 'all',
      options: [
        { value: 'all', label: '3つとも同じ強さ' },
        { value: '1', label: '1つ目を強調' },
        { value: '2', label: '2つ目を強調' },
        { value: '3', label: '3つ目を強調' },
      ],
    },
    { key: 'gap', label: '柱の間隔（pt）', min: 16, max: 40, step: 8, value: 24, unit: '' },
  ],
  cautions: [
    '3つの柱は、書く項目と順番を完全にそろえます。1つ目だけ数字があり、2つ目と3つ目は文章だけ、のようにばらつくと、聞き手は違いを探してしまい、肝心の中身が頭に入りません。',
    '3つの要点は、内容が重ならないようにします。「入力が楽」「作業が早い」のように似た理由を並べると、実質1つの理由を言い換えただけになり、説得力が落ちます。',
    '無理に3つにまとめないことです。理由が2つしかないのに3つ目をひねり出すと、弱い理由が全体の信用を下げます。理由が4つあるときは、近いものをまとめるか、重要な3つだけを残して残りは補足に回します。',
    '柱の中の文字を詰め込みすぎないことです。1つの柱は、見出し・数字・説明文の3段階まで。長い説明文を入れると、スライドを読み上げる時間になってしまいます。',
  ],
  similar: [
    { slug: 'flow', diff: 'フロー型は、手順や流れを矢印でつなぐ型です。3ポイント並列型の3つには順番が無く、並べ替えても意味が変わりません。' },
    { slug: 'claim-evidence', diff: '主張・根拠・示唆型は、言いたいこと・支える事実・その意味という役割の違う3つを並べる型です。3ポイント並列型は、同じ役割の要点を3つ並べます。' },
    { slug: 'summary', diff: 'まとめ型は、話の要点を最後に箇条書きで振り返る型です。3ポイント並列型は、数字や短い説明まで添えて、柱を1つずつ見せます。' },
  ],
  faq: [
    {
      q: 'なぜ「3つ」にまとめると伝わりやすいのですか？',
      a: '人が一度に覚えやすい数だからです。2つでは対比に見え、4つ以上になると覚えきれません。3つ並べると「ひとまとまり」に見える効果もあり、プレゼンや提案で多く使われています。ただし、実際の理由が3つに満たないときに無理に増やす必要はありません。',
    },
    {
      q: '3つの柱はPowerPointのSmartArtで作れますか？',
      a: '作れます。「挿入」→「SmartArt」から「リスト」の中の横に並ぶ型を選び、文字を入れていきます。ただし数字を大きく見せる、柱の高さをそろえる、1つだけ強調するといった細かい整え方は図形で作る方が自由です。急ぎのときはSmartArt、見映えを細かく詰めたいときは図形、と使い分けます。',
    },
    {
      q: '3つの柱の順番は、どう決めればいいですか？',
      a: '聞き手が最も気にすることを1つ目にします。決め手になる理由が1つだけ強いなら、それを1つ目か3つ目（最後）に置き、強調しておくと印象に残ります。順番に意味がある場合は、3ポイント並列型ではなくフロー型を使います。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
