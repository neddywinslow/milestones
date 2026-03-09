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

const programsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ages: z.string(),
    color: z.enum(['navy', 'red', 'sky']),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string().optional(),
  }),
});

export const collections = {
  'news': newsCollection,
  'programs': programsCollection,
  'pages': pagesCollection,
  'testimonials': testimonialsCollection,
};
