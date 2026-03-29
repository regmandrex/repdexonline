import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Content Creation Tips & AI Tools 2026 — RepDex",
  description: "Guides and tools for creating better content faster, from blogging to social media to video.",
  alternates: {
    canonical: "/category/content-creation",
  },
  openGraph: {
    title: "Content Creation Tips & AI Tools 2026 — RepDex",
    description: "Guides and tools for creating better content faster, from blogging to social media to video.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creation Tips & AI Tools 2026 — RepDex",
    description: "Guides and tools for creating better content faster, from blogging to social media to video.",
  },
};

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Content Creation",
  description: "Guides and tools for creating better content faster, from blogging to social media to video.",
  url: `${SITE_URL}/category/content-creation`,
  isPartOf: { "@type": "WebSite", name: "RepDex", url: SITE_URL },
};

export default function Page() {
  return (
    <>
      <JsonLd data={categorySchema} />
      <CategoryPage
        title="Content Creation"
        description="Guides and tools for creating better content faster, from blogging to social media to video."
        categories={["Content Creation"]}
      />
    </>
  );
}
