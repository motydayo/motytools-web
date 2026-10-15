import type { Ugoki } from '../types';

export default {
  slug: 'count-up',
  no: 25,
  category: 'inform',
  name: 'カウントアップ',
  en: 'Count-up animation',
  aka: ['数字のカウントアップ', 'カウンターアニメーション', '数字が増えるアニメーション', 'ナンバーカウンター'],
  mode: 'script',
  title: 'カウントアップとは？数字が増えるアニメーションのJS実装【見本】',
  description:
    '「導入1,280社」のような実績の数字を0から数え上げるカウントアップを、動く見本で解説。画面に入ったときに1回だけ動かす作り方、桁がガタつかない等幅数字、読み上げへの配慮、AIへの指示文までまとめました。',
  oneLine: '実績の数字が、0から目標の値まで数え上がっていく。',
  what: [
    '「導入企業 1,280社」「継続率 98.2%」のような数字が、画面に入った瞬間に0から数え上がり、最後はゆっくり止まります。見本では、ページを開いたときに上の3つが、下へスクロールして紺色の帯が見えたときに下の3つが動きます。',
    '数字は止まっている文字より目に入りやすいので、実績や規模を伝えたい場所に視線を集められます。最初は速く、最後はゆっくりにすると「ここで止まった」と分かり、最後の値が印象に残ります。数えている途中で横幅が揺れないよう、数字の幅をそろえる指定（tabular-nums）を入れているのも見どころです。',
  ],
  when: [
    'サービス紹介のLPで、導入社数・利用者数・満足度などの実績を見せたいとき',
    '会社案内や採用ページで、社員数・創業年数・拠点数などをひと目で伝えたいとき',
    '寄付やクラウドファンディングのページで、集まった金額や支援者の数を見せたいとき',
    'アプリ紹介ページで、ダウンロード数や評価の点数を目立たせたいとき',
  ],
  avoid: [
    '料金・在庫・残り時間など、正確な値をすぐ読み取りたい数字（途中の値を読んで誤解される）',
    '1画面に数字が10個以上並ぶ表やダッシュボード（全部が動くと落ち着かず、どれも読めない）',
    '根拠のはっきりしない数字（動かして目立たせるほど、問い合わせや不信の元になる）',
  ],
  prompt:
    '実績の数字を「カウントアップ（count-up animation）」にしてください。数字が画面に6割見えたら、0から目標の値まで{{dur:t}}で数え上げ、最初は速く最後はゆっくり止まる動き（ease-out。進み具合 k に 1 - (1 - k)^{{ease:n}} を掛けるカーブ）にしてください。横に並んだ数字は{{stagger:t}}ずつずらして始めます。IntersectionObserver で見えたかを調べ、動かすのは1回だけ、ライブラリは使わないでください。数字には font-variant-numeric: tabular-nums を指定し、最後の値の幅を先に確保して横にガタつかないようにしてください。3桁ごとのカンマと小数点1桁にも対応し、HTMLには最初から最後の値を書いておくこと。読み上げソフトには最後の値だけを渡し、動きを減らす設定の人には最初から最後の値を表示してください。',
  howTo: [
    'HTMLには最初から「1,280」のように最後の値を書いておきます。JavaScriptが動かない環境や検索エンジンにも正しい数字が届くからです。JavaScriptでは、まず最後の値を表示した状態で横幅を測って確保し、それから0に戻します。こうすると数字の桁が増えても、単位や周りの文字が動きません。',
    '数字が画面に入ったかは IntersectionObserver（要素が画面に入ったかを教えてくれる仕組み）で調べ、入ったら requestAnimationFrame（画面の書き換えに合わせて処理を呼ぶ仕組み）で少しずつ値を増やします。増え方に減速のカーブを掛けると、最後がゆっくり止まります。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="stats">
  <div class="stat">
    <!-- 読み上げソフトには最後の値だけを渡す -->
    <span class="visually-hidden">導入企業 1,280社</span>
    <span aria-hidden="true">
      <b class="count" data-to="1280" data-dec="0">1,280</b>社
      <small>導入企業</small>
    </span>
  </div>
  <div class="stat">
    <span class="visually-hidden">継続率 98.2%</span>
    <span aria-hidden="true">
      <b class="count" data-to="98.2" data-dec="1">98.2</b>%
      <small>継続率</small>
    </span>
  </div>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.count {
  display: inline-block;
  font-size: 32px;
  font-weight: 800;
  /* 数字の幅をそろえて、数えている途中の横揺れを防ぐ */
  font-variant-numeric: tabular-nums;
  text-align: right;
}

/* 画面には出さず、読み上げにだけ渡す文字 */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmt = (v, dec) =>
  v.toLocaleString('ja-JP', { minimumFractionDigits: dec, maximumFractionDigits: dec });
// 最後はゆっくり止まる（数が大きいほど緩急が強い。1なら等速）
const easeOut = (k) => 1 - Math.pow(1 - k, {{ease:n}});

function countUp(el, delay) {
  const to = Number(el.dataset.to);
  const dec = Number(el.dataset.dec || 0);
  const ms = {{dur:n}} * 1000;
  const start = performance.now() + delay;
  const tick = (now) => {
    const k = Math.max(0, Math.min(1, (now - start) / ms));
    el.textContent = fmt(to * easeOut(k), dec);
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const groups = document.querySelectorAll('.stats');
if (!reduce) {
  document.querySelectorAll('.count').forEach((el) => {
    // 最後の値の幅を先に確保してから0に戻す
    el.style.minWidth = el.getBoundingClientRect().width + 'px';
    el.textContent = fmt(0, Number(el.dataset.dec || 0));
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      // 並んだ数字は少しずつずらして始める
      e.target.querySelectorAll('.count').forEach((el, i) => countUp(el, i * {{stagger:n}} * 1000));
      io.unobserve(e.target); // 1回だけ
    });
  }, { threshold: 0.6 });
  groups.forEach((g) => io.observe(g));
}`,
    },
  ],
  tune: [
    { key: 'dur', label: '数え上げる時間', min: 0.4, max: 3, step: 0.1, value: 1.6, unit: 's' },
    { key: 'ease', label: '緩急の強さ（1で等速）', min: 1, max: 6, step: 1, value: 3, unit: '' },
    { key: 'stagger', label: '数字ごとのずれ', min: 0, max: 0.4, step: 0.05, value: 0.1, unit: 's' },
  ],
  cautions: [
    '数字に font-variant-numeric: tabular-nums を付けないと、「1」と「8」の幅の違いで数えている間ずっと文字が左右に揺れます。使う書体に等幅数字が入っていない場合もあるので、実際の書体で確かめてください。',
    '読み上げソフトは、動いている途中の「437」のような値を読んでしまうことがあります。動く数字には aria-hidden="true" を付け、最後の値を別の文字で渡してください。',
    'HTMLに0と書いてJavaScriptで数え上げる作り方だと、JavaScriptが失敗したとき・検索エンジンが読んだときに「0社」のままになります。最後の値を書いておき、動かすときだけ0に戻してください。',
    'スクロールのたびに何度も数え直すと、読んでいる人には落ち着きません。数えるのは最初に見えたときの1回だけにしておくのが無難です。',
  ],
  similar: [
    {
      slug: 'typewriter',
      diff: 'タイプライターは文字を1文字ずつ打ち出す演出です。カウントアップは数字の値そのものを増やしていく演出で、実績を印象づけたいときに使います。',
    },
    {
      slug: 'fade-in',
      diff: 'スクロールでフェードインは要素がふわっと現れるだけで、中身は変わりません。カウントアップも同じく画面に入ったときに始めますが、変わるのは数字の値です。',
    },
  ],
  faq: [
    {
      q: 'カウントアップの途中で数字が左右に揺れるのはなぜですか？',
      a: '多くの書体は「1」が細く「0」や「8」が太いので、値が変わるたびに全体の幅が変わるからです。font-variant-numeric: tabular-nums で数字の幅をそろえ、さらに最後の値の幅を min-width で確保しておくと揺れません。',
    },
    {
      q: 'カウントアップはjQueryやライブラリがないと作れませんか？',
      a: 'いいえ。IntersectionObserver と requestAnimationFrame を使えば、30行ほどのJavaScriptで作れます。この記事のコードはライブラリなしでそのまま動きます。',
    },
    {
      q: 'カウントアップの数字はSEOで読まれますか？',
      a: 'HTMLに最後の値を書いておけば読まれます。HTMLを0にしてJavaScriptで数え上げる作り方だと、検索エンジンやSNSの共有カードに「0」が出ることがあるので避けてください。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
