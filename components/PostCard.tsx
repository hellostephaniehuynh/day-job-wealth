import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-rose-tint">
        <Image
          src={post.coverImage}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <p className="mt-4 font-display text-xs font-semibold uppercase tracking-widest text-clay-dark">
        {post.category}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-burgundy">
        {post.title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
        {post.excerpt}
      </p>
      <p className="mt-3 font-body text-xs text-ink-soft/70">{post.readingTime}</p>
    </Link>
  );
}
