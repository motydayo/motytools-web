import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'tooltip',
  no: 4,
  category: 'overlay',
  name: 'Tooltip',
  en: 'ツールチップ',
  aka: ['Hover tooltip', 'Hint', 'Hover text', 'Info tooltip', 'CSS tooltip'],
  mode: 'pointer',
  title: 'Tooltip vs Popover: Accessible CSS Tooltip with role="tooltip"',
  description:
    'What a tooltip is, how it differs from a popover, and how to build an accessible one in CSS: hover and focus, a show delay, Esc to dismiss, aria-describedby.',
  oneLine: 'Hover over something and a short label appears in a bubble.',
  what: [
    'A tooltip is a small bubble of text that appears next to an element when you hover over it with a mouse or move keyboard focus to it. In the demo, hovering the icons on the photo shows their names — “Save to favorites”, “Share” — and the info icon next to the price shows a one-line note. It waits a moment before appearing, disappears when you move away, and Esc dismisses it instantly.',
    'A tooltip only ever holds a short piece of text to read. No links, no buttons — if you need something clickable inside, that is a popover, and a list of actions is a dropdown menu. And because phones have no hover, a tooltip must never be the only place important information lives. Its job is the hint that experienced people skip and unsure people appreciate, like the name of an icon-only button.',
  ],
  when: [
    'Naming icon-only buttons such as Share, Print or Favorite',
    'A one-sentence note behind an info icon — taxes, fees, conditions',
    'Toolbars in editors and dashboards, showing a tool’s name and its keyboard shortcut',
    'Showing the exact value when hovering a point or bar in a chart',
  ],
  avoid: [
    'Anything people must read, such as terms or warnings — touch users can’t hover, so they never see it',
    'Content with links or buttons inside; use a popover for anything interactive',
    'Repeating the visible label of a text button — it only gets in the way',
  ],
  prompt:
    'Add a tooltip to each icon-only button. Show a small dark bubble {{gap:t}} above the button on mouse hover or keyboard focus. Wait {{delay:t}} before showing it, fade it in over {{dur:t}}, and hide it when the pointer or focus leaves. Give the bubble role="tooltip"; for icon-only buttons, use aria-labelledby so the tooltip text becomes the button’s name, and for supplementary notes use aria-describedby. Keep it visible while the pointer moves onto the bubble, and let Esc dismiss it. Put no links or buttons inside. Do it mostly in CSS, with JavaScript only for Esc. With prefers-reduced-motion, show it without the slide.',
  howTo: [
    'Wrap the button and the bubble in one container with position: relative, and position the bubble absolutely above the button. Hide it with opacity: 0 and visibility: hidden, and reveal it when the container matches :hover or :has(:focus-visible). A transition-delay on the reveal stops tooltips from flickering every time the cursor merely passes by.',
    'Give the bubble role="tooltip" and link it to the button by id: aria-labelledby when the button has only an icon (the tooltip becomes its name), aria-describedby when it adds a note to a button that already has a name. WCAG 1.4.13 requires that hover content can be dismissed with Esc, so that is the one thing you need JavaScript for. HTML is gaining a native mechanism (popover="hint"), but browser support is still limited, so this pattern remains the dependable choice.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- Icon-only button: the tooltip text becomes its name -->
<span class="tip-wrap">
  <button type="button" class="icon-btn" aria-labelledby="tip-share">
    <svg width="20" height="20" aria-hidden="true">…</svg>
  </button>
  <span role="tooltip" id="tip-share" class="tip">Share</span>
</span>

<!-- Supplementary note: read after the button's name -->
<span class="tip-wrap">
  <button type="button" class="info-btn" aria-label="About the price"
    aria-describedby="tip-tax">i</button>
  <span role="tooltip" id="tip-tax" class="tip">
    A $25 resort fee is paid at the property.
  </span>
</span>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.tip-wrap { position: relative; display: inline-flex; }

.tip {
  position: absolute;
  bottom: calc(100% + {{gap}});
  left: 50%;
  z-index: 10;
  max-width: 240px;
  width: max-content;
  padding: 4px 8px;
  border-radius: 6px;
  background: #1f2433;
  color: #fff;
  font-size: 12px;
  /* Hidden by default; hide without waiting */
  opacity: 0;
  visibility: hidden;
  translate: -50% 4px;
  transition: opacity {{dur}} ease-in, translate {{dur}} ease-in,
    visibility 0s linear {{dur}};
}
/* An invisible bridge over the gap, so moving onto the bubble keeps it open */
.tip::before {
  content: '';
  position: absolute;
  inset: 100% 0 auto;
  height: {{gap}};
}

/* On hover or keyboard focus, wait {{delay}} and show */
.tip-wrap:hover .tip,
.tip-wrap:has(:focus-visible) .tip {
  opacity: 1;
  visibility: visible;
  translate: -50% 0;
  transition: opacity {{dur}} ease-out {{delay}},
    translate {{dur}} ease-out {{delay}}, visibility 0s linear {{delay}};
}
/* Once dismissed with Esc, stay hidden until the pointer/focus leaves */
.tip-wrap.is-dismissed .tip { opacity: 0; visibility: hidden; transition: none; }

@media (prefers-reduced-motion: reduce) {
  .tip { translate: -50% 0; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `// Esc hides whichever tooltip is showing
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document
    .querySelectorAll('.tip-wrap:hover, .tip-wrap:has(:focus-visible)')
    .forEach((w) => w.classList.add('is-dismissed'));
});

// Re-arm it once the pointer or focus moves away
document.querySelectorAll('.tip-wrap').forEach((w) => {
  w.addEventListener('pointerleave', () => w.classList.remove('is-dismissed'));
  w.addEventListener('focusout', () => w.classList.remove('is-dismissed'));
});`,
    },
  ],
  tune: [
    { key: 'delay', label: 'Show delay', min: 0, max: 1000, step: 50, value: 300, unit: 'ms' },
    { key: 'gap', label: 'Distance from button', min: 2, max: 20, step: 1, value: 8, unit: 'px' },
    { key: 'dur', label: 'Fade speed', min: 0.05, max: 0.4, step: 0.05, value: 0.15, unit: 's' },
  ],
  cautions: [
    'Touch screens have no hover. Keep tooltip content to “nice to know”; anything people must read — conditions, warnings — belongs on the page itself.',
    'With no delay, tooltips flicker as the cursor crosses the page; with a delay near a second, people give up before they appear. Somewhere between 200 and 500ms works well.',
    'WCAG 1.4.13 (Content on Hover or Focus) asks for three things: it can be dismissed (Esc), it can be hovered without disappearing, and it stays until the user moves away.',
    'Buttons near the edge of the screen can push tooltips off-screen. Align those to the left or right, or flip them below, instead of centering.',
  ],
  similar: [
    { slug: 'popover', diff: 'A popover opens on click and can contain buttons, links and inputs. A tooltip appears on hover or focus and holds only short text.' },
    { slug: 'dropdown-menu', diff: 'A dropdown menu opens a list of actions when you press its button. A tooltip has no actions — it only names or explains.' },
    { slug: 'underline', book: 'ugoki', diff: 'An underline animation draws a line under a link on hover to signal “clickable”. A tooltip tells you in words what the thing is.' },
  ],
  faq: [
    {
      q: 'What is the difference between a tooltip and a popover?',
      a: 'A tooltip appears on hover or focus and shows a short, non-interactive hint. A popover opens when you click a button and can hold interactive content such as links, inputs or buttons. If people need to click something inside it, it is a popover.',
    },
    {
      q: 'Can I just use the title attribute?',
      a: 'It is not recommended. The native title tooltip doesn’t appear on keyboard focus or on touch screens, you can’t control its delay or style, and screen readers treat it inconsistently. An element with role="tooltip" that you control works the same for everyone.',
    },
    {
      q: 'How should tooltips work on mobile?',
      a: 'The usual answer is a toggletip: tap to open, tap again or tap outside to close. For icon-only buttons, consider showing a small visible label under the icon instead — on touch devices there is otherwise no way to learn what the icon means.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
