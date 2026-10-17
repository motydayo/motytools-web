import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'full-photo',
  no: 16,
  category: 'kousei',
  name: '全面写真＋帯型',
  en: 'Full-bleed photo with caption band',
  aka: ['全面写真', 'フルブリード', '写真背景スライド', '帯付き写真', '写真に文字を重ねる'],
  mode: 'static',
  title: '全面写真＋帯とは？写真の上に読みやすく文字を重ねるスライドの作り方【見本つき】',
  description:
    '写真をスライド全体に敷き、暗い帯の上に一言を置く「全面写真＋帯型」を見本で解説。文字が写真に埋もれない帯の作り方、PowerPoint・Googleスライドでの手順、AIにそのまま貼れる指示文、HTMLとCSSまでまとめました。',
  oneLine: '写真をスライド全体に敷き、帯の上に大きな一言を置く表紙・見せ場の1枚。',
  what: [
    'スライド全体に写真を敷き、その上に半透明の暗い帯を重ねて、帯の中に文字を置く型です。見本では夕方の海の景色を全面に使い、下寄りの帯に「長期滞在型オフィス」の名前、大きな一言「働く場所を、海の見える部屋に。」、開業の時期を並べています。帯の左端にはアクセント色の太い線を入れて、全体を引き締めています。',
    'この型のよさは、言葉より先に「どんな世界の話か」を感じてもらえることです。決まりごとは、文字を写真に直接のせず、必ず帯を挟むこと。帯の暗さを40〜80%にしておけば、明るい写真でも暗い写真でも、白い文字がくっきり読めます。1枚に入れる言葉は、題名と一言とせいぜい補足1行までです。',
  ],
  when: [
    '資料の表紙や、商品・場所・サービスの世界観を見せたい導入の1枚をつくるとき',
    '新店舗・新工場・新オフィスなど、場所のようすを大きく見せて発表するとき',
    '採用説明会や会社紹介で、雰囲気を伝えたいとき',
    '発表の最後に、印象に残る一言と画像で締めたいとき',
  ],
  avoid: [
    '細かい説明や数字を載せたいとき（帯に文字が入りきらず、写真も隠れる。左図右文型にする）',
    '手元に高い解像度の写真がないとき（全面に広げると粗さが目立つ。小さめに使える左図右文型にする）',
    '写真の主役（人の顔、商品など）が、帯が重なる場所にあるとき（写真を選び直すか、帯の位置を変える）',
  ],
  prompt:
    '16:9のスライドを1枚、「全面写真＋帯型（full-bleed photo with caption band）」で作ってください。スライドの上下左右に余白を作らず、「夕方の海と、水平線に沈む太陽」の写真を全面に敷きます（今は仮の絵でかまいません）。その上に、幅いっぱいの帯を「{{band:t}}」で重ね、帯は濃い紺色（#141a2b）を濃さ{{dark:t}}で重ねます。帯の左端には、アクセント色{{accent:t}}の太さ8ptの縦線を入れてください。帯の中は、上から順に、16ptの小さな文字で「長期滞在型オフィス「うみのオフィス館山」」、46ptの太字で「働く場所を、海の見える部屋に。」、20ptで「2027年春、千葉県館山市に開業します」を、すべて白で置きます。左下に小さく「写真はイメージ」と13ptで添えてください。色はアクセント色の1色だけで、ほかは写真・白・暗い帯だけです。帯の外には文字を置かず、数字は私が書いたものだけを使い、新しい数字を足さないでください。',
  howTo: [
    'PowerPointでは、「ホーム」→「新しいスライド」で「白紙」を選び、「挿入」→「画像」で写真を入れます。写真をスライドの四辺ぴったりに広げ（高さ540pt・幅960pt）、はみ出す部分は「図の形式」→「トリミング」で切り落とします。帯は「挿入」→「図形」→「四角形」で幅960ptの長方形を描き、「図形の書式」→「塗りつぶし」で紺色、「透明度」を30〜40%にします。「図形の枠線」は「枠線なし」にしてください。文字は帯とは別の「テキスト ボックス」で重ねると、位置を後から直せます。',
    'Googleスライドでは、「レイアウト」から「白紙」を選び、「挿入」→「画像」で写真を入れて、スライド全体に広げます。帯は「挿入」→「図形」→「図形」から四角形を描き、「塗りつぶしの色」の中の「カスタム」で紺色を選び、透明度のバーを動かして半透明にします。写真が主役の1枚なので、帯の上以外には何も置かず、「写真はイメージ」の注記だけを左下に小さく入れます。',
    'AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります。写真の部分は<svg>の絵で代用しているので、実際の写真に替えるときは、<svg>から</svg>までを<img src="写真のファイル名" alt="写真の説明">に置き換えてください。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（スライド1枚）',
      code: `<section class="slide" data-band="{{band}}">
<svg viewBox="0 0 960 540" preserveAspectRatio="xMidYMid slice" role="img" aria-label="夕方の海と、水平線に沈む太陽のイメージ" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fp-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f5f9a"/><stop offset="0.55" stop-color="#e9a56f"/><stop offset="1" stop-color="#f7d79a"/></linearGradient>
    <linearGradient id="fp-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d98c6a"/><stop offset="0.35" stop-color="#4b6f9a"/><stop offset="1" stop-color="#25405f"/></linearGradient>
  </defs>
  <rect width="960" height="330" fill="url(#fp-sky)"/>
  <circle cx="650" cy="318" r="64" fill="#fdeab4"/>
  <path d="M0 330l130-34 110 22 120-30 90 26 60-14v30H0z" fill="#46526e" opacity="0.8"/>
  <path d="M760 330l90-26 70 18 40-10v18H760z" fill="#3d4863" opacity="0.85"/>
  <rect y="330" width="960" height="210" fill="url(#fp-sea)"/>
  <g fill="#fdeab4" opacity="0.75"><rect x="590" y="338" width="120" height="5" rx="2.5"/><rect x="570" y="352" width="160" height="5" rx="2.5"/><rect x="600" y="368" width="100" height="5" rx="2.5"/><rect x="560" y="386" width="180" height="5" rx="2.5"/><rect x="610" y="406" width="80" height="5" rx="2.5"/></g>
  <g><path d="M230 316h60l-10 12h-40z" fill="#2c3550"/><path d="M262 276v38l-28-4z" fill="#f4eee2"/><path d="M266 282v32l22-3z" fill="#e8ddc9"/></g>
  <path d="M0 540V470c80-18 160-14 240 4s150 10 220-8 160-22 250-6 170 4 250-8v88z" fill="#1d2d46" opacity="0.55"/>
</svg>

  <div class="band">
    <p class="kicker">長期滞在型オフィス「うみのオフィス館山」</p>
    <h1 class="title">働く場所を、海の見える部屋に。</h1>
    <p class="sub">2027年春、千葉県館山市に開業します</p>
  </div>
  <span class="cap">写真はイメージ</span>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* 幅960px×高さ540px（PowerPointの16:9と同じ比率） */
.slide {
  --accent: {{accent}};
  position: relative;
  box-sizing: border-box;
  width: 960px;
  height: 540px;
  overflow: hidden;
  background: #25405f;
  color: #fff;
  font-family: "Hiragino Sans", "Noto Sans JP", sans-serif;
  line-height: 1.4;
}

/* 写真。スライド全体に敷く */
.slide > svg, .slide > img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }

/* 文字を載せる暗い帯。濃さ40〜80%なら明るい写真でも読める */
.band {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 52px;
  padding: 24px 56px;
  background: color-mix(in srgb, #141a2b {{dark}}, transparent);
  border-left: 8px solid var(--accent);
}
.kicker { margin: 0; font-size: 16px; font-weight: 700; letter-spacing: 0.04em; opacity: 0.9; }
.title { margin: 6px 0 0; font-size: 46px; font-weight: 800; line-height: 1.25; }
.sub { margin: 8px 0 0; font-size: 20px; }
.cap { position: absolute; left: 14px; bottom: 14px; padding: 3px 10px; border-radius: 999px; background: rgba(20, 26, 43, 0.62); font-size: 13px; }

/* 帯の位置（data-band="bottom" / "middle"） */
.slide[data-band="middle"] .band { bottom: auto; top: 50%; transform: translateY(-50%); }`,
    },
  ],
  tune: [
    { key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' },
    {
      key: 'band',
      type: 'select',
      label: '帯の位置',
      value: 'bottom',
      options: [
        { value: 'bottom', label: '下寄りに置く' },
        { value: 'middle', label: '真ん中に置く' },
      ],
    },
    { key: 'dark', label: '帯の濃さ（%）', min: 40, max: 90, step: 5, value: 70, unit: '%' },
  ],
  cautions: [
    '写真の上に、帯なしで直接文字を置かないでください。空や海のように見える場所でも、一部が明るいと文字が消えて読めなくなります。必ず暗い帯を挟みます。',
    '帯を濃くしすぎると、写真が隠れてしまい、全面に敷いた意味がなくなります。濃さは60〜75%が目安です。会場が明るいときは濃く、プロジェクターが暗いときは薄くしすぎないようにします。',
    '写真の主役（人の顔、商品、看板）を帯で隠さないでください。帯が下にくるなら、写真は下3分の1に何も大事なものが写っていないものを選びます。',
    '解像度の低い写真を引き伸ばさないでください。全面に広げると粗さが目立ちます。少なくとも幅1920ピクセル以上の写真を使います。',
  ],
  similar: [
    { slug: 'image-left', diff: '左図右文型は、写真を半分に収め、右に説明の文章を並べられる型です。全面写真＋帯型は、文字を一言に絞って写真の迫力を最大にします。' },
    { slug: 'title-slide', diff: 'タイトルスライドは、資料の表紙として題名・日付・発表者を示す型で、写真を敷くとこの型と同じ見た目になります。全面写真＋帯型は、表紙に限らず資料の途中でも使えます。' },
    { slug: 'one-message', diff: '1メッセージ型は、写真を使わず文字だけで1文を大きく見せる型です。写真が用意できないときはこちらにします。' },
  ],
  faq: [
    {
      q: '写真の上の文字が読みにくいときはどうすればいいですか？',
      a: '帯を濃くするのが一番確実です。帯の透明度を30%から40%の間にして、文字は白、太字にします。それでも読みにくいなら、写真の方を、暗い部分が多いものに替えてください。',
    },
    {
      q: '全面写真はどんな写真を選べばいいですか？',
      a: '横長で、文字を重ねる位置（見本なら下3分の1）に大事なものが写っていない写真です。空・海・壁・床などの余白の多い写真が向いています。人の顔が大きく写った写真は、帯が顔にかぶらない向きを選びます。',
    },
    {
      q: '写真をスライドの背景にするのと、図として貼るのは何が違いますか？',
      a: 'PowerPointの「背景の書式設定」から写真を背景にすると、写真が文字や図形の下に固定され、うっかり動かす心配がありません。図として貼ると、位置や大きさをあとから自由に直せます。1枚ずつ調整したいときは、図として貼る方が楽です。',
    },
  ],
  publishedAt: '2026-10-24',
} satisfies Ugoki;
