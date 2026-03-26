import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/posts";

interface Crumb {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav
        aria-label="Breadcrumb"
        className="text-xs text-[var(--muted)] mb-4"
      >
        {allItems.map((item, i) => (
          <span key={item.href}>
            {i > 0 && <span className="mx-1.5">/</span>}
            {i < allItems.length - 1 ? (
              <Link href={item.href} className="hover:text-blue-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--foreground)]">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
