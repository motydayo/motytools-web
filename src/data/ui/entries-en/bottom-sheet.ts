import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'bottom-sheet',
  no: 3,
  category: 'overlay',
  name: 'Bottom sheet',
  en: 'ボトムシート',
  aka: ['Modal bottom sheet', 'Action sheet', 'Sheet', 'Half sheet', 'Bottom drawer'],
  mode: 'script',
  title: 'How to Build a Bottom Sheet with <dialog> and Swipe to Dismiss',
  description:
    'What a bottom sheet is, when to use one instead of a modal or drawer, and how to build it with <dialog>: slide-up CSS, swipe to dismiss, Esc and backdrop close.',
  oneLine: 'A panel slides up from the bottom and puts options within thumb reach.',
  what: [
    'A bottom sheet is a panel that slides up from the bottom edge of the screen with a few choices for the task at hand. In the demo, tapping Sort raises a sheet; pick “Price: low to high” and it drops away while the list reorders. There are four ways out: ×, a tap on the backdrop, Esc, or dragging the handle down. iOS calls the same pattern a sheet; Material Design calls it a modal bottom sheet.',
    'A modal appears in the middle and a drawer comes in from the side; a bottom sheet rises from below. When you hold a phone in one hand, your thumb only reaches the lower half of the screen, so putting choices down there makes them dramatically easier to hit. It is built for short, contextual decisions — sort order, share targets, “more actions” — layered on top of the current screen.',
  ],
  when: [
    'Sort and “results per page” options on mobile product or listing pages',
    'Per-item actions such as Share, Save and Report, grouped in one place',
    'Map-style layouts where details cover the bottom half while the map stays visible',
    'Quick confirmations or choices on phones that do not deserve a full modal',
  ],
  avoid: [
    'Wide desktop screens, where the bottom edge is far from where people are looking — switch to a popover or modal',
    'Long forms with several inputs; the on-screen keyboard shoves the sheet up and squeezes it',
    'Site-wide navigation, which belongs in a drawer or a bottom navigation bar',
  ],
  prompt:
    'Build the sort control for a mobile listing page as a bottom sheet. Open it from a “Sort” button using the native HTML <dialog> element and showModal(). Pin it to the bottom edge, max 560px wide, with only the top corners rounded at {{radius:t}} and a small drag handle at the top. On open, slide it up over {{dur:t}} with ease-out. Offer four options as buttons — Recommended, Newest, Price: low to high, Price: high to low — and close the sheet as soon as one is chosen. Provide four ways to close it: an × button, a tap on the backdrop, Esc, and dragging the handle down (close if dragged more than {{threshold:t}} of the sheet’s height, otherwise snap back). Return focus to the Sort button on close, and skip the slide for prefers-reduced-motion.',
  howTo: [
    'A bottom sheet is a kind of modal, so start from <dialog> and showModal(). You get the inert page, Esc and focus return for free; what is left is placement and motion. Push the dialog to the bottom with margin: auto auto 0 and slide it from translateY(100%) — parked below the screen — to 0.',
    'Use buttons that close the sheet, not radio buttons. With radios, pressing an arrow key to move between options would select one and close the sheet mid-navigation. Give each button in a <form method="dialog"> a value and you can read the chosen one from returnValue. Drag-to-dismiss is the one part you write yourself: let the sheet follow the pointer, and on release close it if it traveled far enough or snap it back if not. The demo uses a div to stay inside its frame, but the mechanics are identical.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="sort-btn" aria-haspopup="dialog">
  Sort: <b>Recommended</b>
</button>

<dialog class="sheet" aria-labelledby="sheet-title">
  <div class="sheet-inner">
    <div class="sheet-grab">
      <span class="sheet-handle" aria-hidden="true"></span>
      <h2 id="sheet-title">Sort by</h2>
    </div>
    <form method="dialog">
      <button class="sheet-x" value="" aria-label="Close">×</button>
      <button value="recommended" aria-pressed="true">Recommended</button>
      <button value="newest" aria-pressed="false">Newest</button>
      <button value="price-asc" aria-pressed="false">Price: low to high</button>
      <button value="price-desc" aria-pressed="false">Price: high to low</button>
    </form>
  </div>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.sheet {
  /* Stick to the bottom edge */
  margin: auto auto 0;
  width: 100%;
  max-width: 560px;
  max-height: 85dvh;
  padding: 0;
  border: 0;
  border-radius: {{radius}} {{radius}} 0 0;
  background: #fff;
  /* Parked below the screen when closed */
  transform: translateY(100%);
  transition: transform {{dur}} ease-in,
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.sheet[open] {
  transform: translateY(0);
  transition-timing-function: ease-out;
}
@starting-style {
  .sheet[open] { transform: translateY(100%); }
}
.sheet.is-dragging { transition: none; }
.sheet::backdrop { background: rgb(20 24 40 / 0.4); }

.sheet-inner { padding: 0 8px calc(8px + env(safe-area-inset-bottom)); }
/* The handle strip is draggable, so stop it from scrolling the page */
.sheet-grab { touch-action: none; cursor: grab; }
.sheet-handle {
  display: block; width: 36px; height: 4px;
  margin: 8px auto; border-radius: 2px; background: #cfccc4;
}
.sheet-x { position: absolute; top: 4px; right: 4px; width: 44px; height: 44px; }
.sheet [aria-pressed] { display: block; width: 100%; min-height: 48px; text-align: left; }
.sheet [aria-pressed='true'] { font-weight: 700; }

html:has(.sheet[open]) { overflow: hidden; }

@media (prefers-reduced-motion: reduce) {
  .sheet { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const sheet = document.querySelector('.sheet');
const sortBtn = document.querySelector('.sort-btn');
const grab = sheet.querySelector('.sheet-grab');

sortBtn.addEventListener('click', () => {
  sheet.returnValue = ''; // don't carry over the last choice
  sheet.showModal();
});

// Close on a backdrop tap (outside the sheet)
sheet.addEventListener('click', (e) => {
  if (e.target === sheet) sheet.close();
});

// Read the chosen value
sheet.addEventListener('close', () => {
  const v = sheet.returnValue;
  if (!v) return; // closed with ×, Esc or the backdrop
  sheet.querySelectorAll('[aria-pressed]').forEach((b) =>
    b.setAttribute('aria-pressed', String(b.value === v)));
  // re-sort the list here
});

// Drag the handle down to dismiss
let startY = 0;
let dy = 0;
grab.addEventListener('pointerdown', (e) => {
  startY = e.clientY;
  dy = 0;
  grab.setPointerCapture(e.pointerId);
  sheet.classList.add('is-dragging');
});
grab.addEventListener('pointermove', (e) => {
  if (!grab.hasPointerCapture(e.pointerId)) return;
  dy = Math.max(0, e.clientY - startY);
  sheet.style.transform = \`translateY(\${dy}px)\`;
});
grab.addEventListener('pointerup', () => {
  sheet.classList.remove('is-dragging');
  sheet.style.transform = '';
  // Close past {{threshold}} of the height; otherwise snap back
  if (dy > sheet.offsetHeight * {{threshold:n}} / 100) sheet.close();
});`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Slide-up speed', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
    { key: 'radius', label: 'Top corner radius', min: 0, max: 32, step: 2, value: 16, unit: 'px' },
    { key: 'threshold', label: 'Drag distance to dismiss', min: 10, max: 60, step: 5, value: 30, unit: '%' },
  ],
  cautions: [
    'The handle hints “drag me”, but not everyone reads it that way. Always include an × button too, and make Esc and the backdrop work.',
    'iPhones have a home indicator along the bottom edge. Add env(safe-area-inset-bottom) to the sheet’s bottom padding so the last option doesn’t sit underneath it.',
    'If the sheet’s content scrolls, dragging and scrolling fight each other. Make only the handle strip draggable and let the content scroll normally.',
    'On desktop, a sheet at the bottom makes people look all the way down the screen. Wide layouts usually switch to a modal or popover instead.',
  ],
  similar: [
    { slug: 'modal', diff: 'A modal opens in the center and asks for a weightier decision. A bottom sheet comes up from below for quick, contextual choices.' },
    { slug: 'drawer', diff: 'A drawer slides in from a side edge and holds navigation. A bottom sheet adds options to the current screen.' },
    { slug: 'dropdown-menu', diff: 'A dropdown menu opens right under its button as a compact list of actions. Many products show a dropdown on desktop and a bottom sheet on phones.' },
  ],
  faq: [
    {
      q: 'What is the difference between a bottom sheet and a modal?',
      a: 'Placement and weight. A modal sits in the middle of the screen and interrupts for an important decision. A modal bottom sheet also blocks the page, but it rises from the bottom where thumbs can reach and is meant for quick, contextual choices. On iOS the same pattern is simply called a sheet.',
    },
    {
      q: 'Is swipe to dismiss required?',
      a: 'Not strictly, but most phone users try it, so it is worth adding. Never make it the only way out: keyboard and screen-reader users need an × button and Esc.',
    },
    {
      q: 'Can people still use the page behind a bottom sheet?',
      a: 'They can with a “standard” bottom sheet — think of the details panel in a maps app, with no backdrop. Open that kind with show() or the popover attribute instead of showModal(), and don’t trap focus. For “pick one and close” choices like sorting, use the modal version shown in the demo.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
