import Link from "next/link";
import { posts, type Post } from "@/lib/posts";

export default function RelatedPosts({
  currentSlug,
  category,
}: {
  currentSlug: string;
  category: string;
}) {
  const related: Post[] = [];

  // First get posts from same category
  const sameCat = posts.filter(
    (p) => p.category === category && p.slug !== currentSlug
  );
  related.push(...sameCat.slice(0, 3));

  // If not enough, fill from other posts
  if (related.length < 3) {
    const others = posts.filter(
      (p) => p.slug !== currentSlug && !related.some((r) => r.slug === p.slug)
    );
    related.push(...others.slice(0, 3 - related.length));
  }

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-[var(--border)]">
      <h2 className="text-xl font-bold mb-5">Related Articles</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {related.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="border border-[var(--border)] rounded-lg p-4 hover:shadow-md hover:no-underline transition-shadow"
          >
            <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
              {post.category}
            </span>
            <h3 className="text-sm font-semibold mt-1 text-[var(--foreground)] leading-snug">
              {post.title}
            </h3>
            <span className="text-xs text-[var(--muted)] mt-2 block">
              {post.readTime}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
