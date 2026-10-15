import type { Ugoki } from '../types';

export default {
  slug: 'lazy-loading',
  no: 18,
  category: 'load',
  name: 'Lazy loading',
  en: '遅延読み込み',
  aka: ['Lazy load images', 'loading="lazy"', 'Native lazy loading', 'Deferred image loading', 'Image fade-in on load'],
  mode: 'scroll',
  title: 'Lazy Loading Images with loading="lazy" (Plus a Fade-In Effect)',
  description:
    'Lazy load images with native loading="lazy", reserve space with width and height to avoid layout shift, and fade them in. Live demo and copy-paste code.',
  oneLine: 'Images load only as they approach the viewport, fading in from a gray placeholder.',
  what: [
    'Images below the fold are not downloaded when the page opens. The browser fetches each one only as the visitor scrolls toward it. In the demo, photos that have not loaded yet are gray placeholders; as they near the frame, the picture fades in a moment later. The “Photos loaded” counter climbs as you scroll.',
    'The goal is speed more than spectacle. Less to download up front means the page appears sooner and mobile visitors use less data. Reserve each image’s space with the correct aspect ratio and nothing jumps when it finally arrives.',
  ],
  when: [
    'Galleries, portfolios and case-study pages with dozens of photos',
    'Product listing pages where items far down the grid should not load immediately',
    'Long blog posts with diagrams and screenshots spread throughout',
    'YouTube or Google Maps embeds near the bottom of the page (iframes support loading="lazy" too)',
  ],
  avoid: [
    'Images visible on first load — your hero image or logo. Lazy loading them makes the page slower',
    'Short pages with one or two images: there is nothing meaningful to defer',
    'Pages meant to be printed — images that never loaded may be missing from the printout',
  ],
  prompt:
    'Add lazy loading to the images on this page. Put loading="lazy" and decoding="async" on every <img> except the hero image visible on first load, and give every <img> width and height attributes matching the real image size to prevent layout shift; in CSS use width: 100%; height: auto;. Give each image wrapper a {{ph}} background as a placeholder, and fade each image in over {{fade:t}} with ease-out only once it has finished loading, scaling it from {{zoom:n}} down to 1 so it settles into focus. Skip the fade and scale under prefers-reduced-motion: reduce.',
  howTo: [
    'The core is one HTML attribute. Add loading="lazy" to an <img> and the browser itself waits until the image is close to the viewport before fetching it. You no longer need a JavaScript library watching scroll position and swapping data-src; every major browser supports it natively. Always add width and height (the image’s intrinsic size) too, so the browser reserves the right space before the file arrives.',
    'The gray-to-photo fade is optional polish and needs a few lines of JavaScript: mark images that have not finished loading, keep them transparent, and remove the mark on the load event so a CSS transition fades them in. A placeholder color close to the photo’s average color makes the reveal feel smoother. Note that the demo simulates loading with JavaScript (40px before the frame, 0.6s delay) so you can see it happen. Real loading="lazy" starts much earlier, often more than 1,000px ahead, so in normal scrolling you will rarely see the placeholder at all.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- Never lazy load images visible on first load -->
<img src="/img/hero.jpg" alt="Lake and mountains at sunrise" width="1200" height="630">

<!-- Below the fold only. width/height = the image's real size -->
<figure class="photo">
  <img src="/img/lake.jpg" alt="Mist over the lake at dawn" width="800" height="500" loading="lazy" decoding="async">
</figure>
<figure class="photo">
  <img src="/img/ridge.jpg" alt="Mountain ridge at sunset" width="800" height="500" loading="lazy" decoding="async">
</figure>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `img {
  display: block;
  max-width: 100%;
  height: auto; /* always pair with width/height attributes */
}

/* placeholder visible before the image arrives */
.photo {
  margin: 0;
  background: {{ph}};
  border-radius: 8px;
  overflow: hidden;
}

/* keep still-loading images hidden, then fade them in */
.photo img {
  transition: opacity {{fade}} ease-out, transform {{fade}} ease-out;
}
.photo img.is-waiting {
  opacity: 0;
  transform: scale({{zoom:n}});
}

@media (prefers-reduced-motion: reduce) {
  .photo img,
  .photo img.is-waiting { transition: none; transform: none; }
}`,
    },
    {
      lang: 'js',
      label: 'JavaScript (only for the fade-in)',
      code: `// Mark images that are still loading; unmark them when done.
// Without JavaScript, images simply show up as usual.
document.querySelectorAll('.photo img').forEach((img) => {
  if (img.complete) return;
  img.classList.add('is-waiting');
  const show = () => img.classList.remove('is-waiting');
  img.addEventListener('load', show, { once: true });
  img.addEventListener('error', show, { once: true });
});`,
    },
  ],
  tune: [
    { key: 'fade', label: 'Fade-in duration', min: 0, max: 1.2, step: 0.05, value: 0.4, unit: 's' },
    { key: 'zoom', label: 'Starting scale', min: 1, max: 1.15, step: 0.01, value: 1.03, unit: '' },
    { key: 'ph', type: 'color', label: 'Placeholder color', value: '#e9e7e1' },
  ],
  cautions: [
    'Lazy loading an above-the-fold image delays it and hurts Largest Contentful Paint (LCP). Lighthouse flags this specifically. Only lazy load images below the first screen.',
    'Forget width and height and the image has no height until it loads, so content below jumps down — a Cumulative Layout Shift (CLS) problem. Even if CSS controls the size, set the attributes to the intrinsic dimensions and use height: auto.',
    'Google indexes images with loading="lazy" just fine. The older pattern of injecting src from data-src with JavaScript can leave images unindexed, so stick with the native attribute unless you have a specific reason.',
    'alt text still matters. Screen readers announce it whether or not the image has loaded.',
  ],
  similar: [
    {
      slug: 'skeleton',
      diff: 'A skeleton screen shows gray blocks shaped like the coming text and cards. A lazy-loading placeholder is the same idea applied to one image at a time.',
    },
    {
      slug: 'fade-in',
      diff: 'Fade-in on scroll delays the reveal of content that is already loaded, purely for effect. Lazy loading actually postpones the download until the image is needed.',
    },
    {
      slug: 'infinite-scroll',
      diff: 'Infinite scroll fetches new items and appends them to the list. Lazy loading only delays images that are already on the page.',
    },
  ],
  faq: [
    {
      q: 'Is loading="lazy" working? I never see the placeholder.',
      a: 'That is normal. Browsers start fetching lazy images well before they enter the viewport — over 1,000px early on fast connections. To verify, open DevTools, go to the Network tab and reload: images far down the page should not be requested until you scroll.',
    },
    {
      q: 'Is lazy loading good for SEO?',
      a: 'It does not boost rankings by itself, but faster pages make for a better experience and better Core Web Vitals. Google can see lazy-loaded images. Just do not lazy load the hero image, which hurts LCP.',
    },
    {
      q: 'Can I lazy load CSS background images?',
      a: 'Not with loading="lazy", which only works on <img> and <iframe>. Use an IntersectionObserver to add a class when the element nears the viewport and set the background in that class. If the photo is real content, an <img> is the better choice anyway.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
