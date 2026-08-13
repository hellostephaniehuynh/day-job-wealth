"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistForm() {
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

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-paper p-8 text-center">
        <p className="font-display text-lg font-semibold text-ink">You&apos;re on the list!</p>
        <p className="mt-2 font-body text-sm text-ink-soft">
          I&apos;ll email you the second doors open for the challenge.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        name="email"
        required
        placeholder="you@email.com"
        className="w-full flex-1 rounded-full border border-line bg-paper px-5 py-3 font-body text-base text-ink placeholder:text-ink-soft/50 focus:border-clay focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-full bg-ink px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-clay disabled:opacity-60"
      >
        {status === "loading" ? "Joining…" : "Join the Waitlist"}
      </button>
      {status === "error" && (
        <p className="w-full font-body text-sm text-clay-dark">{errorMessage}</p>
      )}
    </form>
  );
}
