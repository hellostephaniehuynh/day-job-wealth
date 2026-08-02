import { NextResponse } from "next/server";
import { stripe, stripeConfigured } from "@/lib/stripe";

export async function POST(request: Request) {
  if (!stripeConfigured || !stripe) {
    return NextResponse.json({ error: "Stripe isn't configured." }, { status: 503 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!webhookSecret || !signature) {
    return NextResponse.json({ error: "Missing webhook signature or secret." }, { status: 400 });
  }

  const payload = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error("[stripe webhook] signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("[stripe webhook] checkout completed:", {
      sessionId: session.id,
      product: session.metadata?.productSlug,
      email: session.customer_details?.email,
    });
    // Entitlement is verified live against Stripe on the success/download
    // routes, so no database write is required here. This handler exists
    // as a hook point for future fulfillment (e.g. a receipt email).
  }

  return NextResponse.json({ received: true });
}
