import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'problem-solution',
  no: 76,
  category: 'teian',
  name: '課題・原因・解決型',
  en: 'Problem, cause, solution',
  aka: ['課題解決型', '問題・原因・対策', '現状分析と対策', '改善提案スライド'],
  mode: 'static',
  title: '課題・原因・解決型のスライドとは？提案が通る1枚の組み立て方【見本・指示文つき】',
  description:
    '課題→原因→解決策を矢印でつなぐ「課題・原因・解決型」のスライドを見本で解説。原因を飛ばさない理由、数字の置き方、横並びと縦並びの使い分け、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '課題・原因・解決策を3つ並べて矢印でつなぎ、提案の筋道を1枚で見せる。',
  what: [
    '「何が困っているか（課題）」「なぜ起きているか（原因）」「どうするか（解決策）」の3つを順に並べ、矢印でつなぐ型です。見本では、月末の締め作業に6日かかっている課題の原因を「銀行の明細を手で入力していること」と突き止め、解決策として銀行連携のある会計ソフトへの乗り換えを示しています。見出しには「6日から2日に」という結論を書き、解決策の枠と、下の帯の「2日」だけを色で目立たせています。',
    'この型の要は真ん中の「原因」です。課題からいきなり解決策に飛ぶと、聞き手は「なぜそれで直るのか」が分かりません。原因を1つ挟むことで、解決策が原因をつぶしていることが目で追えるようになり、提案に納得してもらいやすくなります。',
  ],
  when: [
    '業務の改善や新しい道具の導入を、上司や決裁者に提案するとき',
    'お客さまの困りごとを整理して、自社の商品やサービスで解決できることを示す営業資料をつくるとき',
    'トラブルや不具合の報告で、何が起きて、なぜ起きて、どう直すかを1枚で伝えたいとき',
    '提案資料の冒頭で、話の全体の筋道を先に見せたいとき',
  ],
  avoid: [
    '原因がまだ分かっていないとき（仮説・検証・学び型にして、確かめる段取りを見せる）',
    '原因が3つ以上あり、それぞれに別の解決策があるとき（ロジックツリー型で枝分かれを見せる）',
    '解決策の候補が複数あって比べてほしいとき（2カラム比較型や選択肢比較表型を次のスライドに置く）',
  ],
  prompt:
    '16:9のスライドを1枚、「課題・原因・解決型（problem, cause, solution）」で作ってください。いちばん上に小さく「経理業務の見直し」、その下に結論の見出し「銀行連携で、月末の締め作業を6日から2日に」を置きます。その下に「課題」「原因」「解決策」の3つの枠を{{dir:t}}で並べ、枠の間を矢印（＞の形）でつないでください。各枠には、上に小さな札で「課題」などの名前、その下に太字で要点を1文、区切り線の下に補足を2行置きます。課題は「月末の締め作業に毎月6日かかる」（補足: 請求の確認が月初にずれ込む／締めの間、経理2人がほかの仕事をできない）、原因は「銀行の明細を手で入力している」（補足: 3つの口座・月およそ900件を転記／転記ミスの見直しに毎月1日以上）、解決策は「銀行連携のある会計ソフトに替える」（補足: 明細を自動で取り込み、確認だけにする／2週間の試用で効果を確かめ済み）です。3つの枠の下には横長の帯を1本置き、「効果の見込み」「月末の締め作業」「6日 → 2日」「毎月4日の短縮」を1行に並べ、「2日」だけをアクセント色で大きくしてください。強調は「{{focus:t}}」にしてください（強調するときは、解決策の枠の線を太くしてアクセント色{{accent:t}}にし、札もアクセント色で塗る）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、要点は22pt以上、補足は15pt以上、帯の数字は30pt以上。最下部に「※ 日数は2025年4〜9月の平均。見込みは試用期間（2週間）の結果から算出。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「SmartArt」→「手順」の中の「基本ステップ」などを選び、3つの枠に「課題」「原因」「解決策」の要点を入れると早く形になります。ただしSmartArtは補足の文字が小さくなりがちなので、仕上げは「SmartArtのデザイン」→「変換」→「図形に変換」で普通の図形に戻し、枠の大きさと文字を自分で整えます。最初から作る場合は、「挿入」→「図形」→「四角形: 角を丸くする」を3つ並べ、間に「図形」→「矢印: 山形」を置き、「図形の書式」→「配置」→「左右に整列」で間隔をそろえます。',
    'Googleスライドでは、「挿入」→「図形」→「図形」から角丸四角形を3つ、「矢印」から山形の矢印を2つ置きます。3つの枠を選んで「配置」→「均等に配置」→「横方向」で間隔をそろえ、解決策の枠だけ枠線の色と太さ（3pt）を変えます。縦に並べたいときは、枠を横長にして上から順に置き、矢印を90度回転させます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。並べ方は data-dir、強調は data-focus の値を書き換えるだけで切り替わります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-dir="{{dir}}" data-focus="{{focus}}">
  <p class="kicker">経理業務の見直し</p>
  <h1 class="title">銀行連携で、月末の締め作業を6日から2日に</h1>

  <div class="flow">
    <div class="step problem">
      <span class="label">課題</span>
      <p class="head">月末の締め作業に毎月6日かかる</p>
      <ul><li>請求の確認が月初にずれ込む</li><li>締めの間、経理2人がほかの仕事をできない</li></ul>
    </div>
    <span class="arrow" aria-hidden="true">›</span>
    <div class="step cause">
      <span class="label">原因</span>
      <p class="head">銀行の明細を手で入力している</p>
      <ul><li>3つの口座・月およそ900件を転記</li><li>転記ミスの見直しに毎月1日以上</li></ul>
    </div>
    <span class="arrow" aria-hidden="true">›</span>
    <div class="step solution">
      <span class="label">解決策</span>
      <p class="head">銀行連携のある会計ソフトに替える</p>
      <ul><li>明細を自動で取り込み、確認だけにする</li><li>2週間の試用で効果を確かめ済み</li></ul>
    </div>
  </div>

  <!-- 結論の帯: 課題と解決策を同じ物差しの数字で並べる -->
  <div class="result">
    <span class="result-label">効果の見込み</span>
    <span class="result-what">月末の締め作業</span>
    <span class="result-num">6日 → <b>2日</b></span>
    <span class="result-sub">毎月4日の短縮</span>
  </div>

  <p class="note">※ 日数は2025年4〜9月の平均。見込みは試用期間（2週間）の結果から算出。</p>
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

/* 横に3列（data-dir="row"） */
.flow {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 36px 1fr 36px 1fr;
  margin: 20px 0 12px;
  min-height: 0;
}
.step { display: flex; flex-direction: column; gap: 10px; padding: 20px 22px; border: 2px solid #e3e5ea; border-radius: 12px; }
.label { align-self: flex-start; padding: 2px 12px; border-radius: 999px; background: #f3f4f7; color: #5a6070; font-size: 15px; font-weight: 800; }
.head { margin: 0; font-size: 24px; font-weight: 800; line-height: 1.35; }
ul { margin: auto 0 0; padding: 10px 0 0 1.1em; border-top: 1px solid #e3e5ea; font-size: 16px; color: #5a6070; line-height: 1.45; }
.arrow { display: grid; place-items: center; font-size: 40px; font-weight: 700; color: #8a8f9c; }
.result { display: flex; align-items: center; gap: 16px; margin-bottom: 10px; padding: 10px 22px; border-radius: 10px; background: #f3f4f7; }
.result-label { font-size: 15px; font-weight: 800; color: #5a6070; }
.result-what { font-size: 18px; font-weight: 700; }
.result-num { font-size: 30px; font-weight: 800; color: #5a6070; }
.result-num b { font-size: 38px; color: var(--accent); }
.result-sub { margin-left: auto; font-size: 16px; font-weight: 700; color: #5a6070; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 解決策を強調（data-focus="solution"） */
.slide[data-focus="solution"] .solution {
  border: 3px solid var(--accent);
  background: color-mix(in srgb, var(--accent) 6%, #fff);
}
.slide[data-focus="solution"] .solution .label { background: var(--accent); color: #fff; }

/* 縦に3段（data-dir="col"） */
.slide[data-dir="col"] .flow { grid-template-columns: 1fr; grid-template-rows: 1fr 22px 1fr 22px 1fr; }
.slide[data-dir="col"] .step { display: grid; grid-template-columns: 96px 330px 1fr; align-items: center; gap: 16px; padding: 8px 20px; }
.slide[data-dir="col"] .label { align-self: center; }
.slide[data-dir="col"] .head { font-size: 21px; }
.slide[data-dir="col"] ul { margin: 0; padding: 0 0 0 2em; border-top: 0; border-left: 1px solid #e3e5ea; font-size: 15px; }
.slide[data-dir="col"] .arrow { font-size: 28px; transform: rotate(90deg); }`,
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
        { value: 'row', label: '横に3列' },
        { value: 'col', label: '縦に3段' },
      ],
    },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'solution',
      options: [
        { value: 'solution', label: '解決策を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
  ],
  cautions: [
    '原因を飛ばさないこと。「課題→解決策」だけだと、聞き手は解決策が本当に効くのか判断できません。原因は「人が足りない」のような広い言い方ではなく、「明細を手で入力している」のように、解決策で直せる具体的なことまで掘り下げます。',
    '3つの枠の要点は、同じくらいの長さの1文にそろえます。課題だけ長い説明文になっていると、目が止まって流れが途切れます。説明しきれない部分は補足の2行か、次のスライドに回します。',
    '課題と解決策には、できるだけ同じ物差しの数字を入れます（見本なら「6日」と「2日」）。数字が同じ単位でそろうと、解決策の効き目が比べられます。見込みの数字は、根拠を注記に書きます。',
    '横に3列は流れが目で追いやすく、文字が多いときは縦に3段の方が1行を長く取れます。どちらにしても、読む順番（左から右・上から下）と矢印の向きをそろえます。',
  ],
  similar: [
    { slug: 'as-is-to-be', diff: '現状・理想・差分型は、今の姿と目指す姿を並べ、その差を埋める打ち手を示す型です。原因の分析より、目指す姿を描くことに重きを置きます。' },
    { slug: 'logic-tree', diff: 'ロジックツリー型は、課題や原因を木の枝のように分解していく型です。原因がいくつもあって、どれに手を打つか選ぶ前の整理に向きます。' },
    { slug: 'claim-evidence', diff: '主張・根拠・示唆型は、言いたいことと、それを支える事実・その意味を並べる型です。解決策の提案より、調べた結果を報告するときに使います。' },
  ],
  faq: [
    {
      q: '課題と問題はどう違いますか？',
      a: '問題は「困っている今の状態」、課題は「解決するために取り組むべきこと」と使い分けることが多いです。ただ社内資料では厳密に分けていないことも多いので、この型では「困っていること」を課題の枠に書き、言葉は資料の読み手が普段使う方にそろえるのがおすすめです。',
    },
    {
      q: '原因が複数あるときはどうすればいいですか？',
      a: 'この型には、いちばん大きな原因を1つだけ載せます。原因が複数あることを見せたいときは、1つ前のスライドでロジックツリー型を使って原因を分解し、「今回はこの原因に手を打つ」と絞ってから、この型のスライドに進むと筋が通ります。',
    },
    {
      q: 'AIに課題・原因・解決型のスライドを作ってもらうコツは？',
      a: '3つの枠それぞれの中身を自分で書いて渡すことです。「課題・原因・解決型で」とだけ頼むと、AIがもっともらしい原因を作ってしまうことがあります。中身は自分で決め、AIには並べ方・強調・文字の大きさといった形の指定を任せると、事実と違う資料になりません。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
