import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'carousel',
  no: 24,
  category: 'display',
  name: 'Carousel (slider)',
  en: 'カルーセル',
  aka: ['Carousel', 'Slider', 'Image slider', 'Slideshow', 'Content slider'],
  mode: 'script',
  title: 'Accessible Carousel Slider with CSS Scroll Snap, No Autoplay',
  description:
    'Build an accessible carousel on CSS scroll snap with prev/next buttons, dots, arrow keys and swipe — no autoplay. Live demo, code, and why auto-rotation hurts.',
  oneLine: 'A row of slides you move through one at a time with buttons or a swipe.',
  what: [
    'A carousel lines up photos or cards side by side and shows them one at a time inside a fixed frame. The demo holds five rooms. You can move through them with the arrow buttons, the dots, a swipe, or the Left and Right keys, and the dots plus the “2 / 5” counter always tell you where you are. The sliver of the next slide peeking in is the cue that there is more to the right.',
    'Carousels come with conventions: previous and next buttons, a visible position indicator, support for touch and keyboard — and no movement on their own. Auto-rotating carousels have tested poorly in usability research for years: content changes while people are reading, the pause control is hard to find, and almost nobody sees slide two onward.',
    'Know the neighbors, too. CSS scroll snap is the underlying mechanism that makes a scroller stop at clean edges; a carousel is a component built on top of it, adding controls and state. A lightbox opens a single photo full screen, and it is often paired with a carousel.',
  ],
  when: [
    'Hotel, rental or used-car detail pages that need several photos of the same thing',
    '“Customers also viewed” rows of related products on an e-commerce site',
    'Testimonials or case studies that would make a phone page far too long if stacked',
    'A three- or four-step onboarding walkthrough in an app',
  ],
  avoid: [
    'Hero banners stuffed with several key messages — slides two and up rarely get seen, so show them side by side',
    'Anything people need to compare, like pricing plans or specs; you cannot compare what you cannot see at once',
    'Only one or two items — the carousel just adds clicks',
    'Content you want to rotate automatically; it changes before people finish reading and frustrates them',
  ],
  prompt:
    'Show the room photos in a carousel. Do not use a library: build it on horizontal scrolling with CSS scroll snap (scroll-snap-type: x mandatory and scroll-snap-align: start). Make each slide {{width:t}} of the container with a {{gap:t}} gap so the next slide peeks in. No autoplay. Add previous/next arrow buttons (shown as unavailable at the ends), dot indicators plus a “2 / 5” counter, swipe support, and Left/Right arrow-key navigation. Give the wrapper aria-roledescription="carousel" and each slide role="group" with an aria-label like “1 / 5”. Respect prefers-reduced-motion by switching from smooth scrolling to instant jumps.',
  howTo: [
    'Start with a horizontal scroller. Put overflow-x: auto and scroll-snap-type: x mandatory on the track and scroll-snap-align: start on each slide, and every swipe lands cleanly on a slide edge. The browser handles touch, trackpad scrolling and momentum for you. It is lighter and sturdier than the old approach of moving slides around with JavaScript transforms.',
    'JavaScript only has two jobs: call scrollTo() when someone presses a button or a dot, and work out the current slide on scroll so the dots and counter stay in sync. At either end, dim the arrow to show it does nothing. Use aria-disabled rather than disabled, because disabling a button that has focus drops keyboard users back to the top of the page.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="carousel" aria-roledescription="carousel" aria-label="Room photos">
  <div class="carousel-track" tabindex="0">
    <div class="carousel-slide" role="group" aria-roledescription="slide" aria-label="1 / 3">
      <img src="room1.jpg" alt="Deluxe King room" width="800" height="500">
    </div>
    <div class="carousel-slide" role="group" aria-roledescription="slide" aria-label="2 / 3">
      <img src="room2.jpg" alt="Ocean Suite" width="800" height="500">
    </div>
    <div class="carousel-slide" role="group" aria-roledescription="slide" aria-label="3 / 3">
      <img src="room3.jpg" alt="Garden Villa" width="800" height="500">
    </div>
  </div>
  <div class="carousel-ctrl">
    <button type="button" class="carousel-prev" aria-label="Previous photo">‹</button>
    <div class="carousel-dots"></div>
    <p class="carousel-count" aria-live="polite">1 / 3</p>
    <button type="button" class="carousel-next" aria-label="Next photo">›</button>
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.carousel-track {
  display: flex;
  gap: {{gap}};
  overflow-x: auto;
  /* Always come to rest on a slide edge */
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-x: contain;
  scrollbar-width: none;
}
.carousel-slide {
  flex: 0 0 {{width}}; /* under 100% lets the next slide peek in */
  scroll-snap-align: start;
}
.carousel-slide img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
}
.carousel-ctrl { display: flex; align-items: center; gap: 8px; }
.carousel-ctrl > button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
}
.carousel-ctrl [aria-disabled="true"] { opacity: 0.35; }
.carousel-dots button {
  width: 24px;
  height: 24px;
  border: 0;
  background: none;
}
.carousel-dots button::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  margin: auto;
  border-radius: 4px;
  background: #cfccc4;
}
.carousel-dots [aria-current="true"]::before { width: 20px; background: #1d2541; }

@media (prefers-reduced-motion: reduce) {
  .carousel-track { scroll-behavior: auto; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const root = document.querySelector('.carousel');
const track = root.querySelector('.carousel-track');
const slides = [...track.children];
const prev = root.querySelector('.carousel-prev');
const next = root.querySelector('.carousel-next');
const count = root.querySelector('.carousel-count');
const dotsBox = root.querySelector('.carousel-dots');
let index = 0;

// One dot per slide
const dots = slides.map((_, i) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.setAttribute('aria-label', \`Show slide \${i + 1}\`);
  b.addEventListener('click', () => go(i));
  dotsBox.append(b);
  return b;
});

const maxLeft = () => track.scrollWidth - track.clientWidth;
const leftOf = (i) => Math.min(slides[i].offsetLeft - track.offsetLeft, maxLeft());
const go = (i) => {
  i = Math.max(0, Math.min(slides.length - 1, i));
  track.scrollTo({ left: leftOf(i) });
};

// Work out the current slide whenever the track scrolls
const update = () => {
  const x = track.scrollLeft;
  index = x >= maxLeft() - 2 ? slides.length - 1
    : slides.reduce((best, _, i) =>
        Math.abs(leftOf(i) - x) < Math.abs(leftOf(best) - x) ? i : best, 0);
  dots.forEach((d, i) =>
    i === index ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current'));
  count.textContent = \`\${index + 1} / \${slides.length}\`;
  prev.setAttribute('aria-disabled', index === 0);
  next.setAttribute('aria-disabled', index === slides.length - 1);
};
track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });

prev.addEventListener('click', () => go(index - 1));
next.addEventListener('click', () => go(index + 1));
// Left/Right arrow keys
root.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
});
update();`,
    },
  ],
  tune: [
    { key: 'width', label: 'Slide width', min: 60, max: 100, step: 5, value: 85, unit: '%' },
    { key: 'gap', label: 'Gap between slides', min: 0, max: 32, step: 4, value: 12, unit: 'px' },
  ],
  cautions: [
    'Skip autoplay. If you truly must rotate, the minimum is a visible pause button placed first, pausing on hover and on keyboard focus, and no rotation at all under prefers-reduced-motion.',
    'Make the hit areas bigger than the visuals. Arrows of 44 × 44 px and dots of at least 24 × 24 px keep people from tapping the wrong one on a phone.',
    'Tell screen readers what this is and where they are: aria-roledescription on the wrapper, role="group" with an aria-label on each slide, and an aria-live="polite" counter.',
    'Give every image width and height, and loading="lazy" from slide two onward. The layout stays put, and photos nobody reaches are never downloaded.',
    'A mouse cannot swipe. Drop the arrow buttons and desktop users with a regular mouse are stuck on slide one.',
  ],
  similar: [
    { slug: 'scroll-snap', book: 'ugoki', diff: 'Scroll snap is the CSS mechanism that makes a scroller stop at clean edges. A carousel uses it horizontally inside a frame and adds buttons and a position indicator.' },
    { slug: 'horizontal-scroll', book: 'ugoki', diff: 'Horizontal scroll is a scroll effect where scrolling down moves a section sideways. In a carousel, people advance the slides themselves.' },
    { slug: 'lightbox', diff: 'A lightbox enlarges a single photo to fill the screen. Opening a carousel photo in a lightbox is a common pairing.' },
  ],
  faq: [
    {
      q: 'What is the difference between a carousel and a slider?',
      a: 'For content that you page through, they mean the same thing. “Carousel” is the term used in design systems and accessibility guidance, while “slider” is common in plugin names. Since “slider” also means a range input, say “carousel” when you prompt an AI to avoid getting the wrong component.',
    },
    {
      q: 'Why are auto-rotating carousels bad for accessibility?',
      a: 'Content moves while people are reading or about to click, and slides past the first are rarely seen. WCAG 2.2.2 (Pause, Stop, Hide) requires a way to pause anything that moves automatically for more than five seconds, and many auto-rotating sliders do not offer an obvious one.',
    },
    {
      q: 'Should I use Swiper or plain CSS scroll snap?',
      a: 'For paging through photos or cards, scroll snap is enough and ships no extra JavaScript. Reach for a library when you need infinite looping, 3D effects or synced thumbnails. Either way, check for prev/next buttons, a position indicator and keyboard support.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
