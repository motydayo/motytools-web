# 資料レイアウトの図鑑：執筆担当への共通指示

リポジトリ: /Users/moty/deskclaude/projects/motytools-web（Astro 5）
あなたの担当: 下で渡す12本（slug と番号）。日本語版だけ。英語版は作らない。

## 必ず最初に読む
- /Users/moty/deskclaude/design/DESIGN.md
- src/data/ugoki/WRITING.md の「第3弾」の章すべて（100種の表・寸法・グラフ・つまみの決まり）。ここが正本。
- 手本4本を丸ごと読み、同じ水準・同じ書き方にする:
  - src/data/shiryo/entries/{two-column,bar-chart,gantt,problem-solution}.ts
  - src/components/ugoki/shiryo-demos/{two-column,bar-chart,gantt,problem-solution}.astro
- src/data/ugoki/types.ts（型）、src/lib/zukan/tune.ts（つまみ）

## 作るもの（1本につき2ファイル）
- src/data/shiryo/entries/<slug>.ts
- src/components/ugoki/shiryo-demos/<slug>.astro
ほかのファイル（zukan.ts・hub.ts・WRITING.md・共通部品・scripts）は触らない。直したい点があれば報告に書く。

## 質の基準
- 見本のスライドは「そのまま会議で使えそう」な完成度。架空だが本物らしい日本の仕事の中身（会社名・数字・日付）。手本と同じ余白・文字の大きさ・色の使い方。
- グラフは値から計算して描き、目盛りは0から（WRITING.mdの決まり）。図形の重なり・はみ出し・文字の切れが無いこと。
- 見本の中に押せる要素（a・button・input）は置かない。見出しタグも使わない。global.css とぶつかるクラス名を使わない（check-zukan が検査）。
- 本文は手本と同じ構成。title は実際に検索される言葉（「〇〇とは」「〇〇 作り方」「〇〇 テンプレート」など）を狙う。description は110〜130字。
- 「作り方」は PowerPoint・Googleスライドで実際にどこを押すか。メニュー名は確かなものだけ（自信が無ければ見た目で言い換える）。Excel・スプレッドシートのグラフ機能で作れる型はそれも書く。
- 「気をつけること」は、その型でみんながやりがちな失敗（痒いところ）。一般論で埋めない。
- 「似ているものとの違い」は100種の表の slug を使う（まだ無い記事を指してもよい）。
- よくある質問は、その型について実際に検索される疑問を2〜3個。
- つまみは2〜3個。1つはアクセント色 accent（初期値 #2f5fcf）。残りはその型で本当に効くもの。要素の数が変わるものはつまみにしない。
- 平易な日本語。横文字は先に日本語で説明する。

## publishedAt（公開日。この日付で段階的に公開する）
- 次の20本は '2026-10-17':
  pyramid, matrix, kpi-dashboard, executive-summary, scatter, radar, waterfall, funnel, pareto, boxplot, histogram, roadmap, swimlane, raci, org-chart, logic-tree, fishbone, venn, customer-journey, persona
- それ以外は番号で決める: 番号を3で割った余りが 1 → '2026-10-24'、2 → '2026-10-31'、0 → '2026-11-07'

## 確かめ方（全部やってから報告）
- node scripts/check-zukan.mjs <自分のslug…> が 問題なし
- 自分専用のポートで開発サーバーを立てる: npx astro dev --port <指定ポート>（ビルド npm run build は他の担当とぶつかるので使わない）
- 各記事 http://localhost:<ポート>/shiryo/<slug>/?ugstill を、PC幅とスマホ幅375、明るい表示と暗い表示で撮影して自分の目で見る（scripts/shoot-zukan.mjs を参考に。CDPのポートも指定ポート+1000など他とぶつからない番号に）。一覧カード（/shiryo/）の小さい見本も確認。
- 撮影画像は .shots/shiryo/<slug>/ に置く。
- 終わったら開発サーバーとChromeを必ず止める。
- git commit はしない（まとめ役がする）。

## 報告（10行以内）
作った slug、確かめた結果、直せなかったこと、共通部品への改善提案。
