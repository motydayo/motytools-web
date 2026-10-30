import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'cookie-banner',
  no: 30,
  category: 'display',
  name: 'Cookie consent banner',
  en: 'Cookie同意バナー',
  aka: ['Cookie banner', 'Cookie consent popup', 'Cookie notice', 'Consent banner', 'CMP banner'],
  mode: 'script',
  title: 'Cookie Consent Banner: Make “Reject All” as Easy as “Accept”',
  description:
    'A fair cookie consent banner: equally easy Reject all and Accept all buttons, per-category choices, a way to change your mind, and no tracking before consent.',
  oneLine: 'Asks to use cookies, with accept and reject equally easy to choose.',
  what: [
    'A cookie consent banner appears at the bottom of the page on a first visit and asks whether the site may use analytics and advertising cookies (small records stored in the browser). In the demo, “Reject all” and “Accept all” share the same color and size, and “Customize” lets you switch analytics and advertising on or off individually. Once you choose, the banner slides away, and the “Cookie settings” link in the footer reopens it at any time.',
    'The most important convention is that rejecting must be as easy as accepting. Making “Accept all” a big colored button while “Reject” hides in small gray text or two screens deep is treated as a dark pattern under the GDPR’s approach to consent and in guidance from several European data protection authorities. Category switches should start off, and no analytics or ad tags should load before someone agrees.',
    'Unlike a modal, a banner does not trap the page. People can keep reading and answer later. Requirements differ by country, region and business, so treat this as general design guidance and check the rules that apply to you — with legal advice where needed.',
  ],
  when: [
    'Sites running analytics or ad tags that get visitors from places where consent is required, such as the EU and UK',
    'E-commerce or media sites that measure ads or use retargeting',
    'Any time you want to say plainly what data you collect and why, and let people choose',
  ],
  avoid: [
    'Sites that only use strictly necessary cookies — a notice on your privacy page is often enough',
    'Full-screen walls that block the page until people answer; they read as pressure to accept',
    'Highlighting “Accept” while “Reject” takes effort to find',
  ],
  prompt:
    'Add a cookie consent banner to the site. Show it as a strip at the bottom of the screen, up to {{width:t}} wide, sliding in and out over {{dur:t}}. The copy says “We use cookies to improve our site and measure our ads” with a link to the cookie policy. Offer “Reject all” and “Accept all” as buttons with the same color, size and a single click each — do not emphasize either one. Add a “Customize” option that reveals switches for Essential (always on), Analytics and Advertising, with Analytics and Advertising off by default. Save the choice, and do not load any analytics or ad scripts until consent is given. Add a “Cookie settings” link in the footer so people can change their mind any time. Do not cover the whole page, make it fully keyboard operable, and drop the animation under prefers-reduced-motion.',
  howTo: [
    'The banner is an ordinary box fixed to the bottom with position: fixed — not a modal. Build “Reject all” and “Accept all” from the same class so they look identical. For per-category choices, checkboxes with role="switch" give you keyboard support and screen-reader states out of the box.',
    'The order of operations matters more than the looks. On page load, read any saved choice and show the banner only to people who have not answered. Load analytics and ad scripts from JavaScript only after confirming consent; if they are hard-coded in the HTML, they run before the banner can do anything. In production, many sites also log when consent was given or use a consent management platform (CMP).',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="cookie" role="region" aria-label="Cookie preferences" hidden>
  <p><b>We use cookies</b></p>
  <p>We use cookies to improve our site and measure our ads.
     Apart from the essential ones, it is your choice. <a href="/cookies">Learn more</a></p>

  <fieldset class="cookie-cats" hidden>
    <legend>Customize</legend>
    <label><input type="checkbox" checked disabled> Essential (always on)</label>
    <label><input type="checkbox" role="switch" name="stats"> Analytics</label>
    <label><input type="checkbox" role="switch" name="ads"> Advertising</label>
  </fieldset>

  <div class="cookie-btns">
    <button type="button" class="cookie-btn" data-choice="none">Reject all</button>
    <button type="button" class="cookie-btn" data-choice="all">Accept all</button>
    <button type="button" class="cookie-more">Customize</button>
  </div>
</section>

<!-- Footer: a way back in at any time -->
<button type="button" class="cookie-open">Cookie settings</button>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.cookie {
  position: fixed;
  bottom: 12px;
  left: 12px;
  z-index: 100;
  width: min(calc(100% - 24px), {{width}});
  padding: 16px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 16px 40px -16px rgb(29 37 65 / 0.45);
  animation: cookie-in {{dur}} ease-out;
}
@keyframes cookie-in {
  from { opacity: 0; transform: translateY(calc(100% + 16px)); }
}
.cookie-btns { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
/* Reject and Accept look exactly the same */
.cookie-btn {
  flex: 1 1 120px;
  min-height: 44px;
  border: 0;
  border-radius: 999px;
  background: #1d2541;
  color: #fff;
  font-weight: 700;
}
.cookie-more {
  min-height: 44px;
  border: 0;
  background: none;
  text-decoration: underline;
}

@media (prefers-reduced-motion: reduce) {
  .cookie { animation: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const KEY = 'cookie-consent';
const banner = document.querySelector('.cookie');
const cats = banner.querySelector('.cookie-cats');
const more = banner.querySelector('.cookie-more');
const loaded = new Set(); // scripts already added (never add twice)
let saved = JSON.parse(localStorage.getItem(KEY) || 'null');

// Load analytics and ad scripts only with consent
function apply(c) {
  if (c.stats) loadScript('https://example.com/analytics.js');
  if (c.ads) loadScript('https://example.com/ads.js');
}
function loadScript(src) {
  if (loaded.has(src)) return;
  loaded.add(src);
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  document.head.append(s);
}
function save(c) {
  const withdrawn = saved && ((saved.stats && !c.stats) || (saved.ads && !c.ads));
  saved = { ...c, at: Date.now() };
  localStorage.setItem(KEY, JSON.stringify(saved));
  banner.hidden = true;
  // A loaded script cannot be unloaded, so reload the page after a withdrawal.
  // Cookies a tool has already set must be deleted the way that tool documents.
  if (withdrawn) location.reload();
  else apply(c);
}

banner.addEventListener('click', (e) => {
  const choice = e.target.dataset.choice;
  if (choice) save({ stats: choice === 'all', ads: choice === 'all' });
  if (e.target.matches('.cookie-more')) {
    if (cats.hidden) { cats.hidden = false; e.target.textContent = 'Save my choices'; }
    else save({ stats: cats.elements.stats.checked, ads: cats.elements.ads.checked });
  }
});
document.querySelector('.cookie-open').addEventListener('click', () => {
  // Show the saved choice in the switches
  if (saved) {
    cats.elements.stats.checked = !!saved.stats;
    cats.elements.ads.checked = !!saved.ads;
    cats.hidden = false;
    more.textContent = 'Save my choices';
  }
  banner.hidden = false;
});

// Only ask people who have not answered yet
if (saved) apply(saved); else banner.hidden = false;`,
    },
  ],
  tune: [
    { key: 'width', label: 'Banner width', min: 280, max: 720, step: 20, value: 720, unit: 'px' },
    { key: 'dur', label: 'Slide speed', min: 0.1, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
  ],
  cautions: [
    'Do not fire analytics or ad tags before consent. A banner on its own changes nothing if the tags are hard-coded in the HTML — they run the moment the page loads. If you use a tag manager, gate tags on the consent state.',
    'Avoid a big colored “Accept” next to a small gray “Reject”. Under the GDPR’s approach, consent must be freely given, and refusing or withdrawing it should be as easy as giving it.',
    'Let people change their choice later from a fixed place, such as a footer link. Without a way back in, withdrawing consent is impossible.',
    'On phones, a banner covering half the screen makes the page unreadable. Keep the copy short, place the buttons side by side and keep the height down.',
    'Requirements vary by region, industry and the tools you use, and US state privacy laws add their own opt-out rules. Treat this as general guidance and confirm what applies to you with a legal professional.',
  ],
  similar: [
    { slug: 'modal', diff: 'A modal blocks the page until it is closed. A cookie banner normally does not trap the page, so people can read on and answer later.' },
    { slug: 'toast', book: 'ugoki', diff: 'A toast is a notice that disappears after a few seconds. A cookie banner stays until people make an explicit choice.' },
    { slug: 'sticky-cta', diff: 'A sticky CTA bar also lives at the bottom of the screen, but it pushes a sale or signup. Showing both crowds the bottom, so hold the CTA bar until consent is settled.' },
  ],
  faq: [
    {
      q: 'Does a cookie banner need a “Reject all” button?',
      a: 'Under the GDPR’s approach and guidance from several European regulators, refusing should be as easy as accepting, so a “Reject all” button on the first layer has become standard practice. Requirements differ by region, so check what applies to your audience before launch.',
    },
    {
      q: 'Do US websites need a cookie consent banner?',
      a: 'There is no single federal rule, but if you have visitors from the EU or UK, their consent rules can apply to you, and several US state privacy laws require an opt-out for selling or sharing personal data. Audit the tags you use and confirm your obligations with a legal professional.',
    },
    {
      q: 'Which cookies can I still use after someone rejects all?',
      a: 'Generally only strictly necessary ones — those that keep people signed in or remember what is in their cart. Analytics and advertising cookies should not be set after a rejection.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
