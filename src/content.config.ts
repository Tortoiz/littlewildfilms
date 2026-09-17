import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const imageRef = z.string().min(1, "Add a web-ready image path or storage path.");
const linkRef = z.string().refine((value) => value.startsWith("/") || /^https?:\/\//.test(value), "Use an absolute URL or an internal storage path.").optional().nullable();

const films = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/films" }),
  schema: z.object({
    title: z.string(),
    year: z.number().int().min(1900).max(2200),
    format: z.enum(["Animated short", "Live-action short", "Hybrid film", "Visual experiment"]),
    category: z.enum(["Animation", "Live action", "AI-assisted", "Experiment"]),
    status: z.enum(["Released", "In development", "Coming soon", "Archived"]),
    featured: z.boolean().default(false),
    logline: z.string(),
    heroImage: imageRef,
    heroAlt: z.string(),
    posterImage: imageRef.optional(),
    trailerUrl: linkRef,
    trailerType: z.enum(["embed", "video"]).default("embed"),
    credits: z.array(z.object({ role: z.string(), name: z.string() })).default([]),
    gallery: z.array(z.object({ src: imageRef, alt: z.string(), caption: z.string().optional() })).default([]),
    relatedPosts: z.array(z.string()).default([]),
    seoDescription: z.string().optional(),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(["Process", "References", "Experiments", "Studio notes"]),
    excerpt: z.string(),
    coverImage: imageRef,
    coverAlt: z.string(),
    readingTime: z.string(),
    relatedFilm: z.string().optional(),
    draft: z.boolean().default(false),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { films, journal };
