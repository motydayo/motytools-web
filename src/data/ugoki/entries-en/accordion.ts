import type { Ugoki } from '../types';

export default {
  slug: 'accordion',
  no: 28,
  category: 'inform',
  name: 'Accordion',
  en: 'アコーディオン',
  aka: ['FAQ accordion', 'Collapsible section', 'Expand/collapse', 'Disclosure widget', 'Details and summary'],
  mode: 'script',
  title: 'CSS Accordion Animation with details and summary (No JavaScript)',
  description:
    'Build an FAQ accordion on native details and summary, animate it to height: auto with interpolate-size, and allow one open item at a time. Demo and code.',
  oneLine: 'Click a question and its answer slides open; click again to close it.',
  what: [
    'Click a question in the FAQ and its answer slides open underneath while the chevron flips to point up. Open another question and the previous one closes automatically. In the full demo you can also Tab to a question and open it with Enter or Space.',
    'Accordions fold long content down to a scannable list of headings, so people only open what matters to them — handy on long mobile pages. The animation is not decoration: if the height snapped instantly, it would be hard to tell what just opened. A short slide shows that the answer came from that question.',
  ],
  when: [
    'FAQ sections on landing pages, product pages and support sites',
    'Fine print under a pricing table, such as billing terms or plan limits',
    'Nested categories in a mobile navigation menu',
    'Long documents like terms of service or job descriptions that people scan by heading',
  ],
  avoid: [
    'Information almost everyone needs; hidden content often goes unread and turns into support tickets',
    'Just two or three short items — showing them all is faster',
    'Content people need to compare side by side, such as plan features (exclusive accordions only show one at a time)',
  ],
  prompt:
    'Turn the FAQ into an accordion built on native HTML details and summary elements, with no JavaScript. Opening and closing should animate over {{dur:t}} using {{ease}} timing: set interpolate-size: allow-keywords on :root and transition the height of details::details-content from 0 to auto (plus content-visibility with allow-discrete). Give all details elements the same name attribute so opening one closes the others. Hide the default disclosure triangle and add a chevron SVG on the right that rotates 180 degrees when open. Make each question row at least {{row:t}} tall with a visible keyboard focus ring. For prefers-reduced-motion users, open and close without animation. Browsers without interpolate-size support should simply open instantly.',
  howTo: [
    'Start with details (the collapsible box) and summary (its always-visible heading). That alone gives you click-to-toggle, Enter and Space support, and the correct “collapsed / expanded” announcement in screen readers. Give several details elements the same name and the browser makes them exclusive: opening one closes the rest.',
    'For the slide, two newer CSS features do the work: interpolate-size: allow-keywords lets the browser animate to height: auto, and ::details-content targets the hidden part of a details element. Transition its height from 0 to auto and you are done. In browsers that do not support them yet, the accordion still works; it just opens instantly.',
    'If you need the animation everywhere today, wrap the answer in a grid container and transition grid-template-rows from 0fr to 1fr (the small preview on the index page uses this). That version needs JavaScript to toggle state and a button with aria-expanded.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="faq">
  <details name="faq" open>
    <summary>
      What time is check-in?
      <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
    </summary>
    <p>Check-in is from 3 PM to 7 PM. Arriving later? Call us before noon on the day.</p>
  </details>
  <details name="faq">
    <summary>
      Is there parking?
      <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
    </summary>
    <p>Yes. There are 12 free spaces in front of the inn, no reservation needed.</p>
  </details>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* Allow transitions to and from height: auto */
:root { interpolate-size: allow-keywords; }

.faq details { border-bottom: 1px solid #e4e2dc; }
.faq summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: {{row}};
  font-weight: 700;
  cursor: pointer;
  list-style: none; /* hide the default triangle */
}
.faq summary::-webkit-details-marker { display: none; }
.faq summary:focus-visible { outline: 2px solid #4f73d9; outline-offset: 2px; }
.faq .chev { flex: none; transition: transform 0.2s ease-out; }
.faq details[open] .chev { transform: rotate(180deg); }
.faq details p { margin: 0; padding-bottom: 12px; }

/* The open/close animation */
.faq details::details-content {
  height: 0;
  overflow: clip;
  transition: height {{dur}} {{ease}}, content-visibility {{dur}} allow-discrete;
}
.faq details[open]::details-content { height: auto; }

@media (prefers-reduced-motion: reduce) {
  .faq details::details-content, .faq .chev { transition: none; }
}`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Open/close duration', min: 0, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    {
      key: 'ease',
      type: 'select',
      label: 'Easing',
      value: 'ease-out',
      options: [
        { value: 'ease-out', label: 'Ease-out (decelerate)' },
        { value: 'ease-in-out', label: 'Ease-in-out' },
        { value: 'linear', label: 'Linear' },
        { value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', label: 'Overshoot (springy)' },
      ],
    },
    { key: 'row', label: 'Question row height', min: 40, max: 64, step: 4, value: 48, unit: 'px' },
  ],
  cautions: [
    '::details-content now works in all major browsers, but interpolate-size is still limited to Chromium-based browsers. Elsewhere the accordion simply opens without the slide, and the content stays fully usable.',
    'Do not put links or buttons inside summary. A click becomes ambiguous (toggle or navigate?), and screen readers announce a confusing mix of roles.',
    'If you build your own with divs and JavaScript, the trigger must be a button with aria-expanded and aria-controls, or keyboard and screen reader users are locked out. details and summary give you all of that for free.',
    'Collapsed details content is still findable with Ctrl+F / Cmd+F: Chrome opens the matching details automatically. Hidden divs do not get that behavior.',
  ],
  similar: [
    {
      slug: 'tab-indicator',
      diff: 'Tabs swap content in one place and always show exactly one panel. Accordions stack sections vertically and open each one in the flow of the page.',
    },
    {
      slug: 'scrollspy',
      diff: 'A scrollspy keeps the whole document visible and highlights where you are. An accordion collapses the document to headings and lets people choose what to read.',
    },
  ],
  faq: [
    {
      q: 'Why won’t my details element animate?',
      a: 'details shows its content instantly, so a plain height transition does nothing. Combine interpolate-size: allow-keywords with a height transition on ::details-content. If it still does not animate, the browser probably does not support interpolate-size yet (it is Chromium-only for now).',
    },
    {
      q: 'How do I make only one accordion item open at a time?',
      a: 'Give every details element in the group the same name attribute — no JavaScript needed. Browsers that do not support it simply allow several to be open at once.',
    },
    {
      q: 'Is content inside a collapsed accordion indexed by Google?',
      a: 'Yes. Content that is in the HTML is crawled even when collapsed. Still, keep the information that defines the page visible, since that is what readers see first.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
