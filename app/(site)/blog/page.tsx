import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { getAllCategories } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Real estate, investing, side hustles, budgeting, and building Hopscotch — from Stephanie Huynh.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const posts = await getAllPosts();
  const categories = getAllCategories();
  const filtered = category ? posts.filter((p) => p.category === category) : posts;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
        The Blog
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
        Real estate, investing, and building{" "}
        <span className="font-script text-4xl font-normal text-burgundy sm:text-5xl">Hopscotch</span>.
      </h1>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`rounded-full px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide transition-colors ${
            !category ? "bg-ink text-ivory" : "bg-paper text-ink-soft hover:bg-rose-tint"
          }`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/blog?category=${encodeURIComponent(cat)}`}
            className={`rounded-full px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide transition-colors ${
              category === cat ? "bg-ink text-ivory" : "bg-paper text-ink-soft hover:bg-rose-tint"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 font-body text-lg text-ink-soft">
          No posts in this category yet &mdash; check back soon.
        </p>
      ) : (
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
