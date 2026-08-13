import type { Metadata } from "next";
import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "30-Day Money Moves Challenge",
  description:
    "Join the waitlist for the 30-Day Money Moves Challenge — one small money move a day, for 30 days.",
};

export default function ChallengePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Coming Soon &mdash; Waitlist Open
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            The 30-Day
            <br />
            Money Moves
            <br />
            Challenge.
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ink-soft">
            One small, specific money move a day for 30 days &mdash; the same kind
            of everyday decisions that added up to a second property and a business
            on the side. Free to join. Waitlist gets first access when doors open,
            plus early bird perks.
          </p>

          <div className="mt-8 max-w-md">
            <WaitlistForm />
          </div>
          <p className="mt-4 font-body text-xs text-ink-soft/70">
            No spam &mdash; just one email the moment the challenge opens.
          </p>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
          <Image
            src="/images/backyard-firepit.jpg"
            alt="The 30-Day Money Moves Challenge"
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
