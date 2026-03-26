import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "AI Tools Reviews & Roundups 2026 — RepDex",
  description: "Reviews, comparisons, and roundups of the best AI tools for content creators and professionals.",
  alternates: {
    canonical: "/category/ai-tools",
  },
};

export default function Page() {
  return (
    <CategoryPage
      title="AI Tools"
      description="Reviews, comparisons, and roundups of the best AI tools for creators and professionals."
      categories={["AI Tools"]}
    />
  );
}
