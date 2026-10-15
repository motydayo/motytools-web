import type { Ugoki } from '../types';

export default {
  slug: 'highlighter',
  no: 8,
  category: 'scroll',
  name: 'Highlighter animation',
  en: 'マーカーアニメーション',
  aka: ['Animated text highlight', 'Highlight text on scroll', 'Marker highlight effect', 'Highlighter pen effect', 'CSS text highlight animation'],
  mode: 'scroll',
  title: 'Highlight Text on Scroll: An Animated Highlighter Effect in CSS',
  description:
    'Sweep a highlighter stroke behind key words as they scroll into view, using only linear-gradient and background-size. Works across line breaks. Demo and code.',
  oneLine: 'A highlighter stroke sweeps in behind key words, left to right.',
  what: [
    'A band of color sits behind the lower part of an important phrase, like a stroke from a highlighter pen, and it sweeps in from left to right when the phrase scrolls into view. It works the same way as highlighting a printed handout: the reader instantly knows what matters.',
    'In the demo, only the phrases worth reading — “Stay just one night”, “a private hot spring in every room” — get a yellow stroke. When two are on screen together, they are drawn 0.3s apart so the reading order comes through as well. A highlight that draws itself in front of you catches the eye far more than one that was there all along.',
  ],
  when: [
    'Landing page headlines where one phrase carries the whole pitch',
    'Reassurance lines that remove friction, like “Free cancellation” or “Free shipping”',
    'Prices and discounts you do not want skimmed past',
    'Key takeaways in blog posts and long-form articles',
  ],
  avoid: [
    'Three or more highlights on one screen — none of them stand out anymore',
    'Link text: the stroke gets confused with link underlines and color, and it is unclear what is clickable',
    'Dark backgrounds, where a bright band makes the text harder to read',
  ],
  prompt:
    'Add a highlighter animation to key phrases in headings and body copy. Wrap each phrase in <mark class="marker"> and draw a {{color}} band over the bottom {{thick:t}} of the text with a linear-gradient. Start with background-size at 0% and, once the whole element is in view, animate it to 100% over {{dur:t}} so it looks like a highlighter stroke sweeping from left to right. Trigger it with IntersectionObserver (threshold: 1) and stop observing once it has played. The stroke must continue across line breaks when the phrase wraps. For prefers-reduced-motion: reduce, show the highlight fully drawn from the start.',
  howTo: [
    'The stroke is just a background gradient. linear-gradient(transparent 55%, yellow 55%) paints the top 55% transparent and the bottom 45% yellow. Animate the background-size from 0% to 100% with a transition and it looks like someone drawing a line from left to right — no images, no SVG. The code writes the boundary as calc(100% - thickness) so you only have to change one number.',
    'IntersectionObserver, a browser API that reports when an element enters the viewport, adds the class that triggers it. Nothing extra loads and the text stays real text, so it costs next to nothing in performance and does not affect SEO. The demo erases strokes when they leave the screen so you can replay them; on a real site, draw once and stop.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<h2><mark class="marker">First time? Stay just one night</mark> and see.</h2>
<p>Hikari is a small lodge with <mark class="marker">a private hot spring in every room</mark>.</p>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.marker {
  color: inherit;
  background-color: transparent; /* remove the default mark yellow */
  /* Highlighter color on the bottom {{thick}}, transparent above */
  background-image: linear-gradient(transparent calc(100% - {{thick}}), {{color}} 0);
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 0% 100%; /* starts with zero width */
  transition: background-size {{dur}} ease-out;
  padding: 0 2px;
}
.marker.is-on {
  background-size: 100% 100%; /* sweep left to right */
}

/* Reduced motion: show the highlight already drawn */
@media (prefers-reduced-motion: reduce) {
  .marker { background-size: 100% 100%; transition: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-on');
    io.unobserve(entry.target); // draw once, then stop watching
  });
}, { threshold: 1 }); // wait until the whole phrase is visible

document.querySelectorAll('.marker').forEach((el) => io.observe(el));`,
    },
  ],
  tune: [
    { key: 'dur', label: 'Stroke duration', min: 0.2, max: 1.5, step: 0.05, value: 0.5, unit: 's' },
    { key: 'thick', label: 'Stroke height (of text)', min: 20, max: 100, step: 5, value: 45, unit: '%' },
    { key: 'color', type: 'color', label: 'Highlighter color', value: '#ffdf6b' },
  ],
  cautions: [
    'Limit it to the two to four phrases that really matter on a page. Highlight everything and nothing stands out.',
    'Text on a colored band has lower contrast. Keep the text dark and the highlight a light, pale tint.',
    '<mark> means “highlighted for relevance”, but most screen readers do not announce it. If the emphasis matters, make the words themselves say it clearly.',
    'With threshold: 1 (fully visible), a phrase taller than the viewport never triggers. Do not use it on long passages, or lower the threshold.',
  ],
  similar: [
    {
      slug: 'underline',
      diff: 'An underline animation draws a thin line under a link when you hover it. A highlighter draws a thick band when the text scrolls into view.',
    },
    {
      slug: 'fade-in',
      diff: 'A fade-in reveals the whole element from transparent. With a highlighter, the text is visible from the start and only the band behind it animates.',
    },
  ],
  faq: [
    {
      q: 'What happens when the highlighted phrase wraps to two lines?',
      a: 'With this technique, the stroke starts at the left of the first line, runs to its end, then continues on the next line, just like a pen. If you want each line drawn separately, add box-decoration-break: clone, but then all lines animate at the same time.',
    },
    {
      q: 'Can I make the highlight animation with CSS only?',
      a: 'The drawing itself is pure CSS. You only need a few lines of IntersectionObserver to trigger it when the text enters the viewport. If it is fine for the stroke to play on page load, you can skip JavaScript entirely.',
    },
    {
      q: 'Does the highlighter have to be yellow?',
      a: 'Not at all. Pale orange, mint or light blue all work and can match your brand. Pick a light tint so the text on top stays easy to read.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
