# 記事検品 第2群（2026-10-12）

対象: `src/content/guide/` のうち app が pitto-kigen・price-scan・tsukulog・ooya-note・machi-anzen-map・memomail の72本と、見本 `yachin-kanri-excel-app.md`（計73本）。
基準: `WRITING.md`、各設計書、`linking.md`、`src/data/apps.ts`、各LP。アプリの動きは、各アプリのソース（画面の文言・通知・課金の範囲）でも確かめた。

## 結果

| 判定 | 本数 |
|---|---|
| A（そのまま公開可） | 38 |
| B（直して公開可・直し済み） | 35 |
| C（公開不可） | 0 |

draft にした記事はない。`npm run build` と git 操作はしていない。

## 機械点検（直したあとの状態）

- リンク切れ: 0（`/guide/` 内・ツールページ・`https://motytools.com/anzen/` 配下6か所はすべて200を確認）
- `linking.md` の「本文から張る先」の不足: 0
- 記事リンクが本文で5本以上の記事: 0（2〜4本。見本 `yachin-kanri-excel-app` は表どおり1本）
- 自社アプリの明記が無い記事: 0
- `[[app]]`: 各記事1回（見本は0回で自動挿入）
- frontmatter: 全記事の YAML が読めることを確認
- 禁止表現（結論から言うと、ぜひ、多くの方、〜と言われています 等）: 0

## 記事ごとの判定と直したこと

### ピッと期限（pitto-kigen）A6 / B6

| 記事 | 判定 | 直したこと |
|---|---|---|
| shomikigen-kanri-app | B | 締めの「参考にしてください」を言い換え |
| shomikigen-barcode | B | 冒頭の「結論から書くと」を削除 |
| reizoko-zaiko-kanri | A | |
| reizoko-kazoku-kyoyu | A | |
| shomikigen-kanrihyo | A | |
| rolling-stock-kanri | B | 「月1食で期限前に必ず回る」の誤り（36食の備蓄では追いつかない）を、食べる回数の目安の式と検算つきの例に差し替え |
| hijoushoku-kigen-kanri | A | |
| chomiryo-kaifugo-kigen | B | 「日付を直しても通知は作り直されない」は配信中の版だけの挙動（次の版で修正済み）なので、版に依らない書き方に変更 |
| reitou-hozon-kigen | B | 手順のボタン名「保存」を実際の画面どおり「追加する」に修正 |
| kaisugi-boushi | A | |
| shokuhin-loss-katei | B | 「傷む前に回収できます」の不自然な語と、中身の無い締めの文を直す |
| shomi-shohi-chigai | A | |

通知（3日前・1日前の朝9時固定）、開封日欄なし、世帯単位の共有（品目ごとのオン・オフなし）は全12本で正しく書かれていた。

### ピッと最安（price-scan）A7 / B5

| 記事 | 判定 | 直したこと |
|---|---|---|
| barcode-saiyasune-app | B | 記事リンク5本→4本（表に無い nichiyouhin への文を削除） |
| jan-code-kensaku | B | まとめのリンク文が中身とずれていた（「価格を比べる方法」→ 価格差の理由の記事）を修正。自社明記を強めた |
| net-tento-kakaku | A | 自社明記の表記をそろえた |
| rakuten-yahoo-hikaku | A | 同上 |
| kakaku-hikaku-site | A | 同上 |
| nichiyouhin-matomegai | B | 計算例でポイントを送料込みの額にかけていた誤りを修正（本体分21円、1個あたり約479.8円に再計算） |
| drugstore-kakaku-hikaku | A | 自社明記の表記をそろえた |
| net-yasuku-kau | B | 記事リンク6本→4本（表に無い jan-code・rakuten-yahoo を外す） |
| rakuten-saiyasune | A | 自社明記の表記をそろえた |
| super-kakaku-hikaku | A | 同上 |
| tanka-hikaku-keisan | B | 「ロール数だけ見るとシングルが安く見える」は計算と逆（1ロールあたりもダブルが安い）なので「値札だけ見ると」に修正し、差額を追記 |
| yahoo-saiyasune-hyouji | A | 自社明記の表記をそろえた |

自社明記の統一は、元の「当サイト運営者が作っている」でも要件は満たしていたため、判定は A のまま。

### つくログ（tsukulog）A2 / B10

| 記事 | 判定 | 直したこと |
|---|---|---|
| handmade-nedan-kimekata | B | 販路の初期値を「公式と違う」と言い切っていたのを「版によっては古い数字なので確かめて直す」に変更。柱記事のリンクを表どおり（genka・rieki・minne・accessory）に |
| handmade-genka-keisan | B | 表にある在庫管理の記事へのリンクが無かったので追加 |
| minne-tesuryo-keisan | B | 初期値の言い切りを版に依らない書き方に |
| creema-tesuryo-keisan | B | 本文の「差は1円ほど」をFAQ・計算と合う「2円ほど」に。初期値の言い切りを修正。title・description に「クリーマ」を追加（主要語が片仮名のため） |
| handmade-hanbai-site-hikaku | B | 初期値の言い切りを修正 |
| handmade-kakuteishinkoku-ikurakara | B | 計算例の「申告は不要」の言い切りを、条件つきの書き方に |
| handmade-keihi | B | 記事リンク5本→4本 |
| handmade-tanaoroshi | A | |
| handmade-zaiko-kanri | B | 在庫の SUMIFS 式が、本文の列の並び（制作シートは材料名がC列・使った量がD列）と合わず、正しく計算できなかったので式と説明を修正 |
| handmade-uriage-kanri | B | 記事リンクを表どおりに（minne・keihi・tanaoroshi を外し、zaiko・nedan を追加） |
| handmade-rieki-ritsu | B | 利益率 63.7%→63.8%（1,785÷2,800＝63.75%）。記事リンクを表どおりに（accessory を追加、minne・creema・hanbai を外す） |
| accessory-genka-keisan | A | |

計算例はすべて検算した（値付けの逆算、倍率表、販路別の売値、早見表、棚卸高、減価償却など）。誤りは上の3か所だけ。

### 大家ノート（ooya-note）A10 / B3

| 記事 | 判定 | 直したこと |
|---|---|---|
| yachin-kanri-excel-app（見本） | B | 自社アプリの明記とLPへのリンクが無かったので追加。柱記事 yachin-kanri-app-hikaku へのリンクを追加。根拠のない「大家さんは多いと思います」を削除。Android版なし・銀行連携なし・申告書作成なしを追記 |
| yachin-kanri-app-hikaku | A | |
| yachin-kanrihyo-template | A | |
| yachin-nyukin-kakunin | A | |
| ooya-kakuteishinkoku | A | |
| fudousan-shotoku-keihi | A | |
| genka-shokyaku-fudousan | A | |
| chintai-shushi-keisan | A | |
| rimawari-keisan | B | FAQが「表面利回りが表示される」だけで、本文（実質利回りも出る）と食い違っていたので補足 |
| fudousan-shotoku-chobo | B | description が88字と短かったので、記事の中身（保存期間）を足して補った |
| jishu-kanri-ooya | A | |
| keiyaku-koushin-kanri | A | |
| yachin-tainou-taiou | A | |

### まちの安全マップ（machi-anzen-map）A8 / B4

| 記事 | 判定 | 直したこと |
|---|---|---|
| hikkoshi-chian-shirabekata | A | |
| fushinsha-joho-map | A | |
| fushinsha-joho-mail | A | |
| koutsujiko-tashuu | B | 出典のない「朝夕や日暮れ前後に事故が増えがち」を削り、場所ごとに時間帯を確かめる書き方に |
| tsugakuro-anzen-tenken | A | |
| hanzai-hassei-map | B | 「件数が多い地域でも多くの人が安全に暮らしています」は安全の断定にあたるので、件数の意味の説明に差し替え |
| shokuchudoku-joho | A | 削除依頼への1件ずつの対応は、アプリの SPEC.md の運用に沿っていることを確認 |
| tochi-mukashi-shirabekata | B | 根拠のない「知りたい人は多くいます」の前置きを削除 |
| koegake-jian | A | |
| kodomo-bouhan-tsugakuro | A | |
| gyosei-shobun-shirabekata | A | |
| bouhan-app-hikaku | B | 比較表が「五十音順」とうたいながら「安まちアプリ」が2行目にあったので、正しい位置（や行）に移動 |

### メモびゅん（memomail）A5 / B7

| 記事 | 判定 | 直したこと |
|---|---|---|
| jibun-ni-mail-iphone | A | |
| captio-kawari | B | 複数の宛先に送ると宛先の数だけ通数を使う点を追記。締めの定型句を言い換え |
| memo-mail-okuru-iphone | A | |
| iphone-memo-pc-kyoyu | A | |
| jibun-line-memo-hikaku | B | 根拠のない「毎日開く人が多く」を条件つきの書き方に |
| idea-memo-app | B | 記事リンク6本→4本。週1回の見返しの手順が memo-shukan・memo-wasure-boushi とほぼ同文だったので短くした |
| memo-wasure-boushi | B | 「迷わず書ける数が減るので」の不自然な文を修正 |
| jibun-ate-mail-todokanai | A | |
| jibun-ate-mail-furiwake | B | 「宛先の数は無料プランでも増やせます」は確認できないため削除し、通数の消費だけを残した |
| obsidian-iphone-memo | B | 表にある idea-memo-app へのリンクを追加。同じ内容を2回言っていた文をまとめた |
| iphone-onsei-memo | A | |
| memo-shukan | B | 見返しの手順が memo-wasure-boushi と重複していたので短くし、詳細はそちらへ任せる形に（主要語の食い合い対策） |

料金（無料1日3通、Pro 月500円・年4,800円で1日30通）は全12本で正しかった。送信リマインダーを書いた記事は無い。

## 目立った傾向

1. **アプリの版の違いを、言い切りで書いていた。** つくログの販路の初期値、ピッと期限の通知の作り直しは、配信中の版と次の版で動きが違う。版に依らない書き方（確かめて違えば直す、削除して登録し直すと確実）にそろえた。
2. **リンクの本数と行き先が `linking.md` からずれていた。** 1記事5〜6本に増えた記事や、柱の記事が周辺の記事に張っていない記事があった。全記事を表どおり2〜4本に直した。
3. **計算・数式の小さな誤り。** 数式の列の指定違い（在庫の SUMIFS）、送料にまでポイントをかけた例、四捨五入の誤り、計算と逆の説明文があった。数字は全記事で検算し直した。

## 担当外で見つけたこと（直していない）

- `data/app-seo/briefs/memomail/*.md` の「書いてよい事実」に古い情報が残っている（Pro 月300円・年3,000円、無料は宛先1件まで、送信リマインダーあり）。記事は正しい値で書かれているが、設計書を直さないと次の執筆で誤りが戻る。
- `data/app-seo/briefs/pitto-kigen/*.md` にも「設定した日数前に通知」「共有をオンにした品目だけクラウド保存」が残っている。
- ピッと期限のLP（`public/pitto-kigen/index.html`）が「設定した日数の前に、ローカル通知」と書いている（実際は3日前・1日前の朝9時固定）。また、アプリは画面下に広告を出すが、LPと `apps.ts` の料金欄に広告の記載が無い。
- メモびゅんのLPは「iOS 16以降」、`apps.ts` とアプリの設定は iOS 15.1。どちらかにそろえる必要がある。
- 他社サービス（料金・手数料・アプリの機能）の数字は、記事に書かれた確認日と出典を信じて残した。今回ウェブで照合し直したのは国税庁の2ページ（配偶者控除の令和8年分62万円、少額減価償却資産の特例の40万円未満）だけで、どちらも記事どおりだった。
