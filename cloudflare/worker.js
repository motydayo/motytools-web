// motytools.com の配信（Cloudflare Workers の静的配信）。
// 2026-11-09 に Vercel の無料枠超過で止まったため移した。中身は astro build の dist をそのまま配る。
// vercel.json のリダイレクト・書き換え・共有ページ（api/reptile-post.js）をここで再現する。
// /anzen* は別の Worker（machi-anzen-map）が受け持つ（経路がより細かいので優先される）。
import reptilePost from '../api/reptile-post.js';

const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

const APPLE_EULA = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

// 302 の転送（vercel.json の permanent:false）
const REDIRECTS = {
  '/memomail/lp': '/memomail/',
  '/memomail/lp/': '/memomail/',
  '/uchino-hachu': '/reptile-sns/',
  '/uchino-hachu/': '/reptile-sns/',
  '/uchino-hachu/privacy': '/reptile-sns/privacy/',
  '/uchino-hachu/privacy/': '/reptile-sns/privacy/',
  '/uchino-hachu/terms': APPLE_EULA,
  '/uchino-hachu/terms/': APPLE_EULA,
};

// URLはそのまま、中身だけ別のファイルを返す（vercel.json の rewrites）
const REWRITES = {
  // /privacy などは静的配信が privacy.html を自動で返すので書き換え不要
  '/uchino-hachu/guidelines': '/reptile-sns/guidelines/',
  '/uchino-hachu/guidelines/': '/reptile-sns/guidelines/',
};

function withHeaders(res, extra = {}) {
  const out = new Response(res.body, res);
  for (const [k, v] of Object.entries({ ...SECURITY_HEADERS, ...extra })) out.headers.set(k, v);
  return out;
}

async function servePost(id) {
  // Vercel 用の関数をそのまま動かすための小さな受け皿
  const r = { code: 200, headers: {}, body: '' };
  const res = {
    setHeader(k, v) { r.headers[k] = v; },
    status(c) { r.code = c; return res; },
    send(b) { r.body = b; },
  };
  await reptilePost({ query: { id } }, res);
  return new Response(r.body, { status: r.code, headers: r.headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // www と古い vercel.app は本体へ（試し用の workers.dev はそのまま配る）
    if (url.hostname === 'www.motytools.com' || url.hostname.endsWith('.vercel.app')) {
      return Response.redirect(`https://motytools.com${url.pathname}${url.search}`, 301);
    }

    const path = url.pathname;
    if (REDIRECTS[path]) {
      const to = REDIRECTS[path].startsWith('http') ? REDIRECTS[path] : `https://motytools.com${REDIRECTS[path]}`;
      return withHeaders(Response.redirect(to, 302));
    }
    if (path.startsWith('/uchino-hachu/a/')) {
      return withHeaders(Response.redirect('https://motytools.com/reptile-sns/', 302));
    }

    const post = path.match(/^\/reptile-sns\/p\/([^/]+)\/?$/);
    if (post) return withHeaders(await servePost(decodeURIComponent(post[1])));

    if (REWRITES[path]) {
      const target = new URL(REWRITES[path], url);
      const res = await env.ASSETS.fetch(new Request(target, request));
      return withHeaders(res);
    }

    // vercel.app 向けの noindex は不要（このホストだけを配る）
    return withHeaders(await env.ASSETS.fetch(request));
  },
};
