import Stripe from "stripe";

export const stripeConfigured = Boolean(process.env.STRIPE_SECRET_KEY);

export const stripe = stripeConfigured
  ? new Stripe(process.env.STRIPE_SECRET_KEY!)
  : null;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}
