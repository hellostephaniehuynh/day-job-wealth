import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { paidProducts } from "@/lib/products";
import PostCard from "@/components/PostCard";
import ProductCard from "@/components/ProductCard";
import ChallengeWaitlistModal from "@/components/ChallengeWaitlistModal";

// Refetch blog posts and live Stripe prices at most once an hour.
export const revalidate = 3600;

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 3);

  return (
    <>
      <ChallengeWaitlistModal />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:px-10 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              By Stephanie Huynh &middot; Est. 2026
            </p>
            <h1 className="mt-5 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Turn a
              <br />
              9-to-5 into
              <br />
              real wealth.
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink-soft">
              I write about real estate, investing, and side hustles from the middle
              of it &mdash; while still clocking in at a day job, and while
              building my tech company, Hopscotch, in real time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-ink px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-clay"
              >
                Read the Blog
              </Link>
              <Link
                href="/resources"
                className="rounded-full border border-ink/15 px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink"
              >
                Get the Free Guide
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-rose-tint">
            <Image
              src="/images/patio-pool.jpg"
              alt="Stephanie's backyard — a property she treats as a long-term asset"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* The Latest */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
            The Latest
          </h2>
          <Link
            href="/blog"
            className="hidden font-display text-sm font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-clay sm:block"
          >
            View All →
          </Link>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-8 block font-display text-sm font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-clay sm:hidden"
        >
          View All →
        </Link>
      </section>

      {/* Free resource banner */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Start Here — It&apos;s Free
            </p>
            <h2 className="mt-3 max-w-xl font-display text-2xl font-bold leading-tight text-ivory sm:text-3xl">
              The Home Income Guide: how everyday homeowners build a second income
              stream from their own front door.
            </h2>
          </div>
          <Link
            href="/resources"
            className="shrink-0 rounded-full bg-ivory px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-clay hover:text-ivory"
          >
            Get the Guide
          </Link>
        </div>
      </section>

      {/* Shop teaser */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
            Digital Guides
          </h2>
          <Link
            href="/shop"
            className="hidden font-display text-sm font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-clay sm:block"
          >
            Shop All →
          </Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {paidProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid items-center gap-10 rounded-2xl bg-paper p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl">
            <Image
              src="/images/stephanie-portrait.jpg"
              alt="Stephanie Huynh"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 60vw"
            />
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Meet Stephanie
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
              I&apos;m not a full-time investor or a founder with funding &mdash;
              I&apos;m doing this alongside a day job, in public, one decision at a time.
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-ink-soft">
              Day Job Wealth started as my own notes on turning a house, a paycheck,
              and a lot of late nights into something bigger. Now it&apos;s where I
              document real estate decisions, budgeting that actually worked, and
              the early, unglamorous days of building my company, Hopscotch.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block rounded-full bg-ink px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-clay"
            >
              Read My Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
