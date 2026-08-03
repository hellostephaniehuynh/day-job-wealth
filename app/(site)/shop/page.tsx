import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop",
  description: "Digital guides for building wealth alongside a day job, from Stephanie Huynh.",
};

// Refetch live Stripe prices at most once an hour, so a price change in
// Stripe shows up here without needing a full redeploy.
export const revalidate = 3600;

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
      <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-clay-dark">
        Shop
      </p>
      <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
        Digital <span className="font-script text-4xl font-normal text-burgundy sm:text-5xl">guides</span>.
      </h1>
      <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
        Frameworks and worksheets for turning a home &mdash; and a day job &mdash; into real
        wealth. Instant digital downloads.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
