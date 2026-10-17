import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'roadmap',
  no: 51,
  category: 'keikaku',
  name: 'ロードマップ型',
  en: 'Roadmap',
  aka: ['ロードマップ', '行程表', '中期計画の図', '年間計画', '計画ロードマップ', 'プロダクトロードマップ'],
  mode: 'static',
  title:
    'ロードマップとは？3か年計画を1枚で見せる作り方【PowerPoint・見本つき】',
  description:
    '年度ごとの大まかな計画をテーマ別の段に並べる「ロードマップ型」のスライドを見本で解説。札の置き方、いまの位置の示し方、PowerPointとGoogleスライドでの作り方、AIにそのまま貼れる指示文とHTMLまでまとめました。',
  oneLine: '年や四半期ごとの大まかな計画を、テーマ別の段で見せる。',
  what: [
    '横に年度、縦にテーマ（業務・システム・体制）を並べ、その交点に「その年度にやること」を角丸の札で置く型です。見本では製造会社の3か年計画を、3つのテーマに分けて描いています。札は1年度だけのものもあれば、2年度にまたがって伸びるものもあります。いちばん下の行には、年度の終わりに達成したい目標を大きな数字で置き、いまがどの年度かは色の付いた縦の帯と「いま」の札で示しています。',
    'ロードマップのよさは、細かい日付ではなく「方向」と「順番」を見せられることです。聞き手は、今年は何をして、来年は何ができるようになり、最後にどうなっているのかを1枚で追えます。決まりごとは、札の中身を「名詞＋やること」の短い言葉にし、1つの段に札を重ねないことです。日付まで詰めたくなったら、ガントチャート型に切り替えます。',
  ],
  when: [
    '中期計画や数か年計画を、経営会議や社内の説明会で共有したいとき',
    '新しい仕組みの導入や商品づくりの方向を、関係部署に示して協力を頼むとき',
    '予算の申請で「いつ何ができるようになるか」をまとめて見せたいとき',
    '取引先や顧客に、今後の提供予定を大まかに知らせるとき',
  ],
  avoid: [
    '作業の担当や日付まで細かく管理したいとき（ガントチャート型にする）',
    '計画が数週間〜数か月で終わるとき（マイルストーン型で節目の日だけ見せる方が伝わる）',
    '出来事の経緯を過去から並べたいとき（タイムライン型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「ロードマップ型（roadmap）」で作ってください。いちばん上に小さく「生産管理システム刷新の3か年ロードマップ」、その下に結論の見出し「3年で、受注から出荷までの入力を1回にする」を置きます。その下に、横が3つの年度（2026年度・2027年度・2028年度）、縦が3つのテーマ（業務・システム・体制）と最下段の「年度末の目標」の表を作り、テーマ同士は細い灰色の横線で区切ってください。各テーマの中身は、業務＝2026年度「受注の電子化（紙の注文書をなくす）」・2027年度「出荷指示の自動化（倉庫へ自動で送る）」・2028年度「全4工場で運用（手順を同じにそろえる）」、システム＝2026〜2027年度にまたがる1枚「新しい生産管理システムの構築（設計 → 開発 → 試験運用）」・2028年度「旧システムの停止（データを引き継ぐ）」、体制＝2026年度「推進チームの発足（各工場から1名）」・2027〜2028年度にまたがる1枚「現場リーダーの研修と定着支援（年2回・対象者は全員が受講）」です。札は角丸の横長で、アクセント色{{accent:t}}の薄い色で塗り、上に題を太字、下に補足を小さく書きます。最下段の「年度末の目標」には小さく「入力ミス（月）」と添え、各年度の下に大きな太字で「20件」「10件」「5件以下」を、アクセント色で置いてください。いまの年度の目印は「{{now:t}}」にしてください（表示するときは、2026年度の列全体を薄いアクセント色の帯にし、年度名の横に「いま」の札を付ける）。文字の大きさは、札の題17pt以上、補足15pt以上、年度名18pt、目標の数字は34pt、見出しは32〜36pt。最下部に「※ 目標は入力ミスの件数（月あたり）。現在は月40件。」と注記を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「挿入」→「表」で4列×5行の表を作り、1列目をテーマ名、2〜4列目を年度、最下段を「年度末の目標」にします。札は表のマスを塗るのではなく、「挿入」→「図形」→「四角形: 角を丸くする」を表の上に重ねて置きます。2年度にまたがる札は、図形を横に引き伸ばして2つの列にかかるようにするだけです。図形は1つ作って「Ctrl+Dで複製」すると大きさがそろいます。「いま」の帯は、2026年度の列の上に薄い色の四角形を置き、「配置」→「最背面へ移動」で札の後ろに回します。',
    'Googleスライドでも同じで、「挿入」→「表」でマス目を作り、「挿入」→「図形」→「図形」から角丸四角形を重ねます。札の位置は、「表示」→「スナップ」→「ガイドにスナップ」をオンにするとマスの線にそろえやすくなります。年度が多い計画（5年以上）や、札が十数枚になる計画は、1枚に詰めずに「全体の流れ」と「今年度の詳細」の2枚に分けると読めます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。札は「何列目から何列ぶん」（grid-column）で置いているので、計画が変わったら数字を書き換えるだけで直せます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-now="{{now}}">
  <p class="kicker">生産管理システム刷新の3か年ロードマップ</p>
  <h1 class="title">3年で、受注から出荷までの入力を1回にする</h1>
  <div class="rm-table">
    <span class="rm-now"></span>
    <span class="rm-corner"></span>
    <span class="rm-year" style="grid-column: 2"><b>2026年度</b><i>いま</i></span>
    <span class="rm-year" style="grid-column: 3"><b>2027年度</b></span>
    <span class="rm-year" style="grid-column: 4"><b>2028年度</b></span>
    <span class="rm-sep" style="grid-row: 2"></span>
    <span class="rm-lane" style="grid-row: 2">業務</span>
    <span class="rm-chip" style="grid-row: 2; grid-column: 2 / span 1"><b>受注の電子化</b><em>紙の注文書をなくす</em></span>
    <span class="rm-chip" style="grid-row: 2; grid-column: 3 / span 1"><b>出荷指示の自動化</b><em>倉庫へ自動で送る</em></span>
    <span class="rm-chip" style="grid-row: 2; grid-column: 4 / span 1"><b>全4工場で運用</b><em>手順を同じにそろえる</em></span>
    <span class="rm-sep" style="grid-row: 3"></span>
    <span class="rm-lane" style="grid-row: 3">システム</span>
    <span class="rm-chip" style="grid-row: 3; grid-column: 2 / span 2"><b>新しい生産管理システムの構築</b><em>設計 → 開発 → 試験運用</em></span>
    <span class="rm-chip" style="grid-row: 3; grid-column: 4 / span 1"><b>旧システムの停止</b><em>データを引き継ぐ</em></span>
    <span class="rm-sep" style="grid-row: 4"></span>
    <span class="rm-lane" style="grid-row: 4">体制</span>
    <span class="rm-chip" style="grid-row: 4; grid-column: 2 / span 1"><b>推進チームの発足</b><em>各工場から1名</em></span>
    <span class="rm-chip" style="grid-row: 4; grid-column: 3 / span 2"><b>現場リーダーの研修と定着支援</b><em>年2回・対象者は全員が受講</em></span>
    <span class="rm-sep" style="grid-row: 5"></span>
    <span class="rm-lane rm-goal-lane" style="grid-row: 5">年度末の目標<small>入力ミス（月）</small></span>
    <span class="rm-goal" style="grid-row: 5; grid-column: 2"><b>20件</b></span>
    <span class="rm-goal" style="grid-row: 5; grid-column: 3"><b>10件</b></span>
    <span class="rm-goal" style="grid-row: 5; grid-column: 4"><b>5件以下</b></span>
  </div>
  <p class="note">※ 目標は入力ミスの件数（月あたり）。現在は月40件。</p>
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

/* 横は3つの年度、縦はテーマ。札は「何列目から何列ぶん」で置く */
.rm-table {
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: 138px repeat(3, minmax(0, 1fr));
  grid-template-rows: 40px repeat(3, 1fr) 80px;
  column-gap: 12px;
  margin: 14px 0 10px;
  min-height: 0;
}
.rm-now { grid-row: 1 / 6; grid-column: 2; border-radius: 10px; background: color-mix(in srgb, var(--accent) 8%, #fff); }
.rm-year { grid-row: 1; align-self: center; display: flex; align-items: center; gap: 8px; padding-left: 12px; font-size: 18px; }
.rm-year i { padding: 1px 10px; border-radius: 999px; background: var(--accent); color: #fff; font-size: 14px; font-style: normal; font-weight: 700; }
.rm-sep { grid-column: 1 / -1; align-self: start; border-top: 1px solid #e3e5ea; }
.rm-lane { grid-column: 1; align-self: center; display: flex; flex-direction: column; font-size: 18px; font-weight: 800; }
.rm-lane small { font-size: 14px; font-weight: 700; color: #8a8f9c; }
.rm-chip {
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 54px;
  padding: 0 14px;
  border: 2px solid color-mix(in srgb, var(--accent) 38%, #fff);
  border-radius: 10px;
  background: color-mix(in srgb, var(--accent) 12%, #fff);
}
.rm-chip b { font-size: 17px; font-weight: 800; line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.rm-chip em { font-size: 15px; font-style: normal; color: #5a6070; line-height: 1.3; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.rm-goal { align-self: center; justify-self: start; padding-left: 12px; }
.rm-goal b { font-size: 34px; font-weight: 800; color: var(--accent); font-variant-numeric: tabular-nums; }
.slide[data-now="hide"] .rm-now,
.slide[data-now="hide"] .rm-year i { display: none; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'now',
      type: 'select',
      label: 'いまの年度の目印',
      value: 'show',
      options: [
        { value: 'show', label: '表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
  ],
  cautions: [
    '札の中身を長い文章にしないようにします。「受注の電子化」のような名詞の短い言葉にし、補足は1行まで。詳しい説明は話すか、別の資料に回します。',
    '年度や四半期の区切りを、計画の途中でそろえ直すと、聞き手が「この札はいつまで？」と迷います。区切りは1種類に決め、札の左右の端を列の線にぴったり合わせます。',
    '色を段ごとに塗り分けないようにします。段ごとに色を変えると、どこが大事なのか分からなくなります。札は同じ1色にして、目標の数字だけを濃く目立たせます。',
    '目標のない計画表になりがちです。やることを並べるだけでなく、最下段に年度ごとの「達成したい状態」を数字で置くと、何のための計画なのかが伝わります。',
  ],
  similar: [
    { slug: 'gantt', diff: 'ガントチャート型は、作業ごとの期間と重なりを日付の精度で見せる型です。ロードマップ型は、年や四半期の単位で方向と順番を見せます。' },
    { slug: 'milestone', diff: 'マイルストーン型は、期間ではなく「節目の日」だけを時間軸に並べる型です。いつまでに何が決まるかを見せたいときに使います。' },
    { slug: 'timeline', diff: 'タイムライン型は、出来事を時間の順に1本の線の上に並べる型です。過去の経緯や沿革を見せるのに向きます。' },
  ],
  faq: [
    {
      q: 'ロードマップとガントチャートは何が違いますか？',
      a: 'ロードマップは年や四半期の単位で「方向と順番」を見せる大まかな計画で、ガントチャートは作業ごとの「いつからいつまで」を日付の精度で見せる工程表です。経営層や顧客にはロードマップ、現場の進行管理にはガントチャートを使い分けます。',
    },
    {
      q: 'PowerPointでロードマップを作るテンプレートはありますか？',
      a: 'PowerPointには専用の部品はありませんが、SmartArt（図表を組み立てる機能）の「基本プロセス」などを使うか、表と角丸四角形を重ねて作れます。見た目をそろえやすいのは、表の上に図形を重ねるやり方です。',
    },
    {
      q: 'ロードマップは何年先まで書くのがよいですか？',
      a: '3年ほどが一般的です。先に行くほど不確かになるので、1年目は具体的に、2年目以降は方向だけを書き、毎年見直す前提にすると、計画が外れても説明しやすくなります。',
    },
  ],
  publishedAt: '2026-10-17',
} satisfies Ugoki;
