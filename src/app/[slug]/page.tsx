import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  posts,
  getPostBySlug,
  existingSlugs,
  getCategorySlug,
  SITE_URL,
  AUTHOR,
} from "@/lib/posts";
import { getPostContent } from "@/lib/content";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedPosts from "@/components/RelatedPosts";
import JsonLd from "@/components/JsonLd";

const dynamicPosts = posts.filter((p) => !existingSlugs.has(p.slug));

export function generateStaticParams() {
  return dynamicPosts.map((p) => ({ slug: p.slug }));
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

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <JsonLd data={articleSchema} />

      <Breadcrumbs
        items={[
          { label: post.category, href: `/category/${categorySlug}` },
          { label: post.title, href: `/${post.slug}` },
        ]}
      />

      <div className="mb-8">
        <Link
          href={`/category/${categorySlug}`}
          className="text-xs font-medium text-blue-600 uppercase tracking-wide"
        >
          {post.category}
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--muted)]">
          <span>By {AUTHOR}</span>
          <span>·</span>
          <time dateTime={post.dateISO}>{post.date}</time>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>Updated: {post.modifiedISO}</span>
        </div>
      </div>

      <div
        className="[&>p]:mb-4 [&>p]:leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:mb-4 [&>ul]:pl-6 [&>ul>li]:mb-2 [&>ul>li]:list-disc [&>ol]:mb-4 [&>ol]:pl-6 [&>ol>li]:mb-2 [&>ol>li]:list-decimal [&_a]:text-blue-600 [&_a:hover]:text-blue-800"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="mt-10 pt-6 border-t border-[var(--border)]">
        <Link href="/blog" className="text-sm font-medium text-blue-600">
          &larr; Back to all articles
        </Link>
      </div>

      <RelatedPosts currentSlug={post.slug} category={post.category} />
    </article>
  );
}
