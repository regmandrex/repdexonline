import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — RepDex",
  description: "Terms of Use for RepDex. Please read before using our website.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use — RepDex",
    description:
      "Terms of Use for RepDex. Please read before using our website.",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Last updated: March 1, 2026
      </p>

      <div className="space-y-6 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">Acceptance of Terms</h2>
          <p>
            By accessing and using repdex.online (&quot;the Site&quot;), you
            agree to be bound by these Terms of Use. If you do not agree
            with any part of these terms, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Use of Content</h2>
          <p>
            All content published on RepDex is for informational purposes
            only. We make reasonable efforts to ensure accuracy, but we do
            not guarantee that all information is complete, current, or
            error-free. You use the information on this site at your own
            discretion and risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Intellectual Property
          </h2>
          <p>
            All original content on the Site, including text, graphics,
            logos, and design, is the property of RepDex and is protected
            by applicable copyright and intellectual property laws. You may
            not reproduce, distribute, or republish any content from this
            site without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">External Links</h2>
          <p>
            The Site may contain links to third-party websites. These links
            are provided for convenience and informational purposes only.
            RepDex does not endorse or assume responsibility for the content,
            privacy policies, or practices of any third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Disclaimer of Warranties
          </h2>
          <p>
            The Site is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, either express or implied. We
            do not warrant that the Site will be uninterrupted, error-free,
            or free of viruses or other harmful components.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, RepDex shall not be
            liable for any damages arising out of or in connection with
            your use of the Site. This includes, without limitation,
            direct, indirect, incidental, consequential, and punitive
            damages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Changes to These Terms
          </h2>
          <p>
            We reserve the right to modify these Terms of Use at any time.
            Changes will be effective immediately upon posting on the Site.
            Your continued use of the Site following any changes constitutes
            your acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            If you have questions about these Terms of Use, please contact
            us at{" "}
            <a
              href="mailto:hello@repdex.online"
              className="text-[var(--accent)]"
            >
              hello@repdex.online
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
