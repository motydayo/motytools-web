import type { Ugoki } from '../types';

export default {
  slug: 'before-after',
  no: 15,
  category: 'pointer',
  name: 'Before/after slider',
  en: 'ビフォーアフタースライダー',
  aka: ['Before and after image slider', 'Image comparison slider', 'Compare slider', 'Image reveal slider'],
  mode: 'script',
  title: 'Before and After Image Slider with a Range Input and clip-path',
  description:
    'An image comparison slider: drag a divider to compare two photos. Built on input type="range" and clip-path, so touch and keyboard just work. Demo and code.',
  oneLine: 'Drag the handle left and right to compare before and after.',
  what: [
    'Two photos of the same scene are stacked. Drag the vertical divider and its round handle, and everything left of the divider shows “before” while everything right of it shows “after”. In the demo, you can see how much a dull photo gains from color correction.',
    'Comparing the same spot in place makes differences far clearer than two images side by side, and because visitors move the divider themselves, they come away convinced the change is real. Use the controls to try a different starting position, a thinner or bolder divider, and a smaller or larger handle.',
  ],
  when: [
    'Remodeling, painting and cleaning companies showing project results',
    'Photo editing, retouching and AI upscaling services demonstrating quality',
    'Salons, cosmetic and dental clinics comparing results (with consent and within advertising rules)',
    'Website redesign case studies that compare the old and new design',
  ],
  avoid: [
    'Photos that are not aligned — misalignment at the divider makes comparison harder, not easier',
    'Differences so subtle that a side-by-side layout would explain them better',
    'Many sliders on one page — people lose track of which one they are dragging',
  ],
  prompt:
    'Build a before and after image slider for our project gallery. Stack two same-size images, and clip the top “before” image with clip-path: inset(0 calc(100% - var(--pos)) 0 0). Handle input with a transparent input type="range" (0–100) laid over the whole image, writing its value into the CSS variable --pos, so mouse drag, touch and arrow keys work without custom drag code. Start the divider at {{start:t}}. Show a {{line:t}} white vertical line at the divider and a {{knob:t}} round handle with left/right arrow icons; keep the touch target at least 44px wide regardless. Give the slider an aria-label and touch-action: pan-y so vertical page scrolling still works. Only move the divider in response to input — no automatic animation. No libraries.',
  howTo: [
    'Put the “after” image underneath and the “before” image on top, then cut away the right part of “before” with clip-path. Store the cut position in a CSS variable, --pos, and changing that one number moves the divider.',
    'For input, stretch a native input type="range" across the image and make it transparent. You get mouse dragging, touch, arrow keys and screen reader support (“slider”) without writing any drag logic. The only JavaScript is a one-line input handler that copies the range value into --pos.',
    'Starting at 50% is the safe default. If the “after” image is the hero, start around 30% so most of the result is visible the moment the page loads. A 2–4px divider and a 40–48px handle read as draggable without covering the photo.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<div class="ba" style="--pos: {{start}}">
  <img class="ba-after" src="after.jpg" alt="Photo after color correction" width="800" height="450">
  <img class="ba-before" src="before.jpg" alt="Photo before color correction" width="800" height="450">
  <div class="ba-handle" aria-hidden="true">
    <span class="ba-knob">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
      </svg>
    </span>
  </div>
  <input class="ba-range" type="range" min="0" max="100" value="{{start:n}}"
    aria-label="Before and after divider">
</div>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.ba {
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  user-select: none;
}
.ba img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* Clip the "before" image at the divider */
.ba-before { clip-path: inset(0 calc(100% - var(--pos)) 0 0); }

.ba-handle {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--pos);
  width: {{line}};               /* divider thickness */
  margin-left: calc({{line}} / -2);
  background: #fff;
  pointer-events: none;
}
.ba-knob {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  place-items: center;
  width: {{knob}};               /* visible handle size */
  height: {{knob}};
  margin: calc({{knob}} / -2) 0 0 calc({{knob}} / -2);
  border-radius: 50%;
  background: #fff;
  color: #1d2541;
  box-shadow: 0 4px 14px -4px rgba(0, 0, 0, 0.4);
}
/* A transparent range input across the whole image handles all input */
.ba-range {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  appearance: none; /* needed to restyle the thumb */
  background: transparent;
  opacity: 0;
  cursor: ew-resize;
  touch-action: pan-y; /* let vertical swipes scroll the page */
}
.ba-range::-webkit-slider-thumb { appearance: none; width: 44px; height: 100%; }
.ba-range::-moz-range-thumb { width: 44px; height: 100%; border: 0; }
/* Show focus on the handle for keyboard users */
.ba:has(.ba-range:focus-visible) .ba-knob { outline: 3px solid #4f73d9; outline-offset: 2px; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `document.querySelectorAll('.ba').forEach((ba) => {
  const range = ba.querySelector('.ba-range');
  range.addEventListener('input', () => {
    ba.style.setProperty('--pos', range.value + '%');
  });
});`,
    },
  ],
  tune: [
    { key: 'start', label: 'Starting position', min: 10, max: 90, step: 5, value: 50, unit: '%' },
    { key: 'line', label: 'Divider thickness', min: 1, max: 8, step: 1, value: 3, unit: 'px' },
    { key: 'knob', label: 'Handle size', min: 28, max: 64, step: 2, value: 44, unit: 'px' },
  ],
  cautions: [
    'On phones, people swipe sideways to move the divider. Set touch-action: pan-y on the range input so a vertical swipe over the image still scrolls the page; without it, visitors can get stuck on the image.',
    'Export both images at exactly the same size and framing. Even a few pixels of offset makes objects double up at the divider.',
    'The range input is invisible, so show its keyboard focus on the visible handle. Browsers without :has() support will not show that ring; toggle a class with JavaScript if you need to support them.',
    'Label each side with small BEFORE and AFTER tags so nobody has to guess which is which.',
    'Before/after photos for cosmetic and medical treatments are regulated in many places (for example, FTC rules on testimonials and endorsements in the US). Check the rules before publishing.',
  ],
  similar: [
    {
      slug: 'image-zoom',
      diff: 'Image zoom is a hover response on a single photo. A before/after slider lets people drag to compare two photos.',
    },
    {
      slug: 'horizontal-scroll',
      diff: 'Horizontal scroll moves a row of images or cards sideways. A before/after slider stacks two images and moves only the divider.',
    },
  ],
  faq: [
    {
      q: 'Can I build a before and after slider with CSS only?',
      a: 'There are CSS-only tricks using the resize property, but they are awkward on touch screens and do not work with the keyboard. A native range input plus one line of JavaScript is more reliable everywhere.',
    },
    {
      q: 'Why is the slider hard to drag on mobile?',
      a: 'Check that the range input covers the whole image and has touch-action: pan-y. Also make the thumb’s hit area (::-webkit-slider-thumb width) at least 44px so a finger can grab it.',
    },
    {
      q: 'How do I add a before/after slider in WordPress?',
      a: 'Either install a comparison-slider plugin or paste the code above into a Custom HTML block. Put the CSS in Additional CSS and the JavaScript in your footer scripts.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
