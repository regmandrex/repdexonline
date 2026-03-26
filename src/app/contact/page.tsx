import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — RepDex",
  description:
    "Get in touch with RepDex. Questions, feedback, or suggestions — we'd love to hear from you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — RepDex",
    description:
      "Get in touch with RepDex. Questions, feedback, or suggestions — we'd love to hear from you.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-[var(--muted)] mb-8">
        Have a question, feedback, or a suggestion for a tool we should
        review? Drop us a message below or email us directly at{" "}
        <a href="mailto:hello@repdex.online" className="text-[var(--accent)]">
          hello@repdex.online
        </a>
        .
      </p>

      <ContactForm />
    </div>
  );
}
