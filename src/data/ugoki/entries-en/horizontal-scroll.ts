import type { Ugoki } from '../types';

export default {
  slug: 'horizontal-scroll',
  no: 5,
  category: 'scroll',
  name: 'Horizontal scroll',
  en: '横スクロール',
  aka: ['Horizontal scroll section', 'Scroll horizontally on vertical scroll', 'Sideways scroll', 'Horizontal scrolling gallery'],
  mode: 'scroll',
  title: 'Horizontal Scroll Section Driven by Vertical Scroll (CSS + JS)',
  description:
    'Scroll down and the cards slide sideways: a horizontal scroll section built with position: sticky and transform, plus the height math and mobile caveats.',
  oneLine: 'You scroll down, but for one stretch the content slides sideways.',
  what: [
    'You are scrolling down the page, then one section locks in place and a row of cards or images slides in from the right. When the row runs out, the page continues downward as usual. It is a favorite on portfolio sites and brand pages.',
    'In the demo, five project cards sit in one long row that moves left by however much you scroll. The thin bar underneath shows how far along the row you are. Compared with stacking five cards vertically, each one gets more room, and the sideways motion makes people curious about what comes next.',
  ],
  when: [
    'Architecture, design and agency portfolios that show one project at a time, large',
    'Company history or product timelines that read naturally left to right',
    'Launch pages that line up colors, models or variants to compare',
    'Brand sites that want a change of rhythm on a long page',
  ],
  avoid: [
    'Only two or three items: the slide is short and mostly just feels like the page got stuck',
    'Product grids or comparison tables people want to see all at once',
    'Layouts on phones that invite a sideways swipe — swiping does nothing, which confuses people',
  ],
  prompt:
    'Build the projects section as a horizontal scroll section driven by vertical scrolling. Pin the inner panel with position: sticky; top: 0; height: 100vh; and lay out {{card:t}}-wide cards in a single row (display: flex) with a {{gap:t}} gap. For every 1px of vertical scroll, move the row {{speed:n}}px to the left with transform: translateX. Set the section height to the viewport height plus (row width − viewport width) ÷ {{speed:n}}, so the section ends exactly when the last card arrives. Add a thin progress bar. Do not use a library. For prefers-reduced-motion: reduce, skip the pinning and fall back to a normal overflow-x: auto row people can swipe or scroll.',
  howTo: [
    'Under the hood this is a pin. Give the outer section extra height and stick the inner panel with position: sticky. While it is pinned, translate the card row left by the amount you have scrolled down, and vertical motion turns into horizontal motion.',
    'The key is the section height: viewport height plus the distance the row has to travel (row width minus viewport width). That way the pin releases exactly when the last card lands. Divide the travel by a speed factor to make the row move, say, 2px sideways per 1px of scroll. Card count and screen width change the distance, so calculate it in JavaScript and recalculate on resize.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<section class="hs-sec">
  <div class="hs-pin">
    <h2>Selected work</h2>
    <div class="hs-track">
      <article class="work">Farmhouse restoration</article>
      <article class="work">Beach cafe</article>
      <article class="work">Mountain hotel</article>
      <article class="work">Town library</article>
      <article class="work">Lakeside sauna</article>
    </div>
  </div>
</section>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `/* Pin the panel while scrolling through the section */
.hs-pin {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
/* One long row; JavaScript slides it left */
.hs-track {
  display: flex;
  gap: {{gap}};
  width: max-content;
  padding: 0 24px;
  will-change: transform;
}
/* flex: none keeps cards from shrinking */
.work {
  flex: none;
  width: {{card}};
  aspect-ratio: 7 / 5;
  border-radius: 12px;
  background: #e9eefb;
}

/* Reduced motion: a plain scrollable row instead */
@media (prefers-reduced-motion: reduce) {
  .hs-sec { height: auto !important; }
  .hs-pin { position: static; height: auto; }
  .hs-track { width: auto; overflow-x: auto; transform: none !important; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const sec = document.querySelector('.hs-sec');
const pin = sec.querySelector('.hs-pin');
const track = sec.querySelector('.hs-track');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
const SPEED = {{speed:n}}; // px moved sideways per 1px scrolled down
let dist = 0;

// Section height = viewport height + horizontal travel / speed
function fit() {
  dist = Math.max(0, track.scrollWidth - pin.clientWidth);
  sec.style.height = reduce.matches ? '' : \`\${window.innerHeight + dist / SPEED}px\`;
  update();
}

// Slide the row by how far we have scrolled into the section
function update() {
  if (reduce.matches) return;
  const p = Math.min(1, Math.max(0, (-sec.getBoundingClientRect().top * SPEED) / dist || 0));
  track.style.transform = \`translate3d(\${-p * dist}px, 0, 0)\`;
}

window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
window.addEventListener('resize', fit);
fit();`,
    },
  ],
  tune: [
    { key: 'speed', label: 'Sideways speed (per 1px scroll)', min: 0.5, max: 3, step: 0.25, value: 1, unit: '' },
    { key: 'card', label: 'Card width', min: 160, max: 360, step: 10, value: 280, unit: 'px' },
    { key: 'gap', label: 'Gap between cards', min: 8, max: 48, step: 4, value: 16, unit: 'px' },
  ],
  cautions: [
    'position: sticky fails silently if an ancestor has overflow: hidden, auto or scroll. If the panel will not pin, check the parents.',
    'On phones, a row of cards begs to be swiped sideways, and here that does nothing. Add a “Keep scrolling” hint or a progress bar so people know to scroll down.',
    'Tabbing through links in the row can move focus to cards that are off screen. Keep one link per card and avoid stacking focusable elements out of view.',
    'The longer the row, the more someone has to scroll without moving down the page. Four to six cards, or two to three screens of travel, is a comfortable limit.',
  ],
  similar: [
    {
      slug: 'pinning',
      diff: 'Pinning swaps content in place while the panel is held. A horizontal scroll section slides its content sideways instead.',
    },
    {
      slug: 'marquee',
      diff: 'A marquee scrolls text or logos at a constant speed on its own. A horizontal scroll section moves only as much as you scroll, and stops when you stop.',
    },
    {
      slug: 'scroll-snap',
      diff: 'Horizontal scroll snap gives you a swipeable row where each card clicks into place. This effect, by contrast, moves sideways in response to vertical scrolling.',
    },
  ],
  faq: [
    {
      q: 'Do I need GSAP to scroll horizontally on vertical scroll?',
      a: 'No. Pin the panel with position: sticky and translate the row by the vertical scroll distance — about 20 lines of JavaScript. GSAP ScrollTrigger is a popular way to build it, but it is not needed for a single section.',
    },
    {
      q: 'Is a horizontal scroll section a good idea on mobile?',
      a: 'It works, but people instinctively swipe sideways and nothing happens. On small screens, shorten the section or switch to a native overflow-x: auto row that can be swiped.',
    },
    {
      q: 'Why does the section end before the last card is visible?',
      a: 'The section is not tall enough. It must be the viewport height plus (row width − viewport width) ÷ speed. If images load later and widen the cards, recalculate after they load and on resize.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
