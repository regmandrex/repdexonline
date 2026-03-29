"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { posts, getCategorySlug, AUTHOR } from "@/lib/posts";

const allCategories = ["All", "AI Tools", "ChatGPT Tips", "Content Creation", "Tech"];
const POSTS_PER_PAGE = 12;

function getCategoryBadgeClass(category: string): string {
  const map: Record<string, string> = {
    "AI Tools": "badge-ai",
    "ChatGPT Tips": "badge-chatgpt",
    "Content Creation": "badge-content",
    "Tech": "badge-tech",
  };
  return map[category] || "badge-ai";
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    let result = posts;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Blog</h1>
      <p className="text-[var(--muted)] mb-8 max-w-2xl">
        All articles on AI tools, tech reviews, productivity, and content
        creation. Browse by category or search for a specific topic.
      </p>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-light)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2.5 border border-[var(--border)] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
            aria-label="Search articles"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`text-xs font-medium px-3.5 py-2 rounded-lg transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-[var(--muted-light)] mb-6">
        Showing {paginatedPosts.length} of {filteredPosts.length} articles
      </p>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {paginatedPosts.map((post) => (
          <article
            key={post.slug}
            className="border border-[var(--border)] rounded-xl p-5 bg-white card-hover"
          >
            <div className="flex items-center justify-between mb-3">
              <Link
                href={`/category/${getCategorySlug(post.category)}`}
                className={`badge ${getCategoryBadgeClass(post.category)} hover:no-underline`}
              >
                {post.category}
              </Link>
              <span className="text-xs text-[var(--muted-light)]">
                {post.readTime}
              </span>
            </div>
            <h2 className="text-lg font-semibold mb-2 leading-snug">
              <Link
                href={`/${post.slug}`}
                className="text-[var(--foreground)] hover:text-[var(--accent)] hover:no-underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-[var(--muted-light)] pt-3 border-t border-[var(--border-light)]">
              <span>{AUTHOR}</span>
              <time>{post.date}</time>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm rounded-lg border border-[var(--border)] hover:bg-[var(--surface)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            &larr; Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 text-sm rounded-lg transition-colors cursor-pointer ${
                currentPage === page
                  ? "bg-[var(--accent)] text-white"
                  : "border border-[var(--border)] hover:bg-[var(--surface)]"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm rounded-lg border border-[var(--border)] hover:bg-[var(--surface)] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
