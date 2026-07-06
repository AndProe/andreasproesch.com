import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Native, on-domain writing (essays / analysis). Rendered at /blog/<slug>/.
// Canonical lives on this domain; Substack is distribution (see src/data/posts.ts).
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    region: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
