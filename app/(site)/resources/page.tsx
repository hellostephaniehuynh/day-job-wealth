import type { Metadata } from "next";
import Image from "next/image";
import SubscribeForm from "@/components/SubscribeForm";
import { freeProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Free resources from Day Job Wealth — the Starter Kit and the Home Income Guide.",
};

export default function ResourcesPage() {
  const [starterKit, homeIncomeGuide] = freeProducts;

  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-16 sm:px-10 sm:pt-20">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay">
          Free Resources
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
          Start Here.
        </h1>
      </section>

      {/* Starter Kit — featured */}
      <section className="mx-auto max-w-5xl px-6 py-12 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Start Here First
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-4xl">
              {starterKit.title}
            </h2>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink-soft">
              My story, the exact framework I use to figure out what to build first, and
              a workbook to map your own next 30 days &mdash; for the person who knows
              there&apos;s more to life than their 9-to-5 and is ready to build it.
            </p>

            <div className="mt-8 max-w-md">
              <SubscribeForm
                productSlug={starterKit.slug}
                downloadLabel="Download the Starter Kit"
                buttonLabel="Send Me the Starter Kit"
                funnelsToChallenge
              />
            </div>
            <p className="mt-4 font-body text-xs text-ink-soft/70">
              No spam &mdash; just the kit and occasional notes on what I&apos;m building.
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
            <Image
              src={starterKit.coverImage}
              alt={starterKit.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 35vw, 80vw"
            />
          </div>
        </div>
      </section>

      {/* Home Income Guide — secondary */}
      <section className="mx-auto max-w-5xl border-t border-line px-6 py-16 sm:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl lg:order-2">
            <Image
              src={homeIncomeGuide.coverImage}
              alt={homeIncomeGuide.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 70vw"
            />
          </div>

          <div className="lg:order-1">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Also Free
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-[1.05] tracking-tight text-ink sm:text-3xl">
              {homeIncomeGuide.title}
            </h2>
            <p className="mt-4 max-w-lg whitespace-pre-line font-body text-base leading-relaxed text-ink-soft">
              {homeIncomeGuide.longDescription}
            </p>

            <div className="mt-6 max-w-md">
              <SubscribeForm
                productSlug={homeIncomeGuide.slug}
                downloadLabel="Download the Guide"
                buttonLabel="Send Me the Guide"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
