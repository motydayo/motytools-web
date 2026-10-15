import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'badge',
  no: 25,
  category: 'display',
  name: 'Badge',
  en: 'バッジ',
  aka: ['Notification badge', 'Count badge', 'Unread badge', 'Status label', 'Status badge', 'Dot badge'],
  mode: 'script',
  title: 'Notification Badge in CSS: Counts, Dots, 99+ and Screen Readers',
  description:
    'Notification count badges, dot badges and status labels like “New”: position them in CSS, cap counts at 99+, hide them at zero, and announce the count.',
  oneLine: 'A small tag on an icon or card corner that shows a count or a status.',
  what: [
    'A badge is a small tag layered onto the corner of an icon or a card. Along the top of the demo you will see a count badge (three unread notifications), a dot badge (there is something new in Messages, no number needed) and a cart count. Press “Add to cart” and the cart number goes up; open the bell and its unread badge disappears. The products below carry status badges: “NEW” overlapping the photo corner, and “Only 2 left” next to the price.',
    'Badges follow three rules. They clear once seen — open the notifications and the unread count goes to zero. They disappear at zero, because a “0” badge is just noise. And large numbers are capped at “99+” so the badge never balloons. One more thing: the number sits on top of the icon visually, but screen readers never see it. Put the count in the button’s accessible name instead, e.g. “Notifications (3 new)”.',
    'What sets a badge apart from its neighbors is that it is not interactive and it does not go away on its own. Chips are tags you click to toggle filters; a toast is a message that shows up for a few seconds and then leaves. A badge stays put until the state it describes changes.',
  ],
  when: [
    'Showing how many items are in the cart on an e-commerce header',
    'Flagging unread notifications, messages or inbox items',
    'Helping shoppers choose with labels like New, Sale or Low stock',
    'Admin menus that need to show work waiting, such as “Pending review 5”',
  ],
  avoid: [
    'Badging every product or menu item — when everything is highlighted, nothing is',
    'Red counts that never clear; people learn to ignore them and miss the one that matters',
    'Inflating counts just to pull people back into an app, which erodes trust fast',
  ],
  prompt:
    'Add notification badges to the store header. Overlay a rounded count badge on the top-right of the cart and notification icons. Make the badge {{size:t}} tall in {{color}} with bold white text, and give it a 2px white border so it stays legible where it overlaps the icon. Hide the badge at zero and show “99+” for 100 or more. Clear the unread count when the notifications panel is opened. Mark the number aria-hidden="true" and instead update the button’s aria-label with the count, e.g. “Cart (2 items)”. When the count goes up, give the badge a quick 0.2s bounce, and skip the bounce under prefers-reduced-motion.',
  howTo: [
    'Positioning is pure CSS. Make the icon button position: relative and place the badge with position: absolute at its top-right. Set min-width and height to the same value with border-radius: 999px, and you get a perfect circle for one digit that stretches into a pill for two or more. A white border keeps the shape readable where it overlaps the icon’s strokes.',
    'Updating the count takes a few lines of JavaScript: hide the badge at zero, write “99+” above 99, and rewrite the button’s aria-label at the same time — changing only the visible digit tells screen-reader users nothing. For actions like adding to cart, a visually hidden role="status" message (“Added to cart”) is a nice extra.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<a href="/cart" class="icon-btn" aria-label="Cart (2 items)">
  <svg width="22" height="22" aria-hidden="true"><!-- cart icon --></svg>
  <span class="badge" aria-hidden="true">2</span>
</a>

<!-- Status label (not interactive) -->
<div class="product">
  <img src="mug.jpg" alt="Stoneware mug" width="400" height="300">
  <span class="tag">NEW</span>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.icon-btn {
  position: relative;
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
}
/* Count badge */
.badge {
  position: absolute;
  top: 2px;
  left: 50%;
  min-width: {{size}};
  height: {{size}};
  padding: 0 calc({{size}} * 0.28);
  box-sizing: border-box;
  border: 2px solid #fff; /* stays legible over the icon */
  border-radius: 999px;
  background: {{color}};
  color: #fff;
  font-size: calc({{size}} * 0.58);
  font-weight: 800;
  line-height: calc({{size}} - 4px);
  text-align: center;
  font-variant-numeric: tabular-nums;
}
.badge[hidden] { display: none; }
.badge.is-pop { animation: pop 0.2s ease-out; }
@keyframes pop { 50% { transform: scale(1.25); } }

/* Status label: on the corner, slightly overlapping */
.product { position: relative; }
.tag {
  position: absolute;
  top: -6px;
  left: -6px;
  padding: 2px 8px;
  border-radius: 6px;
  background: #1d2541;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
}

@media (prefers-reduced-motion: reduce) {
  .badge.is-pop { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// Write the count to both the badge and the button's name
function setCartCount(n) {
  const btn = document.querySelector('.icon-btn');
  const badge = btn.querySelector('.badge');
  badge.hidden = n <= 0;
  badge.textContent = n > 99 ? '99+' : String(n);
  btn.setAttribute('aria-label', n > 0 ? \`Cart (\${n} \${n === 1 ? 'item' : 'items'})\` : 'Cart');
  // A single bounce to signal the change
  badge.classList.remove('is-pop');
  void badge.offsetWidth;
  badge.classList.add('is-pop');
}

setCartCount(2);`,
    },
  ],
  tune: [
    { key: 'size', label: 'Badge size', min: 14, max: 28, step: 2, value: 20, unit: 'px' },
    { key: 'color', type: 'color', label: 'Badge color', value: '#d93a2b' },
  ],
  cautions: [
    'Screen readers do not read the overlaid number. Set aria-hidden="true" on the badge and put the count in the button’s aria-label: “Notifications (3 new)”.',
    'Do not rely on color alone. “Only 2 left” in words reaches people who cannot tell red from green. If the text is white, pick a background dark enough for a 4.5:1 contrast ratio.',
    'Clear counts once they have been seen. A red number that never goes away soon gets ignored entirely.',
    'Do not make the badge its own click target. The whole 44 × 44 px icon button is the target; the badge just sits on top.',
  ],
  similar: [
    { slug: 'chips', diff: 'Chips are tags you click to toggle, typically filters. A badge is not interactive — it only reports a count or a state.' },
    { slug: 'toast', book: 'ugoki', diff: 'A toast is a message that appears for a few seconds and disappears. A badge keeps saying “there is something unseen” until it is seen.' },
  ],
  faq: [
    {
      q: 'What is the difference between a badge, a tag and a label?',
      a: 'Usage varies by design system. Commonly, a badge reports a count or a status — the number on a bell icon, “New”, “Sale”. A tag is a descriptive label such as a category or feature (“Hot tub”), and a chip is a tag-like control you can press. When prompting an AI, name the job too — “notification count badge” or “status label” — and you will get the right shape.',
    },
    {
      q: 'How should a badge show counts over 99?',
      a: 'Cap it at “99+”. A badge that keeps widening covers the icon, and past a certain point “a lot” is all people need to know. Show the exact number on the screen the badge leads to.',
    },
    {
      q: 'When should I use a dot badge instead of a number?',
      a: 'When it only matters that something is there, not how many — a new setting, an unread thread. The dot is the quietest badge, which makes it right for things that are not urgent.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
