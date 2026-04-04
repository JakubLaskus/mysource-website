import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const siteUrl = 'https://www.mysource.pl';

  const robotsTxt = `# Mysource.pl robots.txt
User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteUrl}/sitemap-index.xml

# Disallow admin/CMS
Disallow: /keystatic

# AI Crawlers welcome (GEO)
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /
`;

  return new Response(robotsTxt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
