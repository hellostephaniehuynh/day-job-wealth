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
    title: "Why I Turned My Backyard Into an Asset",
    excerpt:
      "It was a slab of concrete everyone told me to leave alone. Here's how it became a six-figure piece of my home hacking business.",
    category: "Real Estate",
    coverImage: "/images/patio-pool.jpg",
    publishedAt: "2026-06-12",
    readingTime: "7 min read",
    content: [
      "When I first walked into the backyard it was basically a slab of concrete and dirt. Every person I knew said that it was too big of a project, that I couldn't do it, that it was going to be too much. But I saw what it could be.",
      "So I started small and deliberate. A pool, because water sells space. A patio, because shade turns a yard into a room you actually want to sit in. A fire pit, because nobody leaves a backyard once the sun goes down. Every decision ran through the same filter: would this make the space more valuable, or was I just decorating it?",
      "What nobody tells you about a backyard like this is that it doesn't have to just sit there between weekends. Once it was done, I started listing it — first on Peerspace for photo shoots and gatherings, and now I even offer it for hourly rental to my Airbnb guests who live in the other portions of my home. The same pool and patio that made me want to come home every night turned into a booking calendar.",
      "Within the first three years, that backyard alone had paid for itself and then some. It's now a six-figure piece of the home hacking business I run alongside my full-time job — the same concrete slab everyone told me to leave alone is quietly funding everything else I'm building.",
      "That's the whole thesis behind Day Job Wealth: you don't need a bigger house or a different life to start. You need to look at what you already have and ask what it could become.",
      "I share the insider details of how I actually run this home hacking business (and how you can too). The listings, the numbers, the mistakes — on my Substack, linked below.",
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
