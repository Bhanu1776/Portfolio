const fs = require('fs');
const path = require('path');

// Generate sitemap.xml
const generateSitemap = () => {
  const baseUrl = 'https://www.itsbhanu.com';
  const currentDate = new Date().toISOString();
  
  const sitemapUrls = [
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: `${baseUrl}/#about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: `${baseUrl}/#projects`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: `${baseUrl}/#work`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: `${baseUrl}/#blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);
  console.log('✅ Sitemap generated successfully');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.itsbhanu.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow certain paths (if any)
# Disallow: /admin/
# Disallow: /private/

# Allow all other content
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /public/`;

  const publicPath = path.join(__dirname, '..', 'public', 'robots.txt');
  fs.writeFileSync(publicPath, robotsTxt);
  console.log('✅ Robots.txt generated successfully');
};

// Run the generators
generateSitemap();
generateRobotsTxt();
