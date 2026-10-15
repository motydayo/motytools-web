import type { Ugoki } from '../types';

export default {
  slug: 'back-to-top',
  no: 31,
  category: 'inform',
  name: 'Back to top button',
  en: '上に戻るボタン',
  aka: ['Scroll to top button', 'Go to top button', 'Return to top', 'Back to top arrow', 'Scroll-up button'],
  mode: 'script',
  title: 'Back to Top Button That Appears on Scroll (HTML, CSS & JS)',
  description:
    'A scroll to top button that fades in after the reader scrolls and glides back up on click, with focus handling and reduced-motion support. Demo and code.',
  oneLine: 'Scroll down and a round button appears in the corner to take you back to the top.',
  what: [
    'Scroll down the page and, past a certain point, a round button with an up arrow fades in at the bottom right. Click it and the page glides back to the top, where the button disappears again. In the demo, the dashed line marks the trigger point: once it scrolls out of view, the button shows up.',
    'Flicking all the way back up a long page is tedious, especially on a phone. One tap takes readers back to the navigation and the main call to action. Showing the button from the very start just clutters the first screen, so it should only appear after people have scrolled a fair way.',
  ],
  when: [
    'Long blog posts, news articles and documentation that span many screens on mobile',
    'Product listing pages with dozens of items',
    'Long landing pages where you want finished readers back at the sign-up button',
    'Long pages without a sticky header, so the menu is reachable again in one tap',
  ],
  avoid: [
    'Short pages that end before the button would even appear',
    'Pages that already have a chat widget or sticky CTA in the bottom right — they collide and cause mis-taps',
    'Infinite scroll feeds where jumping to the top loses the reader’s place',
  ],
  prompt:
    'Add a back to top button to the page. Place a round {{size:t}} button at the bottom right (16px from the right and bottom) with position: fixed, containing an up-arrow SVG and aria-label="Back to top". Show it once the page has scrolled more than {{show:t}} of the viewport height: it should rise 12px and fade in over {{dur:t}}, and fade out about as fast when the user scrolls back up. While hidden, use visibility: hidden so it cannot receive keyboard focus. On click, call window.scrollTo({ top: 0, behavior: \'smooth\' }) and move keyboard focus to the top of the page (the h1 with tabindex="-1"). For prefers-reduced-motion users, use behavior: \'instant\'. Use a passive scroll listener and no library.',
  howTo: [
    'Pin the button to the bottom-right corner with position: fixed and start it hidden with opacity: 0 and visibility: hidden. A scroll listener adds a class once the scroll position passes a set fraction of the viewport height. Mark the listener { passive: true } so it never slows scrolling down.',
    'On click, window.scrollTo({ top: 0, behavior: \'smooth\' }) scrolls back up. But that only moves the view — keyboard focus stays on the button at the bottom. Move focus to the page heading (give it tabindex="-1") so keyboard users continue from the top. The demo uses position: sticky to stay inside its frame, but the show and scroll logic is the same.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<body>
  <!-- tabindex="-1" lets the heading receive focus -->
  <h1 id="page-top" tabindex="-1">Mountain Lodge Guide</h1>
  …content…

  <button type="button" class="to-top" aria-label="Back to top">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </button>
</body>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.to-top {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 50;
  display: grid;
  place-items: center;
  width: {{size}};
  height: {{size}};
  border: 0;
  border-radius: 50%;
  background: #1d2541;
  color: #fff;
  cursor: pointer;
  /* Hidden state (visibility also blocks focus) */
  opacity: 0;
  visibility: hidden;
  transform: translateY(12px);
  transition: opacity 0.2s ease-in, transform 0.2s ease-in, visibility 0s linear 0.2s;
}
.to-top.is-shown {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out, visibility 0s;
}
.to-top:hover { background: #4f73d9; }
.to-top:focus-visible { outline: 3px solid #f06a35; outline-offset: 2px; }
#page-top:focus { outline: none; }

@media (prefers-reduced-motion: reduce) {
  .to-top, .to-top.is-shown { transform: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const btn = document.querySelector('.to-top');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Show after scrolling {{show:n}}% of the viewport height
const sync = () => btn.classList.toggle('is-shown', scrollY > innerHeight * {{show:n}} / 100);
addEventListener('scroll', sync, { passive: true });
sync();

btn.addEventListener('click', () => {
  // 'auto' would follow html { scroll-behavior: smooth }, so use 'instant'
  scrollTo({ top: 0, behavior: reduce ? 'instant' : 'smooth' });
  // Move keyboard focus to the top too
  document.getElementById('page-top').focus({ preventScroll: true });
});`,
    },
  ],
  tune: [
    { key: 'show', label: 'Show after scrolling (% of viewport)', min: 20, max: 200, step: 10, value: 60, unit: '%' },
    { key: 'size', label: 'Button size', min: 36, max: 64, step: 4, value: 48, unit: 'px' },
    { key: 'dur', label: 'Fade-in duration', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
  ],
  cautions: [
    'The bottom-right corner is prime thumb territory on phones. Keep the button around 48px so it does not cover text and links, and make sure it does not overlap a sticky CTA, cookie banner or chat widget.',
    'An icon-only button needs an accessible name. Without aria-label="Back to top", screen readers just say “button”.',
    'Scrolling the view does not move keyboard focus. Give the top heading tabindex="-1" and focus it, or the next Tab press lands at the bottom of the page again.',
    'A smooth scroll up a very long page can take seconds and bothers people sensitive to motion. Use behavior: \'instant\' when prefers-reduced-motion is set; \'auto\' is not enough if your CSS sets scroll-behavior: smooth on html.',
  ],
  similar: [
    {
      slug: 'smooth-scroll',
      diff: 'Smooth scroll animates any in-page jump. A back-to-top button is one common use of it, plus the logic for when to show and hide the button.',
    },
    {
      slug: 'sticky-header',
      diff: 'A sticky header keeps the menu on screen at all times, so there is no need to go back up. A back-to-top button carries readers back once they are done.',
    },
    {
      slug: 'progress-bar',
      diff: 'A scroll progress bar only shows how far you have read. Some designs wrap a circular progress ring around the back-to-top button to combine both.',
    },
  ],
  faq: [
    {
      q: 'Can I make a back to top button with CSS only?',
      a: 'The scrolling part, yes: link to #top and set html { scroll-behavior: smooth; }. Showing the button only after the user scrolls down still needs a few lines of JavaScript, or scroll-driven animations in browsers that support them.',
    },
    {
      q: 'When should the back to top button appear?',
      a: 'Somewhere between half a screen and a full screen of scrolling is a good default. Showing it immediately clutters the first view; waiting too long means people never notice it. Try the slider in the demo to find your sweet spot.',
    },
    {
      q: 'Do mobile users need a back to top button?',
      a: 'On long pages, mobile users benefit most. iPhone users can tap the status bar to jump to the top, but many do not know that. If you have a bottom tab bar or sticky button, raise the back-to-top button above it.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
