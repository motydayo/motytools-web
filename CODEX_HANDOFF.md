
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
