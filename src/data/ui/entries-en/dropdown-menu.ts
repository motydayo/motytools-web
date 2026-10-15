import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'dropdown-menu',
  no: 6,
  category: 'overlay',
  name: 'Dropdown menu',
  en: 'ドロップダウンメニュー',
  aka: ['Menu button', 'Actions menu', 'Kebab menu', 'Overflow menu', 'Three-dot menu'],
  mode: 'script',
  title: 'Accessible Dropdown Menu: Menu Button Pattern & Keyboard Support',
  description:
    'What a dropdown menu is, how it differs from a select or a popover, and how to build an accessible menu button with role="menu" and arrow-key navigation.',
  oneLine: 'Press a button and a list of actions drops down right below it.',
  what: [
    'A dropdown menu opens a list of things you can do right below the button you pressed. In the demo, “Manage” on a booking card opens four actions — change dates, view receipt, add to calendar, cancel — and choosing one runs it and closes the list. With a keyboard, Enter on the button opens the menu and moves focus to the first item; the arrow keys move between items, Enter runs one, and Esc closes the menu and puts focus back on the button.',
    'It looks a lot like a select box, but a <select> is for picking a value that stays in the field and gets submitted with a form. A dropdown menu is for picking a command; nothing stays selected afterward. That difference changes how you build it and what role screen readers announce. Its value is keeping per-item actions out of sight, so cards and table rows stay clean.',
  ],
  when: [
    'Per-item actions — edit, duplicate, delete — on lists of bookings, orders or files',
    'An account menu in the header with settings, notifications and sign-out',
    'Row actions in dashboard tables, tucked behind a “⋯” button on the right',
    'Less frequently used tools in an editor toolbar, grouped under “More”',
  ],
  avoid: [
    'Choosing a value for a form field — that is a select box; use <select>',
    'Hiding your most common action inside the menu; keep that one as a visible button',
    'Lists of navigation links — use a disclosure (show/hide button) with ordinary links, not role="menu"',
  ],
  prompt:
    'Add a dropdown menu (menu button) to the top right of each booking card. The button gets aria-haspopup="menu" and aria-expanded. Pressing it opens a role="menu" list directly below, right-aligned to the button, with role="menuitem" items: Change dates, View receipt, Add to calendar, then a separator and Cancel booking in red. Make each row {{itemh:t}} tall with {{radius:t}} corners, and animate the menu in over {{dur:t}} from slightly scaled down, easing out. Follow the WAI-ARIA menu button pattern for the keyboard: Enter, Space or Down Arrow opens it and focuses the first item; Up Arrow opens it on the last item; Up/Down move and wrap around; Home/End jump to the ends; Enter activates; Esc closes and returns focus to the button; Tab closes it. Close on an outside click too, and skip the animation for prefers-reduced-motion.',
  howTo: [
    'HTML has no dedicated dropdown menu element, so build it from a <button> and a <ul role="menu">. The button gets aria-haspopup="menu" (it opens a menu) and aria-expanded (whether it is open now). Items get role="menuitem" and tabindex="-1", because inside a menu you move with the arrow keys, not by tabbing through every item.',
    'Opening, closing and arrow keys are handled in JavaScript: focus the first item on open, move with Up/Down, and on Esc close and send focus back to the button. Position the list absolutely inside a wrapper with position: relative so it stays attached to its button when the page scrolls. If an ancestor with overflow: hidden clips the menu, switch to the popover attribute so it renders in the top layer.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="menu-wrap">
  <button type="button" class="menu-btn" id="manage-btn"
    aria-haspopup="menu" aria-expanded="false" aria-controls="manage-menu">
    Manage
  </button>
  <ul class="menu" id="manage-menu" role="menu" aria-labelledby="manage-btn" hidden>
    <li role="none"><button type="button" role="menuitem" tabindex="-1">Change dates</button></li>
    <li role="none"><button type="button" role="menuitem" tabindex="-1">View receipt</button></li>
    <li role="none"><button type="button" role="menuitem" tabindex="-1">Add to calendar</button></li>
    <li role="separator"></li>
    <li role="none"><button type="button" role="menuitem" tabindex="-1" class="danger">Cancel booking</button></li>
  </ul>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.menu-wrap { position: relative; display: inline-block; }

.menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0; /* align with the button's right edge */
  z-index: 20;
  min-width: 220px;
  margin: 0;
  padding: 6px;
  list-style: none;
  border: 1px solid #e4e2dc;
  border-radius: {{radius}};
  background: #fff;
  box-shadow: 0 16px 40px -12px rgb(20 24 40 / 0.35);
  transform-origin: top right;
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out;
}
/* Starting point when it opens: slightly shrunk and transparent */
@starting-style {
  .menu:not([hidden]) { opacity: 0; transform: scale(0.96) translateY(-4px); }
}

[role='menuitem'] {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: {{itemh}};
  padding: 0 12px;
  border: 0;
  border-radius: 6px;
  background: none;
  font: inherit;
  text-align: left;
}
[role='menuitem']:hover,
[role='menuitem']:focus-visible {
  background: #f2f0ea;
  outline: 2px solid #4f73d9;
  outline-offset: -2px;
}
[role='menuitem']:hover:not(:focus-visible) { outline: none; }
[role='menuitem'].danger { color: #c4321f; }
[role='separator'] { height: 1px; margin: 4px 6px; background: #e4e2dc; }

@media (prefers-reduced-motion: reduce) {
  .menu { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('#manage-menu');
const items = [...menu.querySelectorAll('[role="menuitem"]')];

const open = (index = 0) => {
  menu.hidden = false;
  btn.setAttribute('aria-expanded', 'true');
  items.at(index).focus();
};
const close = (refocus = true) => {
  menu.hidden = true;
  btn.setAttribute('aria-expanded', 'false');
  if (refocus) btn.focus();
};
// Wrap around at either end
const move = (i) => items.at(i % items.length).focus();

// Click, Enter and Space all fire "click"
btn.addEventListener('click', () => (menu.hidden ? open(0) : close()));
btn.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    open(e.key === 'ArrowDown' ? 0 : -1);
  }
});

menu.addEventListener('keydown', (e) => {
  const i = items.indexOf(document.activeElement);
  const to = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: -1 }[e.key];
  if (to !== undefined) {
    e.preventDefault();
    move(to);
  } else if (e.key === 'Escape') close();
  else if (e.key === 'Tab') close(false);
});

menu.addEventListener('click', (e) => {
  const item = e.target.closest('[role="menuitem"]');
  if (!item) return;
  close();
  // run the item's action here
});

// Close on an outside click
document.addEventListener('pointerdown', (e) => {
  if (!menu.hidden && !menu.parentElement.contains(e.target)) close(false);
});`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Open speed', min: 0.1, max: 0.4, step: 0.05, value: 0.15, unit: 's' },
    { key: 'itemh', label: 'Row height', min: 32, max: 56, step: 2, value: 44, unit: 'px' },
    { key: 'radius', label: 'Corner radius', min: 0, max: 16, step: 2, value: 10, unit: 'px' },
  ],
  cautions: [
    'Keep rows at least 44px tall. Menus sized for a mouse at around 32px lead to mis-taps on phones. Set destructive items like Cancel or Delete apart with a separator and color them red.',
    'role="menu" tells screen readers to expect arrow-key navigation. Adding the role without the keyboard handling makes the menu harder to use, not easier — if you can’t implement the keys, leave the role off and use a plain list of buttons.',
    'Don’t use role="menu" for site navigation. Build it as a disclosure — a button that shows and hides a list of links — so people can Tab through the links normally.',
    'A “⋯” button needs an aria-label such as “Manage booking”. Write item labels as verbs that say what happens — “View receipt”, not just “Receipt”.',
  ],
  similar: [
    { slug: 'popover', diff: 'A popover is a free-form panel next to its button that can hold inputs or explanations. A dropdown menu is limited to a list of commands with arrow-key navigation.' },
    { slug: 'bottom-sheet', diff: 'A bottom sheet rises from the bottom edge. On phones, the same list of actions is often shown in a bottom sheet instead of a dropdown.' },
    { slug: 'tooltip', diff: 'A tooltip only names or explains something on hover; it has nothing to click.' },
  ],
  faq: [
    {
      q: 'What is the difference between a dropdown menu and a select box?',
      a: 'A select box (<select>) picks a value: the choice stays in the field and is submitted with the form. A dropdown menu picks an action: it runs a command and nothing stays selected. Choosing a country is a <select>; choosing Duplicate or Delete is a dropdown menu.',
    },
    {
      q: 'What keyboard support does an accessible dropdown menu need?',
      a: 'Per the WAI-ARIA menu button pattern: Enter, Space or Down Arrow on the button opens the menu and focuses the first item; Up Arrow focuses the last. Inside, Up/Down move between items, Home/End jump to the ends, Enter activates, and Esc closes the menu and returns focus to the button. Tab closes it and moves on.',
    },
    {
      q: 'Should a dropdown open on hover?',
      a: 'Usually not. Hover menus can’t be opened on touch screens and tend to close when the mouse moves diagonally toward an item. Opening on click works the same way for mouse, touch and keyboard users.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
