import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/posts";

export const metadata: Metadata = {
  title: "ChatGPT Tips, Tricks & Prompts — RepDex",
  description: "Practical tips, prompts, and guides for getting more out of ChatGPT.",
  alternates: {
    canonical: "/category/chatgpt-tips",
  },
  openGraph: {
    title: "ChatGPT Tips, Tricks & Prompts — RepDex",
    description: "Practical tips, prompts, and guides for getting more out of ChatGPT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Tips, Tricks & Prompts — RepDex",
    description: "Practical tips, prompts, and guides for getting more out of ChatGPT.",
  },
};

const categorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ChatGPT Tips",
  description: "Practical tips, prompts, and guides for getting more out of ChatGPT.",
  url: `${SITE_URL}/category/chatgpt-tips`,
  isPartOf: { "@type": "WebSite", name: "RepDex", url: SITE_URL },
};

export default function Page() {
  return (
    <>
      <JsonLd data={categorySchema} />
      <CategoryPage
        title="ChatGPT Tips"
        description="Practical tips, prompts, and guides for getting more out of ChatGPT."
        categories={["ChatGPT Tips"]}
      />
    </>
  );
}
