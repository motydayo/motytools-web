import type { Ugoki } from '../types';

export default {
  slug: 'page-transition',
  no: 20,
  category: 'load',
  name: 'Page transition',
  en: 'ページ遷移アニメーション',
  aka: ['View Transitions API', 'View transition', 'Cross-document view transitions', 'Page transition animation', 'Route transition'],
  mode: 'script',
  title: 'CSS Page Transitions with the View Transitions API',
  description:
    'Animate transitions between regular HTML pages with @view-transition and a few lines of CSS, no framework needed. Adjustable timing, plus a JavaScript fallback.',
  oneLine: 'Moving from a list to a detail page, the screens slide and fade into each other.',
  what: [
    'When someone follows a link to another page, the old screen fades away and the new one slides in slightly from the right instead of flashing white. In the demo, clicking a stay opens its detail page, and “Back to list” brings the list back in from the left. The address bar updates to match.',
    'Reversing the direction for forward and back gives people a sense of place — “I went deeper” versus “I came back” — so they stay oriented. With the View Transitions API, the browser captures the before and after states and animates between them, and for ordinary multi-page sites it takes only a few lines of CSS.',
  ],
  when: [
    'Portfolios and shops where moving from a grid to a detail page should feel smooth',
    'Multi-step forms, to show whether “Next” and “Back” move forward or backward',
    'Web apps that should feel app-like when switching screens',
    'When the same photo appears on both list and detail pages (you can morph just that image)',
  ],
  avoid: [
    'Blogs and news sites where people move between pages to read — even 0.3s per hop adds up',
    'Transitions longer than about half a second, which make the site feel slow',
    'Full-screen spins and zooms on every navigation — hard on people sensitive to motion',
  ],
  prompt:
    'Add page transitions between pages on this site using the View Transitions API. Put @view-transition { navigation: auto; } in the CSS of every page, then fade the old page out over {{exit:t}} with ease-in, and fade the new page in over {{enter:t}} with ease-out while it slides in {{shift:t}} from the right. Browsers without support should simply navigate normally. Disable the animation under prefers-reduced-motion: reduce. No JavaScript and no libraries.',
  howTo: [
    'For navigation between separate HTML pages (same origin only), add @view-transition { navigation: auto; } to the CSS of both pages and every navigation gets a cross-fade. To customize it, target ::view-transition-old(root), a snapshot of the outgoing page, and ::view-transition-new(root), the incoming page, with your own animations. Browsers that do not support it just navigate normally; nothing breaks.',
    'For a single-page swap like the demo, pass the DOM update to document.startViewTransition(). For browsers without it, run the update and then add the same motion with element.animate(), the built-in Web Animations API, so everyone gets nearly the same result.',
  ],
  code: [
    {
      lang: 'css',
      label: 'CSS (cross-document, on every page)',
      code: `/* animate same-origin page navigations */
@view-transition {
  navigation: auto;
}

/* old page fades out, new page slides in from the right */
::view-transition-old(root) {
  animation: page-out {{exit}} ease-in both;
}
::view-transition-new(root) {
  animation: page-in {{enter}} ease-out both;
}
@keyframes page-out {
  to { opacity: 0; }
}
@keyframes page-in {
  from { opacity: 0; transform: translateX({{shift}}); }
}

/* reduced motion: no animation */
@media (prefers-reduced-motion: reduce) {
  @view-transition { navigation: none; }
}`,
    },
    {
      lang: 'html',
      label: 'HTML (same-page swap)',
      code: `<main class="screen">
  <section class="page-list">
    <a href="#pine-ridge" class="go-detail">Pine Ridge Lodge</a>
  </section>
  <section class="page-detail" hidden>
    <button type="button" class="go-back">Back to list</button>
    <h1>Pine Ridge Lodge</h1>
  </section>
</main>`,
    },
    {
      lang: 'js',
      label: 'JavaScript (same-page swap)',
      code: `const list = document.querySelector('.page-list');
const detail = document.querySelector('.page-detail');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

const show = (toDetail) => {
  const swap = () => {
    list.hidden = toDetail;
    detail.hidden = !toDetail;
  };
  // let the View Transitions API handle it where available
  if (document.startViewTransition && !reduce.matches) {
    document.startViewTransition(swap);
    return;
  }
  // fallback: swap, then add the same motion with animate()
  swap();
  if (reduce.matches) return;
  const next = toDetail ? detail : list;
  next.animate(
    [{ opacity: 0, transform: 'translateX({{shift}})' }, { opacity: 1, transform: 'none' }],
    { duration: {{enter:n}} * 1000, easing: 'ease-out' }
  );
};

document.querySelector('.go-detail').addEventListener('click', (e) => {
  e.preventDefault();
  show(true);
});
document.querySelector('.go-back').addEventListener('click', () => show(false));`,
    },
  ],
  tune: [
    { key: 'exit', label: 'Exit duration', min: 0.05, max: 0.6, step: 0.05, value: 0.2, unit: 's' },
    { key: 'enter', label: 'Enter duration', min: 0.1, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    { key: 'shift', label: 'Slide distance', min: 0, max: 80, step: 4, value: 24, unit: 'px' },
  ],
  cautions: [
    'Cross-document @view-transition works in Chrome, Edge and Safari 18.2+. Support in Firefox has lagged, so check Can I use for the current status, and design assuming some visitors will get a plain navigation.',
    'If the next page is slow to load, the transition waits too. Animation cannot hide a slow page; make the page itself fast first.',
    'Keep it between 0.2 and 0.35 seconds. Longer feels like waiting on every click — try 0.6s or more in the demo to feel it.',
    'Large horizontal movement across the whole screen can trigger motion sickness. Always handle prefers-reduced-motion.',
    'For same-page swaps, move keyboard focus to the new heading afterward so screen reader users know the view changed.',
  ],
  similar: [
    {
      slug: 'preloader',
      diff: 'A preloader covers the initial wait when the site first opens. A page transition animates the hand-off between one page and the next.',
    },
    {
      slug: 'fade-in',
      diff: 'Fade-in on scroll reveals sections of a single page as you read. A page transition applies when the whole screen changes to a different page.',
    },
  ],
  faq: [
    {
      q: 'What is the View Transitions API?',
      a: 'It lets the browser snapshot the page before and after a change and animate between the two. Effects that once required a single-page-app framework now work on ordinary multi-page sites with a few lines of CSS.',
    },
    {
      q: 'Do page transitions affect SEO?',
      a: 'Not with @view-transition: every page is still plain HTML with its own URL. Problems arise only when a site is rebuilt as a JavaScript-only app just for the animation, which can make URLs and content harder for search engines to see.',
    },
    {
      q: 'Why do view transitions not work in Safari or Firefox?',
      a: 'Cross-document transitions need Chrome or Edge 126+ or Safari 18.2+, and Firefox has been slower to add them. Unsupported browsers simply navigate without animation. That is expected behavior, not a bug — the page still works.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
