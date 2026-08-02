import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, isBlogLive } from "@/lib/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
      {!isBlogLive && (
        <p className="mb-8 rounded-xl bg-rose-tint px-4 py-3 font-body text-sm text-ink-soft">
          Sample content &mdash; connect your Sanity project to publish real posts.
        </p>
      )}

      <Link
        href="/blog"
        className="font-display text-xs font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-burgundy"
      >
        ← All Posts
      </Link>

      <p className="mt-6 font-display text-xs font-semibold uppercase tracking-widest text-clay-dark">
        {post.category}
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 font-body text-sm text-ink-soft/70">
        {date} &middot; {post.readingTime}
      </p>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl">
        <Image src={post.coverImage} alt="" fill priority className="object-cover" sizes="(min-width: 768px) 700px, 100vw" />
      </div>

      <div className="prose-blog mt-10 space-y-6 font-body text-lg leading-relaxed text-ink-soft">
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          post.staticContent?.map((paragraph, i) => <p key={i}>{paragraph}</p>)
        )}
      </div>

      <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-line pt-10">
        <Link
          href="/blog"
          className="rounded-full bg-ink px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-burgundy"
        >
          More Posts
        </Link>
        <Link
          href="/resources"
          className="rounded-full border border-ink/20 px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink"
        >
          Get the Free Guide
        </Link>
      </div>
    </article>
  );
}
