import type { Ugoki } from '../types';

export default {
  slug: 'hover-lift',
  no: 9,
  category: 'pointer',
  name: 'Hover lift',
  en: 'ホバーで浮き上がる',
  aka: ['Card hover effect', 'Lift on hover', 'Hover elevation', 'Raised card on hover'],
  mode: 'pointer',
  title: 'CSS Card Hover Effect: Lift the Card and Add a Soft Shadow',
  description:
    'A card that lifts and casts a shadow on hover, using only transform and box-shadow. Tune distance, speed and shadow live, then copy the CSS or an AI prompt.',
  oneLine: 'Hover a card and it rises slightly, casting a soft shadow.',
  what: [
    'When the pointer lands on a card, the card moves up a few pixels and a shadow appears underneath it, as if it were picked up off the page. In the demo, each listing lifts as the cursor reaches it, signaling “this is clickable” and “this is the one you are about to choose”.',
    'The movement is tiny, so it never competes with the content. What it does is make the current target unmistakable in a grid of similar cards, which helps on listing pages and pricing tables. Drag the controls below: around 6px over 0.2s feels responsive; past 12px or half a second it starts to look bouncy.',
  ],
  when: [
    'Product, listing or blog card grids where the whole card is a link',
    'Pricing pages with three plans side by side, to highlight the one being considered',
    'Portfolio and case-study grids that need a bit of tactile feedback',
    'Recommended-article blocks where plain text gives no hint that it is clickable',
  ],
  avoid: [
    'Decorative cards that do nothing when clicked — lifting promises an action',
    'Tables and form fields, where moving content makes reading and typing harder',
    'Tightly packed grids, where the shadow spills onto neighboring cards',
  ],
  prompt:
    'Add a hover lift effect to the card grid. On hover, move the card up by {{lift:t}} with transform: translateY and add a soft box-shadow below it (opacity {{shadow:t}}; offset and blur should grow with the lift distance). Use a {{dur:t}} ease-out transition. CSS only, no JavaScript. Put the :hover rule inside @media (hover: hover) so touch devices do not get stuck in the hover state, and give touch users a slight press-down on :active instead. Apply the same lifted style on :focus-visible for keyboard users. Under prefers-reduced-motion: reduce, do not move the card; only change the shadow.',
  howTo: [
    'This is pure CSS. Give the card a transition, then on :hover move it up with transform: translateY and add a box-shadow. Avoid animating top or margin: those trigger layout and push neighboring cards around, while transform only moves the pixels.',
    'Tie the shadow to the lift distance — the higher the card, the further down and blurrier the shadow — and it reads as real elevation instead of a sticker. Wrap :hover in @media (hover: hover) so phones, which have no hover, do not leave a tapped card stuck in the air.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="cards">
  <a class="card" href="/stays/mountain">
    <img src="mountain.jpg" alt="Mountain lodge exterior" width="320" height="200">
    <span class="card-body">Mountain lodge<small>From $89 / night</small></span>
  </a>
  <!-- more cards -->
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
.card {
  display: block;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  color: inherit;
  text-decoration: none;
  transition: transform {{dur}} ease-out, box-shadow {{dur}} ease-out;
}
.card img { display: block; width: 100%; height: auto; }

/* Only on devices with a real hover (mouse, trackpad) */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-{{lift}});
    /* shadow drops 2x and blurs 4x the lift distance */
    box-shadow: 0 calc({{lift}} * 2) calc({{lift}} * 4) -12px rgba(0, 0, 0, {{shadow:n}});
  }
}
/* Same look for keyboard focus */
.card:focus-visible {
  transform: translateY(-{{lift}});
  box-shadow: 0 calc({{lift}} * 2) calc({{lift}} * 4) -12px rgba(0, 0, 0, {{shadow:n}});
  outline: 2px solid #4f73d9;
  outline-offset: 2px;
}
/* Press-down feedback, also visible on touch */
.card:active { transform: scale(0.98); transition-duration: 0.1s; }

/* Reduced motion: keep the shadow, drop the movement */
@media (prefers-reduced-motion: reduce) {
  .card, .card:hover, .card:focus-visible, .card:active { transform: none; }
}`,
    },
  ],
  tune: [
    { key: 'lift', label: 'Lift distance', min: 0, max: 20, step: 1, value: 6, unit: 'px' },
    { key: 'dur', label: 'Duration', min: 0.05, max: 0.8, step: 0.05, value: 0.2, unit: 's' },
    { key: 'shadow', label: 'Shadow opacity', min: 0, max: 0.8, step: 0.05, value: 0.35, unit: '' },
  ],
  cautions: [
    'Touch screens have no hover. Mobile browsers often keep :hover applied to the last tapped element, so the card looks stuck in the lifted state. Keep :hover inside @media (hover: hover).',
    'Do not hide information (price, description) behind hover. Mobile visitors will never see it. The lift is a cue that the card is clickable, not a container for content.',
    'Animating top or margin-top forces the browser to recalculate layout every frame and causes jank. Animate transform (and box-shadow) only.',
    'Make the whole card a single <a> rather than a div with a link inside. The entire area becomes clickable and keyboard users reach it with one Tab.',
  ],
  similar: [
    {
      slug: 'image-zoom',
      diff: 'Image zoom keeps the card frame still and scales only the photo inside. Hover lift moves the whole card. The two are often combined.',
    },
    {
      slug: 'magnetic-button',
      diff: 'A magnetic button drifts toward the cursor in any direction. Hover lift always moves straight up, regardless of where the pointer is.',
    },
  ],
  faq: [
    {
      q: 'Why does my hover lift animation look choppy?',
      a: 'Usually because it animates top or margin instead of transform, or because the box-shadow blur is very large. Move the card with translateY and keep the blur moderate. If it is still heavy, put the shadow on a ::after pseudo-element and animate only its opacity.',
    },
    {
      q: 'The card stays lifted after I tap it on my phone. How do I fix that?',
      a: 'Mobile browsers treat the last tapped element as hovered. Wrap the :hover rule in @media (hover: hover) so it only applies on devices with a mouse or trackpad.',
    },
    {
      q: 'How far should a card lift on hover, and how fast?',
      a: 'About 4–8px over 0.15–0.25s works for most designs. Larger or slower feels bouncy and restless. Increase the shadow offset along with the lift so the elevation looks physically right — the demo above lets you compare.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
