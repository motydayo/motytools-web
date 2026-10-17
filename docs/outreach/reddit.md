# Reddit 下書き

## 共通の決まり（投稿前に必ず読む）

- 2つのコミュニティの規則は、こちらから自動では取得できなかった（Reddit が読み込みを拒否）。**投稿前に各コミュニティの右側の「Rules」と固定投稿を開いて確認する**。下の内容は一般に知られている運用にもとづく下書き
- r/webdev：自分の作ったものの紹介は **土曜日の「Showoff Saturday」だけ**、という運用が広く知られている。投稿は**土曜日（米国時間）**、フレア（投稿の分類札）は「Showoff Saturday」を選ぶ
- r/web_design：宣伝だけの投稿は嫌われる。資料として役に立つ中身を本文に書き、リンクは1つ。曜日の決まりがあるかは Rules で確認（あればそれに従う）
- 2つのコミュニティに**同じ日に投稿しない**。r/webdev（土曜）→ 反応を見て数日後に r/web_design
- 同じ文面の使い回しは嫌われるので、下の2本は中身を変えてある
- アカウントが新しすぎる・この分野での発言がゼロだと自動で消されることがある。先に数件、他人の質問に普通に答えておくと安全
- コメントには必ず返事をする。指摘は「直しました」と結果で返す

---

## 1. r/webdev（Showoff Saturday）

- **投稿する日**：土曜日。日本時間なら土曜の夜〜日曜の朝（米国の土曜の日中）
- **フレア**：Showoff Saturday
- **種類**：テキスト投稿（リンクは本文に）

**タイトル**

```
I kept getting random animations from AI, so I made a reference of 32 effects + 30 UI components by name, each with sliders that update the demo, code and prompt together
```

**本文**

```
When I asked Claude or ChatGPT to "add some nice animation" to a landing page, I got something different every time. Naming the effect and giving numbers ("fade-in on scroll, 16px, 0.5s ease-out, IntersectionObserver, show everything for prefers-reduced-motion") worked far better. The hard part was knowing the names, so I built a reference.

Motion (32): https://motytools.com/en/motion/
UI components (30): https://motytools.com/en/ui/

Each entry has:

- A live demo in plain HTML/CSS/JS (plays by itself, and you can poke it)
- Sliders. Change "duration" from 0.5s to 0.3s and the demo, the CSS and the AI prompt all change together
- When to use it / when not to / how it differs from similar ones (modal vs drawer vs bottom sheet vs popover)
- The expected behavior: how it closes, keyboard, screen reader, reduced motion

A few things I learned writing it that might be useful even if you never click the link:

- Put :hover inside @media (hover: hover). Otherwise touch devices keep the hover state after a tap.
- Gate the hidden state of scroll reveals behind a .js class on <html>. If the script fails, content is still visible.
- For a seamless marquee, duplicate the list, animate translateX(0) to -50%, and add the same padding-right as your gap. Without that padding it jumps by one gap every loop. Mark the duplicate aria-hidden.
- <dialog> + showModal() gives you focus return, Esc, inert background and ::backdrop for free. Click-outside-to-close is the only thing you add, and it only works cleanly if the dialog itself has padding: 0.

Built with Astro, static pages, no signup. It started in Japanese, so if any English name sounds off to you, I'd really like to know. Accessibility corrections are the most welcome feedback.
```

---

## 2. r/web_design

- **投稿する日**：r/webdev の数日後。曜日の決まりは Rules で確認
- **種類**：テキスト投稿（デザインの観点に寄せる。コードの話は控えめ）

**タイトル**

```
A reference for naming UI motion: when to use each effect, when not to, and the timing values that don't get in the way
```

**本文**

```
I write a lot of briefs for landing pages, and "make it feel more alive" never produced the same result twice, from a developer or from an AI. So I collected the 32 effects that come up most, gave each a name, and wrote down when they help and when they hurt.

https://motytools.com/en/motion/

Some of the "when not to" notes, since those were the most useful to me:

- Fade-in on scroll: not on the first screen. The headline appears late and the page feels slow. 16-24px and 0.3-0.5s is about the limit before it feels like waiting.
- Hover lift: not on touch screens. Use a small press (scale 0.98) on tap instead.
- Marquee: pause on hover, and stop it entirely for people who set "reduce motion".
- Parallax: not on pricing tables, checkout steps or pages people revisit every day, and avoid stacking several parallax sections on one page. Large motion can make people with vestibular disorders dizzy, so turn it off for "reduce motion".
- Scroll snap: if a section is taller than the screen, mandatory snapping makes the bottom of it unreachable. Loosen it to "proximity" there.

Every entry has a live demo and sliders, so you can find the timing that feels right and copy either the CSS or a prompt with those exact numbers. There's a companion guide for 30 components (modal, drawer, bottom sheet, tooltip...) that focuses on which one to pick: https://motytools.com/en/ui/

Free, no signup. I'd love to hear which names you use differently, or which effects you'd add.
```

## 投稿前に確認すること（オーナー）

- 「I write a lot of briefs for landing pages」は運営者の実体験として言えるかを確認。言えなければ1文目を「When I asked AI to build landing pages, "make it feel more alive" never produced the same result twice.」に差し替える
- parallax と scroll-snap の注意書きは英語版の図鑑（/en/motion/parallax/・/en/motion/scroll-snap/）の記述どおりであることを2026-10-17に確認済み
