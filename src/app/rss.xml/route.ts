import { posts, SITE_URL, AUTHOR } from "@/lib/posts";

export async function GET() {
  const now = new Date().toUTCString();

  const staticPages = [
    { title: "RepDex — Best Free AI Tools Reviews for Content Creators", url: SITE_URL, description: "Expert, independent reviews of the best AI tools and tech reviews. We test the latest software so you don't have to." },
    { title: "Blog — AI Tools, Tech & Content Creation Reviews", url: `${SITE_URL}/blog`, description: "Browse all articles on AI tools, tech reviews, productivity tips, and content creation guides from RepDex." },
    { title: "AI Tools Reviews & Roundups 2026", url: `${SITE_URL}/category/ai-tools`, description: "Reviews, comparisons, and roundups of the best AI tools for content creators and professionals." },
    { title: "ChatGPT Tips, Tricks & Prompts 2026", url: `${SITE_URL}/category/chatgpt-tips`, description: "Practical tips, prompts, and guides for getting more out of ChatGPT." },
    { title: "Content Creation Tips & AI Tools 2026", url: `${SITE_URL}/category/content-creation`, description: "Guides and tools for creating better content faster, from blogging to social media to video." },
    { title: "Tech Tools & App Reviews 2026", url: `${SITE_URL}/category/tech`, description: "Tech guides, reviews, and how-tos for content creators and professionals." },
    { title: "About RepDex — Independent AI & Tech Reviews", url: `${SITE_URL}/about`, description: "RepDex is an independent tech and AI tools review publication. Honest reviews for creators, professionals, and businesses." },
    { title: "Contact Us — RepDex", url: `${SITE_URL}/contact`, description: "Get in touch with the RepDex editorial team." },
    { title: "Privacy Policy — RepDex", url: `${SITE_URL}/privacy`, description: "RepDex privacy policy." },
    { title: "Terms of Service — RepDex", url: `${SITE_URL}/terms`, description: "RepDex terms of service." },
    { title: "Disclaimer — RepDex", url: `${SITE_URL}/disclaimer`, description: "RepDex disclaimer." },
  ];

  const staticItems = staticPages
    .map(
      (page) => `    <item>
      <title><![CDATA[${page.title}]]></title>
      <link>${page.url}</link>
      <guid isPermaLink="true">${page.url}</guid>
      <description><![CDATA[${page.description}]]></description>
      <pubDate>${now}</pubDate>
    </item>`
    )
    .join("\n");

  const postItems = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.dateISO).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RepDex — Best Free AI Tools Reviews for Content Creators</title>
    <link>${SITE_URL}</link>
    <description>Expert, independent reviews of the best AI tools and tech reviews. We test the latest software so you don't have to.</description>
    <language>en-us</language>
    <managingEditor>onlinerepdex@gmail.com (${AUTHOR})</managingEditor>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${staticItems}
${postItems}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
