import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { paidProducts } from "@/lib/products";
import PostCard from "@/components/PostCard";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-14 sm:px-10 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
              By Stephanie Huynh &middot; Est. 2026
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Turning a 9-to-5 into real{" "}
              <span className="font-script text-5xl font-normal text-burgundy sm:text-6xl lg:text-7xl">
                wealth
              </span>
              .
            </h1>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink-soft">
              I write about real estate, investing, and side hustles from the middle
              of it &mdash; while still clocking in at a day job, and while
              building my tech company, Hopscotch, in real time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-ink px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-burgundy"
              >
                Read the Blog
              </Link>
              <Link
                href="/resources"
                className="rounded-full border border-ink/20 px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink"
              >
                Get the Free Guide
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-clay/40 sm:-inset-6" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-rose-tint">
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
        </div>
      </section>

      {/* The Latest */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            the <span className="font-script text-4xl font-normal text-burgundy sm:text-5xl">latest</span>
          </h2>
          <Link
            href="/blog"
            className="hidden font-display text-sm font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-burgundy sm:block"
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
          className="mt-8 block font-display text-sm font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-burgundy sm:hidden"
        >
          View All →
        </Link>
      </section>

      {/* Free resource banner */}
      <section className="bg-burgundy">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-rose">
              Start Here — It&apos;s Free
            </p>
            <h2 className="mt-3 max-w-xl font-display text-2xl font-bold leading-tight text-ivory sm:text-3xl">
              The Home Income Guide: how everyday homeowners build a second income
              stream from their own front door.
            </h2>
          </div>
          <Link
            href="/resources"
            className="shrink-0 rounded-full bg-ivory px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-rose-tint"
          >
            Get the Guide
          </Link>
        </div>
      </section>

      {/* Shop teaser */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Digital <span className="font-script text-4xl font-normal text-burgundy sm:text-5xl">guides</span>
          </h2>
          <Link
            href="/shop"
            className="hidden font-display text-sm font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-burgundy sm:block"
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
        <div className="grid items-center gap-10 rounded-[2rem] bg-paper p-8 sm:p-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/stephanie-portrait.jpg"
              alt="Stephanie Huynh"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 25vw, 60vw"
            />
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
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
              className="mt-6 inline-block rounded-full bg-ink px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-burgundy"
            >
              Read My Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
