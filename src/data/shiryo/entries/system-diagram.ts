import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'system-diagram',
  no: 62,
  category: 'keikaku',
  name: 'システム構成型',
  en: 'System diagram',
  aka: ['システム構成図', 'システム概要図', '構成図', 'アーキテクチャ図', 'システム全体図', 'システム連携図'],
  mode: 'static',
  title:
    'システム構成図とは？部品とデータの流れを1枚で見せる作り方【見本つき】',
  description:
    '仕組みの部品とデータの流れを描く「システム構成型」のスライドを見本で解説。自社と外部の区切り方、矢印の書き方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLのコードまでまとめました。',
  oneLine: '仕組みの部品と、データの流れを図にする。',
  what: [
    'システムを部品ごとの箱に分け、箱の間のデータの流れを矢印で結ぶ型です。見本では美容室向けの予約システムを、左から「利用する人（お客さま・店舗スタッフ）」「自社で運営する部分（予約サーバーとデータベース）」「外部のサービス（決済・メール配信）」の3つに分けて描いています。自社の部分は点線の枠で囲み、「ここまでが自分たちで作って運営する範囲」だと見えるようにしています。矢印には動詞の短いラベルを付け、何が流れるのかを書いています。',
    'システム構成型のよさは、専門でない人にも「何がどこにあり、何が何に繋がっているのか」を伝えられることです。決まりごとは、箱を3〜8個にすること、人・自社・外部を区切って並べること、矢印の向きをデータの向きにそろえることです。技術の細かい名前（製品名やバージョン）は図には入れず、箱の役割を日本語で書くと、経営層にも通じます。',
  ],
  when: [
    'システム導入や刷新の提案で、全体像を発注側・経営層に説明するとき',
    '外部サービスとの連携（決済・メール・会計など）を、関係者に整理して見せるとき',
    '個人情報などのデータがどこを通り、どこに保存されるかを示すとき',
    '新しいエンジニアや委託先に、システムの全体を最初に説明するとき',
  ],
  avoid: [
    '業務の手順や担当の受け渡しを見せたいとき（スイムレーン型にする）',
    '層（画面・処理・データなど）の積み重なりを見せたいとき（レイヤー構造型にする）',
    '中心と周りの関係だけを見せたいとき（ハブ＆スポーク型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「システム構成型（system diagram）」で作ってください。いちばん上に小さく「美容室向け予約システムの構成」、その下に結論の見出し「予約は自社で受け、決済と通知は外部に任せる」を置きます。その下に、横に3つの領域を描いてください。左の領域には、上に小さく「利用する人」と書き、白地に灰色の枠の角丸の箱を2つ縦に置きます（「お客さま／スマートフォン」「店舗スタッフ／タブレット端末」。題は太字18pt、補足は16pt）。中央には、薄い灰色の背景に点線の枠の領域を置き、左上に「自社で運営」と書きます。中に大きな箱「予約サーバー」（太字24pt・補足は「予約の受付と」「店舗用の管理画面」の2行）と、その下に円柱の図形「データベース」を置いてください。右の領域には、上に小さく「外部のサービス」と書き、左と同じ形の箱を2つ縦に置きます（「決済サービス／カードの支払い」「メール配信／確認メールの送信」）。矢印は灰色の太い線で、先に三角の矢じりを付け、上に16ptのラベルを書きます。お客さま→予約サーバー「予約申込み」、予約サーバー→店舗スタッフ「予約を確認」、予約サーバー→決済サービス「決済を依頼」、予約サーバー→メール配信「通知を依頼」の4本は横の矢印、予約サーバーとデータベースの間は両側に矢じりのある縦の矢印で、ラベルは「予約情報を保存」です。強調は「{{focus:t}}」にしてください（自社で運営する部分を強調するときは、点線の枠の色をアクセント色{{accent:t}}にし、背景を薄いアクセント色にして、予約サーバーとデータベースの枠線を太いアクセント色にする。外部のサービスを強調するときは、右の2つの箱をアクセント色の枠と薄い色の塗りにする）。色はアクセント色の1色と灰色だけ。見出しは32〜36pt。最下部に「※ 矢印はデータの向き。外部のサービスは月額の契約で利用する。」と注記を入れてください。内容は私が書いたものだけを使い、新しい部品や数字を足さないでください。',
  howTo: [
    'PowerPointでは、箱は「挿入」→「図形」→「四角形: 角を丸くする」、データベースは「フローチャート」の「磁気ディスク」（円柱の形）で作ります。矢印は「線矢印」を使い、両側に矢じりを付けたいときは線を選んで「図形の書式」→「図形の枠線」→「矢印」から選びます。自社の範囲を示す点線の枠は、大きな角丸四角形を後ろに置き、「図形の枠線」→「実線/点線」で点線にして、塗りは薄い灰色にします。ラベルは「テキストボックス」を矢印の上に置きます。',
    'Googleスライドでも、「挿入」→「図形」→「図形」から四角形・円柱・矢印を選べます（円柱の形が見つからないときは、楕円と四角形を重ねて作ります）。矢印は「挿入」→「線」→「矢印」です。箱を動かしても線が外れないよう、線の端を箱の辺に合わせて「コネクタ」としてつなぎます。構成の細かい図（サーバーの台数やネットワークまで）が必要なら、draw.ioやVisioのような専用の図を描くソフトで作って貼る方が、きれいに揃います。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。図は1つのSVG（図形を描く仕組み）で、箱と矢印を座標で置いています。部品を足すときは、箱と矢印を1組コピーして、座標を直します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">美容室向け予約システムの構成</p>
  <h1 class="title">予約は自社で受け、決済と通知は外部に任せる</h1>
  <div class="sy-diagram">
    <svg viewBox="0 0 848 340" role="img" aria-label="美容室向け予約システムの構成（利用者・自社の予約サーバーとデータベース・外部の決済とメール配信）">
      <text class="sy-zone" x="0" y="22">利用する人</text>
      <text class="sy-zone" x="848" y="22" text-anchor="end">外部のサービス</text>
      <rect class="sy-own" x="270" y="0" width="320" height="340" rx="16" />
      <text class="sy-zone sy-own-t" x="288" y="22">自社で運営</text>
      <path class="sy-arrow" d="M170 92 H290" />
      <polygon class="sy-tip" points="300,92 290,86 290,98" />
      <text class="sy-lab" x="220" y="83" text-anchor="middle">予約申込み</text>
      <path class="sy-arrow" d="M180 168 H300" />
      <polygon class="sy-tip" points="170,168 180,162 180,174" />
      <text class="sy-lab" x="220" y="159" text-anchor="middle">予約を確認</text>
      <path class="sy-arrow" d="M560 92 H668" />
      <polygon class="sy-tip" points="678,92 668,86 668,98" />
      <text class="sy-lab" x="634" y="83" text-anchor="middle">決済を依頼</text>
      <path class="sy-arrow" d="M560 168 H668" />
      <polygon class="sy-tip" points="678,168 668,162 668,174" />
      <text class="sy-lab" x="634" y="159" text-anchor="middle">通知を依頼</text>
      <path class="sy-arrow" d="M430 204 V242" />
      <polygon class="sy-tip" points="430,194 424,204 436,204" />
      <polygon class="sy-tip" points="430,244 424,234 436,234" />
      <text class="sy-lab" x="446" y="228">予約情報を保存</text>
      <g class="sy-user">
        <rect x="0" y="64" width="170" height="56" rx="10" />
        <text class="sy-name" x="85" y="87" text-anchor="middle">お客さま</text>
        <text class="sy-sub" x="85" y="108" text-anchor="middle">スマートフォン</text>
      </g>
      <g class="sy-user">
        <rect x="0" y="140" width="170" height="56" rx="10" />
        <text class="sy-name" x="85" y="163" text-anchor="middle">店舗スタッフ</text>
        <text class="sy-sub" x="85" y="184" text-anchor="middle">タブレット端末</text>
      </g>
      <g class="sy-ext">
        <rect x="678" y="64" width="170" height="56" rx="10" />
        <text class="sy-name" x="763" y="87" text-anchor="middle">決済サービス</text>
        <text class="sy-sub" x="763" y="108" text-anchor="middle">カードの支払い</text>
      </g>
      <g class="sy-ext">
        <rect x="678" y="140" width="170" height="56" rx="10" />
        <text class="sy-name" x="763" y="163" text-anchor="middle">メール配信</text>
        <text class="sy-sub" x="763" y="184" text-anchor="middle">確認メールの送信</text>
      </g>
      <g class="sy-in">
        <rect x="300" y="44" width="260" height="150" rx="12" />
        <text class="sy-name sy-big" x="430" y="108" text-anchor="middle">予約サーバー</text>
        <text class="sy-sub" x="430" y="138" text-anchor="middle">予約の受付と</text>
        <text class="sy-sub" x="430" y="160" text-anchor="middle">店舗用の管理画面</text>
      </g>
      <g class="sy-in sy-db">
        <path d="M330 266 V310 A100 14 0 0 0 530 310 V266" />
        <ellipse cx="430" cy="266" rx="100" ry="14" />
        <text class="sy-name" x="430" y="304" text-anchor="middle">データベース</text>
      </g>
    </svg>
  </div>
  <p class="note">※ 矢印はデータの向き。外部のサービスは月額の契約で利用する。</p>
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

.sy-diagram { position: relative; flex: 1; margin: 12px 0 8px; min-height: 0; }
.sy-diagram svg { position: absolute; inset: 0; width: 100%; height: 100%; }
/* 図の中の寸法は、viewBox（幅848）の数字そのまま */
.sy-zone { font-size: 16px; font-weight: 800; fill: #8a8f9c; }
.sy-own { fill: #fafafb; stroke: #c3c8d2; stroke-width: 2; stroke-dasharray: 7 6; }
.sy-arrow { fill: none; stroke: #8a8f9c; stroke-width: 2.5; }
.sy-tip { fill: #8a8f9c; }
.sy-lab { font-size: 16px; fill: #5a6070; }
.sy-user rect, .sy-ext rect { fill: #fff; stroke: #8a8f9c; stroke-width: 2; }
.sy-name { font-size: 18px; font-weight: 800; fill: #1f2430; }
.sy-big { font-size: 24px; }
.sy-sub { font-size: 16px; fill: #5a6070; }
.sy-in rect, .sy-in path, .sy-in ellipse { fill: #fff; stroke: #8a8f9c; stroke-width: 2; }
/* 強調する範囲 */
.slide[data-focus="own"] .sy-own { fill: color-mix(in srgb, var(--accent) 7%, #fff); stroke: var(--accent); }
.slide[data-focus="own"] .sy-own-t { fill: var(--accent); }
.slide[data-focus="own"] .sy-in rect,
.slide[data-focus="own"] .sy-in path,
.slide[data-focus="own"] .sy-in ellipse { stroke: var(--accent); stroke-width: 3; }
.slide[data-focus="ext"] .sy-ext rect { fill: color-mix(in srgb, var(--accent) 10%, #fff); stroke: var(--accent); stroke-width: 3; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する範囲',
      value: 'own',
      options: [
        { value: 'own', label: '自社で運営する部分' },
        { value: 'ext', label: '外部のサービス' },
        { value: 'none', label: '強調しない' },
      ],
    },
  ],
  cautions: [
    '技術の名前を並べすぎないようにします。聞き手が経営層なら「予約サーバー」「データベース」のような役割の名前で十分です。製品名やバージョンは、詳細資料に回します。',
    '自社と外部の境界を必ず見せます。どこまでが自社で責任を持ち、どこからが外部に任せているのかは、費用・障害・個人情報の議論で必ず聞かれるところです。見本のように点線の枠で区切ります。',
    '矢印の向きをデータの向きにそろえます。「依頼する側から依頼される側へ」と「データが流れる向き」が混ざると読み違えが起きます。迷うときは、矢印のラベルを「〜を依頼」「〜を保存」のように動詞で書くと誤解が減ります。',
    '箱を8個より多くしないようにします。箱が多くなると、矢印が交差して線の束になります。細かい部品は大きな箱にまとめ、詳細は別のスライドにします。',
  ],
  similar: [
    { slug: 'layer', diff: 'レイヤー構造型は、画面・処理・データなど上下に積み重なる層の関係を見せる型です。システム構成型は、部品どうしのつながりとデータの流れを見せます。' },
    { slug: 'hub-spoke', diff: 'ハブ＆スポーク型は、中心と周りの要素のつながりを放射状に見せる型です。システム構成型は、領域に分けて流れを見せます。' },
    { slug: 'swimlane', diff: 'スイムレーン型は、担当ごとの帯に分けて業務の手順を描く型です。システム構成型は、人の手順ではなくデータの流れを描きます。' },
  ],
  faq: [
    {
      q: 'システム構成図とシステム概要図は何が違いますか？',
      a: 'システム概要図は、経営層向けに部品と流れを大まかに描いたものです。システム構成図は、サーバーやネットワークの機器まで細かく描く場合もあります。スライドでは、役割の名前だけで描く概要図が伝わります。',
    },
    {
      q: 'PowerPointでシステム構成図を作るときのコツはありますか？',
      a: '箱と矢印を細かく動かすので、先に箱を並べて「配置」でそろえ、そのあとに矢印をつなぐことです。矢印はコネクタ（線の端が箱にくっつく線）にしておくと、箱を動かしても線がついてきます。',
    },
    {
      q: 'システム構成図に外部サービスは書くべきですか？',
      a: '書くのがよいです。外部サービスは、費用・障害時の連絡先・個人情報の扱いに関わるので、聞き手が必ず気にする部分です。自社の範囲と区別して描くと、責任の範囲も伝わります。',
    },
  ],
  publishedAt: '2026-10-31',
} satisfies Ugoki;
