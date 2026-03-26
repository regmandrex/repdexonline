import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "ChatGPT Tips, Tricks & Prompts 2026 — RepDex",
  description: "Practical tips, prompts, and guides for getting more out of ChatGPT.",
  alternates: {
    canonical: "/category/chatgpt-tips",
  },
};

export default function Page() {
  return (
    <CategoryPage
      title="ChatGPT Tips"
      description="Practical tips, prompts, and guides for getting more out of ChatGPT."
      categories={["ChatGPT Tips"]}
    />
  );
}
