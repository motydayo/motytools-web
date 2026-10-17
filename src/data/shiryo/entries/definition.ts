import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'definition',
  no: 20,
  category: 'kousei',
  name: '定義カード型',
  en: 'Definition card',
  aka: ['用語の定義', '用語解説スライド', '言葉の説明', '定義スライド', 'キーワード解説'],
  mode: 'static',
  title: '用語の定義スライドとは？言葉の意味を1枚で伝える「定義カード型」の作り方【見本つき】',
  description:
    '言葉の意味をカードで言い切り、計算の例を添える「定義カード型」のスライドを見本で解説。定義文の書き方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '言葉の意味を1つのカードで言い切り、下に具体的な例を添える。',
  what: [
    'ひとつの言葉の意味を、スライドの中央の大きなカードに入れて言い切る型です。見本では、営業やサービスの資料でよく出る「NPS」を取り上げ、カードの上段に用語とそのよみ（ネット・プロモーター・スコア）を、下段に意味を2行の文で置いています。その下に、推奨者45%−批判者15%＝NPS+30という計算の例を3つの箱で並べ、答えだけをアクセント色で塗っています。',
    'この型のよさは、聞き手の知識をそろえてから本題に入れることです。決まりごとは、定義を「〜のこと」「〜した指標」のように1文で言い切ること。説明を足しすぎると辞書のようになってしまうので、定義文のあとは例を1つ添えるだけにします。用語が複数あるときは、スライドを分けず、用語対照表型に切り替えます。',
  ],
  when: [
    '専門用語や社内用語を、初めて聞く人にそろえて理解してもらいたいとき',
    '提案資料で、自社独自の指標や考え方（「〇〇スコア」など）を説明するとき',
    '研修で、これから何度も出てくる大事な言葉を最初に押さえておくとき',
    '契約・制度の説明で、言葉の意味の取り違えを防ぎたいとき',
  ],
  avoid: [
    '用語が3つ以上あり、まとめて見せたいとき（用語対照表型にして、表で一覧にする）',
    '定義が1文で言い切れず、条件や例外がたくさんあるとき（資料の別ページや付録で詳しく説明する）',
    '聞き手がすでに知っている言葉のとき（定義スライドは不要。いきなり本題に入る）',
  ],
  prompt:
    '16:9のスライドを1枚、「定義カード型（definition card）」で作ってください。いちばん上に小さく「今日使う言葉」と置きます。その下に、スライドの幅いっぱいの大きなカードを置き、左に太さ8ptのアクセント色{{accent:t}}の線、背景は淡いアクセント色にします。カードの中には、上段に用語「NPS」を{{term:t}}ptの太字（アクセント色）、その右に灰色20ptで「ネット・プロモーター・スコア」、下段に定義文「お客さまに「この会社を友人や同僚にすすめたいですか？」と0〜10点で聞き、愛着の強さを1つの数字にした指標。」を太字24ptで置いてください。カードの下には、計算の例として、枠線の箱を横に3つ並べます。1つ目「推奨者（9〜10点）：45%」、2つ目「批判者（0〜6点）：15%」、3つ目「NPS：+30」とし、箱の間に「−」「＝」を入れ、3つ目の箱だけアクセント色で塗って白い文字にします。例は「{{ex:t}}」にしてください。最下部に注記「※ 中立（7〜8点）40%は計算に入れない。数字は架空の例。」を13ptで入れます。色はアクセント色の1色だけで、ほかは白・灰色・黒にします。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「タイトルのみ」を選び、「挿入」→「図形」→「四角形: 角を丸くする」で幅いっぱいのカードを描きます。塗りつぶしを淡い色にし、左端の太い線は、細長い四角形を別に描いて重ねると作れます。用語・よみ・定義文は、カードの上に3つのテキスト ボックスとして置くと、大きさを別々に調整できます。計算の例は、「挿入」→「図形」から四角形を3つ並べ、間に「−」「＝」を打った小さなテキスト ボックスを置いてください。',
    'Googleスライドでは、「レイアウト」から「タイトルのみ」を選び、「挿入」→「図形」→「図形」から角丸四角形でカードを描きます。塗りの色は「塗りつぶしの色」→「カスタム」で淡い色を選びます。用語と定義文は、カードの上にテキストボックスとして重ねます。3つの箱を選んで「配置」→「均等に配置」→「横方向」を押すと、間隔がそろいます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。用語・よみ・定義文・例の数字を書き換えるだけで、別の言葉の定義スライドになります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-ex="{{ex}}">
  <p class="kicker">今日使う言葉</p>

  <div class="card">
    <p class="head"><span class="term">NPS</span><span class="read">ネット・プロモーター・スコア</span></p>
    <p class="def">お客さまに「この会社を友人や同僚にすすめたいですか？」と0〜10点で聞き、愛着の強さを1つの数字にした指標。</p>
  </div>

  <div class="ex">
    <div class="box"><span class="k">推奨者（9〜10点）</span><span class="v">45%</span></div>
    <span class="op">−</span>
    <div class="box"><span class="k">批判者（0〜6点）</span><span class="v">15%</span></div>
    <span class="op">＝</span>
    <div class="box result"><span class="k">NPS</span><span class="v">+30</span></div>
  </div>

  <p class="note">※ 中立（7〜8点）40%は計算に入れない。数字は架空の例。</p>
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
.kicker { margin: 0; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); }

/* 定義のカード */
.card {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  margin: 16px 0;
  padding: 24px 36px;
  border-left: 8px solid var(--accent);
  border-radius: 14px;
  background: color-mix(in srgb, var(--accent) 6%, #fff);
}
.head { margin: 0; display: flex; align-items: baseline; gap: 18px; }
.term { font-size: {{term:n}}px; font-weight: 800; line-height: 1.1; color: var(--accent); }
.read { font-size: 20px; color: #5a6070; }
.def { margin: 0; font-size: 24px; font-weight: 700; line-height: 1.55; }

/* 計算の例 */
.ex { display: flex; align-items: stretch; gap: 14px; }
.box { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 2px; padding: 10px 20px; border: 2px solid #e3e5ea; border-radius: 10px; }
.k { font-size: 16px; color: #5a6070; }
.v { font-size: 30px; font-weight: 800; font-variant-numeric: tabular-nums; line-height: 1.2; }
.op { align-self: center; font-size: 28px; font-weight: 800; color: #5a6070; }
.result { border-color: var(--accent); background: var(--accent); }
.result .k, .result .v { color: #fff; }
.note { margin: 10px 0 0; font-size: 13px; color: #8a8f9c; }

/* 例の表示（data-ex="show" / "hide"） */
.slide[data-ex="hide"] .ex, .slide[data-ex="hide"] .note { display: none; }
.slide[data-ex="hide"] .card { margin-bottom: 0; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'ex',
      type: 'select',
      label: '計算の例',
      value: 'show',
      options: [
        { value: 'show', label: '下に出す' },
        { value: 'hide', label: '出さない（定義だけ）' },
      ],
    },
    { key: 'term', label: '用語の文字の大きさ（pt）', min: 44, max: 72, step: 4, value: 56, unit: '' },
  ],
  cautions: [
    '定義文の中に、その言葉自体を使わないでください。「NPSとは、NPSを測る指標」のように同じ言葉で説明すると、何も伝わりません。聞き手がすでに知っている言葉だけで言い切ります。',
    '定義を長くしないでください。1文、長くても60字までです。条件や例外まで全部入れると、肝心の意味が埋もれます。細かい補足は注記か別のページに回します。',
    '例は1つに絞ってください。複数の例を並べると、聞き手は「どれが基本か」を迷います。例の数字は、本当の数字か、架空と分かる形で書きます。見本のように注記で「数字は架空の例」と添えると誠実です。',
    '略語は、初めて出るときに正式名称を一緒に出します。見本の「NPS」の横に「ネット・プロモーター・スコア」のよみを添えているのが、その例です。同じ資料の後ろで略語だけを使うときは、最初のここを必ず見返せるようにします。',
  ],
  similar: [
    { slug: 'glossary', diff: '用語対照表型は、用語と意味を表で何組も並べる型です。定義カード型は、大事な用語を1つに絞って大きく定義します。' },
    { slug: 'one-message', diff: '1メッセージ型は、言いたいことを1文で大きく見せる型です。定義カード型は、言葉の意味を決めておくための型で、主張は含みません。' },
    { slug: 'summary', diff: 'まとめ型は、話の要点を最後に箇条書きで振り返る型です。定義カード型は、話を始める前に言葉をそろえるために使います。' },
  ],
  faq: [
    {
      q: 'NPSの数字はどうやって計算するのですか？',
      a: '「この会社を友人や同僚にすすめる可能性は？」を0〜10点で聞き、9〜10点の人の割合（推奨者）から、0〜6点の人の割合（批判者）を引きます。7〜8点の人は計算に入れません。見本の例だと45%−15%で+30、範囲はマイナス100〜プラス100です。',
    },
    {
      q: '定義スライドは資料のどこに入れればいいですか？',
      a: '言葉が初めて出てくる直前に1枚入れます。資料の最初にまとめて入れると、聞き手は使う場面までに忘れてしまいます。用語が何個もあるなら、最後の付録として用語対照表型にまとめておくのも手です。',
    },
    {
      q: 'AIに定義文を書かせるときのコツは？',
      a: '「誰向けの資料か」「その人がすでに知っている言葉」を伝え、「60字以内、1文で、その言葉自体を使わずに」と条件を付けます。出てきた定義が自社の使い方と合っているか、必ず自分で確認してください。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
