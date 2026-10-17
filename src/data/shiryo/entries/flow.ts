import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'flow',
  no: 6,
  category: 'kousei',
  name: 'フロー型',
  en: 'Flow diagram',
  aka: ['フローチャート', '流れ図', '業務フロー', 'プロセス図', '手順の流れ'],
  mode: 'static',
  title: 'フロー型とは？手順や流れを矢印でつなぐスライドの作り方【PowerPoint】',
  description:
    '手順や流れを矢印でつなぐ「フロー型」のスライドを見本で解説。担当と所要時間の添え方、横並びと縦並びの使い分け、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '手順や流れを、左から右へ（または上から下へ）矢印でつなぐ。',
  what: [
    '作業の手順を、同じ大きさの箱に分けて矢印でつなぐ型です。見本では経費精算を「領収書を撮影・申請・承認・経理確認・振込」の5段階に分け、どの箱にも番号・担当・名前・一言・所要時間を同じ順で入れています。いちばん下の帯で、全体にかかる時間「最長3営業日」を言い切っています。',
    'この型のよさは、聞き手が「自分はどこを担当するのか」を探しやすいことです。決まりごとは、箱の数を5〜6つまでにすることと、矢印の向きを1方向にそろえること。分かれ道や戻る流れが多い複雑な業務は、1枚で見せようとせず、全体と詳細の2枚に分けます。',
  ],
  when: [
    '新しい業務ルール（申請・承認・購入の手続き）の流れを、社内に説明するとき',
    '製品の製造や、サービス提供の流れを、お客さまに説明するとき',
    '契約から納品、問い合わせから解決までの道のりを、担当ごとに見せたいとき',
    '「誰が何をいつまでにやるか」を、手順の順番に沿って見せたいとき',
  ],
  avoid: [
    '担当者ごとの動きを分けて描きたいとき（担当ごとの列に分けるスイムレーン型にする）',
    '条件によって次の手順が変わるとき（意思決定ツリー型にして、分かれ道を描く）',
    '手順を画面の操作として番号付きで説明したいとき（操作手順型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「フロー型（flow diagram）」で作ってください。いちばん上に小さく「経費精算の流れ（2026年10月から）」、その下に結論の見出し「経費精算は、申請から振込まで最長3営業日」を1行で置きます。その下に、同じ大きさの角の丸い箱を5つ、{{dir:t}}に並べ、箱と箱の間を矢印（＞の形）でつないでください。どの箱にも「番号の丸・担当（社員・上長・経理のいずれか）・手順の名前・一言・所要時間」を同じ順で入れます。内容は、1：社員「領収書を撮影」スマホで撮って取り込む、当日。2：社員「申請」金額と用途を選んで送る、当日。3：上長「承認」内容を見て承認か差し戻し、1営業日以内。4：経理「経理確認」領収書と金額を照らし合わせる、1営業日以内。5：経理「振込」給与口座へ振り込む、1営業日以内。強調のしかたは「{{focus:t}}」にしてください（強調する箱は、枠線をアクセント色にして太くし、番号の丸をアクセント色で塗る）。箱の下に灰色の帯を置き、「申請から振込まで」と「最長3営業日」（アクセント色の大きな文字）と「承認1日 ＋ 経理確認1日 ＋ 振込1日」を横に並べます。色はアクセント色{{accent:t}}の1色だけで、ほかは白・灰色・黒にします。文字の大きさは、見出し32〜36pt、手順の名前20pt（縦に並べるときは18pt）、一言と所要時間16pt、担当15pt、注記13pt。最下部に「※ 営業日は土日祝日を除く。差し戻しになった場合は、申請し直した日から数える。」と入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでいちばん手早いのは、「挿入」→「SmartArt」→「手順」から「基本ステップ」などを選び、文字を入れる方法です。見本のように担当や所要時間まで入れたいときは、「挿入」→「図形」→「四角形: 角を丸くする」を5つ置き、「図形の書式」→「配置」→「左右に整列」で等間隔にそろえます。箱と箱の間は、「挿入」→「図形」の「線」の仲間にある矢印を引くか、小さな「矢印: 右」を置きます。矢印を引くときは、箱の端にくっつけると、箱を動かしても矢印がついてきます。',
    'Googleスライドでは、「挿入」→「図表」→「プロセス」を選ぶと、手順を並べる型がいくつか出てきます。自分で作る場合は、「挿入」→「図形」→「図形」→「角丸四角形」と「矢印」を置き、複数の図形を選んで「配置」→「均等に配置」→「横方向」で間隔をそろえます。箱が5つを超えるときは、無理に1段に詰めず、縦に並べるか、2段に分けます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のHTMLとCSSがそのまま1枚のスライドになります。箱と矢印は、箱・矢印・箱・矢印…の順に並べたグリッドです。手順の数を変えるときは、箱と矢印の数に合わせて、グリッドの列の数を直してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-dir="{{dir}}" data-focus="{{focus}}">
  <p class="kicker">経費精算の流れ（2026年10月から）</p>
  <h1 class="title">経費精算は、申請から振込まで最長3営業日</h1>

  <!-- 箱・矢印・箱・矢印…の順に並べる -->
  <div class="flow">
    <div class="step s1">
      <span class="top"><span class="num">1</span><span class="owner">社員</span></span>
      <span class="name">領収書を撮影</span>
      <span class="desc">スマホで撮って取り込む</span>
      <span class="time">当日</span>
    </div>
    <span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
    <div class="step s2">
      <span class="top"><span class="num">2</span><span class="owner">社員</span></span>
      <span class="name">申請</span>
      <span class="desc">金額と用途を選んで送る</span>
      <span class="time">当日</span>
    </div>
    <span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
    <div class="step s3">
      <span class="top"><span class="num">3</span><span class="owner">上長</span></span>
      <span class="name">承認</span>
      <span class="desc">内容を見て承認か差し戻し</span>
      <span class="time">1営業日以内</span>
    </div>
    <span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
    <div class="step s4">
      <span class="top"><span class="num">4</span><span class="owner">経理</span></span>
      <span class="name">経理確認</span>
      <span class="desc">領収書と金額を照らし合わせる</span>
      <span class="time">1営業日以内</span>
    </div>
    <span class="arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7" /></svg></span>
    <div class="step s5">
      <span class="top"><span class="num">5</span><span class="owner">経理</span></span>
      <span class="name">振込</span>
      <span class="desc">給与口座へ振り込む</span>
      <span class="time">1営業日以内</span>
    </div>
  </div>

  <div class="result">
    <span class="result-label">申請から振込まで</span>
    <span class="result-num">最長3営業日</span>
    <span class="result-sub">承認1日 ＋ 経理確認1日 ＋ 振込1日</span>
  </div>

  <p class="note">※ 営業日は土日祝日を除く。差し戻しになった場合は、申請し直した日から数える。</p>
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

.flow {
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 24px minmax(0, 1fr) 24px minmax(0, 1fr) 24px minmax(0, 1fr) 24px minmax(0, 1fr);
  align-items: stretch;
  margin: 18px 0 12px;
  min-height: 0;
}
.step { display: flex; flex-direction: column; padding: 14px 12px 14px 14px; border: 2px solid #e3e5ea; border-radius: 12px; background: #fff; }
.top { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
.num { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; background: #f3f4f7; color: #5a6070; font-size: 16px; font-weight: 800; font-variant-numeric: tabular-nums; }
.owner { padding: 2px 10px; border-radius: 999px; background: #f3f4f7; color: #5a6070; font-size: 15px; font-weight: 700; }
.name { margin-top: 12px; font-size: 20px; font-weight: 800; line-height: 1.3; }
.desc { margin-top: 6px; font-size: 16px; line-height: 1.5; color: #5a6070; }
.time { margin-top: auto; padding-top: 10px; border-top: 1px solid #e3e5ea; font-size: 16px; font-weight: 800; font-variant-numeric: tabular-nums; }
.arrow { display: grid; place-items: center; color: #8a8f9c; }
.arrow svg { width: 24px; height: 24px; }
/* 結論の帯 */
.result { display: flex; align-items: center; gap: 16px; margin-bottom: 10px; padding: 10px 22px; border-radius: 10px; background: #f3f4f7; }
.result-label { font-size: 16px; font-weight: 800; color: #5a6070; }
.result-num { font-size: 30px; font-weight: 800; color: var(--accent); line-height: 1.1; }
.result-sub { margin-left: auto; font-size: 16px; font-weight: 700; color: #5a6070; }

/* 強調する工程（つまみ: 強調） */
.slide[data-focus="3"] .s3,
.slide[data-focus="last"] .s5 { border-color: var(--accent); border-width: 3px; background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="3"] .s3 .num,
.slide[data-focus="last"] .s5 .num { background: var(--accent); color: #fff; }

/* 縦に5段（つまみ: 並べ方） */
.slide[data-dir="col"] .flow {
  grid-template-columns: 1fr;
  grid-template-rows: minmax(0, 1fr) 12px minmax(0, 1fr) 12px minmax(0, 1fr) 12px minmax(0, 1fr) 12px minmax(0, 1fr);
  margin: 12px 0 10px;
}
.slide[data-dir="col"] .step { display: grid; grid-template-columns: 36px 170px minmax(0, 1fr) 64px 124px; align-items: center; gap: 14px; padding: 0 16px; }
.slide[data-dir="col"] .top { display: contents; }
.slide[data-dir="col"] .num { grid-column: 1; grid-row: 1; width: 28px; height: 28px; font-size: 15px; }
.slide[data-dir="col"] .name { grid-column: 2; grid-row: 1; margin: 0; font-size: 18px; }
.slide[data-dir="col"] .desc { grid-column: 3; grid-row: 1; margin: 0; }
.slide[data-dir="col"] .owner { grid-column: 4; grid-row: 1; justify-self: start; }
.slide[data-dir="col"] .time { grid-column: 5; grid-row: 1; margin: 0; padding: 0; border-top: 0; text-align: right; }
.slide[data-dir="col"] .arrow svg { width: 14px; height: 14px; transform: rotate(90deg); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'dir',
      type: 'select',
      label: '並べ方',
      value: 'row',
      options: [
        { value: 'row', label: '横（左から右）' },
        { value: 'col', label: '縦（上から下）' },
      ],
    },
    {
      key: 'focus',
      type: 'select',
      label: '強調',
      value: 'none',
      options: [
        { value: 'none', label: '強調しない' },
        { value: '3', label: '3つ目の承認を強調' },
        { value: 'last', label: '最後の振込を強調' },
      ],
    },
  ],
  cautions: [
    '箱の数は5〜6つまでにします。7つ以上になると、1つあたりの箱が小さくなり、文字が読めなくなります。細かい手順は「申請する」のようにまとめ、詳しい話は次のスライドに分けます。',
    '矢印の向きは1方向にそろえます。右へ進み、途中で下へ戻り、また右へ進むような配置は、読む順番が分かりません。1段に収まらないときは、2段に折り返し、折り返す位置に番号を付けます。',
    '「誰が」を省くと、手順を読んでも自分の仕事かどうかが分かりません。見本のように、担当を箱の中に必ず書きます。担当が頻繁に変わる流れは、担当ごとの列に分けるスイムレーン型の方が向いています。',
    '所要時間や期限を書かないフローは、「結局いつ終わるのか」が伝わりません。全体の時間を結論として帯で言い切り、各手順の時間は小さく添えます。',
  ],
  similar: [
    { slug: 'swimlane', diff: 'スイムレーン型は、担当ごとの列に分けて業務の流れを描く型です。フロー型は担当を箱の中に添えるだけなので、担当が2〜3人までの流れに向いています。' },
    { slug: 'steps', diff: '操作手順型は、パソコンやアプリの操作を番号付きで説明する型です。フロー型は、業務や工程の流れを矢印でつないで見せます。' },
    { slug: 'decision-tree', diff: '意思決定ツリー型は、条件によって次に進む先が分かれる流れを示す型です。フロー型は、一本道の流れを示します。' },
  ],
  faq: [
    {
      q: 'フロー型とフローチャートは同じものですか？',
      a: '近いものですが、フローチャートは「はい／いいえ」の分かれ道や、決まった記号（ひし形など）を使って、細かい処理の流れを描く図です。スライドで使うフロー型は、記号の決まりを使わず、一本道の流れを箱と矢印で見せる簡易な形だと考えてください。',
    },
    {
      q: '横並びと縦並びは、どう使い分けますか？',
      a: '手順が5つまでで、各手順の説明が短ければ、横に並べた方が全体を一目で見渡せます。手順の説明が長いときや、6つ以上あるときは、縦に並べると文字を大きくできます。横長のスライドで縦に並べる場合は、見本のように箱の中を1行にまとめます。',
    },
    {
      q: 'PowerPointでフロー図を手早く作るコツはありますか？',
      a: '最初に1つ目の箱を完成させてから、コピーして貼り付け、文字だけ書き換えます。箱が増えたら、全部を選んで「図形の書式」→「配置」で整列させ、矢印は箱の端にくっつけておきます。SmartArtの「基本ステップ」から始めて、あとで図形に分解して整える方法もあります。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
