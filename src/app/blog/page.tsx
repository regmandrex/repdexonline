import type { Metadata } from "next";
import Link from "next/link";
import { posts, getCategorySlug } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — AI Tools, Tech & Content Creation | RepDex",
  description:
    "Read the latest articles on AI tools, tech reviews, and productivity tips from RepDex.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — RepDex",
    description:
      "Read the latest articles on AI tools, tech reviews, and productivity tips from RepDex.",
  },
};

const categories = [
  "AI Tools",
  "ChatGPT Tips",
  "Content Creation",
  "Tech",
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-[var(--muted)] mb-6">
        All articles on AI tools, tech reviews, and content creation.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${getCategorySlug(cat)}`}
            className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 hover:no-underline transition-colors"
          >
            {cat}
          </Link>
        ))}
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
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
