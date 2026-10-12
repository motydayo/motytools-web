# 設計書: iPhoneのメモをパソコンと共有する方法｜Windowsでも見る

- アプリ: メモびゅん（`app: memomail`）　LP: /memomail/
- 記事slug: `iphone-memo-pc-kyoyu`（ファイル: `src/content/guide/iphone-memo-pc-kyoyu.md`、URL: `/guide/iphone-memo-pc-kyoyu/`）
- 型: やり方解説
- 優先度: 1（最優先・最初の波で書く）
- 文字量の目安: 本文4,000〜6,000字（表・手順を含む。水増し禁止）

## 狙う検索語
- 主要語（frontmatter `primary`）: **iphone メモ パソコン 共有**
- 副語（見出し・本文に自然に入れる）: iphone メモ パソコン に 共有 / スマホ から パソコン に メモ を 送る / メモ アプリ 共有 パソコン / iphone メモ windows

## 検索意図
iPhoneで書いたメモをパソコン（特にWindows）で見たい・使いたい人。iCloud.com、Gmail同期、メール、他アプリの比較。

## タイトルとdescription
- title（33字）: iPhoneのメモをパソコンと共有する方法｜Windowsでも見る
- description（115字）: iPhoneのメモをパソコンで見る・使う方法を、Mac・Windows別に解説します。iCloudの同期、iCloud.comをブラウザで開く方法、Gmailとのメモ同期、メールで送る方法、ほかのメモアプリの比較までまとめました。

## 見出し構成
- H2 Macなら同じApple IDで同期
- H2 WindowsならiCloud.comを開く
- H2 Gmailとメモを同期する
- H2 メールで送る
- H2 パソコンでも使えるメモアプリ

## 必ず入れる論点
- iCloud.comの手順と二段階認証は執筆日に確認
- Gmail同期は新しいメモだけ等の制限を確認

## 競合に無い独自の論点（これで勝つ）
- 「パソコンで編集もしたい」か「見られればいい」かで方法を分ける表

## FAQ（frontmatter `faq` に入れる。答えは本文と矛盾させない）
- Q. WindowsでiPhoneのメモを見るには？
  - 答えの要点: iCloud.com
- Q. メモをパソコンに送る一番簡単な方法は？
  - 答えの要点: メール。書いてすぐ送るならメモびゅん
- Q. パソコンで編集もしたい
  - 答えの要点: 同期できるアプリ

## アプリへのつなぎ方
「メールで送る」で `[[app]]`。

## 内部リンク
- アプリのLP: [メモびゅん](/memomail/)（本文で1回、アプリ名に張る）
- 記事: `/guide/memo-mail-okuru-iphone/` iPhoneのメモをメールで送る方法｜送れないときの対処も
- 記事: `/guide/jibun-ni-mail-iphone/` iPhoneで自分にメールを送る方法｜メモ代わりに速く送るコツ
- 記事: `/guide/obsidian-iphone-memo/` iPhoneからObsidianに素早くメモする方法｜起動待ちを減らす

## 調べた競合（WebSearchで観測した上位候補。執筆前にGoogleで再確認する）
- https://www.lifehacker.jp/article/228532access-edit-iphone-notes-windows/
  - WindowsでiPhoneメモを編集
- https://minto.tech/iphone-memo-douki
  - メモ同期の解説
- https://biz.moneyforward.com/work-efficiency/basic/16570/
  - メモアプリの比較

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

品質基準は `src/content/guide/WRITING.md`、リンク設計は `data/app-seo/linking.md` に従う。
