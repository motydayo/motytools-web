import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'input-output',
  no: 64,
  category: 'keikaku',
  name: '入出力モデル型',
  en: 'Input, process, output',
  aka: ['インプット・アウトプット', 'IPO図', '入力・処理・出力', '入出力図', 'IPOモデル'],
  mode: 'static',
  title: '入出力モデル型とは？入力・処理・出力を1枚で見せるスライドの作り方【IPO図】',
  description:
    '入れるもの→処理→出てくるものを左から右へ並べる「入出力モデル型」のスライドを見本で解説。IPO図との関係、件数の置き方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: '入れるもの・処理・出てくるものを左から右へ並べ、仕事の全体を見せる。',
  what: [
    '左に「入力」（仕事に入れるもの）、真ん中に「処理」（その仕事で行うこと）、右に「出力」（できあがるもの）を3つの枠で並べ、矢印でつなぐ型です。見本では、経理部が請求書を支払いデータにするまでを描いています。月に420通届く請求書を、読み取る・突き合わせる・承認するの3工程にかけ、398件の支払いデータと22件の差し戻しにする流れです。真ん中の枠だけ線を太くして、「ここが経理部の仕事です」と示しています。',
    'この型のよさは、仕事の範囲が一目で分かることです。何を受け取り、何をして、何を渡すのかが並んでいるので、「ここまでは他の部署の仕事」「ここから先は自分たちの責任」という線引きがはっきりします。入力と出力に件数や量を添えておくと、仕事の大きさも同時に伝わります。処理の工程は3〜4つまでにし、細かい手順は別のスライドに分けるのが決まりです。',
  ],
  when: [
    '部署や担当の仕事の範囲を、他部署や新しいメンバーに説明するとき',
    '業務を自動化・外部委託する前に、「何を渡して、何が返ってくるか」を関係者と確かめるとき',
    'システムやサービスの機能を、専門用語を使わずに1枚で紹介するとき',
    '業務マニュアルの冒頭で、これから説明する仕事の全体像を先に見せるとき',
  ],
  avoid: [
    '手順が7つ以上あり、順番や分かれ道を細かく見せたいとき（フロー型にする）',
    '担当者や部署ごとの受け渡しを見せたいとき（スイムレーン型にする）',
    '部品どうしのつながりやデータの行き先を図にしたいとき（システム構成型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「入出力モデル型（input, process, output）」で作ってください。いちばん上に小さく「請求書処理のしくみ（経理部）」、その下に結論の見出し「請求書は3工程を通り、支払いデータになる」を置きます。その下に「入力」「処理」「出力」の3つの枠を左から右へ並べ、枠の間を矢印（＞の形）でつないでください。各枠の上に小さな札で「入力」などの名前を置き、その下に太字の見出しを1つ、続けて中身を並べます。入力の見出しは「届いた書類」で、中身は「請求書（紙・PDF）」「取引先の一覧表」「発注書・納品書」です。処理の見出しは「経理部の3工程」で、番号つきの丸と一緒に、1「読み取る（金額と日付を入力）」、2「突き合わせる（発注書と照らす）」、3「承認する（部長が内容を確認）」を縦に並べます。出力の見出しは「できあがるもの」で、中身は「承認済みの支払いデータ」「差し戻しの一覧（22件）」「月末の仕訳データ」です。処理の枠は入力・出力より少し広くしてください。件数は「{{counts:t}}」にしてください（表示するときは、各枠の下に区切り線を引き、入力は「420通／月」、処理は「約4分／1通」、出力は「398件／月」を、数字だけ30pt前後の太字にして置く）。強調は「{{focus:t}}」にしてください（強調するときは、処理の枠の線を太くしてアクセント色{{accent:t}}にし、札・番号の丸・数字もアクセント色にする）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt、枠の見出しは20pt以上、中身は16pt以上。最下部に「※ 件数は2025年9月の実績。処理時間は読み取りから承認までの平均。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「図形」→「四角形: 角を丸くする」を3つ置き、それぞれに札・見出し・中身を書きます。枠の間には「図形」→「矢印: 山形」を置きます。3つの枠を全部選んで「図形の書式」→「配置」→「上揃え」と「左右に整列」を押すと、高さと間隔がそろいます。処理の枠は、「図形の書式」→「図形の枠線」で太さ3ptにしてアクセント色を付けます。早く形にしたいときは、「挿入」→「SmartArt」→「手順」から3つの箱が並ぶ図を選び、箱の文字を入れ替えて、仕上げに「変換」→「図形に変換」で普通の図形に戻すと、細かい調整ができます。',
    'Googleスライドでは、「挿入」→「図形」→「図形」から角丸四角形を3つと山形の矢印を2つ置き、3つの枠を選んで「配置」→「均等に配置」→「横方向」で間隔をそろえます。処理の枠だけ枠線の色と太さ（3pt）を変えます。中身の箇条書きは、枠の中に直接文字を打つより、枠の上に別の文字の枠（「挿入」→「テキスト ボックス」）を重ねる方が、行の間隔を整えやすくなります。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。強調と件数の表示は、data-focus と data-counts の値を書き換えるだけで切り替わります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-counts="{{counts}}">
  <p class="kicker">請求書処理のしくみ（経理部）</p>
  <h1 class="title">請求書は3工程を通り、支払いデータになる</h1>

  <div class="io-body">
    <div class="io-col io-in">
      <span class="io-label">入力</span>
      <p class="io-head">届いた書類</p>
      <ul class="io-list"><li>請求書（紙・PDF）</li><li>取引先の一覧表</li><li>発注書・納品書</li></ul>
      <p class="io-count"><b>420</b>通 ／ 月</p>
    </div>
    <span class="io-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg></span>
    <div class="io-col io-mid">
      <span class="io-label">処理</span>
      <p class="io-head">経理部の3工程</p>
      <ol class="io-steps">
        <li><i>1</i><span><b>読み取る</b><em>金額と日付を入力</em></span></li>
        <li><i>2</i><span><b>突き合わせる</b><em>発注書と照らす</em></span></li>
        <li><i>3</i><span><b>承認する</b><em>部長が内容を確認</em></span></li>
      </ol>
      <p class="io-count"><b>約4分</b> ／ 1通</p>
    </div>
    <span class="io-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg></span>
    <div class="io-col io-out">
      <span class="io-label">出力</span>
      <p class="io-head">できあがるもの</p>
      <ul class="io-list"><li>承認済みの支払いデータ</li><li>差し戻しの一覧（22件）</li><li>月末の仕訳データ</li></ul>
      <p class="io-count"><b>398</b>件 ／ 月</p>
    </div>
  </div>

  <p class="note">※ 件数は2025年9月の実績。処理時間は読み取りから承認までの平均。</p>
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
.io-body {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 36px minmax(0, 1.12fr) 36px minmax(0, 1fr);
  margin: 18px 0 10px;
}
.io-col { display: flex; flex-direction: column; gap: 10px; padding: 14px 20px 14px; border: 2px solid #e3e5ea; border-radius: 12px; background: #fff; }
.io-label { align-self: flex-start; padding: 2px 12px; border-radius: 999px; background: #f3f4f7; color: #5a6070; font-size: 15px; font-weight: 800; }
.io-head { margin: 0; font-size: 21px; font-weight: 800; line-height: 1.3; }
.io-list { margin: 0; padding: 0; list-style: none; display: grid; gap: 8px; }
.io-list li { position: relative; padding-left: 14px; font-size: 16px; color: #5a6070; line-height: 1.4; }
.io-list li::before { content: ""; position: absolute; left: 0; top: 0.6em; width: 6px; height: 6px; border-radius: 50%; background: #c3c8d2; }
.io-steps { margin: 0; padding: 0; list-style: none; display: grid; gap: 8px; }
.io-steps li { display: flex; align-items: center; gap: 12px; }
.io-steps i { flex: none; display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: #5a6070; color: #fff; font-size: 16px; font-weight: 800; font-style: normal; font-variant-numeric: tabular-nums; }
.io-steps span { display: grid; line-height: 1.3; }
.io-steps b { font-size: 17px; font-weight: 800; }
.io-steps em { font-size: 16px; font-style: normal; color: #5a6070; }
.io-count { margin: auto 0 0; padding-top: 8px; border-top: 1px solid #e3e5ea; font-size: 16px; color: #5a6070; }
.io-count b { font-size: 30px; font-weight: 800; color: #1f2430; font-variant-numeric: tabular-nums; line-height: 1.1; }
.io-arrow { display: grid; place-items: center; color: #8a8f9c; }
.io-arrow svg { width: 28px; height: 28px; }

/* 処理の枠を強調（data-focus="process"） */
.slide[data-focus="process"] .io-mid { border: 3px solid var(--accent); background: color-mix(in srgb, var(--accent) 6%, #fff); }
.slide[data-focus="process"] .io-mid .io-label { background: var(--accent); color: #fff; }
.slide[data-focus="process"] .io-mid .io-steps i { background: var(--accent); }
.slide[data-focus="process"] .io-mid .io-count b { color: var(--accent); }

/* 件数を隠す（data-counts="hide"） */
.slide[data-counts="hide"] .io-count { display: none; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'process',
      options: [
        { value: 'process', label: '処理の枠を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'counts',
      type: 'select',
      label: '件数・時間の数字',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '「処理」の枠に動詞を入れること。「経理部」「システム」のような名詞だけだと、何をするのかが伝わりません。「読み取る」「突き合わせる」「承認する」のように、やることを短い動詞で書きます。',
    '入力と出力は「モノの名前」で書き、数をそろえて置きます。入力に請求書が420通あるのに、出力の合計が420件にならないと、聞き手は「残りはどこへ行ったのか」と引っかかります。見本では398件＋差し戻し22件＝420件になっています。',
    '処理を細かく書きすぎないこと。工程は3〜4つまでで、1つの工程は10文字前後の説明に収めます。細かい手順を全部載せたくなったら、フロー型に分けて次のスライドに回します。',
    '強調は処理の枠に1か所だけ。入力・処理・出力の全部に色を付けると、どこが言いたいところなのか分からなくなります。',
  ],
  similar: [
    { slug: 'flow', diff: 'フロー型は、手順を矢印でつなぐ型です。入出力モデル型が「何を入れて何が出るか」の範囲を示すのに対し、フロー型は「どの順に何をするか」の細かい道すじを見せます。' },
    { slug: 'system-diagram', diff: 'システム構成型は、部品どうしのつながりやデータの流れを図にする型です。入出力モデル型より技術寄りで、仕組みの中身を説明するときに使います。' },
    { slug: 'swimlane', diff: 'スイムレーン型は、担当ごとの列に分けて業務の流れを描く型です。入出力モデル型は仕事を1つの塊として見せ、スイムレーン型は誰が受け渡しをするかまで見せます。' },
  ],
  faq: [
    {
      q: '入出力モデルとIPO図は同じものですか？',
      a: 'ほぼ同じものです。IPOは「Input（入力）・Process（処理）・Output（出力）」の頭文字で、システム開発の資料では「IPO図」と呼ばれます。一般の会議資料では、専門用語を避けて「入力・処理・出力」「インプット・アウトプット」と書く方が伝わります。',
    },
    {
      q: 'PowerPointで入出力の図を早く作る方法はありますか？',
      a: '「挿入」→「SmartArt」→「手順」にある、箱が左から右へ並ぶ図が近い形です。箱を3つにして文字を入れ、必要なら「変換」→「図形に変換」で普通の図形に戻してから、処理の枠だけ広げて太い枠線を付けます。',
    },
    {
      q: 'AIに入出力モデルのスライドを頼むコツは？',
      a: '3つの枠それぞれの中身と件数を、自分で書いて渡すことです。「入力・処理・出力で」とだけ頼むと、AIがありそうな工程や数字を作ってしまいます。並べ方・強調・文字の大きさといった形の指定だけをAIに任せ、「数字は私が書いたものだけを使う」と添えると、事実と違う資料になりません。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
