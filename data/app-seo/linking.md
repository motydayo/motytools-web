# 内部リンク設計（アプリ誘導記事 120本）

記事の一覧は `data/app-seo/plan.json`、記事ごとの指示は `data/app-seo/briefs/<app>/<slug>.md`、書き方の基準は `src/content/guide/WRITING.md`。この文書は「どこからどこへリンクを張るか」だけを決める。

## 1. 全体の流れ

```
検索 ──> 記事 /guide/<slug>/ ──> アプリのLP（/recipescrap/ など）──> App Store
          │  ↑                      ↑
          │  └─ 同じアプリの記事どうし（柱 ⇄ 周辺）
          │                         │
          └─ 関連ツール /tedori/ など ─┘（ツール → 記事 → LP）
```

- **記事 → LP**: 本文でアプリ名が初めて出るところに1回だけ、アプリ名にLPへのリンクを張る（`apps.ts` の `lpPath`）。
- **記事 → App Store**: 本文には直接張らない。`[[app]]` の誘導ブロックと、記事末尾に自動で付く誘導ブロックのバッジに任せる。
- **LP → App Store**: 各LPのダウンロードボタン（既存）。
- **LP → 記事**: 各LPの「関連する記事」から `/guide/app/<slug>/`（既存）。
- **記事 → 記事**: 下の3章と5章の表のとおり。
- **ツール → 記事**: 4章（提案。ツールページの担当が判断する）。

## 2. 記事どうしのリンクの決まり

1. **柱と周辺**: アプリごとに「柱の記事」（比較記事か、一番大きな悩みの記事）を1〜2本決める（5章）。周辺の記事はすべて、本文中で柱の記事に1回リンクする。柱の記事は、公開済みの周辺の記事に文脈の合う所から張る（全部を末尾に並べない）。
2. **1記事から張る記事リンクは本文中に2〜4本**。表の「本文から張る先」を基本に、文脈が合わない物は省いてよい。記事末尾の「関連記事」一覧は自動で付くので、本文では文脈で張る。
3. **リンクの文字（アンカーテキスト）は、リンク先の主要語に近い言葉にする**。「こちら」「この記事」は使わない。
   - 良い例: 「[TikTokのレシピを保存する方法](/guide/tiktok-recipe-hozon/)も同じ考え方で使えます」
   - 悪い例: 「詳しくは[こちら](/guide/tiktok-recipe-hozon/)」
4. **未公開の記事には張らない**。リンク先がまだ無いときは張らずに公開し、リンク先が公開された日に戻って足す（足したら `updatedAt` を更新）。
5. **他アプリの記事へのリンクは、読者の次の疑問に本当に答える時だけ、1記事に1本まで**（5章の「他アプリ・ツールへ」列）。
6. **主要語の食い合いを防ぐ**: 下の組は内容が近いので、どちらの記事でも相手の主要語で長く説明しない。触れるときは1〜2文で要点を言い、相手の記事へリンクして任せる。

| 組 | 分け方 |
|---|---|
| `instagram-recipe-hozon`（インスタ レシピ 保存）と `instagram-hozon-seiri`（インスタ 保存 整理） | 前者はレシピを残す方法の比較、後者はインスタの保存済み全般の整理手順 |
| `recipe-seiri-houhou`（レシピ 整理 の仕方）と `recipe-note-app`（レシピ ノート アプリ） | 前者は散らばったレシピをまとめる手順、後者はスマホで自分のレシピ帳を作る |
| `reizoko-amarimono-app` と `kondate-app-hikaku` | 前者は食材から1品を探すアプリ、後者は献立を組むアプリ |
| `amarimono-recipe-kantan` と `arumono-ryori-kotsu` | 前者はレシピ（組み合わせ表）、後者は考え方（型） |
| `rolling-stock-kanri` と `hijoushoku-kigen-kanri` | 前者は普段の食品を回す方法、後者は長期保存の非常食の期限 |
| `shomikigen-kanrihyo` と `reizoko-zaiko-kanri` | 前者はエクセル表の作り方、後者は管理方法4つの比較 |
| `yachin-kanri-excel-app`（公開済み）と `yachin-kanrihyo-template` | 前者はエクセルからアプリへ移る手順、後者は表を作る手順 |
| `ooya-kakuteishinkoku` と `fudousan-shotoku-chobo` | 前者は申告の流れ、後者は帳簿のつけ方 |
| `gessha-kanrihyo-excel` と `seito-kanri-kojin` | 前者は月謝の入金表、後者は生徒台帳 |
| `furikae-lesson-rule` と `furikae-mail-bunrei` | 前者はルールの決め方、後者は連絡の文例 |
| `handmade-nedan-kimekata` と `handmade-rieki-ritsu` と `handmade-genka-keisan` | 値段（売値の決め方）／利益率（結果の評価）／原価（材料費の出し方） |
| `handmade-uriage-kanri` と `handmade-tanaoroshi` | 前者は日々の売上表、後者は年末の棚卸し |
| `minne-tesuryo-keisan`・`creema-tesuryo-keisan` と `handmade-hanbai-site-hikaku` | 前2本は各サイトの計算、後者は販路選び |
| `barcode-saiyasune-app` と `kakaku-hikaku-site` | 前者は店頭でバーコード、後者は家で比べるサイト |
| `nichiyouhin-matomegai` と `drugstore-kakaku-hikaku` | 前者はどこで買うか、後者は店頭で比べる手順 |
| `fushinsha-joho-map` と `fushinsha-joho-mail` | 前者は地図（これまで）、後者はメール配信（これから） |
| `jibun-ni-mail-iphone` と `memo-mail-okuru-iphone` | 前者は自分宛てメール全般、後者は標準メモアプリのメモを送る手順 |
| `jibun-ate-mail-todokanai` と `jibun-ate-mail-furiwake` | 前者は届かない時の確認、後者は届いたメールの整理 |
| `hachurui-shiiku-kiroku-app` と `hachurui-shiiku-note` | 前者はアプリ比較、後者は記録の項目とつけ方 |
| `leopa-esa-hindo` と `leopa-esa-tabenai` | 前者は通常時の目安、後者は食べない時の確認 |

## 3. 公開の順番とリンクの足し方

1. 優先度1（各アプリ3〜5本）を先に公開する。柱の記事を最初に出す。
2. 優先度2、3の順に出す。新しい記事を出すたびに、柱の記事と、表で「この記事へ張る」と決まっている公開済みの記事に戻ってリンクを足す。
3. 1つのアプリの記事が6本を超えると、記事ページ下の自動の「関連記事」（同じアプリの新しい順6本）から古い記事が外れる。柱の記事から周辺の記事へ本文でリンクしておくことで、古い記事にもリンクが届くようにする。

## 4. ツールページ → 記事（提案）

ツールページ（`src/pages/<tool>/`）には今、アプリへの導線（`src/data/tools.ts` の `APP_PROMOS`）だけがある。ツールの利用者と記事の読者が本当に重なる組み合わせだけ、「関連する記事」を1〜2本足すことを提案する（実装はツールページの担当が判断する。迷う組み合わせは足さない）。

| ツール | 張る記事（公開後） | 理由 |
|---|---|---|
| `/genka-shokyaku/`（減価償却） | `genka-shokyaku-fudousan`、`fudousan-shotoku-keihi` | 建物の減価償却を調べる人はほぼ大家。既存のアプリ導線（大家ノート）と同じ層 |
| `/loan/`（住宅ローン） | `chintai-shushi-keisan`、`rimawari-keisan` | 借入の返済を調べる人のうち、賃貸の収支を見たい層 |
| `/percent/`（パーセント計算） | `handmade-nedan-kimekata`、`tanka-hikaku-keisan` | 手数料・割引・単価の計算をする人。既存の導線はピッと最安 |
| `/days/`（日数計算） | `shomikigen-kanrihyo`、`gessha-hiwari-keisan` | 期限まで何日、月途中の日割り |
| `/eigyobi/`（営業日計算） | `yachin-nyukin-kakunin` | 支払期日の翌営業日を数える大家 |
| `/tedori/`（手取り計算） | `handmade-kakuteishinkoku-ikurakara` | 副業の所得と税を気にする層 |

記事側からツールへは、各設計書の「内部リンク」にあるツールに、計算の手順を書いた所から1回張る。

## 5. アプリ別のリンク表

- 「本文から張る先」は設計書の内部リンクと同じ。「（柱）」はこの文書の決まりで足した柱の記事へのリンク。
- 「他アプリ・ツールへ」は1記事に1本ずつまで（ツールは計算の文脈がある時だけ）。

### レシピスクラップ（`recipescrap`）　LP: /recipescrap/

- 柱の記事: `recipe-hozon-app-hikaku` / `instagram-recipe-hozon`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `instagram-recipe-hozon` | 公開済み | recipe-hozon-app-hikaku | — |
| `tiktok-recipe-hozon` | 1 | instagram-recipe-hozon, youtube-recipe-hozon, recipe-hozon-app-hikaku, recipe-seiri-houhou | — |
| `youtube-recipe-hozon` | 2 | tiktok-recipe-hozon, instagram-recipe-hozon, recipe-hozon-app-hikaku | — |
| `recipe-hozon-app-hikaku` | 1 | instagram-recipe-hozon, tiktok-recipe-hozon, recipe-note-app, recipe-hozon-jougen | — |
| `recipe-screenshot-seiri` | 1 | instagram-recipe-hozon, recipe-seiri-houhou, recipe-note-app, recipe-hozon-app-hikaku（柱） | — |
| `recipe-note-app` | 2 | recipe-seiri-houhou, recipe-hozon-app-hikaku, recipe-screenshot-seiri | — |
| `recipe-seiri-houhou` | 2 | recipe-note-app, recipe-screenshot-seiri, instagram-hozon-seiri, recipe-bookmark, recipe-hozon-app-hikaku（柱） | — |
| `instagram-hozon-seiri` | 2 | instagram-recipe-hozon, recipe-seiri-houhou, instagram-recipe-kensaku, recipe-hozon-app-hikaku（柱） | — |
| `instagram-recipe-comment` | 1 | instagram-recipe-hozon, instagram-recipe-kensaku, instagram-hozon-seiri, recipe-hozon-app-hikaku（柱） | — |
| `instagram-recipe-kensaku` | 2 | instagram-recipe-hozon, instagram-recipe-comment, instagram-hozon-seiri, recipe-hozon-app-hikaku（柱） | — |
| `recipe-bookmark` | 3 | recipe-seiri-houhou, recipe-hozon-app-hikaku, recipe-hozon-jougen | — |
| `instagram-recipe-insatsu` | 2 | instagram-recipe-hozon, recipe-screenshot-seiri, instagram-recipe-comment, recipe-hozon-app-hikaku（柱） | — |
| `recipe-hozon-jougen` | 2 | recipe-hozon-app-hikaku, recipe-bookmark, recipe-seiri-houhou | — |

### あるものレシピ（`arumono-recipe`）　LP: /arumono-recipe/

- 柱の記事: `reizoko-amarimono-app` / `arumono-ryori-kotsu`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `reizoko-amarimono-app` | 1 | zairyo-kara-recipe-kensaku, reizoko-recipe-ai, kondate-app-hikaku, arumono-ryori-kotsu | — |
| `zairyo-kara-recipe-kensaku` | 1 | reizoko-amarimono-app, reizoko-recipe-ai, arumono-ryori-kotsu | — |
| `reizoko-recipe-ai` | 2 | reizoko-amarimono-app, zairyo-kara-recipe-kensaku, kondate-reizoko | — |
| `arumono-ryori-kotsu` | 1 | amarimono-recipe-kantan, kondate-reizoko, reizoko-amarigachi-shokuzai, reizoko-amarimono-app | — |
| `amarimono-recipe-kantan` | 2 | amari-yasai-recipe, amarimono-gohan-recipe, arumono-ryori-kotsu, reizoko-amarimono-app（柱） | — |
| `amari-yasai-recipe` | 2 | amarimono-recipe-kantan, reizoko-amarigachi-shokuzai, reizoko-amarimono-app（柱） | reitou-hozon-kigen（pitto-kigen） |
| `reizoko-amarigachi-shokuzai` | 2 | amari-yasai-recipe, arumono-ryori-kotsu, reizoko-amarimono-app（柱） | reizoko-zaiko-kanri（pitto-kigen） |
| `kondate-reizoko` | 2 | arumono-ryori-kotsu, kondate-app-hikaku, reizoko-recipe-ai, reizoko-amarimono-app（柱） | — |
| `amarimono-gohan-recipe` | 3 | amarimono-recipe-kantan, nokorimono-remake, reizoko-amarimono-app（柱） | — |
| `amarimono-pasta` | 3 | amarimono-recipe-kantan, amari-yasai-recipe, reizoko-amarimono-app（柱） | — |
| `nokorimono-remake` | 3 | amarimono-gohan-recipe, amarimono-recipe-kantan, reizoko-amarimono-app（柱） | — |
| `kondate-app-hikaku` | 2 | reizoko-amarimono-app, kondate-reizoko, reizoko-recipe-ai | — |

### ピッと期限（`pitto-kigen`）　LP: /pitto-kigen/

- 柱の記事: `shomikigen-kanri-app` / `reizoko-zaiko-kanri`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `shomikigen-barcode` | 1 | shomikigen-kanri-app, reizoko-zaiko-kanri, shomikigen-kanrihyo | — |
| `shomikigen-kanri-app` | 1 | shomikigen-barcode, reizoko-kazoku-kyoyu, reizoko-zaiko-kanri, shomikigen-kanrihyo | — |
| `reizoko-zaiko-kanri` | 1 | shomikigen-kanri-app, reizoko-kazoku-kyoyu, kaisugi-boushi, shomikigen-kanrihyo | — |
| `shomikigen-kanrihyo` | 2 | reizoko-zaiko-kanri, shomikigen-kanri-app, rolling-stock-kanri | /days/ |
| `rolling-stock-kanri` | 1 | hijoushoku-kigen-kanri, shomikigen-kanrihyo, shomikigen-kanri-app | — |
| `hijoushoku-kigen-kanri` | 2 | rolling-stock-kanri, reizoko-kazoku-kyoyu, shomi-shohi-chigai, shomikigen-kanri-app（柱） | — |
| `reizoko-kazoku-kyoyu` | 1 | reizoko-zaiko-kanri, shomikigen-kanri-app, kaisugi-boushi | — |
| `shomi-shohi-chigai` | 3 | chomiryo-kaifugo-kigen, shomikigen-kanri-app, shokuhin-loss-katei | — |
| `chomiryo-kaifugo-kigen` | 2 | shomi-shohi-chigai, shomikigen-kanri-app, reitou-hozon-kigen | — |
| `reitou-hozon-kigen` | 2 | chomiryo-kaifugo-kigen, reizoko-zaiko-kanri, shomikigen-kanri-app | — |
| `kaisugi-boushi` | 2 | reizoko-kazoku-kyoyu, reizoko-zaiko-kanri, shokuhin-loss-katei, shomikigen-kanri-app（柱） | — |
| `shokuhin-loss-katei` | 3 | kaisugi-boushi, shomi-shohi-chigai, reizoko-zaiko-kanri, shomikigen-kanri-app（柱） | — |

### 大家ノート（`ooya-note`）　LP: /ooya-note/

- 柱の記事: `yachin-kanri-app-hikaku` / `yachin-kanri-excel-app`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `yachin-kanri-excel-app` | 公開済み | yachin-kanri-app-hikaku | — |
| `yachin-kanri-app-hikaku` | 1 | yachin-kanri-excel-app, yachin-kanrihyo-template, ooya-kakuteishinkoku, jishu-kanri-ooya | /genka-shokyaku/, /loan/ |
| `yachin-kanrihyo-template` | 1 | yachin-kanri-excel-app, yachin-nyukin-kakunin, yachin-kanri-app-hikaku | — |
| `ooya-kakuteishinkoku` | 2 | fudousan-shotoku-keihi, fudousan-shotoku-chobo, genka-shokyaku-fudousan, yachin-kanri-app-hikaku | /genka-shokyaku/ |
| `fudousan-shotoku-keihi` | 2 | ooya-kakuteishinkoku, genka-shokyaku-fudousan, fudousan-shotoku-chobo, yachin-kanri-app-hikaku（柱） | /genka-shokyaku/ |
| `yachin-tainou-taiou` | 2 | yachin-nyukin-kakunin, jishu-kanri-ooya, yachin-kanri-app-hikaku | — |
| `jishu-kanri-ooya` | 2 | keiyaku-koushin-kanri, yachin-tainou-taiou, yachin-kanri-app-hikaku | — |
| `keiyaku-koushin-kanri` | 2 | jishu-kanri-ooya, yachin-kanri-app-hikaku, yachin-kanrihyo-template | — |
| `yachin-nyukin-kakunin` | 1 | yachin-kanrihyo-template, yachin-tainou-taiou, yachin-kanri-excel-app, yachin-kanri-app-hikaku（柱） | /eigyobi/ |
| `chintai-shushi-keisan` | 2 | rimawari-keisan, genka-shokyaku-fudousan, fudousan-shotoku-keihi, yachin-kanri-app-hikaku（柱） | /loan/, /genka-shokyaku/ |
| `rimawari-keisan` | 3 | chintai-shushi-keisan, genka-shokyaku-fudousan, yachin-kanri-app-hikaku（柱） | /percent/, /loan/ |
| `genka-shokyaku-fudousan` | 2 | fudousan-shotoku-keihi, ooya-kakuteishinkoku, chintai-shushi-keisan, yachin-kanri-app-hikaku（柱） | /genka-shokyaku/ |
| `fudousan-shotoku-chobo` | 3 | ooya-kakuteishinkoku, fudousan-shotoku-keihi, yachin-kanrihyo-template, yachin-kanri-app-hikaku（柱） | — |

### レッスン手帳（`lesson-techo`）　LP: /apps/lesson-techo/

- 柱の記事: `gessha-kanri-app` / `furikae-lesson-rule`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `gessha-kanri-app` | 1 | furikae-lesson-rule, gessha-kanrihyo-excel, gessha-shukin-houhou, seito-kanri-kojin | — |
| `gessha-kanrihyo-excel` | 1 | gessha-kanri-app, seito-kanri-kojin, gessha-hiwari-keisan | — |
| `furikae-lesson-rule` | 1 | furikae-mail-bunrei, gessha-kanri-app, lesson-kiroku-karte | — |
| `gessha-mibarai-saisoku` | 1 | gessha-shukin-houhou, gessha-kanri-app, gessha-kanrihyo-excel | — |
| `gessha-shukin-houhou` | 2 | gessha-mibarai-saisoku, gessha-kanri-app, gessha-kakuteishinkoku | — |
| `piano-gessha-souba` | 2 | gessha-neage-oshirase, gessha-kanri-app, gessha-kakuteishinkoku | — |
| `seito-kanri-kojin` | 2 | gessha-kanrihyo-excel, lesson-kiroku-karte, gessha-kanri-app | — |
| `lesson-kiroku-karte` | 2 | seito-kanri-kojin, furikae-lesson-rule, gessha-kanri-app | — |
| `gessha-kakuteishinkoku` | 2 | gessha-shukin-houhou, gessha-kanrihyo-excel, piano-gessha-souba, gessha-kanri-app（柱） | /tedori/ |
| `gessha-neage-oshirase` | 2 | piano-gessha-souba, gessha-kanri-app, gessha-kanrihyo-excel | — |
| `gessha-hiwari-keisan` | 3 | gessha-kanrihyo-excel, furikae-lesson-rule, gessha-kanri-app（柱） | /days/, /percent/ |
| `furikae-mail-bunrei` | 3 | furikae-lesson-rule, gessha-mibarai-saisoku, gessha-kanri-app（柱） | — |

### つくログ（`tsukulog`）　LP: /apps/tsukulog/

- 柱の記事: `handmade-nedan-kimekata` / `handmade-zaiko-kanri`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `handmade-nedan-kimekata` | 1 | handmade-genka-keisan, handmade-rieki-ritsu, minne-tesuryo-keisan, accessory-genka-keisan | /percent/ |
| `handmade-genka-keisan` | 1 | handmade-nedan-kimekata, handmade-zaiko-kanri, accessory-genka-keisan | — |
| `minne-tesuryo-keisan` | 1 | creema-tesuryo-keisan, handmade-hanbai-site-hikaku, handmade-nedan-kimekata | /percent/ |
| `creema-tesuryo-keisan` | 1 | minne-tesuryo-keisan, handmade-hanbai-site-hikaku, handmade-nedan-kimekata | /percent/ |
| `handmade-hanbai-site-hikaku` | 2 | minne-tesuryo-keisan, creema-tesuryo-keisan, handmade-uriage-kanri, handmade-nedan-kimekata（柱） | /percent/ |
| `handmade-kakuteishinkoku-ikurakara` | 1 | handmade-keihi, handmade-tanaoroshi, handmade-uriage-kanri, handmade-nedan-kimekata（柱） | /tedori/ |
| `handmade-keihi` | 2 | handmade-kakuteishinkoku-ikurakara, handmade-tanaoroshi, handmade-genka-keisan, handmade-nedan-kimekata（柱） | — |
| `handmade-zaiko-kanri` | 1 | handmade-genka-keisan, handmade-tanaoroshi, handmade-uriage-kanri, handmade-nedan-kimekata（柱） | — |
| `handmade-uriage-kanri` | 1 | handmade-hanbai-site-hikaku, handmade-kakuteishinkoku-ikurakara, handmade-zaiko-kanri, handmade-nedan-kimekata（柱） | — |
| `handmade-tanaoroshi` | 2 | handmade-kakuteishinkoku-ikurakara, handmade-keihi, handmade-zaiko-kanri, handmade-nedan-kimekata（柱） | — |
| `handmade-rieki-ritsu` | 2 | handmade-nedan-kimekata, handmade-genka-keisan, accessory-genka-keisan | /percent/ |
| `accessory-genka-keisan` | 2 | handmade-genka-keisan, handmade-nedan-kimekata, handmade-rieki-ritsu | — |

### ピッと最安（`price-scan`）　LP: /price-scan/

- 柱の記事: `barcode-saiyasune-app` / `nichiyouhin-matomegai`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `barcode-saiyasune-app` | 1 | jan-code-kensaku, net-tento-kakaku, rakuten-yahoo-hikaku, kakaku-hikaku-site | /percent/ |
| `jan-code-kensaku` | 1 | barcode-saiyasune-app, net-tento-kakaku | shomikigen-barcode（pitto-kigen） |
| `net-tento-kakaku` | 2 | barcode-saiyasune-app, net-yasuku-kau, rakuten-yahoo-hikaku | — |
| `rakuten-yahoo-hikaku` | 2 | barcode-saiyasune-app, kakaku-hikaku-site, rakuten-saiyasune | — |
| `kakaku-hikaku-site` | 2 | barcode-saiyasune-app, rakuten-yahoo-hikaku, net-yasuku-kau | — |
| `nichiyouhin-matomegai` | 1 | drugstore-kakaku-hikaku, tanka-hikaku-keisan, barcode-saiyasune-app | /percent/ |
| `drugstore-kakaku-hikaku` | 2 | nichiyouhin-matomegai, barcode-saiyasune-app, super-kakaku-hikaku | — |
| `super-kakaku-hikaku` | 3 | drugstore-kakaku-hikaku, nichiyouhin-matomegai, tanka-hikaku-keisan, barcode-saiyasune-app（柱） | — |
| `rakuten-saiyasune` | 3 | rakuten-yahoo-hikaku, jan-code-kensaku, barcode-saiyasune-app | /percent/ |
| `net-yasuku-kau` | 2 | net-tento-kakaku, kakaku-hikaku-site, rakuten-saiyasune, barcode-saiyasune-app（柱） | — |
| `tanka-hikaku-keisan` | 3 | nichiyouhin-matomegai, super-kakaku-hikaku, barcode-saiyasune-app（柱） | /percent/ |
| `yahoo-saiyasune-hyouji` | 3 | rakuten-yahoo-hikaku, rakuten-saiyasune, barcode-saiyasune-app（柱） | — |

### まちの安全マップ（`machi-anzen-map`）　LP: /machi-anzen-map/

- 柱の記事: `hikkoshi-chian-shirabekata` / `fushinsha-joho-map`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `hikkoshi-chian-shirabekata` | 1 | hanzai-hassei-map, fushinsha-joho-map, koutsujiko-tashuu, tochi-mukashi-shirabekata | — |
| `fushinsha-joho-map` | 1 | fushinsha-joho-mail, koegake-jian, tsugakuro-anzen-tenken, hikkoshi-chian-shirabekata（柱） | — |
| `fushinsha-joho-mail` | 1 | fushinsha-joho-map, kodomo-bouhan-tsugakuro, bouhan-app-hikaku, hikkoshi-chian-shirabekata（柱） | — |
| `koutsujiko-tashuu` | 1 | tsugakuro-anzen-tenken, hikkoshi-chian-shirabekata | — |
| `tsugakuro-anzen-tenken` | 2 | koutsujiko-tashuu, kodomo-bouhan-tsugakuro, fushinsha-joho-map, hikkoshi-chian-shirabekata（柱） | — |
| `hanzai-hassei-map` | 2 | hikkoshi-chian-shirabekata, fushinsha-joho-map, koutsujiko-tashuu | — |
| `shokuchudoku-joho` | 1 | gyosei-shobun-shirabekata, hikkoshi-chian-shirabekata | — |
| `tochi-mukashi-shirabekata` | 1 | hikkoshi-chian-shirabekata, koutsujiko-tashuu | — |
| `koegake-jian` | 2 | fushinsha-joho-map, kodomo-bouhan-tsugakuro, hikkoshi-chian-shirabekata（柱） | — |
| `kodomo-bouhan-tsugakuro` | 2 | tsugakuro-anzen-tenken, fushinsha-joho-mail, koegake-jian, hikkoshi-chian-shirabekata（柱） | — |
| `gyosei-shobun-shirabekata` | 3 | shokuchudoku-joho, hikkoshi-chian-shirabekata | — |
| `bouhan-app-hikaku` | 2 | fushinsha-joho-mail, hikkoshi-chian-shirabekata, kodomo-bouhan-tsugakuro | — |

### メモびゅん（`memomail`）　LP: /memomail/

- 柱の記事: `jibun-ni-mail-iphone` / `captio-kawari`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `jibun-ni-mail-iphone` | 1 | captio-kawari, memo-mail-okuru-iphone, jibun-ate-mail-furiwake | — |
| `captio-kawari` | 1 | jibun-ni-mail-iphone, idea-memo-app, obsidian-iphone-memo | — |
| `memo-mail-okuru-iphone` | 1 | jibun-ni-mail-iphone, iphone-memo-pc-kyoyu | — |
| `iphone-memo-pc-kyoyu` | 1 | memo-mail-okuru-iphone, jibun-ni-mail-iphone, obsidian-iphone-memo | — |
| `jibun-line-memo-hikaku` | 2 | jibun-ni-mail-iphone, idea-memo-app | — |
| `idea-memo-app` | 2 | captio-kawari, memo-wasure-boushi, memo-shukan, jibun-ni-mail-iphone（柱） | — |
| `memo-wasure-boushi` | 2 | memo-shukan, idea-memo-app, jibun-ni-mail-iphone | — |
| `jibun-ate-mail-todokanai` | 2 | jibun-ate-mail-furiwake, jibun-ni-mail-iphone | — |
| `jibun-ate-mail-furiwake` | 3 | jibun-ate-mail-todokanai, jibun-ni-mail-iphone | — |
| `obsidian-iphone-memo` | 2 | captio-kawari, iphone-memo-pc-kyoyu, idea-memo-app, jibun-ni-mail-iphone（柱） | — |
| `iphone-onsei-memo` | 2 | idea-memo-app, jibun-ni-mail-iphone, memo-wasure-boushi | — |
| `memo-shukan` | 3 | memo-wasure-boushi, idea-memo-app, jibun-ni-mail-iphone（柱） | — |

### うちの爬虫類（`reptile-sns`）　LP: /reptile-sns/

- 柱の記事: `hachurui-shiiku-kiroku-app` / `leopa-esa-hindo`

| 記事slug | 優先度 | 本文から張る先（同じアプリ） | 他アプリ・ツールへ |
|---|---|---|---|
| `hachurui-shiiku-kiroku-app` | 1 | hachurui-shiiku-note, leopa-esa-hindo, hachurui-sns, leopa-taiju-meyasu | — |
| `leopa-esa-hindo` | 1 | leopa-taiju-meyasu, leopa-esa-tabenai, hachurui-shiiku-kiroku-app | — |
| `leopa-taiju-meyasu` | 1 | leopa-esa-hindo, hachurui-taiju-sokutei, hachurui-shiiku-note, hachurui-shiiku-kiroku-app（柱） | — |
| `leopa-dappi` | 2 | leopa-esa-tabenai, hachurui-shiiku-note, hachurui-shiiku-kiroku-app（柱） | — |
| `leopa-esa-tabenai` | 2 | leopa-esa-hindo, leopa-taiju-meyasu, hachurui-sns, hachurui-shiiku-kiroku-app（柱） | — |
| `ballpython-esa-hindo` | 2 | hachurui-shiiku-note, hachurui-taiju-sokutei, hachurui-shiiku-kiroku-app | — |
| `hachurui-taiju-sokutei` | 2 | leopa-taiju-meyasu, hachurui-shiiku-note, hachurui-shiiku-kiroku-app（柱） | — |
| `hachurui-shiiku-note` | 2 | hachurui-shiiku-kiroku-app, leopa-taiju-meyasu, hachurui-joto-hikitsugi | — |
| `leopa-sanran` | 3 | leopa-taiju-meyasu, leopa-esa-tabenai, hachurui-shiiku-kiroku-app（柱） | — |
| `hachurui-sns` | 1 | hachurui-shiiku-kiroku-app, leopa-esa-tabenai | — |
| `leopa-jumyou` | 3 | hachurui-shiiku-note, leopa-esa-hindo, hachurui-shiiku-kiroku-app（柱） | — |
| `hachurui-joto-hikitsugi` | 3 | hachurui-shiiku-note, hachurui-sns, hachurui-shiiku-kiroku-app（柱） | — |

## 6. LP → 記事（提案）

各LPの「関連する記事」は今 `/guide/app/<slug>/`（一覧）へのリンク1本。柱の記事が公開されたら、LPの同じ欄に柱の記事2本への直接リンクを足すことを提案する（LPは `scripts/sync-lp.ts` と各LPの担当が管理しているので、ここでは提案のみ）。

## 7. 効果の見方

- Search Console で記事ごとの表示回数・掲載順位を見る。公開から4週間たっても表示が出ない記事は、主要語の需要か、同じサイト内の別記事との食い合いを疑う（同じ検索語で2本の記事が交互に出ていないか）。
- 食い合いが起きたら、弱い方の記事の主要語を副語に下げ、強い方の記事へリンクを集める。記事は消さずに書き直す（URLは変えない）。
- 記事→LP→App Storeの流れは、LPへの訪問数（記事からの参照元）で見る。
