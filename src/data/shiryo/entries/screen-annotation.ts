import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'screen-annotation',
  no: 82,
  category: 'teian',
  name: 'スクリーン注釈型',
  en: 'Annotated screenshot',
  aka: ['画面注釈', '画面の説明', 'スクリーンショットの注釈', '吹き出し付き画面', '画面解説'],
  mode: 'static',
  title: 'スクリーン注釈とは？画面の写しに番号と説明を書き込むスライドの作り方【PowerPoint・Googleスライド】',
  description:
    'アプリやWebサイトの画面の写しに番号をふり、右に番号ごとの説明を並べるスクリーン注釈型のスライドを見本で解説。番号の置き方、PowerPoint・Googleスライドでの作り方、AIへの指示文、HTMLまでまとめました。',
  oneLine: '画面の写しに番号を置き、番号ごとに見るところを説明する。',
  what: [
    '左に画面の写し（スクリーンショット）、右に説明の一覧を置き、画面の上の番号と説明の番号を結んで読ませる型です。見本では、家計簿アプリのホーム画面に1〜4の番号をふり、「今月使えるお金」「予算の使い具合」「使った項目の内訳」「支出の入力」の4つを説明しています。画面の中の絵は図形で描いたもので、実在するアプリではありません。',
    '画面の写しだけを貼ると、聞き手はどこを見ればよいか分からず、目があちこちに泳ぎます。番号をふって「見る順番」を決めてあげると、説明を聞きながら画面を追えます。決まりごとは、番号を画面の見る順（左上から右下）につけること、注釈を3〜5つに絞ること、番号の色と大きさをそろえることです。',
  ],
  when: [
    '新しいアプリやWebサービスの画面を、関係者に説明するとき',
    '操作マニュアルや社内の研修で、画面のどこに何があるかを教えるとき',
    '画面のデザイン案を見せて、どこを変えたか、どこが新しいかを示すとき',
    'お客さま向けの提案書で、導入後に見える画面の特長を紹介するとき',
  ],
  avoid: [
    '操作の順番そのものを教えたいとき（番号つきの文章が主役なので、操作手順型にする）',
    '注釈が7つ以上になり、画面が番号だらけになるとき（画面を2枚に分けるか、重要な4〜5つに絞る）',
    '画面が主役ではなく、複数の画面を並べて雰囲気を見せたいとき（画像ギャラリー型にする）',
  ],
  prompt:
    '16:9のスライドを1枚、「スクリーン注釈型（annotated screenshot）」で作ってください。いちばん上に小さく「家計簿アプリ「家計ノート」のホーム画面」、その下に結論の見出し「開いてすぐ、今月あといくら使えるかが分かる」を1行で置きます。左側に画面の写しの絵（ウィンドウ風の枠）、右側に説明の一覧を置いてください。画面の絵の中身は、上に「10月」と、右上に角丸の塗りつぶしの小さなボタン「＋ 支出を入力」。その下を2列に分け、左列の上は「今月使えるお金 48,200円」（数字を大きく）、左列の下は「予算 150,000円」と横の棒グラフ（68%を塗り）と「68%使用」、右列は「使った項目」として、趣味・娯楽41,000円、食費38,400円、日用品12,600円、交通費9,800円を金額の大きい順に並べ、それぞれ小さな棒を添えます。画面の上に、見る順番に番号の丸（アクセント色{{accent:t}}・白い数字・白い縁取り）を置きます。1＝今月使えるお金の枠の左上、2＝予算の枠の左上、3＝使った項目の枠の左上、4＝ボタンの左上。丸の大きさは{{badge:t}}ptです。右の一覧は、同じ番号の丸と、太字の見出し（18pt以上）、灰色の説明（15pt以上）を4行並べます。1＝今月使えるお金：予算から使った分を引いた残り。いちばん上に大きく出す。2＝予算の使い具合：棒の長さで、予算の68%を使ったと分かる。3＝使った項目の内訳：金額の大きい順。趣味・娯楽が最大だと分かる。4＝支出の入力：どの画面でも右上から、すぐ入力できる。目立たせる番号は「{{focus:t}}」にしてください（番号を選ぶと、その番号の説明に薄い背景を敷き、ほかの説明を薄くして、画面のほかの丸を灰色にする）。最下部に「※ 金額は2026年10月の例（予算150,000円−使った101,800円＝残り48,200円）。」と注記（12pt以上）を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、画面の写しは「挿入」→「画像」で入れるか、Windowsなら「Windowsキー＋Shift＋S」、Macなら「Shift＋Command＋4」で撮ったものを貼り付けます。番号は「挿入」→「図形」→「楕円」で小さな丸を描き、塗りつぶしをアクセント色、枠線を白にして、中に数字を入れます。1つ作ったらコピーして番号を書き換えると、大きさがそろいます。右の説明は、番号の丸と文章を1つのテキストボックスにまとめるより、丸は丸、文章は文章で別に置き、「図形の書式」→「配置」で左揃えにするほうが崩れません。',
    'Googleスライドでも「挿入」→「画像」で画面の写しを入れ、「挿入」→「図形」→「図形」から丸を作って番号を重ねます。丸を選んで矢印キーを押すと少しずつ動かせるので、画面の部品の角にぴったり合わせられます。画面の写しの中の個人情報（名前・メールアドレス・金額など）は、公開前に「図形」の四角で隠すか、架空のデータに入れ替えておきます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。画面の絵は、実際のスクリーンショットの画像（img）に差し替えても使えます。差し替えるときは、番号の丸の位置（top・left）だけ、画像に合わせて書き換えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-focus="{{focus}}">
  <p class="kicker">家計簿アプリ「家計ノート」のホーム画面</p>
  <h1 class="title">開いてすぐ、今月あといくら使えるかが分かる</h1>

  <div class="main">
    <!-- 左: 画面の絵（スクリーンショットの画像に差し替えてもよい） -->
    <div class="screen">
      <div class="bar"><i></i><i></i><i></i><span>家計ノート</span></div>
      <div class="body">
        <div class="head">
          <span class="month">10月</span>
          <span class="add t"><span>＋ 支出を入力</span><b class="badge" data-n="4">4</b></span>
        </div>
        <div class="cols">
          <div class="left">
            <div class="card t">
              <span class="lb">今月使えるお金</span>
              <span class="big">48,200<small>円</small></span>
              <b class="badge" data-n="1">1</b>
            </div>
            <div class="card t">
              <span class="lb">予算 150,000円</span>
              <span class="track"><i style="width: 68%"></i></span>
              <span class="pct">68%使用</span>
              <b class="badge" data-n="2">2</b>
            </div>
          </div>
          <div class="card cat t">
            <span class="lb">使った項目</span>
            <span class="r"><span class="k">趣味・娯楽</span><span class="v">41,000円</span><span class="mini"><i style="width: 100%"></i></span></span>
            <span class="r"><span class="k">食費</span><span class="v">38,400円</span><span class="mini"><i style="width: 94%"></i></span></span>
            <span class="r"><span class="k">日用品</span><span class="v">12,600円</span><span class="mini"><i style="width: 31%"></i></span></span>
            <span class="r"><span class="k">交通費</span><span class="v">9,800円</span><span class="mini"><i style="width: 24%"></i></span></span>
            <b class="badge" data-n="3">3</b>
          </div>
        </div>
      </div>
    </div>

    <!-- 右: 番号ごとの説明 -->
    <div class="list">
      <div class="item" data-n="1"><b class="num">1</b><span class="txt"><span class="nh">今月使えるお金</span><span class="nd">予算から使った分を引いた残り。いちばん上に大きく出す。</span></span></div>
      <div class="item" data-n="2"><b class="num">2</b><span class="txt"><span class="nh">予算の使い具合</span><span class="nd">棒の長さで、予算の68%を使ったと分かる。</span></span></div>
      <div class="item" data-n="3"><b class="num">3</b><span class="txt"><span class="nh">使った項目の内訳</span><span class="nd">金額の大きい順。趣味・娯楽が最大だと分かる。</span></span></div>
      <div class="item" data-n="4"><b class="num">4</b><span class="txt"><span class="nh">支出の入力</span><span class="nd">どの画面でも右上から、すぐ入力できる。</span></span></div>
    </div>
  </div>

  <p class="note">※ 金額は2026年10月の例（予算150,000円−使った101,800円＝残り48,200円）。</p>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  --badge: {{badge}}px; /* 番号の丸の大きさ */
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

.main { flex: 1; display: grid; grid-template-columns: 500px 1fr; gap: 28px; margin: 18px 0 10px; }

/* 画面の絵 */
.screen { align-self: start; border: 2px solid #c3c8d2; border-radius: 10px; background: #f3f4f7; overflow: hidden; }
.bar { display: flex; align-items: center; gap: 6px; height: 28px; padding: 0 12px; background: #fff; border-bottom: 1px solid #e3e5ea; }
.bar i { width: 9px; height: 9px; border-radius: 50%; background: #c3c8d2; }
.bar span { margin-left: 8px; font-size: 13px; font-weight: 800; color: #5a6070; }
.body { display: flex; flex-direction: column; gap: 10px; padding: 14px 16px 16px; }
.head { display: flex; align-items: center; justify-content: space-between; }
.month { font-size: 20px; font-weight: 800; }
.add { padding: 5px 14px; border-radius: 999px; background: var(--accent); color: #fff; font-size: 14px; font-weight: 800; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.left { display: grid; gap: 12px; }
.card { display: flex; flex-direction: column; gap: 4px; padding: 12px 14px; border-radius: 8px; background: #fff; box-shadow: 0 0 0 1px #e3e5ea; }
.lb { font-size: 13px; font-weight: 700; color: #5a6070; }
.big { font-size: 38px; font-weight: 800; line-height: 1.15; }
.big small { margin-left: 2px; font-size: 18px; color: #5a6070; }
.track { display: block; height: 12px; margin-top: 4px; border-radius: 6px; background: #e3e5ea; overflow: hidden; }
.track i { display: block; height: 100%; background: #5a6070; }
.pct { font-size: 14px; font-weight: 800; }
.cat { gap: 7px; }
.r { display: grid; grid-template-columns: 1fr auto; row-gap: 3px; align-items: baseline; }
.k, .v { font-size: 13px; font-weight: 700; }
.mini { grid-column: 1 / -1; display: block; height: 5px; border-radius: 3px; background: #e3e5ea; overflow: hidden; }
.mini i { display: block; height: 100%; background: #c3c8d2; }

/* 画面の上の番号の丸 */
.t { position: relative; }
.badge {
  position: absolute;
  top: calc(var(--badge) * -0.45);
  left: calc(var(--badge) * -0.45);
  display: grid;
  place-items: center;
  width: var(--badge);
  height: var(--badge);
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  font-size: calc(var(--badge) * 0.58);
  font-weight: 800;
  line-height: 1;
  box-shadow: 0 0 0 2.5px #fff;
}

/* 右の説明の一覧 */
.list { display: grid; grid-template-rows: repeat(4, 1fr); gap: 8px; }
.item { display: flex; align-items: flex-start; gap: 12px; padding: 8px 12px; border-radius: 10px; }
.num { flex: none; display: grid; place-items: center; width: var(--badge); height: var(--badge); border-radius: 50%; background: var(--accent); color: #fff; font-size: calc(var(--badge) * 0.58); font-weight: 800; line-height: 1; }
.txt { display: grid; gap: 2px; }
.nh { font-size: 18px; font-weight: 800; }
.nd { font-size: 15px; color: #5a6070; line-height: 1.45; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }

/* 目立たせる番号（data-focus="1"〜"4"）。2番を例に。ほかの番号も同じ形で足す */
.slide[data-focus="2"] .item:not([data-n="2"]) { opacity: 0.4; }
.slide[data-focus="2"] .item[data-n="2"] { background: color-mix(in srgb, var(--accent) 9%, #fff); }
.slide[data-focus="2"] .badge:not([data-n="2"]) { background: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'focus',
      type: 'select',
      label: '目立たせる番号',
      value: 'none',
      options: [
        { value: 'none', label: '全部同じ強さ' },
        { value: '1', label: '1番を目立たせる' },
        { value: '2', label: '2番を目立たせる' },
        { value: '3', label: '3番を目立たせる' },
        { value: '4', label: '4番を目立たせる' },
      ],
    },
    { key: 'badge', label: '番号の丸の大きさ（pt）', min: 20, max: 36, step: 4, value: 28, unit: '' },
  ],
  cautions: [
    '番号は、画面を見る順（左上から右下、または聞き手に追ってほしい順）につけます。順番がばらばらだと、目が画面の上を行ったり来たりして、説明が頭に入りません。',
    '番号の丸を、画面の大事な部分に重ねないこと。丸で数字や文字を隠してしまうと、見せたい所が見えなくなります。部品の角やすき間に置きます。',
    '注釈は3〜5つに絞ります。画面の細かい機能を全部説明しようとすると、番号だらけで画面が見えません。今日の話で見てほしい所だけに番号をふり、残りは操作マニュアルなど別の資料に回します。',
    '画面の写しに、本物の名前・メールアドレス・金額・顧客の情報が写り込んでいないか確かめます。社外の人に見せる資料では、架空のデータに入れ替えるか、塗りつぶして隠します。',
  ],
  similar: [
    { slug: 'image-left', diff: '左図右文型は、左に図や写真、右に説明の文章を置く型です。スクリーン注釈型は、画面の上に番号を置き、画面の部品と説明を1対1で結びつけます。' },
    { slug: 'steps', diff: '操作手順型は、操作の順番を番号つきの手順で示す型です。スクリーン注釈型は、1枚の画面のどこに何があるかを示します。' },
    { slug: 'gallery', diff: '画像ギャラリー型は、複数の画面や写真をそろえて並べる型です。スクリーン注釈型は、1枚の画面を詳しく読み解きます。' },
  ],
  faq: [
    {
      q: '画面の写し（スクリーンショット）に番号を入れるには？',
      a: 'PowerPointやGoogleスライドに画面の写しを貼り付け、その上に「挿入」→「図形」から丸を描いて、中に数字を入れます。丸の色と大きさは全部同じにそろえます。1つ作ってコピーし、数字だけ書き換えるのが早くて崩れません。',
    },
    {
      q: '注釈は何個まで入れてよいですか？',
      a: '3〜5個が目安です。6個を超えると、画面と説明を行き来する聞き手の目が疲れます。伝えたいことが多いときは、画面の一部を拡大したスライドを増やして、1枚あたりの注釈を減らします。',
    },
    {
      q: '画面の写しは実際のアプリのものを使ってよいですか？',
      a: '自社のアプリなら使えますが、他社のサービスの画面は、利用規約や著作権で載せられない場合があります。社外向けの資料では、公開されている画面の使い方を確かめるか、この見本のように図形で描いた画面を使います。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
