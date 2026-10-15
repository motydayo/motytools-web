import type { Ugoki } from '../types';

export default {
  slug: 'infinite-scroll',
  no: 19,
  category: 'load',
  name: 'Infinite scroll',
  en: '無限スクロール',
  aka: ['Endless scrolling', 'Auto-load more', 'Infinite loading', 'Load more on scroll', 'Continuous scroll'],
  mode: 'scroll',
  title: 'SEO-Friendly Infinite Scroll with IntersectionObserver',
  description:
    'Build infinite scroll on top of plain pagination links with IntersectionObserver and fetch, then weigh it against pagination and a Load more button.',
  oneLine: 'Reach the end of the list and the next batch of items loads in automatically.',
  what: [
    'As someone scrolls down a list of posts or products and nears the end, a “Loading more” indicator appears and the next batch is appended automatically — no page numbers to click. In the demo, six stories show at first and four more arrive each time you reach the bottom. Once everything is loaded, “You’re all caught up” appears along with the footer. The counter at the top shows the list growing.',
    'It suits feeds people browse without a specific goal, like social timelines or photo-sharing sites. The downsides are real, though: the footer (contact details, legal links) becomes hard to reach, and opening an item then pressing Back often loses your place. On pages where people hunt for something specific, pagination or a “Load more” button is often the better choice.',
  ],
  when: [
    'Social or news feeds where people casually browse the newest posts',
    'Photo, illustration or portfolio feeds where discovery matters more than comparison',
    'Mobile-first products where tiny page-number links are a chore to tap',
    'Pages where the list is the whole point and the footer holds nothing essential',
  ],
  avoid: [
    'Pages whose footer contains things people need — company info, contact, terms',
    'E-commerce search results, where shoppers compare and want to get back to “that item on page 3”',
    'Short lists — with 20 items, just show them all',
    'Blog archives you want fully crawled, if the implementation relies on JavaScript alone',
  ],
  prompt:
    'Add infinite scroll to the article list. Under the list, put a normal link labeled “Next 10 stories” pointing to /news/page/2/. Only when JavaScript runs, watch that link with an IntersectionObserver, and when it comes within {{margin:t}} of the bottom of the viewport, fetch the next page’s HTML and append just its articles to the end of the list. Fade each new article in over {{dur:t}} with ease-out while lifting it {{rise:t}}. Show “Loading more stories” while fetching, and on the last page switch to “You’re all caught up” and stop observing. Update the URL with history.replaceState to the current page number after each load, and skip the entrance animation under prefers-reduced-motion: reduce.',
  howTo: [
    'Place a sentinel element after the last item and watch it with IntersectionObserver, a browser API that tells you when an element enters the viewport. When the sentinel becomes visible, load the next page and append its items. It is lighter and more reliable on phones than measuring scroll position on every scroll event. rootMargin extends the watched area, which decides how early loading starts: a larger value means visitors rarely see the spinner, a small one means they wait at the bottom. The demo frame is small, so compare 0px and 400px with the controls to feel the difference.',
    'The robust pattern is to make the sentinel a real “Next page” link. Without JavaScript — and for search engine crawlers — it is ordinary pagination. With JavaScript, the next page loads automatically. Because you fetch the server’s regular HTML and pull out the articles, you do not need a separate JSON API.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML (same markup on every page)',
      code: `<ul class="feed">
  <li class="feed-item"><a href="/news/101/">5 hot springs at peak fall color</a></li>
  <li class="feed-item"><a href="/news/100/">A day trip to a highland ranch</a></li>
  <!-- …the 10 items on this page… -->
</ul>

<!-- Sentinel. Without JavaScript it works as plain pagination -->
<div class="feed-more" aria-live="polite">
  <a class="feed-next" href="/news/page/2/">Next 10 stories</a>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.feed-more {
  min-height: 64px;
  display: grid;
  place-items: center;
}
/* new items rise in slightly */
.feed-item.is-new {
  animation: feed-in {{dur}} ease-out both;
}
@keyframes feed-in {
  from { opacity: 0; transform: translateY({{rise}}); }
}
@media (prefers-reduced-motion: reduce) {
  .feed-item.is-new { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const feed = document.querySelector('.feed');
const more = document.querySelector('.feed-more');
let busy = false;

const loadNext = async () => {
  const next = more.querySelector('.feed-next');
  if (busy || !next) return;
  busy = true;
  more.textContent = 'Loading more stories';
  try {
    const html = await (await fetch(next.href)).text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    // append the next page's items to the current list
    doc.querySelectorAll('.feed-item').forEach((li) => {
      li.classList.add('is-new');
      feed.append(li);
    });
    history.replaceState(null, '', next.href); // keep the URL in sync for Back
    const newer = doc.querySelector('.feed-next');
    if (newer) {
      more.replaceChildren(newer); // point at the following page
      io.unobserve(more); // re-check in case the sentinel is still visible
      io.observe(more);
    } else {
      more.textContent = 'You’re all caught up';
      io.disconnect();
    }
  } catch {
    more.replaceChildren(next); // restore the link so it can be clicked to retry
  }
  busy = false;
};

// start loading {{margin:t}} before the bottom
const io = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) loadNext();
}, { rootMargin: '0px 0px {{margin}} 0px' });
io.observe(more);`,
    },
  ],
  tune: [
    { key: 'margin', label: 'Trigger distance', min: 0, max: 400, step: 20, value: 200, unit: 'px' },
    { key: 'dur', label: 'Entrance duration', min: 0.1, max: 1, step: 0.05, value: 0.35, unit: 's' },
    { key: 'rise', label: 'Entrance lift', min: 0, max: 40, step: 2, value: 12, unit: 'px' },
  ],
  cautions: [
    'Visitors can no longer reach the footer. Put contact and legal links in the header too, or switch to a “Load more” button after a few automatic loads — a common compromise.',
    'Open an item, press Back, and the list often restarts at page one. Keep the URL in sync with the page number and restore the list from that page when someone returns.',
    'Appending hundreds of items makes the page heavy and sluggish, especially on phones. Cap the number of items or at least lazy load their images.',
    'Screen reader and keyboard users may not notice new content arriving. Give the sentinel aria-live and announce “Loading more” and “All caught up” in text.',
    'Crawlers do not scroll. If new pages only load through JavaScript, page 2 and beyond may never be indexed. Building on real pagination links, as in the example, avoids that.',
  ],
  similar: [
    {
      slug: 'lazy-loading',
      diff: 'Lazy loading only defers images that are already on the page. Infinite scroll fetches entirely new items and adds them to the list.',
    },
    {
      slug: 'back-to-top',
      diff: 'A back-to-top button jumps to the start of a long page. Infinite lists keep getting longer, so the two often go together.',
    },
  ],
  faq: [
    {
      q: 'Infinite scroll vs pagination vs Load more: which should I use?',
      a: 'Infinite scroll suits feeds where browsing is the goal. Pagination suits search results where people compare items and come back to them. A Load more button sits in between: people choose when to see more, and the footer stays reachable. When in doubt, Load more is the safe choice.',
    },
    {
      q: 'Is infinite scroll bad for SEO?',
      a: 'It can be if items only load via JavaScript, since crawlers will not find page 2 and beyond. Give every page its own URL (such as /page/2/) and link to it with an ordinary <a>, and search engines can crawl everything.',
    },
    {
      q: 'Why does my infinite scroll not load more items?',
      a: 'A sentinel with zero height may never count as intersecting, so give it a min-height. If the list scrolls inside a container rather than the page, pass that container as the root option of the IntersectionObserver.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
