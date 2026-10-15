import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'quantity-stepper',
  no: 22,
  category: 'input',
  name: 'Quantity stepper',
  en: '数量ステッパー',
  aka: ['Quantity picker', 'Quantity selector', 'Plus/minus input', 'Number spinner', 'Spin button', 'Counter input'],
  mode: 'script',
  title: 'Quantity Stepper (+/− Input): HTML, CSS & JS for Carts',
  description:
    'Build an accessible quantity stepper: plus and minus buttons around input type="number". When to use it over a select, stock limits, and instant cart updates.',
  oneLine: 'Tap − or + to change a number one step at a time.',
  what: [
    'A quantity stepper puts a number between a minus and a plus button; each tap changes it by one. In the cart demo, tapping + raises the quantity and the subtotal updates immediately. At the stock limit (5 left) the + button grays out and a note says “Only 5 left in stock”. It will not go below 1.',
    'Its neighbors are the number field and the select. A number field is best for typing larger values like 120; a select lists fixed options like 1 to 10. A stepper suits quantities that are usually 1 to 3 and occasionally a bit more — one thumb, no keyboard. Making the middle an editable field, as in the demo, still lets people type 20 directly.',
    'When the change applies depends on where it lives. In a cart, update the total instantly. On a product page, the stepper only sets the amount, and nothing happens until “Add to cart”. Conventions: give the icon buttons accessible names like “Decrease quantity, Stoneware mug”, and let the up and down arrow keys change the value. <input type="number"> gives you the arrow keys and the “spin button” role for free.',
  ],
  when: [
    'Changing item quantities directly in a shopping cart',
    'Choosing how many to buy before “Add to cart” on a product page',
    'Picking the number of adults and children for a reservation',
    'Small counts like rooms or nights in a hotel booking',
  ],
  avoid: [
    'Values that often jump a lot, like 500 business cards — tapping up is too slow; use a number field',
    'Unbounded or decimal values such as amounts or weights — use a text or number field',
    'Choices that are not numbers, like S, M and L — use a segmented control',
  ],
  prompt:
    'Build the cart quantity control as a quantity stepper. Use <input type="number" inputmode="numeric" min="1" max="{{max:n}}"> in the middle so people can type a value, with a − and a + button on either side. Make the buttons {{size:t}} circles, and since they are icon-only, give them aria-labels like “Decrease quantity, Stoneware mug”. Update the quantity and the cart subtotal on every tap, announcing the subtotal with aria-live. Disable − at 1 and + at the stock limit of {{max:t}}, and show “Only {{max:t}} left in stock”. Clamp typed values to the range on change (when the field loses focus), not while typing. Hide the browser’s tiny native spin buttons.',
  howTo: [
    'Use <input type="number"> in the middle. min and max set the range, inputmode="numeric" brings up the number keypad on phones, and you get arrow-key support and the spin-button role automatically. Hide the tiny native spin buttons with CSS and put large − and + buttons on each side instead.',
    'In JavaScript, each button adds or subtracts one, clamps to the range, updates the total, and disables itself at the edge. Fix out-of-range typed values (0, 99) on the change event. Clamping on every keystroke causes bugs like turning “12” into “1” before the second digit arrives.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="stepper">
  <button type="button" class="step-btn" data-step="-1" aria-label="Decrease quantity, Stoneware mug">−</button>
  <input type="number" class="step-num" inputmode="numeric"
    min="1" max="{{max:n}}" step="1" value="2" aria-label="Quantity, Stoneware mug">
  <button type="button" class="step-btn" data-step="1" aria-label="Increase quantity, Stoneware mug">+</button>
</div>
<p class="step-msg"></p>
<p>Subtotal <strong class="cart-total" aria-live="polite">$48.00</strong></p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.stepper {
  display: inline-flex;
  align-items: center;
  border: 1.5px solid #c9c7c0;
  border-radius: 999px;
}
.step-btn {
  width: {{size}};
  height: {{size}};
  border: 0;
  border-radius: 999px;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
}
.step-btn:active { transform: scale(0.9); background: #e4e2dc; }
.step-btn:disabled { color: #c9c7c0; cursor: not-allowed; }
.step-num {
  width: 2.6em;
  height: {{size}};
  border: 0;
  font-size: 16px; /* prevents iOS zoom */
  font-weight: 800;
  text-align: center;
  appearance: textfield; /* hide native spin buttons (Firefox) */
}
.step-num::-webkit-inner-spin-button,
.step-num::-webkit-outer-spin-button { appearance: none; margin: 0; }
.step-btn:focus-visible, .step-num:focus-visible { outline: 3px solid #4f73d9; outline-offset: -2px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const num = document.querySelector('.step-num');
const msg = document.querySelector('.step-msg');
const total = document.querySelector('.cart-total');
const [dec, inc] = document.querySelectorAll('.step-btn');
const PRICE = 24;

const update = () => {
  const q = Number(num.value);
  dec.disabled = q <= num.min;
  inc.disabled = q >= num.max;
  msg.textContent = q >= num.max ? \`Only \${num.max} left in stock\` : '';
  total.textContent = '$' + (q * PRICE).toFixed(2); // update right away
};
const set = (q) => {
  num.value = Math.min(Number(num.max), Math.max(Number(num.min), q));
  update();
};

document.querySelectorAll('.step-btn').forEach((b) => {
  b.addEventListener('click', () => set(Number(num.value) + Number(b.dataset.step)));
});
// Clamp typed values when the field loses focus
num.addEventListener('change', () => set(Math.round(Number(num.value)) || 1));
update();`,
    },
  ],
  tune: [
    { key: 'size', label: 'Button size', min: 28, max: 56, step: 2, value: 44, unit: 'px' },
    { key: 'max', label: 'Max (stock)', min: 3, max: 20, step: 1, value: 5, unit: '' },
  ],
  cautions: [
    'Keep both the look and the hit area of the buttons at 44px or more. − and + sit side by side, so small buttons cause mis-taps — shrink them with the control above to feel it.',
    'When a button is disabled at a limit, say why. A grayed-out + does not tell people whether stock ran out or there is a per-order limit.',
    'For instant cart updates, do not send a request on every tap. Debounce and send the final quantity, or rapid taps can arrive out of order.',
    'Letting − go to 0 to remove an item is handy but easy to trigger by accident. Use a separate Remove link, or offer Undo after removal.',
  ],
  similar: [
    { slug: 'range-slider', diff: 'A range slider picks “roughly this much” across a wide range. For small, exact counts like 1 to 10 items, a stepper is better.' },
    { slug: 'segmented-control', diff: 'A segmented control picks one of a few fixed options. If the only choices are 1, 2 or 3, it works too.' },
    { slug: 'ripple', book: 'ugoki', diff: 'A ripple effect spreads from where you tap. Adding it to stepper buttons makes each press feel acknowledged.' },
  ],
  faq: [
    {
      q: 'Quantity stepper or a 1–10 select?',
      a: 'If people usually buy one or two and occasionally more, a stepper takes fewer taps. If they often pick 10 or more, or items come in fixed packs like 1, 6 or 12, a select is easier.',
    },
    {
      q: 'How do I hide the spin buttons on input type="number"?',
      a: 'In Chrome and Safari, set appearance: none on ::-webkit-inner-spin-button and ::-webkit-outer-spin-button. In Firefox, set appearance: textfield on the input. Always replace them with bigger − and + buttons.',
    },
    {
      q: 'Should holding the button keep incrementing?',
      a: 'It helps with large numbers but makes it easy to overshoot. With a max around 10 you do not need it; for bigger values, letting people type directly into the field is more reliable.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
