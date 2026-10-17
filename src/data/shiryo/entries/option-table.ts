import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'option-table',
  no: 23,
  category: 'kousei',
  name: '選択肢比較表型',
  en: 'Option comparison table',
  aka: ['比較表', '3案比較', '選択肢の比較', '比較マトリクス', '製品比較表'],
  mode: 'static',
  title: '比較表の作り方｜3つ以上の案を並べて選んでもらう「選択肢比較表型」【見本つき】',
  description:
    '3つ以上の案を同じ項目で表にして比べる「選択肢比較表型」のスライドを見本で解説。推奨案の目立たせ方、○△×の使い方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '3つ以上の案を同じ項目で表に並べ、推奨する列だけを目立たせる。',
  what: [
    '縦に比べる項目、横に案を並べた表で、3つ以上の選択肢を一度に比べる型です。見本では、勤怠管理システムの3案（ピタッと勤怠・タイムノート・出勤くん）を、月額・初期費用・導入期間・スマホで打刻・給与ソフトとの連携・サポートの6項目で比べています。推奨する案Aの列だけを、アクセント色の見出しと淡い色の背景、太い枠線で目立たせています。',
    'この型のよさは、全部の案を同じ物差しで見せられることです。項目の順番と書き方が全案でそろっているので、聞き手は縦に読めば優劣が分かります。決まりごとは、比べる項目を6つ前後に絞ることと、見出しに「どの案が最良か」の結論を書くことです。○△×を使うなら、必ず言葉も添えます。',
  ],
  when: [
    '製品やサービスの候補が3つ以上あり、1つに絞る会議の資料をつくるとき',
    '複数の業者から出た見積もりを、同じ項目で比べて報告するとき',
    '料金プランや契約形態の違いを、お客さまに一覧で説明するとき',
    '社内の制度の選択肢（A案・B案・C案）を、決裁者に比べてもらうとき',
  ],
  avoid: [
    '案が2つだけのとき（2カラム比較型の方が、大きな文字で見せられる）',
    '比べる項目が10個以上あるとき（文字が小さくなる。重要な6つに絞り、残りは付録の表にする）',
    '推奨を1つ大きく見せて、決断を促したいとき（推奨案強調型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「選択肢比較表型（option comparison table）」で作ってください。いちばん上に小さく「勤怠管理システムの選定（30人で利用）」、その下に結論の見出し「案Aが、費用・期間・使いやすさのバランスで最良」を置きます。その下に、4列×7行の表を作ってください。1行目は、左端を空欄にし、右に3つの案の見出し「案A ピタッと勤怠」「案B タイムノート」「案C 出勤くん」を置きます。左端の列（項目名）は表全体の{{lab:t}}の幅にし、16ptの太字・灰色にします。項目と値は、月額（30人）：0.9万円・1.2万円・0.75万円、初期費用：0円・5万円・0円、導入期間：2週間・1か月・3か月、スマホで打刻：「○ できる」「○ できる」「× できない」、給与ソフトとの連携：「○ 自動」「△ 手作業が要る」「○ 自動」、サポート：メールのみ・電話・メール・電話・メール。値は太字18〜20ptで、○△×は必ず言葉を添えてください。強調は「{{pick:t}}」にします（強調する案の列は、見出しをアクセント色{{accent:t}}で塗って白い文字にし、列全体に淡い色の背景と太さ3ptの枠線を付け、見出しに「推奨」の札を添える）。最下部に注記「※ 税抜。導入期間は契約から全員が使い始めるまで。」を13ptで入れます。色はアクセント色の1色だけで、ほかは白・灰色・黒にします。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で4列×7行の表を作ります。「テーブルデザイン」→「表のスタイル」で、色の少ないシンプルなスタイルを選びます。推奨する案の列だけ、列を選んで「テーブルデザイン」→「塗りつぶし」で淡い色にし、見出しのセルはアクセント色に塗って、文字を白にします。列を囲む太い枠線は、列を選んで「テーブルデザイン」→「罫線」で「左罫線」「右罫線」を選び、太さを3ptにしてください。○△×は文字として打ち込みますが、あとで探しやすいよう言葉も並べて書いておきます。',
    'Googleスライドでは、「挿入」→「表」で4×7の表を作ります。列の幅は、表の枠線をドラッグして調整します。強調する列のセルを選んで「塗りつぶしの色」を変え、ツールバーに出る「枠線の色」「枠線の太さ」のボタンで枠を付けます。値を何度も差し替えるときは、Googleスプレッドシートで先に表を作って、スライドに「貼り付け」ると手間が減ります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。強調する列は、<section>の data-pick の数字（1〜3、なしなら none）を書き換えるだけで切り替わります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-pick="{{pick}}">
  <p class="kicker">勤怠管理システムの選定（30人で利用）</p>
  <h1 class="title">案Aが、費用・期間・使いやすさのバランスで最良</h1>

  <table>
    <tr>
      <th class="label"></th>
      <th class="opt"><span class="no">案A</span><span class="name">ピタッと勤怠</span><span class="badge">推奨</span></th>
      <th class="opt"><span class="no">案B</span><span class="name">タイムノート</span><span class="badge">推奨</span></th>
      <th class="opt"><span class="no">案C</span><span class="name">出勤くん</span><span class="badge">推奨</span></th>
    </tr>
    <tr><th class="label">月額（30人）</th><td>0.9万円</td><td>1.2万円</td><td>0.75万円</td></tr>
    <tr><th class="label">初期費用</th><td>0円</td><td>5万円</td><td>0円</td></tr>
    <tr><th class="label">導入期間</th><td>2週間</td><td>1か月</td><td>3か月</td></tr>
    <tr><th class="label">スマホで打刻</th><td><span class="mk">○</span>できる</td><td><span class="mk">○</span>できる</td><td><span class="mk">×</span>できない</td></tr>
    <tr><th class="label">給与ソフトとの連携</th><td><span class="mk">○</span>自動</td><td><span class="mk">△</span>手作業が要る</td><td><span class="mk">○</span>自動</td></tr>
    <tr><th class="label">サポート</th><td>メールのみ</td><td>電話・メール</td><td>電話・メール</td></tr>
  </table>

  <p class="note">※ 税抜。導入期間は契約から全員が使い始めるまで。</p>
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
.kicker { margin: 0 0 6px; font-size: 15px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); }
.title { margin: 0; font-size: 34px; font-weight: 800; }

/* 表。行の高さは全部同じ */
table { flex: 1; width: 100%; margin: 14px 0 8px; table-layout: fixed; border-collapse: separate; border-spacing: 0; }
th, td { padding: 0 14px; border-bottom: 1px solid #e3e5ea; text-align: left; vertical-align: middle; font-size: 18px; font-weight: 800; font-variant-numeric: tabular-nums; }
tr:first-child > th { height: 62px; border-bottom: 2px solid #8a8f9c; }
.label { width: {{lab}}; font-size: 16px; font-weight: 700; color: #5a6070; }
.no { display: block; font-size: 14px; font-weight: 700; color: #5a6070; }
.name { font-size: 20px; }
.badge { display: none; margin-left: 8px; padding: 1px 10px; border-radius: 999px; background: #fff; color: var(--accent); font-size: 14px; }
.mk { margin-right: 6px; font-size: 20px; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 強調する列（data-pick="1" / "2" / "3" / "none"。1=案A・2=案B・3=案C） */
.slide[data-pick="1"] tr > :nth-child(2),
.slide[data-pick="2"] tr > :nth-child(3),
.slide[data-pick="3"] tr > :nth-child(4) {
  background: color-mix(in srgb, var(--accent) 7%, #fff);
  border-left: 3px solid var(--accent);
  border-right: 3px solid var(--accent);
}
.slide[data-pick="1"] tr:first-child > :nth-child(2),
.slide[data-pick="2"] tr:first-child > :nth-child(3),
.slide[data-pick="3"] tr:first-child > :nth-child(4) { background: var(--accent); color: #fff; border-radius: 10px 10px 0 0; }
.slide[data-pick="1"] tr:first-child > :nth-child(2) .no,
.slide[data-pick="2"] tr:first-child > :nth-child(3) .no,
.slide[data-pick="3"] tr:first-child > :nth-child(4) .no { color: rgba(255, 255, 255, 0.85); }
.slide[data-pick="1"] tr:last-child > :nth-child(2),
.slide[data-pick="2"] tr:last-child > :nth-child(3),
.slide[data-pick="3"] tr:last-child > :nth-child(4) { border-bottom: 3px solid var(--accent); border-radius: 0 0 10px 10px; }
.slide[data-pick="1"] tr:first-child > :nth-child(2) .badge,
.slide[data-pick="2"] tr:first-child > :nth-child(3) .badge,
.slide[data-pick="3"] tr:first-child > :nth-child(4) .badge { display: inline-block; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'pick',
      type: 'select',
      label: '強調する案',
      value: '1',
      options: [
        { value: '1', label: '案Aの列を強調' },
        { value: '2', label: '案Bの列を強調' },
        { value: '3', label: '案Cの列を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    { key: 'lab', label: '項目名の列の幅（表全体に対する%）', min: 20, max: 32, step: 4, value: 24, unit: '%' },
  ],
  cautions: [
    '○△×だけで済ませないでください。「△」だけでは、何がどれだけ足りないのか分かりません。見本のように「△ 手作業が要る」と短い言葉を添えると、質問が減ります。コピーして白黒で印刷しても読めます。',
    '項目の順番は、重要な順にします。いちばん上に「サポート」、最後に「月額」が来ると、聞き手は肝心の費用を見落とします。費用・期間・使いやすさのように、判断に効く順に並べます。',
    '推奨案に有利な項目だけを選ぶのは避けてください。後で「他の案の方が優れている点は？」と聞かれ、資料への信用を失います。推奨案が負けている項目（見本なら月額は案Cが最安）も、正直に載せます。',
    '色を付けるのは推奨列だけにします。○は緑、×は赤のように全部に色を付けると、どこを見ればいいのか分かりません。見本のように、強調は1列にそろえます。',
  ],
  similar: [
    { slug: 'two-column', diff: '2カラム比較型は、案が2つのときに、左右に大きな文字で並べる型です。3つ以上になったら選択肢比較表型にします。' },
    { slug: 'recommend', diff: '推奨案強調型は、複数の案のうち推奨を1つ大きく示す型です。選択肢比較表型は、全部の案を同じ大きさで比べ、その中で推奨を目立たせます。' },
    { slug: 'case-compare', diff: 'ケース横断比較型は、いくつかの事例を同じ項目で比べる型です。選択肢比較表型は、これから選ぶ候補の案を比べるのに使います。' },
  ],
  faq: [
    {
      q: '比較表は何項目までなら読めますか？',
      a: '縦は6〜7行、横は案が3〜4つが上限の目安です。これを超えると、文字を16pt以下にしないと入りません。多いときは、判断に効く項目に絞ったスライドと、全項目を載せた付録のスライドの2枚に分けます。',
    },
    {
      q: 'Excelの表をそのままPowerPointに貼ってもいいですか？',
      a: 'できます。Excelで範囲を選んでコピーし、PowerPointで「貼り付けのオプション」から「貼り付け先のスタイルを使用」を選びます。文字が小さいまま貼られるので、貼ったあとに表全体を選んで文字サイズを16pt以上に直してください。',
    },
    {
      q: '推奨案は左と右のどちらに置けばいいですか？',
      a: '表では、いちばん左の列（案A）に推奨案を置くのが一般的です。左端に近いほど先に読まれます。ただし、並びを決めたら、列の順番を途中で入れ替えないようにします。強調は色と枠で付けるので、位置にこだわる必要はありません。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
