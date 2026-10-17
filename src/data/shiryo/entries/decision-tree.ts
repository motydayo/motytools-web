import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'decision-tree',
  no: 56,
  category: 'keikaku',
  name: '意思決定ツリー型',
  en: 'Decision tree',
  aka: ['デシジョンツリー', '判断フロー', 'YES/NOチャート', '分岐図', '選択フロー', '判断基準の図'],
  mode: 'static',
  title:
    '意思決定ツリー（デシジョンツリー）とは？分かれ道の資料の作り方【見本つき】',
  description:
    '条件の分かれ道をたどって結論に着く「意思決定ツリー型」のスライドを見本で解説。質問の並べ方、たどる道すじの強調、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '条件の分かれ道をたどって、何を選ぶかを示す。',
  what: [
    '左端の質問から始め、「はい」「いいえ」の線をたどると、右端の結論に着く型です。見本では発注の承認ルートを、「金額は100万円以上か」「取引先は新規か」の2つの質問で4つの結論（役員会・部長・課長・担当者）に分けています。質問は枠だけの箱、結論は灰色の塗りの箱にして役割を分け、「金額80万円の新規取引先」のたどる道すじだけを、アクセント色の太い線と色付きの結論で示しています。',
    '意思決定ツリーのよさは、ルールを文章で説明せずに「自分の場合はどこに着くか」を読み手が自分でたどれることです。決まりごとは、質問は「はい・いいえ」で答えられる形にすること、質問の段は3段までにすること、結論の中身を短く具体的に書くことです。例を1つ決めて道すじを強調すると、使い方まで一緒に伝わります。',
  ],
  when: [
    '承認ルートや問い合わせの振り分けなど、条件で対応が変わるルールを説明するとき',
    '「この場合はどうすればいい？」という社内の質問に、図1枚で答えたいとき',
    '複数の案から選ぶ基準を、条件の順に示して合意を得たいとき',
    '新しい担当者向けの、判断のガイドを作るとき',
  ],
  avoid: [
    '条件が多く、分かれ道が4段を超えるとき（表にまとめるか、段ごとにスライドを分ける）',
    '作業の順番を見せたいとき（フロー型にする）',
    '原因や課題を細かく分解したいとき（ロジックツリー型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「意思決定ツリー型（decision tree）」で作ってください。いちばん上に小さく「発注の承認ルート（金額と取引先で分かれる）」、その下に結論の見出し「80万円の新規取引先は、課長の承認で発注できる」を置きます。その下に、左から右へ広がる2つの質問と4つの結論の図を描いてください。左端の質問は「金額は100万円以上か」（白地に灰色の枠の角丸の箱・太字18pt）。そこから2本の線が出て、上の線（はい）が質問「取引先は新規か」、下の線（いいえ）がもう1つの質問「取引先は新規か」につながります。線の上には「はい」「いいえ」と16ptで書きます。質問「取引先は新規か」のそれぞれから、さらに2本ずつ線が出て、結論の箱（灰色塗りの角丸・題は太字19pt、補足は16pt）につながります。上の質問は、はい＝「役員会に諮る」（稟議書と与信確認が必要）・いいえ＝「部長の承認」（見積書と発注書を提出）、下の質問は、はい＝「課長の承認」（見積書を添えて申請）・いいえ＝「担当者の判断で発注」（社内の承認は不要）です。線は直角に曲げ、矢じりを付けます。たどる道すじは「{{path:t}}」にしてください（示すときは、金額80万円・新規の取引先の場合の道すじ、つまり「金額は100万円以上か」の「いいえ」→下の「取引先は新規か」の「はい」→「課長の承認」だけを、アクセント色{{accent:t}}の太い線にし、「課長の承認」の箱をアクセント色で塗って白文字にする）。色はアクセント色の1色と灰色だけ。見出しは32〜36pt。最下部に「※ 金額は税抜。太い線は、金額80万円・新規の取引先の場合の道すじ。」と注記を入れてください。内容は私が書いたものだけを使い、新しい条件や数字を足さないでください。',
  howTo: [
    'PowerPointでは、質問と結論の箱を「挿入」→「図形」→「四角形: 角を丸くする」で作り、線は「挿入」→「図形」の「線」の仲間にある、直角に折れ曲がる矢印（コネクタ）を使います。この線は箱の端にくっついて直角に曲がるので、箱を動かしても線がついてきます。「はい」「いいえ」は「テキストボックス」で線の上に置きます。たどる道すじは、その線を選んで「図形の書式」→「図形の枠線」から色を変え、太さを上げるだけです。SmartArt（図表を組み立てる機能）の「階層」の仲間でも似た形が作れますが、線ごとのラベルが付けにくいので、図形で作る方が確実です。',
    'Googleスライドでも「挿入」→「図形」→「図形」で箱を作り、「挿入」→「線」→「カギ線コネクタ」でつなぎます。コネクタは箱に吸い付いて、動かしても切れません。質問が3段を超えるようなときは、1枚に詰めずに「最初の分かれ道」のスライドと「それぞれの詳細」のスライドに分けます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。図は1つのSVG（図形を描く仕組み）に、箱と線を座標で置いています。道すじの色は「is-route」という目印のある線と箱にだけ付くので、ほかの道すじを示したいときは、この目印の付け先を変えます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-path="{{path}}">
  <p class="kicker">発注の承認ルート（金額と取引先で分かれる）</p>
  <h1 class="title">80万円の新規取引先は、課長の承認で発注できる</h1>
  <div class="dt-diagram">
    <svg viewBox="0 0 848 340" role="img" aria-label="発注の承認ルートの意思決定ツリー（金額と取引先で4つの結論に分かれる）">
      <path class="dt-edge" d="M180 170 H215 V84 H280" />
      <polygon class="dt-tip" points="290,84 280,78 280,90" />
      <path class="dt-edge" d="M470 84 H515 V44 H580" />
      <polygon class="dt-tip" points="590,44 580,38 580,50" />
      <path class="dt-edge" d="M470 84 H515 V124 H580" />
      <polygon class="dt-tip" points="590,124 580,118 580,130" />
      <path class="dt-edge" d="M470 256 H515 V296 H580" />
      <polygon class="dt-tip" points="590,296 580,290 580,302" />
      <path class="dt-edge is-route" d="M180 170 H215 V256 H280" />
      <polygon class="dt-tip is-route" points="290,256 280,250 280,262" />
      <path class="dt-edge is-route" d="M470 256 H515 V216 H580" />
      <polygon class="dt-tip is-route" points="590,216 580,210 580,222" />
      <text class="dt-lab" x="252" y="75" text-anchor="middle">はい</text>
      <text class="dt-lab" x="252" y="247" text-anchor="middle">いいえ</text>
      <text class="dt-lab" x="552" y="35" text-anchor="middle">はい</text>
      <text class="dt-lab" x="552" y="115" text-anchor="middle">いいえ</text>
      <text class="dt-lab" x="552" y="207" text-anchor="middle">はい</text>
      <text class="dt-lab" x="552" y="287" text-anchor="middle">いいえ</text>
      <g class="dt-q is-route">
        <rect x="0" y="136" width="180" height="68" rx="12" />
        <text x="90" y="167" text-anchor="middle">金額は100万円</text>
        <text x="90" y="189" text-anchor="middle">以上か</text>
      </g>
      <g class="dt-q">
        <rect x="290" y="50" width="180" height="68" rx="12" />
        <text x="380" y="81" text-anchor="middle">取引先は</text>
        <text x="380" y="103" text-anchor="middle">新規か</text>
      </g>
      <g class="dt-q is-route">
        <rect x="290" y="222" width="180" height="68" rx="12" />
        <text x="380" y="253" text-anchor="middle">取引先は</text>
        <text x="380" y="275" text-anchor="middle">新規か</text>
      </g>
      <g class="dt-out">
        <rect x="590" y="10" width="258" height="68" rx="12" />
        <text class="dt-out-t" x="608" y="40">役員会に諮る</text>
        <text class="dt-out-s" x="608" y="64">稟議書と与信確認が必要</text>
      </g>
      <g class="dt-out">
        <rect x="590" y="90" width="258" height="68" rx="12" />
        <text class="dt-out-t" x="608" y="120">部長の承認</text>
        <text class="dt-out-s" x="608" y="144">見積書と発注書を提出</text>
      </g>
      <g class="dt-out is-route">
        <rect x="590" y="182" width="258" height="68" rx="12" />
        <text class="dt-out-t" x="608" y="212">課長の承認</text>
        <text class="dt-out-s" x="608" y="236">見積書を添えて申請</text>
      </g>
      <g class="dt-out">
        <rect x="590" y="262" width="258" height="68" rx="12" />
        <text class="dt-out-t" x="608" y="292">担当者の判断で発注</text>
        <text class="dt-out-s" x="608" y="316">社内の承認は不要</text>
      </g>
    </svg>
  </div>
  <p class="note">※ 金額は税抜。太い線は、金額80万円・新規の取引先の場合の道すじ。</p>
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

.dt-diagram { position: relative; flex: 1; margin: 12px 0 8px; min-height: 0; }
.dt-diagram svg { position: absolute; inset: 0; width: 100%; height: 100%; }
/* 図の中の寸法は、viewBox（幅848）の数字そのまま */
.dt-edge { fill: none; stroke: #c3c8d2; stroke-width: 2.5; }
.dt-tip { fill: #c3c8d2; }
.dt-lab { font-size: 16px; font-weight: 800; fill: #5a6070; }
.dt-q rect { fill: #fff; stroke: #8a8f9c; stroke-width: 2.5; }
.dt-q text { font-size: 18px; font-weight: 800; fill: #1f2430; }
.dt-out rect { fill: #f3f4f7; }
.dt-out-t { font-size: 19px; font-weight: 800; fill: #1f2430; }
.dt-out-s { font-size: 16px; fill: #5a6070; }
/* たどる道すじ（data-path="on"） */
.slide[data-path="on"] .dt-edge.is-route { stroke: var(--accent); stroke-width: 5; }
.slide[data-path="on"] .dt-tip.is-route { fill: var(--accent); }
.slide[data-path="on"] .dt-q.is-route rect { stroke: var(--accent); }
.slide[data-path="on"] .dt-out.is-route rect { fill: var(--accent); }
.slide[data-path="on"] .dt-out.is-route text { fill: #fff; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'path',
      type: 'select',
      label: 'たどる道すじ',
      value: 'on',
      options: [
        { value: 'on', label: '色と太さで示す' },
        { value: 'off', label: '示さない' },
      ],
    },
  ],
  cautions: [
    '質問は「はい・いいえ」で答えられる形にします。「取引先の種類は？」のように選択肢が3つ以上になる質問は、線が3本以上に広がって読めなくなります。「取引先は新規か」のように2択にそろえます。',
    '質問の順番を考えます。いちばん結論を絞り込める質問を左に置くと、段が浅く済みます。見本なら、承認者が大きく変わる「金額」を最初に聞いています。',
    '結論の箱には、次にやることまで書きます。「部長の承認」だけでなく「見積書と発注書を提出」のように、読み手が動ける情報を1行添えます。',
    '全部の線を強調しないようにします。強調するのは、例として見せる1本の道すじだけです。全部に色を付けると、どこを見ればよいのか分かりません。',
  ],
  similar: [
    { slug: 'flow', diff: 'フロー型は、手順を矢印でつないで順に見せる型です。意思決定ツリー型は、条件によって行き先が分かれる点が違います。' },
    { slug: 'logic-tree', diff: 'ロジックツリー型は、課題や原因を枝分かれで細かく分解する型です。意思決定ツリー型は、条件を答えながら結論にたどり着く型です。' },
    { slug: 'branch-merge', diff: '分岐・合流型は、流れが分かれて同時に進み、再び合わさる型です。意思決定ツリー型は、どれか1つの結論を選び、合流しません。' },
  ],
  faq: [
    {
      q: '意思決定ツリーとデシジョンツリーは同じものですか？',
      a: '同じものです。デシジョンツリー（decision tree）は英語の呼び名です。データ分析の分野では、データを条件で分けて予測する手法も同じ名前で呼ぶので、資料では「判断のルールを示す図」と書き添えると誤解されません。',
    },
    {
      q: 'PowerPointで分岐の図を作るにはどうしたらよいですか？',
      a: '角丸四角形で箱を作り、直角に折れ曲がる矢印（コネクタ）で箱どうしをつなぎます。この線は箱の端にくっつくので、あとから位置を直しても崩れません。分かれ道ごとに「はい」「いいえ」をテキストボックスで添えます。',
    },
    {
      q: '質問は何段まで書けますか？',
      a: 'スライド1枚で読めるのは3段までです。見本のように2段で4つの結論に分けると、文字を大きくできます。それ以上の条件は、最初の分かれ道で大きく分けて、続きを別のスライドに回します。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
