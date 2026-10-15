import type { Ugoki } from '../../ugoki/types';

export default {
  slug: 'lightbox',
  no: 7,
  category: 'overlay',
  name: 'Lightbox',
  en: 'ライトボックス',
  aka: ['Lightbox gallery', 'Image lightbox', 'Photo viewer', 'Image popup', 'Gallery modal'],
  mode: 'script',
  title: 'Lightbox Gallery Without a Library: <dialog> + Zoom Animation',
  description:
    'What a lightbox is, how it differs from a modal or a carousel, and how to build an image gallery with <dialog>: zoom from the thumbnail, arrow keys, swipe, Esc.',
  oneLine: 'Tap a thumbnail and the photo expands to fill a darkened screen.',
  what: [
    'A lightbox shows a photo large over a darkened page when you tap its thumbnail. In the demo, tapping the second photo makes it grow out of its spot in the grid until it fills the screen, and the right arrow steps to the next one. Close it with ×, a tap on the dark background, or Esc, and the photo shrinks back into its thumbnail. Keyboard users step through with the Left and Right arrow keys; on phones, swipe left or right.',
    'A lightbox is a modal dedicated to one job: looking at images. Unlike a carousel, which slides photos sideways inside the page, a lightbox lays a single image over the page at full size. The grid stays light with small thumbnails, and only the people who want detail open the big version. For hotels, real estate, food or portfolios — pages where the photos drive the decision — it lets people inspect details without leaving the page.',
  ],
  when: [
    'Room and amenity photos on hotel or rental listings that people want to compare up close',
    'Product pages where shoppers need to zoom in on fabric, texture or small details',
    'Designer and photographer portfolios: small in the grid, big one at a time',
    'Diagrams and screenshots in articles or docs that are only readable when enlarged',
  ],
  avoid: [
    'Pages with one or two images that can simply be shown large to begin with — the extra tap adds nothing',
    'Images containing text people must read to continue; put that text in the page as well',
    'Builds that disable pinch-zoom on phones, which defeats the purpose of seeing details',
  ],
  prompt:
    'Add a lightbox to the photo grid on a hotel page. Make each thumbnail a regular link (<a href>) to the full-size image, and only when JavaScript runs, intercept the click and open the image in a native HTML <dialog> with showModal(). Use a black backdrop at {{dim:t}} opacity, size the photo up to {{size:t}} of the viewport width (and always fit the height), with a caption below and a counter like “2 / 6” above. On open, animate the photo from the thumbnail’s position and size over {{dur:t}}; on close, shrink it back into the thumbnail of the photo currently shown. Support previous/next buttons, the Left/Right arrow keys and horizontal swipes. Close with ×, a backdrop click or Esc, and return focus to the thumbnail of the last photo viewed. Remove the zoom animation for prefers-reduced-motion.',
  howTo: [
    'Make every thumbnail a plain link to its full-size image. If JavaScript never loads, the link still opens the photo, so nobody is locked out. When JavaScript does run, cancel the navigation and open a <dialog> with showModal(): that gives you the inert page, Esc to close and a ::backdrop to darken.',
    'The “grows out of the thumbnail” effect uses a technique called FLIP. Measure the first state (the thumbnail) and the last state (the large image), apply a transform that cancels out the difference, then animate it back to none. To close, play the same animation in reverse before calling close(). If you want Esc to animate too, listen for the cancel event, prevent the default and close it yourself. The demo uses a div to stay inside its frame, but the motion works the same way.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<!-- Without JavaScript, each link still opens the full image -->
<ul class="gallery">
  <li>
    <a href="/img/view-1-large.jpg" data-caption="Morning view from the room">
      <img src="/img/view-1-thumb.jpg" alt="Morning view from the room"
        width="320" height="200" loading="lazy">
    </a>
  </li>
  <!-- …one per photo… -->
</ul>

<dialog class="lightbox" aria-label="Photo viewer">
  <div class="lb-inner">
    <p class="lb-count" aria-live="polite"></p>
    <button type="button" class="lb-close" aria-label="Close">×</button>
    <figure>
      <img class="lb-img" alt="">
      <figcaption class="lb-cap"></figcaption>
    </figure>
    <button type="button" class="lb-prev" aria-label="Previous photo">‹</button>
    <button type="button" class="lb-next" aria-label="Next photo">›</button>
  </div>
</dialog>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.gallery img { width: 100%; height: auto; }

.lightbox {
  /* A transparent full-screen box with the photo centered */
  width: 100vw;
  height: 100dvh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: #fff;
}
.lightbox::backdrop {
  background: rgb(10 12 20 / {{dim:n}});
  transition: opacity {{dur}} ease-out;
}
@starting-style {
  .lightbox[open]::backdrop { opacity: 0; }
}
.lb-inner {
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
  padding: 56px 16px 24px;
}
.lightbox figure { margin: 0; }
.lb-img {
  display: block;
  max-width: min({{size:n}}vw, 1200px);
  max-height: calc(100dvh - 140px);
  width: auto;
  height: auto;
  transform-origin: top left; /* anchor point for the zoom */
}
.lb-count { position: absolute; top: 16px; left: 16px; }
.lb-close { position: absolute; top: 4px; right: 4px; width: 48px; height: 48px; }
.lb-prev, .lb-next { position: absolute; top: 50%; width: 48px; height: 48px; }
.lb-prev { left: 8px; }
.lb-next { right: 8px; }

html:has(.lightbox[open]) { overflow: hidden; }`,
    },
    {
      lang: 'js',
      label: 'JavaScript',
      code: `const links = [...document.querySelectorAll('.gallery a')];
const box = document.querySelector('.lightbox');
const img = box.querySelector('.lb-img');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let cur = 0;

const show = async (i) => {
  cur = (i + links.length) % links.length;
  const a = links[cur];
  img.src = a.href;
  img.alt = a.querySelector('img').alt;
  box.querySelector('.lb-cap').textContent = a.dataset.caption;
  box.querySelector('.lb-count').textContent = \`\${cur + 1} / \${links.length}\`;
  new Image().src = links[(cur + 1) % links.length].href; // preload the next one
  await img.decode().catch(() => {});
};

// Zoom from the thumbnail's position and size (reverse shrinks it back)
const zoom = (reverse = false) => {
  if (reduce.matches) return Promise.resolve();
  const a = links[cur].querySelector('img').getBoundingClientRect();
  const b = img.getBoundingClientRect();
  const kf = [
    { transform: \`translate(\${a.left - b.left}px, \${a.top - b.top}px) scale(\${a.width / b.width})\` },
    { transform: 'none' },
  ];
  return img.animate(reverse ? kf.reverse() : kf, {
    duration: {{dur:n}} * 1000,
    easing: reverse ? 'ease-in' : 'ease-out',
  }).finished;
};

const close = async () => {
  await zoom(true).catch(() => {});
  box.close();
  links[cur].focus(); // back to the photo you were last viewing
};

links.forEach((a, i) => a.addEventListener('click', async (e) => {
  e.preventDefault();
  await show(i);
  box.showModal();
  zoom();
}));

box.querySelector('.lb-close').addEventListener('click', close);
box.querySelector('.lb-prev').addEventListener('click', () => show(cur - 1));
box.querySelector('.lb-next').addEventListener('click', () => show(cur + 1));
// Close when clicking outside the photo
box.addEventListener('click', (e) => {
  if (e.target === box || e.target.classList.contains('lb-inner')) close();
});
// Animate the close on Esc too
box.addEventListener('cancel', (e) => {
  e.preventDefault();
  close();
});
box.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') show(cur - 1);
  if (e.key === 'ArrowRight') show(cur + 1);
});
// Swipe left/right to step through
let sx = 0;
box.addEventListener('pointerdown', (e) => (sx = e.clientX));
box.addEventListener('pointerup', (e) => {
  const dx = e.clientX - sx;
  if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1));
});`,
    },
  ],
  tune: [
    { key: 'dim', label: 'Backdrop darkness', min: 0.5, max: 0.95, step: 0.05, value: 0.85, unit: '' },
    { key: 'dur', label: 'Zoom speed', min: 0.15, max: 0.6, step: 0.05, value: 0.3, unit: 's' },
    { key: 'size', label: 'Photo size (of viewport width)', min: 60, max: 100, step: 5, value: 90, unit: '%' },
  ],
  cautions: [
    'Serve two sizes: small images in the grid and large ones in the lightbox. Shrinking full-size images in the grid makes the page dramatically slower. Give grid images loading="lazy" plus width and height.',
    'Describe every photo in its alt text, in the grid and in the lightbox. Name icon buttons with aria-label (“Next photo”, “Close”) and announce the “2 / 6” counter with aria-live.',
    'People pinch to zoom on phones to see details. Never disable it (user-scalable=no), and only treat single-finger drags as swipes.',
    'On close, return focus to the thumbnail of the last photo viewed, not the one that opened the lightbox. Otherwise keyboard users who stepped through three photos lose their place.',
  ],
  similar: [
    { slug: 'modal', diff: 'A modal is a general-purpose window for confirmations and short forms. A lightbox is a modal dedicated to viewing images large.' },
    { slug: 'carousel', diff: 'A carousel slides photos or cards sideways within the page. A lightbox lays one image over the page at full size.' },
    { slug: 'image-zoom', book: 'ugoki', diff: 'Image zoom on hover gently enlarges a photo inside its frame when the cursor is over it — a common hint that clicking opens a lightbox.' },
  ],
  faq: [
    {
      q: 'What is the difference between a lightbox and a modal?',
      a: 'A lightbox is a type of modal. Both darken the page and block it until closed, but a lightbox is built for images, with conventions of its own: previous/next navigation, a photo counter, and often a zoom from the thumbnail.',
    },
    {
      q: 'Can I build a lightbox gallery without a library?',
      a: 'Yes. A <dialog> opened with showModal() handles the overlay, and the zoom effect takes a few lines of the Web Animations API (element.animate). Reach for a library only if you need pinch-zoom inside the viewer, video, or deep linking to each photo.',
    },
    {
      q: 'Do lightbox images hurt SEO?',
      a: 'Not if each thumbnail is a normal link (<a href>) to the full-size image — search engines can follow it. Builds that only reveal the large image URL through JavaScript are harder for image search to discover. Write descriptive alt text either way.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
