import type { Ugoki } from '../types';

export default {
  slug: 'accordion',
  no: 28,
  category: 'inform',
  name: 'アコーディオン',
  en: 'Accordion',
  aka: ['アコーディオンメニュー', '開閉メニュー', '折りたたみ', 'FAQの開閉', 'トグル'],
  mode: 'script',
  title: 'アコーディオンの作り方｜details/summaryでなめらかに開閉【見本】',
  description:
    '質問を押すと答えが開くアコーディオンを動く見本で解説。details/summaryを土台に、interpolate-sizeで高さをなめらかに動かす方法、1つ開くとほかが閉じるname属性、古いブラウザでの代わりの作り方まで。',
  oneLine: '見出しを押すと、その下の答えがするっと開いて、もう一度押すと閉じる。',
  what: [
    '「よくある質問」の質問を押すと、その下に答えがなめらかに開き、右の矢印が上向きに回ります。別の質問を開くと、さっきまで開いていた答えは自動で閉じます。詳細ページの見本は、Tabキーで質問に移動し、EnterキーかSpaceキーでも開け閉めできます。',
    '長い情報を見出しだけの短い一覧にたためるので、読む人は自分に関係のある項目だけを開けます。スマホの縦に長い画面でも、ページ全体を短く保てるのが利点です。開くときに高さが一瞬で変わると、どこが開いたのか目で追えません。0.3秒かけて広げることで、答えが質問の下から出てきたと分かります。',
  ],
  when: [
    'LPや店舗サイトの「よくある質問」をまとめたいとき',
    '料金表の下に、細かい条件や注意事項を「詳しく見る」でしまっておきたいとき',
    'スマホのメニューで、カテゴリの下に小さな項目を折りたたみたいとき',
    '利用規約・募集要項など、項目が多い長い文書を見出しから引けるようにしたいとき',
  ],
  avoid: [
    'ほとんどの人が読む大事な情報（閉じたままだと読まれず、問い合わせが増える）',
    '項目が2〜3個しかなく、開いても数行で終わるとき（最初から全部見せた方が早い）',
    '中を比べながら読む情報（料金プランの比較など。1つずつしか開かないと比べられない）',
  ],
  prompt:
    'よくある質問を「アコーディオン（accordion）」にしてください。HTMLの details と summary を使い、JavaScriptは使わないでください。質問を押すと答えが{{dur:t}}で開き、閉じるときも{{dur:t}}で閉じるようにします。動きの緩急は {{ease}} にしてください。:root に interpolate-size: allow-keywords を指定し、details::details-content の height を 0 から auto へ transition させてください。details には同じ name を付けて、1つ開くとほかが閉じるようにしてください。summary の標準の三角は消し、右に下向きの矢印（SVG）を置いて、開いたら180度回します。質問の行は高さ{{row:t}}以上、キーボードの焦点が見えるようにし、動きを減らす設定の人には動きなしで開閉してください。interpolate-size に対応していないブラウザでは、動きなしで一瞬で開けば十分です。',
  howTo: [
    '土台はHTMLの details（開閉できる箱）と summary（その見出し）です。これだけで、押すと開く・もう一度押すと閉じる・キーボードのEnterやSpaceで操作できる・読み上げソフトに「折りたたみ、閉じています」と伝わる、の全部が手に入ります。同じ name を付けた details は、1つ開くとほかが自動で閉じます。',
    'なめらかに開くには、CSSの interpolate-size: allow-keywords（height: auto までの変化を計算できるようにする指定）と、details の中身の箱を指す ::details-content を使います。高さを0から auto へ transition させるだけで、JavaScriptはいりません。::details-content はもう主要なブラウザすべてで使えますが、interpolate-size はまだChrome系だけです。対応していないブラウザでは動きなしで開閉するだけなので、壊れることはありません。',
    'どのブラウザでも動かしたいときは、答えを div で包み、grid-template-rows を 0fr から 1fr へ変える方法があります（見本の一覧の小さな枠はこの方法です）。この場合は開閉の状態を JavaScript で切り替え、ボタンに aria-expanded を付けます。',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="faq">
  <details name="faq" open>
    <summary>
      チェックインは何時からですか？
      <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
    </summary>
    <p>15時から19時までです。19時を過ぎる場合は、当日のお昼までにお電話ください。</p>
  </details>
  <details name="faq">
    <summary>
      駐車場はありますか？
      <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
    </summary>
    <p>宿の正面に12台ぶんの無料駐車場があります。予約はいりません。</p>
  </details>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* height: auto までなめらかに動かせるようにする */
:root { interpolate-size: allow-keywords; }

.faq details { border-bottom: 1px solid #e4e2dc; }
.faq summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: {{row}};
  font-weight: 700;
  cursor: pointer;
  list-style: none; /* 標準の三角を消す */
}
.faq summary::-webkit-details-marker { display: none; }
.faq summary:focus-visible { outline: 2px solid #4f73d9; outline-offset: 2px; }
.faq .chev { flex: none; transition: transform 0.2s ease-out; }
.faq details[open] .chev { transform: rotate(180deg); }
.faq details p { margin: 0; padding-bottom: 12px; }

/* 開閉のなめらかな動き */
.faq details::details-content {
  height: 0;
  overflow: clip;
  transition: height {{dur}} {{ease}}, content-visibility {{dur}} allow-discrete;
}
.faq details[open]::details-content { height: auto; }

@media (prefers-reduced-motion: reduce) {
  .faq details::details-content, .faq .chev { transition: none; }
}`,
    },
  ],
  tune: [
    { key: 'dur', label: '開閉の速さ', min: 0, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    {
      key: 'ease',
      type: 'select',
      label: '動きの緩急',
      value: 'ease-out',
      options: [
        { value: 'ease-out', label: '減速して止まる（ease-out）' },
        { value: 'ease-in-out', label: 'ゆっくり出て、ゆっくり止まる（ease-in-out）' },
        { value: 'linear', label: '等速（linear）' },
        { value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', label: '少し行き過ぎて戻る（弾む）' },
      ],
    },
    { key: 'row', label: '質問の行の高さ', min: 40, max: 64, step: 4, value: 48, unit: 'px' },
  ],
  cautions: [
    '::details-content は主要なブラウザすべてで使えるようになりましたが、interpolate-size はまだ Chrome・Edge などのChrome系ブラウザだけです。それ以外のブラウザでは、なめらかに動かず一瞬で開閉するだけで、中身は問題なく読めます。',
    'summary の中にリンクやボタンを入れないでください。押したときに「開閉」と「リンクへ移動」のどちらが起きるか分からなくなり、読み上げも混乱します。',
    'div と JavaScript で自作する場合は、見出しを button にして aria-expanded（開いているか）と aria-controls（どこを開くか）を付けないと、キーボードや読み上げソフトで使えません。details/summary ならこの手間がいりません。',
    '閉じた中の文字もページ内検索で見つかるようにしたいときも details が有利です。Chromeでは、ページ内検索で閉じた details の中の語が見つかると自動で開きます。',
  ],
  similar: [
    {
      slug: 'tab-indicator',
      diff: 'タブは同じ場所の中身を切り替え、常に1つだけを見せます。アコーディオンは縦に並んだ項目をそれぞれ開け閉めし、ページの流れの中で読ませます。',
    },
    {
      slug: 'scrollspy',
      diff: '目次の現在地は、長い文書を全部見せたまま「今どこを読んでいるか」を示します。アコーディオンは文書を見出しだけにたたんで、読む部分を選ばせます。',
    },
  ],
  faq: [
    {
      q: 'details の開閉がアニメーションしないのはなぜですか？',
      a: 'details は開くと中身が一瞬で表示される作りなので、height の transition を書くだけでは動きません。interpolate-size: allow-keywords と ::details-content の height を組み合わせてください。それでも動かない場合は、そのブラウザがまだ interpolate-size に対応していない可能性があります（今のところChrome系だけです）。',
    },
    {
      q: 'アコーディオンの中の文章はSEOで評価されますか？',
      a: 'HTMLに書かれていれば、閉じていても検索エンジンは読み取れます。ただし、ページの主題になる大事な説明はたたまずに見せておく方が、読む人にも伝わりやすく安心です。',
    },
    {
      q: '1つ開いたらほかを閉じるには、JavaScriptが必要ですか？',
      a: 'いいえ。同じグループにしたい details に同じ name 属性を付けるだけで、1つ開くとほかが閉じます。古いブラウザでは全部開いたままになるだけなので、困ることはありません。',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
