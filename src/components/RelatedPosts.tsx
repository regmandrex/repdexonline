import Link from "next/link";
import { posts, type Post, getCategorySlug } from "@/lib/posts";

function getCategoryBadgeClass(category: string): string {
  const map: Record<string, string> = {
    "AI Tools": "badge-ai",
    "ChatGPT Tips": "badge-chatgpt",
    "Content Creation": "badge-content",
    "Tech": "badge-tech",
  };
  return map[category] || "badge-ai";
}

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
  related.push(...sameCat.slice(0, 4));

  // If not enough, fill from other posts
  if (related.length < 4) {
    const others = posts.filter(
      (p) => p.slug !== currentSlug && !related.some((r) => r.slug === p.slug)
    );
    related.push(...others.slice(0, 4 - related.length));
  }

  if (related.length === 0) return null;

  return (
    <section className="mt-14 pt-8 border-t border-[var(--border)]">
      <h2 className="text-xl font-bold mb-6">Related Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {related.slice(0, 4).map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="group border border-[var(--border)] rounded-xl p-5 hover:no-underline card-hover bg-white"
          >
            <span className={`badge ${getCategoryBadgeClass(post.category)}`}>
              {post.category}
            </span>
            <h3 className="text-sm font-semibold mt-3 text-[var(--foreground)] leading-snug group-hover:text-[var(--accent)] transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-xs text-[var(--muted-light)]">
                {post.readTime}
              </span>
              <span className="text-xs text-[var(--muted-light)]">·</span>
              <time className="text-xs text-[var(--muted-light)]">
                {post.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
