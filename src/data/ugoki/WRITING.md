# 図鑑（動きの図鑑 /ugoki/・UI部品の図鑑 /ui/・資料レイアウトの図鑑 /shiryo/・英語版 /en/motion/・/en/ui/）の作り方

LP・Webサイトでよく使う「動きの演出」を、**動く見本＋名前＋使いどころ＋作り方＋AIへの頼み方**で引ける図鑑。
1演出＝1ページ（/ugoki/<slug>/）。検索から来た人が「この動き、何て名前？どう作る？いつ使う？」を1ページで解決できることがゴール。

元ネタはX上の「LP・Webサイトの演出の名前」まとめ動画（24種）。それより**ずっと分かりやすく**するのがこの図鑑の価値:
- 見本は動画ではなく**本物のHTML/CSS/JS**。自動で動き、さらに枠の中を自分で触れる
- 「見どころ」の点線と名札で、**どこが動いているか**が一目で分かる
- 使う場面・使わない場面・似た演出との違い・そのまま貼れるAIへの指示文・コピーできるコード

## ファイル

| 置き場所 | 中身 |
|---|---|
| `src/data/ugoki/entries/<slug>.ts` | 記事の中身（型は `src/data/ugoki/types.ts` の `Ugoki`） |
| `src/components/ugoki/demos/<slug>.astro` | 動く見本（ファイル名＝slug） |
| `src/components/ugoki/UgFrame.astro` | 見本を入れるブラウザの枠・共通の見た目（.ug-site など）※触らない |
| `src/components/ugoki/Scene.astro` | 写真の代わりの「山と太陽」の絵（tone: day / sunset / night、wide） |
| `src/lib/ugoki/runtime.ts` | 見本を自動で動かす仕組み ※触らない |

**お手本**（必ず先に全部読む）:
- 記事: `entries/sticky-header.ts`
- 見本: `demos/sticky-header.astro`（scroll）、`demos/hover-lift.astro`（pointer）、`demos/marquee.astro`（loop）

## 全32種の一覧（番号・slug・名前は変えない）

| No | slug | 名前 | 英語 | category | mode |
|---|---|---|---|---|---|
| 1 | parallax | パララックススクロール | Parallax scrolling | scroll | scroll |
| 2 | fade-in | スクロールでフェードイン | Fade-in on scroll | scroll | scroll |
| 3 | sticky-header | 追従ヘッダー | Sticky header | scroll | scroll |
| 4 | pinning | ピン留め | Pinning | scroll | scroll |
| 5 | horizontal-scroll | 横スクロール | Horizontal scroll | scroll | scroll |
| 6 | scroll-snap | スクロールスナップ | Scroll snap | scroll | scroll |
| 7 | progress-bar | スクロールプログレスバー | Scroll progress bar | scroll | scroll |
| 8 | highlighter | マーカーアニメーション | Highlighter animation | scroll | scroll |
| 9 | hover-lift | ホバーで浮き上がる | Hover lift | pointer | pointer |
| 10 | image-zoom | ホバーで画像ズーム | Image zoom on hover | pointer | pointer |
| 11 | cursor-follower | マウスストーカー | Cursor follower | pointer | pointer か script |
| 12 | magnetic-button | マグネティックボタン | Magnetic button | pointer | pointer か script |
| 13 | ripple | リップルエフェクト | Ripple effect | pointer | pointer |
| 14 | underline | 下線アニメーション | Underline animation | pointer | pointer |
| 15 | before-after | ビフォーアフタースライダー | Before/after slider | pointer | script |
| 16 | exit-intent | 離脱防止ポップアップ | Exit-intent popup | pointer | script |
| 17 | preloader | ローディング画面 | Preloader | load | script |
| 18 | lazy-loading | 遅延読み込み | Lazy loading | load | scroll |
| 19 | infinite-scroll | 無限スクロール | Infinite scroll | load | scroll |
| 20 | page-transition | ページ遷移アニメーション | Page transition | load | script |
| 21 | smooth-scroll | スムーススクロール | Smooth scroll | load | script |
| 22 | marquee | マーキー | Marquee | load | loop |
| 23 | animated-gradient | グラデーションアニメーション | Animated gradient | load | loop |
| 24 | floating | ふわふわアニメーション | Floating animation | load | loop |
| 25 | count-up | カウントアップ | Count-up animation | inform | script か scroll |
| 26 | typewriter | タイプライター | Typewriter effect | inform | script |
| 27 | skeleton | スケルトンスクリーン | Skeleton screen | inform | script |
| 28 | accordion | アコーディオン | Accordion | inform | pointer か script |
| 29 | scrollspy | スクロールスパイ（目次の現在地） | Scrollspy | inform | scroll |
| 30 | toast | トースト通知 | Toast notification | inform | script |
| 31 | back-to-top | 上に戻るボタン | Back to top button | inform | scroll か script |
| 32 | tab-indicator | タブの下線スライド | Sliding tab indicator | inform | pointer か script |

`similar` に書く slug は、この表にあるものだけ。

## 見本（demos/<slug>.astro）の決まり

### 形
```astro
---
import UgFrame from '../UgFrame.astro';
import Scene from '../Scene.astro';
const { size = 'full' } = Astro.props;
---
<UgFrame mode="scroll" size={size} label="演出の名前">
  <div class="ug-site"> …小さなWebページ… </div>
</UgFrame>
<style> …この見本だけのCSS（Astroが自動で閉じ込める）… </style>
<script> …必要なときだけ… </script>
```

### 見た目
- 枠の中は「よくある明るいWebサイト」。共通部品を使ってそろえる: `.ug-site` `.ug-nav`（`.ug-logo` `.ug-cta`）`.ug-sec` `.ug-label` `.ug-h` `.ug-lines`（灰色の文章の代わり）`.ug-grid` `.ug-card` `.ug-card-body` `.ug-btn-site`、絵は `<Scene tone="day|sunset|night" wide />`。色は `--ug-orange` `--ug-blue` `--ug-navy` `--ug-sky` `--ug-ink` `--ug-ink-2` `--ug-line` `--ug-paper` `--ug-bg`。
- **サイト共通の global.css にあるクラス名（logo, cards, field, range, btn, chip, panel, num, result, steps など）を見本の中で使わない**（外側のCSSが効いて崩れる）。`node scripts/check-zukan.mjs` で確認する（sr-only は可）。
- 画像ファイル・外部ライブラリ・Webフォント追加は使わない。絵文字は使わない。アイコンはインラインSVG。
- 文字は本物らしい日本語（「山の宿」「1泊 12,000円〜」「お申し込み」）。「テスト」「Lorem ipsum」「aaa」は禁止。
- **演出の主役に `data-ug-focus="名前"` を付ける**（点線と名札が出る）。主役は position が static 以外であること（relative / sticky / absolute）。名札が中身に被るなら `data-ug-focus-at="below"`（下にぶら下げる）・`"left"`・`"bottom"`（内側の下の隅。縦いっぱいの板向け）。overflow: hidden の要素だと名札が切れるので、その外側に付ける。
- **一覧の小さな見本（size === 'mini'）には押せる要素を置かない。** カード全体が `<a>` の中に入るため、`<a>`・`<button>`・`<input>`・`<details>` は不正なHTMLになる。mini のときは span/div に差し替える（お手本: demos/hover-lift.astro の `Card`）。tabindex も付けない。
- 2つの大きさで必ず成立させる: 一覧の小さな枠（幅およそ260〜320px・高さ196px・触れない）と、詳細ページの枠（幅〜720px・高さ420px、スマホは幅約340px・高さ380px）。**小さな枠の最初の196pxで、何の演出か分かる**ようにする。狭いときは `@container (max-width: 340px)` で間引く（`.ug-view` が container）。
- 詳細ページの枠の高さ420pxに対して、中身が半分しかなく下が空く、という見本にしない（scroll系は420pxの2.5〜4倍の長さ、それ以外は枠を埋める配置）。

### 動き
- 動きの時間は、小さな変化150〜200ms、場面の出入り250〜350ms。等速（linear）はマーキーなど流し続けるものだけ。出るときは ease-out。
- `@media (prefers-reduced-motion: reduce)` を必ず入れる（動きを止めるか弱める）。マーキー・ふわふわ等の流し続ける動きは `.ug-pausable` クラスを付ける（画面外・一時停止中に止まる）。
- **見本の中のスクロール監視は window ではなく枠の中の箱**: `const view = el.closest('[data-ug-view]')` を使い、`view.addEventListener('scroll', …)`、IntersectionObserver は `{ root: view }`。
- **1ページに同じ見本が複数ある**（一覧の小さな見本と詳細ページの見本・関連欄）。`id` は使わない。スクリプトは `document.querySelectorAll('[data-demo="<slug>"]')` などで全部に対して初期化する（Astroはスクリプトを1回しか読み込まない）。
- 本物の操作（スクロール・マウス・クリック・タップ・キーボード）でも必ず動くこと。自動再生はそのおまけ。

### 自動再生（runtime.ts）
- `mode="scroll"`: 自動で少しずつ下へスクロールし、最後に上へ戻る。見本は scroll イベントに反応するだけでよい。
- `mode="pointer"`: 偽物の矢印が `data-ug-target` の要素へ順に移動し、`.is-hover` クラスを付ける（CSSは `:hover, .is-hover` の両方に書く）。`data-ug-target="click"` なら押す: その要素に `ug:click` イベント（detail は枠内の座標 {x, y}）が飛ぶ。
- `mode="loop"`: CSSで動き続ける。見えている間だけ動く（`.ug-pausable`）。
- `mode="script"`: 台本を自分で書く。
  ```ts
  import { onTour, onPointer } from '../../../lib/ugoki/runtime';
  document.querySelectorAll<HTMLElement>('[data-demo="before-after"]').forEach((root) => {
    const view = root.closest<HTMLElement>('[data-ug-view]')!;
    onPointer(view, (p, real) => { /* 本物のマウスでも偽物の矢印でも呼ばれる。p は枠内の座標 */ });
    view.addEventListener('ug:reset', () => { /* 「最初から」ボタン。最初の状態に戻す */ });
    onTour(root, async (t) => {
      // t.move(要素 か {x,y}, ms)  t.click(要素)  t.hover(要素|null)  t.scrollTo(top, ms)
      // t.sleep(ms)  t.showCursor(bool)  t.view  t.signal（中断の合図）
      // 1周分を書く。終わると最初から繰り返される。最初に状態をリセットしてから始めること
    });
  });
  ```
  利用者が枠を触ると台本は止まり、4秒触らなければ再開する（runtime がやる）。台本の途中で止まっても見本が壊れないよう、台本の頭で必ず初期状態に戻す。
- ページ遷移・ローディング画面のように「枠の中で画面が切り替わる」見本は、枠の中に2画面ぶんの要素を置いて切り替える（本当にページを移動しない）。

## 記事（entries/<slug>.ts）の決まり

- 読む人: Webサイトを作る人・AIに作らせる人・デザインを発注する人。**エンジニア1年目でも分かる日本語**。専門用語は「position: sticky（要素を途中で止めるCSSの指定）」のように初出で言い換える。
- 誇張・断定しすぎない。「必ずCVが上がる」のような根拠のない効果は書かない。数字は確かなものだけ。
- `title`: 32〜40字目安。検索される語（「とは」「作り方」「CSS」「JavaScript」「使いどころ」「見本」など）を前に。「【見本つき】」等は付けてよい。ほかの記事と型を少しずつ変え、同じ文面を量産しない。
- `description`: 80〜120字。何が分かるかを具体的に。
- `oneLine`: 40字以内、見たまんまの説明（一覧に出る）。
- `what`: 見本で何が起きているかの説明＋この演出の価値。2段落前後。
- `when`: 具体的な場面を3〜5個（「〜なとき」で終える）。業種・ページの種類が浮かぶように。
- `avoid`: 2〜4個。逆効果になる場面を正直に。
- `prompt`: ClaudeやChatGPTにそのまま貼れる指示文。**名前（日本語と英語）・付ける場所・速さ（秒）・距離（px）・使う技術（CSSだけで／IntersectionObserverで など）・動きを減らす設定への配慮**を入れる。150〜300字。
- `howTo` + `code`: 見本と同じやり方で、**そのままコピーして動く最小のコード**（HTML / CSS / JS に分ける）。ライブラリなし。古いやり方より今のやり方（position: sticky、IntersectionObserver、scroll-snap、CSSアニメーション、`loading="lazy"` など）。コードの中のコメントは日本語で短く。`prefers-reduced-motion` への配慮をコードに含める。JSは必要なときだけ。
- `cautions`: 3〜5個。表示速度・スマホ・読み上げ（スクリーンリーダー）・キーボード操作・動きを減らす設定・SEOなど、実際にハマる点。
- `similar`: 1〜3個。どう違うかを1〜2文で。
- `faq`: 3個。実際に検索されそうな質問（「〜が効かない」「〜との違い」「SEOに影響する？」「スマホでは？」など）。答えは2〜4文。
- `publishedAt: '2026-10-15'`。
- 文は「です・ます」。読点の多すぎ、同じ語尾の連続、「〜することができます」は避ける。

## 確かめ方（担当ごとに別のビルド置き場を使う。同時に dist/ を触らない）

```bash
npx astro build --config astro.config.agentX.mjs   # X は担当の記号。エラー0で通ること
```
- 見た目の確認: `npx astro preview --config astro.config.agentX.mjs --port 49NN` を裏で起動し、
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --window-size=1100,1400 --screenshot=/path/out.png --virtual-time-budget=4000 http://localhost:49NN/ugoki/<slug>/` で撮って Read で目視する。スマホ幅は `--window-size=390,1400`。一覧 `/ugoki/` も撮って小さな見本を確認する。終わったら preview を止める。
- `dist/`・他担当の slug のファイル・runtime.ts・UgFrame.astro・Scene.astro・types.ts・ページ（src/pages/ugoki/）は触らない。共通部分に足りないものがあれば、自分の見本の中で作るか、報告に書く。


---

# 第2弾（2026-10-15〜）: つまみ・英語版・UI部品の図鑑

ページのひな形は `src/components/zukan/`（ZukanArticle・ZukanIndex・ZkCard・Tuner）、本の設定は `src/data/zukan.ts`。**触らない。**
一覧ページの文章は `src/data/ugoki/hub.ts`・`src/data/ui/hub.ts`（Claude本体が書く。触らない）。
お手本（必ず全部読む）:
- 動き: `src/data/ugoki/entries/sticky-header.ts`・`entries-en/sticky-header.ts`・`src/components/ugoki/demos/sticky-header.astro`
- UI部品: `src/data/ui/entries/modal.ts`・`entries-en/modal.ts`・`src/components/ugoki/ui-demos/modal.astro`

## つまみ（数値を変えて試す）

記事に `tune`（2〜4個）を書くと、見本の下につまみが出る。動かすと**見本・コード・AIへの指示文が一緒に変わる**。
- 型は `src/data/ugoki/types.ts` の `TuneParam`（range / color / select）。
- 見本には CSS 変数 `--t-<key>` で届く（初期値も外側から入る）。見本の CSS は `var(--t-dur)` のように**つまみの変数を直接使う**（数値を見本の中に二重に書かない）。JavaScript で使うときは `tuneNum(el, 'key')`・`tuneStr(el, 'key')`、変わった瞬間に知りたければ `onTune(view, fn)`（ドラッグ中は何度も届く）、動かし終えたときだけなら `onTuneEnd(view, fn)`（いずれも runtime.ts）。撮影などの作業ファイルは作業フォルダの中の自分専用フォルダ（shots-<担当記号>/）に置く。
- `code` と `prompt` の中に差し込み口を書く: `{{key}}`（CSSに書く形 0.2s）・`{{key:n}}`（数だけ 0.2）・`{{key:t}}`（文章の形。日本語 0.2秒・英語 0.2s）。
- 選ぶつまみは**その演出・部品の見た目と気持ちよさを決める数値**（速さ・距離・大きさ・濃さ・遅れ・強さ・色）。意味のない数値は足さない。範囲は「やりすぎ」まで少し触れる程度に（例: 速さ 0.1〜0.8秒）。初期値は記事が勧める値。
- つまみの key・範囲・初期値・単位は日本語版と英語版で同じ（label だけ訳す）。

## 英語版

- `src/data/<ugoki|ui>/entries-en/<slug>.ts`。同じ型・同じ slug・no・category・mode・tune。`name` が英語名、`en` に日本語名を入れる（画面では「In Japanese」として出る）。
- **翻訳ではなく、英語圏の検索に向けて書き直す。** 英語で実際に検索される呼び名（例 sticky header / fixed header / sticky navbar）を title・aka に。title は 50〜65字、description は 140〜160字目安。米国英語。自然で簡潔なネイティブの文。コードのコメント・見本の中の文字も英語。
- 見本は `lang` を受け取り（`const { size = 'full', lang = 'ja' } = Astro.props;`）、`<UgFrame ... lang={lang}>` に渡し、中の文字を日英の辞書 `L` で切り替える（お手本の書き方）。英語版の見本の中身は英語圏のサイトらしく（通貨はドル、日付は Nov 3）。
- 日本語版にしかない事情（日本語の組版など）は英語版では英語圏の事情に置き換える。

## UI部品の図鑑（/ui/）の30種（番号・slug・名前は変えない）

| No | slug | 日本語名 | 英語名 | category | mode の目安 |
|---|---|---|---|---|---|
| 1 | modal | モーダル | Modal dialog | overlay | script（作成済み） |
| 2 | drawer | ドロワー | Navigation drawer | overlay | script |
| 3 | bottom-sheet | ボトムシート | Bottom sheet | overlay | script |
| 4 | tooltip | ツールチップ | Tooltip | overlay | pointer |
| 5 | popover | ポップオーバー | Popover | overlay | script |
| 6 | dropdown-menu | ドロップダウンメニュー | Dropdown menu | overlay | script |
| 7 | lightbox | ライトボックス | Lightbox | overlay | script |
| 8 | hamburger-menu | ハンバーガーメニュー | Hamburger menu | nav | script |
| 9 | breadcrumb | パンくずリスト | Breadcrumbs | nav | pointer |
| 10 | pagination | ページネーション | Pagination | nav | script |
| 11 | bottom-nav | タブバー（ボトムナビゲーション） | Bottom navigation bar | nav | script |
| 12 | stepper | ステップ表示（ステッパー） | Stepper (progress steps) | nav | script |
| 13 | mega-menu | メガメニュー | Mega menu | nav | pointer |
| 14 | fab | フローティングアクションボタン | Floating action button (FAB) | nav | script |
| 15 | sidebar | サイドバー | Sidebar navigation | nav | script |
| 16 | toggle-switch | トグルスイッチ | Toggle switch | input | script |
| 17 | segmented-control | セグメントコントロール | Segmented control | input | script |
| 18 | range-slider | スライダー | Range slider | input | script |
| 19 | chips | チップ | Chips (filter chips) | input | script |
| 20 | autocomplete | オートコンプリート | Autocomplete (combobox) | input | script |
| 21 | date-picker | デートピッカー | Date picker | input | script |
| 22 | quantity-stepper | 数量ステッパー | Quantity stepper | input | script |
| 23 | star-rating | 星評価 | Star rating | input | script |
| 24 | carousel | カルーセル | Carousel (slider) | display | script |
| 25 | badge | バッジ | Badge | display | script |
| 26 | empty-state | 空状態（エンプティステート） | Empty state | display | script |
| 27 | pricing-table | 料金表 | Pricing table | display | pointer |
| 28 | timeline | タイムライン | Timeline | display | scroll |
| 29 | sticky-cta | 追従CTAバー | Sticky CTA bar | display | scroll |
| 30 | cookie-banner | Cookie同意バナー | Cookie consent banner | display | script |

動きの図鑑と重なる部品（アコーディオン accordion・トースト toast・タブ tab-indicator・上に戻る back-to-top・スケルトン skeleton）は**UI部品の図鑑には作らない**。`similar` で `book: 'ugoki'` を付けて指す。

UI部品の記事は「どんな部品？」（`what`）で**似た部品との違い**と**決まりごと**（開け方・閉じ方・キーボード操作・読み上げ）を必ず書く。部品は名前ごとに「こう振る舞うのが普通」という約束があり、それを知ることが利用者の価値。HTMLにもともとある部品（dialog・details・input type=range/date・select・popover属性）があれば、まずそれを土台にしたコードにする。

## 撮影のコツ（担当から集めた知見）

- ヘッドレスChromeの `--window-size` は狙った幅にならないことがある。幅は CDP の `Emulation.setDeviceMetricsOverride` で指定する。
- 切り抜き座標は「ページ全体の座標」（スクロール量を足す）。撮る前にページのなめらかスクロールを切る。
- ヘッドレスでは本物のマウスを乗せても `:hover` が効かない。撮影では要素に `.is-hover` を付けて代用する。
- 撮影ファイルとスクリプトは作業フォルダの中の自分専用フォルダに置く（他の担当と共有しない）。
- 共通の撮影スクリプト: `node scripts/shoot-zukan.mjs <出力フォルダ> <jobs.json> [ポート]`（job は { url, w, h, name, tune: 'min'|'max'|null, wait, clip: 'demo'|'tuner'|セレクタ, js }。担当ごとにポートを変える）。

- 自動再生を止めて開くには URL に `?ugstill` を付ける（撮影が速くなる）。

## 書き方の落とし穴（担当から集めた知見）

- `@container (max-width: 340px)` は一覧の小さな見本とスマホの詳細ページの**両方**に効く。一覧だけに効かせたいときは `:global(.ug-frame.is-mini) .xxx { … }` で書く。
- JavaScript で後から入れた要素には、Astro が閉じ込めたCSS（`<style>`）が効かない。その要素の見た目は `:global(.xxx)` で書く。
- 「見どころ」の名札は主役の要素の `::after` を使う。主役の要素の `::after` を線などに使わない（使うなら data-ug-focus を外側の要素に付ける）。
- `<dialog>` の暗幕クリックで閉じる判定（`e.target === dialog`）を使うなら、dialog 自体の padding は0にして中身を内箱で包む（余白を押しても閉じてしまうため）。

## 確かめ方（第2弾）

- `node scripts/check-zukan.mjs <自分のslug...>` が「問題なし」。
- `npx astro build --config astro.config.agentX.mjs` がエラー0。
- 目視: 日本語ページ・英語ページの両方、PC幅とスマホ幅、一覧（/ugoki/・/en/motion/・/ui/・/en/ui/）の小さな見本。**つまみを端から端まで動かして**見本が崩れないこと、コードと指示文の数値が変わることを確かめる。


---

# 第3弾（2026-10-17〜）: 資料レイアウトの図鑑（/shiryo/）

スライドや資料でよく使う配置の「型」を、**見本のスライド1枚＋名前＋使いどころ＋PowerPoint・Googleスライドでの作り方＋AIへの頼み方＋HTML/CSS** で引ける図鑑。
読む人は「資料を作る会社員」と「AI（ChatGPT・Claude・Gemini・Copilot）に資料を作らせる人」。**エンジニアではない**ので、Webの言葉（CSS・コンポーネントなど）は本文でほぼ使わない。HTMLの話は「作り方」の最後の1段落とコードだけ。

## ファイル

| 置き場所 | 中身 |
|---|---|
| `src/data/shiryo/entries/<slug>.ts` | 記事の中身（型は `Ugoki`。`mode: 'static'`） |
| `src/data/shiryo/entries-en/` | 英語版（今は空。0件の間は /en/slides/ のページ・リンク・hreflang は出ない） |
| `src/data/shiryo/hub.ts` | 一覧ページの文章と4つの分類（Claude本体が書く。触らない） |
| `src/components/ugoki/shiryo-demos/<slug>.astro` | 見本のスライド（ファイル名＝slug） |
| `src/components/ugoki/SlideFrame.astro` | 見本を入れる16:9のスライドの枠・共通の文字（.sf-title など）※触らない |

**お手本**（必ず先に全部読む）: `entries/two-column.ts`＋`shiryo-demos/two-column.astro`（比較）、`bar-chart`（グラフ）、`gantt`（表と時間軸）、`problem-solution`（矢印でつなぐ）。

## 見本（shiryo-demos/<slug>.astro）の決まり

```astro
---
import SlideFrame from '../SlideFrame.astro';
const { size = 'full', lang = 'ja' } = Astro.props;
const DICT = { ja: { name: '型の名前', kicker: '…', title: '…', … } };
const T = DICT[lang as keyof typeof DICT] ?? DICT.ja;   // 英語版を作るときに en を足す
---
<SlideFrame size={size} label={T.name} page={ページ番号} lang={lang}>
  <div class="xx" data-demo="<slug>">
    <p class="sf-kicker">小見出し</p>
    <p class="sf-title">結論の1文</p>   ← 見出しタグ（h1〜h6）は使わない（記事の見出しの並びを乱すため）
    …中身…
    <p class="sf-note">※ 注記</p>
  </div>
</SlideFrame>
<style> … </style>
```

- **寸法は「幅960pxのスライド」のpxで考え、`calc(N * var(--u))` で書く。** `--u` は枠が用意する「スライド幅の1/960」。これで一覧の小さな見本でも詳細ページでも、コード（幅960px固定）と同じ比率で縮む。960×540px は PowerPoint の16:9（960pt×540pt）と同じなので、**指示文・記事では「pt」と書いてよい**（1px＝1pt）。
- 共通の文字: `.sf-kicker`（15・アクセント色）`.sf-title`（34・太字）`.sf-lead`（19）`.sf-note`（13・灰色）。色は `--sf-ink` `--sf-ink-2` `--sf-ink-3` `--sf-line` `--sf-soft` `--sf-mute`。スライドの中は**常に白い紙**（サイトのダーク表示でも白）。
- 文字の大きさの下限（960基準）: 見出し32〜36、本文・項目名16以上、数字の主役24以上、注記13。**数字は太く大きく**、等幅数字（tabular-nums）。
- 色は**アクセント1色（つまみ `accent`）＋灰色**だけ。強調は「1か所だけ」。赤（#d0453a）は「今日の線」「遅れ」など注意の意味のときだけ。
- **押せる要素（a・button・input・select・details・label）を置かない**（一覧ではカード全体が `<a>` の中に入る。詳細ページでもスライドは「見る物」）。span/div/p/dl/ul/SVG だけ。check-zukan が検査する。
- **グラフは本物の比率で描く。** 棒の高さ・長さは `calc(var(--v) / 最大 * 100%)` のように値から計算し、目盛りは0から。見た目で手書きしない。見本の中で「値が最大を超えたら throw する」行を入れておく（bar-chart.astro）。
- 組み上がりの動き（任意）: 要素に `data-sf-in`（ふわっと出る）・`data-sf-grow="y|x"`（棒が伸びる）と `style="--i: 順番"` を付けると、詳細ページで1回だけ動く。動きを減らす設定と `?ugstill` では動かない。transform を自分で使う要素には付けない。
- クラス名は slug の頭2〜3文字を前置きにする（`tc-` `bc-` `gt-` `ps-`）。global.css の名前とぶつけない（check-zukan）。
- 一覧の小さな見本（幅およそ270〜320px）は**縮小しただけ**で読めなくてよいが、型の形がひと目で分かること。詳細ページのスマホ幅では枠の下に「拡大して読む」が出る（枠がやる）。

## つまみ（2〜3個）

- 必ず `{ key: 'accent', type: 'color', label: 'アクセント色', value: '#2f5fcf' }` を1つ目に置く（初期値は全項目共通の落ち着いた青）。
- 残り1〜2個は**その型の見た目を本当に変えるもの**: 強調する場所（select）、並べ方（横／縦。select）、表示する・しない（select）、間隔・太さ（range）。項目の数のように「HTMLの要素の数が変わる」ものは、コードと指示文が追従できないので選ばない。
- **select は見本に `data-t-<key>="値"` の属性で届く**（Demo.astro が初期値を、Tuner が変更を書く）。見本のCSSは `:global([data-t-focus='right']) .tc-right { … }` のように書く。コードでは `<section class="slide" data-focus="{{focus}}">` と `.slide[data-focus="right"] …` で同じ出し分けをする。
- range は単位なし（`unit: ''`）の960基準の数にし、見本は `calc(var(--t-gap) * var(--u))`、コードは `{{gap:n}}px`、指示文は `{{gap:t}}pt`。%（棒の太さ）なら `unit: '%'` で見本・コードとも `{{bar}}` がそのまま使える。
- 指示文の select は `「{{focus:t}}」にしてください（強調するときは〜）` の形で書く（選択肢の表示名がそのまま文に入っても読めるように）。

## 記事（entries/<slug>.ts）の決まり

- `category` は kousei / data / keikaku / teian、`mode: 'static'`、`publishedAt: '2026-10-17'`（その日に書いた日付）。
- `title`: 検索される言い方を前に（「〜とは？」「〜の作り方」「PowerPoint」「Googleスライド」「見本」）。32〜45字。`description`: 110〜130字。`oneLine`: 40字以内。
- `what`（2段落）: 1段落目は見本で何がどこにあるか、2段落目はこの型の価値と「決まりごと」。
- `when` 3〜4・`avoid` 2〜3（avoid では代わりに使う型の名前を書く）。
- `prompt`: **スライド1枚ぶん**の、そのまま貼れる指示文。型の名前（日本語と英語）、上から順に何をどこに置くか、項目の数と中身（見本と同じ架空の数字を全部書く）、強調する場所、アクセント色 `{{accent:t}}` の1色だけ、文字の大きさ（pt）、注記、最後に「数字は私が書いたものだけを使い、新しい数字を足さないでください」。
- `howTo`（3段落）: ①PowerPointの具体的な手順（どのメニュー→どの図形・表・グラフ・SmartArt）②Googleスライドの手順 ③「AIにHTMLでスライドを作ってもらう場合は、下のコードがそのまま1枚のスライドになります」＋直し方の一言。**メニュー名は確かなものだけ書く**。自信がない名前は「見出しの下に2列の枠があるレイアウト」のように見た目で言い換える。
- `code`: `HTML（スライド1枚）` と `CSS` の2つ。`.slide { width: 960px; height: 540px; … }` で始まる、それだけで表示できるもの。見本と同じ配置・同じ数字。
- `cautions` 3〜4: 実際によくある失敗（目盛りを0から始めない、色を付けすぎる、項目の順番が左右でずれる、原因を飛ばす…）。
- `similar` 2〜3: **下の100種の表の slug だけ**（まだ記事が無い slug でもよい。記事が無い間は画面に出ず、できたら自動で出る）。
- `faq` 2〜3: 実際に検索される質問（「〜と〜の違い」「PowerPointで作れる？」「AIに頼むコツは？」）。
- 見本の中身（会社名・商品名・数字）は**すべて架空・オリジナル**。実在の会社や他人の図解をまねない。日本の会社の資料らしく（円・年度・部署名）。数字は記事の中で矛盾しないよう検算する（例: 月額4万円と2.5万円の差×12か月＝年18万円）。

## 確かめ方

- `node scripts/check-zukan.mjs <slug...>` が「問題なし」（100種の表との照合・押せる要素・つまみの使われ方を見る）。
- `npm run build` がエラー0。
- 撮影: `node scripts/shoot-zukan.mjs <出力フォルダ> <jobs.json> <ポート>`。URLに `?ugstill`、明るい表示は job の js に `document.documentElement.dataset.theme='light'`（ヘッドレスChromeは何もしないと暗い表示になる）。select の切り替えは `[data-zk-tuner] [data-key="focus"]` の value を変えて input を送る。見る物: 一覧の小さな見本・詳細ページ（PC・スマホ375px）・明暗・つまみの全選択肢。グラフは棒の高さを画素で測って値と比が合うか確かめる。

## 100種の一覧（番号・slug・名前・分類は変えない。* は作成済み）

<!-- shiryo-master:start -->
| No | slug | 名前 | category | 何を伝える型か |
|---|---|---|---|---|
| 1 | title-slide | タイトルスライド | kousei | 資料の題名・日付・発表者を示す表紙 |
| 2 | one-message | 1メッセージ型 | kousei | 1枚で言いたいことを1文だけ大きく見せる |
| 3 | two-column | 2カラム比較型 | kousei | 2つの案を左右に並べ同じ項目で比べる * |
| 4 | three-points | 3ポイント並列型 | kousei | 要点を3つ横に並べて見せる |
| 5 | timeline | タイムライン型 | kousei | 出来事を時間の順に1本の線に並べる |
| 6 | flow | フロー型 | kousei | 手順や流れを矢印でつなぐ |
| 7 | pyramid | ピラミッド型 | kousei | 結論を頂点に、根拠を下の段に積む |
| 8 | matrix | マトリクス型（2×2） | kousei | 2つの軸で4つの箱に分けて位置づける |
| 9 | before-after | Before／After型 | kousei | 同じものの前と後を並べて変化を見せる |
| 10 | kpi-dashboard | KPIダッシュボード型 | kousei | 大事な数字を複数のカードで一覧にする |
| 11 | case-card | 事例紹介カード型 | kousei | 1つの事例を写真・課題・成果のカードにまとめる |
| 12 | summary | まとめ型 | kousei | 話の要点を最後に箇条書きで振り返る |
| 13 | agenda | 目次型 | kousei | これから話す順番を示す |
| 14 | section-divider | セクション扉型 | kousei | 章の切り替わりを1枚で示す |
| 15 | image-left | 左図右文型 | kousei | 左に図や写真、右に説明を置く |
| 16 | full-photo | 全面写真＋帯型 | kousei | 写真を全面に敷き、帯の上に一言を置く |
| 17 | question | 問いかけ型 | kousei | 聞き手への問いを大きく置き考えてもらう |
| 18 | quote | 引用強調型 | kousei | お客さまや専門家の言葉を大きく引用する |
| 19 | big-number | 数字インパクト型 | kousei | 1つの数字を大きく見せて印象づける |
| 20 | definition | 定義カード型 | kousei | 言葉の意味をカードで定義する |
| 21 | glossary | 用語対照表型 | kousei | 用語と意味を表で対応させる |
| 22 | pros-cons | メリット・注意点型 | kousei | 1つの案のよい点と気をつける点を分ける |
| 23 | option-table | 選択肢比較表型 | kousei | 3つ以上の案を表で比べる |
| 24 | recommend | 推奨案強調型 | kousei | 複数の案のうち推奨を1つ大きく示す |
| 25 | executive-summary | エグゼクティブサマリー型 | kousei | 資料全体の結論と要点を1枚に凝縮する |
| 26 | bar-chart | 縦棒グラフ型 | data | 年度や項目ごとの数を縦の棒で比べる * |
| 27 | ranking-bar | 横棒ランキング型 | data | 項目を大きい順に横棒で並べる |
| 28 | line-chart | 折れ線推移型 | data | 数の移り変わりを線で見せる |
| 29 | stacked-bar | 積み上げ棒型 | data | 合計と内訳を1本の棒に積む |
| 30 | percent-stacked | 100%積み上げ型 | data | 内訳の割合の違いを同じ長さの棒で比べる |
| 31 | pie-chart | 円グラフ型 | data | 全体に占める割合を円で見せる |
| 32 | donut | ドーナツ内訳型 | data | 割合を輪で見せ、中央に合計を置く |
| 33 | area-chart | 面グラフ型 | data | 量の移り変わりを塗った面で見せる |
| 34 | scatter | 散布図型 | data | 2つの数の関係を点の散らばりで見せる |
| 35 | bubble | バブルチャート型 | data | 2つの数に大きさを加えた3つの関係を円で見せる |
| 36 | heatmap | ヒートマップ型 | data | 表の数の大小を色の濃さで見せる |
| 37 | radar | レーダーチャート型 | data | いくつかの観点の評価を多角形で比べる |
| 38 | waterfall | ウォーターフォール型 | data | 増減の積み重ねで最初から最後への変化を説明する |
| 39 | funnel | ファネル型 | data | 段階ごとに人数が絞られる様子を見せる |
| 40 | pareto | パレート図型 | data | 大きい順の棒と累計の線で主な原因を絞る |
| 41 | boxplot | 箱ひげ図型 | data | ばらつきと真ん中の値を比べる |
| 42 | histogram | ヒストグラム型 | data | 数の分布を区切りごとの件数で見せる |
| 43 | slope | スロープグラフ型 | data | 2時点の変化を傾きで比べる |
| 44 | dumbbell | ダンベル比較型 | data | 項目ごとの2つの値の差を点と線で見せる |
| 45 | small-multiples | スモールマルチプル型 | data | 同じ形の小さなグラフを並べて比べる |
| 46 | sparkline-table | スパークライン表型 | data | 表の各行に小さな推移の線を添える |
| 47 | target-actual | 目標・実績型 | data | 目標に対する実績の達成度を見せる |
| 48 | cohort | コホート分析型 | data | 始めた時期ごとの続き具合を表で比べる |
| 49 | map-distribution | 地図分布型 | data | 地域ごとの数を地図の上で見せる |
| 50 | annotated-chart | 注釈付きグラフ型 | data | グラフの山や谷に理由の注釈を書き込む |
| 51 | roadmap | ロードマップ型 | keikaku | 年や四半期ごとの大まかな計画を見せる |
| 52 | gantt | ガントチャート型 | keikaku | 作業の期間と重なりを横の棒で見せる * |
| 53 | milestone | マイルストーン型 | keikaku | 節目の日と決まることを時間軸に並べる |
| 54 | kanban | カンバン型 | keikaku | 作業を「未着手・作業中・完了」の列に並べる |
| 55 | swimlane | スイムレーン型 | keikaku | 担当ごとの列に分けて業務の流れを描く |
| 56 | decision-tree | 意思決定ツリー型 | keikaku | 条件の分かれ道で何を選ぶかを示す |
| 57 | cycle | 循環サイクル型 | keikaku | 繰り返す流れを輪で見せる |
| 58 | branch-merge | 分岐・合流型 | keikaku | 流れが分かれてまた合わさる様子を見せる |
| 59 | checklist | チェックリスト型 | keikaku | 確認する項目と済んだかどうかを並べる |
| 60 | raci | RACI責任分担型 | keikaku | 作業ごとに誰が実行・承認・相談・報告かを表にする |
| 61 | org-chart | 組織図型 | keikaku | 部署や人の上下の関係を木の形で見せる |
| 62 | system-diagram | システム構成型 | keikaku | 仕組みの部品とデータの流れを図にする |
| 63 | hub-spoke | ハブ＆スポーク型 | keikaku | 中心と周りの要素のつながりを放射状に見せる |
| 64 | input-output | 入出力モデル型 | keikaku | 入れるもの・処理・出てくるものを並べる |
| 65 | logic-tree | ロジックツリー型 | keikaku | 課題や原因を枝分かれで分解する |
| 66 | fishbone | フィッシュボーン型 | keikaku | 結果に効いている原因を骨の形で洗い出す |
| 67 | causal-loop | 因果ループ型 | keikaku | 原因と結果がぐるぐる影響し合う様子を見せる |
| 68 | venn | ベン図型 | keikaku | 重なる部分と重ならない部分を円で見せる |
| 69 | layer | レイヤー構造型 | keikaku | 上下に積み重なる層の関係を見せる |
| 70 | value-chain | 価値連鎖型 | keikaku | 仕入れから販売までの活動のつながりを見せる |
| 71 | service-blueprint | サービスブループリント型 | keikaku | お客さまの行動と裏側の業務を上下に対応させる |
| 72 | customer-journey | カスタマージャーニー型 | keikaku | お客さまの行動と気持ちの移り変わりを並べる |
| 73 | stakeholder | ステークホルダー型 | keikaku | 関係者を影響の大きさと関心の高さで位置づける |
| 74 | risk-register | リスク登録簿型 | keikaku | 起こりうる問題と影響・対策を表にする |
| 75 | dependency | 依存関係ネットワーク型 | keikaku | 作業や部品の「これが済まないとあれができない」を線でつなぐ |
| 76 | problem-solution | 課題・原因・解決型 | teian | 課題・原因・解決策を矢印でつなぐ * |
| 77 | as-is-to-be | 現状・理想・差分型 | teian | 今の姿と目指す姿の差と、埋める打ち手を示す |
| 78 | hypothesis | 仮説・検証・学び型 | teian | 試したこと・結果・分かったことを並べる |
| 79 | claim-evidence | 主張・根拠・示唆型 | teian | 言いたいこと・支える事実・その意味を並べる |
| 80 | storyboard | ストーリーボード型 | teian | 場面を絵コンテのように順に並べる |
| 81 | gallery | 画像ギャラリー型 | teian | 複数の写真や画面をそろえて並べる |
| 82 | screen-annotation | スクリーン注釈型 | teian | 画面の写しに番号と説明を書き込む |
| 83 | steps | 操作手順型 | teian | 操作を番号つきの手順で見せる |
| 84 | exploded | 製品分解図型 | teian | 製品の部品をばらして名前を添える |
| 85 | persona | ペルソナ型 | teian | 想定するお客さまの人物像を1枚にまとめる |
| 86 | interview | インタビュー抜粋型 | teian | 聞き取りで出た声を抜き出して並べる |
| 87 | testimonial | 顧客の声＋成果型 | teian | お客さまの言葉と数字の成果を並べる |
| 88 | case-compare | ケース横断比較型 | teian | いくつかの事例を同じ項目で比べる |
| 89 | pricing | 価格プラン型 | teian | 料金プランを並べておすすめを示す |
| 90 | cost-breakdown | コスト内訳型 | teian | 費用の合計と内訳を見せる |
| 91 | roi | ROI試算型 | teian | かけるお金と戻ってくるお金を比べる |
| 92 | priority | 優先順位リスト型 | teian | やることを大事な順に並べる |
| 93 | resource | リソース配分型 | teian | 人やお金をどこに何割使うかを見せる |
| 94 | agreed-open | 合意事項・未決事項型 | teian | 決まったことと、まだ決まっていないことを分ける |
| 95 | action-list | アクション一覧型 | teian | 誰が・何を・いつまでにやるかを表にする |
| 96 | approval | 決裁依頼型 | teian | 決めてほしいこと・費用・期限を1枚で示す |
| 97 | faq | FAQ型 | teian | よく聞かれる質問と答えを並べる |
| 98 | sources | 出典・参考資料型 | teian | 使った資料や数字の出どころを一覧にする |
| 99 | qa-slide | Q&A型 | teian | 質問を受け付ける時間を示す |
| 100 | next-step | 問い合わせ・次の一歩型 | teian | 聞き手に次にしてほしい行動と連絡先を示す |
<!-- shiryo-master:end -->
