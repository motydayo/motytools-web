import type { Ugoki } from '../types';

export default {
  slug: 'progress-bar',
  no: 7,
  category: 'scroll',
  name: 'Scroll progress bar',
  en: 'スクロールプログレスバー',
  aka: ['Reading progress bar', 'Scroll indicator', 'Reading progress indicator', 'Scroll progress indicator', 'Read-time bar'],
  mode: 'scroll',
  title: 'Reading Progress Bar: Show Scroll Progress with CSS and JS',
  description:
    'Show how far a reader has scrolled with a thin bar at the top. Tunable demo, a short JS version, the CSS-only scroll() timeline and accessibility tips.',
  oneLine: 'A thin bar at the top fills from left to right as you read.',
  what: [
    'A thin line sits along the top of the page and grows from left to right as you scroll, reaching the far edge when you hit the bottom. Blogs and news sites use it on long articles, where it is usually called a reading progress bar or scroll indicator.',
    'In the demo, the orange line sits just under the sticky header and the number on the right shows the percentage read. The browser scrollbar is thin and easy to ignore on long articles; a visible bar answers “how much is left?” at a glance, which can nudge people to keep going.',
  ],
  when: [
    'Long blog or content-marketing articles you want people to finish',
    'Tutorials and how-to guides that take several minutes to read',
    'Long documents such as terms of service or manuals where knowing your place helps',
    'Pages that already have a sticky header — the bar slots in right underneath',
  ],
  avoid: [
    'Short pages of one or two screens: the bar fills almost instantly and means nothing',
    'Infinite feeds where the page keeps growing, so the bar jumps backwards',
    'Product pages and other pages where reading to the end is not the goal',
  ],
  prompt:
    'Add a reading progress bar to the article page. Place a {{thick:t}} line in {{color}} at the top of the viewport, directly under the sticky header, and keep it there with position: sticky. Grow it from the left by the fraction read (scroll position ÷ maximum scroll distance). Scale it with transform: scaleX rather than changing width, and throttle the scroll handler with requestAnimationFrame. Give it role="progressbar" with aria-valuenow so screen readers can announce the percentage. Do not use a library. Set the transform transition to {{lag:t}}; at 0 there is no transition and the bar tracks the scroll exactly, which is the recommended setting and is also comfortable for people with prefers-reduced-motion.',
  howTo: [
    'The math is one line: current scroll position divided by the maximum you can scroll (page height minus viewport height). 0 means the top, 1 means the end. Feed that value straight into transform: scaleX with the transform origin on the left edge.',
    'Transforms are cheaper for the browser than changing width, so the bar stays smooth while scrolling. Batch scroll events with requestAnimationFrame. Newer browsers can build this in pure CSS with animation-timeline: scroll(), but support is not universal yet, so the example uses JavaScript.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="progress" role="progressbar" aria-label="Reading progress"
     aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
  <span class="progress-bar"></span>
</div>

<article>
  <h1>Your first hike: 4 things to pack before you go</h1>
  <!-- article body -->
</article>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.progress {
  position: sticky; /* with a header, place it inside or right below it */
  top: 0;
  z-index: 10;
  height: {{thick}};
  background: #e4e2dc;
}
.progress-bar {
  display: block;
  height: 100%;
  background: {{color}};
  transform: scaleX(var(--p, 0)); /* 0 to 1 */
  transform-origin: left center;  /* grow from the left edge */
  transition: transform {{lag}} ease-out; /* 0s (none) is recommended */
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const progress = document.querySelector('.progress');
let ticking = false;

function update() {
  ticking = false;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
  progress.style.setProperty('--p', p);
  progress.setAttribute('aria-valuenow', Math.round(p * 100));
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}, { passive: true });
window.addEventListener('resize', update);
update();`,
    },
  ],
  tune: [
    { key: 'thick', label: 'Bar thickness', min: 2, max: 10, step: 1, value: 4, unit: 'px' },
    { key: 'color', type: 'color', label: 'Bar color', value: '#f06a35' },
    { key: 'lag', label: 'Catch-up delay', min: 0, max: 0.6, step: 0.05, value: 0, unit: 's' },
  ],
  cautions: [
    'If you measure the whole page, footer and related posts included, the bar never reaches the end when the article does. Measuring only the article element is more accurate.',
    'Images that load late change the page height and throw the percentage off. Recalculate on resize and after images load.',
    'Give the bar at least 3:1 contrast against the background. It is only a few pixels tall, so a pale color all but disappears.',
    'The bar just follows the scroll, so it is easy on people who prefer reduced motion. Avoid adding a long easing transition that makes it lag behind.',
  ],
  similar: [
    {
      slug: 'scrollspy',
      diff: 'Scrollspy highlights the heading you are currently reading in a table of contents. A progress bar ignores headings and shows the overall share of the page you have covered.',
    },
    {
      slug: 'sticky-header',
      diff: 'A sticky header keeps navigation at the top. The progress bar usually lives right underneath it, and the two are often used together.',
    },
    {
      slug: 'back-to-top',
      diff: 'A back-to-top button takes you to the start of the page. A progress bar only shows where you are; it is not clickable.',
    },
  ],
  faq: [
    {
      q: 'Can I make a reading progress bar with CSS only?',
      a: 'Yes, in browsers that support scroll-driven animations: animate scaleX from 0 to 1 with animation-timeline: scroll(). Where it is unsupported the bar simply stays empty, so for now use JavaScript or ship it as a fallback alongside the CSS version.',
    },
    {
      q: 'How do I put the bar under my header instead of at the very top?',
      a: 'Place it as the last element inside the header. If the header is sticky, the bar stays pinned with it. That is how the demo is built.',
    },
    {
      q: 'Does a reading progress bar increase how many people finish an article?',
      a: 'It is used on the theory that seeing how much is left makes long reads less daunting, but results depend on the content. Measure scroll depth before and after adding it to know for sure.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
