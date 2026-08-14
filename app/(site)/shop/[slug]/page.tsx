import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { getLivePriceDisplay } from "@/lib/stripe";
import BuyButton from "@/components/BuyButton";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

// Refetch the live Stripe price at most once an hour.
export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: product.title, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const priceDisplay = product.free
    ? "Free"
    : (await getLivePriceDisplay(process.env[product.stripePriceEnvVar])) ?? product.priceDisplay;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
      <Link
        href="/shop"
        className="font-display text-xs font-semibold uppercase tracking-wide text-ink-soft transition-colors hover:text-burgundy"
      >
        ← All Guides
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={product.coverImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-widest text-clay-dark">
            Digital Guide
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl">
            {product.title}
          </h1>
          <p className="mt-5 whitespace-pre-line font-body text-lg leading-relaxed text-ink-soft">
            {product.longDescription}
          </p>

          <div className="mt-8">
            {product.free ? (
              <Link
                href="/resources"
                className="inline-block rounded-full bg-ink px-8 py-3 font-display text-sm font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-burgundy"
              >
                Get It Free
              </Link>
            ) : (
              <BuyButton slug={product.slug} priceDisplay={priceDisplay} />
            )}
          </div>

          <p className="mt-6 font-body text-sm text-ink-soft/70">
            Instant digital download &mdash; delivered right after checkout.
          </p>
        </div>
      </div>
    </section>
  );
}
