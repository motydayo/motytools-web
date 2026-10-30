import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'case-card',
  no: 11,
  category: 'kousei',
  name: '事例紹介カード型',
  en: 'Case study card',
  aka: ['導入事例', '事例紹介', '事例スライド', 'お客さまの声カード', 'ケーススタディ', '成功事例'],
  mode: 'static',
  title: '事例紹介カード型とは？導入事例を1枚にまとめるスライドの作り方【見本つき】',
  description:
    '1つの事例を写真・課題・取り組み・成果のカードにまとめる「事例紹介カード型」のスライドを見本で解説。成果の数字の見せ方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '1つの事例を、写真・課題・取り組み・成果の1枚にまとめる。',
  what: [
    'お客さまの事例1件を、1枚のカードにまとめる型です。見本では和菓子店の導入事例を、左に写真の枠、右に「お客さまの紹介・課題・取り組み・成果」の順に並べています。成果は灰色の帯の中に、前後の数字（300件→180件）を大きく書き、結論として見出しにも「電話の予約を月120件減らしました」と言い切っています。',
    'この型のよさは、読み手が「自分の会社と似ている」と感じたとき、同じ成果が出そうだと想像できることです。そのため、決まりごとは、お客さまの規模や業種を一行で添えることと、成果を数字で書くこと。写真があると、事例が本物だという信頼感が高まります。',
  ],
  when: [
    '営業資料や提案書で、導入実績を1件ずつ紹介したいとき',
    'ホームページや会社案内の「お客さまの事例」に載せる内容を整理したいとき',
    '展示会や説明会で、事例を2〜3件順番に見せたいとき',
    '社内発表で、他の部署や支店の成功例を紹介したいとき',
  ],
  avoid: [
    '複数の事例を同じ項目で比べたいとき（ケース横断比較型にして、表で並べる）',
    'お客さまの言葉そのものを主役にしたいとき（顧客の声＋成果型や、引用強調型にする）',
    '成果の数字が出せていない、または掲載の許可が得られていないとき（出せる数字が出るまで、事例にしない）',
  ],
  prompt:
    '16:9のスライドを1枚、「事例紹介カード型（case study card）」で作ってください。いちばん上に小さく「導入事例　和菓子店」、その下に結論の見出し「ネット予約で、電話の予約を月120件減らしました」を1行で置きます。見出しの下を左右に分け、写真は{{side:t}}にして、幅およそ280ptの角の丸い枠（写真を入れる場所。仮の置き場として、薄い灰色の地に点線の枠とお店の絵を描き、「店舗の写真を入れる枠」と書く）を置きます。もう一方に、上から順に、(1)お客さま：「たちばな堂（和菓子店）」を22ptの太字で、その下に「埼玉県川越市・創業1952年・従業員14人」を16ptの灰色で。(2)「課題」の札と、文「電話予約が月に約300件。営業時間中は電話に出るため、製造の手が止まっていた。」(3)「取り組み」の札と、文「ネット予約を導入。受け取り日時を選ぶ形にし、確認の連絡がLINEに届くようにした。」(4)いちばん下に、薄い灰色の帯を置き、左に「成果」の札、右に3つの数字を並べます。1つ目は「電話の予約（月）」300→180件（月120件減（−40%））、2つ目は「聞き間違い（月）」6→0件（ゼロに）、3つ目は「効果が出るまで」2か月（導入から）。数字は後ろの値を36ptの太字、前の値は20ptの灰色にします。強調のしかたは「{{focus:t}}」にしてください（強調する場合は、成果の帯の枠線をアクセント色にして薄く塗り、「成果」の札と後ろの数字もアクセント色にする）。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒です。文字の大きさは、見出し32〜36pt、文16pt、札と数字の説明15pt、注記13pt。最下部に「※ 導入前は2026年1〜3月、導入後は2026年8〜10月の月平均。掲載は事前に了承を得ている。」と入れてください。会社名と数字は私が書いたものだけを使い、新しい情報を足さないでください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「図形」→「四角形: 角を丸くする」で写真の枠を置き、枠を選んだまま「図形の書式」→「図形の塗りつぶし」→「図」を選んで、写真を入れます。こうすると、写真が枠の形に切り抜かれ、縦横の比率もそろいます。右側は「挿入」→「テキスト ボックス」で、お客さま・課題・取り組みを置き、左の札（「課題」など）は、小さな角丸四角形に文字を入れて作ります。成果の帯は、薄い灰色の四角形の上に、数字用のテキスト ボックスを3つ並べます。',
    'Googleスライドでは、「挿入」→「画像」で写真を入れ、ツールバーの画像を切り抜く機能（トリミング）で、枠の縦横比にそろえます。右側の文や札は、PowerPointと同じようにテキスト ボックスと図形で作ります。社外に出す事例では、写真の中に写り込んだ人の顔や、お店の名前の看板が映ってよいかを、必ず先方に確認します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。写真の枠は、本物の画像（imgタグ）に差し替えて、枠の大きさに合わせて切り抜く指定（object-fit: cover）を足してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-side="{{side}}" data-focus="{{focus}}">
  <p class="kicker">導入事例　和菓子店</p>
  <h1 class="title">ネット予約で、電話の予約を月120件減らしました</h1>

  <div class="body">
    <!-- 写真の枠。本物の画像に差し替える -->
    <div class="photo">
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 20l3-10h30l3 10M6 20h36M6 20c0 3 2.5 5 5 5s5-2 5-5c0 3 2.5 5 5 5h6c2.5 0 5-2 5-5 0 3 2.5 5 5 5s5-2 5-5M10 26v14h28V26M20 40V31h8v9" /></svg>
      <span>店舗の写真を入れる枠</span>
    </div>

    <div class="main">
      <div class="who"><b>たちばな堂（和菓子店）</b><span>埼玉県川越市・創業1952年・従業員14人</span></div>
      <div class="block"><span class="label">課題</span><span class="text">電話予約が月に約300件。営業時間中は電話に出るため、製造の手が止まっていた。</span></div>
      <div class="block"><span class="label">取り組み</span><span class="text">ネット予約を導入。受け取り日時を選ぶ形にし、確認の連絡がLINEに届くようにした。</span></div>

      <div class="results">
        <span class="label label-r">成果</span>
        <div class="res">
          <div class="r">
            <span class="rk">電話の予約（月）</span>
            <span class="rv"><span class="from">300</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg><b>180</b><small>件</small></span>
            <span class="rs">月120件減（−40%）</span>
          </div>
          <div class="r">
            <span class="rk">聞き間違い（月）</span>
            <span class="rv"><span class="from">6</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg><b>0</b><small>件</small></span>
            <span class="rs">ゼロに</span>
          </div>
          <div class="r">
            <span class="rk">効果が出るまで</span>
            <span class="rv"><b>2</b><small>か月</small></span>
            <span class="rs">導入から</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <p class="note">※ 導入前は2026年1〜3月、導入後は2026年8〜10月の月平均。掲載は事前に了承を得ている。</p>
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

.body { flex: 1; display: flex; gap: 28px; margin: 16px 0 10px; min-height: 0; }
.photo { flex: 0 0 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; border-radius: 12px; background: #f3f4f7; border: 2px dashed #c3c8d2; color: #8a8f9c; font-size: 15px; }
.photo svg { width: 64px; height: 64px; }
.main { flex: 1; display: flex; flex-direction: column; gap: 10px; min-width: 0; min-height: 0; }
.who { display: flex; flex-direction: column; gap: 0; }
.who b { font-size: 22px; font-weight: 800; line-height: 1.3; }
.who span { font-size: 16px; color: #5a6070; }
.block { display: grid; grid-template-columns: 76px minmax(0, 1fr); column-gap: 12px; align-items: start; }
.label { justify-self: start; padding: 2px 12px; border-radius: 999px; background: #f3f4f7; color: #5a6070; font-size: 15px; font-weight: 800; }
.text { font-size: 16px; line-height: 1.5; color: #1f2430; }
.results { display: grid; grid-template-columns: 76px minmax(0, 1fr); column-gap: 12px; align-items: start; margin-top: auto; padding: 12px 14px 12px 12px; border-radius: 10px; background: #f3f4f7; }
.label-r { background: #fff; }
.res { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
.r { display: flex; flex-direction: column; min-width: 0; }
.rk { font-size: 15px; color: #5a6070; }
.rv { display: flex; align-items: baseline; gap: 4px; font-variant-numeric: tabular-nums; line-height: 1.15; }
.from { font-size: 20px; font-weight: 700; color: #8a8f9c; }
.rv svg { align-self: center; width: 16px; height: 16px; color: #8a8f9c; flex: none; }
.rv b { font-size: 36px; font-weight: 800; }
.rv small { font-size: 18px; font-weight: 700; }
.rs { font-size: 15px; font-weight: 700; color: #5a6070; }

/* 強調（つまみ: 強調） */
.slide[data-focus="results"] .results { background: color-mix(in srgb, var(--accent) 8%, #fff); box-shadow: inset 0 0 0 2px var(--accent); }
.slide[data-focus="results"] .label-r { background: var(--accent); color: #fff; }
.slide[data-focus="results"] .rv b { color: var(--accent); }

/* 写真の位置（つまみ: 写真の位置） */
.slide[data-side="right"] .body { flex-direction: row-reverse; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'side',
      type: 'select',
      label: '写真の位置',
      value: 'left',
      options: [
        { value: 'left', label: '左' },
        { value: 'right', label: '右' },
      ],
    },
    {
      key: 'focus',
      type: 'select',
      label: '強調',
      value: 'results',
      options: [
        { value: 'results', label: '成果の帯を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
  ],
  cautions: [
    '成果は、必ず数字で書きます。「業務が楽になった」「満足いただけた」だけでは、ほかの会社が自分に置き換えて考えられません。前と後の数字を並べ、測った期間も注記に書きます。',
    'お客さまの名前・写真・数字を載せるときは、事前に書面かメールで許可をもらいます。口頭の了解だけでは、あとで取り下げを求められたときに困ります。名前を出せないときは、業種・規模・地域だけにします。',
    '課題から書き始めるのがこつです。製品の機能の説明から書くと、読み手は「自分には関係ない」と思います。お客さまが何に困っていたかを先に書けば、同じ悩みを持つ人が読んでくれます。',
    '1枚に詰め込みすぎないことです。課題・取り組み・成果が各2文を超えると、文字が小さくなります。詳しい経緯は、別の資料か、ホームページの事例ページに回します。',
  ],
  similar: [
    { slug: 'case-compare', diff: 'ケース横断比較型は、いくつかの事例を同じ項目で並べて比べる型です。事例紹介カード型は、1件を詳しく紹介します。' },
    { slug: 'testimonial', diff: '顧客の声＋成果型は、お客さまの言葉と数字の成果を並べる型です。事例紹介カード型は、課題や取り組みの経緯まで含めて紹介します。' },
    { slug: 'problem-solution', diff: '課題・原因・解決型は、課題から解決策までの筋道を矢印でつなぐ型です。自社の課題の説明には向いていますが、お客さまの事例には、写真と成果を添えた事例紹介カード型が向いています。' },
  ],
  faq: [
    {
      q: '事例の資料に、お客さまの会社名を出せないときはどうすればいいですか？',
      a: '「製造業・従業員50人・関東」のように、業種・規模・地域を書きます。社名を伏せる場合も、成果の数字や写真を載せてよいかは、先方に確認してから載せます。許可の範囲で、会社名の代わりに「A社」と書く方法もあります。',
    },
    {
      q: '事例に載せる写真は、どんなものがいいですか？',
      a: 'お客さまの店舗・工場・オフィスの外観や、実際にサービスを使っている場面が向いています。人が写る場合は、本人の了承を得ます。写真が用意できないときは、お客さまのロゴや、成果を示すグラフでも代わりになります。',
    },
    {
      q: '事例の数字は、どれくらいの期間で測ればいいですか？',
      a: '導入前と導入後で、同じ長さの期間にそろえます。見本のように、前は3か月の月平均、後も3か月の月平均、と同じ条件にします。短い期間の数字は一時的な変化かもしれないので、期間も注記に書きます。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
