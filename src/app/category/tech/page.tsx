import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Tech Tools & App Reviews 2026 — RepDex",
  description: "Tech guides, reviews, and how-tos for content creators and professionals.",
  alternates: {
    canonical: "/category/tech",
  },
};

export default function Page() {
  return (
    <CategoryPage
      title="Tech"
      description="Tech guides, reviews, and how-tos for content creators and professionals."
      categories={["Tech"]}
    />
  );
}
