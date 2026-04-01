import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact RepDex — Get in Touch With Our Team",
  description:
    "Have a question or want to suggest a tool for review? Contact the RepDex editorial team. We'd love to hear from you.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact RepDex — Get in Touch With Our Team",
    description:
      "Have a question or want to suggest a tool for review? Contact the RepDex editorial team.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-[var(--muted)] mb-4 leading-relaxed">
        Have a question or want to suggest a tool for review? We&apos;d love to
        hear from you. Fill out the form below and our team will get back to
        you as soon as possible.
      </p>
      <p className="text-sm text-[var(--muted)] mb-8">
        Or email us directly at{" "}
        <a
          href="mailto:onlinerepdex@gmail.com"
          className="text-[var(--accent)] font-medium hover:underline"
        >
          onlinerepdex@gmail.com
        </a>
      </p>

      <ContactForm />
    </div>
  );
}
