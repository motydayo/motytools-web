import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'popover',
  no: 5,
  category: 'overlay',
  name: 'Popover',
  en: 'ポップオーバー',
  aka: ['Popover API', 'Flyout', 'Toggletip', 'Popup panel', 'Anchored popup'],
  mode: 'script',
  title: 'Popover API Guide: popover Attribute and CSS Anchor Positioning',
  description:
    'What a popover is, how it differs from a tooltip or a modal, and how to build one with the HTML popover attribute and CSS anchor positioning. Demo and code.',
  oneLine: 'Click a button and a small panel opens right below it, ready to use.',
  what: [
    'A popover is a small panel that opens next to the button you pressed and lets you choose or enter something inside it. In the demo, pressing Guests opens a panel where you set the number of adults and children with + and − buttons. Done, a click outside, or Esc all close it, and your choice sticks.',
    'Unlike a tooltip, a popover opens on click and its content is interactive; a tooltip appears on hover and is read-only. Unlike a modal, it doesn’t freeze the page: there is no backdrop, and clicking elsewhere simply closes it and carries on. That is the value — small settings and extra details that come and go without breaking the flow of the page.',
  ],
  when: [
    'Small settings such as guests or rooms, right under a search field on a travel site',
    'A “?” next to a price or term that opens an explanation with a link to learn more',
    'An avatar button that opens your name, settings and sign-out in one panel',
    'Column-specific filters that open from a table header',
  ],
  avoid: [
    'Confirming something hard to undo, like deleting or paying — the page stays live, so use a modal',
    'Long forms with many fields; the panel grows until nobody can tell where it came from',
    'A plain list of actions, which is a dropdown menu with arrow-key navigation',
  ],
  prompt:
    'Build the “Guests” field of a hotel search bar as a popover. Use the native HTML popover attribute and popovertarget — do not write your own open/close logic. Anchor the panel {{gap:t}} below the Guests button, left-aligned to it, using CSS anchor positioning (position-anchor / position-area), with a JavaScript fallback that calculates the position in browsers without support. Round the corners at {{radius:t}} and animate it in over {{dur:t}}, easing out from slightly above. Inside, add + and − buttons for adults (1–8) and children (0–8) with accessible names such as “More adults”, plus a Done button. Close it on an outside click, Esc or Done, with no backdrop. Show it without motion for prefers-reduced-motion.',
  howTo: [
    'The HTML popover attribute is now the easiest way in. Add popover to the panel and popovertarget="panel-id" to the button, and you get open on click, close on a second click, light dismiss (close on an outside click) and close on Esc. The browser also exposes aria-expanded on the button for you.',
    'Out of the box, though, a popover opens in the middle of the viewport. To pin it under its button, use CSS anchor positioning: give the button an anchor-name and the popover position-anchor and position-area, and add position-try-fallbacks so it flips above when there is no room below. Because anchor positioning support is still uneven, add a few lines that compute the position from the button’s rectangle on the toggle event. The demo recreates the same placement with position: absolute so it fits inside its frame.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="guests-btn" popovertarget="guests">
  Guests: <span class="guests-sum">2 adults</span>
</button>

<div id="guests" class="guests-pop" popover role="dialog" aria-labelledby="guests-h">
  <h2 id="guests-h">Guests</h2>
  <div class="row">
    <span>Adults</span>
    <button type="button" data-key="adults" data-step="-1" aria-label="Fewer adults">−</button>
    <span data-count="adults" aria-live="polite">2</span>
    <button type="button" data-key="adults" data-step="1" aria-label="More adults">+</button>
  </div>
  <div class="row">
    <span>Children</span>
    <button type="button" data-key="children" data-step="-1" aria-label="Fewer children">−</button>
    <span data-count="children" aria-live="polite">0</span>
    <button type="button" data-key="children" data-step="1" aria-label="More children">+</button>
  </div>
  <button type="button" popovertarget="guests" popovertargetaction="hide">Done</button>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.guests-btn { anchor-name: --guests; }

.guests-pop {
  /* Under the button, left edges aligned — not centered */
  position-anchor: --guests;
  position-area: bottom span-right;
  position-try-fallbacks: flip-block; /* flip above if there is no room */
  inset: auto;
  margin: {{gap}} 0;
  width: 280px;
  padding: 16px;
  border: 1px solid #e4e2dc;
  border-radius: {{radius}};
  box-shadow: 0 16px 40px -12px rgb(20 24 40 / 0.35);
  /* Open/close motion (ease-out on the way in) */
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity {{dur}} ease-in, transform {{dur}} ease-in,
    overlay {{dur}} allow-discrete, display {{dur}} allow-discrete;
}
.guests-pop:popover-open {
  opacity: 1;
  transform: none;
  transition-timing-function: ease-out;
}
@starting-style {
  .guests-pop:popover-open { opacity: 0; transform: translateY(-6px); }
}
.row button { width: 44px; height: 44px; border-radius: 50%; }

@media (prefers-reduced-motion: reduce) {
  .guests-pop { transition: none; transform: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const btn = document.querySelector('.guests-btn');
const pop = document.querySelector('#guests');
const sum = document.querySelector('.guests-sum');
const count = { adults: 2, children: 0 };
const min = { adults: 1, children: 0 };

// + and − (opening and closing is all handled by the popover attribute)
pop.addEventListener('click', (e) => {
  const b = e.target.closest('[data-step]');
  if (!b) return;
  const k = b.dataset.key;
  count[k] = Math.min(8, Math.max(min[k], count[k] + Number(b.dataset.step)));
  pop.querySelector(\`[data-count="\${k}"]\`).textContent = count[k];
  const a = count.adults, c = count.children;
  sum.textContent = \`\${a} adult\${a > 1 ? 's' : ''}\` +
    (c ? \`, \${c} child\${c > 1 ? 'ren' : ''}\` : '');
});

// Fallback for browsers without anchor positioning
if (!CSS.supports('position-area', 'bottom span-right')) {
  pop.addEventListener('toggle', (e) => {
    if (e.newState !== 'open') return;
    const r = btn.getBoundingClientRect();
    pop.style.left = \`\${r.left}px\`;
    pop.style.top = \`\${r.bottom}px\`;
  });
}`,
    },
  ],
  tune: [
    { key: 'gap', label: 'Distance from button', min: 0, max: 20, step: 1, value: 8, unit: 'px' },
    { key: 'dur', label: 'Open speed', min: 0.1, max: 0.5, step: 0.05, value: 0.2, unit: 's' },
    { key: 'radius', label: 'Corner radius', min: 0, max: 24, step: 2, value: 12, unit: 'px' },
  ],
  cautions: [
    'A popover does not trap focus. Pressing Tab moves from the button into the panel and then on to the rest of the page. Place the popover right after its button in the markup and that order feels natural.',
    'If the content is something to choose or fill in, add role="dialog" and a heading via aria-labelledby so screen readers announce what opened. If it is a list of commands, build a dropdown menu with role="menu" instead.',
    'On narrow screens, a panel under its button can overflow sideways or end up behind the on-screen keyboard. Many sites switch to a bottom sheet on phones.',
    'The popover attribute, @starting-style and anchor positioning are all fairly new. Without them, the panel opens centered or without animation and still works — but keep the JavaScript positioning fallback.',
  ],
  similar: [
    { slug: 'tooltip', diff: 'A tooltip appears on hover and holds read-only text. A popover opens on click and can contain buttons, links and inputs.' },
    { slug: 'modal', diff: 'A modal dims and blocks the page to ask for a decision. A popover leaves the page usable — click outside and you are back to work.' },
    { slug: 'dropdown-menu', diff: 'A dropdown menu also opens under its button, but it holds a list of commands navigated with arrow keys. A popover can hold any layout.' },
  ],
  faq: [
    {
      q: 'Tooltip vs popover: which should I use?',
      a: 'Use a tooltip for a short, read-only hint that appears on hover or focus, like the name of an icon button. Use a popover when the content opens on click or contains anything interactive — links, inputs, buttons. If people need to click inside it, it must be a popover.',
    },
    {
      q: 'Is the popover attribute supported in all browsers?',
      a: 'Yes — current Chrome, Edge, Safari and Firefox all support it. CSS anchor positioning, which places the popover next to its button, is less evenly supported, so ship a small JavaScript fallback that positions it on open.',
    },
    {
      q: 'Should focus move into the popover when it opens?',
      a: 'It depends on the content. If people will act on it right away, like the guest picker, moving focus to the first control is helpful. Unlike a modal, do not trap focus; when Tab leaves the panel, either close it or leave it open. When Esc closes it, return focus to the button.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
