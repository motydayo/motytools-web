# 設計書: iPhoneからObsidianに素早くメモする方法｜起動待ちを減らす

- アプリ: メモびゅん（`app: memomail`）　LP: /memomail/
- 記事slug: `obsidian-iphone-memo`（ファイル: `src/content/guide/obsidian-iphone-memo.md`、URL: `/guide/obsidian-iphone-memo/`）
- 型: やり方解説
- 優先度: 2（第2波）
- 文字量の目安: 本文4,000〜6,000字（表・手順を含む。水増し禁止）

## 狙う検索語
- 主要語（frontmatter `primary`）: **obsidian iphone メモ 素早く**
- 副語（見出し・本文に自然に入れる）: obsidian iphone 入力 / obsidian クイックキャプチャ / obsidian メモ 送る / obsidian モバイル 起動 遅い

## 検索意図
ObsidianをiPhoneで使っていて、思いついたことを素早くVaultに入れたい人。モバイルの起動が遅い悩み。サジェストデータ外の語なので執筆前に需要を確認。

## タイトルとdescription
- title（35字）: iPhoneからObsidianに素早くメモする方法｜起動待ちを減らす
- description（112字）: iPhoneからObsidianに素早くメモを入れる方法を解説します。モバイル版の起動を待たずに書くためのショートカット、デイリーノートへの追記、メールで送ってVaultに保存する方法、それぞれの手間と向き不向きを比べます。

## 見出し構成
- H2 モバイルのObsidianでメモが遅い理由
- H2 方法1　ショートカットでデイリーノートに追記
- H2 方法2　メールで送ってVaultに保存
- H2 方法3　あとでまとめて取り込む
- H2 比較と選び方

## 必ず入れる論点
- Obsidian側の設定・プラグインは執筆日に確認
- メモびゅんのObsidian連携の設定手順は実機で確認して書く

## 競合に無い独自の論点（これで勝つ）
- メールの受信箱とObsidianの両方に残す運用

## FAQ（frontmatter `faq` に入れる。答えは本文と矛盾させない）
- Q. ObsidianのiPhoneアプリは起動が遅い？
  - 答えの要点: Vaultの大きさ等。一般論にとどめる
- Q. Obsidianに直接書かずにメモを入れるには？
  - 答えの要点: ショートカット・メール連携
- Q. メモびゅんのObsidian連携は？
  - 答えの要点: 送ったメモをVaultにも自動保存（手順は実機で確認）

## アプリへのつなぎ方
方法2で `[[app]]`。

## 内部リンク
- アプリのLP: [メモびゅん](/memomail/)（本文で1回、アプリ名に張る）
- 記事: `/guide/captio-kawari/` Captioの代わりになるアプリ比較｜自分宛てメールを速く送る
- 記事: `/guide/iphone-memo-pc-kyoyu/` iPhoneのメモをパソコンと共有する方法｜Windowsでも見る
- 記事: `/guide/idea-memo-app/` アイデアメモアプリおすすめ｜思いついた瞬間に書ける5選
- 記事: `/guide/jibun-ni-mail-iphone/` iPhoneで自分にメールを送る方法｜メモ代わりに速く送るコツ

## 調べた競合（WebSearchで観測した上位候補。執筆前にGoogleで再確認する）
- （観測）Obsidianフォーラム・個人ブログのショートカット記事
  - 日本語は少ない
- （観測）英語のQuick Capture記事
  - 日本語化の余地
- https://www.indiehackers.com/post/show-ih-captio-is-gone-heres-my-swiftui-cloudflare-workers-rebuild-d504c2295b
  - 自分宛て送信アプリの開発者投稿

## このアプリについて書いてよい事実（LP・台帳で確認済み）
- 起動→入力→送信の3タップで、登録した自分のメールアドレスにメモが届く（開いたらすぐ入力できる）
- GmailやiCloudなど複数の宛先を登録して使い分けられる（宛先は確認コードで本人確認して登録）
- 音声入力で話すだけでメモになる
- 送ったメモをObsidianのVaultにも自動で保存
- 書きかけて送り忘れたメモを通知で知らせる（送信リマインダー）
- 送信履歴はアプリ内に最新80件、キーワード検索できる
- オフラインで書いたメモは送信箱に入り、つながったときに自動送信
- 料金: 無料プランは1日3通・宛先1件まで。Proは月額300円／年額3,000円で1日30通・署名のカスタマイズなど（LPのFAQと社内記録で確認）。iOS 16以降
- Captio（配信終了）の代わりとして作ったアプリ。日本語を含む多言語対応

## 書いてはいけないこと（アプリに無い・未確認）
- src/data/apps.ts の pricing は「無料」とだけ書かれているが、実際は無料プランに1日3通の上限がある。記事では上限とProの料金を必ず書く（台帳の修正は台帳担当に依頼）
- メールの差出人アドレス（送信元）は執筆前に実機で受信して確認してから書く。推測で書かない
- iPhoneの標準「メモ」アプリとの同期・メモの共同編集・Windows用アプリは無い
- LINEへの送信は無い
- Android版は無い

## 執筆メモ
- サジェストデータ外。執筆前にGoogleで「obsidian iphone」系の検索結果と需要を確認

品質基準は `src/content/guide/WRITING.md`、リンク設計は `data/app-seo/linking.md` に従う。
