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
              At 30, after getting divorced &mdash; for the second time &mdash; my
              ex-husband took the house, and I was left with $60K in debt from our
              marriage.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-4 sm:px-10">
        <div className="space-y-6 font-body text-lg leading-relaxed text-ink-soft">
          <p>
            I worked relentlessly to dig myself out of the debt hole and purchased
            my home, which I slowly DIY&apos;d and renovated over the years into a
            six-figure home hacking business &mdash; all while working a day job.
          </p>
          <p>
            I&apos;m still working my 9-5, running my home hacking business, and my
            latest venture is currently building my startup, Hopscotch &mdash; a
            platform for families with children to find safe, private places to
            play. It&apos;s something I&apos;m extremely passionate about, directly
            inspired by my day-to-day life home hacking and the needs I see from
            mentoring through Big Brothers Big Sisters.
          </p>
          <p>
            Some would say I&apos;m an &ldquo;over-achiever,&rdquo; but I was
            actually considered the &ldquo;not smart&rdquo; one in my family.
            I&apos;m just a normal girl figuring it out day by day.
          </p>

          <blockquote className="border-l-2 border-clay py-2 pl-6 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
            I decided to take radical responsibility for my life and make a
            change.
          </blockquote>

          <p>
            I&apos;m not selling any &ldquo;get rich quick&rdquo; schemes or
            promises of never having to work a day job again. I share tools and
            strategies to build the number in your bank account &mdash; from home
            hacking, investing, or building a business &mdash; what works for me,
            what isn&apos;t working, and the actual numbers.
          </p>
          <p>
            By sharing my story, I hope other women can be inspired to know that
            they too can build a wealthy life &mdash; whether you&apos;re working a
            day job or building without one &mdash; that isn&apos;t just the
            numbers in your bank account, but how you decide to live and
            experience your life.
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
