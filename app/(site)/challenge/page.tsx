import type { Metadata } from "next";
import Image from "next/image";
import { Users, Compass, CalendarCheck, Sparkles } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "30-Day Money Moves Challenge",
  description:
    "Join the waitlist for the 30-Day Money Moves Challenge — one small money move a day, for 30 days.",
};

const whatYouGet = [
  {
    icon: Users,
    title: "Real Accountability",
    description: "Build alongside other people doing this at the same time you are.",
  },
  {
    icon: Compass,
    title: "My Actual Playbook",
    description:
      "Direct access to the frameworks, strategies, and real numbers I use to build wealth.",
  },
  {
    icon: CalendarCheck,
    title: "One Move a Day",
    description: "A daily challenge built to jumpstart or keep pushing your wealth-building.",
  },
  {
    icon: Sparkles,
    title: "A Space That Gets It",
    description:
      "Building a wealthy life beyond the 9-to-5 is the whole point — whether you plan to stay or dream of leaving.",
  },
];

export default function ChallengePage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-16 sm:px-10 sm:pt-20">
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

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink sm:text-3xl">
          What You Get
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {whatYouGet.map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon className="mt-1 shrink-0 text-clay" size={28} strokeWidth={1.75} />
              <div>
                <p className="font-display text-base font-semibold text-ink">{item.title}</p>
                <p className="mt-1 font-body text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
