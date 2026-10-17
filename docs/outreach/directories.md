# 掲載をお願いできる場所（2026-10-17 確認）

「確認済み」＝ページかリポジトリを実際に開いて、投稿方法まで読んだもの。「一部未確認」＝存在は確認したが、投稿の細かい条件まで読めなかったもの。

共通の決まり:
- GitHub のまとめリストは **1つのリストに1回・1項目だけ**。英語版のURL（/en/motion/ か /en/ui/）を載せる
- 説明文は宣伝文句（best, ultimate, amazing）を使わない。事実だけ
- 1日に全部出さない。1日2〜3件まで

---

## A. GitHub のまとめリスト（プルリクエストで追加をお願いする）

### 1. Design Resources for Developers（bradtraversy/design-resources-for-developers）確認済み

- URL: https://github.com/bradtraversy/design-resources-for-developers
- 規模・動き: スター約6.7万、2026-10-17も更新あり。直近30件の閉じた依頼のうち25件が取り込み済み（よく取り込まれる）
- 入れる場所: `## CSS Animations` の表（`| [名前](URL)| 説明 |` の形）
- 投稿方法: README を編集してプルリクエスト。規則は contributing.md
  - 1回に1項目
  - 依頼の題名は `[資料名] -> [セクション名]` の形
  - 依頼の本文に `Link: URL` を書く
  - ずっと無料で使えること（条件を満たす）
- 題名: `[Web Motion Field Guide (motytools)] -> [CSS Animations]`
- 追加する1行:
  ```
  | [Web Motion Field Guide](https://motytools.com/en/motion/)| 32 common website animation effects by name, each with a live demo, sliders, copy-ready CSS/JS and an AI prompt. |
  ```

### 2. Awesome CSS Learning（micromata/awesome-css-learning）確認済み

- URL: https://github.com/micromata/awesome-css-learning
- 規模・動き: スター約3,900、直近30件のうち16件取り込み
- 入れる場所: `## Animation` の一番下
- 投稿方法: プルリクエスト。規則は .github/contributing.md
  - **作ってから最低2週間あけてから出す**（図鑑の公開は2026-10-15 → **10/29以降**に出す）
  - 形式は `[name](link) - Description.`（大文字で始め、ピリオドで終える）
  - 依頼の本文に「なぜ入れるべきか」を書く
- 追加する1行:
  ```
  - [Web Motion Field Guide](https://motytools.com/en/motion/) - 32 common UI animation patterns explained with live demos, when to use or avoid each one, and reduced-motion-friendly CSS.
  ```
- 依頼の本文（なぜ入れるべきか）:
  ```
  Link: https://motytools.com/en/motion/
  Why: each entry teaches the CSS behind a named pattern (transitions, transform, @keyframes, scroll-snap, IntersectionObserver) with a demo whose sliders update the code live, so learners can see what each value does. Every example includes a prefers-reduced-motion fallback. Free, no signup.
  ```

### 3. Awesome Web Animation（sergey-pimenov/awesome-web-animation）確認済み

- URL: https://github.com/sergey-pimenov/awesome-web-animation
- 規模・動き: スター約1,600、2026-09更新、直近30件のうち8件取り込み（取り込みは遅め）
- 入れる場所: 既存の分類はライブラリ中心（SVG / Common / CSS / Canvas / Animate on scroll / Text / React / GUI tools / Books / Videos）。資料サイトは `## CSS` の末尾が一番近い
- 投稿方法: README を GitHub 上で編集してプルリクエスト（contributing.md の手順どおり）
- 追加する1行:
  ```
  - [Web Motion Field Guide](https://motytools.com/en/motion/) - Reference of 32 named website animation effects with live demos, tunable timing and copy-ready CSS/JS.
  ```

### 4. Awesome Accessibility（brunopulis/awesome-a11y）確認済み

- URL: https://github.com/brunopulis/awesome-a11y
- 規模・動き: スター約2,000、2026-08更新。ただし**未処理の依頼が100件**あり、取り込みまで時間がかかる見込み
- 入れる場所: `topics/guides.md` の表（`| [名前](URL) | EN |`）。**アルファベット順**に差し込む
- 投稿方法: プルリクエスト。規則は CONTRIBUTING.md（説明を付ける・アルファベット順・重複を探してから）
- 追加する1行（UI部品の図鑑の方を出す。決まりごと・キーボード・読み上げを各ページに書いているため）:
  ```
  | [UI Components Field Guide](https://motytools.com/en/ui/) | EN |
  ```
- 依頼の本文:
  ```
  Adds a guide to 30 common UI components (modal, drawer, bottom sheet, popover, tooltip, toggle, breadcrumb...). Each entry documents the expected keyboard behavior, focus handling and screen reader semantics, and builds on native elements (<dialog>, popover) where possible.
  ```

### 5. Frontend Dev Bookmarks（dypsilon/frontend-dev-bookmarks）確認済み・動きが少ない

- URL: https://github.com/dypsilon/frontend-dev-bookmarks
- 規模・動き: スター約4.7万だが、最後の更新は2024-05。取り込まれない可能性が高い。**優先度は低**
- 入れる場所: `user-interface-components/ui-kits.md` などの分野別ファイルの末尾
- 投稿方法: プルリクエスト。形式は `[Bookmark Title](link): Description.`
- 追加する1行:
  ```
  [UI Components Field Guide](https://motytools.com/en/ui/): 30 common UI components with interactive demos, when to use each, accessibility conventions and copy-ready HTML, CSS and JavaScript.
  ```

### 6. Awesome Design Tools（goabstract/Awesome-Design-Tools）一部未確認・動きが少ない

- URL: https://github.com/goabstract/Awesome-Design-Tools
- 規模・動き: スター約4.2万、最後の更新は2024-07。**優先度は低**
- 入れる場所: `### Tools for Learning Design`（Laws of UX などが並ぶ場所）
- 投稿方法: Contribution_Guidelines.md に従ってプルリクエスト（中身は読み切れていないので出す前に読む）
- 追加する1行（無料の印はリストの既存項目と同じ画像を付ける）:
  ```
  - [UI Components Field Guide](https://motytools.com/en/ui/) — 30 common UI components with live demos, when to use each one versus similar ones, and accessibility conventions. ![free.svg](https://github.com/LisaDziuba/Awesome-Design-Tools/blob/master/Media/free.svg)
  ```

---

## B. ニュースレター（編集者に送る）

### 7. CSS Weekly 確認済み

- URL: https://css-weekly.com/contact （以前の「Submit a link」ページは現在404。お問い合わせフォームから送る）
- 投稿方法: フォーム（名前・メール・件名・URL・本文が必須）。**名前とメールはオーナーが入力**
- 件名: `Link suggestion: Web Motion Field Guide`
- 本文:
  ```
  A free reference of 32 named website animation effects (sticky header, scroll snap, marquee, scrollspy...). Each has a live demo with sliders that update the CSS and an AI prompt together, plus when-to-use / when-to-avoid notes and a prefers-reduced-motion fallback.
  https://motytools.com/en/motion/
  ```

### 8. Frontend Focus（Cooperpress）確認済み

- URL: https://frontendfoc.us/
- 投稿方法: 配信メールに**返信して**送る（号の末尾に「Got a link for us? Reply and tell us.」とある）。先に購読が必要
- 送る文:
  ```
  A free field guide to 30 common UI components (modal, drawer, bottom sheet, popover, tooltip...): when to use which, keyboard and screen reader conventions, and code built on <dialog> and the popover attribute.
  https://motytools.com/en/ui/
  ```

### 9. Web Tools Weekly 確認済み・合うかは五分

- URL: https://webtoolsweekly.com/submit
- 投稿方法: X（@LouisLazaris）か Bluesky（@LouisLazaris.com）へ直接メッセージ。**記事・解説は不可、道具のみ**。図鑑は「つまみで値を変えてコードを出す道具」として出す
- 送る文:
  ```
  Hi, a free tool you might like: pick a named web animation (32 of them) or UI component (30), tweak it with sliders, and copy the updated CSS/JS or an AI prompt with the same values. https://motytools.com/en/motion/
  ```

### 10. Sidebar 確認済み

- URL: https://sidebar.io/submit （About に掲載基準）
- 投稿方法: 会員登録してから投稿フォーム（**オーナーのアカウント**）
- 掲載基準: 新しいもの（数か月以内）、手間をかけた解説が優先、まとめ記事は嫌われる。**早めに出す**のが有利
- 題名: `Web Motion Field Guide: 32 named animation effects, when to use them and when not to`
- URL: https://motytools.com/en/motion/

---

## C. 道具のまとめサイト

### 11. Uneed 一部未確認

- URL: https://www.uneed.best/submit-a-tool
- 投稿方法: 無料の順番待ちあり（待ち日数は不明）。保存には会員登録が必要。有料の「順番を飛ばす」もあるが**使わない**（お金がかかるため）
- 一言説明:
  ```
  Free field guides to 32 web animation effects and 30 UI components, with live demos, sliders that update the code, and AI prompts.
  ```

### 12. Product Hunt 存在のみ確認

- URL: https://www.producthunt.com/
- 投稿方法: オーナーのアカウントで「Launch」から。米国太平洋時間の0時（日本時間の16時ごろ）に出すと1日まるごと並ぶ
- 一言（60字以内のタグライン）:
  ```
  Name a web animation, tune it, copy the code or AI prompt
  ```
- 位置づけ: 上位を取るには知り合いの応援が要る場所。**見込みは小さい**ので最後に回す
