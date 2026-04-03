import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/posts";

export const metadata: Metadata = {
  title: "AI Tools Reviews & Roundups — RepDex",
  description: "Reviews, comparisons, and roundups of the best AI tools for content creators and professionals.",
  alternates: {
    canonical: "/category/ai-tools",
  },
  openGraph: {
    title: "AI Tools Reviews & Roundups — RepDex",
    description: "Reviews, comparisons, and roundups of the best AI tools for content creators and professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Reviews & Roundups — RepDex",
    description: "Reviews, comparisons, and roundups of the best AI tools for content creators and professionals.",
  },
};

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Tools Reviews",
  description: "Reviews, comparisons, and roundups of the best AI tools for content creators and professionals.",
  url: `${SITE_URL}/category/ai-tools`,
  isPartOf: { "@type": "WebSite", name: "RepDex", url: SITE_URL },
};

export default function Page() {
  return (
    <>
      <JsonLd data={categorySchema} />
      <CategoryPage
        title="AI Tools"
        description="Reviews, comparisons, and roundups of the best AI tools for creators and professionals."
        categories={["AI Tools"]}
      />
    </>
  );
}
