import type { Ugoki } from '../types';

export default {
  slug: 'scroll-snap',
  no: 6,
  category: 'scroll',
  name: 'Scroll snap',
  en: 'スクロールスナップ',
  aka: ['CSS scroll snap', 'Scroll snapping', 'Full-page scroll', 'Snap scrolling', 'scroll-snap-type'],
  mode: 'scroll',
  title: 'CSS Scroll Snap: Full-Page Sections That Snap Into Place',
  description:
    'Stop a page one full screen at a time with CSS scroll snap (scroll-snap-type, scroll-snap-align). Tunable demo, mandatory vs proximity, and why snap fails.',
  oneLine: 'Scroll a little, let go, and the page clicks to the next screen.',
  what: [
    'With scroll snapping, the page never comes to rest halfway between sections. When you stop scrolling, it glides to the nearest snap point, so each screen lands cleanly — like flipping through photos instead of sliding a long strip of film. No more headlines or images cut in half at the edge of the viewport.',
    'The demo splits a hotel page into four full-screen panels. Scroll a little and let go, and it pulls itself to the top of the next panel; the pill on the right shows which panel you are on. This used to require a JavaScript library like fullPage.js. Today it is a few lines of CSS.',
  ],
  when: [
    'Hotel, resort and brand landing pages that show one big photo per screen',
    'Feature tours that present one idea per screen, like slides',
    'Swipeable card or photo rows on mobile (horizontal snap carousels)',
    'Presentation-style pages split into clear chapters',
  ],
  avoid: [
    'Sections with more text than fits on one screen — people get yanked to the next panel before they can read the rest',
    'Articles, blog posts and pricing pages people read at their own pace',
    'Snapping only part of a page with mandatory: the pull is strong and fights normal reading',
  ],
  prompt:
    'Turn the home page into full-screen sections with CSS scroll snap. Use CSS only — no JavaScript and no library. Put scroll-snap-type: y {{snap}}; on html, make each section height: {{size:n}}svh ({{size:t}} of the screen), and give it scroll-snap-align: {{align}}; and scroll-snap-stop: always; so the page stops at every section. Add a small dot indicator on the right showing the current section. If a section’s content does not fit the screen, set that section to height: auto and soften snapping to proximity, which only snaps when you stop close to a snap point.',
  howTo: [
    'You need two properties. On the scroll container — html for the whole page — set scroll-snap-type: y mandatory, meaning “on the vertical axis, always come to rest on a snap point”. On each child you want to stop at, set scroll-snap-align: start, meaning “snap so this element’s top edge lines up with the top of the viewport”. Make each child one screen tall and the page moves one screen at a time.',
    'Add scroll-snap-stop: always so a hard flick cannot skip past a section. For a gentler pull, change mandatory to proximity: the browser only snaps when you stop near a snap point. For a horizontal carousel, use x and lay the children out in a row.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="slide">
  <h2>Wake up to the waves</h2>
</section>
<section class="slide">
  <h2>Ocean-view suites</h2>
</section>
<section class="slide">
  <h2>Fresh catch, grilled</h2>
</section>
<section class="slide">
  <h2>From $160 / night</h2>
  <a href="/reserve">Check dates</a>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* Goes on the scroll container (html for the whole page) */
html {
  scroll-snap-type: y {{snap}}; /* mandatory = always snap, proximity = only when close */
}
body { margin: 0; }

.slide {
  height: {{size:n}}svh; /* svh stays stable as mobile browser bars show and hide */
  display: grid;
  place-items: center;
  scroll-snap-align: {{align}}; /* start = top edge, center = middle */
  scroll-snap-stop: always; /* never skip a section on a fast flick */
}
.slide:nth-child(odd) { background: #dfe8fb; }
.slide:nth-child(even) { background: #ffe3d4; }

/* Reduced motion: soften the pull */
@media (prefers-reduced-motion: reduce) {
  html { scroll-snap-type: y proximity; }
}`,
    },
  ],
  tune: [
    {
      key: 'snap',
      type: 'select',
      label: 'Snap strictness',
      value: 'mandatory',
      options: [
        { value: 'mandatory', label: 'mandatory (always snap)' },
        { value: 'proximity', label: 'proximity (only when close)' },
      ],
    },
    { key: 'size', label: 'Section height (of screen)', min: 60, max: 100, step: 5, value: 100, unit: '%' },
    {
      key: 'align',
      type: 'select',
      label: 'Snap alignment',
      value: 'start',
      options: [
        { value: 'start', label: 'start (top edge)' },
        { value: 'center', label: 'center (middle)' },
      ],
    },
  ],
  cautions: [
    'Snapping only works on the element that actually scrolls. For the whole page that is html, not body; inside a box it is the element with overflow: auto or scroll.',
    'On mobile, 100vh includes the area behind the address bar, so sections snap slightly off. Use 100svh.',
    'If a section is taller than the screen, its lower part becomes unreachable under mandatory. Give long sections height: auto or switch to proximity.',
    'Snapping changes how scrolling itself behaves. Check that the mouse wheel, arrow keys, Page Down and the space bar all move one section at a time.',
  ],
  similar: [
    {
      slug: 'pinning',
      diff: 'Pinning holds a panel still and swaps its content. Scroll snap moves the whole screen to the next section and stops there.',
    },
    {
      slug: 'smooth-scroll',
      diff: 'Smooth scrolling animates the jump when you click an in-page link. It does not make the page rest at section boundaries.',
    },
    {
      slug: 'horizontal-scroll',
      diff: 'A horizontal scroll section slides content sideways as you scroll down. Horizontal scroll snap (x) gives you a swipeable row where each card clicks into place.',
    },
  ],
  faq: [
    {
      q: 'Why is CSS scroll snap not working?',
      a: 'Almost always because scroll-snap-type is on an element that is not the one scrolling. For full-page snapping, put it on html rather than body. Also make sure the children have scroll-snap-align; without it there is nothing to snap to.',
    },
    {
      q: 'What is the difference between mandatory and proximity?',
      a: 'mandatory always comes to rest on a snap point, which suits slide-like pages with one idea per screen. proximity only snaps when you stop close to a snap point, which suits normal pages where you want a light assist rather than a hard stop.',
    },
    {
      q: 'Do I still need fullPage.js?',
      a: 'Not for the basic effect. Native CSS scroll snap needs no download and follows the platform’s own touch and trackpad physics. A library is still useful if you want elaborate transitions between sections or callbacks for each slide.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
