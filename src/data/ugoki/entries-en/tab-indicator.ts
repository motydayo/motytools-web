import type { Ugoki } from '../types';

export default {
  slug: 'tab-indicator',
  no: 32,
  category: 'inform',
  name: 'Sliding tab indicator',
  en: 'タブの下線スライド',
  aka: ['Animated tab underline', 'Tab indicator animation', 'Sliding underline tabs', 'Accessible tabs', 'Moving tab bar'],
  mode: 'script',
  title: 'Sliding Tab Indicator: Accessible Tabs with an Animated Underline',
  description:
    'Build tabs whose underline slides to the selected tab: accessible tablist markup, arrow-key navigation and a transform-based indicator. Tunable speed.',
  oneLine: 'Click a tab and the underline glides over to sit beneath it.',
  what: [
    'Click “Stays”, “Day pass”, “Spa” or “Classes” and the orange underline slides from the current tab to the new one, stretching or shrinking to match the label’s width, while the panel below switches. In the full demo you can also focus the tabs and move between them with the left and right arrow keys.',
    'An underline that travels, rather than blinking off and on, lets the eye follow where the selection went. It makes the current tab unmistakable, which helps when the panels look alike — pricing tiers, product variants, account views.',
  ],
  when: [
    'Switching between pricing plans or product variants in one spot',
    'Grouping parallel information, such as History, Team and Locations on an About page',
    'Filtering views in apps and dashboards: All, Unread, Saved',
    'Toggling between Log in and Sign up forms in the same card',
  ],
  avoid: [
    'Content people need to compare side by side — tabs show one panel at a time; use a table instead',
    'Six or more tabs, or long labels, which wrap or overflow on mobile',
    'Links that go to other pages. That is navigation, not tabs, and should not use role="tab"',
  ],
  prompt:
    'Build the plan switcher as tabs with a sliding underline indicator. Use a role="tablist" container with role="tab" buttons and role="tabpanel" panels, wired together with aria-selected, aria-controls and aria-labelledby. Put a single indicator element inside the tablist and, on selection, set its transform: translateX() and width from the selected tab’s offsetLeft and offsetWidth, transitioning over {{dur:t}} with {{ease}} timing. Make the indicator {{thick:t}} thick. Support the left and right arrow keys (wrapping at the ends) plus Home and End, and give unselected tabs tabindex="-1" (roving tabindex). Reposition the indicator without animation when the container resizes (ResizeObserver) and on first render. For prefers-reduced-motion users, switch without sliding. No library.',
  howTo: [
    'Do not give every tab its own underline. Put one indicator in the tablist, read the selected tab’s offsetLeft and offsetWidth in JavaScript, and apply them as transform: translateX() and width. A CSS transition does the sliding. Animating transform instead of left keeps the motion on the compositor, so it stays smooth.',
    'Tabs come with a well-known contract. role="tablist", role="tab" and role="tabpanel", plus aria-selected="true" on the active tab, let screen readers announce “tab, 1 of 4, selected”. On the keyboard, Tab moves into the tab row and the arrow keys move between tabs — the pattern documented in the WAI-ARIA Authoring Practices.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="tabs" role="tablist" aria-label="Package type">
  <button type="button" role="tab" id="tab-1" aria-selected="true" aria-controls="panel-1">Stays</button>
  <button type="button" role="tab" id="tab-2" aria-selected="false" aria-controls="panel-2" tabindex="-1">Day pass</button>
  <button type="button" role="tab" id="tab-3" aria-selected="false" aria-controls="panel-3" tabindex="-1">Spa</button>
  <i class="tab-bar" aria-hidden="true"></i>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">Dinner, bed &amp; breakfast from $129</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>Hot springs + lunch, $39</div>
<div role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden>Private outdoor bath, $45 / 50 min</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.tabs {
  position: relative;
  display: flex;
  border-bottom: 1px solid #e4e2dc;
}
.tabs [role='tab'] {
  flex: 1;
  min-height: 44px;
  border: 0;
  background: none;
  font: inherit;
  font-weight: 700;
  color: #5d6272;
  cursor: pointer;
}
.tabs [role='tab'][aria-selected='true'] { color: #f06a35; }
.tabs [role='tab']:focus-visible { outline: 2px solid #4f73d9; outline-offset: -2px; }

/* One indicator; JavaScript sets its position and width */
.tab-bar {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: {{thick}};
  background: #f06a35;
}
.tabs.is-ready .tab-bar {
  transition: transform {{dur}} {{ease}}, width {{dur}} {{ease}};
}

@media (prefers-reduced-motion: reduce) {
  .tabs.is-ready .tab-bar { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const list = document.querySelector('.tabs');
const tabs = [...list.querySelectorAll('[role="tab"]')];
const bar = list.querySelector('.tab-bar');
let cur = 0;

function moveBar() {
  const t = tabs[cur];
  bar.style.transform = \`translateX(\${t.offsetLeft}px)\`;
  bar.style.width = \`\${t.offsetWidth}px\`;
}

function select(i, focus = false) {
  cur = i;
  tabs.forEach((t, j) => {
    const on = i === j;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
  moveBar();
  if (focus) tabs[i].focus();
}

tabs.forEach((t, i) => t.addEventListener('click', () => select(i)));

// Arrow keys move between tabs; Home / End jump to the ends
list.addEventListener('keydown', (e) => {
  const n = tabs.length;
  const next = { ArrowRight: cur + 1, ArrowLeft: cur - 1, Home: 0, End: n - 1 }[e.key];
  if (next === undefined) return;
  e.preventDefault();
  select((next + n) % n, true);
});

// Reposition on resize, without animating
new ResizeObserver(() => {
  list.classList.remove('is-ready');
  moveBar();
  requestAnimationFrame(() => list.classList.add('is-ready'));
}).observe(list);`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Slide duration', min: 0.1, max: 0.8, step: 0.05, value: 0.25, unit: 's' },
    {
      key: 'ease',
      type: 'select',
      label: 'Easing',
      value: 'ease-out',
      options: [
        { value: 'ease-out', label: 'Ease-out (decelerate)' },
        { value: 'ease-in-out', label: 'Ease-in-out' },
        { value: 'linear', label: 'Linear' },
        { value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', label: 'Overshoot (springy)' },
      ],
    },
    { key: 'thick', label: 'Indicator thickness', min: 1, max: 6, step: 1, value: 3, unit: 'px' },
  ],
  cautions: [
    'The indicator’s position depends on font size and container width. Recalculate on first render, on resize and orientation change, and after web fonts load, or it drifts out of line. ResizeObserver on the tablist handles most cases.',
    'Tabs built from divs or links cannot be reached or announced correctly. Use buttons with role="tab", and keep aria-selected and aria-controls in sync.',
    'Forgetting tabindex="-1" on unselected tabs makes keyboard users Tab through every tab before reaching the content. Inside a tablist, arrow keys move between tabs.',
    'Do not put role="tab" on navigation links that load a new page. Screen reader users expect content to switch in place and get lost when the page changes.',
  ],
  similar: [
    {
      slug: 'underline',
      diff: 'An underline animation draws a line under a link on hover. A sliding tab indicator is one line that travels between tabs to mark the current one.',
    },
    {
      slug: 'accordion',
      diff: 'An accordion stacks sections and lets each open independently. Tabs swap content in a single spot and always show exactly one panel.',
    },
  ],
  faq: [
    {
      q: 'Can I build a sliding tab indicator with CSS only?',
      a: 'If the tabs are equal width and fixed in number, :has() plus transform can do it without JavaScript. With labels of different lengths, or to support arrow-key navigation properly, you need a small script like the one above.',
    },
    {
      q: 'Why does my indicator slide in from the left on page load?',
      a: 'The transition is active before the first position is set, so it animates from 0. Set the position first, then enable the transition — that is what the is-ready class does in the code. Fonts loading late can also shift the tab widths, so recalculate after they load.',
    },
    {
      q: 'Is content in hidden tabs indexed by search engines?',
      a: 'Yes, if it is in the HTML. Still, put the information the page is really about in the default tab rather than one people have to click to reveal.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
