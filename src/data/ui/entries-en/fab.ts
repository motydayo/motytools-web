import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'fab',
  no: 14,
  category: 'nav',
  name: 'Floating action button (FAB)',
  en: 'フローティングアクションボタン',
  aka: ['FAB', 'Floating button', 'Extended FAB', 'Fixed action button', 'Floating add button'],
  mode: 'script',
  title: 'Floating Action Button (FAB): Size, Placement and CSS Code',
  description:
    'A floating action button keeps the main action in thumb reach. Standard size and placement, an extended FAB that shrinks on scroll, and accessible markup.',
  oneLine: 'A round button floating in the corner that holds the screen’s one main action.',
  what: [
    'A floating action button (FAB) is a round button that floats in the bottom-right corner and stays put while the page scrolls. Popularized by Google’s Material Design, it holds the one action people take most on that screen: New note in a notes app, Directions in a maps app, New chat in a messenger. In the demo, it starts as a wide “+ Add item” button (an extended FAB), shrinks to a circle as you scroll down, and grows back when you scroll up. Tapping it adds a new item to the top of the list.',
    'The value of a FAB is that the primary action is always under your thumb. The cost is that it floats over your content, so overusing it gets in the way. The rule: at most one per screen, and only for constructive actions — create, compose, start. Delete, share and settings do not belong in a FAB.',
    'The conventions: about 56px across (never below 44px) and about 16px from the screen edges. Give an icon-only FAB an accessible name with aria-label, such as “Add item”. On iPhone, add env(safe-area-inset-bottom) to the bottom offset so it clears the home indicator.',
  ],
  when: [
    'Notes, task and budgeting apps where creating something new is the main job of the screen',
    'Inboxes and chat lists where Compose or New message should always be within reach',
    'Maps and store locators that float My location or Directions over the map',
    'Mobile admin screens where people need to add a record while scrolling a long list',
  ],
  avoid: [
    'Articles and landing pages — a button floating over body text gets in the way of reading',
    'Screens with two or more equally important actions — two FABs and nobody knows which one matters',
    'Secondary actions like delete, share or settings — put those in regular buttons or menus',
  ],
  prompt:
    'Add a floating action button (FAB) to the notes list screen. Use <button aria-label="Add item"> fixed to the bottom-right corner with position: fixed, {{inset:t}} from the right and bottom edges, plus env(safe-area-inset-bottom) at the bottom so it clears the iPhone home indicator. Make it a {{size:t}} circle in {{color:t}} with a centered plus icon (SVG) and a layered shadow so it looks raised. At the top of the page, extend it to a pill reading “+ Add item”; when the user scrolls down, shrink it back to the circle over 0.25s, and extend it again when they scroll up. Clicking it opens the new-note screen. Add bottom padding to the list so the last item is never hidden behind the button. Skip the resize animation for prefers-reduced-motion.',
  howTo: [
    'Use a <button> and pin it to the corner with position: fixed. Offset it with right and bottom, and add env(safe-area-inset-bottom) to bottom so it clears the home indicator on modern phones. Give it equal width and height with border-radius: 999px, and layer two shadows — a large soft one and a small tight one — to lift it off the page.',
    'The extended FAB that collapses on scroll is just a max-width transition that hides the label. On scroll, compare the position with the previous one: add a class when moving down, remove it when moving up. The demo uses position: sticky to stay inside its frame; in production, use position: fixed so it is anchored to the viewport.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="fab" aria-label="Add item">
  <svg class="fab-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none" />
  </svg>
  <span class="fab-text" aria-hidden="true">Add item</span>
</button>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.fab {
  position: fixed;
  right: calc({{inset}} + env(safe-area-inset-right));
  bottom: calc({{inset}} + env(safe-area-inset-bottom));
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 8px;
  height: {{size}};
  min-width: {{size}};
  max-width: 200px;
  padding: 0 calc(({{size}} - 24px) / 2);
  border: 0;
  border-radius: 999px;
  background: {{color}};
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  /* Two layered shadows make it float */
  box-shadow: 0 6px 16px -4px rgb(20 24 40 / 0.35), 0 2px 4px rgb(20 24 40 / 0.15);
  transition: max-width 0.25s ease-out, transform 0.15s ease-out;
}
.fab-icon { flex: none; width: 24px; height: 24px; }
.fab:active { transform: scale(0.96); }
.fab:focus-visible { outline: 3px solid #4f73d9; outline-offset: 3px; }

/* Collapse to a circle while scrolling down */
.fab.is-compact { max-width: {{size}}; }
.fab.is-compact .fab-text { opacity: 0; }

/* Keep the last list item clear of the button */
.list { padding-bottom: calc({{size}} + {{inset}} * 2); }

@media (prefers-reduced-motion: reduce) {
  .fab { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const fab = document.querySelector('.fab');
let lastY = scrollY;

// Shrink when scrolling down, extend when scrolling up
addEventListener('scroll', () => {
  const y = scrollY;
  if (y > lastY + 4 && y > 24) fab.classList.add('is-compact');
  else if (y < lastY - 4 || y <= 24) fab.classList.remove('is-compact');
  lastY = y;
}, { passive: true });

fab.addEventListener('click', () => {
  location.href = '/notes/new/'; // open the create screen
});`,
    },
  ],
  tune: [
    { key: 'size', label: 'Button size', min: 40, max: 72, step: 2, value: 56, unit: 'px' },
    { key: 'inset', label: 'Edge margin', min: 8, max: 32, step: 2, value: 16, unit: 'px' },
    { key: 'color', type: 'color', label: 'Button color', value: '#f06a35' },
  ],
  cautions: [
    'A FAB sits on top of your content. Add bottom padding equal to the button height plus margins so the last list item or a Next button is never hidden behind it.',
    'If the screen also has a bottom nav, a cookie banner or a sticky CTA bar, lift the FAB above them. Bottom-pinned elements colliding is one of the most common mobile layout bugs.',
    'Screen readers announce an icon-only FAB as just “button”. Name the action with aria-label (“Add item”), and hide the visible label of an extended FAB with aria-hidden so it is not read twice.',
    'Keyboard users may have to tab through the whole page to reach a FAB placed at the end of the HTML. Put it right before or after the screen’s main content in source order.',
  ],
  similar: [
    { slug: 'back-to-top', book: 'ugoki', diff: 'A back-to-top button also floats in the corner, but it is a helper that scrolls up. A FAB holds the screen’s main action, like create or start.' },
    { slug: 'sticky-cta', diff: 'A sticky CTA bar is a full-width strip that pushes a conversion like Book now. A FAB is a small round tool for getting work done.' },
    { slug: 'bottom-nav', diff: 'A bottom nav switches between destinations. A FAB starts something on the current screen; when both are present, the FAB sits above the bar.' },
  ],
  faq: [
    {
      q: 'What size should a floating action button be, and where does it go?',
      a: 'Material Design’s standard is 56px, 16px from the screen edges. If you go smaller, keep at least a 44px tap target. Bottom right is the default: it is easy to reach with a thumb and stays out of the way of left-to-right text.',
    },
    {
      q: 'Should I use a FAB in an iOS app?',
      a: 'Apple’s guidelines do not include a FAB; iOS apps usually put the primary action as a + button at the right end of the navigation bar. FABs are still common on the web and in apps that share one design across Android and iOS.',
    },
    {
      q: 'What is the difference between a FAB and a sticky CTA?',
      a: 'A FAB is a tool for doing something on the current screen — create, compose, start — and is kept small and round. A sticky CTA bar is a banner that nudges people toward a conversion, like requesting a quote or booking, with prominent copy. For a landing page, a sticky CTA is usually the better fit.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
