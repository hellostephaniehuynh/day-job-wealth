export type Product = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  /** Display-only. The real charge amount lives on the Stripe Price itself. */
  priceDisplay: string;
  /** Name of the env var holding this product's Stripe Price ID. */
  stripePriceEnvVar: string;
  pdfFilename: string;
  coverImage: string;
  free?: boolean;
};

export const products: Product[] = [
  {
    slug: "home-asset-blueprint",
    title: "The Home Asset Blueprint",
    description:
      "A step-by-step framework for turning the home you already own into a wealth-building asset.",
    longDescription:
      "The exact framework I use to evaluate every dollar that goes into a property — renovations, refinancing, rental potential, and the math that separates an upgrade from an investment.",
    priceDisplay: "$47",
    stripePriceEnvVar: "STRIPE_PRICE_HOME_ASSET_BLUEPRINT",
    pdfFilename: "home-asset-blueprint.pdf",
    coverImage: "/images/patio-pool.jpg",
  },
  {
    slug: "home-income-snapshot",
    title: "The Home Income Snapshot",
    description:
      "A quick-reference worksheet for sizing up a property's income potential before you commit.",
    longDescription:
      "A condensed, do-this-first worksheet for running the numbers on rental income, equity growth, and break-even timelines on any property you're considering.",
    priceDisplay: "$27",
    stripePriceEnvVar: "STRIPE_PRICE_HOME_INCOME_SNAPSHOT",
    pdfFilename: "home-income-snapshot.pdf",
    coverImage: "/images/backyard-firepit.jpg",
  },
  {
    slug: "home-income-guide",
    title: "The Home Income Guide",
    description:
      "The free starting point: how everyday homeowners are building a second income stream from their own front door.",
    longDescription:
      "The free starting point: how everyday homeowners are building a second income stream from their own front door.",
    priceDisplay: "Free",
    stripePriceEnvVar: "",
    pdfFilename: "home-income-guide.pdf",
    coverImage: "/images/pool-lounge-day.jpg",
    free: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const paidProducts = products.filter((p) => !p.free);
export const freeProduct = products.find((p) => p.free)!;
