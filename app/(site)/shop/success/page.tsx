import type { Metadata } from "next";
import Link from "next/link";
import { stripe, stripeConfigured } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false },
};

export default async function ShopSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; product?: string }>;
}) {
  const { session_id: sessionId, product: productSlug } = await searchParams;
  const product = productSlug ? getProductBySlug(productSlug) : undefined;

  let verified = false;
  let errorMessage = "";

  if (!sessionId || !product) {
    errorMessage = "We couldn't find that order.";
  } else if (!stripeConfigured || !stripe) {
    errorMessage = "Checkout isn't fully connected yet.";
  } else {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    verified =
      session.payment_status === "paid" && session.metadata?.productSlug === product.slug;
    if (!verified) errorMessage = "We couldn't verify this purchase.";
  }

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:px-10">
      {verified && product ? (
        <>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
            Order Confirmed
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Thank you &mdash; {product.title} is ready.
          </h1>
          <p className="mt-4 font-body text-lg text-ink-soft">
            Your download is ready below. A receipt is on its way from Stripe.
          </p>
          <a
            href={`/api/download/${product.slug}?session_id=${encodeURIComponent(sessionId!)}`}
            className="mt-8 inline-block rounded-full bg-ink px-8 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-burgundy"
          >
            Download Your Guide
          </a>
        </>
      ) : (
        <>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            We hit a snag.
          </h1>
          <p className="mt-4 font-body text-lg text-ink-soft">{errorMessage}</p>
          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-ink px-8 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-burgundy"
          >
            Back to Shop
          </Link>
        </>
      )}
    </section>
  );
}
