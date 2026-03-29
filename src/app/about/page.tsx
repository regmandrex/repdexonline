import type { Metadata } from "next";
import { SITE_URL } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About RepDex — Independent AI & Tech Reviews",
  description:
    "RepDex is an independent tech and AI tools review publication. Honest reviews for creators, professionals, and businesses in the US, UK, and Dubai.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About RepDex — Independent AI & Tech Reviews",
    description:
      "RepDex is an independent tech and AI tools review publication. Honest reviews for creators, professionals, and businesses in the US, UK, and Dubai.",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RepDex",
  url: SITE_URL,
  description:
    "RepDex is an independent tech and AI tools review publication providing honest reviews, practical guides, and hands-on comparisons for creators and professionals.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <JsonLd data={orgSchema} />
      <h1 className="text-3xl md:text-4xl font-bold mb-8">About RepDex</h1>

      <div className="space-y-5 text-[var(--foreground)] leading-relaxed">
        <h2 className="text-xl font-semibold mt-6">Who We Are</h2>
        <p>
          RepDex is an independent tech and AI tools review publication. We
          started with a simple idea: give creators, professionals, and
          businesses a place to find honest, practical reviews of the tools
          they actually need — without the noise of sponsored rankings or
          affiliate-driven recommendations.
        </p>

        <h2 className="text-xl font-semibold mt-6">What We Cover</h2>
        <p>
          We focus on AI tools, productivity software, tech products, and
          content creation platforms. From AI writing assistants and chatbot
          guides to project management apps and browser extensions, we review
          the tools that help people work smarter and produce better results.
          Every review is based on hands-on testing by our editorial team.
        </p>

        <h2 className="text-xl font-semibold mt-6">Our Editorial Standards</h2>
        <p>
          Independence is the foundation of everything we publish. RepDex does
          not accept sponsored content, paid placements, or biased affiliate
          partnerships. When we recommend a tool, it is because we have tested
          it ourselves and believe it genuinely delivers value. When a tool
          falls short, we say so. Our readers trust us because we prioritise
          accuracy and honesty over revenue.
        </p>

        <h2 className="text-xl font-semibold mt-6">Who We Serve</h2>
        <p>
          Our audience includes content creators, bloggers, freelancers,
          remote workers, small business owners, and professionals across a
          range of industries. We serve readers primarily in the United States,
          the United Kingdom, and Dubai — though our reviews are relevant to
          anyone looking for reliable tools and technology to improve their
          workflow. Whether you are building a personal brand, running a
          business, or simply trying to get more done in less time, RepDex is
          here to help you find the right tools without the guesswork.
        </p>
      </div>
    </div>
  );
}
