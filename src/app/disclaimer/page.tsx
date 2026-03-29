import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — RepDex",
  description:
    "Read the RepDex disclaimer. Information about editorial independence, accuracy, and content usage.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Disclaimer</h1>

      <div className="space-y-5 text-[var(--foreground)] leading-relaxed">
        <p>
          The information provided on RepDex (repdex.online) is for general
          informational purposes only. All reviews and recommendations represent
          the opinions of the RepDex editorial team based on hands-on testing
          and research at the time of publication.
        </p>

        <h2 className="text-xl font-semibold mt-6">Accuracy</h2>
        <p>
          While we make every effort to ensure the accuracy and reliability of
          the information on this site, we make no warranties or representations
          of any kind, express or implied, about the completeness, accuracy,
          reliability, or suitability of the information. Software products and
          AI tools may change their features, pricing, or availability at any
          time.
        </p>

        <h2 className="text-xl font-semibold mt-6">Editorial Independence</h2>
        <p>
          RepDex is an editorially independent publication. Our reviews are
          not influenced by compensation from tool providers. When we
          recommend a product, it is because we believe it delivers genuine
          value based on our testing.
        </p>

        <h2 className="text-xl font-semibold mt-6">External Links</h2>
        <p>
          This site may contain links to external websites. These links are
          provided for convenience and informational purposes only. RepDex
          does not endorse or assume responsibility for the content, privacy
          policies, or practices of any third-party websites.
        </p>

        <h2 className="text-xl font-semibold mt-6">Use of Content</h2>
        <p>
          All content on RepDex is protected by copyright. You may not
          reproduce, distribute, or republish any content from this site
          without prior written permission from RepDex.
        </p>
      </div>
    </div>
  );
}
