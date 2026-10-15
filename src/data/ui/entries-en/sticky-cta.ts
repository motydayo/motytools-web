import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'sticky-cta',
  no: 29,
  category: 'display',
  name: 'Sticky CTA bar',
  en: '追従CTAバー',
  aka: ['Sticky CTA', 'Sticky call-to-action', 'Sticky bottom bar', 'Floating CTA', 'Sticky add-to-cart bar'],
  mode: 'scroll',
  title: 'Sticky CTA Bar on Mobile: When to Show It and How to Build It',
  description:
    'A sticky call-to-action bar that slides up once the main button scrolls away and hides at the final CTA. Built with position: fixed and IntersectionObserver.',
  oneLine: 'Once the main button scrolls away, a booking bar follows you at the bottom.',
  what: [
    'A sticky CTA bar is a strip pinned to the bottom of the screen that keeps your call to action — book, buy, sign up — within reach while people scroll. In the demo, the bar with the price and a “Check availability” button slides up once you have scrolled past the first button. When the closing “Ready to book?” section comes into view, the bar tucks itself away so the same button never appears twice.',
    'The main convention: do not show it all the time. On page load, the hero button is already visible, so the bar stays hidden; it appears only once that button is out of sight. Keep it to one piece of decision info (like the price) and one button, at roughly a tenth of the screen height, and add bottom padding to the page so the bar never covers content.',
    'In our motion library, a sticky header follows you at the top and carries site navigation, and a back-to-top button is a small circle that returns you to the start of the page. A sticky CTA bar has a single job — moving people toward one action — and it belongs at the bottom, within thumb reach on a phone.',
  ],
  when: [
    'Mobile-heavy landing pages, so people can convert from anywhere in a long pitch',
    'Product pages, so “Add to cart” stays at hand while shoppers browse photos and specs',
    'Hotel and rental pages, keeping the price and “Check availability” one tap away',
    'Promoting an app install or free signup before readers reach the end',
  ],
  avoid: [
    'Articles and blog posts where reading is the point; a permanent bar gets in the way',
    'Screens that already have a bottom navigation bar or a chat bubble — the bottom gets crowded and mis-taps follow',
    'Showing it the moment the page loads, doubling up with the hero button and feeling pushy',
  ],
  prompt:
    'Add a sticky CTA bar to the mobile landing page. Pin it to the bottom with position: fixed, with “From $110 / night” on the left and a “Check availability” button on the right. Keep it hidden on load; once the page has scrolled more than {{show:t}}, slide it up from the bottom over {{dur:t}} with ease-out, and hide it again when the final booking section enters the viewport (use IntersectionObserver). While hidden, set visibility: hidden so it cannot receive keyboard focus. Add env(safe-area-inset-bottom) padding so it clears the iPhone home indicator, and pad the bottom of the body by the bar’s height. For prefers-reduced-motion, show and hide it without sliding.',
  howTo: [
    'Pin the bar with position: fixed at the bottom and, while hidden, push it down by its own height with transform: translateY(100%). Reset the transform to show it and it slides up into view. Toggle visibility along with it so keyboard users cannot tab into a bar they cannot see.',
    'The simplest trigger for showing it is scroll distance (window.scrollY) — set it to roughly where the hero button leaves the screen. For hiding, watch the final CTA section with an IntersectionObserver and hide the bar when it comes into view. The demo sits on a position: sticky rail to stay inside its frame; in production, use position: fixed as in the code below.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- The closing CTA section -->
<section id="reserve">
  <h2>Ready to book?</h2>
  <a href="/reserve" class="btn">Check availability</a>
</section>

<!-- Sticky CTA bar -->
<div class="sticky-cta" aria-hidden="true">
  <p><b>From $110 / night</b><small>Per room, before taxes</small></p>
  <a href="/reserve" class="btn" tabindex="-1">Check availability</a>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.sticky-cta {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
  background: rgb(255 255 255 / 0.96);
  border-top: 1px solid #e4e2dc;
  /* Hidden: pushed down by its own height (accelerates on the way out) */
  transform: translateY(100%);
  visibility: hidden;
  transition: transform {{dur}} ease-in, visibility 0s linear {{dur}};
}
.sticky-cta.is-shown {
  transform: none;
  visibility: visible;
  transition: transform {{dur}} ease-out, visibility 0s;
}
.sticky-cta .btn { min-height: 44px; }
/* Keep the bar from covering the end of the page */
body { padding-bottom: 72px; }

@media (prefers-reduced-motion: reduce) {
  .sticky-cta, .sticky-cta.is-shown { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const bar = document.querySelector('.sticky-cta');
const barLink = bar.querySelector('a');
const final = document.querySelector('#reserve');
let finalInView = false;

function sync() {
  const show = window.scrollY > {{show:n}} && !finalInView;
  bar.classList.toggle('is-shown', show);
  // Out of the accessibility tree and tab order while hidden
  bar.setAttribute('aria-hidden', String(!show));
  barLink.tabIndex = show ? 0 : -1;
}

// Hide when the closing CTA is on screen
new IntersectionObserver(([e]) => {
  finalInView = e.isIntersecting;
  sync();
}).observe(final);

window.addEventListener('scroll', sync, { passive: true });
sync();`,
    },
  ],
  tune: [
    { key: 'show', label: 'Show after scrolling', min: 0, max: 800, step: 40, value: 400, unit: 'px' },
    { key: 'dur', label: 'Slide speed', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
  ],
  cautions: [
    'Pad the bottom of the page by the bar’s height. A last paragraph or a form’s submit button hidden behind the bar is a classic mistake.',
    'On iPhones the bar sits on top of the home indicator. Add env(safe-area-inset-bottom) to its bottom padding and set viewport-fit=cover in the viewport meta tag.',
    'When the on-screen keyboard opens, a fixed bar can float above it and block the input. On pages with forms, hide the bar while a field has focus.',
    'Chat bubbles and back-to-top buttons also like the bottom corner. If they overlap, people mis-tap — move or suppress other floating buttons while the bar is showing.',
  ],
  similar: [
    { slug: 'sticky-header', book: 'ugoki', diff: 'A sticky header follows you at the top and carries navigation. A sticky CTA bar sits at the bottom and pushes one action only.' },
    { slug: 'back-to-top', book: 'ugoki', diff: 'A back-to-top button is a small circle in the corner that takes you back to the start. It appears in a similar way, but its job is navigation, not conversion.' },
    { slug: 'fab', diff: 'A floating action button is a round button hovering in an app’s corner for the main action, like “New”. A sticky CTA bar spans the full width and shows decision info such as the price.' },
  ],
  faq: [
    {
      q: 'Do sticky CTAs increase conversions?',
      a: 'They often help on long pages because people no longer have to hunt for the button. It is not guaranteed, though — a bar that never goes away or is crammed with content can backfire. Test when it appears and what it contains, and let your numbers decide.',
    },
    {
      q: 'Should the sticky CTA bar show on desktop too?',
      a: 'Many sites show it on mobile only, since desktop screens have room for a CTA beside the content. If you do show it on desktop, keep it modest — a small box in the corner rather than a full-width strip.',
    },
    {
      q: 'Should I use position: fixed or position: sticky?',
      a: 'For a bar at the bottom of the whole viewport, use position: fixed. Sticky only sticks within its parent, which suits a bar that should follow you through one section of the page. The demo here uses sticky so it stays inside its frame.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
