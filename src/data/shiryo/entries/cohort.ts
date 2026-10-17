import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'cohort',
  no: 48,
  category: 'data',
  name: 'コホート分析型',
  en: 'Cohort table',
  aka: ['コホート分析', 'コホート表', '継続率の表', 'リテンション表', '登録月別の継続率'],
  mode: 'static',
  title: 'コホート分析とは？登録月ごとの継続率を表で比べる作り方【見本つき】',
  description:
    '始めた月ごとに「その後も続けている人の割合」を表で比べる「コホート分析型」のスライドを見本で解説。読み方、色の濃さの付け方、Excel・Googleスライドでの作り方、AIへの指示文とHTMLのコードまでまとめました。そのまま使えます。',
  oneLine: '始めた時期ごとに、その後も続けている人の割合を比べる。',
  what: [
    '縦に「始めた時期（登録した月など）」、横に「始めてから何か月後か」を並べ、その後も続けている人の割合を表にした型です。見本では、家計簿アプリの登録者を月ごとに分け、1〜5か月後に使っていた人の割合を並べています。割合の大きいところほど濃い色にしてあり、右下が空欄の三角形になるのは、まだその月が来ていないためです。',
    '決まりごとは、横の列を「カレンダーの月」でなく「始めてからの月数」にすることです。こうすると、同じ列を縦に読むだけで「同じ月数がたったときの続き具合」を、始めた時期ごとに比べられます。見本では、1か月後の列を枠で囲み、4月登録の62%から8月登録の71%へ9ポイント上がったこと、その8月から初回のガイドを新しくしたことを示しています。',
  ],
  when: [
    'アプリ・会員制サービスで、新しく始めた人の続き具合が時期によって変わったかを見せたいとき',
    '施策（案内の変更、料金の変更など）の前後で、新規の人の継続率が良くなったかを確かめたいとき',
    '解約・離脱のタイミング（始めて何か月目に減るか）を報告したいとき',
  ],
  avoid: [
    '全員をまとめた継続率の数字ひとつで足りるとき（KPIダッシュボード型にする）',
    '行（登録月）が多く、表が細かくなりすぎるとき（数か月ぶんに絞るか、折れ線推移型で1本ずつ見せる）',
    '各行の人数が50人に満たないとき（割合が大きく揺れるので、行をまとめるか、人数で示す）',
  ],
  prompt:
    '16:9のスライドを1枚、「コホート分析型（cohort table。始めた時期ごとに続き具合を並べる表）」で作ってください。いちばん上に小さく「家計簿アプリ「つむぎ」：登録した月ごとの、その後の継続率（2025年9月末時点）」、その下に結論の見出し「翌月の継続率は、4月の62%から8月は71%に上昇」を置きます。見出しの下に表を置き、列は左から「登録した月」「登録人数」「1か月後」「2か月後」「3か月後」「4か月後」「5か月後」の7つ、行は4月〜8月の5行です。登録人数は4月1,200、5月1,350、6月1,280、7月1,420、8月1,510で、継続率（%）は、4月が62・51・46・43・41、5月が60・49・44・41、6月が64・55・50、7月が66・58、8月が71です（右下は空欄）。割合のセルは、割合が大きいほど濃いアクセント色{{accent:t}}にし（濃いセルは白い文字、薄いセルは黒い文字）、文字は22ptの太字にします。色の濃淡は「{{shade:t}}」にしてください。1か月後の列の強調は「{{focus:t}}」にし、強調するときは、その列の5つのセルを黒い枠で囲みます。8月の行の空欄には、「← 8月から、初回のガイドを新しくした」とアクセント色の太字で書いてください。登録した月と人数の文字は18〜20ptにします。立体・影・グラデーションは使いません。下に「※ 登録した人のうち、1〜5か月後にもアプリを使っていた人の割合。9月末時点のため右下は空欄。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で7列×6行の表を作り、1行目に見出し、1列目に登録した月、2列目に登録人数、3列目以降に継続率を入れます。色は、割合のセルを選んで「テーブルデザイン」→「塗りつぶし」で、大きい割合ほど濃い色にします。数が多いときは、Excelで色を付けた表を「貼り付けのオプション」で図として貼ると速いです。三角形になる空欄のセルは、そのまま空けておきます。',
    'Excelでは、割合のセルを選んで「ホーム」→「条件付き書式」→「カラースケール」を選ぶと、数字の大小に合わせて色の濃さを自動でつけてくれます。Googleスライドの表には色を自動でつける機能がないので、Googleスプレッドシートの「表示形式」→「条件付き書式」→「カラースケール」で色を付けた表を、スライドに貼り付けるのが近道です。登録月ごとの継続率は、「その月数後に使っていた人 ÷ 登録した人」で計算します。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。色の濃さは各セルの「--p」（継続率から決めた0〜90%の数字）で決めているので、数字を変えるときは、数字と「--p」を一緒に直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-shade="{{shade}}">
  <p class="kicker">家計簿アプリ「つむぎ」：登録した月ごとの、その後の継続率（2025年9月末時点）</p>
  <h1 class="title">翌月の継続率は、4月の62%から8月は71%に上昇</h1>
  <div class="body">
    <div class="tbl">
      <span class="hd">登録した月</span><span class="hd r">登録人数</span><span class="hd r">1か月後</span><span class="hd r">2か月後</span><span class="hd r">3か月後</span><span class="hd r">4か月後</span><span class="hd r">5か月後</span>
      <span class="mo">4月</span><span class="cnt">1,200</span>
      <span class="cell c1 dk" style="--p: 58%">62%</span>
      <span class="cell cx lt" style="--p: 38%">51%</span>
      <span class="cell cx lt" style="--p: 29%">46%</span>
      <span class="cell cx lt" style="--p: 23%">43%</span>
      <span class="cell cx lt" style="--p: 20%">41%</span>
      <span class="mo">5月</span><span class="cnt">1,350</span>
      <span class="cell c1 lt" style="--p: 54%">60%</span>
      <span class="cell cx lt" style="--p: 34%">49%</span>
      <span class="cell cx lt" style="--p: 25%">44%</span>
      <span class="cell cx lt" style="--p: 20%">41%</span>
      <span class="blank" style="grid-column: span 1"></span>
      <span class="mo">6月</span><span class="cnt">1,280</span>
      <span class="cell c1 dk" style="--p: 61%">64%</span>
      <span class="cell cx lt" style="--p: 45%">55%</span>
      <span class="cell cx lt" style="--p: 36%">50%</span>
      <span class="blank" style="grid-column: span 2"></span>
      <span class="mo">7月</span><span class="cnt">1,420</span>
      <span class="cell c1 dk" style="--p: 65%">66%</span>
      <span class="cell cx lt" style="--p: 50%">58%</span>
      <span class="blank" style="grid-column: span 3"></span>
      <span class="mo">8月</span><span class="cnt">1,510</span>
      <span class="cell c1 dk" style="--p: 74%">71%</span>
      <span class="memo" style="grid-column: span 4">← 8月から、初回のガイドを新しくした</span>
    </div>
  </div>
  <p class="note">※ 登録した人のうち、1〜5か月後にもアプリを使っていた人の割合。9月末時点のため右下は空欄。</p>
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
.body { flex: 1; min-height: 0; margin: 18px 0 10px; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 色の濃さは継続率で決める（30%で最も薄く、80%で最も濃い）。濃い所は白い文字、薄い所は黒い文字 */
.tbl { display: grid; grid-template-columns: 96px 112px repeat(5, 1fr); grid-template-rows: 40px repeat(5, 1fr); gap: 4px; height: 100%; }
.hd { align-self: end; padding: 0 8px 8px; font-size: 16px; font-weight: 700; color: #5a6070; }
.hd.r { text-align: center; }
.mo { align-self: center; font-size: 20px; font-weight: 800; }
.cnt { align-self: center; padding-right: 20px; text-align: right; font-size: 18px; font-weight: 700; color: #5a6070; font-variant-numeric: tabular-nums; }
.cell { display: flex; align-items: center; justify-content: center; border-radius: 4px; font-size: 22px; font-weight: 800; font-variant-numeric: tabular-nums; background: color-mix(in srgb, var(--accent) var(--p), #fff); }
.cell.dk { color: #fff; }
.cell.lt { color: #1f2430; }
.blank { background: #f3f4f7; border-radius: 4px; opacity: 0.6; }
.memo { display: flex; align-items: center; padding-left: 16px; font-size: 18px; font-weight: 700; color: var(--accent); }

/* 色の濃淡を消して、数字だけにする（data-shade="off"） */
.slide[data-shade="off"] .cell { background: #f3f4f7; color: #1f2430; }
/* 1か月後の列を枠で囲む（data-focus="col"） */
.slide[data-focus="col"] .cell.c1 { outline: 3px solid #1f2430; outline-offset: -3px; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '1か月後の列の強調',
      value: 'col',
      options: [
        { value: 'col', label: '黒い枠で囲む' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'shade',
      type: 'select',
      label: '色の濃淡',
      value: 'on',
      options: [
        { value: 'on', label: '継続率が高いほど濃くする' },
        { value: 'off', label: '付けない（数字だけ）' },
      ],
    },
  ],
  cautions: [
    '横の列は「始めてからの月数」にします。カレンダーの月（5月、6月…）のまま並べると、同じ列に「始めて1か月目の人」と「5か月目の人」が混ざり、比べる意味がなくなります。',
    '登録人数を必ず並べます。割合だけだと、50人の行と1,500人の行が同じ確かさに見えてしまいます。見本のように、行の左に人数を書きます。',
    '色の濃さは「割合の大小」だけに使います。行ごとに色を変えたり、良い所を緑、悪い所を赤にしたりすると、色の意味が増えて読みにくくなります。強調したい所は、見本のように枠で囲みます。',
    '右下の空欄は、「まだその月が来ていない」ことを注記に書きます。0%と空欄が混ざると、「全員やめた」と誤解されます。9月末時点など、集計した日も書きます。',
  ],
  similar: [
    { slug: 'heatmap', diff: 'ヒートマップ型は、表の数の大小を色の濃さで見せる型です。コホート分析型は、その中でも「始めた時期 × 経過月数」の形に決まった表で、継続率を比べるためのものです。' },
    { slug: 'line-chart', diff: '折れ線推移型は、数の移り変わりを線で見せる型です。登録月ごとの継続率を線で重ねることもできますが、線が増えると読みにくくなるので、表で見せるコホート分析型が向きます。' },
    { slug: 'funnel', diff: 'ファネル型は、段階ごとに人数が絞られる様子を見せる型です。コホート分析型は、時間がたつにつれて人数がどう減るかを、始めた時期ごとに見せます。' },
  ],
  faq: [
    {
      q: 'コホート分析とは何ですか？',
      a: '同じ時期に始めた人（登録した月など）を1つのグループ（コホート）として、その後の行動を追って比べる分析です。始めた時期ごとの継続率を表にすると、新しく始めた人の続き具合が時期によって良くなったか悪くなったかが分かります。',
    },
    {
      q: 'コホート分析の表はExcelで作れますか？',
      a: '作れます。登録月ごとに「登録人数」と「その月数後に使っていた人数」を数え、割合を計算した表を作り、割合のセルに「条件付き書式」の「カラースケール」を付けると、見本のような濃淡の表になります。',
    },
    {
      q: 'コホート分析の表は、どこを見ればいいですか？',
      a: '同じ列（同じ月数後）を、上から下へ読みます。見本なら、1か月後の列が62%から71%へ上がっていることから、新しく始めた人ほど続きやすくなったと分かります。そのあとに、いつ施策を変えたかと照らし合わせます。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
