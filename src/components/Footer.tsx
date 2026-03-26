import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-bold text-[var(--foreground)]">RepDex</p>
            <p className="text-sm text-[var(--muted)]">
              Your Guide to the Best AI &amp; Tech Tools
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              Terms of Use
            </Link>
          </nav>
        </div>
        <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--muted)]">
          &copy; {new Date().getFullYear()} RepDex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
