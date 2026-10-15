import type { Ugoki } from '../types';

export default {
  slug: 'smooth-scroll',
  no: 21,
  category: 'load',
  name: 'Smooth scroll',
  en: 'スムーススクロール',
  aka: ['scroll-behavior: smooth', 'Smooth scrolling anchor links', 'Smooth scroll to section', 'Animated anchor scroll', 'Jump links'],
  mode: 'script',
  title: 'Smooth Scroll in CSS: scroll-behavior: smooth for Anchor Links',
  description:
    'Make anchor links glide to their section with one line of CSS. Live demo, scroll-margin-top so sticky headers stop hiding headings, and common fixes.',
  oneLine: 'Click a link in the table of contents and the page glides to that heading.',
  what: [
    'When someone clicks a menu or table-of-contents link that points to a section on the same page, the page glides down to the heading instead of jumping there instantly. In the demo, click “Rates” or “Directions” and the frame scrolls smoothly, stops at the heading, and briefly highlights it. Switch the behavior to Instant in the controls to compare, or set the stop offset to 0px to see a heading disappear behind the sticky header.',
    'An instant jump leaves people unsure where they landed and which way they moved. A visible glide shows that they went down the page, which keeps them oriented on long landing pages. These days it takes a single line of CSS.',
  ],
  when: [
    'Long landing pages with a top menu linking to Pricing, FAQ and other sections',
    'Long articles with a table of contents',
    'A “Book now” button that leads to a form further down the same page',
    'A back-to-top button that returns to the start of the page',
  ],
  avoid: [
    'Hijacking mouse-wheel and touch scrolling with custom smoothing — it never stops where people expect and feels heavy',
    'Jumps across an extremely long page, where the glide takes long enough to feel like waiting',
    'Tools and search-heavy screens where getting there instantly is the whole point',
  ],
  prompt:
    'Add smooth scrolling to in-page anchor links (table of contents and menu links like <a href="#pricing">). Use CSS only: html { scroll-behavior: smooth; } — no JavaScript and no libraries. The sticky header is 56px tall, so give the target headings scroll-margin-top: {{margin}}; so they do not end up hidden behind it. Under @media (prefers-reduced-motion: reduce), set scroll-behavior back to auto so the jump is instant.',
  howTo: [
    'It is one line of CSS. Set scroll-behavior: smooth on html, and the browser animates every jump to an anchor on the page. jQuery animate() and smooth-scroll libraries used to be necessary; they are not anymore.',
    'Add scroll-margin-top to the target headings as well. It moves the stopping point down, which matters whenever a sticky header covers the top of the screen. The demo lives inside an article, so a few lines of JavaScript scroll only the frame instead of the whole page, but the smoothness itself still comes from the same CSS property.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<header class="site-header">
  <nav aria-label="On this page">
    <a href="#rooms">Rooms</a>
    <a href="#rates">Rates</a>
    <a href="#directions">Directions</a>
    <a href="#faq">FAQ</a>
  </nav>
</header>

<h2 id="rooms">Rooms</h2>
<!-- … -->
<h2 id="rates">Rates</h2>
<!-- … -->`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* this is all it takes for smooth anchor scrolling */
html {
  scroll-behavior: {{behavior}};
}

/* stop below the 56px sticky header instead of behind it */
h2[id] {
  scroll-margin-top: {{margin}};
}

/* reduced motion: jump instantly */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}`,
    },
  ],
  tune: [
    {
      key: 'behavior',
      type: 'select',
      label: 'Behavior',
      value: 'smooth',
      options: [
        { value: 'smooth', label: 'Smooth' },
        { value: 'auto', label: 'Instant (auto)' },
      ],
    },
    { key: 'margin', label: 'Stop offset (scroll-margin-top)', min: 0, max: 120, step: 4, value: 64, unit: 'px' },
  ],
  cautions: [
    'The browser decides the speed and easing; CSS cannot change them. If you truly need a specific duration you have to animate the scroll in JavaScript, but the browser default is fine for almost every site.',
    'Setting it on html also smooths programmatic scrolling such as window.scrollTo(). Where you need an instant jump, say so explicitly: scrollTo({ top: 0, behavior: \'instant\' }).',
    'Following an anchor link also moves the keyboard starting point to the target, which is good for accessibility. That only works when the id matches the href exactly; if they differ, nothing happens at all.',
    'If the content scrolls inside a container (overflow: auto) rather than the page, put scroll-behavior: smooth on that container too.',
  ],
  similar: [
    {
      slug: 'scrollspy',
      diff: 'Scrollspy highlights the table-of-contents entry for the section you are reading. Smooth scroll is how the page moves when you click an entry. They pair well.',
    },
    {
      slug: 'back-to-top',
      diff: 'A back-to-top button returns to the start of the page, and smooth scroll is the usual way to make that return glide instead of jump.',
    },
    {
      slug: 'sticky-header',
      diff: 'A sticky header keeps the menu on screen. If that menu links to sections on the page, set scroll-margin-top so headings do not land behind it.',
    },
  ],
  faq: [
    {
      q: 'Why is scroll-behavior: smooth not working?',
      a: 'Check three things: the href matches the target id exactly, the scrolling element is html and not an inner container, and the device does not have Reduce Motion turned on — with the CSS above, that setting switches to instant jumps on purpose.',
    },
    {
      q: 'Can I change the smooth scroll speed?',
      a: 'Not with scroll-behavior. Controlling duration means animating the scroll position yourself in JavaScript, which is a lot of work for little gain. Let the browser handle it.',
    },
    {
      q: 'Should I smooth mouse-wheel scrolling too?',
      a: 'No. Libraries that override wheel and trackpad scrolling change a feel people are used to, so it overshoots, lags or feels heavy. Smooth only the jumps triggered by anchor links.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
