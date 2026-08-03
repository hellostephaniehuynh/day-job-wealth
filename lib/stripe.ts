import Stripe from "stripe";

export const stripeConfigured = Boolean(process.env.STRIPE_SECRET_KEY);

export const stripe = stripeConfigured
  ? new Stripe(process.env.STRIPE_SECRET_KEY!)
  : null;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

/**
 * Fetches the real price from Stripe so the displayed price can never drift
 * out of sync with what a customer is actually charged. Returns null (so
 * callers can fall back to a static placeholder) if Stripe isn't configured
 * or the price can't be found.
 */
export async function getLivePriceDisplay(priceId: string | undefined): Promise<string | null> {
  if (!priceId || !stripeConfigured || !stripe) return null;
  try {
    const price = await stripe.prices.retrieve(priceId);
    if (price.unit_amount == null) return null;
    const amount = price.unit_amount / 100;
    const formatted = Number.isInteger(amount) ? amount.toFixed(0) : amount.toFixed(2);
    return `$${formatted}`;
  } catch {
    return null;
  }
}
