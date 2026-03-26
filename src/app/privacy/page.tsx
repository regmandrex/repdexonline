import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — RepDex",
  description: "Privacy Policy for RepDex. Learn how we handle your data.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy — RepDex",
    description: "Privacy Policy for RepDex. Learn how we handle your data.",
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-[var(--muted)] mb-8">
        Last updated: March 1, 2026
      </p>

      <div className="space-y-6 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>
            RepDex (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates
            the website repdex.online. This Privacy Policy explains how we
            collect, use, and protect your information when you visit our
            website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Information We Collect
          </h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <strong>Usage data:</strong> Pages visited, time spent on pages,
              referring URLs, and other standard analytics data.
            </li>
            <li>
              <strong>Device information:</strong> Browser type, operating
              system, screen resolution, and language preferences.
            </li>
            <li>
              <strong>Contact information:</strong> If you contact us through
              our contact form, we collect your name, email address, and
              message content.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Operate, maintain, and improve our website</li>
            <li>Understand how visitors use our site</li>
            <li>Respond to inquiries and feedback</li>
            <li>Prevent abuse and ensure security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Cookies</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            improve your browsing experience and analyze site traffic. You
            can control cookies through your browser settings. Disabling
            cookies may affect certain functionality of the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Third-Party Services</h2>
          <p>
            We may use third-party analytics services (such as Google
            Analytics) to help us understand how visitors use our site.
            These services may collect information about your visits to our
            site and other websites. We do not sell your personal information
            to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p>
            We take reasonable measures to protect the information we collect.
            However, no method of transmission over the Internet or method
            of electronic storage is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">External Links</h2>
          <p>
            Our site may contain links to other websites. We are not
            responsible for the privacy practices of other websites. We
            encourage you to read the privacy policies of any external sites
            you visit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. Your
            continued use of the site after changes are posted constitutes
            your acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact
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
