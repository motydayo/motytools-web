import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'raci',
  no: 60,
  category: 'keikaku',
  name: 'RACI責任分担型',
  en: 'RACI chart',
  aka: ['RACI', 'RACIチャート', '責任分担表', '役割分担表', 'RACI表', '責任分担マトリクス'],
  mode: 'static',
  title:
    'RACIとは？責任分担表の作り方と見本【PowerPoint・Googleスライド】',
  description:
    '作業ごとに「実行・最終責任・相談・報告」の役を表にする「RACI責任分担型」のスライドを見本で解説。Aを1人にする決まり、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '作業ごとに、誰が実行・承認・相談・報告の役かを表にする。',
  what: [
    '縦に作業、横に関わる人（部署）を並べ、交わるマスに4つの文字のどれかを書く表です。R（Responsible）は実際に手を動かす人、A（Accountable）は最終的な責任をもって承認する人、C（Consulted）は事前に相談を受ける人、I（Informed）は結果を知らせる人です。見本では新サービス立ち上げの6つの作業を5つの部署に割り振っています。最終責任者のAだけを色付きの濃い丸にして、各行にAが1つだけあることが目で追えるようにしています。',
    'RACIのよさは、「誰が決めるのか」「誰に聞くのか」があいまいなまま仕事が止まるのを防げることです。決まりごとは2つあります。1つの作業にAは必ず1人だけ（2人いると責任が分かれて誰も決められない）、Rは1人以上いること（誰も実行しない作業をなくす）。A とR が同じ人になってもかまいません。',
  ],
  when: [
    '新しいプロジェクトの立ち上げで、部署をまたぐ作業の担当を最初にそろえたいとき',
    '「誰の承認が要るのか分からない」と作業が止まる問題を解決したいとき',
    '組織変更や引き継ぎで、仕事ごとの責任を整理し直すとき',
    '監査や社内規程のために、業務の責任の所在を資料に残すとき',
  ],
  avoid: [
    '作業の順番や、担当の間の受け渡しを描きたいとき（スイムレーン型にする）',
    '組織の上下関係を見せたいとき（組織図型にする）',
    '作業の期限や日付まで管理したいとき（アクション一覧型で期限を書く）',
  ],
  prompt:
    '16:9のスライドを1枚、「RACI責任分担型（RACI chart）」で作ってください。いちばん上に小さく「新サービス立ち上げの責任分担表（RACI）」、その下に結論の見出し「作業ごとに、最終責任者（A）は必ず1人にする」を置きます。その下に表を置き、左の列に作業名（太字18pt）、右に5つの役割の列（企画リーダー・営業部・開発部・法務部・経営会議。見出しは16pt・中央そろえ）を並べて、見出し行の下に濃い線、各行の間に細い灰色の線を引いてください。各マスには、32ptの丸の中にR・A・C・Iのどれかの文字を入れ、関わらないマスは空欄（短い灰色の線）にします。行は上から、「料金プランを決める」＝R・C・C・I・A、「契約書のひな形を作る」＝A・C・空欄・R・I、「管理画面を開発する」＝A・C・R・空欄・I、「販売資料を作る」＝A・R・C・C・空欄、「個人情報の扱いを確認する」＝C・I・R・A・I、「発売日を決定する」＝R・C・C・I・A（左から順に企画リーダー・営業部・開発部・法務部・経営会議）です。強調は「{{focus:t}}」にしてください（Aだけ濃くするときは、Aの丸をアクセント色{{accent:t}}で塗って白文字にし、Rの丸は薄いアクセント色に濃い文字、CとIは灰色の丸にする）。凡例は「{{legend:t}}」にしてください（表示するときは、表の下に「R 実行する」「A 最終責任をもつ」「C 事前に相談する」「I 結果を知らせる」を丸の文字つきで横に並べる）。色はアクセント色の1色と灰色だけ。見出しは32〜36pt。最下部に「※ 空欄は関わらない。1つの作業にAは1人だけ。」と注記を入れてください。内容は私が書いたものだけを使い、新しい作業や部署を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で6列×7行の表を作り、1行目に役割名、1列目に作業名を入れます。各マスは文字を打つだけでも作れますが、丸にするなら「挿入」→「図形」→「楕円」を小さく作り、中に文字を入れ、複製して各マスに置きます。Aの丸だけ色を変えると、各行に1つずつあることが見て分かります。表の罫線は「テーブルデザイン」から横線だけにすると、すっきりします。',
    'Googleスライドでも「挿入」→「表」で同じ形の表を作り、各マスに文字を入れます。丸にしたいときは「挿入」→「図形」→「図形」から楕円を重ねます。作業数が10行を超えるときは、無理にスライドへ入れず、表計算ソフト（ExcelやGoogleスプレッドシート）で作った表を配り、スライドには主要な作業だけを載せる方が読みやすくなります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。表は列を同じ幅で並べているので、担当が変わったときはマスの文字（R・A・C・I）を書き換えるだけです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-legend="{{legend}}">
  <p class="kicker">新サービス立ち上げの責任分担表（RACI）</p>
  <h1 class="title">作業ごとに、最終責任者（A）は必ず1人にする</h1>
  <div class="rc-table">
    <span class="rc-corner">作業</span>
    <span class="rc-role">企画リーダー</span>
    <span class="rc-role">営業部</span>
    <span class="rc-role">開発部</span>
    <span class="rc-role">法務部</span>
    <span class="rc-role">経営会議</span>
    <span class="rc-task">料金プランを決める</span>
    <span class="rc-cell"><b class="rc-l rc-r">R</b></span>
    <span class="rc-cell"><b class="rc-l rc-c">C</b></span>
    <span class="rc-cell"><b class="rc-l rc-c">C</b></span>
    <span class="rc-cell"><b class="rc-l rc-i">I</b></span>
    <span class="rc-cell"><b class="rc-l rc-a">A</b></span>
    <span class="rc-task">契約書のひな形を作る</span>
    <span class="rc-cell"><b class="rc-l rc-a">A</b></span>
    <span class="rc-cell"><b class="rc-l rc-c">C</b></span>
    <span class="rc-cell"><i class="rc-none"></i></span>
    <span class="rc-cell"><b class="rc-l rc-r">R</b></span>
    <span class="rc-cell"><b class="rc-l rc-i">I</b></span>
    <span class="rc-task">管理画面を開発する</span>
    <span class="rc-cell"><b class="rc-l rc-a">A</b></span>
    <span class="rc-cell"><b class="rc-l rc-c">C</b></span>
    <span class="rc-cell"><b class="rc-l rc-r">R</b></span>
    <span class="rc-cell"><i class="rc-none"></i></span>
    <span class="rc-cell"><b class="rc-l rc-i">I</b></span>
    <span class="rc-task">販売資料を作る</span>
    <span class="rc-cell"><b class="rc-l rc-a">A</b></span>
    <span class="rc-cell"><b class="rc-l rc-r">R</b></span>
    <span class="rc-cell"><b class="rc-l rc-c">C</b></span>
    <span class="rc-cell"><b class="rc-l rc-c">C</b></span>
    <span class="rc-cell"><i class="rc-none"></i></span>
    <span class="rc-task">個人情報の扱いを確認する</span>
    <span class="rc-cell"><b class="rc-l rc-c">C</b></span>
    <span class="rc-cell"><b class="rc-l rc-i">I</b></span>
    <span class="rc-cell"><b class="rc-l rc-r">R</b></span>
    <span class="rc-cell"><b class="rc-l rc-a">A</b></span>
    <span class="rc-cell"><b class="rc-l rc-i">I</b></span>
    <span class="rc-task">発売日を決定する</span>
    <span class="rc-cell"><b class="rc-l rc-r">R</b></span>
    <span class="rc-cell"><b class="rc-l rc-c">C</b></span>
    <span class="rc-cell"><b class="rc-l rc-c">C</b></span>
    <span class="rc-cell"><b class="rc-l rc-i">I</b></span>
    <span class="rc-cell"><b class="rc-l rc-a">A</b></span>
  </div>
  <div class="rc-legend">
    <span class="rc-key"><b class="rc-l rc-r">R</b>実行する</span>
    <span class="rc-key"><b class="rc-l rc-a">A</b>最終責任をもつ</span>
    <span class="rc-key"><b class="rc-l rc-c">C</b>事前に相談する</span>
    <span class="rc-key"><b class="rc-l rc-i">I</b>結果を知らせる</span>
  </div>
  <p class="note">※ 空欄は関わらない。1つの作業にAは1人だけ。</p>
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
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

.rc-table {
  flex: 1;
  display: grid;
  grid-template-columns: 236px repeat(5, minmax(0, 1fr));
  grid-template-rows: 44px repeat(6, 1fr);
  margin: 14px 0 6px;
  min-height: 0;
}
.rc-corner, .rc-role { align-self: end; padding-bottom: 8px; font-size: 16px; font-weight: 700; color: #5a6070; border-bottom: 2px solid #1f2430; }
.rc-role { text-align: center; }
.rc-task, .rc-cell { display: flex; align-items: center; border-bottom: 1px solid #e3e5ea; }
.rc-task { font-size: 18px; font-weight: 700; }
.rc-cell { justify-content: center; }
.rc-l { display: inline-grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; font-size: 17px; font-weight: 800; }
.rc-none { width: 14px; height: 2px; background: #e3e5ea; }
/* 4つとも同じ濃さ（data-focus="same"）は灰色の丸にそろえる */
.rc-l { background: #f3f4f7; color: #5a6070; }
.slide[data-focus="a"] .rc-a { background: var(--accent); color: #fff; }
.slide[data-focus="a"] .rc-r { background: color-mix(in srgb, var(--accent) 16%, #fff); color: var(--accent); }
.slide[data-focus="same"] .rc-l { background: #e8ebf1; color: #1f2430; }
/* 凡例 */
.rc-legend { display: flex; gap: 22px; padding: 6px 0 12px; font-size: 16px; color: #5a6070; }
.rc-key { display: inline-flex; align-items: center; gap: 8px; }
.rc-key .rc-l { width: 26px; height: 26px; font-size: 15px; }
.slide[data-legend="hide"] .rc-legend { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する文字',
      value: 'a',
      options: [
        { value: 'a', label: 'A（最終責任者）だけ濃く' },
        { value: 'same', label: '4つとも同じ濃さ' },
      ],
    },
    {
      key: 'legend',
      type: 'select',
      label: '凡例（R・A・C・Iの意味）',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '1つの作業にAを2人付けないようにします。「営業部と開発部の両方が承認者」とすると、意見が割れたときに誰も決められなくなります。どうしても決められないときは、上位の人（部長など）を1人のAにします。',
    'RばかりでCとIを書かない表が多く見られます。誰に相談し、誰に知らせるかが決まっていないと、後から「聞いていない」という揉めごとが出ます。CとIまで書いて初めて意味のある表になります。',
    '全員に何かの役を付けようとして、表がR・A・C・Iで埋まらないようにします。関わらない人は空欄にして、「誰が関わるか」も表で見せます。',
    'R・A・C・Iを英語のまま使うなら、凡例を必ず付けます。初めて見る人にとっては記号の意味が分からないので、表の下に日本語で意味を1行書いておきます。',
  ],
  similar: [
    { slug: 'swimlane', diff: 'スイムレーン型は、担当ごとの列に分けて業務の流れ（順番）を描く型です。RACI責任分担型は、順番ではなく役割の種類を見せます。' },
    { slug: 'org-chart', diff: '組織図型は、部署や人の上下の関係を木の形で見せる型です。RACI責任分担型は、作業ごとの責任を見せます。' },
    { slug: 'action-list', diff: 'アクション一覧型は、誰が・何を・いつまでにやるかを表にする型です。RACI責任分担型は、期限ではなく責任の種類を整理します。' },
  ],
  faq: [
    {
      q: 'RACIとは何の略ですか？',
      a: 'Responsible（実行する人）、Accountable（最終責任をもつ人）、Consulted（事前に相談を受ける人）、Informed（結果を知らされる人）の頭文字です。仕事ごとに、この4つの役を誰が担うかを決めて表にします。',
    },
    {
      q: 'RACIのRとAは同じ人でもいいですか？',
      a: 'かまいません。小さな作業では、実行する人が同時に最終責任者になることがよくあります。大事なのは、各作業にAがちょうど1人いることと、Rが1人以上いることです。',
    },
    {
      q: 'RACIの表はPowerPointとExcelのどちらで作るのがよいですか？',
      a: '作業が多く、担当が頻繁に変わるならExcelやGoogleスプレッドシートが管理に向いています。会議で説明するならPowerPointやGoogleスライドで主要な作業だけを見せる形が伝わります。両方を使い分けるのが現実的です。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
