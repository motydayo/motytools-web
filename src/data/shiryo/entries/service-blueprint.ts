import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'service-blueprint',
  no: 71,
  category: 'keikaku',
  name: 'サービスブループリント型',
  en: 'Service blueprint',
  aka: ['サービスブループリント', 'サービス設計図', 'お客さまの行動と裏側の業務', 'ブループリント図', '見える線'],
  mode: 'static',
  title: 'サービスブループリントとは？お客さまの行動と裏側を1枚で見せる作り方【見本・書き方】',
  description:
    'お客さまの行動と、その裏の業務を上下に対応させる「サービスブループリント型」のスライドを見本で解説。見える線の引き方、困りごとの示し方、PowerPoint・Googleスライドでの作り方、AIへの指示文とHTMLまでまとめました。',
  oneLine: 'お客さまの行動と、裏側の業務・仕組みを段階ごとに上下で対応させる。',
  what: [
    '横に「申し込み・集荷・洗い・配送・受け取り」と、お客さまが体験する段階を並べ、縦に「お客さまの行動」「表の対応」「裏の業務」「支える仕組み」の4段を重ねた表です。見本は宅配クリーニングです。点線（見える線）より上はお客さまに見える部分、下は見えない部分で、同じ段階の中で、お客さまの動きに会社のどの業務がどう対応しているかが、縦に読み取れます。3つ目の段階「洗い・仕上げ」の列だけ色を付け、お客さまが「待つ」だけで不安になる場所と、そこに加える「進み具合の通知」を示しています。',
    'サービスブループリントのよさは、お客さまが感じる不満の原因が、どの業務や仕組みにあるのかを、同じ図の中で追えることです。「お客さまの行動」だけを並べるカスタマージャーニーと違い、裏側まで描くので、改善案を出す人（現場・システム・企画）が同じ図を見て話せます。段階は4〜6つに収め、各マスは短い一言にします。',
  ],
  when: [
    '新しいサービスの設計や、既存サービスの改善案を、現場とシステムの担当者で話し合うとき',
    'お客さまが困る場面の原因が、裏の業務やシステムのどこにあるかを示したいとき',
    '店舗・コールセンター・配送など、複数の部署にまたがるサービスの全体像を共有するとき',
    'サービスの品質を上げるための投資（新しい仕組みや人員）の必要性を説明するとき',
  ],
  avoid: [
    'お客さまの気持ちの変化を見せたいとき（カスタマージャーニー型にする）',
    '業務の担当者ごとの受け渡しだけを見せたいとき（スイムレーン型にする）',
    '社内の作業を時間の順に並べたいだけのとき（フロー型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「サービスブループリント型（service blueprint）」で作ってください。いちばん上に小さく「宅配クリーニング「らくクリ」の利用の流れ」、その下に結論の見出し「「待つ時間」を通知で埋め、安心感を高める」を置きます。その下に、横6列×縦5行の表を置きます。左の1列は行の名前、上の1行は段階の名前で、段階は左から「申し込み」「集荷」「洗い・仕上げ」「配送」「受け取り」の5つ（灰色の地に白い太字）です。行の名前は上から「お客さまの行動」「表の対応」「裏の業務」「支える仕組み」です。マスの中身は16pt以上で、中央に置きます。お客さまの行動は、アプリで注文する／玄関に袋を出す／待つ（進みが見えない）／在宅で受け取る／仕上がり確認。表の対応は、注文確認を通知／スタッフが訪問／進み具合を通知（「新」の札）／スタッフが届ける／感想を聞く連絡。裏の業務は、注文を自動で受付／検品・タグ付け／洗う・シミ抜き／配送ルートを組む／声を集計して改善。支える仕組みは、注文アプリ／集荷ルート管理／工場管理システム／配送管理システム／顧客データベースです。「裏の業務」と「支える仕組み」の2行は薄い灰色の地にしてください。表の対応と裏の業務の間の線は「{{visible:t}}」にしてください（表示するときは、アクセント色{{accent:t}}の太い点線を引き、右端に同じ色の札で「ここから下は、お客さまに見えない」と書く）。強調は「{{focus:t}}」にしてください（強調するときは、3列目の「洗い・仕上げ」の列全体をごく薄いアクセント色で塗り、見出しをアクセント色の地にし、「待つ」を太字のアクセント色、「進み具合を通知」に「新」の丸い札を付ける）。色はアクセント色1色だけで、ほかは白・灰色・黒にします。見出しは32〜36pt。最下部に「※ 点線より下は、お客さまから見えない業務。「新」は今回追加する対応。」と注記を入れてください。文言は私が書いたものだけを使い、新しい項目を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で6列×5行の表を作り、1行目と1列目を見出しにします。1行目は「表のデザイン」→「塗りつぶし」で灰色にして文字を白にします。裏側の2行は、行を選んで「塗りつぶし」を薄い灰色にします。表の中は短い一言だけにし、行の高さが揃うように「表ツール」の「レイアウト」→「行の高さをそろえる」を使います。表と裏を分ける線は、表の罫線ではなく「挿入」→「図形」→「線」で点線を引き、「図形の枠線」→「実線/点線」で点線にすると、位置と太さを後から直せます。',
    'Googleスライドでは、「挿入」→「表」で6×5の表を作り、行や列を選んで塗りつぶしの色を変えます。表と裏を分ける点線は、「挿入」→「線」で引き、ツールバーの「枠線のスタイル」で点線にします。強調する列は、その列のマスをすべて選んで、塗りつぶしを薄い色にします。「新」の札は、小さな角丸四角形を重ねます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。表は6列で組んだ格子（グリッド）で、見える線と強調する列は data-visible と data-focus の値で切り替わります。段階を増やすときは、列の数と各行のマスを1つずつ足してください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-visible="{{visible}}">
  <p class="kicker">宅配クリーニング「らくクリ」の利用の流れ</p>
  <h1 class="title">「待つ時間」を通知で埋め、安心感を高める</h1>

  <div class="sb-grid">
    <span class="sb-corner"></span>
    <span class="sb-st">申し込み</span>
    <span class="sb-st">集荷</span>
    <span class="sb-st sb-c3">洗い・仕上げ</span>
    <span class="sb-st">配送</span>
    <span class="sb-st">受け取り</span>
    <span class="sb-rh">お客さまの行動</span>
    <span class="sb-cell">アプリで注文する</span>
    <span class="sb-cell">玄関に袋を出す</span>
    <span class="sb-cell sb-c3"><b>待つ</b><em>進みが見えない</em></span>
    <span class="sb-cell">在宅で受け取る</span>
    <span class="sb-cell">仕上がり確認</span>
    <span class="sb-rh">表の対応</span>
    <span class="sb-cell sb-front">注文確認を通知</span>
    <span class="sb-cell sb-front">スタッフが訪問</span>
    <span class="sb-cell sb-c3 sb-front">進み具合を通知<i class="sb-new">新</i></span>
    <span class="sb-cell sb-front">スタッフが届ける</span>
    <span class="sb-cell sb-front">感想を聞く連絡</span>
    <span class="sb-rh sb-r4 sb-back">裏の業務<span class="sb-tag">ここから下は、お客さまに見えない</span></span>
    <span class="sb-cell sb-back sb-r4">注文を自動で受付</span>
    <span class="sb-cell sb-back sb-r4">検品・タグ付け</span>
    <span class="sb-cell sb-back sb-r4 sb-c3">洗う・シミ抜き</span>
    <span class="sb-cell sb-back sb-r4">配送ルートを組む</span>
    <span class="sb-cell sb-back sb-r4">声を集計して改善</span>
    <span class="sb-rh sb-back">支える仕組み</span>
    <span class="sb-cell sb-back">注文アプリ</span>
    <span class="sb-cell sb-back">集荷ルート管理</span>
    <span class="sb-cell sb-back sb-c3">工場管理システム</span>
    <span class="sb-cell sb-back">配送管理システム</span>
    <span class="sb-cell sb-back">顧客データベース</span>
  </div>

  <p class="note">※ 点線より下は、お客さまから見えない業務。「新」は今回追加する対応。</p>
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
.sb-grid { position: relative; flex: 1; min-height: 0; display: grid; grid-template-columns: 118px repeat(5, minmax(0, 1fr)); grid-template-rows: 38px repeat(4, minmax(0, 1fr)); margin: 14px 0 8px; }
.sb-st { display: grid; place-items: center; background: #5a6070; border-left: 2px solid #fff; color: #fff; font-size: 17px; font-weight: 800; }
.sb-rh { position: relative; display: flex; align-items: center; padding-left: 4px; border-top: 1.5px solid #e3e5ea; font-size: 16px; font-weight: 800; color: #5a6070; line-height: 1.3; }
.sb-cell { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; padding: 4px 8px; border-top: 1.5px solid #e3e5ea; border-left: 1.5px solid #e3e5ea; font-size: 16px; line-height: 1.35; text-align: center; background: #fff; }
.sb-cell b { font-size: 18px; font-weight: 800; }
.sb-cell em { font-size: 16px; font-style: normal; color: #5a6070; }
.sb-back { background: #f3f4f7; }
.sb-new { display: none; margin-left: 6px; padding: 0 7px; border-radius: 999px; background: var(--accent); color: #fff; font-size: 14px; font-weight: 800; font-style: normal; line-height: 20px; vertical-align: 1px; }

/* 表と裏を分ける「見える線」（data-visible="show"） */
.sb-tag { display: none; position: absolute; top: 0; right: -724px; z-index: 2; transform: translateY(-50%); padding: 0 12px; border-radius: 4px; background: var(--accent); color: #fff; font-size: 14px; font-weight: 700; line-height: 24px; white-space: nowrap; }
.slide[data-visible="show"] .sb-r4 { border-top: 3px dashed var(--accent); }
.slide[data-visible="show"] .sb-tag { display: block; }

/* 不安が生まれる段階を強調（data-focus="gap"） */
.slide[data-focus="gap"] .sb-st.sb-c3 { background: var(--accent); }
.slide[data-focus="gap"] .sb-cell.sb-c3 { background: color-mix(in srgb, var(--accent) 8%, #fff); }
.slide[data-focus="gap"] .sb-cell.sb-c3.sb-back { background: color-mix(in srgb, var(--accent) 12%, #f3f4f7); }
.slide[data-focus="gap"] .sb-front.sb-c3 { font-weight: 800; }
.slide[data-focus="gap"] .sb-front.sb-c3 .sb-new { display: inline-block; }
.slide[data-focus="gap"] .sb-cell b { color: var(--accent); }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する部分',
      value: 'gap',
      options: [
        { value: 'gap', label: '不安が生まれる段階を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'visible',
      type: 'select',
      label: '「見える線」',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '「見える線」を必ず引くこと。この線より上が「お客さまに見える部分」、下が「見えない部分」です。線がないと、ふつうの業務の表と同じに見えて、お客さまの体験と裏側が分かれていることが伝わりません。',
    'マスの中は、10文字前後の一言にします。長い文章にすると、1枚のスライドに6列×5行が収まらず、文字が小さくなります。詳しい業務の内容は別の資料にして、ここには流れだけを書きます。',
    '4段すべてを同じ重さで見せないこと。改善したい場所が1つあるはずなので、その段階の列にだけ色を付け、見出しにも「ここを直す」と結論を書きます。全部に色を付けると、どこが問題なのか分かりません。',
    '裏の業務と支える仕組みは、「お客さまが困った原因」に関係する分だけ書きます。社内の細かい業務を全部載せると、見本の目的（お客さまの不安の原因をたどること）が埋もれます。',
  ],
  similar: [
    { slug: 'customer-journey', diff: 'カスタマージャーニー型は、お客さまの行動と気持ちの移り変わりを並べる型です。サービスブループリント型は、気持ちではなく、その行動を支える会社側の業務と仕組みを描きます。' },
    { slug: 'swimlane', diff: 'スイムレーン型は、担当ごとの列に分けて業務の流れを描く型です。サービスブループリント型は、お客さまの体験を軸に、表と裏の対応を見せます。' },
    { slug: 'value-chain', diff: '価値連鎖型は、事業全体の活動を、仕入れから販売まで並べて見せる型です。サービスブループリント型は、1つのサービスの利用の流れに絞って、裏側まで描きます。' },
  ],
  faq: [
    {
      q: 'サービスブループリントとカスタマージャーニーマップの違いは何ですか？',
      a: 'カスタマージャーニーマップは、お客さまの行動・思い・気持ちを時間の順に描き、お客さまの視点で体験を見る図です。サービスブループリントは、その行動を支える会社側の対応・裏の業務・仕組みまで上下に描き、サービスを作る側の視点で改善点を探す図です。',
    },
    {
      q: '「見える線（Line of visibility）」とは何ですか？',
      a: 'お客さまから見える対応（表）と、見えない業務（裏）の境目に引く線です。サービスブループリントの特徴で、この線より下の業務は、お客さまからは見えないので、不安や不満に気づきにくい部分です。見本のように点線で引くと、境目がはっきりします。',
    },
    {
      q: 'PowerPointで作るとき、表と図形のどちらがよいですか？',
      a: '行と列が決まっているので、表で作ると文字の位置がそろい、あとから段階を足すのも簡単です。強調する列は表の塗りつぶしで、見える線は別に引いた線で作ると、修正しやすくなります。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
