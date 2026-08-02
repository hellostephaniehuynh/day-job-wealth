import { NextResponse } from "next/server";
import { stripe, stripeConfigured, getSiteUrl } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const slug = body?.slug as string | undefined;

  if (!slug) {
    return NextResponse.json({ error: "Missing product." }, { status: 400 });
  }

  const product = getProductBySlug(slug);
  if (!product || product.free) {
    return NextResponse.json({ error: "That product isn't available for checkout." }, { status: 404 });
  }

  if (!stripeConfigured || !stripe) {
    return NextResponse.json(
      { error: "Checkout isn't connected yet. Add STRIPE_SECRET_KEY to enable purchases." },
      { status: 503 }
    );
  }

  const priceId = process.env[product.stripePriceEnvVar];
  if (!priceId) {
    return NextResponse.json(
      {
        error: `Missing ${product.stripePriceEnvVar}. Set it to this product's Stripe Price ID.`,
      },
      { status: 503 }
    );
  }

  const siteUrl = getSiteUrl();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/shop/success?session_id={CHECKOUT_SESSION_ID}&product=${product.slug}`,
    cancel_url: `${siteUrl}/shop/${product.slug}`,
    metadata: { productSlug: product.slug },
  });

  if (!session.url) {
    return NextResponse.json({ error: "Could not start checkout." }, { status: 502 });
  }

  return NextResponse.json({ url: session.url });
}
