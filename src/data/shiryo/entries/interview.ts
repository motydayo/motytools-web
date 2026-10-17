import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'interview',
  no: 86,
  category: 'teian',
  name: 'インタビュー抜粋型',
  en: 'Interview excerpts',
  aka: ['ユーザーの声', 'インタビュー結果', '聞き取りの抜粋', '生の声', 'VOC'],
  mode: 'static',
  title: 'インタビュー結果の見せ方｜お客さまの声を抜き出して並べるスライドの作り方【見本つき】',
  description:
    '聞き取りで出た声を3つ抜き出し、テーマの札と話した人の属性を添えるインタビュー抜粋型のスライドを見本で解説。声の選び方、マーカーの引き方、PowerPoint・Googleスライドでの作り方、AIへの指示文、HTMLまでまとめました。',
  oneLine: '聞き取りで出た声を抜き出し、テーマごとに並べる。',
  what: [
    '見出しで「聞き取りから分かったこと」を言い切り、その下に実際の声を3つ、カードで並べる型です。各カードには、テーマの札（覚える手間・移行の不安・期待）、声の文、話した人の大まかな属性が入ります。声の中の大事な言葉だけをマーカーで強調し、いちばん下の帯で「5名中4名」のように人数でまとめています。',
    '数字だけの報告より、お客さまの生の声が1つ入るほうが、聞き手の心に残ります。ただ、声を並べるだけでは「たまたま言った人がいただけ」に見えてしまいます。決まりごとは、声の前に「何人中何人が言ったか」で言える結論を置くこと、声を3つまでに絞ること、話した人を特定できないようにすることです。',
  ],
  when: [
    '企画の最初に、お客さまや社内の人への聞き取り結果を共有するとき',
    '新製品の改善案を出す会議で、「なぜそれが必要か」を実際の声で裏づけるとき',
    '導入や変更の前後で、現場の不安や期待を経営層に伝えるとき',
    'アンケートの数字の裏にある、気持ちや理由を補足したいとき',
  ],
  avoid: [
    '声に加えて、導入後の数字の成果も見せたいとき（顧客の声＋成果型にする）',
    '聞き取りから想定の人物像を作りたいとき（ペルソナ型にする）',
    '話した人の名前や顔を出して、実績としてアピールしたいとき（事例紹介カード型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「インタビュー抜粋型（interview excerpts）」で作ってください。いちばん上に小さく「経理ソフト導入前のインタビュー（事務担当5名・2026年9月）」、その下に結論の見出し「導入前の不安は、操作を覚える手間に集中していた」を1行で置きます。その下に、同じ大きさのカードを3枚、横に並べてください（白い背景に細い灰色の枠線、角丸）。各カードは、上に小さな札（テーマ）、真ん中に声（20pt以上・太字）、下に細い線を引いて話した人の属性（15pt以上・灰色）を置きます。声の先頭には、アクセント色{{accent:t}}の大きな「 「 」を付けます。1枚目＝札「覚える手間」、声「新しい画面を覚え直すのが大変そうで、正直、今のままでいいかなと思っていました。」、属性「40代・小売業・経理担当」。2枚目＝札「移行の不安」、声「前のデータがちゃんと引き継げるのかが、いちばん心配でした。」、属性「50代・製造業・総務担当」。3枚目＝札「期待」、声「月末の入力作業が減るなら、多少の勉強はしてもいいと思っています。」、属性「30代・サービス業・経理担当」。声の中の大事な言葉（「覚え直すのが大変そう」「ちゃんと引き継げるのか」「月末の入力作業が減る」）のマーカーは「{{mark:t}}」にしてください（表示するときは、その言葉の下半分に、薄いアクセント色の線を引く）。テーマの札は「{{tag:t}}」にしてください。カードの下に、薄い灰色の横長の帯を置き、左にアクセント色の大きな数字「4名」（40pt程度）、右に「5名中4名が、最初の不安として「覚える手間」を挙げた」（21pt以上・太字）を書きます。最下部に「※ 発言は聞き取りをもとに要約。話した人が特定されないよう、属性は大まかに記載。」と注記（12pt以上）を入れてください。声と数字は私が書いたものだけを使い、新しい声や数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」でカードを1枚作り、中にテキストボックスを置いて、札・声・属性を入れます。声の中の大事な言葉だけをマーカーにするには、その言葉を選んで「ホーム」→「蛍光ペンの色」（「A」に線のアイコン）で薄い色を付けるのが手早いです。3枚をそろえるには、カードを選んで「図形の書式」→「配置」→「左右に整列」を使います。声を並べる前に、5名なら5名の発言を表にして、同じ意味の声を数えておくと、帯の人数が正確になります。',
    'Googleスライドでも、「挿入」→「図形」→「図形」で角丸四角形を3枚作り、声のテキストを入れます。大事な言葉は、選んで上のバーの「ハイライトの色」で薄い色にします。聞き取りの記録は、スプレッドシートに「話した人・発言・テーマ」の3列で入れておくと、同じテーマの声を数え直すのが楽です。録音から文字に起こすときは、話した人の名前をカードに書かず、「40代・小売業」程度の属性にします。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。大事な言葉は mark のタグで囲んであり、マーカーの表示・非表示は data-mark の1か所で切り替えられます。カードを増やしたいときは、1枚ぶん（card）をコピーして、声と属性を書き換えます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-mark="{{mark}}" data-tag="{{tag}}">
  <p class="kicker">経理ソフト導入前のインタビュー（事務担当5名・2026年9月）</p>
  <h1 class="title">導入前の不安は、操作を覚える手間に集中していた</h1>

  <div class="row">
    <div class="card">
      <span class="tag">覚える手間</span>
      <span class="q">新しい画面を<mark>覚え直すのが大変そう</mark>で、正直、今のままでいいかなと思っていました。</span>
      <span class="who">40代・小売業・経理担当</span>
    </div>
    <div class="card">
      <span class="tag">移行の不安</span>
      <span class="q">前のデータが<mark>ちゃんと引き継げるのか</mark>が、いちばん心配でした。</span>
      <span class="who">50代・製造業・総務担当</span>
    </div>
    <div class="card">
      <span class="tag">期待</span>
      <span class="q"><mark>月末の入力作業が減る</mark>なら、多少の勉強はしてもいいと思っています。</span>
      <span class="who">30代・サービス業・経理担当</span>
    </div>
  </div>

  <div class="sum">
    <span class="num">4<small>名</small></span>
    <span class="sum-text">5名中4名が、最初の不安として「覚える手間」を挙げた</span>
  </div>

  <p class="note">※ 発言は聞き取りをもとに要約。話した人が特定されないよう、属性は大まかに記載。</p>
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

.row { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin: 16px 0 12px; }
.card { display: flex; flex-direction: column; gap: 10px; padding: 14px 18px; border: 2px solid #e3e5ea; border-radius: 12px; }
.tag { align-self: flex-start; padding: 2px 12px; border-radius: 999px; background: #f3f4f7; color: #5a6070; font-size: 15px; font-weight: 800; }
.slide[data-tag="hide"] .tag { display: none; }
.q { position: relative; padding-left: 24px; font-size: 20px; font-weight: 700; line-height: 1.6; }
.q::before { content: "「"; position: absolute; left: 0; top: -4px; font-size: 30px; font-weight: 800; line-height: 1.3; color: var(--accent); }
mark { background: none; color: inherit; font-weight: 800; }
.slide[data-mark="on"] mark { background: linear-gradient(transparent 58%, color-mix(in srgb, var(--accent) 26%, #fff) 58%); }
.who { margin-top: auto; padding-top: 8px; border-top: 1px solid #e3e5ea; font-size: 15px; color: #5a6070; }

.sum { display: flex; align-items: center; gap: 18px; margin-bottom: 10px; padding: 8px 22px; border-radius: 12px; background: #f3f4f7; }
.num { font-size: 40px; font-weight: 800; line-height: 1.1; color: var(--accent); }
.num small { margin-left: 2px; font-size: 22px; }
.sum-text { font-size: 21px; font-weight: 800; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'mark',
      type: 'select',
      label: '大事な言葉のマーカー',
      value: 'on',
      options: [
        { value: 'on', label: '引く' },
        { value: 'off', label: '引かない' },
      ],
    },
    {
      key: 'tag',
      type: 'select',
      label: 'テーマの札',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '声を並べる前に、結論を数字で言えるようにします。「5名中4名が覚える手間を挙げた」のように人数で言えれば、声は「たまたま」ではなく「代表例」になります。人数が数えられない聞き取りなら、そう断ったうえで「主な声」として載せます。',
    '声の選び方に偏りを作らないこと。自分の主張に都合のよい声だけを選ぶと、後で聞き手が実際の声を聞いたときに信用を失います。反対の声や、予想外の声も、1つは入れるようにします。',
    '話した人を特定できないようにします。名前・会社名・部署・顔写真は載せず、「40代・小売業」程度の属性にします。社外の人の発言を載せるときは、あらかじめ載せてよいと確認をとっておきます。',
    '声は、聞いたとおりの言葉を使うこと。長い発言を短くするときも、意味を変えない範囲で切り取ります。言葉を勝手にきれいにしたり、足したりすると、生の声ではなくなります。要約したときは、注記で「要約」と断ります。',
  ],
  similar: [
    { slug: 'testimonial', diff: '顧客の声＋成果型は、お客さまの言葉と、導入後の数字の成果を並べる型です。インタビュー抜粋型は、成果ではなく、聞き取りで出たさまざまな声そのものを並べます。' },
    { slug: 'quote', diff: '引用強調型は、1つの言葉を大きく引用して印象づける型です。インタビュー抜粋型は、複数の声を並べて、共通する傾向を見せます。' },
    { slug: 'persona', diff: 'ペルソナ型は、聞き取りから共通点をまとめて1人の人物像に仕立てる型です。インタビュー抜粋型は、人物像にまとめる前の生の声を見せます。' },
  ],
  faq: [
    {
      q: 'インタビュー結果は、スライドで何件の声を載せればよいですか？',
      a: '3件が目安です。1件だと「たまたま」に見え、5件以上だと文字が小さくなって読まれません。たくさん聞いた場合は、テーマごとにいちばん典型的な声を1つずつ選び、残りは別の資料にまとめます。',
    },
    {
      q: '声の中の大事な言葉は、どうやって目立たせればよいですか？',
      a: '太字にするか、文字の下半分に薄い色のマーカーを引きます。色を付けるのは、1つの声につき1か所までにします。あちこち強調すると、どこが大事なのか分からなくなります。',
    },
    {
      q: 'お客さまの発言をスライドに載せるとき、許可は必要ですか？',
      a: '社外に見せる資料なら、聞き取りのときに「資料に載せてよいか」を確認しておきます。社内向けでも、個人が特定できる形で載せるときは本人の了解を取ります。名前を出さず、年代と業種程度の属性にしておくのが安全です。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
