import { z, defineCollection } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    pinned: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'news': newsCollection,
};
