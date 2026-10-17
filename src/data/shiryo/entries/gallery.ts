import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'gallery',
  no: 81,
  category: 'teian',
  name: '画像ギャラリー型',
  en: 'Image gallery',
  aka: ['写真一覧', '画像の並べ方', '商品ラインナップ', '写真レイアウト', 'サムネイル一覧'],
  mode: 'static',
  title: '画像ギャラリー型とは？写真や画像をきれいにそろえて並べるスライドの作り方【PowerPoint・Googleスライド】',
  description:
    '複数の写真や画面を同じ大きさでそろえて並べる画像ギャラリー型のスライドを見本で解説。余白と大きさのそろえ方、名前や値段の添え方、PowerPointとGoogleスライドの作り方、AIへの指示文、HTMLまでまとめました。',
  oneLine: '写真や画面を同じ大きさでそろえ、名前を添えて並べる。',
  what: [
    '同じ大きさの画像を3列×2段に並べ、画像の下に名前と値段を1行で添える型です。見本では、うつわ工房の秋の新作6点を紹介しています。どの画像も同じ縦横比・同じ背景色・同じ余白でそろえ、値段だけをアクセント色にして、見る人が「どれがいくらか」をすぐ拾えるようにしています。',
    'ギャラリー型の仕上がりを決めるのは、画像の中身よりも「そろっているか」です。大きさ・間隔・名前の位置が1つずつずれると、それだけで素人っぽく見えます。決まりごとは、画像の縦横比を全部同じにすること、間隔を全部同じにすること、名前の文字の大きさと位置をそろえることです。',
  ],
  when: [
    '商品のラインナップや新商品を、一覧で見てもらうとき',
    '導入事例や施工例、イベントの様子など、複数の写真をまとめて見せたいとき',
    'アプリやWebサイトの画面を、いくつか並べて紹介するとき',
    '会社案内で、社員の顔写真や拠点の写真を一覧にするとき',
  ],
  avoid: [
    '1枚の写真を大きく見せて雰囲気を伝えたいとき（全面写真＋帯型にする）',
    '画面のどこを見てほしいかを説明したいとき（スクリーン注釈型にする）',
    '画像が10枚を超え、1枚あたりが小さくて何が写っているか分からないとき（主要な6枚に絞るか、数枚ずつ複数のスライドに分ける）',
  ],
  prompt:
    '16:9のスライドを1枚、「画像ギャラリー型（image gallery）」で作ってください。いちばん上に小さく「うつわ工房「ことのは窯」2026年秋の新作」、その下に結論の見出し「秋の新作は、毎日使いたいうつわ6点」を1行で置きます。その下に、同じ大きさの画像を3列×2段で6枚並べてください。画像はすべて同じ縦横比（横長・約2:1）、角を少し丸くし、淡い灰色の同じ背景で、中央に1点ずつうつわを置いたシンプルなイラストにします。画像の間隔は{{gap:t}}ptです。各画像の下に、左に名前、右に値段を1行で置いてください。名前は17pt以上・太字、値段は17pt以上・太字・アクセント色{{accent:t}}です。6点は、マグカップ2,800円、豆皿（2枚組）1,100円、飯碗1,800円、一輪挿し3,600円、急須5,200円、角皿2,400円。名前と値段は「{{caption:t}}」にしてください（表示しない場合は絵だけを大きく並べる）。色は、アクセント色の1色と灰色だけにします。最下部に「※ 価格は税込。手づくりのため、色や形が少しずつ異なります。」と注記（12pt以上）を入れてください。数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、まず「挿入」→「図形」→「四角形: 角を丸くする」で、画像を入れる枠を1つ作ります。枠を選んで「図形の書式」→「図形の塗りつぶし」→「図」を選ぶと、画像が枠の形に収まります。枠をコピーして6つ並べたら、全部を選んで「図形の書式」→「配置」→「左右に整列」「上下に整列」を押すと、間隔がそろいます。枠の大きさを揃えたあとで画像を入れると、縦横比のずれも防げます。名前と値段は、枠の下にテキストボックスを置き、名前は左揃え、値段は右揃えにします。',
    'Googleスライドでも、「挿入」→「図形」→「図形」で角丸四角形を6つ置き、「配置」メニューで等間隔にそろえます。画像は「挿入」→「画像」で入れ、画像を選んで「画像を切り抜く」の横の矢印から図形を選ぶと、同じ角丸の形に切り抜けます。画像の縦横比がまちまちなときは、枠の大きさに合わせて切り抜いてからそろえてください。商品が多くて数字や名前を頻繁に直すなら、スプレッドシートに一覧表を作っておくと便利です。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。画像の場所は灰色の仮の箱（pic）にしてあるので、ここを画像（img）に差し替えてください。img を使うときは、縦横比を保ったまま枠いっぱいに収まるよう、object-fit: cover を付けます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-caption="{{caption}}">
  <p class="kicker">うつわ工房「ことのは窯」2026年秋の新作</p>
  <h1 class="title">秋の新作は、毎日使いたいうつわ6点</h1>

  <div class="grid">
    <!-- 絵に差し替える: <img src="mug.jpg" alt="マグカップ"> -->
    <div class="tile"><div class="pic"></div><div class="cap"><span class="name">マグカップ</span><span class="price">2,800円</span></div></div>
    <div class="tile"><div class="pic"></div><div class="cap"><span class="name">豆皿（2枚組）</span><span class="price">1,100円</span></div></div>
    <div class="tile"><div class="pic"></div><div class="cap"><span class="name">飯碗</span><span class="price">1,800円</span></div></div>
    <div class="tile"><div class="pic"></div><div class="cap"><span class="name">一輪挿し</span><span class="price">3,600円</span></div></div>
    <div class="tile"><div class="pic"></div><div class="cap"><span class="name">急須</span><span class="price">5,200円</span></div></div>
    <div class="tile"><div class="pic"></div><div class="cap"><span class="name">角皿</span><span class="price">2,400円</span></div></div>
  </div>

  <p class="note">※ 価格は税込。手づくりのため、色や形が少しずつ異なります。</p>
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

.grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: {{gap}}px;
  margin: 18px 0 10px;
  min-height: 0;
}
.tile { display: flex; flex-direction: column; gap: 6px; min-height: 0; }
/* 画像の場所（仮）。img に差し替えるときは width: 100%; height: 100%; object-fit: cover; を付ける */
.pic { flex: 1; min-height: 0; border-radius: 10px; background: #f3f4f7; }
.cap { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.name { font-size: 17px; font-weight: 700; }
.price { font-size: 17px; font-weight: 800; color: var(--accent); white-space: nowrap; }
.slide[data-caption="hide"] .cap { display: none; }
.note { margin: 0; font-size: 13px; color: #8a8f9c; }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'caption',
      type: 'select',
      label: '名前と値段',
      value: 'show',
      options: [
        { value: 'show', label: '画像の下に表示する' },
        { value: 'hide', label: '表示しない' },
      ],
    },
    { key: 'gap', label: 'タイルの間隔（pt）', min: 8, max: 32, step: 8, value: 16, unit: '' },
  ],
  cautions: [
    '画像の縦横比を全部同じにそろえます。縦長・横長・正方形が混ざったまま並べると、ガタガタになります。枠の大きさを先に決め、画像のほうを枠の形に切り抜く（トリミングする）のが確実です。',
    '背景や明るさをそろえます。1枚だけ暗い写真、1枚だけ背景が白い写真が混ざると、そこだけ目立ってしまいます。同じ場所・同じ光で撮り直すか、背景をそろえる加工をします。',
    '枚数は6枚前後に絞ります。9枚、12枚と並べると1枚が小さくなり、何が写っているか分かりません。全部を見せたいときは、ギャラリーのスライドを複数に分けるか、代表の6枚だけ載せて残りは別の資料にします。',
    '写真を使うときは、使ってよい写真かを確かめます。人の顔が写っているものは本人の許可、ネットで見つけた写真は著作権や利用条件の確認が必要です。社外に出す資料では特に注意してください。',
  ],
  similar: [
    { slug: 'full-photo', diff: '全面写真＋帯型は、1枚の写真を画面いっぱいに敷いて雰囲気を伝える型です。画像ギャラリー型は、同じ大きさの複数枚を比べやすく並べます。' },
    { slug: 'screen-annotation', diff: 'スクリーン注釈型は、1枚の画面に番号と説明を書き込んで見る場所を示す型です。画像ギャラリー型は、複数の画面や写真をそろえて一覧にします。' },
    { slug: 'case-card', diff: '事例紹介カード型は、1つの事例を写真・課題・成果のカードにまとめる型です。画像ギャラリー型は、事例や商品を写真中心にたくさん並べるときに向きます。' },
  ],
  faq: [
    {
      q: 'PowerPointで画像を同じ大きさでそろえるには？',
      a: '先に図形（角丸四角形など）を同じ大きさで並べ、「図形の書式」→「図形の塗りつぶし」→「図」で画像を入れる方法が確実です。すべての枠が同じ大きさなので、画像の元の大きさが違っても、枠の形にそろいます。',
    },
    {
      q: '写真の間隔をきれいにそろえるコツはありますか？',
      a: '並べたい図形を全部選び、PowerPointなら「図形の書式」→「配置」の「左右に整列」「上下に整列」を使います。これで間隔が等しくなります。手で1枚ずつ動かすと必ずずれるので、最初に整列機能を使うのが近道です。',
    },
    {
      q: 'ギャラリーに載せる枚数は何枚がよいですか？',
      a: '6枚（3×2）か4枚（2×2）が見やすい目安です。会議室のスクリーンで離れて見ても何が写っているか分かる大きさを保てます。もっと多く見せたいときは、スライドを分けるか、一覧用の別資料にします。',
    },
  ],
  publishedAt: '2026-11-07',
} satisfies Ugoki;
