// 資料レイアウトの図鑑の一覧ページ（/shiryo/）の文章。{n} は項目数に置き換わる。
// 英語版（/en/slides/）は後で作る。項目が0件の間は英語の一覧ページも記事も作られない。
import type { Category, HubText } from '../zukan';

export const SHIRYO_CATS_JA: Category[] = [
  { id: 'kousei', name: '構成・要点・比較の型', short: '構成・比較', desc: '話の骨組みを決め、要点と違いをひと目で見せる' },
  { id: 'data', name: 'データ・グラフの型', short: 'データ・グラフ', desc: '数字の大きさ・推移・内訳を正しく伝える' },
  { id: 'keikaku', name: '計画・業務・構造の型', short: '計画・構造', desc: '予定・役割・仕組みのつながりを1枚にまとめる' },
  { id: 'teian', name: '提案・事例・次の行動の型', short: '提案・行動', desc: '納得してもらい、決めてもらい、動いてもらう' },
];

export const SHIRYO_CATS_EN: Category[] = [
  { id: 'kousei', name: 'Structure and comparison', short: 'Structure', desc: 'Frame the story and make differences obvious' },
  { id: 'data', name: 'Data and charts', short: 'Charts', desc: 'Show size, change and breakdown honestly' },
  { id: 'keikaku', name: 'Plans, processes and systems', short: 'Plans', desc: 'Put schedules, roles and structures on one slide' },
  { id: 'teian', name: 'Proposals and next steps', short: 'Proposals', desc: 'Win agreement, get a decision, get people moving' },
];

export const SHIRYO_HUB_JA: HubText = {
  title: '資料レイアウトの名前一覧{n}種｜2カラム比較・縦棒グラフ・ガントチャートの型を見本で',
  description:
    '2カラム比較型・縦棒グラフ型・ガントチャート型・課題・原因・解決型など、スライドや資料でよく使うレイアウト{n}種の名前を、見本つきで引ける図鑑です。使いどころ、PowerPoint・Googleスライドでの作り方、AIに頼むときの指示文までまとめています。',
  h1: '資料レイアウトの図鑑',
  lead: 'スライドや資料でよく使う「型」{n}種を、見本と名前で引けます。どんな話に向くか、PowerPoint・Googleスライドでの作り方、ChatGPTやClaudeに頼むときの指示文つきです。',
  searchLabel: '型の名前で探す',
  searchPlaceholder: '例: 比較、グラフ、工程表',
  all: 'すべて',
  empty: '見つかりませんでした。「比較」「グラフ」「予定」のように短い言葉で探すか、絞り込みを解除してください。',
  clear: '絞り込みを解除',
  guide: {
    heading: '型の名前で頼むと、資料が一発で整う',
    paragraphs: [
      '「わかりやすいスライドにして」とAIに頼むと、箇条書きが並んだだけの資料や、毎ページ違う飾りの資料が返ってきがちです。スライドの配置には「2カラム比較型」「縦棒グラフ型」「ガントチャート型」のような決まった型があり、型ごとに「どこに何を置くか」の約束があります。',
      '1枚ずつ型の名前を指定して頼めば、AIも同僚も同じ形を思い浮かべられます。PowerPointやGoogleスライドで自分で作るときも、型が決まっていれば迷う時間が減ります。',
    ],
    steps: [
      { b: '資料全体の目的と相手を書く', s: '「部長会で、会計ソフトの乗り換えを決めてもらう」のように。誰に何を決めてほしいかで、どの型を使うかが決まります。' },
      { b: 'スライドごとに型の名前を書く', s: '「2枚目は課題・原因・解決型」「3枚目は2カラム比較型」と1枚に1つの型。1枚に型を2つ混ぜると読みにくくなります。' },
      { b: '各スライドの中身を書く', s: '数字・項目・結論を箇条書きで渡します。AIに数字を作らせないこと。架空の数字が混ざると資料の信用がなくなります。' },
      { b: '見た目の約束をまとめて書く', s: '「色はアクセント1色だけ」「見出しは1文で結論」「文字は18pt以上」。最後に全ページで同じ約束を守るよう頼みます。' },
    ],
    exampleLead: 'たとえば次のように頼みます。',
    example: `社内の部長会で「会計ソフトの乗り換え」を決めてもらうための資料を、16:9のスライド5枚で作ってください。

1枚目: タイトルスライド型。題名「会計ソフト乗り換えのご提案」、日付と部署名
2枚目: 課題・原因・解決型。課題「月末の締め作業に毎月6日かかる」、原因「銀行の明細を手で入力している」、解決策「銀行連携のあるクラウド会計に乗り換える」
3枚目: 2カラム比較型。案A（月額4万円・導入4か月）と案B（月額2.5万円・導入3か月）を同じ項目で比べ、案Bを推奨として強調
4枚目: ガントチャート型。4月〜6月の導入工程（初期設定・データ移行・試験運用・本番切り替え）
5枚目: 決裁依頼型。決めてほしいこと「案Bの契約」、期限「3月末」、費用「年30万円」

見た目の約束: アクセント色は青1色だけ、各スライドの見出しは結論を1文で、本文は18pt以上、数字は太く大きく。数字は上に書いたものだけを使い、新しい数字を足さないでください。`,
    copyLabel: 'この頼み方をコピー',
  },
  faq: [
    {
      q: 'スライドのレイアウトにはどんな種類がありますか？',
      a: '大きく分けると、話の骨組みを見せる型（目次型・2カラム比較型・ピラミッド型など）、数字を見せる型（縦棒グラフ型・円グラフ型・ウォーターフォール型など）、計画や仕組みを見せる型（ガントチャート型・組織図型・フロー型など）、提案して決めてもらう型（課題・原因・解決型・決裁依頼型など）の4つです。この図鑑はこの4分類で並べています。',
    },
    {
      q: 'ChatGPTやClaudeでスライドを作るとき、型の名前は伝わりますか？',
      a: '伝わります。ただし型の名前だけでは中身の配置がぶれるので、「左に現状、右に改善案」「棒は5本、最新の年だけ色を付ける」のように、どこに何を置くかを一緒に書いてください。各ページの「AIへの頼み方」は、そのまま貼れる形にしてあります。',
    },
    {
      q: 'PowerPointとGoogleスライドのどちらでも作れますか？',
      a: '作れます。この図鑑の型は、四角形・線・表・グラフといった基本の機能だけで組めるものです。各ページの「作り方」に、どのメニューを使うかを書いています。AIにHTMLでスライドを出してもらう人向けに、そのまま使えるHTMLとCSSも載せています。',
    },
    {
      q: '1枚のスライドに型をいくつも入れてもいいですか？',
      a: 'おすすめしません。1枚に伝えることは1つにして、型も1つにするのが基本です。比較とグラフを両方見せたいときは、2枚に分けた方が早く伝わります。どうしても1枚にまとめるなら、主役の型を決めて、もう一方は小さく添える程度にします。',
    },
  ],
};

export const SHIRYO_HUB_EN: HubText = {
  title: '{n} Slide Layout Names: Two-Column Comparison, Bar Chart, Gantt Chart & More',
  description:
    'Two-column comparisons, bar charts, Gantt charts, problem-solution slides and more: {n} slide layouts with examples, when to use each, how to build them in PowerPoint or Google Slides, and prompts you can paste into an AI.',
  h1: 'Slide Layout Library',
  lead: '{n} slide layouts, each with an example slide, its name, when it fits, how to build it, and a ready-to-paste AI prompt.',
  searchLabel: 'Search layouts by name',
  searchPlaceholder: 'e.g. compare, chart, timeline',
  all: 'All',
  empty: 'Nothing matched. Try a short word like “compare”, “chart” or “plan”, or clear the filters.',
  clear: 'Clear filters',
  guide: {
    heading: 'Name the layout, get the slide you meant',
    paragraphs: [
      'Ask an AI to “make clear slides” and you get walls of bullets. Slide layouts have names, and each name comes with a promise about what goes where. Name a layout per slide and both people and AI picture the same thing.',
    ],
    steps: [
      { b: 'State the goal and the audience', s: 'Who has to decide what? That decides which layouts you need.' },
      { b: 'Name one layout per slide', s: '“Slide 2: problem-cause-solution. Slide 3: two-column comparison.”' },
      { b: 'Give the content', s: 'Hand over the numbers and points yourself. Never let the AI invent numbers.' },
      { b: 'Set the visual rules once', s: 'One accent color, a one-sentence takeaway as each title, body text 18pt or larger.' },
    ],
    exampleLead: 'For example:',
    example: 'Make a five-slide 16:9 deck. Slide 1: title slide. Slide 2: problem-cause-solution. Slide 3: two-column comparison, recommending option B. Slide 4: Gantt chart, April to September. Slide 5: decision request. Use one blue accent color and only the numbers I gave you.',
    copyLabel: 'Copy this prompt',
  },
  faq: [
    {
      q: 'What kinds of slide layouts are there?',
      a: 'Four broad families: structure (agenda, two-column, pyramid), data (bar, pie, waterfall), plans and systems (Gantt, org chart, flow), and proposals (problem-solution, decision request).',
    },
  ],
};
