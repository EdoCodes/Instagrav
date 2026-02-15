export async function GET() {
  const blogPosts = [
    { slug: 'what-is-gravity', date: '2024-01-15' },
    { slug: 'instant-gravity-explained', date: '2024-01-18' },
    { slug: 'instant-gravity-revolution', date: '2024-01-19' },
    { slug: 'gravitational-waves-discovery', date: '2024-01-20' },
    { slug: 'newton-vs-einstein-gravity', date: '2024-01-22' },
    { slug: 'black-holes-gravity-explained', date: '2024-01-25' },
    { slug: 'time-dilation-gravity', date: '2024-01-28' },
    { slug: 'gravity-on-other-planets', date: '2024-02-01' },
    { slug: 'zero-gravity-microgravity', date: '2024-02-04' },
    { slug: 'dark-matter-gravity', date: '2024-02-07' },
    { slug: 'tides-and-gravity', date: '2024-02-10' },
    { slug: 'gravitational-lensing', date: '2024-02-13' },
    { slug: 'scientists-of-gravity', date: '2024-02-15' },
    { slug: 'quantum-gravity-challenge', date: '2024-02-16' },
    { slug: 'gravity-and-space-travel', date: '2024-02-19' },
    { slug: 'gravitational-constant', date: '2024-02-22' },
    { slug: 'equivalence-principle', date: '2024-02-25' },
    { slug: 'gravity-in-everyday-life', date: '2024-02-28' },
    { slug: 'neutron-stars-extreme-gravity', date: '2024-03-02' },
    { slug: 'antigravity-myths-facts', date: '2024-03-05' },
    { slug: 'measuring-gravity-acceleration', date: '2024-03-08' },
    { slug: 'history-of-gravity-theory', date: '2024-03-11' }
  ];

  const staticPages = [
    { url: '', lastmod: '2024-03-11', priority: '1.0' },
    { url: 'about', lastmod: '2024-03-11', priority: '0.8' },
    { url: 'blog', lastmod: '2024-03-11', priority: '0.9' }
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
