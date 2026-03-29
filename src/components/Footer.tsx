import Link from "next/link";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "AI Tools", href: "/category/ai-tools" },
  { label: "Tech", href: "/category/tech" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="hover:no-underline">
              <span className="text-lg font-extrabold text-[var(--foreground)]">
                RepDex
              </span>
            </Link>
            <p className="text-sm text-[var(--muted)] mt-1">
              Honest Reviews. Real Tools. No Fluff.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:no-underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-[var(--foreground)] mb-3">
              Legal
            </h4>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:no-underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] text-xs text-[var(--muted)]">
          &copy; 2026 RepDex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
