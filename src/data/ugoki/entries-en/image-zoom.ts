import type { Ugoki } from '../types';

export default {
  slug: 'image-zoom',
  no: 10,
  category: 'pointer',
  name: 'Image zoom on hover',
  en: 'ホバーで画像ズーム',
  aka: ['Zoom image on hover CSS', 'Hover zoom effect', 'Image scale on hover', 'Thumbnail zoom'],
  mode: 'pointer',
  title: 'CSS Image Zoom on Hover That Stays Inside Its Frame',
  description:
    'Zoom an image on hover without overflowing its frame, using overflow: hidden and transform: scale. Try zoom levels and speeds live, then copy the CSS.',
  oneLine: 'The frame stays put while the photo inside slowly zooms in.',
  what: [
    'Hover a thumbnail and the photo inside grows by about ten percent, while its frame keeps exactly the same size. In the demo, each project image eases in as the cursor reaches it, then eases back out when the cursor leaves.',
    'It tells visitors “click this photo to see more” without disturbing the layout. Compared with lifting the whole card, it is calmer and works well on image-heavy pages. Use the controls to feel the range: 1.05–1.15x over about a third of a second looks polished; 1.4x in 0.1s looks like the photo is lunging at you.',
  ],
  when: [
    'Portfolio and case-study grids where each image links to a detail page',
    'E-commerce product grids where shoppers browse mostly by photo',
    'Blog and magazine archives, to show the thumbnail is clickable',
    'Hotel, restaurant and travel sites that want rooms and dishes to feel a little more alive',
  ],
  avoid: [
    'Images with text or logos near the edges — zooming crops them',
    'Decorative photos that do not link anywhere',
    'Low-resolution images, where scaling up makes the blur obvious',
  ],
  prompt:
    'Add an image zoom on hover effect to the image grid. Wrap each image in a container with overflow: hidden, and on hover scale only the inner img with transform: scale({{scale:t}}); the container must not change size. Use a {{dur:t}} ease-out transition. CSS only. Put the :hover rule inside @media (hover: hover) so it does not trigger on touch devices, and apply the same zoom on :focus-visible for keyboard users. Under prefers-reduced-motion: reduce, do not zoom; just darken the image slightly instead.',
  howTo: [
    'Think of the container as a window. Give it overflow: hidden so anything outside its box is clipped, then scale the image inside with transform. Because the window itself does not move, the surrounding grid never shifts.',
    'Keep the zoom between 1.05 and 1.15 and the duration around 0.3–0.4s. A slower transition than a typical hover effect is what makes this feel smooth rather than jumpy; a big, fast zoom looks like the image is popping out of the page.',
  ],
  code: [
    {
      lang: 'html',
      label: 'HTML',
      code: `<a class="work" href="/work/beach-cafe">
  <span class="work-pic">
    <img src="cafe.jpg" alt="Interior of a beachside café" width="400" height="300">
  </span>
  <span class="work-name">Beach Café</span>
</a>`,
    },
    {
      lang: 'css',
      label: 'CSS',
      code: `.work { display: block; color: inherit; text-decoration: none; }

/* The window: clips whatever overflows */
.work-pic {
  display: block;
  overflow: hidden;
  border-radius: 10px;
}
.work-pic img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform {{dur}} ease-out;
}

/* Zoom only on devices with a real hover */
@media (hover: hover) {
  .work:hover .work-pic img { transform: scale({{scale}}); }
}
/* Keyboard focus gets the same zoom */
.work:focus-visible { outline: none; }
.work:focus-visible .work-pic { outline: 2px solid #4f73d9; outline-offset: 2px; }
.work:focus-visible .work-pic img { transform: scale({{scale}}); }

/* Reduced motion: no zoom, just a slight darken */
@media (prefers-reduced-motion: reduce) {
  .work-pic img { transition: none; }
  .work:hover .work-pic img,
  .work:focus-visible .work-pic img { transform: none; filter: brightness(0.92); }
}`,
    },
  ],
  tune: [
    { key: 'scale', label: 'Zoom level', min: 1, max: 1.5, step: 0.01, value: 1.1, unit: '' },
    { key: 'dur', label: 'Duration', min: 0.1, max: 1.2, step: 0.05, value: 0.35, unit: 's' },
  ],
  cautions: [
    'There is no hover on touch screens, and a tap usually navigates straight away. Treat the zoom as a bonus for mouse users and make sure the photos look good on their own.',
    'In Safari, a container with border-radius can briefly show square corners while its child scales. Adding isolation: isolate or will-change: transform to the container usually fixes it.',
    'Large originals slow down a grid page. Export thumbnails at display size, and add loading="lazy" plus width and height attributes to avoid layout shift.',
    'Zooming crops the edges, so pick images where nothing important — faces, text — sits near the border.',
  ],
  similar: [
    {
      slug: 'hover-lift',
      diff: 'Hover lift raises the whole card and adds a shadow. Image zoom keeps the frame still and scales only the photo inside.',
    },
    {
      slug: 'before-after',
      diff: 'A before/after slider lets people drag to compare two images. Image zoom is a small hover response on a single image.',
    },
  ],
  faq: [
    {
      q: 'Why does my image overflow its container when it zooms?',
      a: 'overflow: hidden has to go on the wrapper, not on the image you are scaling. If the wrapper has rounded corners, put the border-radius on the wrapper too.',
    },
    {
      q: 'Do I need JavaScript for a hover zoom effect?',
      a: 'No. transform: scale, a transition and :hover are enough. You only need JavaScript for a magnifier-style zoom that follows the cursor position.',
    },
    {
      q: 'Why does the image look blurry when it zooms?',
      a: 'The source image is only as large as its displayed size, so scaling it up stretches the pixels. Serve a slightly larger file, or use srcset so high-density screens get a sharper version.',
    },
  ],
  publishedAt: '2026-10-15',
} satisfies Ugoki;
