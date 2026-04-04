import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');

  return rss({
    title: 'Mysource Insights',
    description: 'Artykuły o transformacji organizacyjnej, AI readiness, wellbeingu i przywództwie.',
    site: context.site!.toString(),
    items: posts
      .filter((post) => !post.data.draft)
      .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
      .map((post) => ({
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.excerpt,
        link: `/blog/${post.id}/`,
        author: post.data.author || 'Mysource',
      })),
    customData: '<language>pl-PL</language>',
  });
}
