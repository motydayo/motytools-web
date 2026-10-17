import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'big-number',
  no: 19,
  category: 'kousei',
  name: '数字インパクト型',
  en: 'Big number',
  aka: ['数字スライド', 'ビッグナンバー', '数字を大きく見せる', 'KPI1つ', '強調数字'],
  mode: 'static',
  title: '数字インパクト型とは？1つの数字を大きく見せるスライドの作り方【見本つき】',
  description:
    '1つの数字を画面いっぱいに大きく見せて印象づける「数字インパクト型」のスライドを見本で解説。意味の添え方、前年との比べ方、PowerPoint・Googleスライドでの作り方、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '一番言いたい数字を1つだけ大きく見せ、意味と比べる相手を横に添える。',
  what: [
    'いちばん伝えたい数字を、スライドの主役として190pt前後の大きさで置く型です。見本では「92%」を大きなアクセント色で左に置き、右に「「役に立った」と答えた新入社員の割合」という意味を、その下に「前年度の81%から +11ポイント」という比べる相手を添えています。いちばん下には0〜100%の帯を引き、92%まで塗り、前年度の81%に印を付けています。',
    'この型のよさは、聞き手が数字を覚えて帰ってくれることです。決まりごとは、数字を1枚に1つだけにすること。数字が3つ並ぶとKPIダッシュボード型になり、主役がいなくなります。数字だけだと意味が伝わらないので、「何の数字か」と「何と比べてどうか」を必ず横に添えます。',
  ],
  when: [
    '報告会で「今期いちばんの成果」を1つの数字で印象づけたいとき',
    '提案書で、導入効果（時間が何分の1になった、費用が何%減った）を目立たせたいとき',
    '調査の結果から、一番驚いてほしい数字を発表するとき',
    '目標の達成率や、前年からの伸びを1つだけ強調して見せたいとき',
  ],
  avoid: [
    '数字が3つ以上あり、全部大事なとき（KPIダッシュボード型にして、同じ大きさのカードで並べる）',
    '数字の推移や内訳を見せたいとき（数字だけでは変化が伝わらない。縦棒グラフ型や折れ線推移型にする）',
    '数字の根拠が弱く、質問されると答えられないとき（大きく見せるほど、根拠を問われる。注記に条件と出典を必ず書く）',
  ],
  prompt:
    '16:9のスライドを1枚、「数字インパクト型（big number）」で作ってください。いちばん上に小さく「新入社員研修アンケート（2026年度）」、その下に結論の見出し「研修の満足度は、過去最高の92%に」を置きます。その下に、数字「92%」を{{num:t}}ptの太字、アクセント色{{accent:t}}で置き（「%」は数字の4割の大きさ）、並べ方は「{{align:t}}」にします。数字の右には細い縦線を引き、その右に、太字24ptで「「役に立った」と答えた新入社員の割合」、その下に灰色20ptで「前年度の81%から +11ポイント」を置いてください。その下に、0〜100%の横長の帯を引き、左から92%の位置までをアクセント色で塗り、81%の位置に黒い縦線を立てて、その上に「前年度 81%」と書きます。帯の下に、0%・25%・50%・75%・100%の目盛りを入れてください。最下部に注記「※ 回答148人（対象152人・回収率97%）。「とても役に立った」「役に立った」の合計。」を13ptで入れます。色はアクセント色の1色だけで、ほかは白・灰色・黒にします。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「タイトルのみ」を選び、数字は「挿入」→「テキスト ボックス」で別に作ります。文字サイズを190pt前後の太字にし、アクセント色にします。「%」だけを選んで文字サイズを下げると、数字が際立ちます。帯は「挿入」→「図形」→「四角形: 角を丸くする」で幅いっぱいの灰色の帯を描き、同じ図形をコピーして幅を92%（帯が800ptなら736pt）に縮め、アクセント色に塗ります。幅は「図形の書式」→「サイズ」で数字で指定すると正確です。',
    'Googleスライドでは、「レイアウト」から「タイトルのみ」を選び、数字を大きなテキストボックスで置きます。帯は「挿入」→「図形」→「図形」から角丸四角形を2つ重ね、下を灰色・上をアクセント色にします。上の図形の幅は「書式オプション」→「サイズと回転」で数字を入力すると、値に比例した長さにできます。Googleスプレッドシートで円グラフや棒グラフを作って貼ると、この帯はグラフから作ることもできます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。帯の長さは style の --v に数字（0〜100）を入れるだけで決まるので、数字を変えるときはここも一緒に書き換えます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-align="{{align}}">
  <p class="kicker">新入社員研修アンケート（2026年度）</p>
  <h1 class="title">研修の満足度は、過去最高の92%に</h1>

  <div class="hero">
    <p class="num">92<span class="unit">%</span></p>
    <div class="side">
      <p class="label">「役に立った」と答えた新入社員の割合</p>
      <p class="chip">前年度の81%から +11ポイント</p>
    </div>
  </div>

  <div class="scale">
    <div class="track">
      <i class="fill" style="--v: 92"></i>
      <i class="prev" style="--v: 81"><span>前年度 81%</span></i>
    </div>
    <div class="ticks">
      <span style="--v: 0">0%</span><span style="--v: 25">25%</span><span style="--v: 50">50%</span><span style="--v: 75">75%</span><span style="--v: 100">100%</span>
    </div>
  </div>

  <p class="note">※ 回答148人（対象152人・回収率97%）。「とても役に立った」「役に立った」の合計。</p>
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

/* 主役の数字と、その意味 */
.hero { flex: 1; display: flex; align-items: center; gap: 44px; }
.num { margin: 0; font-size: {{num:n}}px; font-weight: 800; line-height: 1; letter-spacing: -0.02em; color: var(--accent); font-variant-numeric: tabular-nums; }
.unit { margin-left: 6px; font-size: 0.42em; letter-spacing: 0; }
.side { display: flex; flex-direction: column; gap: 14px; padding-left: 32px; border-left: 1px solid #e3e5ea; }
.label { margin: 0; font-size: 24px; font-weight: 800; }
.chip { margin: 0; font-size: 20px; font-weight: 700; color: #5a6070; font-variant-numeric: tabular-nums; }

/* 0〜100%の帯。長さは --v（0〜100）に比例する */
.scale { margin-bottom: 10px; padding-top: 30px; }
.track { position: relative; height: 20px; border-radius: 10px; background: #f3f4f7; }
.fill { position: absolute; left: 0; top: 0; bottom: 0; width: calc(var(--v) * 1%); border-radius: 10px; background: var(--accent); }
.prev { position: absolute; left: calc(var(--v) * 1%); top: -6px; bottom: -6px; width: 3px; margin-left: -1.5px; background: #1f2430; }
.prev span { position: absolute; right: 8px; bottom: 100%; margin-bottom: 2px; white-space: nowrap; font-size: 14px; font-weight: 700; color: #5a6070; }
.ticks { position: relative; height: 24px; margin-top: 8px; }
.ticks span { position: absolute; left: calc(var(--v) * 1%); transform: translateX(-50%); font-size: 14px; color: #8a8f9c; }
.ticks span:first-child { transform: none; }
.ticks span:last-child { transform: translateX(-100%); }
.note { margin: auto 0 0; font-size: 13px; color: #8a8f9c; }

/* 並べ方（data-align="left" / "center"） */
.slide[data-align="center"] .hero { justify-content: center; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'align',
      type: 'select',
      label: '並べ方',
      value: 'left',
      options: [
        { value: 'left', label: '左に寄せる' },
        { value: 'center', label: '中央に寄せる' },
      ],
    },
    { key: 'num', label: '数字の大きさ（pt）', min: 120, max: 200, step: 10, value: 180, unit: '' },
  ],
  cautions: [
    '数字だけを置いて意味を書かないのは、いちばん多い失敗です。「92%」とだけ出ても、何が92%なのか、高いのか低いのかが分かりません。「何の数字か」と「何と比べてどうか」を数字の横に必ず添えます。',
    '数字の条件を隠さないでください。「回答148人」「3店舗の平均」のように、対象の人数や期間は注記に必ず書きます。条件を隠した大きな数字は、後で質問されたとき信用を失います。',
    '数字を飾りすぎないでください。影・縁取り・グラデーションを付けると、読みやすさが落ちます。大きさと色（アクセント色1色）だけで十分に目立ちます。',
    '「%」の取り扱いに注意してください。前年との差は「11%」ではなく「11ポイント」です。81%から92%は11ポイント上がったことで、11%上がったのではありません（割合の増え方は約14%です）。',
  ],
  similar: [
    { slug: 'kpi-dashboard', diff: 'KPIダッシュボード型は、大事な数字を複数のカードで並べて一覧にする型です。数字インパクト型は、たった1つの数字に絞ります。' },
    { slug: 'one-message', diff: '1メッセージ型は、言いたいことを文章で大きく見せる型です。数字インパクト型は、数字を主役にして文章は添えるだけです。' },
    { slug: 'target-actual', diff: '目標・実績型は、目標に対する実績の達成度を見せる型です。数字インパクト型は、前年との比較など、目標がなくても使えます。' },
  ],
  faq: [
    {
      q: '数字は何pt以上にすれば「大きい」と言えますか？',
      a: '本文の5倍以上が目安です。本文が16〜20ptなら、数字は100pt以上にします。見本は180ptで、スライドの高さの3分の1を占めています。会議室の後ろの席からでも読める大きさを目指してください。',
    },
    {
      q: '「ポイント」と「%」はどう使い分けますか？',
      a: '割合どうしの差は「ポイント」で書きます。81%から92%に上がったなら「+11ポイント」です。「11%増えた」と書くと、81の11%（約9）増えたと受け取られ、誤解を生みます。どうしても「%」で言いたいときは、増え方（約14%増）と書きます。',
    },
    {
      q: 'PowerPointやスプレッドシートで、帯のグラフを自動で作れますか？',
      a: 'Excelやスプレッドシートの「100%積み上げ横棒グラフ」で作れます。1行目に「達成」92、「未達」8を入れて、横棒グラフの種類で「100%積み上げ横棒」を選ぶと、帯の形になります。ただし、前年度の印は手で図形を足す必要があります。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
