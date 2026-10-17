import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'section-divider',
  no: 14,
  category: 'kousei',
  name: 'セクション扉型',
  en: 'Section divider',
  aka: ['章扉', '中表紙', 'セクションスライド', '区切りスライド', '章の切り替え'],
  mode: 'static',
  title: 'セクション扉とは？章の切り替わりを1枚で見せる区切りスライドの作り方【見本つき】',
  description:
    '章の切り替わりを大きな章番号と題名だけで示す「セクション扉型」のスライドを見本で解説。今どの章かを示す目次の入れ方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '章の始まりを、大きな章番号と題名だけで知らせる区切りの1枚。',
  what: [
    '資料の章が変わるところに1枚だけ挟む、文字の少ないスライドです。見本では「02」という章番号を画面の左に大きく置き、その下に章の題名「お客さまの声から見えた3つの課題」と、この章で何を見るかの一言を添えています。いちばん下には全4章を横に並べ、今いる第2章だけを太字とアクセント色の線で示しています。',
    'この型のよさは、聞き手に「いま話が変わった」と知らせて、頭を切り替えてもらえることです。決まりごとは、このページに内容を詰め込まないこと。説明や数字は次のスライドに回し、扉には章番号・題名・一言だけを置きます。全部の章で位置・色・大きさをそろえると、資料全体の骨組みが伝わります。',
  ],
  when: [
    '20枚を超える資料や報告会の資料を、3〜5つの章に分けて見せたいとき',
    '話題が大きく変わる前に、聞き手に一呼吸おいてもらいたいとき',
    '長い説明の途中で「いまどこの話か」を見失わせたくないとき',
    '1つの資料を、読みたい章だけ拾い読みできるようにしておきたいとき',
  ],
  avoid: [
    '資料が10枚以下で、章を分けるほどでもないとき（扉を挟むと枚数だけ増える。目次型を最初に置くだけで十分）',
    '章の頭で結論や数字を先に見せたいとき（扉にせず、数字インパクト型や1メッセージ型にする）',
    'これから話す順番を最初に見せたいとき（章ごとの扉ではなく、目次型を1枚置く）',
  ],
  prompt:
    '16:9のスライドを1枚、「セクション扉型（section divider）」で作ってください。いちばん上に小さく「2026年度 上期 事業報告会」と置きます。中央には、章番号「02」を140pt前後の太字で、その下に章の題名「お客さまの声から見えた3つの課題」を48ptの太字で、さらにその下に一言「解約の理由を、電話とアンケート480件から読み解く」を20ptで置いてください。いちばん下には、全4章の名前（01 売上の振り返り／02 お客さまの声／03 来期の打ち手／04 お願いしたいこと）を横に4つ等間隔で並べ、各章の上に細い線を引きます。今いる「02 お客さまの声」だけ、線をアクセント色にして文字を太字にし、ほかは灰色にします。背景は「{{bg:t}}」、文字の位置は「{{align:t}}」にしてください。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒です。章番号は読みやすい大きさのまま装飾を足さず、図やイラストは入れないでください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「セクション見出し」のレイアウトを選ぶと、題名と補足の文字枠だけが入った扉用のスライドから始められます。章番号は「挿入」→「テキスト ボックス」で別に作り、文字サイズを140pt前後・太字にして題名の上に置きます。いちばん下の章の並びは、4つのテキスト ボックスを横に並べ、それぞれの上に「挿入」→「図形」→「線」を引きます。4つを選んで「配置」→「左右にそろえる」を押すと、間隔が等しくなります。今いる章の線だけアクセント色に変え、太さを3ptにします。',
    'Googleスライドでは、「スライド」→「レイアウトを適用」で「セクション見出し」を選びます。章番号と章の並びの作り方はPowerPointと同じで、「配置」→「均等に配置」→「横方向」で間隔をそろえます。背景をアクセント色で塗るときは、「背景」→「色」から選び、文字は白に変えてください。章ごとにスライドを複製し、「今いる章」の線と太字を付け替えていくと、全部の扉の位置が自然にそろいます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。章番号・題名・一言は文字を書き換えるだけで、今いる章は <li class="now"> を付ける行を移すだけで変わります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-bg="{{bg}}" data-align="{{align}}">
  <p class="kicker">2026年度 上期 事業報告会</p>

  <div class="main">
    <p class="no">02</p>
    <h1 class="title">お客さまの声から見えた3つの課題</h1>
    <p class="sub">解約の理由を、電話とアンケート480件から読み解く</p>
  </div>

  <ol class="list">
    <li><b>01</b>売上の振り返り</li>
    <li class="now"><b>02</b>お客さまの声</li>
    <li><b>03</b>来期の打ち手</li>
    <li><b>04</b>お願いしたいこと</li>
  </ol>
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

/* 章番号・題名・一言 */
.main { flex: 1; display: flex; flex-direction: column; justify-content: center; }
.no { margin: 0; font-size: 140px; font-weight: 800; line-height: 1; letter-spacing: -0.02em; color: var(--accent); font-variant-numeric: tabular-nums; }
.title { margin: 8px 0 0; font-size: 48px; font-weight: 800; line-height: 1.25; }
.sub { margin: 14px 0 0; font-size: 20px; color: #5a6070; }

/* 全4章の並び。今いる章だけ線と文字を強くする */
.list { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.list li { padding-top: 10px; border-top: 3px solid #e3e5ea; font-size: 16px; color: #8a8f9c; }
.list b { margin-right: 8px; font-variant-numeric: tabular-nums; }
.list .now { border-top-color: var(--accent); color: #1f2430; font-weight: 800; }

/* 文字の位置（data-align="left" / "center"） */
.slide[data-align="center"] .main { align-items: center; text-align: center; }

/* 背景（data-bg="white" / "accent"） */
.slide[data-bg="accent"] { background: var(--accent); color: #fff; }
.slide[data-bg="accent"] .kicker { color: rgba(255, 255, 255, 0.85); }
.slide[data-bg="accent"] .no { color: rgba(255, 255, 255, 0.62); }
.slide[data-bg="accent"] .sub { color: rgba(255, 255, 255, 0.9); }
.slide[data-bg="accent"] .list li { border-top-color: rgba(255, 255, 255, 0.35); color: rgba(255, 255, 255, 0.85); }
.slide[data-bg="accent"] .list .now { border-top-color: #fff; color: #fff; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'bg',
      type: 'select',
      label: '背景',
      value: 'white',
      options: [
        { value: 'white', label: '白い背景' },
        { value: 'accent', label: 'アクセント色の背景' },
      ],
    },
    {
      key: 'align',
      type: 'select',
      label: '文字の位置',
      value: 'left',
      options: [
        { value: 'left', label: '左寄せ' },
        { value: 'center', label: '中央' },
      ],
    },
  ],
  cautions: [
    '扉に説明を足さないでください。章の中身を3行書きたくなっても、それは次のスライドの仕事です。扉に文字が多いと、聞き手は「ここも読まなければ」と身構えて、一呼吸おく役目が消えます。',
    '章ごとに色や位置を変えないでください。第1章は左寄せ、第2章は中央、のようにぶれると、扉を見ても「同じ資料の続きだ」と気づけません。複製して章番号と題名だけを書き換えるのが確実です。',
    '「今いる章」を示す目次は、全部の章を同じ書式にして、今の章だけを変えます。完了した章を灰色にし、今の章を赤にし、次の章を青にするなど、色を3種類使うと、どれが大事なのか分からなくなります。',
    '章の数を増やしすぎないでください。扉が7枚も8枚も出てくると、扉そのものが資料の邪魔になります。3〜5章に収めるか、小さい区切りは扉にせず見出しだけで済ませます。',
  ],
  similar: [
    { slug: 'agenda', diff: '目次型は、資料の最初に「これから話す順番」を全部見せる型です。セクション扉型は、章が始まるたびに1枚ずつ挟んで、いまの位置を知らせます。' },
    { slug: 'title-slide', diff: 'タイトルスライドは、資料全体の表紙で、題名・日付・発表者を示します。セクション扉型は、資料の途中で章の切り替わりを示すもので、発表者の名前などは載せません。' },
    { slug: 'one-message', diff: '1メッセージ型は、1枚で言いたい結論を1文だけ大きく見せる型です。セクション扉型は結論ではなく「これから何の話か」を知らせるだけです。' },
  ],
  faq: [
    {
      q: 'セクション扉は何枚目ごとに入れればいいですか？',
      a: '枚数ではなく、話の区切りで決めます。目安は、1つの章が4〜8枚あるときです。1章が2枚しかないなら扉は不要で、前後の章とまとめた方がすっきりします。',
    },
    {
      q: 'PowerPointの「セクション」機能と同じものですか？',
      a: '別のものです。PowerPointの「セクション」は、スライドを章ごとにまとめて整理するための編集用の機能で、発表画面には何も出ません。この型は、聞き手に見せるための1枚のスライドです。両方使うと、編集中の整理と発表中の見せ方がそろいます。',
    },
    {
      q: '扉に写真やイラストを使ってもいいですか？',
      a: '使えます。ただし、章ごとに違う絵を載せると、統一感が消えます。使うなら全部の章で同じ位置・同じ大きさにそろえてください。迷うなら、見本のように文字だけで作るのが一番失敗しません。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
