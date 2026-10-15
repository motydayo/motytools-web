import type { Ugoki } from '../types';

export default {
  slug: 'toast',
  no: 30,
  category: 'inform',
  name: 'Toast notification',
  en: 'トースト通知',
  aka: ['Toast message', 'Snackbar', 'Undo toast', 'Notification popup', 'Flash message'],
  mode: 'script',
  title: 'Accessible Toast Notification with an Undo Button (Vanilla JS)',
  description:
    'Build a toast notification (snackbar) with Undo in HTML, CSS and JS: role="status" announcements, a timer that pauses on hover and focus, adjustable timing.',
  oneLine: 'A small message slides up at the bottom of the screen and disappears on its own.',
  what: [
    'Tap the heart on a saved stay and it disappears from the list, while a bar slides up at the bottom: “Removed ‘Driftwood’ from saved.” Hit Undo and the stay comes back. Do nothing and the bar fades once the thin orange timer line runs out.',
    'A toast confirms that something worked without interrupting what the person is doing. Instead of asking “Are you sure?” every time, act immediately and offer Undo: the flow stays fast, and mistakes are still recoverable. The timer pauses while the pointer is over the toast or keyboard focus is inside it, so nobody loses the Undo button mid-reach.',
  ],
  when: [
    'Adding or removing items from favorites, a cart or a list — actions that are easy to undo',
    'Confirming a save: “Settings saved”, “Draft saved”',
    'After sending an email or message, with a short-lived “Undo send”',
    'Copy-to-clipboard feedback for links, codes or coupon numbers',
  ],
  avoid: [
    'Critical errors like a failed payment, invalid form input or a lost connection — a message that vanishes in seconds is easy to miss',
    'Questions that need an answer (“Save changes?”); use a dialog or inline UI instead',
    'Bursts of many notifications; they stack up and none get read. Combine them into one',
  ],
  prompt:
    'Show action results in a toast notification. Place a rounded navy bar at the bottom center of the screen with position: fixed. It should start {{rise:t}} below its resting position and slide up with ease-out over {{enter:t}}, stay for {{show:t}}, then fade out over 0.2s. Inside, show the result message and an Undo button that reverses the action. Keep a role="status" container in the page from the start and update its text so screen readers announce it politely. Pause the countdown while the pointer is over the toast or focus is inside it (use a CSS animation on a timer bar with animation-play-state: paused, and hide the toast on animationend). Hide it with visibility: hidden so the Undo button cannot be focused when invisible. For prefers-reduced-motion users, fade without sliding. No library, and never use a toast as the only place for important errors.',
  howTo: [
    'Put the toast container in the HTML from the start with role="status" (a polite live region), and only change its text when showing a message. Live regions that are created on the fly are often missed by screen readers.',
    'The countdown is a thin bar under the message that shrinks with a CSS animation. When it finishes, the animationend event hides the toast. That makes “pause on hover and focus” a one-liner: animation-play-state: paused under :hover and :focus-within. Hide the toast with visibility: hidden as well as opacity, so keyboard users cannot tab into an invisible Undo button.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<button type="button" class="remove" data-name="Driftwood Inn">Remove from saved</button>

<!-- In the page from the start: text changes get announced -->
<div class="toast" role="status">
  <span class="toast-msg"></span>
  <button type="button" class="toast-undo">Undo</button>
  <i class="toast-timer" aria-hidden="true"></i>
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.toast {
  position: fixed;
  left: 50%;
  bottom: 16px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: calc(100% - 32px);
  padding: 8px 8px 8px 16px;
  border-radius: 10px;
  background: #1d2541;
  color: #fff;
  overflow: hidden;
  /* Hidden state (visibility also blocks focus) */
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, {{rise}});
  transition: opacity 0.2s ease-in, transform 0.2s ease-in, visibility 0s linear 0.2s;
}
.toast.is-shown {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
  transition: opacity {{enter}} ease-out, transform {{enter}} ease-out, visibility 0s;
}
.toast-undo {
  min-height: 36px;
  padding: 0 12px;
  border: 0;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffb08e;
  font-weight: 700;
  cursor: pointer;
}
/* Countdown bar: pauses on hover and focus */
.toast-timer {
  position: absolute; left: 0; bottom: 0;
  width: 100%; height: 3px;
  background: #f06a35;
  transform-origin: left;
}
.toast.is-shown .toast-timer { animation: toast-timer {{show}} linear forwards; }
.toast:hover .toast-timer,
.toast:focus-within .toast-timer { animation-play-state: paused; }
@keyframes toast-timer { to { transform: scaleX(0); } }

@media (prefers-reduced-motion: reduce) {
  .toast, .toast.is-shown { transform: translate(-50%, 0); }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const toast = document.querySelector('.toast');
const msg = toast.querySelector('.toast-msg');
const undoBtn = toast.querySelector('.toast-undo');
let undo = null; // what Undo should do

function showToast(text, onUndo) {
  msg.textContent = text;
  undo = onUndo;
  toast.classList.remove('is-shown');
  void toast.offsetWidth; // restart the countdown animation
  toast.classList.add('is-shown');
}
const hideToast = () => toast.classList.remove('is-shown');

// Hide when the countdown bar finishes
toast.querySelector('.toast-timer').addEventListener('animationend', hideToast);
undoBtn.addEventListener('click', () => {
  undo?.();
  hideToast();
});

// Example: act immediately, then offer Undo
document.querySelectorAll('.remove').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('li') ?? btn;
    item.hidden = true;
    showToast(\`Removed “\${btn.dataset.name}” from saved\`, () => {
      item.hidden = false;
      btn.focus(); // return keyboard focus
    });
  });
});`,
    },
  ],
  tune: [
    { key: 'show', label: 'Time on screen', min: 2, max: 10, step: 0.5, value: 5, unit: 's' },
    { key: 'enter', label: 'Slide-in duration', min: 0.1, max: 0.6, step: 0.05, value: 0.25, unit: 's' },
    { key: 'rise', label: 'Slide distance', min: 0, max: 40, step: 4, value: 16, unit: 'px' },
  ],
  cautions: [
    'Never rely on a toast alone for important errors. People who looked away, read slowly or use screen magnification will miss it. Show payment failures and validation errors inline, where they happened, and keep them visible.',
    'Do not make it too short. With a message and an Undo button, five seconds is a reasonable minimum, and the timer should pause on hover and focus — keyboard users need time to tab to Undo. WCAG 2.2.1 (Timing Adjustable) is the rule to keep in mind.',
    'Keep the role="status" container in the DOM and only update its text. Creating it on the fly often means nothing gets announced. Avoid role="alert" for routine confirmations; it interrupts whatever the screen reader is saying.',
    'On mobile, lift the toast above any fixed bottom bar, tab bar or chat bubble so it does not cover them.',
  ],
  similar: [
    {
      slug: 'exit-intent',
      diff: 'An exit-intent popup appears in the middle of the screen and blocks everything until dismissed. A toast sits at the edge, never blocks, and leaves on its own.',
    },
    {
      slug: 'back-to-top',
      diff: 'A back-to-top button also floats near the bottom, but stays as long as you are scrolled down. A toast reports one result and disappears after a few seconds.',
    },
  ],
  faq: [
    {
      q: 'What is the difference between a toast and a snackbar?',
      a: 'Mostly naming. Google’s Material Design calls a bottom message with one optional action (like Undo) a snackbar. In everyday use, “toast” covers any small, auto-dismissing notification.',
    },
    {
      q: 'How long should a toast stay on screen?',
      a: 'About 3–4 seconds for a short confirmation, and 5–10 seconds when there is a button like Undo. Pause the timer on hover and focus so it never disappears mid-read. Drag the “Time on screen” slider above to feel the difference.',
    },
    {
      q: 'Can I just use alert() instead?',
      a: 'Better not. alert() blocks the whole page until someone clicks OK and cannot be styled. If you want to confirm an action without interrupting, render a toast inside the page like the one above.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
