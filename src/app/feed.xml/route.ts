import { posts, SITE_URL, AUTHOR } from "@/lib/posts";

export async function GET() {
  const items = posts
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
    <managingEditor>hello@repdex.online (${AUTHOR})</managingEditor>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
