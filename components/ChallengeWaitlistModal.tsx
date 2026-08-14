"use client";

import { useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const DISMISSED_KEY = "djw-challenge-waitlist-dismissed";

export default function ChallengeWaitlistModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem(DISMISSED_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    localStorage.setItem(DISMISSED_KEY, "1");
  }

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
      localStorage.setItem(DISMISSED_KEY, "1");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 px-4 py-8"
      onClick={dismiss}
    >
      <div
        className="relative grid w-full max-w-2xl overflow-hidden rounded-2xl bg-clay shadow-2xl sm:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/20 text-ivory transition-colors hover:bg-ivory/30"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col justify-center p-8 sm:p-10">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ivory/80">
            Coming Soon
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold uppercase leading-[1.05] tracking-tight text-ivory sm:text-3xl">
            30-Day Money
            <br />
            Moves Waitlist
          </h2>

          {status === "success" ? (
            <p className="mt-5 font-body text-base text-ivory/90">
              You&apos;re on the list &mdash; I&apos;ll email you the second doors open.
            </p>
          ) : (
            <>
              <p className="mt-4 font-body text-sm leading-relaxed text-ivory/80">
                One small money move a day for 30 days. Join the waitlist for first
                access when doors open.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
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
                  className="w-full rounded-full bg-ivory px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-ivory disabled:opacity-60"
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
    </div>
  );
}
