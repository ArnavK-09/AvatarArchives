// imports 
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

// Rss Feed 
export async function GET(context) {
    const avatars = await getCollection('avatars');
    return rss({
        title: 'Avatar Archives',
        description: 'Avatars for Every Mood, Avatar Archives for You',
        site: context?.url.origin,
        items: avatars.map((post) => ({
            title: post.data.title,
            pubDate: post.data.published,
            type: post.data.type,
            src: post.data.avatar,
            featured: post.data.featured,
            author: post.data.author.username,
            content: sanitizeHtml(parser.render(post.body)),
            tags: post.data.tags,
            draft: post.data.draft,
            original_content: post.data.original_content,
            link: `/avatar/${post.slug}/`,
        })),
    });
}