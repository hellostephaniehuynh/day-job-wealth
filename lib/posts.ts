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
  content: string[];
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
    content: [
      "When we first walked the backyard, it was a slab of concrete and a chain-link fence. Every contractor we talked to pitched it as a lifestyle upgrade — nicer for hosting, nicer for the kids, nicer for us. That framing never sat right with me, because 'nicer' doesn't show up on a balance sheet.",
      "So I built a different filter: does this dollar increase what the property is worth, what it could rent for, or how long we'll want to stay here? The pool and the pergola both cleared that bar. A few things we almost added — a built-in pizza oven, a putting green — didn't, and we skipped them.",
      "Eighteen months later, an appraisal came back well above what we'd put in, and a property manager quoted a rental estimate that made the whole project cash-flow positive if we ever move. That's the difference between a yard and an asset: you can point to the number.",
    ],
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
    content: [
      "I didn't start Hopscotch with a business plan. I started it with a problem I kept running into and a Notes app full of half-formed rants about it. Week one was less 'founder mode' and more just admitting the idea wasn't going away on its own.",
      "The actual work was unglamorous: eleven customer conversations squeezed into lunch breaks and evenings, a rough sketch of what the product could be, and a spreadsheet estimating whether this was even worth my nights and weekends. No funding, no co-founder yet, no announcement.",
      "I'm documenting this in public because most 'building in public' content starts after the exciting part already happened. I'd rather show the actual beginning — including the parts where I had no idea if this was a good idea.",
    ],
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
    content: [
      "The spreadsheet that got us to a second property wasn't clever. It was a single tab with every recurring expense listed out, color-coded by how much I'd regret cutting it. Nothing about it would make an interesting Instagram carousel.",
      "What made it work was that I checked it every single week, not once a month. Small categories — subscriptions, takeout, the 'just this once' purchases — drift fast when you're not looking, and those were exactly the categories that funded the down payment over eighteen months.",
      "I still don't call this frugality. I call it routing money on purpose instead of by accident. The property is the visible result, but the habit is the actual asset.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getAllCategories(): PostCategory[] {
  return ["Real Estate", "Investing", "Side Hustles", "Budgeting", "Building Hopscotch"];
}
