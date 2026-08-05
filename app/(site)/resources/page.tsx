import type { Metadata } from "next";
import Image from "next/image";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Get The Home Income Guide — how everyday homeowners build a second income stream from their own front door.",
};

export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
            Free Resource
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            The Home Income Guide.
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink-soft">
            How everyday homeowners are building a second income stream from their own
            front door &mdash; the same starting framework I used before either of our
            properties made us a dollar. No spam, just the guide and occasional notes
            on what I&apos;m building.
          </p>

          <div className="mt-8 max-w-md">
            <SubscribeForm />
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
          <Image
            src="/images/pool-lounge-day.jpg"
            alt="The Home Income Guide"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 35vw, 80vw"
          />
        </div>
      </div>
    </section>
  );
}
