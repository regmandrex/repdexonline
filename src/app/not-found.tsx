import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — RepDex",
  description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or no longer exists.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 hover:no-underline transition-colors"
        >
          Go to Homepage
        </Link>
        <Link
          href="/blog"
          className="inline-block border border-[var(--border)] text-[var(--foreground)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--surface)] hover:no-underline transition-colors"
        >
          Browse Articles
        </Link>
      </div>
    </div>
  );
}
