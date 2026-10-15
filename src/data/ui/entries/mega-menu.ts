import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'mega-menu',
  no: 13,
  category: 'nav',
  name: 'メガメニュー',
  en: 'Mega menu',
  aka: ['メガドロップダウン', 'グローバルメニューの大きなパネル', 'マルチカラムメニュー'],
  mode: 'script',
  title: 'メガメニューとは？ドロップダウンとの違い・作り方と使いどころ【見本つき】',
  description:
    'メガメニューを触れる見本で解説。普通のドロップダウンメニューとの違い、開くまで・閉じるまでの「待ち」の決め方、button＋aria-expandedで作るキーボード対応、スマホでの扱い、通販や大きなサイトでの使いどころまでまとめました。',
  oneLine: 'ヘッダーの項目から、見出しつきの列が並ぶ大きなパネルが開く。',
  what: [
    'ヘッダーのメニュー項目にマウスを乗せる（または押す）と、画面の横幅いっぱいの大きなパネルが開き、「エリアから」「目的から」のような見出しつきの列で、たくさんの行き先を一度に見せる部品です。見本では「宿をさがす」に乗せると少し待ってからパネルが開き、外へ出ると少し待ってから閉じます。特集の写真のような、文字以外のものも置けます。',
    '普通のドロップダウンメニューとの違いは、量と並べ方です。ドロップダウンは縦1列の短いリスト（5〜8項目）で、項目の幅に合わせた小さな箱が出ます。メガメニューは数十の行き先を列と見出しで整理し、どこに何があるかを一望させるためのものです。通販・大学・自治体・メーカーのように、ページの数が多いサイトで使われます。',
    '決まりごとは、開く項目を <button aria-expanded> にして、マウスがなくても押せば開くようにすること（乗せるだけで開く作りはタッチやキーボードで使えません）。Escキーで閉じて焦点をボタンへ戻し、パネルから焦点が出たら閉じます。マウスで開くときは「乗せてから開くまで」「外れてから閉じるまで」に少し待ちを入れ、斜めにマウスを動かした途中で閉じてしまう事故を防ぎます。',
  ],
  when: [
    '通販サイトで、カテゴリが「家電 › 冷蔵庫・洗濯機・エアコン…」のように2段に広がっているとき',
    '旅行・不動産サイトで、「エリアから」「目的から」など複数の探し方を並べて見せたいとき',
    '大学・自治体・メーカーのように、利用者の種類（受験生・在学生・企業）ごとに入口が多いサイト',
    'メニューの中に季節の特集やおすすめの写真も置いて、行き先を選ぶきっかけにしたいとき',
  ],
  avoid: [
    '行き先が10個に満たない小さなサイト（普通のドロップダウンか、横並びのメニューで足りる）',
    'スマホ（大きなパネルは入らない。ハンバーガーメニューの中のアコーディオンにする）',
    'マウスを乗せた瞬間に開き、少し外れただけで閉じる作り（ページを読むたびにパネルが邪魔をする）',
  ],
  prompt:
    'サイトのヘッダーに「メガメニュー（mega menu）」を作ってください。「宿をさがす」という項目を <button aria-expanded="false" aria-controls="…"> にし、押すか、マウスを乗せて{{delay:t}}たったら、ヘッダーの真下に横幅いっぱいのパネルを開いてください。パネルの中は「エリアから」「目的から」の見出しつきリンクの列と、特集の写真つきカードの3列にしてください。開くときは{{dur:t}}かけて上から少し下りながら不透明にし（ease-out）、後ろのページを少し暗くしてください。マウスがボタンとパネルの両方から外れたら{{grace:t}}待ってから閉じ、その間に戻ってきたら閉じないでください。Escキーで閉じて焦点をボタンへ戻し、Tabでパネルの外へ焦点が出たら閉じてください。画面幅1024px未満ではメガメニューをやめ、ハンバーガーメニューの中のアコーディオンにしてください。動きを減らす設定（prefers-reduced-motion）では動きを省いてください。',
  howTo: [
    '開く項目は <a> ではなく <button> にし、aria-expanded と aria-controls でパネルと結びます。パネルの中身はふつうのリンクの一覧（<ul>）で、列ごとに見出しを付けます。role="menu" は付けません。role="menu" はアプリの操作メニュー用で、矢印キーでしか動けない約束になり、サイトのリンク集には合わないためです。',
    'マウスの「乗せる・外れる」は pointerenter と pointerleave で受け、すぐ開閉せずに setTimeout で少し待ちます。開くまでの待ちは「通りがかっただけ」で開かないため、閉じるまでの待ちは「ボタンからパネルへ斜めに動かす途中」で閉じないためです。押したときとキーボードのときは待たずにすぐ開きます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<nav class="global-nav" aria-label="メイン">
  <ul class="nav-items">
    <li class="mega">
      <button type="button" class="mega-btn" aria-expanded="false" aria-controls="mega-stays">
        宿をさがす
      </button>
      <div id="mega-stays" class="mega-panel" hidden>
        <div class="mega-col">
          <h2>エリアから</h2>
          <ul>
            <li><a href="/area/hokkaido/">北海道</a></li>
            <li><a href="/area/kanto/">関東</a></li>
            <li><a href="/area/kansai/">関西</a></li>
          </ul>
        </div>
        <div class="mega-col">
          <h2>目的から</h2>
          <ul>
            <li><a href="/theme/onsen/">温泉が自慢</a></li>
            <li><a href="/theme/ocean/">海が見える</a></li>
            <li><a href="/theme/pet/">ペットと泊まる</a></li>
          </ul>
        </div>
        <a class="mega-feature" href="/feature/autumn/">
          <img src="autumn.jpg" alt="" width="320" height="180">
          紅葉を見に行く宿 30選
        </a>
      </div>
    </li>
    <li><a href="/deals/">特集</a></li>
  </ul>
</nav>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.global-nav { position: relative; }
.mega-btn[aria-expanded="true"] { box-shadow: inset 0 -2px 0 #f06a35; }

/* ヘッダーの真下に、横幅いっぱいで出す */
.mega-panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 24px;
  padding: 24px 32px;
  background: #fff;
  box-shadow: 0 16px 32px -16px rgb(20 24 40 / 0.35);
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out,
    display {{dur}} allow-discrete;
}
.mega-panel[hidden] { display: none; opacity: 0; transform: translateY(-6px); }
@starting-style {
  .mega-panel:not([hidden]) { opacity: 0; transform: translateY(-6px); }
}
.mega-panel h2 { font-size: 12px; color: #5d6272; }
.mega-panel a { display: block; padding: 6px 0; }

/* 狭い画面ではメガメニューを使わない（ハンバーガーの中のアコーディオンへ） */
@media (max-width: 1023px) {
  .mega-panel { position: static; grid-template-columns: 1fr; box-shadow: none; padding: 8px 16px; }
  .mega-feature { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .mega-panel { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `document.querySelectorAll('.mega').forEach((item) => {
  const btn = item.querySelector('.mega-btn');
  const panel = item.querySelector('.mega-panel');
  let timer;
  let byHover = false; // マウスを乗せて開いたか

  const set = (open) => {
    clearTimeout(timer);
    if (!open) byHover = false;
    btn.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
  };

  // 押したとき・キーボードのときはすぐ開閉
  btn.addEventListener('click', () => {
    // 乗せて開いた直後に押しても、閉じてしまわないように
    if (byHover) { byHover = false; set(true); return; }
    set(panel.hidden);
  });

  // マウスは少し待つ（通りがかりで開かない・斜めに動かす途中で閉じない）
  const wide = matchMedia('(min-width: 1024px)');
  item.addEventListener('pointerenter', (e) => {
    if (e.pointerType !== 'mouse' || !wide.matches) return;
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (panel.hidden) { set(true); byHover = true; }
    }, {{delay:n}} * 1000);
  });
  item.addEventListener('pointerleave', (e) => {
    if (e.pointerType !== 'mouse' || !wide.matches) return;
    clearTimeout(timer);
    timer = setTimeout(() => set(false), {{grace:n}} * 1000);
  });

  // Esc で閉じてボタンへ戻る。焦点が外へ出たら閉じる
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) { set(false); btn.focus(); }
  });
  item.addEventListener('focusout', (e) => {
    if (!item.contains(e.relatedTarget)) set(false);
  });
});`,
    },
  ],
  tune: [
    { key: 'delay', label: '乗せてから開くまで', min: 0, max: 0.4, step: 0.05, value: 0.15, unit: 's' },
    { key: 'grace', label: '外れてから閉じるまで', min: 0.1, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    { key: 'dur', label: '開く速さ', min: 0.1, max: 0.5, step: 0.05, value: 0.2, unit: 's' },
  ],
  cautions: [
    'マウスを乗せるだけで開く作りは、タッチ操作やキーボードでは使えません。必ず押しても開くようにし、開く項目は <button> にします。',
    '閉じるまでの待ちがないと、ボタンからパネルの右の列へ斜めにマウスを動かす途中で別の項目に触れ、パネルが切り替わってしまいます。0.2〜0.4秒の待ちが目安です。',
    'パネルの中身が多すぎると、探すのに時間がかかり、メガメニューの良さが消えます。1列あたり5〜8個、見出しで分け、全体で30個前後に収めます。',
    'パネルの中のリンクも、ページの下（フッター）や一覧ページから同じ行き先へたどれるようにしておきます。メガメニューだけが入口だと、スマホや検索から来た人がたどり着けません。',
  ],
  similar: [
    { slug: 'dropdown-menu', diff: 'ドロップダウンメニューは縦1列の短いリストを小さな箱で出します。メガメニューは数十の行き先を列と見出しで整理して一望させます。' },
    { slug: 'hamburger-menu', diff: 'ハンバーガーメニューは狭い画面でメニュー全体をしまっておく入口です。スマホではメガメニューの中身を、その中のアコーディオンに入れるのが普通です。' },
    { slug: 'sidebar', diff: 'サイドバーは行き先を画面の左に常に並べておきます。メガメニューは必要なときだけ大きく開き、読むときは邪魔をしません。' },
  ],
  faq: [
    {
      q: 'メガメニューとドロップダウンメニューの違いは何ですか？',
      a: '量と並べ方です。ドロップダウンは5〜8項目ほどの縦1列のリストで、項目の幅に合わせた小さな箱が出ます。メガメニューは横幅いっぱいのパネルに、見出しつきの列で数十の行き先を並べ、写真や特集も置けます。行き先が10個を超えて種類分けできるなら、メガメニューを検討します。',
    },
    {
      q: 'メガメニューはマウスを乗せて開くのと、押して開くのとどちらがいいですか？',
      a: '両方に対応するのが基本です。押して開く作りは必須で、そのうえでマウスのある端末だけ、乗せて少し待ったら開くようにします。乗せるだけにすると、タッチの端末やキーボードでは開けなくなります。',
    },
    {
      q: 'スマホではメガメニューをどうすればいいですか？',
      a: 'そのままでは入らないので、ハンバーガーメニューの中に入れ、「エリアから」「目的から」のような見出しを押すと開くアコーディオンにします。同じHTMLを使い、画面幅でCSSだけ切り替えると、中身を二重に管理せずに済みます。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
