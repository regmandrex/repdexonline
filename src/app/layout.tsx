import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransitionBar from "@/components/PageTransitionBar";
import { SITE_URL } from "@/lib/posts";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RepDex — Honest AI Tools Reviews for Content Creators",
    template: "%s | RepDex",
  },
  description:
    "Expert, independent reviews of the best AI tools and tech reviews. We test the latest software so you don't have to.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RepDex — Honest AI Tools Reviews for Content Creators",
    description:
      "Cut through the AI hype. We provide honest, field-tested reviews of the best productivity and AI tools for creators and professionals.",
    url: SITE_URL,
    siteName: "RepDex",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RepDex — Honest AI & Tech Tool Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RepDex — Honest AI Tools Reviews for Content Creators",
    description:
      "Expert testing and comparisons of the highest-rated AI tools for 2026. Real reviews, no fluff.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" type="application/rss+xml" title="RepDex RSS Feed" href="/rss.xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <PageTransitionBar />
        </Suspense>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
