import type { Ugoki } from '../types';

export default {
  slug: 'preloader',
  no: 17,
  category: 'load',
  name: 'Preloader',
  en: 'ローディング画面',
  aka: ['Loading screen', 'Page loader', 'Splash screen', 'Loading animation', 'Intro animation'],
  mode: 'script',
  title: 'Website Preloader: A Loading Screen That Never Gets Stuck',
  description:
    'Build a page preloader in HTML, CSS and JS that fades out on window load, with a fail-safe timer so it never gets stuck. Demo, code, and when to skip it.',
  oneLine: 'A curtain with a logo and progress bar covers the page until it is ready.',
  what: [
    'The moment the page opens, a full-screen curtain with a logo and a progress bar covers everything. When loading finishes, the curtain fades away and the real page appears. In the demo, the headline and room cards lift slightly into place as the curtain clears. Hit “Reload” in the corner to watch it again.',
    'The point is twofold: visitors never see a half-loaded page with images popping in one by one, and the wait doubles as a brand moment. That matters on photo- and video-heavy brand sites. The trade-off is real, though — nobody can read anything while the curtain is up, so a preloader can add to the wait rather than hide it.',
  ],
  when: [
    'Brand sites and portfolios that open with full-screen video or large photography',
    'Pages running 3D scenes, maps or games that cannot be used until they are initialized',
    'Launch and campaign microsites where a one-second logo reveal is part of the experience',
    'Web apps that cannot render anything useful until the first data request returns',
  ],
  avoid: [
    'Articles, blogs and news — the curtain only delays reading',
    'Lightweight pages that already load in under a second (a brief flash of curtain is worse than nothing)',
    'Landing pages for search and ad traffic, where visitors want an answer or a price right away',
    'Dashboards people open many times a day — after the first visit, the wait is pure friction',
  ],
  prompt:
    'Add a preloader (loading screen) to the page. Cover the viewport with a navy overlay showing the logo and a thin progress bar in the center. Animate the bar to 90% over {{fill:t}}, then jump it to 100% when loading finishes. On the window load event, fade the overlay out over {{fade:t}} and then remove it. Add a fail-safe timer that always hides it after {{limit:t}}, even if load never fires, and do not show the overlay at all if JavaScript is unavailable. Give the overlay role="status" with an accessible “Loading” label, and keep the bar and logo still under prefers-reduced-motion: reduce.',
  howTo: [
    'The curtain is a single element at the top of the body, fixed to cover the whole viewport. When window fires load (everything, images included, has finished), add a class that fades it out with a CSS transition, then remove it from the page.',
    'Measuring real progress is hard, so most preloaders fake it: ease the bar toward 90%, then snap to 100% when done. The part people forget is the fail-safe. If load never fires — a slow third-party embed, a broken script — the curtain stays forever and the page is unusable. Always add a timer that removes it after a few seconds. The demo pretends the page takes 2 seconds to load; set the fail-safe below 2 seconds and you will see the curtain lift before loading is done.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML (first thing in <body>)',
      code: `<div class="preloader" role="status" aria-label="Loading">
  <span class="preloader-logo">Pine Ridge</span>
  <span class="preloader-bar"><i></i></span>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* only show the curtain when JavaScript runs (html.js) */
.preloader {
  display: none;
}
.js .preloader {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-content: center;
  gap: 12px;
  background: #1d2541;
  color: #fff;
  /* exit with ease-in so it pulls away cleanly */
  transition: opacity {{fade}} ease-in, visibility 0s linear {{fade}};
}
.preloader.is-done {
  opacity: 0;
  visibility: hidden;
}
.preloader-logo {
  font-weight: 800;
  letter-spacing: 0.12em;
}
.preloader-bar {
  width: 160px;
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.2);
  overflow: hidden;
}
.preloader-bar i {
  display: block;
  height: 100%;
  width: 0;
  background: #f06a35;
  /* real progress is unknown, so ease toward 90% */
  animation: preloader-fill {{fill}} cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
}
.preloader.is-done .preloader-bar i {
  width: 100%;
  animation: none;
}
@keyframes preloader-fill {
  to { width: 90%; }
}

/* reduced motion: no moving bar */
@media (prefers-reduced-motion: reduce) {
  .preloader-bar i { animation: none; width: 60%; }
  .js .preloader { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript (inline in <head>)',
      code: `// 1. Tell CSS that JavaScript is running (the curtain only shows then)
document.documentElement.classList.add('js');

// 2. Hide it on load, or after {{limit:t}} no matter what (fail-safe)
const hidePreloader = () => {
  const el = document.querySelector('.preloader');
  if (!el || el.classList.contains('is-done')) return;
  el.classList.add('is-done');
  el.addEventListener('transitionend', () => el.remove(), { once: true });
};
window.addEventListener('load', hidePreloader);
setTimeout(hidePreloader, {{limit:n}} * 1000);`,
    },
  ],
  tune: [
    { key: 'fill', label: 'Bar time to 90%', min: 0.5, max: 4, step: 0.1, value: 2, unit: 's' },
    { key: 'fade', label: 'Fade-out duration', min: 0.1, max: 1, step: 0.05, value: 0.3, unit: 's' },
    { key: 'limit', label: 'Fail-safe timeout', min: 1, max: 6, step: 0.5, value: 3, unit: 's' },
  ],
  cautions: [
    'While the curtain is up, visitors see nothing, even if the content is ready. Largest Contentful Paint (LCP) can be recorded later because of it. Compressing images and lazy loading usually do more for perceived speed than any preloader.',
    'window load waits for every image, iframe and ad on the page. One slow third-party embed can hold the curtain up for a long time. Always keep a 2–3 second fail-safe.',
    'If your script fails to load, a curtain shown by CSS alone would never go away. Show it only when JavaScript is running, as in the example.',
    'Showing the preloader on every page view adds up. Limit it to the first visit to the home page, for example by remembering it in sessionStorage.',
    'Keep the animation calm. Blinking logos and spinning shapes can bother people sensitive to motion; stop them under prefers-reduced-motion.',
  ],
  similar: [
    {
      slug: 'skeleton',
      diff: 'A skeleton screen shows the layout as gray placeholder blocks and fills them in as content arrives. A preloader hides everything and reveals it at once. Skeletons feel faster.',
    },
    {
      slug: 'page-transition',
      diff: 'A page transition animates the hand-off between two pages. A preloader covers the initial wait when the site first opens.',
    },
    {
      slug: 'lazy-loading',
      diff: 'Lazy loading defers offscreen images so the page renders sooner. It shortens the wait itself, so consider it before adding a preloader.',
    },
  ],
  faq: [
    {
      q: 'Does my website need a preloader?',
      a: 'Most do not. Making the page lighter beats decorating the wait. A preloader earns its place when something cannot be shown until it is ready — a 3D scene, a video intro — or on a campaign site where the brand moment is the point.',
    },
    {
      q: 'Why is my preloader stuck and never disappears?',
      a: 'Usually window load never fires because an image or embed is still loading, or a JavaScript error stopped the script. Add a fail-safe timer that hides it after a few seconds, and check the browser console for errors.',
    },
    {
      q: 'Is a preloader bad for SEO?',
      a: 'Search engines read the HTML underneath, so the content is still indexed. The risk is performance: the curtain can make the page feel slower and push back metrics like LCP. Keep it short.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
