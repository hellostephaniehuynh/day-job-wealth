// Publishes a blog post to Sanity from a JSON file.
//
// Usage: node scripts/publish-post.mjs path/to/post.json
//
// JSON shape:
// {
//   "title": "...",
//   "category": "Real Estate" | "Investing" | "Side Hustles" | "Budgeting" | "Building Hopscotch",
//   "excerpt": "...",
//   "coverImage": "public/images/patio-pool.jpg",   // path relative to project root
//   "author": "Stephanie Huynh",                     // optional, defaults below
//   "paragraphs": ["First paragraph...", "Second paragraph...", ...]
// }

import { readFileSync } from "node:fs";
import path from "node:path";
import { createClient } from "next-sanity";
import "dotenv/config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-01",
  token,
  useCdn: false,
});

const jsonPath = process.argv[2];
if (!jsonPath) {
  console.error("Usage: node scripts/publish-post.mjs path/to/post.json");
  process.exit(1);
}

const post = JSON.parse(readFileSync(path.resolve(jsonPath), "utf-8"));

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toPortableText(paragraphs) {
  return paragraphs.map((text) => ({
    _type: "block",
    style: "normal",
    children: [{ _type: "span", text }],
  }));
}

async function main() {
  console.log(`Uploading cover image: ${post.coverImage}`);
  const imageBuffer = readFileSync(path.resolve(post.coverImage));
  const imageAsset = await client.assets.upload("image", imageBuffer, {
    filename: path.basename(post.coverImage),
  });

  const doc = {
    _type: "post",
    title: post.title,
    slug: { _type: "slug", current: slugify(post.title) },
    category: post.category,
    excerpt: post.excerpt,
    coverImage: {
      _type: "image",
      asset: { _type: "reference", _ref: imageAsset._id },
    },
    author: post.author || "Stephanie Huynh",
    publishedAt: new Date().toISOString(),
    body: toPortableText(post.paragraphs),
  };

  const created = await client.create(doc);
  console.log(`Published: "${post.title}"`);
  console.log(`Slug: ${created.slug.current}`);
  console.log(`Sanity document ID: ${created._id}`);
}

main().catch((err) => {
  console.error("Failed to publish post:", err.message);
  process.exit(1);
});
