import type { Ugoki } from '../types';

export default {
  slug: 'preloader',
  no: 17,
  category: 'load',
  name: 'ローディング画面',
  en: 'Preloader',
  aka: ['プリローダー', 'ローディングアニメーション', 'オープニングアニメーション', '読み込み画面', 'スプラッシュ画面'],
  mode: 'script',
  title: 'ローディング画面（プリローダー）とは？作り方と本当に要るかの判断【見本つき】',
  description:
    'ページを開いた直後に出るローディング画面（プリローダー）を動く見本で解説。読み込み完了で幕を消すHTML・CSS・JavaScript、消えないまま固まる事故の防ぎ方、そもそも待たせる演出が必要かの見極め方までまとめました。',
  oneLine: 'ページの準備ができるまで、ロゴと進むバーの幕をかぶせる。',
  what: [
    'ページを開いた瞬間、画面全体を1枚の幕（ロゴと進むバー）でおおい、読み込みが終わったら幕をすっと消して本来のページを見せる演出です。見本では、幕が消えると同時に見出しとカードが少し下から持ち上がって現れます。右下の「もう一度読み込む」で何度でも試せます。',
    '価値は「読み込み途中の崩れた画面を見せない」ことと「待ち時間に、何のサイトかを伝える」ことです。大きな写真や動画を使うブランドサイトでは、文字だけ先に出て写真が遅れてパラパラ出る見た目を避けられます。一方で、幕を出している間は何も読めないので、読む人にとっては待ち時間がそのまま増えることもあります。',
  ],
  when: [
    '全画面の動画や大きな写真で始まるブランドサイト・作品集で、崩れた途中経過を見せたくないとき',
    '3Dや地図、ゲームなど、準備が整うまで操作できない仕組みをページの中で動かすとき',
    'イベントや新商品の特設ページで、最初の1秒にロゴを印象づける演出として入れたいとき',
    'アプリのように使うWebサービスで、最初のデータを取ってくるまで画面を出せないとき',
  ],
  avoid: [
    '文章を読みに来る記事・ブログ・お知らせ（幕がある分だけ読み始めが遅れる）',
    'もともと1秒もかからず表示できる軽いページ（一瞬だけ幕がちらつく方が気になる）',
    '検索や広告から来て、すぐに答えや料金を知りたい人が多いページ（待たされると戻られやすい）',
    '毎回同じ人が何度も開く管理画面（2回目以降は待ち時間が邪魔なだけになる）',
  ],
  prompt:
    'ページを開いたときに「ローディング画面（preloader）」を出してください。画面全体を紺色の幕でおおい、中央にロゴと細い進むバーを置きます。window の load イベントで幕を0.3秒かけてフェードアウトさせ、消えたら要素ごと非表示にしてください。読み込みが遅くても最大3秒で必ず消す保険のタイマーを入れ、JavaScriptが動かない環境では最初から幕を出さないでください。幕には role="status" と「読み込み中」の読み上げ用ラベルを付け、prefers-reduced-motion が reduce の人にはバーやロゴを動かさないでください。',
  howTo: [
    '幕はページの先頭に置いた1つの要素で、position: fixed（画面に貼り付ける指定）で全体をおおいます。window の load イベント（画像まで含めて読み込みが終わった合図）が来たらクラスを付け、CSSの transition で透明にしてから非表示にします。',
    '進み具合を正確に測るのは難しいため、バーは「90%までそれらしく進め、終わったら100%にする」作りが一般的です。もうひとつ大事なのが保険です。何かの理由で load が来ないと幕が消えず、ページが永遠に見えなくなります。最大3秒で必ず消すタイマーを入れておきましょう。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML（body の先頭に置く）',
      code: `<div class="preloader" role="status" aria-label="読み込み中">
  <span class="preloader-logo">山の宿</span>
  <span class="preloader-bar"><i></i></span>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* JavaScriptが動く環境でだけ幕を出す（html に .js が付いたときだけ） */
.preloader {
  display: none;
}
.js .preloader {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-content: center;
  gap: 12px;
  background: #1d2541;
  color: #fff;
  /* 消えるときは加速（ease-in）で、すっと引く */
  transition: opacity 0.3s ease-in, visibility 0s linear 0.3s;
}
.preloader.is-done {
  opacity: 0;
  visibility: hidden;
}
.preloader-logo {
  font-weight: 800;
  letter-spacing: 0.12em;
}
.preloader-bar {
  width: 160px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.2);
  overflow: hidden;
}
.preloader-bar i {
  display: block;
  height: 100%;
  width: 0;
  background: #f06a35;
  /* 進み具合は分からないので、90%までそれらしく進める */
  animation: preloader-fill 2s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
}
.preloader.is-done .preloader-bar i {
  width: 100%;
  animation: none;
}
@keyframes preloader-fill {
  to { width: 90%; }
}

/* 動きを減らす設定なら、バーを動かさない */
@media (prefers-reduced-motion: reduce) {
  .preloader-bar i { animation: none; width: 60%; }
  .js .preloader { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript（head の中に書く）',
      code: `// 1. JavaScriptが動くことを CSS に知らせる（幕はこのときだけ出る）
document.documentElement.classList.add('js');

// 2. 読み込みが終わったら幕を消す。来なくても3秒で必ず消す（消えない事故を防ぐ保険）
const hidePreloader = () => {
  const el = document.querySelector('.preloader');
  if (!el || el.classList.contains('is-done')) return;
  el.classList.add('is-done');
  el.addEventListener('transitionend', () => el.remove(), { once: true });
};
window.addEventListener('load', hidePreloader);
setTimeout(hidePreloader, 3000);`,
    },
  ],
  cautions: [
    '幕を出すと、中身が準備できていても読む人は見られません。Googleが表示の速さを測る指標（LCP＝いちばん大きな要素が見えるまでの時間）も、幕の分だけ遅れて記録されることがあります。まずは画像の圧縮や遅延読み込みで、ページ自体を速くする方が効果的です。',
    'load イベントは、ページ内のすべての画像や広告の読み込みを待ちます。重い広告や外部の埋め込みがあると、幕がなかなか消えません。保険のタイマー（2〜3秒）は必ず入れてください。',
    'JavaScriptの読み込みに失敗すると、幕だけが残って何も見えなくなります。見本のコードのように「JavaScriptが動いたときだけ幕を出す」作りにしておくと安全です。',
    '同じ人がページを移動するたびに幕が出ると、待ち時間が積み重なります。出すのはトップページの初回だけにする、2回目以降は sessionStorage（そのタブの間だけ覚えておく仕組み）で出さない、などの工夫を検討してください。',
    '幕の中の動きが激しいと、動きが苦手な人には負担になります。ロゴの点滅やくるくる回る動きは、動きを減らす設定の人には止めてください。',
  ],
  similar: [
    {
      slug: 'skeleton',
      diff: 'スケルトンスクリーンは、ページの形（灰色の箱）を先に見せて、中身を順に流し込む作り方です。ローディング画面は全体を隠して一気に見せます。待っている感じが少ないのはスケルトンの方です。',
    },
    {
      slug: 'page-transition',
      diff: 'ページ遷移アニメーションは、ページからページへ移る「つなぎ目」を動かす演出です。ローディング画面はサイトを開いた最初の1回の待ち時間を埋めるものです。',
    },
    {
      slug: 'lazy-loading',
      diff: '遅延読み込みは、見えていない画像を後回しにしてページを速く出す工夫です。待ち時間そのものを減らせるので、ローディング画面より先に検討する価値があります。',
    },
  ],
  faq: [
    {
      q: 'ローディング画面は本当に必要ですか？',
      a: '多くのページでは不要です。待ち時間を演出で埋めるより、画像を軽くして待ち時間そのものを減らす方が読む人のためになります。必要なのは、3Dや動画など準備が整わないと見せられないものがある場合や、ブランドの印象づけを優先する特設ページくらいです。',
    },
    {
      q: 'ローディング画面が消えないのはなぜですか？',
      a: 'よくある原因は、load イベントが来ない（重い画像や外部の埋め込みが終わらない）、JavaScriptがエラーで止まっている、の2つです。最大3秒で必ず消すタイマーを入れ、ブラウザの開発者ツールでエラーが出ていないか確認してください。',
    },
    {
      q: 'ローディング画面はSEOに影響しますか？',
      a: '検索エンジンはページの中身（HTML）を読むので、幕があること自体で内容が読まれなくなることはありません。ただ、幕の分だけ表示が遅く感じられ、表示速度の指標が悪く出ることはあります。出す時間はできるだけ短くしてください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
