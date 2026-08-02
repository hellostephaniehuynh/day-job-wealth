export type PostCategory =
  | "Real Estate"
  | "Investing"
  | "Side Hustles"
  | "Budgeting"
  | "Building Hopscotch";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  coverImage: string;
  publishedAt: string;
  readingTime: string;
};

/**
 * Placeholder posts so Home/Blog have real content to render before the
 * Sanity Studio is connected. Once Sanity is wired up, this file's shape
 * (the Post type) is what the Sanity query results get mapped into.
 */
export const posts: Post[] = [
  {
    slug: "why-we-turned-our-backyard-into-an-asset",
    title: "Why We Turned Our Backyard Into an Asset, Not Just a Yard",
    excerpt:
      "The pool, the pergola, the fire pit — every dollar we put into this backyard was a decision I ran through the same filter I use for any investment. Here's the math behind it.",
    category: "Real Estate",
    coverImage: "/images/patio-pool.jpg",
    publishedAt: "2026-06-12",
    readingTime: "7 min read",
  },
  {
    slug: "starting-hopscotch-week-one",
    title: "Starting Hopscotch: What Week One of Building a Tech Company Actually Looked Like",
    excerpt:
      "No pitch deck, no funding, just a day job, a notebook, and a problem I couldn't stop thinking about. This is the first real-time update on building Hopscotch from scratch.",
    category: "Building Hopscotch",
    coverImage: "/images/swing-never-grow-up.jpg",
    publishedAt: "2026-07-02",
    readingTime: "5 min read",
  },
  {
    slug: "the-budget-that-let-me-buy-a-second-property",
    title: "The Unglamorous Budget That Let Me Buy a Second Property",
    excerpt:
      "It wasn't a raise. It wasn't luck. It was eighteen months of a spreadsheet I was almost too embarrassed to show anyone — until it worked.",
    category: "Budgeting",
    coverImage: "/images/backyard-firepit.jpg",
    publishedAt: "2026-05-20",
    readingTime: "6 min read",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getAllCategories(): PostCategory[] {
  return ["Real Estate", "Investing", "Side Hustles", "Budgeting", "Building Hopscotch"];
}
