# 図鑑（動きの図鑑 /ugoki/・UI部品の図鑑 /ui/・英語版 /en/motion/・/en/ui/）の作り方

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
- **演出の主役に `data-ug-focus="名前"` を付ける**（点線と名札が出る）。主役は position が static 以外であること（relative / sticky / absolute）。名札が中身に被るなら `data-ug-focus-at="below"`（下にぶら下げる）か `"left"`。overflow: hidden の要素だと名札が切れるので、その外側に付ける。
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
- 見本には CSS 変数 `--t-<key>` で届く（初期値も外側から入る）。見本の CSS は `var(--t-dur)` のように**つまみの変数を直接使う**（数値を見本の中に二重に書かない）。JavaScript で使うときは `tuneNum(el, 'key')`・`tuneStr(el, 'key')`、変わった瞬間に知りたければ `onTune(view, fn)`（いずれも runtime.ts）。
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

## 確かめ方（第2弾）

- `node scripts/check-zukan.mjs <自分のslug...>` が「問題なし」。
- `npx astro build --config astro.config.agentX.mjs` がエラー0。
- 目視: 日本語ページ・英語ページの両方、PC幅とスマホ幅、一覧（/ugoki/・/en/motion/・/ui/・/en/ui/）の小さな見本。**つまみを端から端まで動かして**見本が崩れないこと、コードと指示文の数値が変わることを確かめる。
