# Show HN 下書き

## 投稿フォームに入れるもの

- **title**（76字。80字以内）
  `Show HN: Named web animation and UI patterns, with live demos and AI prompts`
- 予備タイトル（78字）
  `Show HN: A field guide to web animations and UI components, with tunable demos`
- **url**
  `https://motytools.com/en/motion/`
- **text**：空欄のまま（Show HN は URL を入れたら本文は空にし、説明は投稿直後に自分で1件目のコメントとして書くのが通例）

## 投稿直後に書く1件目のコメント

```
Hi HN. This is two small reference sites that grew out of the same problem.

When I asked an AI to "add some nice animation" to a landing page, I got something different every time: everything faded in, the hero headline appeared late, hover effects showed up on touch screens. When I named the effect instead ("fade-in on scroll, 16px, 0.5s ease-out, IntersectionObserver, respect prefers-reduced-motion"), the output was close to what I wanted on the first try. The hard part was knowing the names, so I wrote them down.

- Motion: 32 common effects (sticky header, pinning, scroll snap, marquee, magnetic button, skeleton screen, scrollspy...) https://motytools.com/en/motion/
- UI: 30 common components (modal, drawer, bottom sheet, popover, tooltip, segmented control, breadcrumb...) https://motytools.com/en/ui/

Each page has:

- a live demo in plain HTML/CSS/JS that plays by itself (a fake cursor hovers and clicks) and that you can also use directly
- 2-4 sliders; moving one updates the demo, the copyable code and a ready-to-paste AI prompt at the same time, so the numbers stay in sync
- when to use it, when not to, and how it differs from the similar-looking ones (e.g. modal vs. popover vs. bottom sheet)
- the conventions people expect: how it closes, keyboard behavior, what a screen reader should hear, prefers-reduced-motion

Where the platform already has the piece, the code starts from it: <dialog> with showModal(), the popover attribute, <details> for the accordion, native range and date inputs. Newer CSS (@starting-style, anchor positioning) is used so that unsupported browsers still get a working, just un-animated or simply positioned, version.

How it's built: Astro, static pages, no framework in the demos. It started in Japanese (the original audience is people building Japanese landing pages) and every entry has an English version. I leaned heavily on Claude to draft entries and demos, then checked each one in the browser at desktop and phone widths. No signup. The pages run Google Analytics and AdSense.

What I'd most like feedback on:

1. Names that are wrong or not what you'd call it. Several effects have no settled English name (the animated text-marker "highlighter" is something I mostly see on Japanese sites, so I am unsure what most people call it in English).
2. Accessibility mistakes in the demos or code. I'd rather fix them than have people copy them.
3. Effects or components you'd expect to find and didn't.

A slide layout guide in the same format is in progress.
```

## 投稿前に確認すること（オーナー）

- 文中の「I leaned heavily on Claude ... checked each one in the browser」は事実どおりかを確認。違えば直す（HN は作り方の正直さに厳しい）
- 「The pages run Google Analytics and AdSense」は2026-10-17時点のページで確認済み（両方のスクリプトを読み込んでいる）。外していたらこの1文を消す
- 投稿は米国の平日朝（日本時間の 22:00〜24:00 ごろ）。土日は避ける
- 投稿後2〜3時間はコメントに返事をする。批判には言い返さず「直します」「理由はこうです」で短く
- 知り合いに投票を頼まない（不自然な票は検知されて順位を落とされる）
- 落ちても同じURLを何度も出し直さない。間を空けて1回だけなら可
