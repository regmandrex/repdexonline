import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tech Tools & App Reviews 2026 — RepDex",
  description: "Tech guides, reviews, and how-tos for content creators and professionals.",
  alternates: {
    canonical: "/category/tech",
  },
  openGraph: {
    title: "Tech Tools & App Reviews 2026 — RepDex",
    description: "Tech guides, reviews, and how-tos for content creators and professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Tools & App Reviews 2026 — RepDex",
    description: "Tech guides, reviews, and how-tos for content creators and professionals.",
  },
};

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tech Reviews",
  description: "Tech guides, reviews, and how-tos for content creators and professionals.",
  url: `${SITE_URL}/category/tech`,
  isPartOf: { "@type": "WebSite", name: "RepDex", url: SITE_URL },
};

export default function Page() {
  return (
    <>
      <JsonLd data={categorySchema} />
      <CategoryPage
        title="Tech"
        description="Tech guides, reviews, and how-tos for content creators and professionals."
        categories={["Tech"]}
      />
    </>
  );
}
