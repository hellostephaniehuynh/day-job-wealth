import type { PortableTextBlock } from "@portabletext/types";
import { sanityClient, sanityConfigured } from "@/lib/sanity/client";
import { allPostsQuery, postBySlugQuery } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { posts as fallbackPosts, type PostCategory } from "@/lib/posts";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  coverImage: string;
  publishedAt: string;
  readingTime: string;
  body: PortableTextBlock[] | null;
  staticContent: string[] | null;
};

function estimateReadingTime(excerpt: string, body?: PortableTextBlock[]) {
  const bodyWords = (body ?? [])
    .filter((block) => block._type === "block")
    .flatMap((block) => (block as { children?: { text?: string }[] }).children ?? [])
    .map((span) => span.text ?? "")
    .join(" ");
  const words = `${excerpt} ${bodyWords}`.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

type SanityPostDoc = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  coverImage: unknown;
  publishedAt: string;
  body?: PortableTextBlock[];
};

function mapSanityPost(doc: SanityPostDoc): BlogPost {
  return {
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt,
    category: doc.category,
    coverImage: urlForImage(doc.coverImage)?.width(1200).height(900).url() ?? "/images/logo.png",
    publishedAt: doc.publishedAt,
    readingTime: estimateReadingTime(doc.excerpt, doc.body),
    body: doc.body ?? null,
    staticContent: null,
  };
}

function mapFallbackPost(post: (typeof fallbackPosts)[number]): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    coverImage: post.coverImage,
    publishedAt: post.publishedAt,
    readingTime: post.readingTime,
    body: null,
    staticContent: post.content,
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (sanityConfigured && sanityClient) {
    const docs = await sanityClient.fetch<SanityPostDoc[]>(allPostsQuery);
    if (docs.length > 0) return docs.map(mapSanityPost);
  }
  return fallbackPosts.map(mapFallbackPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (sanityConfigured && sanityClient) {
    const doc = await sanityClient.fetch<SanityPostDoc | null>(postBySlugQuery, { slug });
    if (doc) return mapSanityPost(doc);
  }
  const fallback = fallbackPosts.find((p) => p.slug === slug);
  return fallback ? mapFallbackPost(fallback) : null;
}

export { getAllCategories } from "@/lib/posts";
export const isBlogLive = sanityConfigured;
