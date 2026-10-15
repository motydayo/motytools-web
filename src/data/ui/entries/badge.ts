import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'badge',
  no: 25,
  category: 'display',
  name: 'バッジ',
  en: 'Badge',
  aka: ['通知バッジ', '件数バッジ', '未読バッジ', 'ラベル', 'タグ', 'NEWマーク'],
  mode: 'script',
  title: '通知バッジ・NEWマークの作り方｜件数の出し方と読み上げ対応【見本】',
  description:
    'アイコンの右上に出る通知の件数や、商品の角の「NEW」などのバッジを触れる見本で解説。件数・点・状態の3種類の使い分け、99+の上限、CSSでの重ね方、読み上げソフトに件数を伝える方法までまとめました。',
  oneLine: 'アイコンや商品の角に小さな札を付けて、件数や状態を知らせる。',
  what: [
    'アイコンやカードの角に重ねる小さな札です。見本の上の段には、お知らせの未読が3件あることを示す「件数のバッジ」、メッセージに未読があることだけを示す「点のバッジ」、カートの中身の数が並んでいます。「カートに入れる」を押すとカートの数が増え、ベルを押してお知らせを開くと未読の札が消えます。下の商品には、角に少しはみ出した「NEW」と、値段の横の「残り2点」という「状態のバッジ」が付いています。',
    'バッジの決まりごとは3つです。見たら消える（未読の数は、開いた時点で0にする）。0のときは出さない（「0」の札は目障りなだけ）。大きな数は「99+」で打ち切る（札の幅が暴れない）。そして、札の数字だけでは読み上げで意味が伝わりません（「2」とだけ読まれ、何の数か分からない）。ボタンの名前そのものを「お知らせ（3件）」のように変えて、目が見えない人にも件数を伝えます。',
    '似た部品との違いは、押せるかどうかと、消えるかどうかです。チップは押して絞り込みを付け外しする部品、トースト通知は数秒だけ出て消えるお知らせです。バッジ自体は押せず、状態が変わるまでそこに残り続けます。',
  ],
  when: [
    'ECサイトやアプリのカートのアイコンに、入っている商品の数を出すとき',
    'お知らせ・メッセージ・受信箱に、まだ見ていない件数があることを伝えたいとき',
    '商品一覧で「NEW」「セール」「残りわずか」など、選ぶ手がかりになる状態を見せたいとき',
    '管理画面のメニューに「承認待ち 5」のように、対応が必要な件数を出したいとき',
  ],
  avoid: [
    'すべての商品やメニューにバッジを付けるとき（全部に付くと、どれも目立たなくなる）',
    '開いても消えない、ずっと付いたままの赤い数字（「見なくていい印」と覚えられて、本当に大事なときに無視される）',
    'アプリに戻ってきてほしいだけで、中身のない件数を増やすとき（不信感につながる）',
  ],
  prompt:
    'ECサイトのヘッダーに「バッジ（badge）」を付けてください。カートとお知らせのアイコンの右上に、件数を出す丸い札を重ねてください。札の高さは{{size:t}}、色は{{color:t}}、文字は白の太字にし、アイコンと重なっても形が読めるよう白い2pxのふちを付けてください。数が0のときは札を隠し、100以上は「99+」と表示してください。お知らせは開いたら未読の札を消してください。数字は aria-hidden="true" にして、代わりにボタンの aria-label を「カート（2点）」のように件数入りで更新してください。数が増えたときは0.2秒だけ軽く弾ませ、動きを減らす設定（prefers-reduced-motion）の人には弾ませないでください。',
  howTo: [
    '置き方はCSSだけで済みます。アイコンのボタンを position: relative にし、札を position: absolute で右上に重ねます。札は min-width と height を同じ値にして border-radius: 999px にすると、1桁なら正円、2桁以上なら横に伸びた丸になります。白いふちを付けると、アイコンの線と重なっても形がはっきりします。',
    '件数の書き換えは数行のJavaScriptです。0なら hidden で隠し、99を超えたら「99+」と書きます。同時にボタンの aria-label を件数入りに書き換えます。札の数字だけを変えても、読み上げソフトの人には何も伝わらないからです。カートに入れたときなどは、別に role="status" の見えない文で「カートに入れました」と知らせると親切です。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<a href="/cart" class="icon-btn" aria-label="カート（2点）">
  <svg width="22" height="22" aria-hidden="true"><!-- カートの絵 --></svg>
  <span class="badge" aria-hidden="true">2</span>
</a>

<!-- 状態のバッジ（押せない札） -->
<div class="product">
  <img src="mug.jpg" alt="益子焼 マグカップ" width="400" height="300">
  <span class="tag">NEW</span>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.icon-btn {
  position: relative;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
}
/* 件数のバッジ */
.badge {
  position: absolute;
  top: 2px;
  left: 50%;
  min-width: {{size}};
  height: {{size}};
  padding: 0 calc({{size}} * 0.28);
  box-sizing: border-box;
  border: 2px solid #fff; /* アイコンと重なっても読める */
  border-radius: 999px;
  background: {{color}};
  color: #fff;
  font-size: calc({{size}} * 0.58);
  font-weight: 800;
  line-height: calc({{size}} - 4px);
  text-align: center;
  font-variant-numeric: tabular-nums;
}
.badge[hidden] { display: none; }
.badge.is-pop { animation: pop 0.2s ease-out; }
@keyframes pop { 50% { transform: scale(1.25); } }

/* 状態のバッジ: 角に、少しはみ出して */
.product { position: relative; }
.tag {
  position: absolute;
  top: -6px;
  left: -6px;
  padding: 2px 8px;
  border-radius: 6px;
  background: #1d2541;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
}

@media (prefers-reduced-motion: reduce) {
  .badge.is-pop { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// 件数を札とボタンの名前の両方に書く
function setCartCount(n) {
  const btn = document.querySelector('.icon-btn');
  const badge = btn.querySelector('.badge');
  badge.hidden = n <= 0;
  badge.textContent = n > 99 ? '99+' : String(n);
  btn.setAttribute('aria-label', n > 0 ? \`カート（\${n}点）\` : 'カート');
  // 増えたことを一度だけ弾ませて知らせる
  badge.classList.remove('is-pop');
  void badge.offsetWidth;
  badge.classList.add('is-pop');
}

setCartCount(2);`,
    },
  ],
  tune: [
    { key: 'size', label: 'バッジの大きさ', min: 14, max: 28, step: 2, value: 20, unit: 'px' },
    { key: 'color', type: 'color', label: 'バッジの色', value: '#d93a2b' },
  ],
  cautions: [
    '札の数字をそのまま読ませると「2」とだけ読まれ、何の数か伝わりません。札は aria-hidden="true" にし、ボタンの aria-label を「お知らせ（3件）」のように件数入りにします。',
    '色だけで意味を伝えないようにします。「残り2点」のように文字で書けば、色の見分けがつきにくい人にも伝わります。白い文字を乗せるなら、背景の色との差（コントラスト比）が4.5:1以上ある濃い色を選びます。',
    '件数は「開いたら消える」ようにします。いつまでも消えない赤い数字は、やがて誰にも見られなくなります。',
    'バッジ自体を押せる部品にしないでください。押す場所はアイコンのボタン全体（44px四方）で、札はその上に乗っているだけにします。',
  ],
  similar: [
    { slug: 'chips', diff: 'チップは押して付け外しする札で、絞り込みの条件などに使います。バッジは押せず、件数や状態を知らせるだけです。' },
    { slug: 'toast', book: 'ugoki', diff: 'トースト通知は数秒だけ出て消えるお知らせです。バッジは「まだ見ていないものがある」状態を、見るまでずっと残します。' },
  ],
  faq: [
    {
      q: 'バッジとラベルとタグは何が違いますか？',
      a: '呼び方は現場によって揺れますが、アイコンの右上に重なる件数の札を「バッジ」、文字の横に並べる状態の札（NEW・セール）を「ラベル」や「タグ」と呼び分けることが多いです。AIに頼むときは「通知の件数バッジ（notification badge）」「状態ラベル（status label）」のように用途まで書くと、意図どおりの形になります。',
    },
    {
      q: '件数が100を超えたらどう表示すればいいですか？',
      a: '「99+」のように上限で打ち切るのが一般的です。札の幅が数字に合わせて伸び続けるとアイコンを隠してしまいますし、正確な数より「たくさんある」と分かれば十分だからです。正確な件数は、開いた先の画面で見せます。',
    },
    {
      q: '数字ではなく点だけのバッジはいつ使いますか？',
      a: '「何かある」ことだけ伝えれば十分なときです。たとえば設定に新しい項目が増えた、メッセージに未読がある、などです。点はバッジの中でいちばん控えめなので、急ぎではない知らせに向いています。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
