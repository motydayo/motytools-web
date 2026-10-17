import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'title-slide',
  no: 1,
  category: 'kousei',
  name: 'タイトルスライド',
  en: 'Title slide',
  aka: ['表紙', '表紙スライド', '扉ページ', 'タイトルページ', 'カバースライド'],
  mode: 'static',
  title: 'タイトルスライド（表紙）とは？作り方と見本【PowerPoint・Googleスライド】',
  description:
    '資料の1枚目になる「タイトルスライド」を見本で解説。題名・日付・発表者の置き方、左寄せと中央寄せの選び方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '資料の題名・日付・発表者だけを置く、1枚目の表紙。',
  what: [
    '資料の1枚目に置く、題名・日付・発表者だけの表紙です。見本では「2026年度 上期の営業実績と下期の重点施策」という題名をいちばん大きく置き、その上に会社名と部署、題名の下に一言の要約、いちばん下に日付と発表者を並べています。題名の下の短い線がアクセント色で、色を使うのはここと小見出しだけです。',
    '表紙の仕事は、何についての資料で、いつ誰が話すのかを3秒で伝えることです。そのため中身を増やさず、題名を最も大きく、ほかを小さくして強弱をはっきりさせます。のちに資料を探し出すときの名札にもなるので、日付と発表者は省かないのが決まりごとです。',
  ],
  when: [
    '会議・報告会・提案の最初の1枚をつくるとき',
    '取引先に出す提案書や見積の説明資料に、会社名と日付を入れた表紙を付けるとき',
    '研修や勉強会の資料で、回ごとのタイトルを見分けやすくしたいとき',
    '共有フォルダに資料がたまり、題名と日付で見分けられるようにしたいとき',
  ],
  avoid: [
    '目次や概要まで1枚に詰め込みたいとき（目次は別のスライドに分け、目次型にする）',
    '社内の短い連絡で、表紙が会議の時間を使ってしまうとき（最初のスライドから結論を言う1メッセージ型にする）',
    '章の切り替わりに使いたいとき（章の扉は、セクション扉型を使う）',
  ],
  prompt:
    '16:9のスライドを1枚、「タイトルスライド（title slide）」で作ってください。上から順に、(1)左上に小さな四角いロゴ枠と会社名「株式会社ミナト商事」、少し離して部署名「営業企画部」、(2)中央に小見出し「第2四半期 営業報告会」、その下に題名「2026年度 上期の営業実績と下期の重点施策」（「と」の後ろで改行して2行）、(3)題名の下に短い太い線、その下に一言の要約「売上は計画比103%。下期は新商品の投入で伸ばします。」、(4)いちばん下に細い線を引き、その下に「日付 2026年10月21日（水）」と「発表者 営業企画部 部長 佐伯 美咲」を横に並べます。配置は「{{align:t}}」にしてください。色はアクセント色{{accent:t}}の1色だけで、ロゴ枠・小見出し・題名の下の線に使い、ほかは白・灰色・黒にします。題名の文字は{{size:t}}pt、小見出しは18pt、要約は22pt、会社名と日付・発表者は18pt、「日付」「発表者」の見出しは14ptにしてください。数字や名前は私が書いたものだけを使い、新しい情報を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」の一覧から「タイトル スライド」のレイアウトを選ぶと、題名と副題の枠が入った表紙から始められます。題名を入力したら、「ホーム」→「左揃え」または「中央揃え」で配置をそろえ、題名の文字を一番大きくします（この見本は52pt）。日付と発表者は、副題の枠にまとめて書くか、「挿入」→「テキスト ボックス」で別に置きます。題名の下の線は「挿入」→「図形」→「線」で、太さ6pt・アクセント色にします。会社のロゴは「挿入」→「画像」で入れます。',
    'Googleスライドでは、ツールバーの「レイアウト」から「タイトル スライド」を選ぶと同じ形から始められます。題名と副題を入力し、日付と発表者は副題の枠に書くか、「挿入」→「テキスト ボックス」で足します。線は「挿入」→「線」で引き、「枠線の太さ」と「枠線の色」を変えます。全部の資料で同じ表紙にしたい場合は、PowerPointなら「表示」→「スライド マスター」で表紙のレイアウトを作り込んでおくと、毎回作り直さずに済みます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。幅960px・高さ540pxで、PowerPointの16:9（960pt×540pt）と同じ比率です。題名・日付・発表者の文字を書き換えるだけで、ほかの資料の表紙になります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-align="{{align}}">
  <div class="brand">
    <span class="mark">
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15c3-4 6-4 9 0s6 4 9 0M3 9c3-4 6-4 9 0s6 4 9 0" /></svg>
    </span>
    <span>株式会社ミナト商事</span>
    <span class="dept">営業企画部</span>
  </div>

  <div class="main">
    <p class="kicker">第2四半期 営業報告会</p>
    <h1 class="title"><span>2026年度 上期の営業実績と</span><span>下期の重点施策</span></h1>
    <span class="rule"></span>
    <p class="sub">売上は計画比103%。下期は新商品の投入で伸ばします。</p>
  </div>

  <div class="foot">
    <div><span class="k">日付</span><span class="v">2026年10月21日（水）</span></div>
    <div><span class="k">発表者</span><span class="v">営業企画部 部長　佐伯 美咲</span></div>
  </div>
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

.brand { display: flex; align-items: center; gap: 12px; font-size: 18px; font-weight: 800; }
.mark { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 8px; background: var(--accent); }
.mark svg { width: 20px; height: 20px; }
.dept { margin-left: 4px; padding-left: 16px; border-left: 1px solid #e3e5ea; font-size: 16px; font-weight: 500; color: #5a6070; }
.main { flex: 1; display: flex; flex-direction: column; justify-content: center; min-height: 0; }
.kicker { margin-bottom: 16px; font-size: 18px; }
.title { margin: 0; font-size: {{size:n}}px; font-weight: 800; line-height: 1.25; letter-spacing: 0.01em; }
.title span { display: block; }
.rule { display: block; width: 64px; height: 6px; margin: 24px 0 20px; border-radius: 3px; background: var(--accent); }
.sub { margin: 0; font-size: 22px; color: #5a6070; }
.foot { display: flex; gap: 48px; padding-top: 16px; border-top: 1px solid #e3e5ea; }
.foot div { display: flex; flex-direction: column; gap: 2px; }
.k { font-size: 14px; color: #8a8f9c; }
.v { font-size: 18px; font-weight: 700; }

/* 配置（つまみ: 配置） */
.slide[data-align="center"] .brand { justify-content: center; }
.slide[data-align="center"] .main { align-items: center; text-align: center; }
.slide[data-align="center"] .foot { justify-content: center; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'align',
      type: 'select',
      label: '配置',
      value: 'left',
      options: [
        { value: 'left', label: '左寄せ' },
        { value: 'center', label: '中央寄せ' },
      ],
    },
    { key: 'size', label: '題名の大きさ（pt）', min: 40, max: 60, step: 4, value: 52, unit: '' },
  ],
  cautions: [
    '表紙に入れすぎないことです。題名・日付・発表者・会社名の4つが基本で、目的や背景の説明まで載せると、1枚目から読ませる資料になってしまいます。説明は2枚目以降に回します。',
    '題名は「何についての資料か」が分かる言葉にします。「営業報告」だけでは、いつの何の報告か分かりません。見本のように、対象の期間と内容を入れると、フォルダに並んだときにも見分けられます。',
    '日付を書き忘れる、または「最終版」「修正版」で済ませるのは危険です。会議の日付か資料の作成日を書いておくと、あとで数字を見直すとき「いつの時点か」がすぐに分かります。',
    '題名の文字を小さくして余白を埋めようとしないことです。表紙は余白が多いほど堂々と見えます。題名が2行に収まらないときは、言葉を削ります。',
  ],
  similar: [
    { slug: 'section-divider', diff: 'セクション扉型は、資料の途中で章が切り替わるときに置く1枚です。タイトルスライドは資料全体の1枚目にだけ使い、日付と発表者を入れます。' },
    { slug: 'one-message', diff: '1メッセージ型は、言いたいことを1文だけ大きく見せる型です。表紙は「何の資料か」を示し、1メッセージ型は「結論そのもの」を示します。' },
    { slug: 'agenda', diff: '目次型は、これから話す順番を示す型です。表紙の次に置くことが多く、表紙には目次を入れません。' },
  ],
  faq: [
    {
      q: '表紙には、どんな情報を入れればいいですか？',
      a: '題名、日付、発表者（または作成した部署）、会社名の4つが基本です。社外に出す資料では、さらに「取引先の名前」を入れると、誰あての資料か一目で分かります。連絡先やキャッチコピーは、必要なときだけ最後のスライドに回します。',
    },
    {
      q: '表紙を中央寄せにするか左寄せにするか、迷います。',
      a: '横書きの資料は左から読むので、本文のスライドが左寄せなら表紙も左寄せにすると、全体の見た目がそろいます。中央寄せは、題名が短くて印象を強く残したいときや、式典・セミナーのように人前で大きく映すときに向いています。どちらにしても、1つの資料の中で混ぜないようにします。',
    },
    {
      q: 'PowerPointの「タイトル スライド」レイアウトのままでも使えますか？',
      a: '使えます。ただし初期の状態は文字が中央に小さく並ぶだけなので、題名を大きくする、日付と発表者を下に離して置く、線を1本入れる、といった整え方をすると、資料の印象が大きく変わります。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
