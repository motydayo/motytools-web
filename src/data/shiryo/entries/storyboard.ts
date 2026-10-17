import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'storyboard',
  no: 80,
  category: 'teian',
  name: 'ストーリーボード型',
  en: 'Storyboard',
  aka: ['絵コンテ', '4コマ', 'ストーリー図解', '利用シーン', 'シナリオ図'],
  mode: 'static',
  title: 'ストーリーボードとは？絵コンテ風に利用場面を見せるスライドの作り方【PowerPoint・Googleスライド】',
  description:
    '場面の絵を4コマ並べ、1コマごとに1文の説明を添えるストーリーボード型のスライドを見本で解説。サービスの使われ方を伝える作り方を、PowerPoint・Googleスライドの手順、AIへの指示文、HTMLまでまとめました。',
  oneLine: '場面の絵を順に並べ、使われ方を物語として見せる。',
  what: [
    '絵コンテのように、場面の絵を左から右へ4コマ並べ、コマの下に番号と1文の説明を置く型です。見本では、ごみ出しを忘れないための通知アプリが使われる朝の流れを、「気づく → 通知が届く → ごみ置き場へ向かう → 安心して出かける」の4場面で見せています。最後のコマだけ枠をアクセント色にして、物語のゴールを目立たせています。',
    '機能の一覧を説明するより、「誰が・どんな場面で・どう助かるのか」を絵の順で見せたほうが、聞き手は自分ごととして想像できます。決まりごとは、コマの数を3〜5つに絞ること、説明を1コマ1文（20字前後）にすること、そして絵のタッチをそろえることです。',
  ],
  when: [
    '新しいサービスやアプリが、お客さまの生活や仕事の中でどう使われるかを伝えるとき',
    '企画書や提案書で、導入後の1日の流れを具体的に想像してもらいたいとき',
    '動画やマンガを作る前に、構成を関係者とすり合わせるとき',
    '研修や社内向けの資料で、ある手続きの全体の流れを場面ごとに説明するとき',
  ],
  avoid: [
    '手順を正確に追ってもらいたいとき（絵よりも文字の番号が大事なので、操作手順型にする）',
    '時間や期間の長さを見せたいとき（タイムライン型やガントチャート型にする）',
    '場面が7つ以上あり、1コマが小さくなりすぎるとき（4〜5つの山場に絞るか、2枚に分ける）',
  ],
  prompt:
    '16:9のスライドを1枚、「ストーリーボード型（storyboard）」で作ってください。いちばん上に小さく「ごみ出し通知アプリ「ごみナビ」の使われ方」、その下に結論の見出し「通知ひとつで、ごみ出しを忘れない朝になる」を1行で置きます。その下に、同じ大きさの絵のコマを左から右へ4つ並べてください（白い背景に細い灰色の枠線、角丸）。各コマは上に絵、下に番号の丸（黒地に白文字）と1文の説明（16pt以上・太字）を置きます。絵はすべて同じタッチの、シンプルで平らな色面のイラストにし、人物は顔のない簡単な形にしてください。1コマ目＝出かける直前に、壁の時計を見て「今日がごみの日だ」と気づく人物。説明「出かける直前に、今日がごみの日だったと気づく」。2コマ目＝スマホの画面に通知が出ている。説明「スマホに「今日は燃えるごみ」と通知が届く」。3コマ目＝ごみ袋を持ってごみ置き場へ歩く人物。説明「通知を見て、袋を持ってごみ置き場へ向かう」。4コマ目＝収集車の前で、人物の横にチェックマーク。説明「収集に間に合い、安心して出かけられる」。コマの間の矢印は「{{arrow:t}}」にしてください。最後のコマは「{{focus:t}}」にしてください（強調するときは、枠をアクセント色{{accent:t}}にして太くし、薄い色の背景を敷く）。絵の中の色は、アクセント色の1色と灰色だけにします。最下部に「※ 想定する利用場面のイメージ。画面や数字は実際の製品とは異なる。」と注記（12pt以上）を入れてください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「図形」→「四角形: 角を丸くする」で枠を1つ作り、その上半分に絵、下に文字を置きます。枠ができたらコピーして4つ並べ、4つを選んで「図形の書式」→「配置」→「左右に整列」を押すと、間隔がそろいます。絵は「挿入」→「アイコン」やイラスト素材を使うか、AIに頼んで描いてもらった画像を「挿入」→「画像」で入れます。画像のサイズは、トリミングで4コマとも同じ縦横比にそろえてください。コマの間の矢印は「図形」→「矢印: 右」です。',
    'Googleスライドでも「挿入」→「図形」→「図形」で角丸四角形を作ってコピーし、「配置」メニューで等間隔にそろえます。絵は「挿入」→「画像」で入れ、画像を選んで上のバーの「画像を切り抜く」の横の矢印から図形を選ぶと、枠と同じ角丸にできます。AIで画像を作る場合は、4枚とも「同じタッチ・同じ色数・同じ人物」と指定して一度に頼むと、絵柄がそろいます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。絵の場所は灰色の仮の箱（pic）にしてあるので、ここを画像（img）に差し替えてください。コマの数を変えたいときは、1コマぶん（frame）をコピーして、番号と説明を書き換えます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-arrow="{{arrow}}" data-focus="{{focus}}">
  <p class="kicker">ごみ出し通知アプリ「ごみナビ」の使われ方</p>
  <h1 class="title">通知ひとつで、ごみ出しを忘れない朝になる</h1>

  <div class="row">
    <div class="frame">
      <!-- 絵に差し替える: <img src="scene1.png" alt="時計を見て気づく人物"> -->
      <div class="pic"></div>
      <div class="cap"><span class="n">1</span><span class="text">出かける直前に、今日がごみの日だったと気づく</span></div>
    </div>
    <span class="arrow">›</span>
    <div class="frame">
      <div class="pic"></div>
      <div class="cap"><span class="n">2</span><span class="text">スマホに「今日は燃えるごみ」と通知が届く</span></div>
    </div>
    <span class="arrow">›</span>
    <div class="frame">
      <div class="pic"></div>
      <div class="cap"><span class="n">3</span><span class="text">通知を見て、袋を持ってごみ置き場へ向かう</span></div>
    </div>
    <span class="arrow">›</span>
    <div class="frame last">
      <div class="pic"></div>
      <div class="cap"><span class="n">4</span><span class="text">収集に間に合い、安心して出かけられる</span></div>
    </div>
  </div>

  <p class="note">※ 想定する利用場面のイメージ。画面や数字は実際の製品とは異なる。</p>
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

.row { flex: 1; display: flex; align-items: flex-start; gap: 10px; margin: 22px 0 12px; }
.frame { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; padding: 8px; border: 2px solid #e3e5ea; border-radius: 12px; }
/* 絵の場所（仮）。img に差し替えるときは width: 100% を付ける */
.pic { aspect-ratio: 10 / 7; border-radius: 7px; background: #f3f4f7; }
.cap { display: flex; gap: 8px; padding: 0 4px 4px; }
.n { flex: none; display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; background: #1f2430; color: #fff; font-size: 15px; font-weight: 800; }
.text { font-size: 16px; font-weight: 700; line-height: 1.45; }
.arrow { align-self: center; flex: none; width: 14px; margin-bottom: 60px; color: #8a8f9c; font-size: 30px; line-height: 1; text-align: center; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* コマ間の矢印（data-arrow="hide"）／最後のコマの強調（data-focus="last"） */
.slide[data-arrow="hide"] .arrow { display: none; }
.slide[data-arrow="hide"] .row { gap: 18px; }
.slide[data-focus="last"] .last { border-width: 3px; border-color: var(--accent); background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="last"] .last .n { background: var(--accent); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'arrow',
      type: 'select',
      label: 'コマ間の矢印',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
    {
      key: 'focus',
      type: 'select',
      label: '最後のコマ',
      value: 'last',
      options: [
        { value: 'last', label: '枠で強調する' },
        { value: 'none', label: '強調しない' },
      ],
    },
  ],
  cautions: [
    '絵のタッチをそろえます。コマごとに写真・フリー素材・手描きが混ざると、資料が寄せ集めに見えます。同じ素材集から選ぶか、AIで作るなら4枚を同じ指示で一度に作ります。',
    '説明は1コマ1文、20字前後にします。コマの下に3行も4行も書くと、絵を見ずに文字だけを読まれてしまい、絵コンテにした意味がなくなります。',
    '物語の山場（気づく・解決する・うれしい）を決めてから場面を選びます。「家を出る」「歩く」のようなつなぎの場面ばかりだと、見終わっても何が良いのか残りません。最後のコマは、お客さまの得になる結末にします。',
    '人物の顔や服を細かく描き込みすぎないこと。誰かの写真や実在の人物に似てしまうと、権利の問題にもなります。顔のない簡単な人物の形にしておけば、聞き手が自分に置き換えやすくなります。',
  ],
  similar: [
    { slug: 'flow', diff: 'フロー型は、手順や流れを文字の箱と矢印でつなぐ型です。ストーリーボード型は、場面を絵で見せて、使う人の気持ちや状況まで想像してもらいます。' },
    { slug: 'customer-journey', diff: 'カスタマージャーニー型は、お客さまの行動と気持ちの移り変わりを、段階ごとの表で整理する型です。ストーリーボード型は、その中の代表的な1つの流れを絵で語ります。' },
    { slug: 'steps', diff: '操作手順型は、操作の順番を番号つきで正確に示す型です。ストーリーボード型は、操作よりも場面の流れと得られる体験を見せます。' },
  ],
  faq: [
    {
      q: 'ストーリーボードと絵コンテは同じものですか？',
      a: 'ほぼ同じです。絵コンテは映像やマンガの構成を描いた絵の並びで、ストーリーボードは英語での呼び方です。ビジネスの資料では、サービスの使われ方や1日の流れを絵のコマで見せる図を、ストーリーボードと呼びます。',
    },
    {
      q: '絵が苦手でもストーリーボードは作れますか？',
      a: '作れます。顔のない簡単な人物と、スマホや建物などの単純な形だけで十分です。PowerPointやGoogleスライドの図形を組み合わせて描けますし、AIに「同じタッチで4コマ分の絵を」と頼む方法もあります。絵の上手さより、場面の選び方が大事です。',
    },
    {
      q: 'コマの数は何個がよいですか？',
      a: '4つが基本です。起承転結の4つに分けると、物語として収まりが良く、1コマも大きく見せられます。3つ以下だと流れが伝わりにくく、6つ以上だと文字が小さくなります。5つまでなら、1つの山場を足す形で作れます。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
