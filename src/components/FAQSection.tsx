"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is RepDex?",
    answer:
      "RepDex is an independent review publication that tests and compares AI tools, productivity software, and tech products for content creators and professionals. We provide honest, hands-on reviews with no sponsored placements or affiliate bias.",
  },
  {
    question: "Are RepDex reviews really independent?",
    answer:
      "Yes. We take zero sponsored placements or pay-for-review deals. Every tool on our site earned its spot through real-world testing by our editorial team. If a tool doesn't perform, we say so.",
  },
  {
    question: "What types of AI tools does RepDex review?",
    answer:
      "We review AI writing assistants, image generators, chatbots like ChatGPT, content creation tools, SEO software, video editors, productivity apps, and other emerging AI-powered tools that help creators and professionals work smarter.",
  },
  {
    question: "How does RepDex test and rate tools?",
    answer:
      "Our editorial team uses every tool in real projects — writing content, building workflows, and running day-to-day tasks. We evaluate based on ease of use, output quality, pricing, integrations, and whether the tool genuinely saves time compared to alternatives.",
  },
  {
    question: "Is RepDex free to use?",
    answer:
      "Absolutely. All reviews, guides, and comparisons on RepDex are free to read. We believe everyone should have access to honest, unbiased information when choosing tools for their workflow.",
  },
  {
    question: "How often is RepDex updated?",
    answer:
      "We publish new reviews and guides weekly and regularly update existing articles when tools release major updates or pricing changes. Our goal is to keep every review accurate and current.",
  },
  {
    question: "Can I suggest a tool for RepDex to review?",
    answer:
      "Yes! We welcome suggestions from our readers. Visit our Contact page to submit a tool you'd like us to test and review. We prioritize tools that are widely used or gaining traction among creators.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--surface)] border-y border-[var(--border)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Everything you need to know about RepDex and how we review tools.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[var(--border-light)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-[var(--surface)] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[var(--foreground)] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--muted)] shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border-light)]">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
