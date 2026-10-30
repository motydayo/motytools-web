import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'faq',
  no: 97,
  category: 'teian',
  name: 'FAQ型',
  en: 'FAQ',
  aka: ['よくある質問', 'FAQスライド', 'Q&A一覧', '質問と回答', 'よくあるご質問', '想定問答'],
  mode: 'static',
  title: 'よくある質問（FAQ）のスライドとは？質問と答えを並べる資料の作り方【見本つき】',
  description:
    'よく聞かれる質問と答えを並べる「FAQ型」のスライドを見本で解説。質問の選び方、答えの短い書き方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLまでまとめました。2列と1列の切り替えも試せます。',
  oneLine: 'よく聞かれる質問と、その答えを枠に並べる。',
  what: [
    '質問と答えを1組ずつ枠に入れ、並べる型です。見本では予約管理サービスの導入前によく聞かれる4つの質問を、2列×2段で並べています。枠の中は、上が「Q」の記号つきの質問（太字）、下が「A」の記号つきの答え（短い文）で、読む順番が目で追えます。見出しには「導入前によく聞かれる4つの質問と答え」と、内容と件数を書いています。',
    'FAQは「Frequently Asked Questions」の略で、日本語では「よくある質問」です。決まりは、実際に聞かれる質問だけを選ぶことと、答えを1〜2文で言い切ることです。長い説明が要る質問は、答えに結論だけを書き、詳しくは別の資料に回します。質問は3〜6個に絞ります。',
  ],
  when: [
    '新しいサービスや制度の説明のあとで、聞かれそうな疑問に先回りして答えたいとき',
    '営業資料やサービス紹介の終わりに、導入前の不安を解消したいとき',
    '社内の新しいルールや手続きを説明して、問い合わせを減らしたいとき',
    'プレゼンの質疑応答に備えて、想定問答を手元の資料としてまとめたいとき',
  ],
  avoid: [
    '質問が10個以上あり、文字を小さくしないと入らないとき（上位の質問に絞り、残りは別の資料やWebページにする）',
    '質問を聞き手から受け付ける時間を示したいとき（Q&A型にする）',
    '答えが長い説明になるとき（定義カード型や、1メッセージ型のスライドを別に作る）',
  ],
  prompt:
    '16:9のスライドを1枚、「FAQ型（FAQ）」で作ってください。いちばん上に小さく「予約管理サービス「サンプル予約」（架空）のよくある質問」、その下に見出し「導入前によく聞かれる4つの質問と答え」を1行で置きます。その下に、角丸の枠を4つ置きます。並べ方は「{{cols:t}}」にしてください。各枠は、上に「Q」の記号つきの質問（太字21pt前後）、下に「A」の記号つきの答え（17pt前後、灰色）を置きます。Qの記号は「{{mark:t}}」にします。Aの記号は灰色の枠線の丸にしてください。内容は、1「今の予約データは移せますか？／CSVの形式なら取り込めます。移行の作業は、当社が無料で代行します。」、2「スマートフォンでも使えますか？／iPhoneとAndroidのブラウザで使えます。アプリのインストールは要りません。」、3「途中で解約できますか？／月払いなら翌月末で解約でき、違約金はかかりません。」、4「サポートはいつ受けられますか？／平日の9時から18時まで、電話とチャットで受け付けます。」です。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、質問は20pt以上、答えは16pt以上、注記は12pt以上。最下部に「※ ここにない質問は、導入前のご相談でお答えします。」と注記を入れてください。質問と答えは私が書いたものだけを使い、新しい質問や数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」で1つ枠を作り、中に質問と答えを書きます。コピーして4つにしたら、全部を選んで「図形の書式」→「配置」で「左右に整列」と「上下に整列」を押すと、きれいな2列×2段になります。QとAの丸は、「楕円」を、Shiftキーを押しながらドラッグして正円にし、中に文字を入れます。1つ作ってコピーすると、全部の枠でそろいます。質問が多いときは、「挿入」→「表」で2列の表にする方法もあります。',
    'Googleスライドでは、「挿入」→「図形」→「図形」から角丸の四角形を選んで、同じようにコピーして並べます。複数の枠を選んで「配置」→「均等に配置」→「横方向」「縦方向」を押すとそろいます。質問を1行ずつ並べるなら、「挿入」→「表」で2列の表（左が質問、右が答え）にすると、手早く作れます。答えが長くなったら、枠の高さに収まる量かを確かめ、はみ出すなら文を削ります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。1列に切り替えるには、HTMLの「data-cols」を「1」にします。質問を増やすときは、枠を足し、4つを超えるなら高さに収まるか、文字が小さくなりすぎないか確認してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-cols="{{cols}}" data-mark="{{mark}}">
  <p class="kicker">予約管理サービス「サンプル予約」（架空）のよくある質問</p>
  <h1 class="title">導入前によく聞かれる4つの質問と答え</h1>

  <div class="grid">
    <div class="card">
      <p class="q"><span class="mark mq">Q</span><span class="qt">今の予約データは移せますか？</span></p>
      <p class="a"><span class="mark ma">A</span><span class="at">CSVの形式なら取り込めます。移行の作業は、当社が無料で代行します。</span></p>
    </div>
    <div class="card">
      <p class="q"><span class="mark mq">Q</span><span class="qt">スマートフォンでも使えますか？</span></p>
      <p class="a"><span class="mark ma">A</span><span class="at">iPhoneとAndroidのブラウザで使えます。アプリのインストールは要りません。</span></p>
    </div>
    <div class="card">
      <p class="q"><span class="mark mq">Q</span><span class="qt">途中で解約できますか？</span></p>
      <p class="a"><span class="mark ma">A</span><span class="at">月払いなら翌月末で解約でき、違約金はかかりません。</span></p>
    </div>
    <div class="card">
      <p class="q"><span class="mark mq">Q</span><span class="qt">サポートはいつ受けられますか？</span></p>
      <p class="a"><span class="mark ma">A</span><span class="at">平日の9時から18時まで、電話とチャットで受け付けます。</span></p>
    </div>
  </div>

  <p class="note">※ ここにない質問は、導入前のご相談でお答えします。</p>
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

/* 質問の枠。data-cols="2" なら2列、"1" なら1列 */
.grid { flex: 1; display: grid; grid-auto-rows: 1fr; gap: 14px; margin: 22px 0 12px; }
.slide[data-cols="2"] .grid { grid-template-columns: 1fr 1fr; }
.card { display: flex; flex-direction: column; justify-content: center; gap: 8px; padding: 10px 20px; border: 2px solid #e3e5ea; border-radius: 12px; }
.q, .a { display: flex; align-items: flex-start; gap: 12px; margin: 0; }
.mark { box-sizing: border-box; flex: none; display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; font-size: 17px; font-weight: 800; line-height: 1; }
.qt { padding-top: 2px; font-size: 21px; font-weight: 800; line-height: 1.35; }
.at { padding-top: 3px; font-size: 17px; color: #5a6070; line-height: 1.5; }
.ma { border: 2px solid #c3c8d2; color: #5a6070; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* Qの記号（data-mark="fill" なら塗りつぶし、"line" なら枠線だけ） */
.slide[data-mark="fill"] .mq { background: var(--accent); color: #fff; }
.slide[data-mark="line"] .mq { border: 2px solid var(--accent); color: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'cols',
      type: 'select',
      label: '並べ方',
      value: '2',
      options: [
        { value: '2', label: '2列に並べる' },
        { value: '1', label: '1列に並べる' },
      ],
    },
    {
      key: 'mark',
      type: 'select',
      label: 'Qの記号',
      value: 'fill',
      options: [
        { value: 'fill', label: '色で塗りつぶす' },
        { value: 'line', label: '枠線だけにする' },
      ],
    },
  ],
  cautions: [
    '質問は、実際に聞かれたものだけを載せます。想像で作った質問は、聞き手にとって「知りたいこと」ではなく、答えを言いたいだけの質問になります。営業の現場や問い合わせの履歴から、回数の多いものを選びます。',
    '答えは、結論を最初に書きます。「できます」「できません」「無料です」と、質問に対する答えを先に言い切り、条件や補足はそのあとに短く書きます。答えが3行を超えるなら、その質問は別のスライドにします。',
    '質問は、聞き手の言葉で書きます。「CSVのインポートの可否」ではなく「今の予約データは移せますか？」と、実際に口に出す形にします。社内の専門用語や略語が混ざっていないか確認します。',
    '「Q」と「A」の記号は、全部の枠で同じ形・同じ位置にそろえます。枠によって記号がずれると、どこが質問でどこが答えか、読むたびに探すことになります。',
  ],
  similar: [
    { slug: 'qa-slide', diff: 'Q&A型は、質問を受け付ける時間を示す型です。FAQ型は先に答えを用意して見せ、Q&A型は発表の最後に聞き手の質問を受けるために使います。' },
    { slug: 'glossary', diff: '用語対照表型は、用語と意味を表で対応させる型です。質問への答えではなく、言葉の意味をそろえたいときに使います。' },
    { slug: 'definition', diff: '定義カード型は、1つの言葉の意味をカードで定義する型です。FAQの答えが「言葉の説明」になるときは、こちらを別に1枚作ります。' },
  ],
  faq: [
    {
      q: 'FAQとQ&Aは、何が違いますか？',
      a: 'FAQは、よく聞かれる質問に、先に答えを用意して見せるものです。Q&Aは、質問と答えのやり取りそのものを指し、発表のあとの質疑応答の意味でも使われます。資料の中で、用意した答えを並べるのがFAQ、質問を受ける時間を作るのがQ&Aと考えると使い分けられます。',
    },
    {
      q: 'FAQのスライドは、いくつの質問を載せればよいですか？',
      a: '1枚につき4〜6個までです。見本は4個です。それ以上あるときは、分類ごとに2枚に分けるか、特によく聞かれる上位の質問だけを載せます。多く並べるほど、1つ1つの文字が小さくなって読まれません。',
    },
    {
      q: 'FAQの資料をAIに作らせるときのコツはありますか？',
      a: '質問と答えを自分で書いて渡すことです。「よくある質問を考えて」と頼むと、AIは一般的な質問を作りますが、実際のお客さまが聞くこととは違います。答えの中の数字や条件（無料、翌月末など）を、AIが勝手に変えていないかも確かめてください。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
