import type { Metadata } from "next";
import { SITE_URL } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog — AI Tools, Tech & Content Creation Reviews | RepDex",
  description:
    "Browse all articles on AI tools, tech reviews, productivity tips, and content creation guides from RepDex.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog — RepDex",
    description:
      "Browse all articles on AI tools, tech reviews, productivity tips, and content creation guides from RepDex.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — RepDex",
    description:
      "Browse all articles on AI tools, tech reviews, productivity tips, and content creation guides from RepDex.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "RepDex Blog",
  description:
    "Browse all articles on AI tools, tech reviews, productivity tips, and content creation guides from RepDex.",
  url: `${SITE_URL}/blog`,
  isPartOf: {
    "@type": "WebSite",
    name: "RepDex",
    url: SITE_URL,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={blogSchema} />
      {children}
    </>
  );
}
