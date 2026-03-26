import type { Metadata } from "next";
import { SITE_URL } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About — RepDex",
  description:
    "RepDex is an independent tech and AI tools review site. Learn more about who we are and why we do what we do.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About — RepDex",
    description:
      "RepDex is an independent tech and AI tools review site. Learn more about who we are and why we do what we do.",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RepDex",
  url: SITE_URL,
  description:
    "RepDex is an independent tech and AI tools review site providing honest reviews, practical guides, and hands-on comparisons.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <JsonLd data={orgSchema} />
      <h1 className="text-3xl font-bold mb-6">About RepDex</h1>

      <div className="space-y-4 text-[var(--foreground)] leading-relaxed">
        <p>
          RepDex started as a personal project. I kept a running list of AI
          tools and tech products that I actually used in my own work —
          writing, content creation, web projects — and friends kept asking
          me which ones were worth their time. After answering the same
          questions enough times, I figured I might as well write it all
          down properly.
        </p>

        <p>
          That&apos;s what this site is. Honest, practical reviews of the
          tools that content creators and professionals actually need. No
          sponsored rankings. No paid placements. If something makes the
          list, it&apos;s because I&apos;ve tested it myself and think it&apos;s
          genuinely useful.
        </p>

        <p>
          I focus on AI tools, productivity software, and tech that helps
          people do better work. Most of what I cover is free or affordable,
          because I know not everyone has budget to drop on premium
          subscriptions. I try to be specific about what works, what
          doesn&apos;t, and who each tool is actually for.
        </p>

        <p>
          RepDex is an independent site. I&apos;m not backed by any company,
          and the reviews reflect my own experience and research. If you
          find something useful here, that&apos;s the whole point.
        </p>
      </div>
    </div>
  );
}
