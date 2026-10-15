import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'fab',
  no: 14,
  category: 'nav',
  name: 'フローティングアクションボタン',
  en: 'Floating action button (FAB)',
  aka: ['FAB', 'フローティングボタン', '追従ボタン', 'プラスボタン', '拡張FAB'],
  mode: 'script',
  title: 'フローティングアクションボタン（FAB）とは？位置・大きさと作り方',
  description:
    '画面の右下に浮かぶ丸いボタン、フローティングアクションボタン（FAB）を触れる見本で解説。置く場所と大きさの目安、スクロールで縮む拡張FAB、position: fixedの書き方、上に戻るボタンや追従CTAとの違いまでまとめました。',
  oneLine: '画面の右下に浮かび、その画面でいちばん大事な操作を1つだけ置く丸いボタン。',
  what: [
    '画面の右下に浮かせて、スクロールしても同じ場所に留まる丸いボタンです。Googleの Material Design が広めた部品で、「その画面でいちばんよく使う操作」を1つだけ置きます。メモアプリの「新規作成」、地図アプリの「経路」、チャットの「新しい会話」が典型です。見本では、いちばん上では「＋ 追加」と文字つきの横長（拡張FAB）、下へスクロールすると丸だけに縮み、上へ戻すとまた伸びます。押すとリストの先頭に新しい項目が入ります。',
    'FABの価値は「親指が届く場所に、主役の操作がいつもある」ことです。その代わり、画面に浮いて中身の上に重なるので、何にでも使うと邪魔になります。1画面に1つまで、そして「作る・始める」ような前向きな操作に限るのが約束です。削除や設定のような操作はFABにしません。',
    '決まりごとは、大きさ56px前後（小さくても44px以上）、画面の端から16px前後離すこと。アイコンだけのFABには aria-label で「項目を追加」のように名前を付けます。iPhoneのホームバーと重ならないよう、下の余白に env(safe-area-inset-bottom) を足します。',
  ],
  when: [
    'メモ・タスク・家計簿のように、「新しく作る」が画面の主な目的のとき',
    'チャットやメールの一覧で、「新しく書く」をいつでも押せるようにしたいとき',
    '地図や店舗検索で、「現在地へ」「経路を調べる」を地図の上に浮かせたいとき',
    'スマホ向けの管理画面で、一覧をスクロールしながらでも「追加」できるようにしたいとき',
  ],
  avoid: [
    '読み物のページやLP（記事の文字の上にボタンが重なり、読む邪魔になる）',
    '主役の操作が2つ以上ある画面（FABを2つ並べると、どちらが主役か分からなくなる）',
    '削除・共有・設定のような、主役ではない操作（ふつうのボタンやメニューに置く）',
  ],
  prompt:
    'メモ一覧の画面に「フローティングアクションボタン（floating action button / FAB）」を作ってください。<button aria-label="項目を追加"> を position: fixed で画面の右下に置き、右と下の余白は{{inset:t}}、iPhoneのホームバーを避けるため下の余白に env(safe-area-inset-bottom) を足してください。ボタンは高さ{{size:t}}の丸で、色は{{color:t}}、中央に＋のSVGアイコンを置き、影で浮いて見えるようにしてください。画面の一番上にいるときは「＋ 追加」と文字つきの横長に伸ばし、下へスクロールしたら0.25秒で丸だけに縮め、上へスクロールしたらまた伸ばしてください。押したら新規作成の画面を開いてください。一覧の最後の項目がボタンに隠れないよう、一覧の下に余白をとってください。動きを減らす設定（prefers-reduced-motion）では伸び縮みの動きを省いてください。',
  howTo: [
    'ボタンは <button> で作り、position: fixed で右下に固定します。right と bottom に余白を入れ、bottom には env(safe-area-inset-bottom) を足して、ホームバーのある端末でも重ならないようにします。丸は width と height を同じにして border-radius: 999px、影を2段（ぼかしの大きい薄い影と、近くの濃い影）にすると浮いて見えます。',
    'スクロールで縮む「拡張FAB」は、文字の部分を max-width で隠すだけです。scroll イベントで前回の位置と比べ、下へ動いたら縮めるクラスを付け、上へ動いたら外します。見本は枠の中に収めるため position: sticky で右下に留めていますが、本番では fixed で画面に対して固定します。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="fab" aria-label="項目を追加">
  <svg class="fab-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none" />
  </svg>
  <span class="fab-text" aria-hidden="true">追加</span>
</button>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.fab {
  position: fixed;
  right: calc({{inset}} + env(safe-area-inset-right));
  bottom: calc({{inset}} + env(safe-area-inset-bottom));
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 8px;
  height: {{size}};
  min-width: {{size}};
  max-width: 200px;
  padding: 0 calc(({{size}} - 24px) / 2);
  border: 0;
  border-radius: 999px;
  background: {{color}};
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  /* 2段の影で浮いて見せる */
  box-shadow: 0 6px 16px -4px rgb(20 24 40 / 0.35), 0 2px 4px rgb(20 24 40 / 0.15);
  transition: max-width 0.25s ease-out, transform 0.15s ease-out;
}
.fab-icon { flex: none; width: 24px; height: 24px; }
.fab:active { transform: scale(0.96); }
.fab:focus-visible { outline: 3px solid #4f73d9; outline-offset: 3px; }

/* 下へスクロール中は丸だけに縮める */
.fab.is-compact { max-width: {{size}}; }
.fab.is-compact .fab-text { opacity: 0; }

/* 一覧の最後がボタンに隠れないように */
.list { padding-bottom: calc({{size}} + {{inset}} * 2); }

@media (prefers-reduced-motion: reduce) {
  .fab { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const fab = document.querySelector('.fab');
let lastY = scrollY;

// 下へスクロールしたら縮め、上へ戻したら伸ばす
addEventListener('scroll', () => {
  const y = scrollY;
  if (y > lastY + 4 && y > 24) fab.classList.add('is-compact');
  else if (y < lastY - 4 || y <= 24) fab.classList.remove('is-compact');
  lastY = y;
}, { passive: true });

fab.addEventListener('click', () => {
  location.href = '/notes/new/'; // 新規作成の画面へ
});`,
    },
  ],
  tune: [
    { key: 'size', label: 'ボタンの大きさ', min: 40, max: 72, step: 2, value: 56, unit: 'px' },
    { key: 'inset', label: '画面の端からの余白', min: 8, max: 32, step: 2, value: 16, unit: 'px' },
    { key: 'color', type: 'color', label: 'ボタンの色', value: '#f06a35' },
  ],
  cautions: [
    'FABは中身の上に重なります。一覧の最後の項目や、ページ下の「次へ」ボタンが隠れないよう、ページの下にボタンの高さ＋余白ぶんの空きをとります。',
    'タブバーやCookieの同意バナー、追従CTAバーがある画面では、FABをその上に持ち上げます。下端に固定する部品どうしが重なる事故は、スマホで特に多く起きます。',
    'アイコンだけのFABは、読み上げで「ボタン」としか読まれません。aria-label で「項目を追加」のように操作の名前を付けます。拡張FABの文字は読み上げで二重にならないよう aria-hidden にします。',
    'キーボードで操作する人は、FABがページの最後の方にあるとなかなかたどり着けません。HTMLの並びでは、その画面の主な内容の直前か直後に置きます。',
  ],
  similar: [
    { slug: 'back-to-top', book: 'ugoki', diff: '上に戻るボタンも右下に浮かびますが、ページの先頭へ戻るだけの補助です。FABはその画面の主役の操作（作る・始める）を置きます。' },
    { slug: 'sticky-cta', diff: '追従CTAバーは画面の下に横長の帯を貼り、「予約する」など申し込みの行動へ誘います。FABは丸く小さく、作業の道具として使います。' },
    { slug: 'bottom-nav', diff: 'タブバーは画面の下に行き先を並べて移動に使います。FABは移動ではなく、その場で何かを始める操作です。両方ある画面では、FABをタブバーの上に置きます。' },
  ],
  faq: [
    {
      q: 'FABの大きさと位置の目安は？',
      a: 'Material Design では大きさ56px、画面の端から16pxが標準です。小さくする場合も押せる大きさの44px以上は保ちます。位置は右下が基本で、親指が届きやすく、左から右へ読む文の邪魔になりにくいためです。',
    },
    {
      q: 'FABはiPhoneのアプリでも使っていいですか？',
      a: 'iPhoneの標準のデザイン指針にはFABという部品がなく、主な操作は画面上部のナビゲーションバーの右端（＋ボタン）に置くのが一般的です。Webサイトや、AndroidとiPhoneで同じ見た目にしたいアプリではFABもよく使われます。',
    },
    {
      q: 'FABとフローティングバナー（追従バナー）は何が違いますか？',
      a: 'FABはその画面での作業（作る・始める）のための道具で、丸く小さくまとめます。追従バナーや追従CTAバーは、資料請求や予約のような申し込みへ誘うための帯で、文言を大きく見せます。LPで申し込みを促すなら追従CTAバーの方が向きます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
