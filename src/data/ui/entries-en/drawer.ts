import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'drawer',
  no: 2,
  category: 'overlay',
  name: 'Navigation drawer',
  en: 'ドロワー',
  aka: ['Drawer', 'Side drawer', 'Off-canvas menu', 'Slide-out menu', 'Side nav drawer'],
  mode: 'script',
  title: 'Navigation Drawer (Off-Canvas Menu) with HTML <dialog> and CSS',
  description:
    'What a navigation drawer is, how it differs from a hamburger menu or a modal, and how to build an accessible off-canvas menu with <dialog>. Live demo and code.',
  oneLine: 'A menu panel slides in from the edge of the screen and sits over the page.',
  what: [
    'A navigation drawer is a tall panel that slides in from the edge of the screen — usually the left — like a drawer pulled out of a desk. In the demo, the three-line button in the header opens a panel with the site’s menu, and the page behind it dims and stops responding. You can close it with ×, a tap on the backdrop, the Esc key or a swipe to the left, and keyboard focus goes back to the menu button.',
    'The difference from a modal is where it appears and what it holds. A modal sits in the middle and asks for one decision; a drawer hugs the edge and asks where you want to go. The three-line icon itself is the hamburger button — the drawer is the panel it opens. Its value is storing five to ten destinations on a phone without squeezing them into the header.',
  ],
  when: [
    'Mobile site navigation with more links than the header can hold — typically five to ten',
    'Store or publication category lists that people scan top to bottom with one thumb',
    'Web apps and dashboards whose left sidebar stays visible on desktop but collapses into a drawer on phones',
    'Filter panels on listing pages that slide in over the results',
  ],
  avoid: [
    'Hiding three to five links on a wide desktop screen — a visible header nav is faster to scan',
    'Putting your most important action (Book, Buy) only inside the drawer — if it is not opened, it is not seen',
    'Primary app sections that people switch between constantly on phones — a bottom navigation bar is within thumb reach',
  ],
  prompt:
    'Build the mobile site menu as a navigation drawer. Open it from a hamburger button on the left of the header (with aria-label and aria-expanded), using the native HTML <dialog> element and showModal(). Pin the panel to the left edge, full height, {{width:t}} wide but never more than 85% of the viewport. On open, slide it in from the left over {{dur:t}} with ease-out. Add a backdrop at {{dim:t}} opacity and lock page scrolling while it is open. Close it with an × button, a click on the backdrop, or Esc. When it closes, return focus to the hamburger button. Mark the current page’s link with aria-current="page". With prefers-reduced-motion, show it without the slide.',
  howTo: [
    'The content is a list of links, so wrap it in <nav>, put that inside a <dialog> and open it with showModal(). That alone gives you an inert page behind, Esc to close and focus returned to the opener. Then use CSS to move the dialog from the center to the left edge and slide it from translateX(-100%) — parked off-screen — to 0.',
    'Describe the starting point in @starting-style and animate the exit with transition-behavior: allow-discrete. Closing on a backdrop click is the one behavior <dialog> does not include, so add it in JavaScript. Set the dialog’s own padding to 0 and wrap the contents in an inner box; otherwise a click on the panel’s padding counts as a click on the backdrop. The demo uses a div to stay inside its frame, but follows the same rules.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="menu-btn" aria-label="Open menu"
  aria-controls="drawer" aria-expanded="false">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
</button>

<dialog id="drawer" class="drawer" aria-label="Menu">
  <div class="drawer-inner">
    <button type="button" class="drawer-x" aria-label="Close">×</button>
    <nav aria-label="Main">
      <a href="/" aria-current="page">Home</a>
      <a href="/stays/">Find a stay</a>
      <a href="/stories/">Stories & guides</a>
      <a href="/bookings/">My bookings</a>
      <a href="/help/">Help center</a>
    </nav>
  </div>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.drawer {
  /* Left edge, full height — not centered */
  margin: 0;
  inset: 0 auto 0 0;
  width: min({{width}}, 85vw);
  max-width: none;
  height: 100dvh;
  max-height: none;
  padding: 0;
  border: 0;
  background: #fff;
  /* Parked off-screen when closed; ease-in on the way out */
  transform: translateX(-100%);
  transition: transform {{dur}} ease-in,
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.drawer[open] {
  transform: translateX(0);
  transition-timing-function: ease-out;
}
@starting-style {
  .drawer[open] { transform: translateX(-100%); }
}
.drawer-inner { height: 100%; padding: 16px; }
.drawer nav a { display: flex; align-items: center; min-height: 44px; }

/* Fade the backdrop with it */
.drawer::backdrop {
  background: rgb(20 24 40 / 0);
  transition: background {{dur}},
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.drawer[open]::backdrop { background: rgb(20 24 40 / {{dim:n}}); }
@starting-style {
  .drawer[open]::backdrop { background: rgb(20 24 40 / 0); }
}

/* Lock page scroll while open */
html:has(.drawer[open]) { overflow: hidden; }

@media (prefers-reduced-motion: reduce) {
  .drawer, .drawer::backdrop { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const drawer = document.querySelector('#drawer');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  drawer.showModal(); // Esc and an inert page come for free
  menuBtn.setAttribute('aria-expanded', 'true');
});
drawer.querySelector('.drawer-x').addEventListener('click', () => drawer.close());

// Close on a backdrop click (outside the panel)
drawer.addEventListener('click', (e) => {
  if (e.target === drawer) drawer.close();
});

// However it closed, reset the button (focus returns automatically)
drawer.addEventListener('close', () => {
  menuBtn.setAttribute('aria-expanded', 'false');
});`,
    },
  ],
  tune: [
    { key: 'width', label: 'Panel width', min: 200, max: 360, step: 10, value: 280, unit: 'px' },
    { key: 'dur', label: 'Slide speed', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
    { key: 'dim', label: 'Backdrop opacity', min: 0, max: 0.8, step: 0.05, value: 0.4, unit: '' },
  ],
  cautions: [
    'Don’t make the panel full width. A strip of backdrop on the right tells people they can tap there to get back. On phones, 80–85% of the screen width is a good ceiling.',
    'If the page behind keeps scrolling, people lose their place when the drawer closes. Stop it with html:has(.drawer[open]) { overflow: hidden; }.',
    'Give the hamburger button an aria-label such as “Open menu” and keep aria-expanded in sync. An icon-only button is announced as just “button” otherwise.',
    'Many people try to swipe a drawer shut, so support it if you can. Avoid using an edge swipe to open it, though — on iPhone, swiping from the left edge means “go back”.',
  ],
  similar: [
    { slug: 'modal', diff: 'A modal opens in the middle of the screen and asks for one decision or a short input. A drawer slides in from the edge and holds navigation.' },
    { slug: 'hamburger-menu', diff: 'The hamburger menu is the three-line button that opens the menu; the drawer is the panel that slides out. One is the trigger, the other is the container.' },
    { slug: 'bottom-sheet', diff: 'A bottom sheet rises from the bottom edge and puts contextual options — sort, share — within thumb reach.' },
  ],
  faq: [
    {
      q: 'Is a navigation drawer the same as a hamburger menu?',
      a: 'Not quite. “Hamburger menu” refers to the three-line icon button, or the pattern of hiding navigation behind it. The drawer is the panel that slides in when you press it. They are usually paired, which is why the names get mixed up. When you prompt an AI, ask for “a hamburger button that opens a left navigation drawer”.',
    },
    {
      q: 'Should a drawer slide in from the left or the right?',
      a: 'Site-wide navigation conventionally comes from the left — Material Design puts the navigation drawer on the leading edge, which is the right side in right-to-left languages. Right-side panels are common for secondary content such as a cart or filters. Pick one direction per purpose and stick to it.',
    },
    {
      q: 'How do I make an off-canvas menu accessible?',
      a: 'Move focus into the drawer when it opens, keep Tab from leaving it, close it on Esc, and return focus to the menu button when it closes. Label the button and expose aria-expanded. Opening a <dialog> with showModal() handles most of this for you.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
