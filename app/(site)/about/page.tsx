import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stephanie Huynh on building Day Job Wealth alongside a 9-to-5 — real estate, investing, and starting Hopscotch in public.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:px-10 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src="/images/stephanie-portrait.jpg"
              alt="Stephanie Huynh"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 35vw, 80vw"
            />
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
              About
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Hi, I&apos;m Stephanie.
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
              I have a day job. I also have a rental spreadsheet, a growing pile of
              home renovation receipts, and a tech company I&apos;m building nights
              and weekends. Day Job Wealth is where I write it all down &mdash; not
              as someone who quit their job to do this full-time, but as someone
              still very much in the middle of it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-4 sm:px-10">
        <div className="space-y-6 font-body text-lg leading-relaxed text-ink-soft">
          <p>
            I didn&apos;t start out thinking of our house as an asset. It was just
            where we lived &mdash; until a refinance, then a renovation, then a
            second property, added up to more of our net worth than either of our
            paychecks did in a given year. That shift in how I saw our home is the
            whole reason this site exists.
          </p>
          <p>
            Now I write about the real, unglamorous mechanics of building wealth
            around a full-time job: how we decided which renovations were
            investments and which were just nice-to-haves, the budget that
            actually got us to a second property, and the slow, deliberate way
            we&apos;ve grown what our home equity does for us.
          </p>

          <blockquote className="border-l-2 border-clay py-2 pl-6 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
            I&apos;m not doing this instead of my day job. I&apos;m doing it
            because of it.
          </blockquote>

          <p>
            The newest chapter is Hopscotch &mdash; a tech company I&apos;m
            building from scratch, in public, starting with nothing but a
            problem I couldn&apos;t stop thinking about and the hours before and
            after work. I&apos;m documenting that build here too: the decisions,
            the setbacks, and the actual numbers, as they happen rather than in
            hindsight.
          </p>
          <p>
            If you&apos;re working a day job and building something on the side
            &mdash; a rental, a portfolio, a business, a better budget &mdash;
            this is a place to see that work done honestly, in real time.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-line pt-10">
          <Link
            href="/blog"
            className="rounded-full bg-ink px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-burgundy"
          >
            Read the Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-ink/20 px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-ink"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
