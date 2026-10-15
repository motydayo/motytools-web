import type { Ugoki } from '../types';

export default {
  slug: 'marquee',
  no: 22,
  category: 'load',
  name: 'Marquee',
  en: 'マーキー',
  aka: ['Infinite scrolling text', 'Logo ticker', 'Scrolling logo bar', 'Text ticker', 'Infinite carousel'],
  mode: 'loop',
  title: 'CSS Marquee: Seamless Infinite Scrolling Text and Logo Ticker',
  description:
    'Build a seamless CSS marquee for text or logos without the obsolete <marquee> tag. Adjustable speed, spacing and direction, plus pause on hover. Demo and code.',
  oneLine: 'A strip of words or logos that scrolls sideways forever, with no visible seam.',
  what: [
    'A single row of text or logos slides across the screen at a steady pace and never runs out. In the demo, the navy band scrolls service keywords to the left while a row of client names drifts the other way underneath. Hover over either row and it stops.',
    'Movement turns a band into a visual break that catches the eye on an otherwise quiet page. It is especially useful for “there are a lot of these” content — client logos, press mentions, brands you carry — where showing all of them in a grid would take too much room. The catch: moving text is hard to read, so keep anything people actually need to read out of a marquee.',
  ],
  when: [
    'A “Trusted by” strip of client, partner or press logos that should not take up a whole section',
    'Agency and studio sites that want big, bold service keywords as a design statement',
    'A visual divider between two long sections of a landing page',
    'A short, repeating announcement like “Free shipping on orders over $50”',
  ],
  avoid: [
    'Long sentences or announcements people need to read to the end',
    'Prices, dates, phone numbers or anything that must be read accurately',
    'Several marquees on one page — nothing stands out and the page feels restless',
  ],
  prompt:
    'Turn the row of client names into a marquee (infinite scrolling ticker). Duplicate the list so the same set appears twice in a row, then animate the track with CSS @keyframes from transform: translateX(0) to translateX(-50%), {{dur:t}} per loop, linear, infinite, so there is no visible seam. Scroll direction: {{dir:t}}. Use a {{gap:t}} gap between items and the same gap between the two copies. Add aria-hidden="true" to the duplicate so screen readers do not read it twice, and pause the animation on hover with animation-play-state: paused. Stop the animation entirely under prefers-reduced-motion: reduce. No JavaScript and no libraries.',
  howTo: [
    'The trick is to render the list twice, back to back. Slide the whole track left, and the moment it has moved exactly half its width (one full copy) the animation snaps back to the start. Because the second copy is identical to the first, the jump is invisible and the strip appears to scroll forever. All of this is CSS @keyframes plus transform — no JavaScript needed.',
    'Since it never stops, use linear timing so the speed stays constant. Pause it on hover with animation-play-state: paused so people can read it, and hide the duplicate list from screen readers with aria-hidden.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="marquee">
  <div class="marquee-track">
    <ul class="marquee-set">
      <li>Pine Ridge Lodge</li>
      <li>Corner Books</li>
      <li>Harbor Coffee</li>
      <li>Forest Bakery</li>
    </ul>
    <!-- Same list again, hidden from screen readers -->
    <ul class="marquee-set" aria-hidden="true">
      <li>Pine Ridge Lodge</li>
      <li>Corner Books</li>
      <li>Harbor Coffee</li>
      <li>Forest Bakery</li>
    </ul>
  </div>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.marquee {
  overflow: hidden; /* clip everything outside the strip */
}
.marquee-track {
  display: flex;
  width: max-content;
  /* constant speed; resets after moving one copy (reverse = rightward) */
  animation: marquee {{dur}} linear infinite {{dir}};
}
.marquee-set {
  display: flex;
  gap: {{gap}};
  margin: 0;
  padding: 0 {{gap}} 0 0; /* same gap between the two copies */
  list-style: none;
  white-space: nowrap;
}
@keyframes marquee {
  to { transform: translateX(-50%); }
}

/* Pause on hover so people can read it */
.marquee:hover .marquee-track {
  animation-play-state: paused;
}

/* Respect reduced-motion settings */
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Loop duration', min: 5, max: 60, step: 1, value: 20, unit: 's' },
    { key: 'gap', label: 'Item spacing', min: 8, max: 80, step: 4, value: 32, unit: 'px' },
    {
      key: 'dir',
      type: 'select',
      label: 'Direction',
      value: 'normal',
      options: [
        { value: 'normal', label: 'Leftward' },
        { value: 'reverse', label: 'Rightward' },
      ],
    },
  ],
  cautions: [
    'If one copy of the list is narrower than the viewport, a gap opens up on the right. Add more items, or repeat the list three or more times and move the track by one copy (for three copies, -33.333%).',
    'WCAG 2.2.2 (Pause, Stop, Hide) asks that anything moving for more than five seconds can be paused. Pause on hover only helps mouse users, so add a visible pause button too.',
    'Too fast and nobody can read it — it also gets tiring to look at. For a typical logo strip, 20–40 seconds per loop is a comfortable range.',
    'The <marquee> element is obsolete in the HTML standard. Browsers still render it, but it leaves a blank gap between loops and ignores reduced-motion settings. Build it with CSS instead.',
  ],
  similar: [
    {
      slug: 'horizontal-scroll',
      diff: 'Horizontal scroll moves content sideways as the visitor scrolls down. A marquee runs on its own, regardless of what the visitor does.',
    },
    {
      slug: 'floating',
      diff: 'A floating animation also loops forever, but it bobs up and down in place instead of travelling across the screen. A marquee pulls far more attention.',
    },
  ],
  faq: [
    {
      q: 'Why is there a gap or jump in my CSS marquee?',
      a: 'Check three things: the list is duplicated exactly once, the track moves exactly -50%, and the spacing between the two copies matches the spacing between items (the padding-right in the example). If the list is shorter than the screen, add more items.',
    },
    {
      q: 'Can I still use the HTML <marquee> tag?',
      a: 'Avoid it. The HTML standard marks it obsolete, so validators flag it, and although browsers still render it, it cannot loop without a blank gap or honor reduced-motion settings. A CSS animation gives you the same look without those problems.',
    },
    {
      q: 'Is marquee text bad for SEO?',
      a: 'No. As long as the text is in the HTML, search engines read it like any other text. The duplicate copy repeats a few short names, which is not a problem in practice.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
