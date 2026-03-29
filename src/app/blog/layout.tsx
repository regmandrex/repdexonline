import type { Metadata } from "next";

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
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
