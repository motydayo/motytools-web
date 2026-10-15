import type { Ugoki } from '../types';

export default {
  slug: 'exit-intent',
  no: 16,
  category: 'pointer',
  name: 'Exit-intent popup',
  en: '離脱防止ポップアップ',
  aka: ['Exit intent popup', 'Exit popup', 'Exit intent modal', 'Leave intent popup'],
  mode: 'script',
  title: 'Exit-Intent Popup with JavaScript and <dialog>: Show It Once',
  description:
    'Show one exit popup when the cursor heads for the tabs, built on <dialog> with once-per-session logic. Tunable entrance, mobile triggers and SEO caveats.',
  oneLine: 'When the mouse leaves through the top of the page, a popup appears once.',
  what: [
    'When a reader moves the mouse up and out of the page — toward the tabs or the address bar to close it — a small popup appears with a coupon, a free guide or a newsletter offer. In the demo, the cursor leaves through the top edge and a “Before you go” offer appears. It closes with the X, “No thanks” or Escape, and after that it never shows up again, no matter how often the cursor leaves.',
    'Its value is timing: it does not interrupt reading, and it makes one last offer at the moment someone has already decided to leave. That same timing is the risk. You are talking to someone on their way out, so it must be easy to dismiss and must never repeat. Use the controls to see how the entrance changes the tone: a short, small rise feels like a polite offer; a long, big jump feels like an ambush.',
  ],
  when: [
    'Online stores, to offer free shipping or a first-order discount to someone leaving with items in the cart',
    'B2B and SaaS sites, to offer a downloadable guide to visitors not ready to book a demo',
    'Blogs and publications, to suggest a newsletter signup after someone finishes an article',
    'Hotel and restaurant booking pages, to mention availability or a seasonal offer one last time',
  ],
  avoid: [
    'Visitors who arrived seconds ago — it only gives them a reason to leave',
    'Mid-checkout or mid-form, where it breaks concentration on what they are typing',
    'Tiny or hidden close buttons, and guilt-trip copy like “No thanks, I hate saving money”',
    'Popups that come back every time they are closed',
  ],
  prompt:
    'Add an exit-intent popup to the landing page. On desktop, open a <dialog> with showModal() when the mouse leaves through the top of the viewport (document mouseout with no relatedTarget and clientY <= 0). On mobile, use a fast scroll back up after the visitor has read more than half the page as the trigger. Do not show it in the first 10 seconds, and once shown, record it in sessionStorage so it never appears again during the visit. It must close via an X button (44px square, aria-label="Close"), a “No thanks” link, the Escape key and a backdrop click. Use a backdrop at {{dim:t}} opacity, and animate the dialog in over {{dur:t}} ease-out, rising from {{rise:t}} below while scaling up slightly. Under prefers-reduced-motion: reduce, show it without animation. No libraries.',
  howTo: [
    'On desktop, listen for mouseout on the document. If the pointer left to nowhere (relatedTarget is null) and above the top edge (clientY is 0 or less), it is heading for the tabs or address bar — that is the exit intent.',
    'Mobile has no cursor, so use a proxy: the visitor read past the halfway point and then scrolled back up quickly. Open the popup with the native <dialog> element and showModal(); you get a backdrop, Escape to close and a focus trap for free. Set a flag in sessionStorage the first time it opens and never open it again in that session. (The demo uses the open attribute so the popup stays inside its frame; on a real site, use showModal() as in the code below.)',
    'Keep the entrance understated. A 0.25–0.35s rise of about 8px feels like the offer is being handed over rather than thrown at the visitor. A backdrop around 40–50% opacity draws the eye to the dialog while the page stays visible behind it, so it does not feel like a trap.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<dialog class="exit-popup" aria-labelledby="exit-title">
  <form method="dialog">
    <button class="exit-close" aria-label="Close">×</button>
    <p class="exit-kicker">Before you go</p>
    <h2 id="exit-title">10% off your first stay</h2>
    <p>Valid on bookings made today. No account needed.</p>
    <a class="exit-cta" href="/offer">Get my code</a>
    <button class="exit-dismiss">No thanks</button>
  </form>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.exit-popup {
  width: min(92vw, 360px);
  padding: 0; /* so a click on the dialog itself is always a backdrop click */
  border: 0;
  border-radius: 16px;
  text-align: center;
}
.exit-popup form { padding: 28px 20px 12px; }
.exit-popup::backdrop { background: rgba(29, 37, 65, {{dim:n}}); } /* backdrop opacity */
.exit-popup[open] { animation: exit-in {{dur}} ease-out; }
@keyframes exit-in {
  from { opacity: 0; transform: translateY({{rise}}) scale(0.96); }
}
.exit-close {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 44px;  /* comfortable tap target */
  height: 44px;
  border: 0;
  background: none;
  font-size: 20px;
  cursor: pointer;
}
.exit-cta {
  display: block;
  margin-top: 12px;
  padding: 12px;
  border-radius: 999px;
  background: #f06a35;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}
.exit-dismiss {
  min-height: 44px;
  border: 0;
  background: none;
  color: #5d6272;
  text-decoration: underline;
  cursor: pointer;
}
@media (prefers-reduced-motion: reduce) {
  .exit-popup[open] { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const popup = document.querySelector('.exit-popup');
const KEY = 'exit-popup-shown';
const startedAt = Date.now();

const alreadyShown = () => {
  try { return sessionStorage.getItem(KEY) === '1'; } catch { return false; }
};

function openExitPopup() {
  if (!popup || popup.open || alreadyShown()) return;
  if (Date.now() - startedAt < 10000) return; // not in the first 10 seconds
  try { sessionStorage.setItem(KEY, '1'); } catch {}  // once per session
  popup.showModal();
}

// Desktop: the mouse leaves through the top edge
document.addEventListener('mouseout', (e) => {
  if (!e.relatedTarget && e.clientY <= 0) openExitPopup();
});

// Mobile: past halfway, then a fast scroll back up
let lastY = window.scrollY;
let lastT = performance.now();
window.addEventListener('scroll', () => {
  const now = performance.now();
  const speed = (lastY - window.scrollY) / Math.max(1, now - lastT); // upward speed
  const read = lastY / (document.body.scrollHeight - innerHeight);
  if (speed > 1.5 && read > 0.5) openExitPopup();
  lastY = window.scrollY;
  lastT = now;
}, { passive: true });

// Clicking the backdrop closes it; Escape and the form buttons close it natively
popup?.addEventListener('click', (e) => {
  if (e.target === popup) popup.close();
});`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Entrance duration', min: 0.1, max: 0.8, step: 0.05, value: 0.3, unit: 's' },
    { key: 'rise', label: 'Rise distance', min: 0, max: 40, step: 2, value: 8, unit: 'px' },
    { key: 'dim', label: 'Backdrop opacity', min: 0, max: 0.8, step: 0.05, value: 0.45, unit: '' },
  ],
  cautions: [
    'Phones have no cursor, so there is no “leaving through the top” signal. Fast scroll-up, time on page or the back button are all guesses and will sometimes misfire. Decide carefully whether to show it on mobile at all.',
    'Google has said that intrusive interstitials that cover the main content on mobile can hurt rankings. On phones, prefer a small banner that does not block reading.',
    'Pushiness is the real enemy. Make the close button large and obvious, and show the popup at most once per visit.',
    'While the popup is open, keyboard focus must stay inside it and return to where it was when it closes. The native <dialog> with showModal() handles both.',
    'Showing it right after the page loads feels like “I have not even read anything yet”. Wait several seconds, or only show it to visitors who have scrolled a meaningful distance.',
  ],
  similar: [
    {
      slug: 'toast',
      diff: 'A toast appears small at the edge of the screen and disappears on its own without blocking anything. An exit-intent popup sits in the center and blocks the page until it is closed.',
    },
    {
      slug: 'back-to-top',
      diff: 'A back-to-top button also appears based on scrolling, but it exists to help the reader. An exit-intent popup exists to make the site’s offer.',
    },
  ],
  faq: [
    {
      q: 'Are exit-intent popups bad for SEO?',
      a: 'A desktop popup that only appears as someone leaves is generally low risk. Mobile is where to be careful: Google has named intrusive interstitials that cover content right after a visitor arrives as a negative signal. On mobile, use a small banner or skip it.',
    },
    {
      q: 'Do exit-intent popups work on mobile?',
      a: 'Not with the same trigger, because there is no mouse. Sites use a fast scroll back up, time on page or the back button as proxies. They misfire more often, so keep the conditions strict.',
    },
    {
      q: 'How often should an exit-intent popup be shown?',
      a: 'Once per visit at most. Showing it again to someone who already closed it turns an offer into an annoyance. Store a flag in sessionStorage or a cookie, and wait days before showing it to the same person again.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
