import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'pagination',
  no: 10,
  category: 'nav',
  name: 'Pagination',
  en: 'ページネーション',
  aka: ['Pager', 'Page numbers', 'Paging', 'Numbered pagination'],
  mode: 'script',
  title: 'Pagination vs Infinite Scroll vs Load More: Design and Code',
  description:
    'When to use pagination instead of infinite scroll or a Load more button, how to truncate page numbers with ellipses, plus accessible markup and a mobile layout.',
  oneLine: 'Splits a long list into pages you move through with numbered links and Next.',
  what: [
    'Pagination splits a long list — search results, products, articles — into pages of, say, 20 items, with a row like “‹ Previous 1 2 3 … 8 Next ›” underneath. In the demo, 24 hotels are split into 8 pages of three. Click a number to jump to that page; the current page is shown filled in, and Previous or Next fade out when there is nowhere to go.',
    'Its cousins are infinite scroll, which loads more as you reach the bottom, and a Load more button, which appends the next batch on request. Pagination wins on three things: people can see how much there is, every page has a stable URL they can come back to, and the footer stays reachable. A good rule of thumb: pagination for lists people search through, infinite scroll for feeds people browse, and Load more in between.',
    'The conventions: wrap it in <nav aria-label="Pagination">, make every number a real link such as <a href="?page=2">, and mark the current page with aria-current="page". With many pages, keep the first, the last and the neighbors of the current page, and collapse the rest into an ellipsis.',
  ],
  when: [
    'Product, real estate and job listings where people filter, then hunt for one specific item',
    'Search results and admin tables where people remember “it was on page 3” and come back to it',
    'Blog and news archives, so older posts stay reachable through plain links',
    'Lists with a footer underneath (contact, company info) that people need to be able to reach',
  ],
  avoid: [
    'Social feeds and photo galleries meant for browsing — infinite scroll keeps the flow going',
    'Lists that are only two or three pages long — a single Load more button or one long page is simpler',
    'Ten page numbers in a row on a phone — people will mis-tap. Show the neighbors plus first and last only',
  ],
  prompt:
    'Add pagination below the product list. Inside <nav aria-label="Pagination">, show “‹ Previous”, the page numbers and “Next ›”, and make every number a real link like <a href="?page=2">. Mark the current page with aria-current="page" and give it a filled style; on the first and last pages, show Previous and Next as disabled. When there are many pages, show only the first, the last and one page on either side of the current one, with an ellipsis in the gaps. Make each item {{size:t}} tall with a {{size:t}} minimum width, a {{radius:t}} corner radius and {{gap:t}} between items. Below 480px, hide the words Previous and Next and keep only the arrows. Give each number an aria-label such as “Page 2”.',
  howTo: [
    'Build the numbers as links, not buttons: <a href="?page=2">. Links let search engines crawl page 2 and beyond, and let people open a page in a new tab or share its URL. Do not link the current page (drop its href) and mark it with aria-current="page" so it can be styled and announced.',
    'For truncation, always keep the first page, the last page, and the current page with its neighbors, and insert an ellipsis wherever there is a gap. That keeps the component the same width no matter how many pages you have. The pagesFor() function below does exactly that; on a server-rendered site, run the same logic in your template.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML (page 3 of 8)',
      code: `<nav class="pager" aria-label="Pagination">
  <ul>
    <li><a href="?page=2" rel="prev" aria-label="Previous page">‹ <span class="word">Previous</span></a></li>
    <li><a href="?page=1" aria-label="Page 1">1</a></li>
    <li><a href="?page=2" aria-label="Page 2">2</a></li>
    <li><a aria-current="page" aria-label="Page 3">3</a></li>
    <li><a href="?page=4" aria-label="Page 4">4</a></li>
    <li><span class="gap" aria-hidden="true">…</span></li>
    <li><a href="?page=8" aria-label="Page 8">8</a></li>
    <li><a href="?page=4" rel="next" aria-label="Next page"><span class="word">Next</span> ›</a></li>
  </ul>
</nav>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.pager ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: {{gap}};
  list-style: none;
  padding: 0;
}
.pager a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: {{size}};
  height: {{size}};
  padding: 0 8px;
  border: 1px solid #e4e2dc;
  border-radius: {{radius}};
  color: inherit;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  text-decoration: none;
  transition: background-color 0.15s ease-out;
}
.pager a[href]:hover { background: #f7f6f2; }
/* Current page */
.pager a[aria-current="page"] {
  background: #1d2541;
  border-color: #1d2541;
  color: #fff;
}
/* Disabled Previous / Next on the first and last pages */
.pager a:not([href]):not([aria-current]) { opacity: 0.4; }
.pager .gap { min-width: 16px; text-align: center; }

/* On phones, keep just the arrows */
@media (max-width: 479px) {
  .pager .word {
    position: absolute; width: 1px; height: 1px;
    overflow: hidden; clip-path: inset(50%); white-space: nowrap;
  }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript (truncating page numbers)',
      code: `// Which numbers to show: first, last and \`around\` pages either side of the current one
function pagesFor(current, total, around = 1) {
  const out = [];
  for (let n = 1; n <= total; n++) {
    if (n === 1 || n === total || Math.abs(n - current) <= around) out.push(n);
    else if (out[out.length - 1] !== '…') out.push('…');
  }
  return out;
}

pagesFor(3, 8); // [1, 2, 3, 4, '…', 8]
pagesFor(6, 8); // [1, '…', 5, 6, 7, 8]`,
    },
  ],
  tune: [
    { key: 'size', label: 'Item size', min: 32, max: 52, step: 2, value: 44, unit: 'px' },
    { key: 'radius', label: 'Corner radius', min: 0, max: 24, step: 2, value: 8, unit: 'px' },
    { key: 'gap', label: 'Item spacing', min: 2, max: 12, step: 1, value: 6, unit: 'px' },
  ],
  cautions: [
    'Do not shrink page links below 44×44px on phones. A row of numbers is where mis-taps happen most; if they do not fit, show fewer numbers.',
    'If JavaScript swaps the list in place, also update the URL (?page=3) and move focus to the list heading. Otherwise Back drops people on page 1, and screen reader users never hear that anything changed.',
    'Do not point the canonical URL of page 2+ at page 1. Google may then ignore the items on later pages. Each page should be self-canonical.',
    'Reset to page 1 whenever sorting or filters change. Staying on page 5 with a new filter is how you get a confusing “no results” screen.',
  ],
  similar: [
    { slug: 'infinite-scroll', book: 'ugoki', diff: 'Infinite scroll loads more as you reach the bottom. Great for browsing feeds, but people lose track of how much there is and can never reach the footer.' },
    { slug: 'carousel', diff: 'The dots under a carousel are a tiny pager too, but for a handful of slides. Long lists need real pagination.' },
    { slug: 'stepper', diff: 'A stepper also shows numbers, but it tracks progress through a sequence such as checkout — you do not jump to any number you like.' },
  ],
  faq: [
    {
      q: 'Pagination, infinite scroll or Load more — which should I use?',
      a: 'Use pagination when people are looking for something specific (products, listings, jobs, search results) and infinite scroll for feeds people browse for fun. A Load more button sits in between: people decide when to fetch more and can still reach the footer. When in doubt, Load more is the safe middle ground.',
    },
    {
      q: 'Is pagination bad for SEO?',
      a: 'Not if each page number is a real <a href> link — search engines can reach every page. Pagination built only with buttons and JavaScript can hide later pages from crawlers. Adding “Page 2” to each page’s title also helps tell them apart in search results.',
    },
    {
      q: 'How many items should I show per page?',
      a: 'There is no single right number, but 20–40 for product grids and 10–20 for search results are common. The bigger the images, the fewer items per page. If you let people choose the page size, keep the default small so pages load fast.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
