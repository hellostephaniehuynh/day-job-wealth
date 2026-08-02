"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-rose-tint p-8 text-center">
        <p className="font-display text-lg font-semibold text-ink">
          Thank you &mdash; your message is on its way.
        </p>
        <p className="mt-2 font-body text-sm text-ink-soft">
          I read every message myself and I&apos;ll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="font-display text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-ink-soft/50 focus:border-clay focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-display text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-ink-soft/50 focus:border-clay focus:outline-none"
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-display text-xs font-semibold uppercase tracking-wide text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-ink-soft/50 focus:border-clay focus:outline-none"
          placeholder="What's on your mind?"
        />
      </div>

      {status === "error" && (
        <p className="font-body text-sm text-burgundy">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-ink px-7 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-burgundy disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
