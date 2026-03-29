import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  posts,
  getPostBySlug,
  getCategorySlug,
  SITE_URL,
  AUTHOR,
} from "@/lib/posts";
import { getPostContent } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import ShareButtons from "@/components/ShareButtons";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `${SITE_URL}/${post.slug}`,
      type: "article",
      publishedTime: post.dateISO,
      modifiedTime: post.modifiedISO,
      authors: [AUTHOR],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const content = getPostContent(slug);

  if (!post || !content) notFound();

  const categorySlug = getCategorySlug(post.category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: { "@type": "Organization", name: AUTHOR },
    publisher: {
      "@type": "Organization",
      name: "RepDex",
      url: SITE_URL,
    },
    datePublished: post.dateISO,
    dateModified: post.modifiedISO,
    mainEntityOfPage: `${SITE_URL}/${post.slug}`,
    url: `${SITE_URL}/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `${SITE_URL}/category/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `${SITE_URL}/${post.slug}`,
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 md:py-16 animate-fade-in">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.category, href: `/category/${categorySlug}` },
          { label: post.title, href: `/${post.slug}` },
        ]}
      />

      <header className="mb-12 pb-10 border-b border-[var(--border-light)]">
        <Link
          href={`/category/${categorySlug}`}
          className={`badge ${categorySlug === 'ai-tools' ? 'badge-ai' : categorySlug === 'chatgpt-tips' ? 'badge-chatgpt' : categorySlug === 'content-creation' ? 'badge-content' : 'badge-tech'} mb-5 inline-block hover:no-underline`}
        >
          {post.category}
        </Link>
        <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6 leading-tight tracking-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">RD</span>
            <span className="font-semibold text-[var(--foreground)]">
              {AUTHOR}
            </span>
          </div>
          <span className="hidden sm:inline text-[var(--border)]">•</span>
          <time dateTime={post.dateISO} className="font-medium">{post.date}</time>
          <span className="hidden sm:inline text-[var(--border)]">•</span>
          <span className="font-medium">{post.readTime}</span>
        </div>

        <div className="mt-8">
          <ShareButtons title={post.title} slug={post.slug} />
        </div>
      </header>

      <div
        className="prose-article max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <footer className="mt-16 pt-8 border-t border-[var(--border)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/blog"
            className="group inline-flex items-center text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] hover:no-underline"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">&larr;</span>
            Back to all articles
          </Link>
          <ShareButtons title={post.title} slug={post.slug} />
        </div>
      </footer>

      <section className="mt-16">
        <RelatedPosts currentSlug={post.slug} category={post.category} />
      </section>
    </article>
  );
}
