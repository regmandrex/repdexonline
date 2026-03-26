"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--border)] bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-[var(--foreground)] hover:no-underline"
        >
          RepDex
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[var(--foreground)]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            Blog
          </Link>
          <Link
            href="/category/ai-tools"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            AI Tools
          </Link>
          <Link
            href="/category/chatgpt-tips"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            ChatGPT Tips
          </Link>
          <Link
            href="/category/content-creation"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            Content Creation
          </Link>
          <Link
            href="/category/tech"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            Tech
          </Link>
          <Link
            href="/about"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[var(--border)] bg-white">
          <div className="flex flex-col px-4 py-3 gap-3 text-sm">
            <Link
              href="/"
              className="text-[var(--foreground)]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-[var(--foreground)]"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/category/ai-tools"
              className="text-[var(--foreground)]"
              onClick={() => setMenuOpen(false)}
            >
              AI Tools
            </Link>
            <Link
              href="/category/chatgpt-tips"
              className="text-[var(--foreground)]"
              onClick={() => setMenuOpen(false)}
            >
              ChatGPT Tips
            </Link>
            <Link
              href="/category/content-creation"
              className="text-[var(--foreground)]"
              onClick={() => setMenuOpen(false)}
            >
              Content Creation
            </Link>
            <Link
              href="/category/tech"
              className="text-[var(--foreground)]"
              onClick={() => setMenuOpen(false)}
            >
              Tech
            </Link>
            <Link
              href="/about"
              className="text-[var(--foreground)]"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[var(--foreground)]"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
