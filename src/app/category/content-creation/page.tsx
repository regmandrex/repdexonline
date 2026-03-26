import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Content Creation Tips & AI Tools 2026 — RepDex",
  description: "Guides and tools for creating better content faster, from blogging to social media to video.",
  alternates: {
    canonical: "/category/content-creation",
  },
};

export default function Page() {
  return (
    <CategoryPage
      title="Content Creation"
      description="Guides and tools for creating better content faster, from blogging to social media to video."
      categories={["Content Creation"]}
    />
  );
}
