import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'quote',
  no: 18,
  category: 'kousei',
  name: '引用強調型',
  en: 'Quote slide',
  aka: ['引用スライド', 'お客さまの声', 'コメント引用', 'ひとことコメント'],
  mode: 'static',
  title: '引用スライドとは？お客さまの声を大きく見せる「引用強調型」の作り方【PowerPoint】',
  description:
    'お客さまや専門家の言葉を大きく引用して信頼感を出す「引用強調型」のスライドを見本で解説。引用符の飾り方、誰の言葉かの添え方、PowerPoint・Googleスライドでの作り方、AIへの指示文、HTMLとCSSまでまとめました。',
  oneLine: 'お客さまや専門家の言葉を1つ大きく引用し、誰の言葉かを下に添える。',
  what: [
    '1つの言葉を、スライドの中央に大きく置く型です。見本では、導入したお客さまの言葉「請求書の確認が、月末の徹夜から定時内の作業に変わりました。」を38pt前後の太字で置き、その上にアクセント色の大きな引用符を飾っています。下には丸い目印と一緒に、言った人の名前と会社・役職を添え、いちばん下の注記にいつの話かを書いています。',
    'この型のよさは、自社が「すごい」と言うより、第三者の言葉の方が信じてもらえることです。決まりごとは、引用を1つ、2行以内に絞ること。そして、誰の言葉か（名前・会社・役職・時期）を必ず添えることです。出所のわからない言葉は、ただのキャッチコピーに見えてしまいます。',
  ],
  when: [
    '導入事例や提案資料で、お客さまの生の声で信頼感を出したいとき',
    '専門家・社長・著名人のコメントを、説明の裏づけとして見せたいとき',
    '社内の発表で、現場の社員の声を紹介して、取り組みの必要性を伝えたいとき',
    'アンケートの自由回答から、一番印象に残るひとことを選んで見せたいとき',
  ],
  avoid: [
    '引用したい言葉が長く、3行以上になるとき（要点を短くまとめるか、文章の抜粋を並べるインタビュー抜粋型にする）',
    '複数の人の声を並べたいとき（顧客の声＋成果型やインタビュー抜粋型にする）',
    '誰の言葉か出せないとき（匿名なら「30代・製造業の経理担当」のように属性を書く。それも書けないなら、引用ではなく自分たちの言葉として1メッセージ型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「引用強調型（quote slide）」で作ってください。いちばん上に小さく「お客さまの声」と置きます。中央には、引用文「請求書の確認が、月末の徹夜から定時内の作業に変わりました。」を{{size:t}}ptの太字、2行以内で置いてください。引用文の飾りは「{{style:t}}」にします（引用符を使うときはアクセント色の大きな引用符（“ ” の形）を引用文の上に置き、線を使うときは引用文の左にアクセント色の太い縦線を引く）。引用文の下に、丸い目印（名字の頭文字「山」を入れ、淡いアクセント色で塗った円）と、太字22ptの「山本 恵子さん」、その下に灰色16ptで「株式会社ナカムラ設備　総務部 課長」を並べてください。最下部に注記「※ 2026年7月、導入3か月後のインタビューより。」を13ptで入れます。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。引用文は一字も変えず、数字や社名は私が書いたものだけを使い、新しい言葉を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「タイトルのみ」などを選び、引用文をテキストボックスに入れて、文字サイズを38pt前後・太字にします。引用符は文字の「「」ではなく、「挿入」→「図形」から「四角形: 角を丸くする」などを2つ組み合わせるか、「挿入」→「アイコン」で「引用符」と検索して選ぶと、大きくしてもきれいに保てます。丸い目印は「挿入」→「図形」→「楕円」でShiftを押しながら描きます。',
    'Googleスライドでは、「スライド」→「レイアウトを適用」で「タイトルのみ」を選び、引用文を入れます。引用符は「挿入」→「特殊文字」で「引用符」と検索して入れ、文字サイズを大きくします。名前と役職は、丸い図形（「挿入」→「図形」→「図形」→「楕円」）の右に、2段のテキストボックスとして置きます。縦線で飾るときは、「挿入」→「線」で引用文の左に線を引き、太さを8ptにします。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。引用文を <blockquote> に入れているので、文だけを書き換えれば別のお客さまの声に差し替えられます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-style="{{style}}">
  <p class="kicker">お客さまの声</p>

  <div class="main">
    <svg class="mark" viewBox="0 0 52 40" aria-hidden="true"><path d="M0 40V22C0 9 7 2 20 0l2 6C14 8 11 13 11 20h11v20zM30 40V22C30 9 37 2 50 0l2 6C44 8 41 13 41 20h11v20z" fill="currentColor"/></svg>
    <blockquote class="text">請求書の確認が、月末の徹夜から定時内の作業に変わりました。</blockquote>
    <div class="who">
      <span class="avatar">山</span>
      <span class="name"><b>山本 恵子さん</b><span>株式会社ナカムラ設備　総務部 課長</span></span>
    </div>
  </div>

  <p class="note">※ 2026年7月、導入3か月後のインタビューより。</p>
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

/* 引用文。2行以内に収める */
.main { flex: 1; display: flex; flex-direction: column; justify-content: center; padding-left: 8px; }
.mark { display: none; width: 64px; height: auto; margin-bottom: 14px; color: var(--accent); }
.text { margin: 0; font-size: {{size:n}}px; font-weight: 800; line-height: 1.5; letter-spacing: 0.02em; }

/* 誰の言葉か */
.who { display: flex; align-items: center; gap: 16px; margin-top: 32px; }
.avatar { flex: none; display: grid; place-items: center; width: 56px; height: 56px; border-radius: 50%; background: color-mix(in srgb, var(--accent) 14%, #fff); color: var(--accent); font-size: 24px; font-weight: 800; }
.name { display: flex; flex-direction: column; }
.name b { font-size: 22px; font-weight: 800; }
.name span { font-size: 16px; color: #5a6070; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 飾り（data-style="mark" / "bar"） */
.slide[data-style="mark"] .mark { display: block; }
.slide[data-style="bar"] .text { padding-left: 24px; border-left: 8px solid var(--accent); }
.slide[data-style="bar"] .who { padding-left: 32px; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'style',
      type: 'select',
      label: '飾り',
      value: 'mark',
      options: [
        { value: 'mark', label: '大きな引用符' },
        { value: 'bar', label: '左に太い縦線' },
      ],
    },
    { key: 'size', label: '引用文の文字の大きさ（pt）', min: 30, max: 44, step: 2, value: 38, unit: '' },
  ],
  cautions: [
    '誰の言葉かを省かないでください。「お客さまの声」とだけ書いて名前も会社も出さないと、作り話に見えます。実名が出せないときは、「30代・製造業の経理担当」のように属性を、取材の時期とともに書きます。',
    '本人が言っていないことを、整えすぎて変えないでください。引用の言葉を、聞こえのいい形に直した結果、本人の意図とずれることがあります。載せる前に必ず本人に確認してもらい、了解を得てください。',
    '引用が長いと、大きく見せる意味が消えます。2行を超えるなら、核心になる1文だけ抜き出し、全文は別のページに回します。',
    '引用符を、本文の文字の「」で作って巨大化させると、フォントによって形がばらつきます。図形やアイコンを使うと、どのパソコンでも同じ形で出ます。',
  ],
  similar: [
    { slug: 'testimonial', diff: '顧客の声＋成果型は、お客さまの言葉と、数字の成果を並べる型です。引用強調型は言葉だけを大きく見せ、数字は載せません。' },
    { slug: 'interview', diff: 'インタビュー抜粋型は、聞き取りで出た声を複数抜き出して並べる型です。引用強調型は、たった1つの言葉を主役にします。' },
    { slug: 'case-card', diff: '事例紹介カード型は、課題・成果・写真を1つのカードにまとめる型です。引用強調型は、その事例の中から一番心に残る言葉だけを取り出して見せます。' },
  ],
  faq: [
    {
      q: '引用するときの著作権はどうなりますか？',
      a: '社外の本や記事の言葉を引用するときは、出典（著者・書名・出版年・ページ）を明記し、必要な部分だけを載せるのが原則です。著作権法の引用にあたるには、さらに、自分の説明が主で引用は従であること、引用部分をかぎかっこなどで区別することも必要です（文化庁の著作権の解説）。1枚に社外の文章だけを大きく載せる使い方は、引用にあたらないことがあります。この型は、本人の了解を得たお客さまの言葉に使うのが安全です。お客さまの言葉を使うときは、著作権よりも、掲載してよいという本人の了解が大切です。社名と名前を出すなら、書面かメールで了解をもらっておきます。',
    },
    {
      q: '引用符は「」と“”のどちらがいいですか？',
      a: '日本語の文章では「」が一般的ですが、スライドの飾りには、英語の文章で使う“ ”に近い形の大きな記号を使うのが定番です。飾りの引用符は文章の一部ではなく絵として扱い、引用文の中身には、句読点も含めて元の言葉をそのまま書きます。',
    },
    {
      q: '引用文のフォントや大きさのおすすめは？',
      a: '本文より大きい32〜44ptで、太さは本文と同じかやや太めがおすすめです。明朝体は上品に見えますが、遠くからは線が細くて読みにくいので、プロジェクターで見せるならゴシック体にします。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
