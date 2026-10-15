
## 2026-09-07 トップページ刷新

- `src/pages/index.astro` を全面書き換え（生成り色背景＋深緑アクセント、ヒーロー見本カード、ツール検索・絞り込み、つくったもの再構成）。
- `src/layouts/BaseLayout.astro` に `chrome="home"`（トップ専用ヘッダー/フッター）と `appearance="light"` を追加。トップ以外のページは従来のヘッダー・テーマ切替のまま。
- `public/`・`vercel.json`・DNS は一切触っていない。本番で5種のセキュリティヘッダーと主要URLの200を確認済み。
- 設計書のルール「標語をトップに置かない」とはズレるが、オーナー提供の参考画像に見出し「役に立つを、かたちにする。」があったため、参考画像を優先した。

## 2026-10-12 アプリ導線サイト化の土台

- `src/data/apps.ts` がiPhoneアプリ10本の正本（名前・一言・機能・料金・App Store URL・アイコン・LPのtitle/description）。評価は iTunes lookup の実データ（ピッと期限のみ 5.0/1件）。そだち・ピッと保証・相場ウォッチは未配信なので載せない。
- アイコンは `public/app-icons/<slug>-256.webp`（表示）・`-512.png`（構造化データ/OGP）、App Store公式日本語バッジは `public/badges/`。
- 新規ページ: `/apps/`（カテゴリ別ハブ・ItemList）、`/guide/`・`/guide/<slug>/`（記事。Article/FAQPage/BreadcrumbList・apple-itunes-app）・`/guide/app/<slug>/`（記事0本のアプリは noindex＋サイトマップ除外）。
- 記事は `src/content/guide/*.md`（書式は同フォルダの README.md）。サンプル2本（レシピスクラップ・大家ノート）。
- 静的LPは `node scripts/sync-lp.ts` で apps.ts から title/description/OGP・apple-itunes-app・SoftwareApplication・下部導線（関連する記事/他のアプリ）を差し替える（目印コメント内だけ・何度実行しても同じ）。メモびゅん（Next.js書き出し）は埋め込みデータ側も同じ文字列で置換、下部導線は</body>直前（フッターの下）。
- あるものレシピ・つくログのLPに残っていた「近日公開」をApp Storeリンクに差し替え。
- ツール→アプリ導線は `src/data/tools.ts` の APP_PROMOS（loan・genka-shokyaku→大家ノート、days・denkidai→ピッと期限、percent→ピッと最安）。
- トップの「つくったもの」からピッと保証・そだち・相場ウォッチを外し、10本すべてを掲載。ヘッダー/フッターに /apps/・/guide/。
- vercel.json・data/app-seo/ は触っていない。デプロイ未実施。

## 2026-10-12 トップから安全マップ本体への直接リンク

- 背景: Search Console で /anzen/ 系4ページが「クロール済み - インデックス未登録」、紹介ページ /machi-anzen-map/ は未認識。トップからは紹介ページへのリンクしか無かった。
- `src/pages/index.astro` の「つくったもの」下段で、まちの安全マップのカードだけ `links` を持たせ、カード下に文字リンク「地図を開く」(/anzen/)・「交通事故」(/anzen/jiko/)・「不審者」(/anzen/fushinsha/)・「地域別の件数」(/anzen/chiiki/) を並べた。リンクの入れ子を避けるため、`links` があるカードは `div.hm-mini-group` で包む。各リンクは高さ44px。
- web-release で検品済み（ヘッダー5種は200/404とも有り、機微パス404、秘密情報の混入なし、npm audit の指摘は静的書き出しのため非該当）。本番反映と4リンク先の200を確認済み。
- Search Console でトップ（https://motytools.com/）のインデックス登録リクエストを10/12に1回送信。次の一手: 1〜2週間後に /anzen/ 系4ページと /machi-anzen-map/ の登録状況を再計測。

## 2026-10-12 アトイチ（筋トレ記録アプリ）のLP・規約・1RM計算ツール

- 公開: `/atoichi/`（LP）・`/atoichi/privacy/`・`/atoichi/terms/`（すべて `public/atoichi/` の静的HTML、共通CSSは `atoichi.v1.css`）、`/1rm/`（Astro。ツール台帳 `src/data/tools.ts` に新カテゴリ `body`＝筋トレ・運動、計算は `src/lib/rm.ts`）。本番200・ヘッダー5種確認済み。
- アトイチは未配信のため `src/data/apps.ts` には載せていない（台帳は配信済みだけ）。トップの小カード（`src/pages/index.astro` の compact）とサイトマップ（LEGACY_PATHS）にだけ手で追加。
- App Store公開後の差し替え: `public/atoichi/index.html` 内の「【差し替え 1/4〜4/4】」コメント4箇所、`src/pages/1rm/index.astro` の「【差し替え】」1箇所。公開後は apps.ts に移し、トップは appMini に切り替え、`node scripts/sync-lp.ts` の対象になるか確認する。
- スクショ差し替え: `public/atoichi/img/shot-1.webp`〜`shot-5.webp`（900x1950）。ファイル名を変えて（例 shot-1-v2.webp）index.html の参照も直す。

## 2026-10-12 アプリ誘導記事122本を公開
- /guide/ 配下に記事122本（10アプリ×12本＋見本2本）。検品記録は data/app-seo/qa-batch1.md・qa-batch2.md。全記事 A/B 判定、C 0本。
- 本番反映は `npx vercel deploy --prod --yes`（git push の自動デプロイは失敗中・原因未調査）。
- 既知の残り: /memomail/ が参照する /favicon.ico・/apple-touch-icon.png が404（以前から）。

## 2026-10-14 Googleへの登録依頼
- サイトマップ201本（全200・noindexなし・robots案内あり）を検品。メモびゅんの規約・プライバシー・サポートの canonical が紹介ページを指していたのを自分自身に修正、/privacy 系3ページに canonical を追加（コミット bd91119、本番反映済み）。
- Search Console で sitemap.xml を再送信、主要12本の登録をリクエスト。残り148本の日付つき予定は /Users/moty/deskclaude/projects/app-findability/2026-10-14/google-index.md（10/15〜10/29、1日10本）。API認証は読み取り専用なので登録リクエストは画面操作。

## 2026-10-14 うちの爬虫類のコミュニティガイドライン公開・旧URLの救済
- 新規 `public/reptile-sns/guidelines/index.html`（プライバシーと同じ見た目）。中身はアプリ・Supabase に実在する仕組み（通報6理由・24時間以内の確認・ミュート・ブロック・生餌写真のぼかし・削除/ぼかし/アカウント停止・異議は「ご意見・要望」）だけ。
- アプリの GUIDELINE_URL `https://motytools.com/uchino-hachu/guidelines/` は vercel.json の rewrite で同ページを200で返す（canonical は /reptile-sns/guidelines/）。
- 配信中の旧版アプリ（1.0・1.1.0）が持つ旧URLを vercel.json の redirect で救済: /uchino-hachu/ と /uchino-hachu/a/:id → /reptile-sns/、/uchino-hachu/privacy/ → /reptile-sns/privacy/、/uchino-hachu/terms/ → Apple 標準EULA（1.1.1 と同じ規約）。
- LP・プライバシーのフッターとサイトマップに /reptile-sns/guidelines/ を追加。本番で全URL 200・ヘッダー5種・機微パス404を確認済み。

## 2026-10-15 Webの動きの図鑑（/ugoki/）
- LP・Webサイトの動きの演出32種（X上の「演出の名前」まとめ24種＋カウントアップ・タイプライター・スケルトン・アコーディオン・スクロールスパイ・トースト・上に戻る・タブ下線）を、動く見本・使いどころ・作り方のコード・AIへの頼み方つきで1演出1ページに。一覧 /ugoki/ は検索・種類の絞り込みつき。
- 正本: 記事 `src/data/ugoki/entries/<slug>.ts`、見本 `src/components/ugoki/demos/<slug>.astro`（ファイルを置くだけで一覧・サイトマップに載る）。書き方の決まりは `src/data/ugoki/WRITING.md`。
- 見本の自動再生は `src/lib/ugoki/runtime.ts`（scroll / pointer / loop / script の4型。見えている間だけ動く・触ると止まり4秒後に再開・動きを減らす設定では止める）。枠と共通部品は `src/components/ugoki/UgFrame.astro`、「見どころ」の点線は `data-ug-focus`。
- 検査: `node scripts/check-ugoki.mjs`（見本がサイト共通の global.css のクラス名とぶつかっていないか）。OG画像は `node scripts/gen-og-ugoki.mjs` で public/og/ugoki/ に再生成。
- 導線: トップの小カード・トップのメニュー・フッター・サイトマップ（33件）。
- 本番反映済み（vercel CLI。サンドボックス内だとアップロードが途中で切れることがあり、外で実行して通った）。本番で33ページ200・ヘッダー5種・機微パス404を確認。
- 次の一手: Search Console でサイトマップ再送信と /ugoki/ の登録リクエスト。2週間後に表示回数と検索語を見て、題名の言い回しを調整。
