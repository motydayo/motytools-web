import type { Ugoki } from '../types';

export default {
  slug: 'skeleton',
  no: 27,
  category: 'inform',
  name: 'Skeleton screen',
  en: 'スケルトンスクリーン',
  aka: ['Skeleton loader', 'Skeleton loading', 'Shimmer effect', 'Content placeholder', 'Ghost loading'],
  mode: 'script',
  title: 'Skeleton Loader in CSS: Shimmer Placeholders, No Layout Shift',
  description:
    'Build a skeleton screen in CSS: gray placeholders in the exact shape of your content, a shimmer, and a fade-in that avoids layout shift. Demo and code.',
  oneLine: 'Gray placeholder shapes show while content loads, then real content fades in.',
  what: [
    'The “Top picks this week” list first appears as a wireframe: gray bars where the photo, name, location and price will go, with a soft band of light sweeping across. When the data arrives, the real photos and text fade in in exactly the same spots. Hit Refresh in the demo to load it again.',
    'A skeleton tells people what is coming, where, and roughly how much, before it arrives. Because the page already has its shape, waiting tends to feel shorter than staring at a blank page or a lone spinner. And if the skeleton matches the real layout, nothing jumps when the content swaps in — good for users and for your Cumulative Layout Shift score.',
  ],
  when: [
    'Product grids and search results in e-commerce or booking sites',
    'Social feeds, news lists and comment threads',
    'Dashboards waiting on charts, tables or KPI numbers',
    'Any section that loads after the rest of the page, like recommendations or reviews',
  ],
  avoid: [
    'Loads that finish in under 0.3s; the skeleton just flashes and reads as flicker',
    'Content whose shape or count you cannot predict — a mismatched skeleton causes the jump you were trying to avoid',
    'Uploads, exports and other tasks where people want progress; use a progress bar or time estimate',
  ],
  prompt:
    'Add a skeleton screen to the card list while it loads. Reuse the real card markup with an is-loading class instead of a separate placeholder component, so sizes match exactly. While loading, turn the photo, title, description and price into rounded gray bars (#ecebe7) and sweep a lighter shimmer across them, one pass every {{shimmer:t}}, using an animated linear-gradient background. When the data arrives, remove is-loading and fade the content in over {{fade:t}}, delaying each card by {{stagger:t}} more than the previous one. Set aria-busy="true" on the list while loading, and when done announce “Showing 4 results” through a visually hidden role="status" element. Stop the shimmer for prefers-reduced-motion users. Plain CSS and JavaScript only.',
  howTo: [
    'Do not build a separate skeleton component. Put an is-loading class on the real cards and let CSS make their text transparent and paint the same boxes gray. The skeleton is then guaranteed to be the same size as the content, so removing the class barely moves anything. The demo is built this way.',
    'The shimmer is a wide linear-gradient whose background-position slides from right to left on a loop. When data arrives, JavaScript fills in the text and removes the class; a CSS animation fades the content in, and a per-card --i variable staggers it. In production, replace loadItems() with your fetch() call.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- While loading: is-loading + aria-busy="true" -->
<ul class="list is-loading" aria-busy="true">
  <li class="item" style="--i: 0">
    <div class="thumb"></div>
    <div class="txt"><p class="title">&nbsp;</p><p class="price">&nbsp;</p></div>
  </li>
  <li class="item" style="--i: 1">
    <div class="thumb"></div>
    <div class="txt"><p class="title">&nbsp;</p><p class="price">&nbsp;</p></div>
  </li>
  <li class="item" style="--i: 2">
    <div class="thumb"></div>
    <div class="txt"><p class="title">&nbsp;</p><p class="price">&nbsp;</p></div>
  </li>
</ul>
<p class="visually-hidden" role="status"></p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.list { display: grid; gap: 12px; padding: 0; list-style: none; }
.item { display: grid; grid-template-columns: 96px 1fr; gap: 12px; align-items: center; }
.thumb { aspect-ratio: 16 / 10; border-radius: 8px; background: #ddd center / cover; }
.txt p { margin: 0 0 4px; line-height: 18px; }

/* Loading: same boxes, painted gray, with a moving shimmer */
.is-loading .thumb,
.is-loading .txt p {
  color: transparent;
  border-radius: 6px;
  background: linear-gradient(90deg, #ecebe7 40%, #f7f6f3 50%, #ecebe7 60%);
  background-size: 300% 100%;
  animation: shimmer {{shimmer}} linear infinite;
}
.is-loading .title { width: 72%; }
.is-loading .price { width: 34%; }
@keyframes shimmer {
  from { background-position: 100% 0; }
  to { background-position: 0 0; }
}

/* Loaded: fade content in, card by card */
.list:not(.is-loading) .item > * {
  animation: fade-in {{fade}} ease-out both;
  animation-delay: calc(var(--i, 0) * {{stagger}});
}
@keyframes fade-in { from { opacity: 0; } }

.visually-hidden {
  position: absolute; width: 1px; height: 1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .is-loading .thumb, .is-loading .txt p,
  .list:not(.is-loading) .item > * { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// In production: fetch('/api/items').then((r) => r.json())
const loadItems = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve([
      { title: 'Pinecrest Mountain Lodge', price: 'From $129 / night', img: 'lodge.jpg' },
      { title: 'Driftwood Seaside Inn', price: 'From $165 / night', img: 'inn.jpg' },
      { title: 'Stargazer Cabins', price: 'From $98 / night', img: 'cabins.jpg' },
    ]), 1600)
  );

const list = document.querySelector('.list');
const status = document.querySelector('[role="status"]');

loadItems().then((items) => {
  list.querySelectorAll('.item').forEach((li, i) => {
    li.querySelector('.title').textContent = items[i].title;
    li.querySelector('.price').textContent = items[i].price;
    li.querySelector('.thumb').style.backgroundImage = \`url(\${items[i].img})\`;
  });
  list.classList.remove('is-loading');
  list.setAttribute('aria-busy', 'false');
  status.textContent = \`Showing \${items.length} results\`;
});`,
    },
  ],
  tune: [
    { key: 'shimmer', label: 'Shimmer cycle', min: 0.6, max: 3, step: 0.1, value: 1.4, unit: 's' },
    { key: 'fade', label: 'Content fade-in', min: 0, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    { key: 'stagger', label: 'Delay between cards', min: 0, max: 0.2, step: 0.02, value: 0.06, unit: 's' },
  ],
  cautions: [
    'If the skeleton is a different size from the real content, the page jumps when it swaps — exactly the layout shift you wanted to avoid. Styling the real elements with an is-loading class is the most reliable fix.',
    'For loads under about 0.3s, skip the skeleton; a gray flash is more noticeable than a short wait. For loads over about 3 seconds, add a line like “This is taking longer than usual.”',
    'Never leave the skeleton up forever when a request fails. Swap it for a clear error message and a “Try again” button.',
    'Skeletons are purely visual. Tell assistive tech what is happening with aria-busy="true" on the container, and announce the result with role="status" when it finishes.',
  ],
  similar: [
    {
      slug: 'preloader',
      diff: 'A preloader covers the whole page until everything is ready. A skeleton shows the page’s shape right away and replaces each part as its data arrives.',
    },
    {
      slug: 'lazy-loading',
      diff: 'Lazy loading delays fetching images until they are near the viewport. Skeletons are often used as the placeholder while those lazy images load.',
    },
  ],
  faq: [
    {
      q: 'Skeleton screen or spinner — which should I use?',
      a: 'Use a skeleton when you know what will appear and where, like lists, cards and profiles. Use a small spinner inside the button for short actions after a click, or when the result’s shape is unknown.',
    },
    {
      q: 'Do I need a library for skeleton loading?',
      a: 'No. A gray background and an animated linear-gradient are all the CSS you need, and JavaScript only removes a class when the data arrives. Libraries mainly add prebuilt shapes for frameworks like React.',
    },
    {
      q: 'Do skeleton screens help Core Web Vitals?',
      a: 'They can help Cumulative Layout Shift, because space is reserved before content arrives — as long as the skeleton matches the final size. They do not make data arrive faster, and content that search engines must see should not depend on client-side loading.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
