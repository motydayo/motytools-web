import type { Ugoki } from '../types';

export default {
  slug: 'fade-in',
  no: 2,
  category: 'scroll',
  name: 'Fade-in on scroll',
  en: 'スクロールでフェードイン',
  aka: ['Fade in on scroll', 'Reveal on scroll', 'Scroll reveal', 'Scroll animation', 'Fade up on scroll'],
  mode: 'scroll',
  title: 'Fade In on Scroll: A CSS + IntersectionObserver Reveal Effect',
  description:
    'Fade sections in as they scroll into view: a tunable live demo, 10 lines of IntersectionObserver plus CSS, staggered cards, a no-JS fallback and reduced motion.',
  oneLine: 'Headings and cards drift up and fade in as they enter the screen.',
  what: [
    'As a heading, image or card scrolls into view, it starts transparent and slightly lower, then glides up into place while fading in. It is probably the most common scroll animation on landing pages and marketing sites, often just called a “scroll reveal”.',
    'In the demo, three cards come in one after another, each delayed by 0.1s. A staggered entrance leads the eye from left to right and signals that a new section is starting. The motion is deliberately small — 16px over 0.5s — so it adds polish without making anyone wait to read.',
  ],
  when: [
    'Landing pages, to mark the start of each section — features, pricing, testimonials',
    'A row of three feature cards you want read in order',
    'Logo walls and case-study grids that could use a touch of movement',
    'Careers and brand pages where scrolling should feel a little more alive',
  ],
  avoid: [
    'Every paragraph of body text: readers end up waiting for each line',
    'Product listings and search results, where people want to scan and compare fast',
    'Anything above the fold — the most important content flashes empty on load and the page feels slower',
  ],
  prompt:
    'Add a fade-in on scroll effect to section headings and cards. Start each element at opacity: 0, shifted {{dist:t}} down, and once it is 10% into the viewport, transition it back into place over {{dur:t}} with ease-out. Stagger cards in the same row by {{stagger:t}} each. Use IntersectionObserver to detect visibility and stop observing an element once it has appeared. Do not use a library. Only hide elements when JavaScript is running, so content stays visible if the script fails, and show everything immediately for users with prefers-reduced-motion: reduce.',
  howTo: [
    'Define two states in CSS — hidden (transparent, nudged down) and shown (.is-in) — and let a transition animate between them. IntersectionObserver, a browser API that tells you when an element enters the viewport, adds the class at the right moment. It is lighter than measuring positions on every scroll event and takes far less code.',
    'Scope the hidden state to a .js class set on <html> by an inline script, so if JavaScript fails to load, content is still there. The demo hides elements again when you scroll back up so you can replay it; on a real site, reveal once and stop observing.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<script>document.documentElement.classList.add('js');</script>

<section>
  <h2 class="reveal">Why guests choose us</h2>
  <div class="cards">
    <div class="card reveal">Breakfast included</div>
    <div class="card reveal">5 min from the station</div>
    <div class="card reveal">Dark-sky views</div>
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* Only hide when JavaScript is running, so content never goes missing */
.js .reveal {
  opacity: 0;
  transform: translateY({{dist}});
  transition: opacity {{dur}} ease-out, transform {{dur}} ease-out;
}
.js .reveal.is-in {
  opacity: 1;
  transform: none;
}
/* Stagger cards in the same row */
.cards .reveal:nth-child(2) { transition-delay: {{stagger}}; }
.cards .reveal:nth-child(3) { transition-delay: calc({{stagger}} * 2); }

/* Reduced motion: show everything right away */
@media (prefers-reduced-motion: reduce) {
  .js .reveal { opacity: 1; transform: none; transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    io.unobserve(entry.target); // reveal once, then stop watching
  });
}, { rootMargin: '0px 0px -10% 0px' }); // trigger 10% above the bottom edge

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Duration', min: 0.1, max: 1.2, step: 0.05, value: 0.5, unit: 's' },
    { key: 'dist', label: 'Slide-up distance', min: 0, max: 60, step: 2, value: 16, unit: 'px' },
    { key: 'stagger', label: 'Stagger between cards', min: 0, max: 0.4, step: 0.02, value: 0.1, unit: 's' },
  ],
  cautions: [
    'Do not hide content that is visible on first load. The page flashes empty and feels slow; reveal only what is below the fold.',
    'If the hidden state lives in plain CSS and the script fails, the content stays invisible forever. Gate it behind a .js class as shown.',
    'Anchor links and Google’s “scroll to text” links can land on elements that are still transparent. A generous rootMargin, or leaving headings unanimated, avoids that.',
    'Long distances (50px+) and slow durations (1s+) make people feel they are waiting. 16–24px over 0.3–0.5s is a comfortable range.',
  ],
  similar: [
    {
      slug: 'parallax',
      diff: 'Parallax keeps moving for as long as you scroll. A fade-in plays once when the element arrives, then stays still.',
    },
    {
      slug: 'highlighter',
      diff: 'A highlighter animation also triggers on entering the viewport, but only the marker stroke behind the text moves. The text itself is visible from the start.',
    },
    {
      slug: 'lazy-loading',
      diff: 'Lazy loading delays downloading images until they are close to the viewport. It is about load order and speed, not a visual effect.',
    },
  ],
  faq: [
    {
      q: 'Can I make a fade-in on scroll with CSS only?',
      a: 'In newer browsers, yes: animation-timeline: view() drives an animation from an element’s position in the viewport with no JavaScript. Support is not universal yet, so a few lines of IntersectionObserver are still the dependable choice.',
    },
    {
      q: 'Do scroll animations hurt SEO?',
      a: 'Search engines read text in the HTML even when it starts at opacity: 0. The risk is user experience and Core Web Vitals: hiding the main headline above the fold can delay what counts as the largest paint. Leave the first screen unanimated.',
    },
    {
      q: 'Should I use AOS or GSAP instead?',
      a: 'The result looks the same. AOS and GSAP make many effect types easy to apply, at the cost of extra JavaScript to download. For a simple fade-in, the few lines above are enough.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
