import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/posts";

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
    default: "RepDex — Best Free AI Tools Reviews for Content Creators",
    template: "%s",
  },
  description:
    "RepDex is an independent resource for creators and professionals. Honest reviews of AI tools, tech products, and productivity software.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RepDex — Best Free AI Tools Reviews for Content Creators",
    description:
      "RepDex is an independent resource for creators and professionals. Honest reviews of AI tools, tech products, and productivity software.",
    url: SITE_URL,
    siteName: "RepDex",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RepDex — AI & Tech Tools Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RepDex — Best Free AI Tools Reviews for Content Creators",
    description:
      "Honest reviews of AI tools, tech products, and productivity software for creators and professionals.",
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
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
