export async function GET() {
  const blogPosts = [
    { slug: 'what-is-gravity', date: '2026-02-17' },
    { slug: 'instant-gravity-explained', date: '2026-02-17' },
    { slug: 'instant-gravity-revolution', date: '2026-02-17' },
    { slug: 'gravitational-waves-discovery', date: '2026-02-17' },
    { slug: 'newton-vs-einstein-gravity', date: '2026-02-17' },
    { slug: 'black-holes-gravity-explained', date: '2026-02-17' },
    { slug: 'time-dilation-gravity', date: '2026-02-17' },
    { slug: 'gravity-on-other-planets', date: '2026-02-17' },
    { slug: 'zero-gravity-microgravity', date: '2026-02-17' },
    { slug: 'dark-matter-gravity', date: '2026-02-17' },
    { slug: 'tides-and-gravity', date: '2026-02-17' },
    { slug: 'gravitational-lensing', date: '2026-02-17' },
    { slug: 'scientists-of-gravity', date: '2026-02-17' },
    { slug: 'quantum-gravity-challenge', date: '2026-02-17' },
    { slug: 'gravity-and-space-travel', date: '2026-02-17' },
    { slug: 'gravitational-constant', date: '2026-02-17' },
    { slug: 'equivalence-principle', date: '2026-02-17' },
    { slug: 'gravity-in-everyday-life', date: '2026-02-17' },
    { slug: 'neutron-stars-extreme-gravity', date: '2026-02-17' },
    { slug: 'antigravity-myths-facts', date: '2026-02-17' },
    { slug: 'measuring-gravity-acceleration', date: '2026-02-17' },
    { slug: 'history-of-gravity-theory', date: '2026-02-17' },
    { slug: 'cosmonauts-statements-gravity', date: '2026-02-17' },
    { slug: 'feynman-gravity-stance', date: '2026-02-17' }
  ];

  const staticPages = [
    { url: '', lastmod: '2026-02-17', priority: '1.0' },
    { url: 'about', lastmod: '2026-02-17', priority: '0.8' },
    { url: 'blog', lastmod: '2026-02-17', priority: '0.9' }
  ];

  const siteUrl = 'https://instagrav.com';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${siteUrl}/${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${blogPosts.map(post => `  <url>
    <loc>${siteUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
