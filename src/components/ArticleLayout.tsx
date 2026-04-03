import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import RelatedPosts from "./RelatedPosts";
import JsonLd from "./JsonLd";
import { SITE_URL, AUTHOR, getCategorySlug, posts } from "@/lib/posts";

interface ArticleLayoutProps {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  modifiedISO: string;
  category: string;
  categoryHref: string;
  readTime: string;
  metaDescription: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  slug,
  title,
  date,
  dateISO,
  modifiedISO,
  category,
  categoryHref,
  readTime,
  metaDescription,
  children,
}: ArticleLayoutProps) {
  const categorySlug = getCategorySlug(category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: metaDescription,
    author: { "@type": "Organization", name: AUTHOR },
    publisher: {
      "@type": "Organization",
      name: "RepDex",
      url: SITE_URL,
    },
    datePublished: dateISO,
    dateModified: modifiedISO,
    mainEntityOfPage: `${SITE_URL}/${slug}`,
    url: `${SITE_URL}/${slug}`,
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <JsonLd data={articleSchema} />

      <Breadcrumbs
        items={[
          { label: category, href: categoryHref },
          { label: title, href: `/${slug}` },
        ]}
      />

      <div className="mb-8">
        <Link
          href={categoryHref}
          className="text-xs font-medium text-blue-600 uppercase tracking-wide"
        >
          {category}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3 leading-tight">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--muted)]">
          <span>By {AUTHOR}</span>
          <span>·</span>
          <time dateTime={dateISO}>{date}</time>
          <span>·</span>
          <span>{readTime}</span>
          <span>·</span>
          <span>Updated: {modifiedISO}</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none [&>p]:mb-4 [&>p]:leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:mb-4 [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ol]:mb-4 [&>ol]:pl-6 [&>ol>li]:mb-2 [&_a]:text-blue-600 [&_a:hover]:text-blue-800">
        {children}
      </div>

      {/* ===== KEEP READING (internal links) ===== */}
      {(() => {
        const keepReading = posts
          .filter((p) => p.category === category && p.slug !== slug)
          .slice(0, 5);
        if (keepReading.length === 0) return null;
        return (
          <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">Keep Reading</p>
            <ul className="space-y-2">
              {keepReading.map((p) => (
                <li key={p.slug} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <Link href={`/${p.slug}`} className="text-sm text-blue-700 hover:text-blue-900 hover:underline leading-snug">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })()}

      <div className="mt-10 pt-6 border-t border-[var(--border)]">
        <Link href="/blog" className="text-sm font-medium text-blue-600">
          &larr; Back to all articles
        </Link>
      </div>

      <RelatedPosts currentSlug={slug} category={category} />
    </article>
  );
}
