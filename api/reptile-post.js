// 「うちの爬虫類」投稿の共有ページ。/reptile-sns/p/<投稿ID> が vercel.json の rewrite でここに来る。
// 公開データだけ(Supabase の public_post 関数。anon キーのみ)。非公開・削除済み・センシティブは404。
const SB = 'https://tuslsnbftlwdupcukugj.supabase.co';
const ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1c2xzbmJmdGx3ZHVwY3VrdWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1MzYyNzcsImV4cCI6MjEwNTExMjI3N30.b1NW6Hx6PDeqvZ9EXksRAKFyOFRd5NebC5_erfYE3_w';
const R2 = 'https://pub-47b193983c2f40f7abc2ca6001fd9bea.r2.dev';
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function shell(title, desc, ogImage, canonical, body, noindex) {
  return `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
${noindex ? '<meta name="robots" content="noindex" />' : ''}
<link rel="canonical" href="${esc(canonical)}" />
<meta property="og:title" content="${esc(title)}" /><meta property="og:description" content="${esc(desc)}" />
<meta property="og:type" content="article" /><meta property="og:site_name" content="うちの爬虫類" /><meta property="og:locale" content="ja_JP" />
<meta property="og:url" content="${esc(canonical)}" /><meta property="og:image" content="${esc(ogImage)}" />
<meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" /><meta name="twitter:image" content="${esc(ogImage)}" />
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#F4F6F5;color:#1A1D21;font-family:'Noto Sans JP',sans-serif;line-height:1.7;-webkit-font-smoothing:antialiased}
.wrap{max-width:560px;margin:0 auto;padding:16px}
.brand{display:flex;align-items:center;justify-content:space-between;padding:8px 0 16px}
.brand a{color:#1B6B4A;font-weight:700;text-decoration:none;font-size:15px}
.card{background:#fff;border:1px solid #DCE3DF;border-radius:16px;overflow:hidden}
.card img{display:block;width:100%;height:auto;background:#EAEFEC}
.pad{padding:16px 18px 20px}
.tag{display:inline-block;font-size:11px;font-weight:700;color:#164F38;background:#DCEBE3;border-radius:999px;padding:2px 10px;margin-bottom:8px}
h1{font-size:18px;font-weight:700}
.meta{font-size:12px;color:#838C86;margin:2px 0 12px}
.note{font-size:15px;white-space:pre-wrap;word-break:break-word}
.btns{display:flex;flex-direction:column;gap:10px;margin-top:20px}
.btn{display:block;text-align:center;text-decoration:none;font-weight:700;font-size:15px;border-radius:12px;padding:14px 16px}
.btn.primary{background:#1B6B4A;color:#fff}
.btn.disabled{background:#EAEFEC;color:#838C86}
footer{font-size:12px;color:#838C86;text-align:center;padding:24px 0}
footer a{color:#838C86}
</style></head><body><div class="wrap">
<div class="brand"><a href="/reptile-sns/">うちの爬虫類</a></div>
${body}
<footer><a href="/reptile-sns/privacy/">プライバシーポリシー</a></footer>
</div></body></html>`;
}

export default async function handler(req, res) {
  const id = String((req.query && req.query.id) || '');
  const canonical = `https://motytools.com/reptile-sns/p/${id}`;
  let post = null;
  if (UUID.test(id)) {
    try {
      const r = await fetch(`${SB}/rest/v1/rpc/public_post`, {
        method: 'POST',
        headers: { apikey: ANON, Authorization: `Bearer ${ANON}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ p_id: id }),
      });
      const rows = r.ok ? await r.json() : [];
      post = rows[0] || null;
    } catch (e) { post = null; }
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  if (!post) {
    res.setHeader('Cache-Control', 'public, s-maxage=60');
    res.status(404).send(shell('投稿が見つかりません | うちの爬虫類', 'この投稿は見つからないか、公開されていません。', 'https://motytools.com/reptile-sns/shots/hero.jpg', 'https://motytools.com/reptile-sns/',
      '<div class="card"><div class="pad"><h1>投稿が見つかりません</h1><p class="note">この投稿は削除されたか、公開されていません。</p><div class="btns"><a class="btn primary" href="/reptile-sns/">うちの爬虫類について</a></div></div></div>', true));
    return;
  }
  const name = post.animal_name;
  const note = post.note || '';
  const title = `${name}の投稿 | うちの爬虫類`;
  const desc = (note || `${name}の投稿です。`).replace(/\s+/g, ' ').slice(0, 100);
  const ogImage = `${SB}/functions/v1/og-post?id=${id}`;
  const photo = `${R2}/${post.photo_paths[0]}`;
  const when = new Date(post.posted_at).toLocaleDateString('ja-JP', { timeZone: 'Asia/Tokyo', year: 'numeric', month: 'long', day: 'numeric' });
  const body = `<article class="card">
<img src="${esc(photo)}" alt="${esc(name)}の写真" />
<div class="pad">
${post.is_sample ? '<span class="tag">運営の見本投稿</span>' : ''}
<h1>${esc(name)}</h1>
<p class="meta">${esc(post.species_name || '')}${post.species_name ? ' ・ ' : ''}${esc(post.author_name)} ・ ${esc(when)}</p>
${note ? `<p class="note">${esc(note)}</p>` : ''}
<div class="btns">
<a class="btn primary" href="/reptile-sns/">アプリで見る</a>
<span class="btn disabled">App Store(近日公開)</span>
</div></div></article>`;
  res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600');
  res.status(200).send(shell(title, desc, ogImage, canonical, body, false));
}
