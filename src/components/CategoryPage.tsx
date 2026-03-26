import Link from "next/link";
import { posts, getCategorySlug } from "@/lib/posts";

interface CategoryPageProps {
  title: string;
  description: string;
  categories: string[];
}

export default function CategoryPage({
  title,
  description,
  categories,
}: CategoryPageProps) {
  const filtered = posts.filter((p) => categories.includes(p.category));

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-[var(--muted)] mb-8">{description}</p>

      <div className="space-y-6">
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="border-b border-[var(--border)] pb-6"
          >
            <Link
              href={`/category/${getCategorySlug(post.category)}`}
              className="text-xs font-medium text-blue-600 uppercase tracking-wide"
            >
              {post.category}
            </Link>
            <h2 className="text-xl font-semibold mt-1 mb-2">
              <Link
                href={`/${post.slug}`}
                className="text-[var(--foreground)] hover:text-blue-600"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-[var(--muted)] mb-2">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
