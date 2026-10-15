import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'pricing-table',
  no: 27,
  category: 'display',
  name: 'Pricing table',
  en: '料金表',
  aka: ['Pricing page', 'Pricing cards', 'Plan comparison table', 'Pricing plans', 'Pricing tiers'],
  mode: 'script',
  title: 'Pricing Table Design: Highlight One Plan, Make Comparing Easy',
  description:
    'Build a pricing table people can actually compare: aligned feature rows, one highlighted plan and a monthly/yearly toggle in pure CSS. Live demo and code.',
  oneLine: 'Plans side by side, features on matching rows, one plan recommended.',
  what: [
    'A pricing table lines up your plans so people can compare price and features at a glance. The demo shows Free, Standard and Pro. Standard, in the middle, gets every highlight at once — a “Most popular” tag, a colored border, a slightly larger scale and the only filled button — so undecided visitors know where to land. Switch to Yearly and every plan shows its per-month price, with the annual total billed right underneath.',
    'Two conventions matter most: easy comparison and a single recommendation. List features in the same order on the same rows for every plan, and keep features a plan lacks visible as “—” instead of deleting them. Misaligned rows and inconsistent wording force people to count back and forth. Highlight exactly one plan; when everything shouts, nothing stands out.',
    'Know where neighbors fit. Putting plans in a carousel hides all but one, which defeats comparison — on phones, stack the cards instead. If you have many features, add a full “Compare all features” table below the cards, with features as rows and plans as columns.',
  ],
  when: [
    'SaaS, app or membership pricing pages with two to four plans',
    'Studios, gyms or salons offering packages that differ by sessions or hours',
    'Monthly and annual billing, where you want the annual savings to be obvious',
    'The closing section of a landing page, to help people pick a plan and move on',
  ],
  avoid: [
    'Five or more plans — they will not fit side by side and comparison gets heavy; cut the number first',
    'Services that need a custom quote; a grid full of “Contact us” earns little trust',
    'Shouting the per-month annual price while hiding the total charged — that invites refunds and complaints',
  ],
  prompt:
    'Build a pricing table for our pricing page with three plans — Free, Standard and Pro — side by side, stacking into one column on phones. Each card shows, in order: plan name, who it is for, price, a button, and a feature list. Keep features in the same order on matching rows across all plans, and keep missing features visible as “—” with visually hidden “not included” text. Highlight only Standard: a 2px {{color}} border, a “Most popular” tag on top, a filled button and a {{pop:t}} scale; the other buttons are outlined. Add a monthly/yearly toggle built from radio buttons, and on yearly show both the per-month price and the annual total.',
  howTo: [
    'Lay the cards out with CSS Grid: three columns on wide screens, one on narrow ones. The surest way to keep feature rows aligned is to render every card from the same array in the same order — hand-written lists drift. Give the recommended card all of its cues together — border color, top tag, filled button and a small transform: scale() — because any single cue on its own is easy to miss.',
    'The monthly/yearly toggle needs no JavaScript. Use two radio buttons, write both prices into the markup, and swap which one shows with :has(#yearly:checked). Because they are real radio buttons, arrow-key switching and the “selected” state for screen readers come for free.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="pricing">
  <fieldset class="billing">
    <legend class="sr-only">Billing period</legend>
    <label><input type="radio" name="billing" id="monthly" checked> Monthly</label>
    <label><input type="radio" name="billing" id="yearly"> Yearly (2 months free)</label>
  </fieldset>

  <div class="plans">
    <article class="plan">
      <h3>Free</h3>
      <p class="price">$0<small>/mo</small></p>
      <a href="/signup" class="btn-outline">Start for free</a>
      <ul>
        <li>30 bookings / month</li>
        <li class="off">— Sales reports<span class="sr-only"> (not included)</span></li>
      </ul>
    </article>

    <article class="plan is-rec">
      <p class="pop">Most popular</p>
      <h3>Standard</h3>
      <p class="price">
        <span class="m">$12</span><span class="y">$10</span><small>/mo</small>
      </p>
      <p class="note y">Billed $120 yearly</p>
      <a href="/signup?plan=standard" class="btn-primary">Start 14-day free trial</a>
      <ul>
        <li>Unlimited bookings</li>
        <li>Sales reports</li>
      </ul>
    </article>
    <!-- Pro follows the same structure -->
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.plans {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  gap: 16px;
}
@media (max-width: 640px) {
  .plans { grid-template-columns: 1fr; }
}
.plan {
  position: relative;
  padding: 24px 20px;
  border: 1px solid #e4e2dc;
  border-radius: 16px;
}
/* Highlight one plan only: color, tag and scale together */
.plan.is-rec {
  border: 2px solid {{color}};
  transform: scale({{pop:n}});
}
.pop {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 12px;
  border-radius: 999px;
  background: {{color}};
  color: #fff;
  font-size: 12px;
  font-weight: 700;
}
.btn-primary { background: {{color}}; color: #fff; }
.plan .off { color: #9a9ca5; }

/* Monthly/yearly toggle (no JavaScript) */
.y { display: none; }
.pricing:has(#yearly:checked) .y { display: inline; }
.pricing:has(#yearly:checked) .m { display: none; }
.pricing:has(#yearly:checked) .note.y { display: block; }`,
    },
  ],
  tune: [
    { key: 'pop', label: 'Highlight scale', min: 1, max: 1.1, step: 0.01, value: 1.04, unit: '' },
    { key: 'color', type: 'color', label: 'Highlight color', value: '#3d5fc4' },
  ],
  cautions: [
    'If you show an annual plan as a per-month price, print the yearly total on the same card. Surprising people at checkout leads to chargebacks and cancellations. Be clear about whether tax is included.',
    'Stacked on a phone, the third plan ends up far below the first. Keep a way to compare — a compact summary of names and prices, or a full feature table further down.',
    'A dash or gray text alone does not tell a screen reader a feature is missing. Add visually hidden “not included” text, and distinguish check marks by shape, not just color.',
    'Do not overdo the highlight scale. Past about 1.1 the card collides with its neighbors and text starts to look blurry. A small difference is enough.',
  ],
  similar: [
    { slug: 'segmented-control', diff: 'A segmented control switches between two to five options, like Monthly and Yearly. It often sits right above a pricing table.' },
    { slug: 'carousel', diff: 'A carousel shows one card at a time. Plans in a carousel cannot be seen together, so it is the wrong pattern for pricing.' },
    { slug: 'hover-lift', book: 'ugoki', diff: 'Hover lift raises a card slightly under the cursor to signal it is clickable. A subtle version pairs well with pricing cards.' },
  ],
  faq: [
    {
      q: 'How many pricing tiers should I show?',
      a: 'Three is the most common and the easiest to choose from. Two gives little to compare; beyond four, the cards will not fit side by side and comparison gets tiring. If you have more, consider splitting them by audience first.',
    },
    {
      q: 'Should the recommended plan go in the middle?',
      a: 'Most products put it there. Flanked by a cheaper and a pricier option, the middle plan feels like the sensible choice, and it naturally draws the eye. Position matters less than honesty, though: recommend the plan that genuinely fits most customers.',
    },
    {
      q: 'How should prices be formatted on pricing cards?',
      a: 'Make the number large and bold and the billing period (“/mo”) small. Use font-variant-numeric: tabular-nums so digits line up across cards. For annual billing, show both the per-month price and the total charged per year.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
