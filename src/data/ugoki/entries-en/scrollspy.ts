import type { Ugoki } from '../types';

export default {
  slug: 'scrollspy',
  no: 29,
  category: 'inform',
  name: 'Scrollspy',
  en: 'スクロールスパイ（目次の現在地）',
  aka: ['Scroll spy', 'Active table of contents', 'Highlight current section', 'Sticky TOC', 'Active nav link on scroll'],
  mode: 'scroll',
  title: 'Scrollspy in Vanilla JS: Highlight the Active TOC Link on Scroll',
  description:
    'Highlight the current section in a table of contents as you scroll, using IntersectionObserver, not Bootstrap. Adjustable trigger line, sticky TOC, mobile pills.',
  oneLine: 'As you scroll, the table of contents highlights the section you are reading.',
  what: [
    'Scroll down the “Mountain Lodge Guest Guide” and the table of contents on the left keeps up: the section you are reading turns bold and gets an orange bar, moving from Check-in to Rooms to Dining as you go. Click an entry and the page glides to that heading. The dashed line in the demo is the trigger line — a section becomes active when its top crosses it.',
    'On long pages people lose track of where they are and how much is left. A scrollspy works like the “you are here” dot on a map: it shows your position in the whole and lets you jump anywhere. On narrow screens, the TOC turns into a sticky row of pills, and the active one slides into view.',
  ],
  when: [
    'Long blog posts, tutorials and documentation with five or more headings',
    'Help centers and user guides where people jump between sections',
    'One-page landing pages (Features, Pricing, Customers, FAQ) with a sticky nav',
    'Terms of service, policies and specs with many numbered sections',
  ],
  avoid: [
    'Short pages with two or three headings; a TOC is overkill',
    'Pages with very uneven sections where a few lines each make the highlight jump erratically',
    'Mobile layouts where a sticky TOC would eat most of the screen; use a pill row or a collapsible menu',
  ],
  prompt:
    'Add a scrollspy to the article’s table of contents. On desktop, place the TOC left of the content and keep it visible with position: sticky; on screens 640px and narrower, turn it into a horizontally scrollable row of pills stuck to the top. Use IntersectionObserver with a rootMargin that ignores the bottom of the viewport so only sections within the top {{line:t}} count, and mark the lowest of those sections as active. Give the active link aria-current="true", make it bold, and grow a colored bar on its left over {{speed:t}}. When the user reaches the very bottom of the page, activate the last link even if its section is short. TOC links should be normal #anchor links with scroll-behavior: smooth and scroll-margin-top on sections so headings do not hide under a fixed header. For prefers-reduced-motion users, jump instantly instead of smooth scrolling. No jQuery or Bootstrap.',
  howTo: [
    'IntersectionObserver reports when elements enter or leave a region of the viewport. A negative bottom rootMargin shrinks that region to a band at the top of the screen — with the default line at 35%, rootMargin is "0px 0px -65% 0px". Of the sections inside the band, the lowest one is the one you are reading, so the highlight moves exactly when a heading crosses the line.',
    'Unlike the old approach of measuring every heading’s offsetTop on each scroll event, the observer only fires when something changes, so it stays cheap on long pages. Because the TOC uses plain anchor links, smooth scrolling on click is just scroll-behavior: smooth in CSS.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="layout">
  <nav class="toc" aria-label="On this page">
    <ol>
      <li><a href="#check-in">Check-in</a></li>
      <li><a href="#rooms">Rooms</a></li>
      <li><a href="#dining">Dining</a></li>
      <li><a href="#getting-here">Getting here</a></li>
    </ol>
  </nav>
  <main>
    <section id="check-in"><h2>Check-in</h2><p>…</p></section>
    <section id="rooms"><h2>Rooms</h2><p>…</p></section>
    <section id="dining"><h2>Dining</h2><p>…</p></section>
    <section id="getting-here"><h2>Getting here</h2><p>…</p></section>
  </main>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `html { scroll-behavior: smooth; }
section { scroll-margin-top: 72px; } /* clear the fixed header */

.layout { display: grid; grid-template-columns: 180px 1fr; gap: 32px; }
.toc { position: sticky; top: 72px; align-self: start; }
.toc ol { list-style: none; margin: 0; padding: 0; border-left: 2px solid #e4e2dc; }
.toc a {
  position: relative;
  display: block;
  padding: 8px 12px;
  color: #5d6272;
  text-decoration: none;
  transition: color {{speed}} ease-out;
}
/* Active marker */
.toc a::before {
  content: '';
  position: absolute;
  left: -2px; top: 4px; bottom: 4px;
  width: 2px;
  background: #f06a35;
  transform: scaleY(0);
  transition: transform {{speed}} ease-out;
}
.toc a[aria-current='true'] { color: #1f2433; font-weight: 700; }
.toc a[aria-current='true']::before { transform: scaleY(1); }

/* Mobile: sticky row of pills */
@media (max-width: 640px) {
  .layout { display: block; }
  .toc { top: 0; z-index: 5; background: #fff; overflow-x: auto; }
  .toc ol { display: flex; gap: 6px; padding: 8px 12px; border: 0; }
  .toc a { white-space: nowrap; border-radius: 999px; padding: 4px 12px; }
  .toc a::before { display: none; }
  .toc a[aria-current='true'] { background: #1d2541; color: #fff; }
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .toc a, .toc a::before { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const links = [...document.querySelectorAll('.toc a')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href')));
const inBand = new Set();
const LINE = {{line:n}}; // trigger line, % from the top of the viewport

function setActive(i) {
  links.forEach((a, j) => {
    if (i === j) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
}

// Track sections inside the top LINE% of the viewport
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => (e.isIntersecting ? inBand.add(e.target) : inBand.delete(e.target)));
  const hit = sections.filter((s) => inBand.has(s));
  if (hit.length) setActive(sections.indexOf(hit[hit.length - 1]));
}, { rootMargin: \`0px 0px -\${100 - LINE}% 0px\` });

sections.forEach((s) => io.observe(s));

// At the very bottom, activate the last link (short last sections never reach the line)
addEventListener('scroll', () => {
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
    setActive(sections.length - 1);
  }
}, { passive: true });`,
    },
  ],
  tune: [
    { key: 'line', label: 'Trigger line (from top)', min: 10, max: 90, step: 5, value: 35, unit: '%' },
    { key: 'speed', label: 'Marker transition', min: 0, max: 0.6, step: 0.05, value: 0.2, unit: 's' },
  ],
  cautions: [
    'If the last section is short, it may never reach the trigger line, so the last link never lights up. Activate the last link when the page hits bottom (as in the code), or add padding to the final section.',
    'An ancestor with overflow: hidden breaks position: sticky. If the TOC will not stick, check the parent elements first.',
    'Do not rely on color alone for the active state. Add weight or a bar so people with color vision deficiencies can see it, and set aria-current="true" for screen readers.',
    'With a fixed header, headings reached through the TOC land underneath it. Give sections a scroll-margin-top slightly larger than the header height.',
  ],
  similar: [
    {
      slug: 'progress-bar',
      diff: 'A scroll progress bar shows how much of the whole page you have read. A scrollspy shows which section you are in.',
    },
    {
      slug: 'smooth-scroll',
      diff: 'Smooth scroll animates the jump when you click an anchor link. It pairs naturally with a scrollspy TOC.',
    },
    {
      slug: 'sticky-header',
      diff: 'A sticky header just keeps the nav bar on screen. Add an active state to its links based on the current section and it becomes a scrollspy too.',
    },
  ],
  faq: [
    {
      q: 'Do I need Bootstrap for a scrollspy?',
      a: 'No. Bootstrap ships a Scrollspy component, but IntersectionObserver does the same job in about 20 lines of vanilla JavaScript. The code above works without any library.',
    },
    {
      q: 'Why does the wrong TOC item stay highlighted?',
      a: 'The trigger band does not match your layout. Move the line lower (for example from 35% to 50%) to switch sooner, or higher to switch later — try the slider in the demo. With a fixed header, also add a negative top rootMargin equal to the header height.',
    },
    {
      q: 'How should a table of contents work on mobile?',
      a: 'A horizontal row of pills stuck under the header works well, with the active pill scrolled into the center. For long TOCs, use a sticky “On this page” button that opens the full list, so the content keeps most of the screen.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
