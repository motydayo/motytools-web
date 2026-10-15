import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'star-rating',
  no: 23,
  category: 'input',
  name: 'Star rating',
  en: '星評価',
  aka: ['Rating stars', '5-star rating', 'Review stars', 'Rating input', 'Star rating widget'],
  mode: 'script',
  title: 'Star Rating in CSS: Accessible Radio-Based 5-Star Input',
  description:
    'Build an accessible star rating input from radio buttons and SVG: hover preview, a word for each score, keyboard support, and how it differs from average stars.',
  oneLine: 'Tap a star to give a score from 1 to 5.',
  what: [
    'A star rating lets people give a score by tapping a star; that star and every star to its left fill in. In the “Your overall rating” demo, hovering previews how many stars you are about to give, tapping locks it in, and a word such as “Very good” appears next to it.',
    'The “4.3 average” stars at the top are different: they are read-only and simply show the average as a partial fill. Input stars need to look tappable — a hover preview, a generous hit area — so make display stars small and input stars large. Also note that stars inside a review form are not final until “Post review” is pressed, while a one-tap “Was this article helpful?” rating can submit the moment it is tapped.',
    'Under the hood it is a radio group with one radio per star. Wrap it in a fieldset with a legend and keyboard users can Tab in and change the score with the left and right arrow keys, while screen readers announce “4 stars, Very good, radio button, 4 of 5”. Hide the star graphics from assistive tech and convey the score in text.',
  ],
  when: [
    'Review forms for hotels, restaurants and products',
    'One-question satisfaction surveys in apps and services',
    '“Was this helpful?” ratings at the end of articles or help pages',
    'Showing average ratings on listing cards — as read-only display stars',
  ],
  avoid: [
    'Using stars alone when you need to know what went wrong — add reasons to pick or a comment box',
    'Ten or more stars — people cannot tell a 7 from an 8, and mis-taps go up',
    'Stars built from clickable divs that cannot be reached or changed with the keyboard',
  ],
  prompt:
    'Build the overall rating in a review form as a star rating input. Use a fieldset with a legend (“Your overall rating”) and {{count:t}} radio inputs, each with an aria-label like “4 stars, Very good”. Hide the radios visually and overlay {{size:t}} SVG stars, with a hit area of at least 44px each. Fill the selected star and all stars before it with {{color:t}}, and while hovering, preview the score with a lighter fill. Show the matching word next to the stars: Terrible, Poor, Average, Very good, Excellent. Arrow keys must change the score, with a visible focus ring. Submit the score with the form when “Post review” is pressed.',
  howTo: [
    'A star rating is a radio group. Put radios with value="1" through value="5" inside labels, and wrap them in a fieldset with a legend that says what is being rated. Keyboard selection, single choice, form submission and screen-reader output all come from HTML alone.',
    'For the look, make each radio invisible (opacity: 0) and lay an SVG star over it. To fill the chosen star and everything to its left, read the selected value in JavaScript and add a class to that many stars. Use the same trick on hover for the preview, and restore the real value when the pointer leaves.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<fieldset class="rating">
  <legend>Your overall rating</legend>
  <label class="rating-star"><input type="radio" name="rating" value="1" aria-label="1 star, Terrible"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.83 5.73 6.32.92-4.57 4.46 1.08 6.3L12 17.24l-5.66 2.97 1.08-6.3L2.85 9.45l6.32-.92z"/></svg></label>
  <label class="rating-star"><input type="radio" name="rating" value="2" aria-label="2 stars, Poor"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.83 5.73 6.32.92-4.57 4.46 1.08 6.3L12 17.24l-5.66 2.97 1.08-6.3L2.85 9.45l6.32-.92z"/></svg></label>
  <!-- Stars 3–5 follow the same pattern -->
  <span class="rating-word" aria-hidden="true">Select a rating</span>
</fieldset>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.rating { display: flex; align-items: center; flex-wrap: wrap; border: 0; padding: 0; }
.rating legend { width: 100%; margin-bottom: 4px; }
.rating-star {
  position: relative;
  display: grid;
  place-items: center;
  min-width: 44px; /* hit area */
  min-height: 44px;
  cursor: pointer;
}
.rating-star svg {
  width: {{size}};
  height: {{size}};
  fill: #fff;
  stroke: #b9b6ae;
  stroke-width: 1.4;
  transition: fill 0.15s ease-out, transform 0.15s ease-out;
}
/* Hide the real radio visually */
.rating-star input { position: absolute; inset: 0; margin: 0; opacity: 0; cursor: pointer; }
.rating-star.is-fill svg { fill: {{color}}; stroke: {{color}}; }
/* Hover preview */
.rating-star.is-preview svg { fill: color-mix(in srgb, {{color}} 55%, #fff); stroke: {{color}}; }
.rating-star:hover svg { transform: scale(1.15); }
.rating-star:has(:focus-visible) { outline: 3px solid #4f73d9; outline-offset: -2px; border-radius: 8px; }

@media (prefers-reduced-motion: reduce) {
  .rating-star svg { transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const stars = [...document.querySelectorAll('.rating-star')];
const word = document.querySelector('.rating-word');
const WORDS = ['Terrible', 'Poor', 'Average', 'Very good', 'Excellent'];
let value = 0;

const paint = (n, preview = false) => {
  stars.forEach((s, i) => {
    s.classList.toggle('is-fill', !preview && i < n);
    s.classList.toggle('is-preview', preview && i < n);
  });
  word.textContent = n ? WORDS[n - 1] : 'Select a rating';
};

stars.forEach((s, i) => {
  const radio = s.querySelector('input');
  // Click or arrow keys set the score
  radio.addEventListener('change', () => { value = i + 1; paint(value); });
  // Preview while hovering
  s.addEventListener('pointerenter', () => paint(i + 1, true));
  s.addEventListener('pointerleave', () => paint(value));
});`,
    },
  ],
  tune: [
    { key: 'count', label: 'Number of stars', min: 3, max: 10, step: 1, value: 5, unit: '' },
    { key: 'size', label: 'Star size', min: 16, max: 48, step: 2, value: 32, unit: 'px' },
    { key: 'color', type: 'color', label: 'Star color', value: '#f5a623' },
  ],
  cautions: [
    'However small the star graphic, give each one a 44px hit area. More stars means more width — try 10 stars with the control above to see it wrap.',
    'Put the score into words. People read “3 stars” differently — average or good — and a label next to the stars makes ratings more consistent.',
    'Yellow stars can look faint on white. Give empty stars a gray outline so filled and empty are clearly different.',
    'For read-only average stars, use role="img" with a name like “Rated 4.3 out of 5” so screen readers do not read five separate graphics.',
  ],
  similar: [
    { slug: 'segmented-control', diff: 'A segmented control also picks one option from a row, but its options are peers, like Week and Month. A star rating is a scale where more is better.' },
    { slug: 'range-slider', diff: 'A slider can capture a score too, but fine-grained values make people hesitate. For about five levels, stars are more intuitive.' },
    { slug: 'badge', diff: 'A badge shows a number like “4.3” as a small label. On busy listing cards, a rating badge takes less space than a row of stars.' },
  ],
  faq: [
    {
      q: 'Should I allow half stars?',
      a: 'You can, but it rarely helps. Hitting half a star with a finger is hard, and it doubles the choices. Keep input to whole numbers from 1 to 5, and show precise averages like 4.3 with a partial fill in the display stars.',
    },
    {
      q: 'Should a star rating submit as soon as it is tapped?',
      a: 'It depends on context. In a review form with written comments, submit everything when “Post review” is pressed. For a standalone “Was this helpful?” rating, sending on tap and showing “Thanks for your feedback” feels natural.',
    },
    {
      q: 'Can I build a star rating with pure CSS?',
      a: 'Yes — the classic trick puts the stars in reverse order in the HTML, flips them with flex-direction: row-reverse, and fills the checked star plus its following siblings (~). But the DOM order then runs opposite to what people see, which confuses arrow keys and screen readers. Today :has() or a few lines of JavaScript are the cleaner route.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
