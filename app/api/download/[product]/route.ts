import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { stripe, stripeConfigured } from "@/lib/stripe";
import { getProductBySlug } from "@/lib/products";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product: slug } = await params;
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  const product = getProductBySlug(slug);
  if (!product) {
    return NextResponse.json({ error: "Unknown product." }, { status: 404 });
  }

  if (!product.free) {
    if (!sessionId) {
      return NextResponse.json({ error: "Missing checkout session." }, { status: 400 });
    }
    if (!stripeConfigured || !stripe) {
      return NextResponse.json({ error: "Checkout isn't connected yet." }, { status: 503 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paidForThisProduct =
      session.payment_status === "paid" && session.metadata?.productSlug === product.slug;

    if (!paidForThisProduct) {
      return NextResponse.json({ error: "No verified purchase found." }, { status: 403 });
    }
  }

  const filePath = path.join(process.cwd(), "private", "pdfs", product.pdfFilename);
  const file = await readFile(filePath);
  const body = new Uint8Array(file);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${product.pdfFilename}"`,
      "Cache-Control": "private, no-store",
    },
  });
}
