import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'risk-register',
  no: 74,
  category: 'keikaku',
  name: 'リスク登録簿型',
  en: 'Risk register',
  aka: ['リスク管理表', 'リスク一覧表', 'リスクレジスター', 'リスクアセスメント表', '課題管理表'],
  mode: 'static',
  title: 'リスク管理表とは？リスク登録簿をスライド1枚で見せる作り方【見本・テンプレート】',
  description:
    '起こりうる問題と影響・対策を表にする「リスク登録簿型」のスライドを見本で解説。可能性×影響の点数の付け方、高い順に並べるコツ、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '起こりうる問題を点数の高い順に並べ、対策と担当まで表にする。',
  what: [
    '起こりうる問題を1行ずつ書き、「起こりやすさ（可能性）」「起きたときの大きさ（影響）」「点数」「対策」「担当」を横に並べた表です。見本は、新店舗のオープンまでのリスク管理表です。点数は可能性（低1・中2・高3）と影響（小1・中2・大3）を掛け算した値で、点数の高い順に並べています。点数6の「工事の遅れ」と「採用が間に合わない」の2行だけに色を付け、見出しに「開店前に手を打つのは点数6の2件」と結論を書いています。',
    'リスク登録簿のよさは、「何から手を付けるか」を、感覚ではなく点数で決められることです。リスクを洗い出すだけでは安心できません。点数を付けて並べ、上位のものから対策と担当を決めて初めて、会議で使える資料になります。スライドには上位5〜7件に絞り、全件の一覧は別の資料に残します。',
  ],
  when: [
    '新規出店・システム導入・イベントなど、期限のあるプロジェクトの開始時に、起こりうる問題を共有するとき',
    '定例会議で、リスクの状況と対策の進み具合を報告するとき',
    '上司や取引先に、「先を見て準備している」ことを示す提案書をつくるとき',
    '投資や契約の判断で、リスクと対策をまとめて説明するとき',
  ],
  avoid: [
    '起こるかどうかではなく、すでに起きている問題を報告したいとき（課題・原因・解決型にする）',
    'リスクの位置を、2つの軸で図に置いて見せたいとき（マトリクス型の方が一目で分かる）',
    '作業の担当と責任を決めたいとき（RACI責任分担型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「リスク登録簿型（risk register）」で作ってください。いちばん上に小さく「新店舗オープンのリスク管理表（10月時点）」、その下に結論の見出し「開店前に手を打つのは、点数6の2件」を置きます。その下に、7列の表を置きます。列は左から「No」「リスク」「可能性」「影響」「点数」「対策」「担当」で、見出しの行は灰色の地に白い太字にします。行は5つで、点数の高い順に並べます。1行目はNo1「工事の遅れで開店日が延びる」、可能性は中、影響は大、点数6、対策は「工程を週次で確認し、予備日を2週間とる」、担当は出店課。2行目はNo2「採用が間に合わず人手が足りない」、可能性は高、影響は中、点数6、対策は「求人媒体を追加し、10月末まで面接を続ける」、担当は人事部。3行目はNo3「開店告知の反応が弱い」、可能性は中、影響は中、点数4、対策は「開店2週間前に反応を見て広告を足す」、担当は販促課。4行目はNo4「仕入れ先の納品が遅れる」、可能性は低、影響は大、点数3、対策は「予備の仕入れ先を1社決めておく」、担当は仕入課。5行目はNo5「設備の初期不良」、可能性は低、影響は小、点数1、対策は「納品時に全数を確認する」、担当は設備課です。可能性と影響は「{{level:t}}」にしてください（表すときは、文字は「低・中・高」「小・中・大」の太字、点は3つの丸のうち、低と小は1つ、中は2つ、高と大は3つを塗る）。点数は丸の中に書いて、6以上は黒の丸に白い数字、3〜4は灰色の枠の丸、1〜2は薄い灰色の丸にします。強調は「{{focus:t}}」にしてください（強調するときは、点数6の2行をごく薄いアクセント色{{accent:t}}の地にして、点数の丸をアクセント色にし、「高」「大」の表示もアクセント色にする）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、表の中は16pt以上。最下部に「※ 点数＝可能性（低1・中2・高3）× 影響（小1・中2・大3）。点数の高い順に並べた。」と注記を入れてください。文言と数字は私が書いたものだけを使い、新しいものを足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で7列×6行（見出し1行＋リスク5行）の表を作ります。見出しの行は、「表のデザイン」→「塗りつぶし」で灰色にして、文字を白にします。列の幅は、列の境目をドラッグして、「No」は狭く、「リスク」と「対策」は広くします。点数は、リスクの数字を手計算せず、Excelで「=可能性×影響」の列を作ってからPowerPointにコピーすると、計算違いを防げます。強調する行は、行を選んで「塗りつぶし」を薄い色にします。',
    'Googleスライドでは、「挿入」→「表」で7×6の表を作り、見出しの行を灰色にします。リスクが10件以上あるときは、スプレッドシートに表を作り、点数を「=可能性×影響」の式で計算して、点数の高い順に並べ替えてから（「データ」→「範囲を並べ替え」）、上位5〜7件だけをスライドに貼ります。強調する行は、行を選んで塗りつぶしの色を変えます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。表は7列の格子（グリッド）で組んでいて、強調する行や、可能性・影響を点で表すかどうかは、data-focus と data-level の値で切り替わります。リスクを増やすときは、行を1つ複製して書き換えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-level="{{level}}">
  <p class="kicker">新店舗オープンのリスク管理表（10月時点）</p>
  <h1 class="title">開店前に手を打つのは、点数6の2件</h1>

  <div class="rr-table">
    <div class="rr-row rr-head">
      <span>No</span><span>リスク</span><span>可能性</span><span>影響</span><span>点数</span><span>対策</span><span>担当</span>
    </div>
    <div class="rr-row rr-top">
      <span class="rr-no">1</span>
      <span class="rr-risk">工事の遅れで開店日が延びる</span>
      <span class="rr-lv" data-v="2"><b>中</b><i></i><i></i><i></i></span>
      <span class="rr-lv" data-v="3"><b>大</b><i></i><i></i><i></i></span>
      <span class="rr-sc"><b class="rr-hi">6</b></span>
      <span class="rr-act">工程を週次で確認し、予備日を2週間とる</span>
      <span class="rr-who">出店課</span>
    </div>
    <div class="rr-row rr-top">
      <span class="rr-no">2</span>
      <span class="rr-risk">採用が間に合わず人手が足りない</span>
      <span class="rr-lv" data-v="3"><b>高</b><i></i><i></i><i></i></span>
      <span class="rr-lv" data-v="2"><b>中</b><i></i><i></i><i></i></span>
      <span class="rr-sc"><b class="rr-hi">6</b></span>
      <span class="rr-act">求人媒体を追加し、10月末まで面接を続ける</span>
      <span class="rr-who">人事部</span>
    </div>
    <div class="rr-row">
      <span class="rr-no">3</span>
      <span class="rr-risk">開店告知の反応が弱い</span>
      <span class="rr-lv" data-v="2"><b>中</b><i></i><i></i><i></i></span>
      <span class="rr-lv" data-v="2"><b>中</b><i></i><i></i><i></i></span>
      <span class="rr-sc"><b class="rr-mid">4</b></span>
      <span class="rr-act">開店2週間前に反応を見て広告を足す</span>
      <span class="rr-who">販促課</span>
    </div>
    <div class="rr-row">
      <span class="rr-no">4</span>
      <span class="rr-risk">仕入れ先の納品が遅れる</span>
      <span class="rr-lv" data-v="1"><b>低</b><i></i><i></i><i></i></span>
      <span class="rr-lv" data-v="3"><b>大</b><i></i><i></i><i></i></span>
      <span class="rr-sc"><b class="rr-mid">3</b></span>
      <span class="rr-act">予備の仕入れ先を1社決めておく</span>
      <span class="rr-who">仕入課</span>
    </div>
    <div class="rr-row">
      <span class="rr-no">5</span>
      <span class="rr-risk">設備の初期不良</span>
      <span class="rr-lv" data-v="1"><b>低</b><i></i><i></i><i></i></span>
      <span class="rr-lv" data-v="1"><b>小</b><i></i><i></i><i></i></span>
      <span class="rr-sc"><b class="rr-low">1</b></span>
      <span class="rr-act">納品時に全数を確認する</span>
      <span class="rr-who">設備課</span>
    </div>
  </div>

  <p class="note">※ 点数＝可能性（低1・中2・高3）× 影響（小1・中2・大3）。点数の高い順に並べた。</p>
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
.title { margin: 0; font-size: 34px; font-weight: 800; line-height: 1.3; }
.rr-table { flex: 1; min-height: 0; display: flex; flex-direction: column; margin: 14px 0 8px; }
.rr-row { flex: 1; display: grid; grid-template-columns: 36px 232px 92px 92px 64px minmax(0, 1fr) 68px; align-items: center; border-bottom: 1.5px solid #e3e5ea; }
.rr-row > span { padding: 0 8px; font-size: 16px; line-height: 1.35; }
.rr-head { flex: none; height: 34px; background: #5a6070; border-bottom: 0; }
.rr-head > span { font-size: 16px; font-weight: 800; color: #fff; }
.rr-head > span:nth-child(n+3):nth-child(-n+5) { text-align: center; }
.rr-no { color: #8a8f9c; font-weight: 700; font-variant-numeric: tabular-nums; }
.rr-risk { font-weight: 800; }
.rr-act { color: #5a6070; }
.rr-who { color: #5a6070; text-align: center; padding: 0 4px; }
.rr-lv { display: flex; align-items: center; justify-content: center; gap: 4px; }
.rr-lv b { font-size: 17px; font-weight: 800; }
.rr-lv i { display: none; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #c3c8d2; box-sizing: border-box; }
.rr-sc { text-align: center; }
.rr-sc b { display: inline-grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; font-size: 20px; font-weight: 800; font-variant-numeric: tabular-nums; }
.rr-hi { background: #1f2430; color: #fff; }
.rr-mid { border: 2px solid #5a6070; color: #1f2430; box-sizing: border-box; }
.rr-low { background: #f3f4f7; color: #8a8f9c; }

/* 点で表す（data-level="dots"）: 点の数が低1・中2・高3 */
.slide[data-level="dots"] .rr-lv b { display: none; }
.slide[data-level="dots"] .rr-lv i { display: block; }
.slide[data-level="dots"] .rr-lv[data-v="1"] i:nth-child(-n+2),
.slide[data-level="dots"] .rr-lv[data-v="2"] i:nth-child(-n+3),
.slide[data-level="dots"] .rr-lv[data-v="3"] i:nth-child(-n+4) { background: #5a6070; border-color: #5a6070; }

/* 点数の高い2件を強調（data-focus="top"） */
.slide[data-focus="top"] .rr-top { background: color-mix(in srgb, var(--accent) 7%, #fff); }
.slide[data-focus="top"] .rr-top .rr-hi { background: var(--accent); }
.slide[data-focus="top"] .rr-top .rr-lv[data-v="3"] b { color: var(--accent); }
.slide[data-focus="top"][data-level="dots"] .rr-top .rr-lv[data-v="3"] i:nth-child(-n+4) { background: var(--accent); border-color: var(--accent); }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'top',
      options: [
        { value: 'top', label: '点数の高い2件を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'level',
      type: 'select',
      label: '可能性・影響の表し方',
      value: 'text',
      options: [
        { value: 'text', label: '文字（低・中・高）' },
        { value: 'dots', label: '丸の数（1〜3個）' },
      ],
    },
  ],
  cautions: [
    '点数は、掛け算で出して、必ず高い順に並べること。見出しの結論で「点数6の2件」と言うなら、一番上に点数6の行が来ていないと、聞き手は表の中から探すことになります。',
    'リスクの書き方は「起きたこと」ではなく「起こりうること」を、原因と結果が分かる一文で書きます。「採用」だけだと何が問題か分からないので、「採用が間に合わず人手が足りない」のように書きます。',
    '対策は、いつまでに何をするかが分かる言葉で書きます。「注意する」「確認する」のような曖昧な言葉だけだと、対策が行われたかどうか確かめられません。「10月末まで面接を続ける」のように、期限や数を入れます。',
    '担当は個人名ではなく部署名にするか、決まっていれば役職名にします。担当が空欄のリスクが残っていると、誰も動かないまま放置されがちです。スライドの上でも、必ず全行を埋めます。',
  ],
  similar: [
    { slug: 'matrix', diff: 'マトリクス型（2×2）は、可能性と影響の2軸にリスクを置いて位置を見せる型です。リスク登録簿型は、同じ内容を表にして、対策と担当まで書けるところが違います。' },
    { slug: 'checklist', diff: 'チェックリスト型は、確認する項目と済んだかどうかを並べる型です。リスク登録簿型は、起こりうる問題の大きさに点数を付け、優先順位を決める表です。' },
    { slug: 'raci', diff: 'RACI責任分担型は、作業ごとに「誰が実行・承認・相談・報告か」を表にする型です。リスク登録簿型の担当欄は、1人の責任者を書くだけです。' },
  ],
  faq: [
    {
      q: 'リスク登録簿とリスク管理表は同じものですか？',
      a: '同じ意味で使われることが多いです。リスク登録簿は、プロジェクト管理の用語（Risk Register）で、リスクの内容・可能性・影響・対策・担当をまとめた一覧です。会議の資料では「リスク管理表」「リスク一覧表」と書いても通じます。',
    },
    {
      q: '可能性と影響の点数は、どう決めればよいですか？',
      a: '3段階（低・中・高）か5段階で、メンバーで話し合って決めます。たとえば可能性なら、低は「めったに起きない」、中は「年に1回は起きそう」、高は「ほぼ起きる」のように、言葉の目安を先に決めておくと、人によって点数がばらつきません。',
    },
    {
      q: 'Excelで作った表を、スライドに貼るにはどうすればよいですか？',
      a: 'Excelで表を作り、範囲を選んでコピーし、PowerPointで貼り付けるときに「貼り付けのオプション」から「貼り付け先のスタイルを使用」を選ぶと、スライドの文字の大きさに合った表になります。文字が小さいときは、貼ったあとに、表を選んで文字の大きさを16pt以上に直します。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
