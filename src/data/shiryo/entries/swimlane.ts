import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'swimlane',
  no: 55,
  category: 'keikaku',
  name: 'スイムレーン型',
  en: 'Swimlane diagram',
  aka: ['スイムレーン', 'スイムレーン図', '業務フロー図', '担当別フロー', 'クロスファンクショナルフロー図', '部門横断フロー'],
  mode: 'static',
  title:
    'スイムレーン図とは？担当ごとに分けた業務フローの作り方【見本つき】',
  description:
    '担当ごとの帯に分けて業務の流れを描く「スイムレーン型」のスライドを見本で解説。帯の分け方、矢印のつなぎ方、強調のしかた、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '担当ごとの帯に分け、業務の流れを矢印でつなぐ。',
  what: [
    'スライドを「担当」ごとの横長の帯（レーン）に分け、その帯の中に手順の箱を置いて、矢印でつなぐ型です。プールのコースのように担当が並ぶので、スイムレーン（泳ぐ道）と呼びます。見本では経費精算の5つの手順を、申請者・上長・経理部の3つの帯に置き、左から右へ時間が進むように並べています。帯をまたぐ矢印が「誰から誰へ渡るか」を示し、経理部の帯だけを色で強調して、経理部が2つの手順を受け持つことを見せています。',
    'スイムレーン型のよさは、「誰が何をするか」と「どこで人から人へ渡るか」を同時に見せられることです。ふつうのフロー図では、担当が変わる場所が見えません。決まりごとは、帯は3〜5つまで、手順は左から右に並べること、矢印は直角で曲げて交差を減らすことです。',
  ],
  when: [
    '部署をまたぐ業務（経費精算・購買・問い合わせ対応など）の流れを整理して共有するとき',
    '業務改善の相談で、「どこで待ちが生まれているか」を担当の受け渡しとして見せるとき',
    '新しい担当者に、業務の全体像と自分の役割の位置を説明するとき',
    'システム導入の前に、現状の手順を関係者でそろえて確認するとき',
  ],
  avoid: [
    '担当が1人か1部署だけのとき（フロー型にする）',
    '手順が15個を超えるとき（大きな流れのスライドと、詳細のスライドに分ける）',
    '誰が何の責任をもつかだけを見せたいとき（RACI責任分担型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「スイムレーン型（swimlane diagram）」で作ってください。いちばん上に小さく「経費精算の業務フロー」、その下に結論の見出し「経費精算は5手順。経理部が2手順を受け持つ」を置きます。その下に、横長の帯を上から「申請者」「上長」「経理部」の順に3つ重ねて置き、各帯の左端には灰色の名前の欄（太字18pt）を付けます。帯の中に、白い角丸の箱（文字は16pt以上の太字・2行）を左から右へ5つ置いてください。箱は、1つ目＝申請者の帯「経費を申請する」、2つ目＝上長の帯「内容を承認する」、3つ目＝経理部の帯「領収書と金額を確認」、4つ目＝経理部の帯「振込データを作成する」、5つ目＝申請者の帯「入金を確認する」です。箱は左上の角に番号（1〜5）を白文字で入れた黒い小さな丸を付けます（手順の番号は「{{num:t}}」にしてください）。箱どうしは灰色の矢印で、直角に曲げてつなぎます（帯が同じなら横まっすぐ、帯が変わるときは前の箱の右から横に出て、次の箱の真上か真下へ下りる）。強調は「{{focus:t}}」にしてください（経理部の帯を強調するときは、帯の枠と名前の欄をアクセント色{{accent:t}}にし、経理部の2つの箱をアクセント色で塗って白文字にする）。色はアクセント色の1色と灰色だけ。見出しは32〜36pt。最下部に「※ 申請から入金までの目安は5営業日。矢印は作業の流れ。」と注記を入れてください。手順は私が書いたものだけを使い、新しい手順や数字を足さないでください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「図形」→「四角形」で横長の長方形を3つ重ねて帯にし、左端に名前を書く小さな長方形を置きます。手順の箱は「四角形: 角を丸くする」を1つ作って複製し、帯の中央に置きます。矢印は「挿入」→「図形」の「線」の中にある、直角に曲がる矢印（カギ線の矢印）を使うと、箱の端にくっついて、箱を動かしても線がついてきます。帯が多いと図が崩れやすいので、先に帯と名前を作り、「配置」で幅と位置をそろえてから箱を置きます。',
    'Googleスライドでも「挿入」→「図形」→「図形」で長方形と角丸四角形を作り、「挿入」→「線」→「カギ線コネクタ」で箱どうしをつなぎます。コネクタは箱の端に吸い付くので、後から箱を動かしても形が保たれます。帯の中に箱が入りきらないときは、箱の文字を2行にして幅を詰めます。専用の描画ソフト（Visioやdraw.ioなど）があるなら、そこで作って画像として貼る方が、帯が増える図では楽です。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。図は1つのSVG（図形を描く仕組み）の中に、帯・箱・矢印を座標で置いているので、手順を足すときは箱と矢印の座標を書き足します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}" data-num="{{num}}">
  <p class="kicker">経費精算の業務フロー</p>
  <h1 class="title">経費精算は5手順。経理部が2手順を受け持つ</h1>
  <div class="sl-diagram">
    <svg viewBox="0 0 848 340" role="img" aria-label="経費精算の業務フロー（申請者・上長・経理部の3つの帯と5つの手順）">
      <g class="sl-lane sl-lane-0">
        <rect class="sl-band" x="0" y="0" width="848" height="110" rx="8" />
        <rect class="sl-tag" x="0" y="0" width="88" height="110" rx="8" />
        <text class="sl-lane-name" x="44" y="61" text-anchor="middle">申請者</text>
      </g>
      <g class="sl-lane sl-lane-1">
        <rect class="sl-band" x="0" y="113" width="848" height="110" rx="8" />
        <rect class="sl-tag" x="0" y="113" width="88" height="110" rx="8" />
        <text class="sl-lane-name" x="44" y="174" text-anchor="middle">上長</text>
      </g>
      <g class="sl-lane sl-lane-2">
        <rect class="sl-band" x="0" y="226" width="848" height="110" rx="8" />
        <rect class="sl-tag" x="0" y="226" width="88" height="110" rx="8" />
        <text class="sl-lane-name" x="44" y="287" text-anchor="middle">経理部</text>
      </g>
      <path class="sl-arrow" d="M232.8 55 H324.4 V128" />
      <polygon class="sl-tip" points="324.4,138 318.4,128 330.4,128" />
      <path class="sl-arrow" d="M382.4 168 H474 V241" />
      <polygon class="sl-tip" points="474,251 468,241 480,241" />
      <path class="sl-arrow" d="M532 281 H555.6" />
      <polygon class="sl-tip" points="565.6,281 555.6,275 555.6,287" />
      <path class="sl-arrow" d="M681.6 281 H773.2 V95" />
      <polygon class="sl-tip" points="773.2,85 767.2,95 779.2,95" />
      <g class="sl-step sl-step-0">
        <rect class="sl-box" x="116.80000000000001" y="25" width="116" height="60" rx="10" />
        <text class="sl-text" x="174.8" y="52" text-anchor="middle">経費を</text>
        <text class="sl-text" x="174.8" y="73" text-anchor="middle">申請する</text>
        <g class="sl-num"><circle cx="116.80000000000001" cy="25" r="12" /><text x="116.80000000000001" y="30" text-anchor="middle">1</text></g>
      </g>
      <g class="sl-step sl-step-1">
        <rect class="sl-box" x="266.4" y="138" width="116" height="60" rx="10" />
        <text class="sl-text" x="324.4" y="165" text-anchor="middle">内容を</text>
        <text class="sl-text" x="324.4" y="186" text-anchor="middle">承認する</text>
        <g class="sl-num"><circle cx="266.4" cy="138" r="12" /><text x="266.4" y="143" text-anchor="middle">2</text></g>
      </g>
      <g class="sl-step sl-step-2">
        <rect class="sl-box" x="416" y="251" width="116" height="60" rx="10" />
        <text class="sl-text" x="474" y="278" text-anchor="middle">領収書と</text>
        <text class="sl-text" x="474" y="299" text-anchor="middle">金額を確認</text>
        <g class="sl-num"><circle cx="416" cy="251" r="12" /><text x="416" y="256" text-anchor="middle">3</text></g>
      </g>
      <g class="sl-step sl-step-2">
        <rect class="sl-box" x="565.6" y="251" width="116" height="60" rx="10" />
        <text class="sl-text" x="623.6" y="278" text-anchor="middle">振込データを</text>
        <text class="sl-text" x="623.6" y="299" text-anchor="middle">作成する</text>
        <g class="sl-num"><circle cx="565.6" cy="251" r="12" /><text x="565.6" y="256" text-anchor="middle">4</text></g>
      </g>
      <g class="sl-step sl-step-0">
        <rect class="sl-box" x="715.2" y="25" width="116" height="60" rx="10" />
        <text class="sl-text" x="773.2" y="52" text-anchor="middle">入金を</text>
        <text class="sl-text" x="773.2" y="73" text-anchor="middle">確認する</text>
        <g class="sl-num"><circle cx="715.2" cy="25" r="12" /><text x="715.2" y="30" text-anchor="middle">5</text></g>
      </g>
    </svg>
  </div>
  <p class="note">※ 申請から入金までの目安は5営業日。矢印は作業の流れ。</p>
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

.sl-diagram { position: relative; flex: 1; margin: 14px 0 8px; min-height: 0; }
.sl-diagram svg { position: absolute; inset: 0; width: 100%; height: 100%; }
/* 図の中の寸法は、viewBox（幅848）の数字そのまま */
.sl-band { fill: #fff; stroke: #e3e5ea; stroke-width: 2; }
.sl-tag { fill: #f3f4f7; }
.sl-lane-name { font-size: 18px; font-weight: 800; fill: #1f2430; }
.sl-arrow { fill: none; stroke: #8a8f9c; stroke-width: 2.5; }
.sl-tip { fill: #8a8f9c; }
.sl-box { fill: #fff; stroke: #8a8f9c; stroke-width: 2; }
.sl-text { font-size: 16px; font-weight: 700; fill: #1f2430; }
.sl-num circle { fill: #1f2430; }
.sl-num text { font-size: 14px; font-weight: 800; fill: #fff; }
.slide[data-num="hide"] .sl-num { display: none; }
/* 強調する帯（data-focus="keiri"） */
.slide[data-focus="keiri"] .sl-lane-2 .sl-band { fill: color-mix(in srgb, var(--accent) 7%, #fff); stroke: var(--accent); }
.slide[data-focus="keiri"] .sl-lane-2 .sl-tag { fill: var(--accent); }
.slide[data-focus="keiri"] .sl-lane-2 .sl-lane-name { fill: #fff; }
.slide[data-focus="keiri"] .sl-step-2 .sl-box { fill: var(--accent); stroke: var(--accent); }
.slide[data-focus="keiri"] .sl-step-2 .sl-text { fill: #fff; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '強調する帯',
      value: 'keiri',
      options: [
        { value: 'keiri', label: '経理部の帯を強調' },
        { value: 'none', label: '強調しない' },
      ],
    },
    {
      key: 'num',
      type: 'select',
      label: '手順の番号',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '帯の順番に意味を持たせます。依頼する人を上、受ける人を下にするなど、流れの向きに合わせて並べると、矢印が上から下へ素直に流れます。矢印が帯を行ったり来たりすると、読み解くのに時間がかかります。',
    '矢印を交差させないようにします。どうしても交差するときは、帯の並びを入れ替えます。交差が3か所以上あるなら、図が複雑すぎるサインなので、スライドを分けます。',
    '箱の中に長い文章を書かないようにします。「領収書と金額を確認」のように「何を・どうする」を10文字前後で書き、判断基準や例外は注記か別資料に回します。',
    '例外の処理（差し戻しや否決）まで全部描くと、メインの流れが見えなくなります。スライドには正常に進む1本の流れだけを描き、例外は別のスライドか、注記で「不備のときは申請者に戻す」と一言添えます。',
  ],
  similar: [
    { slug: 'flow', diff: 'フロー型は、手順を矢印でつなぐ型です。担当の区別はなく、1人または1部署で完結する流れに向きます。' },
    { slug: 'raci', diff: 'RACI責任分担型は、作業ごとに誰が実行・承認・相談・報告かを表にする型です。流れの順番ではなく、役割の種類を整理します。' },
    { slug: 'service-blueprint', diff: 'サービスブループリント型は、お客さまの行動と裏側の業務を上下に対応させる型です。スイムレーン型は社内の担当どうしの受け渡しを見せます。' },
  ],
  faq: [
    {
      q: 'スイムレーン図とフローチャートは何が違いますか？',
      a: 'フローチャートは手順を矢印でつなぐ図で、スイムレーン図はそれに「担当ごとの帯」を加えたものです。誰が何をするかと、人から人へ渡る場所が見えるので、複数の部署が関わる業務に向きます。',
    },
    {
      q: 'PowerPointにスイムレーン図のテンプレートはありますか？',
      a: 'PowerPointの標準には専用のテンプレートはありませんが、「挿入」→「図形」の長方形・角丸四角形と、直角に曲がる矢印の線で作れます。Microsoft Visioや、無料のdraw.ioなどの図を描くソフトには、スイムレーンの部品が用意されています。',
    },
    {
      q: 'スイムレーンの帯は何個まで作れますか？',
      a: 'スライド1枚なら3〜5帯が読める限度です。6帯以上になるときは、関わる部署をまとめて帯を減らすか、前半と後半の2枚に分けます。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
