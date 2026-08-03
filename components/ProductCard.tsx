import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { getLivePriceDisplay } from "@/lib/stripe";

export default async function ProductCard({ product }: { product: Product }) {
  const priceDisplay = product.free
    ? "Free"
    : (await getLivePriceDisplay(process.env[product.stripePriceEnvVar])) ?? product.priceDisplay;

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-lg hover:shadow-ink/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.coverImage}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <span className="absolute right-4 top-4 rounded-full bg-ivory px-3 py-1 font-display text-xs font-semibold uppercase tracking-wide text-ink shadow-sm">
          {priceDisplay}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink">{product.title}</h3>
        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink-soft">
          {product.description}
        </p>
        <span className="mt-4 font-display text-sm font-semibold uppercase tracking-wide text-burgundy">
          {product.free ? "Get it free →" : "View details →"}
        </span>
      </div>
    </Link>
  );
}
