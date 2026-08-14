"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function ChallengeWaitlistSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const email = (event.currentTarget.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
      <div className="grid overflow-hidden rounded-2xl bg-clay sm:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ivory/80">
            Coming Soon
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-ivory sm:text-4xl">
            Money Moves
            <br />
            Challenge Waitlist
          </h2>

          {status === "success" ? (
            <p className="mt-5 font-body text-base text-ivory/90">
              You&apos;re on the list &mdash; I&apos;ll email you the second doors open.
            </p>
          ) : (
            <>
              <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ivory/80">
                One small money move a day for 30 days. Join the waitlist for first
                access when doors open.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:max-w-sm">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  className="w-full rounded-full border border-ivory/30 bg-ivory/10 px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-ivory placeholder:text-ivory/60 focus:border-ivory focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-ivory px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-ivory disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? "Joining…" : "Join the Waitlist"}
                </button>
                {status === "error" && (
                  <p className="font-body text-xs text-ivory">{errorMessage}</p>
                )}
              </form>
            </>
          )}
        </div>

        <div className="relative hidden aspect-[4/5] sm:block">
          <Image
            src="/images/stephanie-portrait.jpg"
            alt="Stephanie Huynh"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
}
