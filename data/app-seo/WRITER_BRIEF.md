# 記事執筆担当への共通指示

あなた自身が書け。Agentツールの使用は禁止。日本語で作業する。

## 読むもの（この順）
1. /Users/moty/deskclaude/projects/motytools-web/src/content/guide/WRITING.md（品質基準。必ず守る）
2. /Users/moty/deskclaude/projects/motytools-web/src/content/guide/README.md（ファイル書式・[[app]] 部品）
3. 見本: /Users/moty/deskclaude/projects/motytools-web/src/content/guide/instagram-recipe-hozon.md
4. 担当アプリの設計書: /Users/moty/deskclaude/projects/motytools-web/data/app-seo/briefs/<app>/*.md（12本）
5. 内部リンク設計: /Users/moty/deskclaude/projects/motytools-web/data/app-seo/linking.md
6. アプリの正しい中身: /Users/moty/deskclaude/projects/motytools-web/src/data/apps.ts の該当アプリ、LP（public/ 配下の該当 index.html）。アプリに無い機能・料金を書かない。迷ったらアプリのコード（場所は /Users/moty/.claude/projects/-Users-moty-deskclaude/memory/ の該当 project_*.md）で確かめる。

## 書くもの
- 設計書1本につき記事1本。/Users/moty/deskclaude/projects/motytools-web/src/content/guide/<設計書のslug>.md
- publishedAt / updatedAt は 2026-10-12。draft: false。
- 設計書の見出し構成・必須論点・独自論点・FAQ・内部リンクを満たす。競合より役に立つことが目的。手順は具体的に（どの画面のどのボタンか）、数字は確かめたものだけ。他社サービスの仕様・料金は公式で確認できたものだけ書き、確認日を添える（WebSearch/WebFetch を使ってよい）。確認できなければ書かない。
- 自社アプリであることを明記（「当サイト運営者が作ったアプリ」等）。誇大表現・ランキング1位等の根拠ない表現・法律/税/医療の断定は禁止。
- 文字量は設計書の目安に従う（なければ2500〜4500字）。水増し禁止。同じ担当内で文章の使い回し禁止。
- 内部リンクは /guide/<slug>/ 形式。リンク先は plan.json に存在するslugか既存ページだけ。

## 自己検品（書き終えたら必ず）
- 全12本の frontmatter が README の書式どおりか（title 8〜60字・description 40〜160字・app がslug一致・faq の a は文字だけ）を node で機械チェックする（簡単なスクリプトを scratch に書く: /private/tmp/claude-501/-Users-moty-deskclaude/74a77eaf-bf2a-459a-86db-8106eb9065fc/scratchpad）。
- 内部リンク先が存在するか機械チェック。
- npm run build は実行しない（他の担当と同時に書いているため。ビルドは親が行う）。git操作もしない。
- 最後の返答は、書いた本数・ファイル名一覧・確認できず書かなかった事実があればその要点だけ短く。
