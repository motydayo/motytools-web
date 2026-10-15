import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'timeline',
  no: 28,
  category: 'display',
  name: 'Timeline',
  en: 'タイムライン',
  aka: ['Vertical timeline', 'History timeline', 'Company history', 'Changelog timeline', 'Activity timeline'],
  mode: 'scroll',
  title: 'Vertical Timeline in Pure CSS with Semantic HTML (No Images)',
  description:
    'Build a vertical timeline with an <ol>, <time> and CSS pseudo-elements for the line and dots, no images needed. Demo, code, and how it differs from a stepper.',
  oneLine: 'Dates and events in order, strung along a single vertical line.',
  what: [
    'A timeline draws one vertical line, places a dot on it for each event, and lists dates and events in order. The demo tells a lodge’s sixty-year story, oldest at the top. As you scroll, the line fills with orange up to where you are reading and the dots you have passed fill in. The last entry, a new wing that has not opened yet, uses a dashed dot and an “Upcoming” tag to set it apart.',
    'The convention is that order must be obvious at a glance. Pick oldest-first or newest-first and stick to it, and put dates in the same place and format every time. In HTML, order carries meaning, so use an ordered list, <ol>, and mark dates up with <time datetime="1962"> so search engines and screen readers know they are dates.',
    'A stepper can look similar but does a different job. A stepper shows where you are in a process you are still going through (“step 2 of 3: shipping”). A timeline records things that have already happened — plus, sometimes, what is planned.',
  ],
  when: [
    'An “Our story” or company history page for a business, shop or hotel',
    'A product changelog showing what changed and when',
    'Order tracking or support history — the progress of one thing over time',
    'An event-day schedule (10:00 Check-in, 10:30 Keynote…)',
  ],
  avoid: [
    'Only two or three events — a plain list is enough',
    'Steps the user still has to complete; that is a stepper’s job',
    'Information whose order does not matter, like a feature list — cards or bullets read better',
  ],
  prompt:
    'Add a vertical timeline to our company history page. Use an <ol> with <li> items in chronological order (oldest first), and mark each date up with <time datetime="…">. Draw one {{line:t}} vertical line down the left side and center a {{dot:t}} round dot on it at the top of each item. Space the items {{gap:t}} apart. Keep everything on one side — no alternating left/right layout — so it reads well on phones. Mark upcoming items with a dashed dot and an “Upcoming” tag, not color alone. Draw the line and dots with CSS pseudo-elements (::before), no images.',
  howTo: [
    'Skip images and draw everything with CSS pseudo-elements. The list’s ::before draws the vertical line, and each item’s ::before draws a dot positioned over the line’s center. Base the horizontal offset on half the dot size and the dot stays centered on the line no matter how big you make it.',
    'The alternating left/right layout you see in many vertical timeline CSS demos looks good on a wide screen, but it makes the eye zigzag and you end up collapsing it to one side on phones anyway. A single-sided timeline reads the same everywhere. The “fill the line as you read” effect is optional — add it with a little JavaScript, and the timeline still works without it.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<ol class="timeline">
  <li>
    <time datetime="1962">1962</time>
    <h3>Founded</h3>
    <p>A young couple opened the lodge with six guest rooms.</p>
  </li>
  <li>
    <time datetime="1988">1988</time>
    <h3>Lakeside cabins added</h3>
    <p>Twelve log cabins along the shore, open year-round.</p>
  </li>
  <li class="is-future">
    <time datetime="2027-04">Apr 2027</time> <span class="up">Upcoming</span>
    <h3>New wing opens</h3>
    <p>A farm-to-table restaurant and a spa are on the way.</p>
  </li>
</ol>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.timeline {
  --dot: {{dot}};
  --line: {{line}};
  --rail: calc(var(--dot) + 16px);
  position: relative;
  display: grid;
  gap: {{gap}};
  margin: 0;
  padding: 0 0 0 var(--rail);
  list-style: none;
}
/* The vertical line */
.timeline::before {
  content: "";
  position: absolute;
  top: 6px;
  bottom: 0;
  left: calc(var(--dot) / 2 - var(--line) / 2);
  width: var(--line);
  background: #e4e2dc;
}
.timeline li { position: relative; }
/* The dot, centered on the line */
.timeline li::before {
  content: "";
  position: absolute;
  top: 5px;
  left: calc(var(--rail) * -1);
  width: var(--dot);
  height: var(--dot);
  box-sizing: border-box;
  border: 2px solid #f06a35;
  border-radius: 50%;
  background: #fff;
}
.timeline li.is-past::before { background: #f06a35; }
/* Upcoming: dashed, not just a different color */
.timeline li.is-future::before { border-style: dashed; border-color: #5d6272; }
.timeline time {
  font-weight: 700;
  color: #c2410c;
  font-variant-numeric: tabular-nums;
}
.timeline h3 { margin: 2px 0 0; font-size: 18px; }

@media (prefers-reduced-motion: no-preference) {
  .timeline li::before { transition: background-color 0.2s ease-out; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript (optional)',
      code: `// Fill the dots of items scrolled past the middle of the screen (optional)
const items = document.querySelectorAll('.timeline li:not(.is-future)');
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    // Item top above the middle of the viewport = already read
    e.target.classList.toggle('is-past', e.boundingClientRect.top < e.rootBounds.bottom);
  }
}, { rootMargin: '0px 0px -50% 0px' });
items.forEach((li) => io.observe(li));`,
    },
  ],
  tune: [
    { key: 'dot', label: 'Dot size', min: 8, max: 24, step: 2, value: 14, unit: 'px' },
    { key: 'line', label: 'Line width', min: 1, max: 6, step: 1, value: 2, unit: 'px' },
    { key: 'gap', label: 'Item spacing', min: 16, max: 64, step: 8, value: 32, unit: 'px' },
  ],
  cautions: [
    'Use <ol>, not <ul>: the order matters. Screen readers announce “list, 7 items”, which also tells people how far along they are.',
    'Write dates with <time datetime="2026-10">. The visible text can say whatever reads best (“Oct 2026”) while machines get an exact date.',
    'Do not separate past from upcoming, or done from pending, by color alone. A dashed dot or an “Upcoming” label works for people who cannot tell the colors apart.',
    'For long histories, break the timeline up with decade headings, or go newest-first so recent events come first. Dozens of identical entries make it hard to keep your place.',
  ],
  similar: [
    { slug: 'stepper', diff: 'A stepper shows where you are in a process you are completing. A timeline records events in the order they happened.' },
    { slug: 'scrollspy', book: 'ugoki', diff: 'Scrollspy highlights the heading you are reading in a table of contents. The demo’s line-fills-as-you-read effect works on the same idea.' },
    { slug: 'progress-bar', book: 'ugoki', diff: 'A scroll progress bar shows how far through the whole page you are. Filling the timeline line does the same, but only within the timeline.' },
  ],
  faq: [
    {
      q: 'Should a vertical timeline alternate left and right?',
      a: 'It looks striking, but one side is easier to read. Alternating makes the eye zigzag, and on phones you have to collapse it to one side anyway. Save it for showcase pages where visuals matter more than scanning.',
    },
    {
      q: 'Oldest first or newest first?',
      a: 'Oldest first suits a story, like a company history. Newest first suits updates people check for, like a changelog or news. Either way, never mix the two on one page.',
    },
    {
      q: 'Can I build a timeline with CSS only?',
      a: 'Yes. The line is the list’s ::before and each dot is an item’s ::before, so no JavaScript is required. Reach for JavaScript, such as an IntersectionObserver, only for extras like filling the line as you scroll.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
