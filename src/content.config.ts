import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string(),
    season: z.string(),
    episodeNumber: z.number(),
    chapterLabel: z.string().optional(), // ex: "Chapitre 16" — sinon généré depuis episodeNumber
    publishDate: z.coerce.date(),
    excerpt: z.string(),
    acastEmbedUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    tag: z.enum(['JDR', 'Podcast', 'Léonia', 'Event']),
    publishDate: z.coerce.date(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { episodes, blog };
