import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'as-is-to-be',
  no: 77,
  category: 'teian',
  name: '現状・理想・差分型',
  en: 'As-is / To-be gap',
  aka: ['現状と理想', 'ギャップ分析', 'As-Is To-Be', 'あるべき姿と現状', '現状とのギャップ'],
  mode: 'static',
  title: '現状・理想・差分とは？ギャップと打ち手を1枚で見せる作り方【PowerPoint・Googleスライド】',
  description:
    '「今の姿」と「目指す姿」を並べ、その差と埋める打ち手を示す現状・理想・差分型のスライドを見本で解説。PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '今の姿と目指す姿を並べ、その差と埋める打ち手を示す。',
  what: [
    '項目ごとに1行ずつ、「現状 → 理想」の数字を並べ、その右に差と、差を埋める打ち手を置く型です。見本では営業部の見積もり業務を3項目（作成の手間・受注までの日数・誤りの件数）で整理し、差の列だけをアクセント色で目立たせています。いちばん上の見出しには、理想の姿を1文で書きます。',
    '現状と理想が同じ項目・同じ単位で左右に並んでいるので、聞き手は「どこがどれだけ足りないか」をそのまま読み取れます。差を数字で書くのが決まりごとです。「もっと早く」のような言い方だけでは、打ち手が効いたかどうかを後で確かめられません。行の数は3〜5つに絞ります。',
  ],
  when: [
    '改善プロジェクトの最初に、なぜ取り組むのかを上司や関係部署に説明するとき',
    '予算を申請するときに、「今の困りごと」と「投資で得られる姿」を1枚で示したいとき',
    '中期計画で、現在地と目標の差を項目ごとに確認するとき',
    '導入後の振り返りで、目標に対してどこまで近づいたかを見せるとき',
  ],
  avoid: [
    '現状の数字がまだ測れていないとき（数字の無い「現状・理想」は感想になるので、先に測るか、課題・原因・解決型で原因から説明する）',
    '理想が複数の案に分かれ、どれにするかを選んでもらいたいとき（2カラム比較型にする）',
    '変化の前後を写真や画面で見せたいとき（Before／After型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「現状・理想・差分型（as-is / to-be gap）」で作ってください。いちばん上に小さく「営業部の見積もり業務」、その下に結論の見出し「見積もりの手間を3分の1にし、受注まで8日にする」を1行で置きます。その下に表を置き、1行目は見出し行（項目・現状・理想・差・埋める打ち手）、続く3行を次の内容にしてください。1行目＝見積もりの作成：現状45分／件、理想15分／件、差30分短縮、打ち手「ひな形と単価表を1つにそろえる」。2行目＝受注までの日数：現状12日、理想8日、差4日短縮、打ち手「承認を2段階から1段階に減らす」。3行目＝見積書の誤り：現状9件／月、理想1件／月、差8件減、打ち手「金額の計算を自動にする」。現状の数字は灰色、理想の数字は黒で、どちらも太く大きく（28pt以上）し、2つの間に小さな矢印を置きます。差の列は「{{diff:t}}」にしてください（強調するときは、差の文字をアクセント色{{accent:t}}にして、列に薄いアクセント色の背景を敷く）。打ち手の列は「{{actions:t}}」にしてください（表示するときは、16pt以上の灰色の文字で右端に置く）。各行は白い背景に細い灰色の枠線の角丸の帯にします。文字の大きさは、見出し32〜36pt、項目名18pt以上、注記12pt以上。最下部に「※ 現状は2026年4〜9月の営業部の実績。理想は2027年3月末の目標。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で6列×4行の表を作り、1行目を見出し、2〜4行目を項目にします。現状と理想の間の矢印は、小さな列を1つ設けて「挿入」→「図形」→「矢印: 右」を置くか、文字の「→」で代えても構いません。差の列は、その列のセルを選んで「テーブル デザイン」→「塗りつぶし」で薄い色を付け、文字の色をアクセント色にします。表の罫線は横線だけを残し、縦線は消すと資料らしくすっきりします。数字は太字にして24pt以上にしてください。',
    'Googleスライドでも「挿入」→「表」で同じ6列×4行の表を作ります。セルを選び、上のバーの「塗りつぶしの色」と「文字の色」で差の列を強調し、「枠線の色」「枠線の太さ」で縦の線を消します。数字がずれるときは、数字の列を選んで右揃えにすると桁がそろいます。項目が多くて表が大きくなるときは、ExcelやGoogleスプレッドシートで表を作り、必要な行だけを貼り付けると直しやすくなります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。行は同じ形の帯の繰り返しなので、項目を増やしたいときは1行ぶんのかたまりをコピーして、数字と文だけを書き換えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-actions="{{actions}}" data-diff="{{diff}}">
  <p class="kicker">営業部の見積もり業務</p>
  <h1 class="title">見積もりの手間を3分の1にし、受注まで8日にする</h1>

  <div class="table">
    <div class="row head">
      <span>項目</span><span>現状</span><span></span><span>理想</span><span class="c-diff">差</span><span class="c-act">埋める打ち手</span>
    </div>

    <div class="row">
      <span class="item">見積もりの作成</span>
      <span class="now">45分<small>/件</small></span><span class="arrow">→</span><span class="goal">15分<small>/件</small></span>
      <span class="c-diff diff"><b>30分短縮</b></span>
      <span class="c-act act">ひな形と単価表を1つにそろえる</span>
    </div>
    <div class="row">
      <span class="item">受注までの日数</span>
      <span class="now">12日</span><span class="arrow">→</span><span class="goal">8日</span>
      <span class="c-diff diff"><b>4日短縮</b></span>
      <span class="c-act act">承認を2段階から1段階に減らす</span>
    </div>
    <div class="row">
      <span class="item">見積書の誤り</span>
      <span class="now">9件<small>/月</small></span><span class="arrow">→</span><span class="goal">1件<small>/月</small></span>
      <span class="c-diff diff"><b>8件減</b></span>
      <span class="c-act act">金額の計算を自動にする</span>
    </div>
  </div>

  <p class="note">※ 現状は2026年4〜9月の営業部の実績。理想は2027年3月末の目標。</p>
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

.table { flex: 1; display: grid; grid-template-rows: 34px repeat(3, 1fr); gap: 10px; margin: 18px 0 12px; }
.row { display: grid; grid-template-columns: 168px 118px 30px 118px 140px 1fr; align-items: center; }
.head { padding-bottom: 4px; border-bottom: 2px solid #e3e5ea; font-size: 16px; font-weight: 800; color: #5a6070; align-items: end; }
.head > :first-child, .item { padding-left: 18px; }
.row:not(.head) { padding-right: 18px; border: 2px solid #e3e5ea; border-radius: 12px; }
.item { font-size: 19px; font-weight: 800; }
.now, .goal { font-size: 30px; font-weight: 800; line-height: 1.1; white-space: nowrap; }
.now { color: #5a6070; }
small { margin-left: 2px; font-size: 15px; font-weight: 700; color: #8a8f9c; }
.arrow { text-align: center; color: #8a8f9c; font-size: 22px; }
.c-diff { text-align: center; }
.head .c-act { padding-left: 18px; }
.diff { align-self: stretch; display: grid; place-items: center; }
.diff b { font-size: 22px; font-weight: 800; color: var(--accent); }
.act { padding-left: 18px; font-size: 16px; color: #5a6070; line-height: 1.45; }
.note { margin: auto 0 0; font-size: 13px; color: #8a8f9c; }

/* 差の強調（data-diff="on"）／ 打ち手の列を隠す（data-actions="hide"） */
.slide[data-diff="on"] .diff { background: color-mix(in srgb, var(--accent) 9%, #fff); margin: -2px 0; }
.slide[data-diff="on"] .head .c-diff { color: var(--accent); }
.slide[data-diff="off"] .diff b { color: #1f2430; }
.slide[data-actions="hide"] .c-act { display: none; }
.slide[data-actions="hide"] .row { grid-template-columns: 210px 170px 60px 170px 1fr; }
.slide[data-actions="hide"] .now, .slide[data-actions="hide"] .goal { font-size: 36px; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'diff',
      type: 'select',
      label: '差の列',
      value: 'on',
      options: [
        { value: 'on', label: '色で強調する' },
        { value: 'off', label: '強調しない' },
      ],
    },
    {
      key: 'actions',
      type: 'select',
      label: '打ち手の列',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '現状と理想を、同じ項目・同じ単位でそろえます。現状は「分」で理想は「時間」のように単位が違うと、差が一目で読めません。差の列には必ず計算した値（30分短縮など）を書き、聞き手に引き算をさせないようにします。',
    '理想の数字には、誰が決めた目標なのか、いつまでの目標なのかを注記に書きます。根拠のない理想は「ただの願い」に見えて、打ち手の説得力も下がります。',
    '打ち手は、差の1行につき1つに絞ります。1つの差に打ち手が3つも4つも並ぶと、どれが本命なのか分かりません。細かい打ち手は次のスライド（アクション一覧型）に回します。',
    '差が小さい項目まで並べないこと。5行を超えると文字が小さくなり、大事な差が埋もれます。差が大きい3〜4項目に絞り、残りは別の資料に載せます。',
  ],
  similar: [
    { slug: 'before-after', diff: 'Before／After型は、同じものの変化の前後を並べて「変わった結果」を見せる型です。現状・理想・差分型は、まだ達成していない理想との差と、それを埋める打ち手を見せます。' },
    { slug: 'problem-solution', diff: '課題・原因・解決型は、困りごとの原因をたどって解決策につなぐ型です。現状・理想・差分型は、原因よりも「いまの数字と目標の数字の差」を主役にします。' },
    { slug: 'target-actual', diff: '目標・実績型は、目標に対してどこまで達成したかをグラフで見せる型です。現状・理想・差分型は、これから埋める差と、その打ち手を表で示します。' },
  ],
  faq: [
    {
      q: 'As-Is／To-Beとは何ですか？',
      a: 'As-Is（アズイズ）は「現状の姿」、To-Be（トゥービー）は「あるべき姿・理想の姿」のことです。この2つの差をギャップと呼び、ギャップを埋めるための手を打ち手として考えます。業務改善やシステム導入の企画書でよく使われる考え方です。',
    },
    {
      q: '現状・理想・差分のスライドはPowerPointで作れますか？',
      a: '作れます。表（挿入→表）だけで作れる型なので、図形が苦手な人にも向いています。差の列の背景を薄い色にして文字をアクセント色にするだけで、見本のように差が目立ちます。',
    },
    {
      q: 'AIに作らせるときのコツはありますか？',
      a: '項目名・現状の数字・理想の数字・差・打ち手を、行ごとに全部書いて渡すことです。「差はあなたが計算して」と任せると、数字が合わなくなることがあります。最後に「数字は私が書いたものだけを使ってください」と書き添えてください。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
