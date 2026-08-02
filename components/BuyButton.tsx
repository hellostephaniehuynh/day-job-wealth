"use client";

import { useState } from "react";

export default function BuyButton({ slug, priceDisplay }: { slug: string; priceDisplay: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();

      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout isn't available right now.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="rounded-full bg-ink px-8 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-burgundy disabled:opacity-60"
      >
        {loading ? "Redirecting…" : `Buy Now — ${priceDisplay}`}
      </button>
      {error && <p className="mt-3 max-w-sm font-body text-sm text-burgundy">{error}</p>}
    </div>
  );
}
