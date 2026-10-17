import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'kanban',
  no: 54,
  category: 'keikaku',
  name: 'カンバン型',
  en: 'Kanban board',
  aka: ['かんばん', 'カンバンボード', 'タスクボード', '進捗ボード', 'ステータス別一覧', 'かんばん方式'],
  mode: 'static',
  title:
    'カンバン（かんばん）とは？作業の進み具合を列で見せる資料の作り方【見本つき】',
  description:
    '作業を「未着手・作業中・レビュー待ち・完了」の列に並べる「カンバン型」のスライドを見本で解説。たまっている列の見せ方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '作業を進み具合の列に並べ、どこでたまっているかを見せる。',
  what: [
    '作業の札（カード）を、進み具合ごとの列に振り分けて並べる型です。見本ではWebサイトのリニューアル作業15件を「未着手・作業中・レビュー待ち・完了」の4列に並べ、列の見出しには札の件数を丸い数字で添えています。作業中の列には「上限3」の札を付けて同時に進める数を示し、いま作業が止まっているレビュー待ちの列だけを色の付いた枠と濃い数字で強調しています。',
    'カンバン型のよさは、作業の「流れ」と「たまっている場所」が一目で分かることです。ガントチャートが「いつやるか」を見せるのに対して、カンバンは「いまどの段階にあるか」を見せます。決まりごとは、列を3〜5つにすることと、列ごとの札の数を数字で添えること、そして強調するのはたまっている1列だけにすることです。',
  ],
  when: [
    '定例会議で、作業全体の進み具合と、止まっている場所を共有したいとき',
    '「レビュー待ちが多い」「作業中が多すぎる」といった、流れの詰まりを見せて改善を提案したいとき',
    '日付が決まっていない作業（問い合わせ対応・改善作業など）の状況を見せたいとき',
    '少人数のチームで、誰が何をしているかをひと目でそろえたいとき',
  ],
  avoid: [
    '作業の期限や所要期間を見せたいとき（ガントチャート型にする）',
    '作業が30件を超え、札の文字が読めなくなるとき（件数だけの数字カードにまとめる）',
    '担当者ごとの分担を見せたいとき（スイムレーン型やRACI責任分担型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「カンバン型（kanban board）」で作ってください。いちばん上に小さく「Webサイトリニューアルの進み具合」、その下に結論の見出し「レビュー待ちが4件たまり、完了が止まっている」を置きます。その下に、同じ幅の4つの縦の列を並べ、列は薄い灰色の角丸の枠にしてください。列の見出しと札は、左から順に、「未着手」（3件）＝料金表の更新・FAQページの追加・採用ページの新設、「作業中」（3件・見出しの横に「上限3」の札）＝トップ画像の差替え・お知らせ一覧の改修・スマホ表示の調整、「レビュー待ち」（4件）＝会社概要の文面・事例ページ3本・フォームの文言・プライバシー規約、「完了」（5件）＝サイト構成の決定・デザイン案の承認・ロゴの書き出し・写真の撮影・ドメインの移管です。列の見出しは太字18pt、右端に件数を白い丸で添えます。札は白い角丸の長方形で、文字は16pt以上にし、縦に8ptの間隔で並べます。完了の札だけ文字を灰色にしてください。強調は「{{focus:t}}」にしてください（レビュー待ちを強調するときは、その列の枠と件数の丸をアクセント色{{accent:t}}にし、列の背景を薄いアクセント色にする）。作業中の上限は「{{limit:t}}」にしてください（表示するときは、「作業中」の横に「上限3」の札を付ける）。色はアクセント色の1色と灰色だけにし、見出しは32〜36pt。最下部に「※ 9月第2週の月曜時点・全15件。作業中の上限は3件。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」で列の枠を1つ作り、塗りを薄い灰色にします。同じ枠を3回複製して4列に並べ、「配置」→「左右に整列」で間隔をそろえます。札は白い角丸四角形を1枚作り、文字を入れて、列ごとに複製して縦に並べます。件数の丸は「図形」→「楕円」です。SmartArtに専用の部品はないので、図形を複製して作るのが確実です。札の数が変わったら、複製か削除をして、見出しの件数も直します。',
    'Googleスライドでも手順は同じで、「挿入」→「図形」→「図形」から角丸四角形を作ります。複製は図形を選んで「Ctrl+D」（Macは「Command+D」）です。そろえるときは、図形を全部選んで上の「配置」メニューから、そろえる・均等に並べる操作を選びます。作業が多く、日々札が動く場合は、TrelloやBacklogなど専用のカンバン機能で管理し、会議の日の画面を撮って貼る方が、直す手間が減ります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。列は同じ幅（repeat(4, 1fr)）で並べているので、札を足したいときは、列の中に1行コピーするだけです。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-limit="{{limit}}">
  <p class="kicker">Webサイトリニューアルの進み具合</p>
  <h1 class="title">レビュー待ちが4件たまり、完了が止まっている</h1>
  <div class="kb-board">
    <div class="kb-col kb-todo">
      <div class="kb-head"><span class="kb-name">未着手</span><span class="kb-count">3</span></div>
      <div class="kb-cards">
        <span class="kb-card">料金表の更新</span>
        <span class="kb-card">FAQページの追加</span>
        <span class="kb-card">採用ページの新設</span>
      </div>
    </div>
    <div class="kb-col kb-doing">
      <div class="kb-head"><span class="kb-name">作業中</span><span class="kb-limit">上限3</span><span class="kb-count">3</span></div>
      <div class="kb-cards">
        <span class="kb-card">トップ画像の差替え</span>
        <span class="kb-card">お知らせ一覧の改修</span>
        <span class="kb-card">スマホ表示の調整</span>
      </div>
    </div>
    <div class="kb-col kb-review">
      <div class="kb-head"><span class="kb-name">レビュー待ち</span><span class="kb-count">4</span></div>
      <div class="kb-cards">
        <span class="kb-card">会社概要の文面</span>
        <span class="kb-card">事例ページ3本</span>
        <span class="kb-card">フォームの文言</span>
        <span class="kb-card">プライバシー規約</span>
      </div>
    </div>
    <div class="kb-col kb-done">
      <div class="kb-head"><span class="kb-name">完了</span><span class="kb-count">5</span></div>
      <div class="kb-cards">
        <span class="kb-card">サイト構成の決定</span>
        <span class="kb-card">デザイン案の承認</span>
        <span class="kb-card">ロゴの書き出し</span>
        <span class="kb-card">写真の撮影</span>
        <span class="kb-card">ドメインの移管</span>
      </div>
    </div>
  </div>
  <p class="note">※ 9月第2週の月曜時点・全15件。作業中の上限は3件。</p>
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

.kb-board { flex: 1; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; margin: 16px 0 10px; min-height: 0; }
.kb-col { display: flex; flex-direction: column; padding: 12px; border: 2px solid transparent; border-radius: 12px; background: #f3f4f7; min-width: 0; }
.kb-head { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
.kb-name { font-size: 18px; font-weight: 800; white-space: nowrap; }
.kb-limit { padding: 0 8px; border-radius: 6px; background: #fff; color: #5a6070; font-size: 14px; font-weight: 700; line-height: 22px; white-space: nowrap; }
.kb-count { margin-left: auto; min-width: 28px; padding: 0 6px; border-radius: 999px; background: #fff; color: #5a6070; font-size: 18px; font-weight: 800; line-height: 28px; text-align: center; font-variant-numeric: tabular-nums; }
.kb-cards { display: flex; flex-direction: column; gap: 8px; }
.kb-card { padding: 10px 12px; border: 1px solid #e3e5ea; border-radius: 8px; background: #fff; font-size: 16px; font-weight: 700; line-height: 1.35; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.kb-done .kb-card { color: #8a8f9c; font-weight: 500; }
/* 強調する列（data-focus="review"） */
.slide[data-focus="review"] .kb-review { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 7%, #fff); }
.slide[data-focus="review"] .kb-review .kb-count { background: var(--accent); color: #fff; }
.slide[data-limit="hide"] .kb-limit { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する列',
      value: 'review',
      options: [
        { value: 'review', label: 'レビュー待ちを強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'limit',
      type: 'select',
      label: '作業中の上限',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '列の数を増やしすぎないようにします。「未着手・作業中・レビュー待ち・完了」の4列が見やすい限度で、6列を超えると札が細かくなって読めません。「確認中」と「レビュー待ち」のように似た列は1つにまとめます。',
    '列ごとの件数を書かずに札だけ並べると、「結局どこが多いのか」が伝わりません。列の見出しに件数を数字で添え、たまっている列は色で示します。',
    '全部の列に色を付けないようにします。色を付けるのは、話したい列の1つだけです。完了の札は灰色にしておくと、これから動くものが目立ちます。',
    '札の文章を長くしないようにします。「トップ画像の差替え」のように「何を・どうする」を10文字ほどで書き、詳しい中身は別の資料に回します。',
  ],
  similar: [
    { slug: 'gantt', diff: 'ガントチャート型は、作業の期間と重なりを日付の精度で見せる型です。カンバン型は日付を見せず、いまの進み具合の段階を見せます。' },
    { slug: 'swimlane', diff: 'スイムレーン型は、担当ごとの列に分けて業務の流れを描く型です。カンバン型は、進み具合ごとの列に作業を置きます。' },
    { slug: 'checklist', diff: 'チェックリスト型は、確認項目が済んだかどうかを一覧にする型です。カンバン型は、済んだかどうかの2択ではなく、途中の段階も見せます。' },
  ],
  faq: [
    {
      q: 'カンバンとは何ですか？',
      a: 'もとはトヨタ生産方式で使われた、作業の指示を書いた札のことです。いまは、作業を札にして「未着手・作業中・完了」などの列に並べ、進み具合を見える化する管理方法をカンバン方式と呼びます。',
    },
    {
      q: 'カンバンの「作業中の上限」とは何ですか？',
      a: '同時に進める作業の数に決めた上限のことで、WIP制限（仕掛かり中の作業の制限）とも呼ばれます。作業中が上限を超えそうになったら新しい作業に手を付けず、先に終わらせる決まりにすると、作業が止まらず流れます。',
    },
    {
      q: 'PowerPointでカンバンを作るコツはありますか？',
      a: '列の枠と札をそれぞれ1つだけ作り、複製してそろえることです。札を1つずつ作ると大きさがずれやすくなります。件数は見出しに数字で書き、色を付けるのは話したい列の1つだけにすると、会議で伝わります。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
