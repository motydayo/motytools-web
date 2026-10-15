import type { Ugoki } from '../types';

export default {
  slug: 'page-transition',
  no: 20,
  category: 'load',
  name: 'ページ遷移アニメーション',
  en: 'Page transition',
  aka: ['画面遷移アニメーション', 'ページトランジション', 'View Transitions', 'ビュートランジション'],
  mode: 'script',
  title: 'ページ遷移アニメーションの作り方｜View Transitionsで画面をつなぐ',
  description:
    'ページを移るときに画面をなめらかにつなぐページ遷移アニメーションを動く見本で解説。CSS数行で使えるView Transitions API、1ページの中で画面を切り替える方法、使えないブラウザでの代わりの動きまでまとめました。',
  oneLine: '一覧から詳細へ移るとき、画面がすっと入れ替わってつながる。',
  what: [
    'リンクを押して別のページへ移るとき、パッと白く切り替わる代わりに、古い画面がすっと消えて新しい画面が右から少し入ってくる演出です。見本では、宿のカードを押すと詳細ページへ、「一覧へ戻る」を押すと左から一覧が戻ってきます。上のアドレス欄もページに合わせて変わります。',
    '進む・戻るで動きの向きを変えると、「奥へ入った」「手前に戻った」という位置関係が伝わり、今どこにいるか迷いにくくなります。今は View Transitions API（画面の切り替わりをブラウザが自動でなめらかにつなぐ仕組み）が使え、別々のHTMLページの間でもCSSを数行書くだけで実現できます。',
  ],
  when: [
    '作品集やお店のサイトで、一覧から詳細への移動を気持ちよく見せたいとき',
    '手順が何ページかに分かれた申し込みフォームで、「次へ」「戻る」の向きを伝えたいとき',
    'アプリのように使うWebサービスで、画面の切り替わりにアプリらしいつながりを持たせたいとき',
    '同じ写真が一覧と詳細の両方に出るとき（その写真だけを大きくしながらつなぐこともできる）',
  ],
  avoid: [
    '文章を読むのが目的のブログやニュース（移動のたびに0.3秒でも待たされる感覚が積み重なる）',
    '演出に0.5秒以上かかる作り（遅いと「重いサイト」と感じられる）',
    '移動のたびに画面全体を大きく回したり拡大したりする作り（動きが苦手な人には負担が大きい）',
  ],
  prompt:
    'サイト内のページ移動に「ページ遷移アニメーション（page transition）」を付けてください。View Transitions API を使い、すべてのページのCSSに @view-transition { navigation: auto; } を書いて、古い画面は{{exit:t}}で ease-in のフェードアウト、新しい画面は右から{{shift:t}}・{{enter:t}}の ease-out でフェードインさせてください。対応していないブラウザでは何もしない（ふつうに切り替わる）ままで構いません。prefers-reduced-motion が reduce の人にはアニメーションを付けないでください。JavaScriptやライブラリは使わないでください。',
  howTo: [
    '別々のHTMLページ同士なら、両方のページのCSSに @view-transition { navigation: auto; } と書くだけで、移動のたびに画面がふわっと入れ替わります（同じサイト内の移動だけが対象です）。動きを変えたいときは、::view-transition-old(root)（古い画面の写し）と ::view-transition-new(root)（新しい画面の写し）にアニメーションを指定します。対応していないブラウザでは、ふつうに切り替わるだけで壊れることはありません。',
    '見本のように1ページの中で画面を入れ替える場合は、JavaScript の document.startViewTransition() に「画面を入れ替える処理」を渡します。使えないブラウザ向けには、animate()（JavaScriptから動きを付けるブラウザ標準の仕組み）で同じ動きを代わりに付けておけば、どの環境でもほぼ同じ見た目になります。',
  ],
  code: [
    {
      lang: 'css',
      label: 'CSS（別ページへの移動。全ページに書く）',
      code: `/* 同じサイト内のページ移動を、なめらかにつなぐ */
@view-transition {
  navigation: auto;
}

/* 古い画面はすっと消え、新しい画面は右から少し入る */
::view-transition-old(root) {
  animation: page-out {{exit}} ease-in both;
}
::view-transition-new(root) {
  animation: page-in {{enter}} ease-out both;
}
@keyframes page-out {
  to { opacity: 0; }
}
@keyframes page-in {
  from { opacity: 0; transform: translateX({{shift}}); }
}

/* 動きを減らす設定なら、アニメーションしない */
@media (prefers-reduced-motion: reduce) {
  @view-transition { navigation: none; }
}`,
    },
    {
      lang: 'html',
      label: 'HTML（1ページの中で画面を切り替える場合）',
      code: `<main class="screen">
  <section class="page-list">
    <a href="#yama" class="go-detail">山の宿</a>
  </section>
  <section class="page-detail" hidden>
    <button type="button" class="go-back">一覧へ戻る</button>
    <h1>山の宿</h1>
  </section>
</main>`,
    },
    {
      lang: 'js',
      label: 'JavaScript（1ページの中で画面を切り替える場合）',
      code: `const list = document.querySelector('.page-list');
const detail = document.querySelector('.page-detail');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

const show = (toDetail) => {
  const swap = () => {
    list.hidden = toDetail;
    detail.hidden = !toDetail;
  };
  // 使えるブラウザでは View Transitions API に任せる
  if (document.startViewTransition && !reduce.matches) {
    document.startViewTransition(swap);
    return;
  }
  // 使えないブラウザでは、入れ替えたあとに同じ動きを animate() で付ける
  swap();
  if (reduce.matches) return;
  const next = toDetail ? detail : list;
  next.animate(
    [{ opacity: 0, transform: 'translateX({{shift}})' }, { opacity: 1, transform: 'none' }],
    { duration: {{enter:n}} * 1000, easing: 'ease-out' }
  );
};

document.querySelector('.go-detail').addEventListener('click', (e) => {
  e.preventDefault();
  show(true);
});
document.querySelector('.go-back').addEventListener('click', () => show(false));`,
    },
  ],
  tune: [
    { key: 'exit', label: '古い画面が消える速さ', min: 0.05, max: 0.6, step: 0.05, value: 0.2, unit: 's' },
    { key: 'enter', label: '新しい画面が入る速さ', min: 0.1, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    { key: 'shift', label: '入ってくる距離', min: 0, max: 80, step: 4, value: 24, unit: 'px' },
  ],
  cautions: [
    '別ページ間の @view-transition は、Chrome・Edge は126以降、Safari は18.2以降で動きます。Firefox は対応の途中なので、使う前に「Can I use」などの対応表で最新の状況を確かめてください。対応していないブラウザではふつうに切り替わるだけなので、それを前提に設計してください。',
    '移動先のページの表示が遅いと、アニメーションも始まらずに待たされます。演出で遅さはごまかせないので、まずページ自体を軽くしてください。',
    '演出の時間は0.2〜0.35秒に収めてください。長くすると、移動のたびに待たされている感覚になります。見本のつまみで0.6秒以上にしてみると、その重さがよく分かります。',
    '画面全体が横に大きく動く演出は、動きが苦手な人には酔いの原因になります。prefers-reduced-motion への配慮は必ず入れてください。',
    '1ページの中で画面を入れ替える場合、入れ替えたあとの見出しにキーボードの焦点（フォーカス）を移すと、読み上げソフトを使う人にも画面が変わったことが伝わります。',
  ],
  similar: [
    {
      slug: 'preloader',
      diff: 'ローディング画面は、サイトを開いた最初の待ち時間に幕をかぶせる演出です。ページ遷移アニメーションは、ページとページの「つなぎ目」を動かします。',
    },
    {
      slug: 'fade-in',
      diff: 'スクロールでフェードインは、1ページの中で読み進めた部分を順に出す演出です。ページ遷移は、画面全体が別のページに入れ替わるときに使います。',
    },
  ],
  faq: [
    {
      q: 'View Transitions API とは何ですか？',
      a: '画面の切り替わりの前後をブラウザが自動で写し取り、その間をなめらかにつないでくれる仕組みです。以前は JavaScript のライブラリで1ページのアプリにしないと難しかった演出が、ふつうのWebサイトでもCSSを数行書くだけで作れるようになりました。',
    },
    {
      q: 'ページ遷移アニメーションはSEOに影響しますか？',
      a: '@view-transition を使う作り方なら、ページはふつうのHTMLのままなので影響はありません。注意が必要なのは、演出のためにサイト全体を JavaScript で画面を入れ替えるだけの作りにした場合で、ページごとのURLや中身が検索エンジンに伝わりにくくなることがあります。',
    },
    {
      q: 'Safari や Firefox でアニメーションしません。',
      a: '別ページ間の @view-transition が動くのは、Chrome・Edge の126以降と Safari の18.2以降です。それより古い版や、まだ対応の途中の Firefox では、ふつうに切り替わるだけです。壊れているわけではないので、そのままで問題ありません。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
