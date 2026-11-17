import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const about = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
    schema: z.object({
        title: z.string().optional().default('Whoami'),
        date: z.union([z.coerce.date(), z.string()]).optional(),
    }),
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string().optional().default('Untitled Post'),
        description: z.string().optional(),
        pubDate: z.union([z.coerce.date(), z.string()]).optional(),
        date: z.union([z.coerce.date(), z.string()]).optional(),
        updatedDate: z.union([z.coerce.date(), z.string()]).optional(),
        heroImage: z.string().optional(),
    }),
});

const photos = defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: './src/content/photos' }),
    schema: z.array(
        z.object({
            id: z.string(),
            lat: z.number(),
            lng: z.number(),
            date: z.string(),
            title: z.string().optional(),
            thumbnails: z.array(z.string()),
        })
    ),
});

const myList = defineCollection({
    loader: glob({ pattern: 'index.md', base: './src/content/my_list' }),
    schema: z.object({
        title: z.string(),
    }),
});

// Added 'about' here 
export const collections = { blog, photos, myList, about };