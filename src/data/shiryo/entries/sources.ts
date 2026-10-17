import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'sources',
  no: 98,
  category: 'teian',
  name: '出典・参考資料型',
  en: 'Sources and references',
  aka: ['出典', '参考資料', '出典一覧', '参考文献', '引用元', 'データの出どころ'],
  mode: 'static',
  title: '出典の書き方とは？資料の数字の出どころを一覧にするスライドの作り方【見本つき】',
  description:
    '使った資料や数字の出どころを一覧にする「出典・参考資料型」のスライドを見本で解説。出典に書く項目、番号の付け方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '使った資料と、数字の出どころを番号つきで一覧にする。',
  what: [
    '資料の最後に置き、使った資料を1行ずつ並べる表の型です。見本では5つの資料を、番号・種類（社内か外部か）・資料名・作成した部署や発行元・時点・使った場所の順に載せています。番号は、本文のスライドの数字の脇に付ける小さな番号「[1]」「[2]」と対応させ、どの数字がどの資料から来たかをたどれるようにします。外部の資料は、種類の札を目立たせています。',
    '決まりは、「誰が・いつ・何を出したか」が分かる書き方にすることです。資料名だけでは、あとから探せません。発行元と時点（年や月）を必ず書きます。社内のデータなら、集計した部署と取り出した日付です。見本の資料名・発行元・数字は、すべて架空です。実際の資料では、正式な名称を書き、確認できないものは載せません。',
  ],
  when: [
    '提案書・報告書・稟議資料の最後に、使った数字の根拠をまとめて示すとき',
    '調査結果や市場の数字を載せたスライドで、「その数字はどこから？」と聞かれそうなとき',
    '社外の資料や調査を引用しているので、引用元を明らかにしておく必要があるとき',
    '後から資料を更新する人のために、データの取り出し元を残しておきたいとき',
  ],
  avoid: [
    '出典が1〜2件だけのとき（各スライドの下に注記として書けば足りる。一覧にしなくてよい）',
    '用語の意味をそろえたいとき（用語対照表型にする）',
    '調査の結果そのものを見せたいとき（縦棒グラフ型など、データの型を選ぶ）',
  ],
  prompt:
    '16:9のスライドを1枚、「出典・参考資料型（sources and references）」で作ってください。いちばん上に小さく「出典・参考資料」、その下に見出し「この資料の数字は、5つの出どころから使っている」を1行で置きます。その下に、5行の表を置きます。列は左から「番号・資料・作成・発行・時点・使った場所」で、見出しの行の下に濃い線、各行の下に薄い線を引きます。番号は「[1]」の形です。資料の列は、先頭に小さな札（「社内」か「外部」）、その右に資料名（太字18pt）と、その下に小さな補足（14pt、灰色）を置きます。内容は、[1]「社内・月次の売上データ・会計システムの出力・経理部・2026年9月末・3枚目：売上の推移」、[2]「社内・店頭アンケート・回答412件・マーケティング部・2026年8月・5枚目：満足度」、[3]「外部・小売市場の規模調査（例）・年次レポート・〇〇調査会社（例）・2025年版・4枚目：市場の伸び」、[4]「外部・業界団体の統計資料（例）・店舗数の統計・〇〇業界団体（例）・2026年4月・6枚目：競合の店舗数」、[5]「社内・顧客インタビュー・10名への聞き取り・営業部・2026年7月・7枚目：お客さまの声」です。強調のしかたは「{{focus:t}}」にしてください（強調する種類の札と番号をアクセント色にする）。使った場所の列は「{{where:t}}」にします。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、資料名は18pt以上、そのほかの文字は16pt以上、注記は12pt以上。最下部に「※ 見本の資料名・発行元・数字はすべて架空です。実際の資料には、正式な名称・発行元・発行日（URLがあればURL）を書きます。」と注記を入れてください。資料名と発行元は私が書いたものだけを使い、実在の資料や団体の名前を作らないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で6列×6行（見出しの行を含む）の表を作ります。表のデザインは「テーブルデザイン」で選び、罫線は見出しの下の太い線と、各行の下の薄い線だけを残して、縦の線と外枠を消します。種類の札は、小さな「角丸の四角形」を重ねるか、表のセルの背景を薄い灰色にして文字を入れます。本文のスライドの数字には、「ホーム」の「上付き文字」（文字を右上に小さくする機能）で「[1]」を付けると、出典の番号と対応が取れます。',
    'Googleスライドでは、「挿入」→「表」で同じ形の表を作り、表を選んで「表のプロパティ」から罫線の色と太さを決めます。「[1]」のような番号は、文字を選んで「表示形式」→「テキスト」→「上付き文字」で小さく右上に置きます。資料が20件を超えるときは、先にGoogleスプレッドシートで一覧を作り、スライドには重要な5件前後を載せて、全体は別紙にします。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。行を増やすときは、HTMLの行を足してください。6件を超えると文字が小さくなるので、分けるか、別紙にします。AIに頼むときは、資料名・発行元・時点を自分で書いて渡し、AIに出典を考えさせないでください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-where="{{where}}">
  <p class="kicker">出典・参考資料</p>
  <h1 class="title">この資料の数字は、5つの出どころから使っている</h1>

  <div class="table">
    <div class="head"><span></span><span>資料</span><span>作成・発行</span><span>時点</span><span class="where">使った場所</span></div>
    <div class="row int">
      <span class="n">[1]</span>
      <span class="name"><span class="kind">社内</span><span class="tt"><b>月次の売上データ</b><small>会計システムの出力</small></span></span>
      <span>経理部</span><span class="at">2026年9月末</span><span class="where">3枚目：売上の推移</span>
    </div>
    <div class="row int">
      <span class="n">[2]</span>
      <span class="name"><span class="kind">社内</span><span class="tt"><b>店頭アンケート</b><small>回答412件</small></span></span>
      <span>マーケティング部</span><span class="at">2026年8月</span><span class="where">5枚目：満足度</span>
    </div>
    <div class="row ext">
      <span class="n">[3]</span>
      <span class="name"><span class="kind">外部</span><span class="tt"><b>小売市場の規模調査（例）</b><small>年次レポート</small></span></span>
      <span>〇〇調査会社（例）</span><span class="at">2025年版</span><span class="where">4枚目：市場の伸び</span>
    </div>
    <div class="row ext">
      <span class="n">[4]</span>
      <span class="name"><span class="kind">外部</span><span class="tt"><b>業界団体の統計資料（例）</b><small>店舗数の統計</small></span></span>
      <span>〇〇業界団体（例）</span><span class="at">2026年4月</span><span class="where">6枚目：競合の店舗数</span>
    </div>
    <div class="row int">
      <span class="n">[5]</span>
      <span class="name"><span class="kind">社内</span><span class="tt"><b>顧客インタビュー</b><small>10名への聞き取り</small></span></span>
      <span>営業部</span><span class="at">2026年7月</span><span class="where">7枚目：お客さまの声</span>
    </div>
  </div>

  <p class="note">※ 見本の資料名・発行元・数字はすべて架空です。実際の資料には、正式な名称・発行元・発行日（URLがあればURL）を書きます。</p>
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

/* 表。列は 番号 / 資料 / 作成・発行 / 時点 / 使った場所 */
.table { flex: 1; display: flex; flex-direction: column; margin: 14px 0 8px; }
.head, .row { display: grid; grid-template-columns: 52px 1fr 170px 130px 170px; align-items: center; }
.head { padding-bottom: 6px; border-bottom: 2px solid #1f2430; font-size: 14px; font-weight: 700; color: #5a6070; }
.row { flex: 1; border-bottom: 1px solid #e3e5ea; font-size: 16px; }
.n { font-size: 17px; font-weight: 800; color: #5a6070; }
.name { display: flex; align-items: center; gap: 10px; padding-right: 10px; }
.kind { flex: none; padding: 2px 8px; border: 1.5px solid #c3c8d2; border-radius: 5px; font-size: 13px; font-weight: 800; color: #5a6070; }
.tt { display: flex; flex-direction: column; }
.tt b { font-size: 18px; font-weight: 800; }
.tt small { font-size: 14px; color: #5a6070; }
.at { font-variant-numeric: tabular-nums; }
.where { color: #5a6070; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 強調する種類（data-focus="ext" / "int" / "none"） */
.slide[data-focus="ext"] .ext .kind,
.slide[data-focus="int"] .int .kind { background: var(--accent); border-color: var(--accent); color: #fff; }
.slide[data-focus="ext"] .ext .n,
.slide[data-focus="int"] .int .n { color: var(--accent); }

/* 使った場所の列（data-where="hide" なら消す） */
.slide[data-where="hide"] .where { display: none; }
.slide[data-where="hide"] :is(.head, .row) { grid-template-columns: 52px 1fr 190px 150px; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する種類',
      value: 'ext',
      options: [
        { value: 'ext', label: '外部の資料を強調' },
        { value: 'int', label: '社内の資料を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'where',
      type: 'select',
      label: '使った場所の列',
      value: 'show',
      options: [
        { value: 'show', label: '使った場所の列を出す' },
        { value: 'hide', label: '使った場所の列を出さない' },
      ],
    },
  ],
  cautions: [
    '資料名だけでなく、誰が・いつ出したものかを書きます。「市場調査レポート」とだけ書いても、あとで探せません。発行元と年（月）があれば、同じものを探し出せて、数字を確かめてもらえます。',
    '本文のスライドの数字と、出典の番号を対応させます。見本のように数字の脇に「[1]」を付けると、聞き手は出どころをその場でたどれます。出典を一覧にするだけで、どの数字がどれか分からないと、根拠を示したことになりません。',
    '確認できていない資料や、孫引き（他の資料が引用していた数字をそのまま使うこと）は載せないでください。元の資料にあたって確かめたものだけを書きます。社内のデータでも、集計した部署と取り出した日を残します。',
    '外部の資料は、使っていい範囲を確認します。図や表をそのまま転載するには許可が要ることがあります。数字だけを引用して、出典を書くのが基本です。',
  ],
  similar: [
    { slug: 'glossary', diff: '用語対照表型は、用語と意味を表で対応させる型です。出典・参考資料型と同じく資料の最後に置き、資料の中の言葉を補うときに使います。' },
    { slug: 'claim-evidence', diff: '主張・根拠・示唆型は、言いたいこと・支える事実・その意味を並べる型です。1つの主張の根拠を見せる本文用で、出典の一覧は最後にこの型でまとめます。' },
    { slug: 'summary', diff: 'まとめ型は、話の要点を最後に箇条書きで振り返る型です。資料の最後に置く点は同じで、出典の一覧ではなく、内容の振り返りに使います。' },
  ],
  faq: [
    {
      q: 'スライドの出典は、各ページの下と最後のページのどちらに書けばよいですか？',
      a: '両方を使い分けるのがおすすめです。そのスライドの数字に直接かかわる出典は、各ページの下に小さく書きます。出典が多いときや、細かい情報（発行日やURL）まで載せたいときは、最後に一覧を置き、本文の数字に「[1]」の番号を付けて対応させます。',
    },
    {
      q: '出典には、何を書けばよいですか？',
      a: '最低限、資料名・作成した人や団体（発行元）・発行した時点（年や月）です。Webページなら、そのURLと見た日付も加えます。数字を引用するときは、その資料の何ページ目かまで書けると、確かめる人が助かります。',
    },
    {
      q: '出典の書き方を、AIに頼んで大丈夫ですか？',
      a: 'そのまま任せるのは危険です。AIは、実在しない資料名や発行元をそれらしく作ってしまうことがあります。資料名・発行元・時点は自分で確かめたものを渡して、並べ方だけ頼んでください。出来上がったあとも、元の資料と見比べます。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
