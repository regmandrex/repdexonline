import Link from "next/link";
import { posts, SITE_URL, AUTHOR, getCategorySlug, getCategoryBadgeClass } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";
import NewsletterForm from "@/components/NewsletterForm";
import FAQSection from "@/components/FAQSection";

const featuredPost = posts[0];
const latestPosts = posts.slice(0, 6); // Include all latest posts, including the featured one if it's recent

const categories = [
  {
    name: "AI Tools Reviews",
    href: "/category/ai-tools",
    desc: "In-depth reviews and comparisons of the best AI-powered tools for creators and professionals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.482 2.482c-.636.636-1.497.993-2.396.993H9.078a3.39 3.39 0 01-2.396-.993L4.2 14.5m15.6 0l.402.401a2.25 2.25 0 010 3.182l-2.93 2.93A6.75 6.75 0 0112.513 22.5h-1.026A6.75 6.75 0 016.728 21.013l-2.93-2.93a2.25 2.25 0 010-3.182L4.2 14.5" />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "ChatGPT Guides",
    href: "/category/chatgpt-tips",
    desc: "Practical prompting techniques, tips, and workflows to get the most out of ChatGPT.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Tech Reviews",
    href: "/category/tech",
    desc: "Honest reviews of software, apps, and tech products that help you work smarter.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Productivity Tools",
    href: "/category/content-creation",
    desc: "Tools and strategies to help creators and professionals be more productive every day.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500",
  },
];


const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RepDex",
  url: SITE_URL,
  description:
    "RepDex reviews and compares the best AI and tech tools for creators, professionals, and businesses.",
  publisher: {
    "@type": "Organization",
    name: "RepDex",
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* ===== HERO ===== */}
      <section 
        className="relative overflow-hidden" 
        style={{ background: "linear-gradient(135deg, #1e40af 0%, #2563eb 40%, #3b82f6 70%, #6366f1 100%)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 animate-fade-in-up">
            Find the Best AI and Tech Tools
            <br className="hidden sm:block" /> for Your Workflow
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-1">
            RepDex reviews and compares the tools that actually matter for
            creators, professionals and businesses in 2026
          </p>
          <Link
            href="/blog"
            className="inline-block bg-white text-blue-700 px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-blue-50 hover:no-underline transition-all shadow-lg hover:shadow-xl animate-fade-in-up stagger-2"
          >
            Browse Reviews
          </Link>
        </div>
      </section>

      {/* ===== FEATURED CATEGORIES ===== */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            What We Cover
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Practical reviews and guides across the categories that matter most
            to creators and professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href={cat.href}
              className={`group relative overflow-hidden rounded-xl border border-[var(--border)] p-6 hover:no-underline card-hover bg-white animate-fade-in-up stagger-${i + 1}`}
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${cat.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                {cat.icon}
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {cat.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>


      {/* ===== FEATURED ARTICLE ===== */}
      <section className="bg-[var(--surface-alt)] py-16 md:py-24 border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[var(--border-light)] text-center">
            <Link
              href={`/category/${getCategorySlug(featuredPost.category)}`}
              className={`badge ${getCategoryBadgeClass(featuredPost.category)} mb-6 hover:no-underline inline-block`}
            >
              Featured {featuredPost.category} Article
            </Link>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6 leading-tight tracking-tight">
              <Link
                href={`/${featuredPost.slug}`}
                className="text-[var(--foreground)] hover:text-[var(--accent)] hover:no-underline transition-colors"
              >
                {featuredPost.title}
              </Link>
            </h2>
            <p className="text-[var(--muted)] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-[var(--muted)] mb-8">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[8px] font-bold text-blue-700">RD</span>
                <span className="font-medium">{AUTHOR}</span>
              </div>
              <span>·</span>
              <time className="font-medium">{featuredPost.date}</time>
              <span>·</span>
              <span className="font-medium">{featuredPost.readTime}</span>
            </div>
            <Link
              href={`/${featuredPost.slug}`}
              className="inline-block bg-[var(--accent)] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[var(--accent-hover)] hover:no-underline transition-colors shadow-sm"
            >
              Read Article
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW REPDEX HELPS (Value Proposition) ===== */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 flex items-center justify-center gap-3">
              <span className="w-10 h-1 text-[var(--accent)] bg-[var(--accent)] rounded-full hidden md:block"></span>
              The RepDex Difference
              <span className="w-10 h-1 text-[var(--accent)] bg-[var(--accent)] rounded-full hidden md:block"></span>
            </h2>
            <p className="text-lg text-[var(--muted)] leading-relaxed font-medium">
              RepDex is an independent review publication built on one simple rule: 
              <span className="text-[var(--foreground)]"> We only review tools we actually use.</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Value 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">Real-World Testing</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm px-2">
                We don't just read the landing pages. We build projects, write content, and run tasks using every AI tool we review to see where it actually stumbles.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 border border-indigo-100 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">Editorial Integrity</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm px-2">
                We take zero sponsored placements. If a tool is on our "best" list, it's because it earned its spot through performance, not a payment.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">Global Perspective</h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm px-2">
                Based across the US, UK, and Dubai, our team reviews tools that work globally, ensuring creators everywhere find the best apps for their region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LATEST ARTICLES ===== */}
      <section className="bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
            <Link
              href="/blog"
              className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] hover:no-underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post, i) => (
              <article
                key={post.slug}
                className={`bg-white border border-[var(--border)] rounded-xl overflow-hidden card-hover animate-fade-in-up stagger-${i + 1}`}
              >
                {/* Category gradient header */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`badge ${getCategoryBadgeClass(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 leading-snug">
                    <Link
                      href={`/${post.slug}`}
                      className="text-[var(--foreground)] hover:text-[var(--accent)] hover:no-underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[var(--muted-light)] pt-3 border-t border-[var(--border-light)]">
                    <div className="flex items-center gap-2">
                      <span>{AUTHOR}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <time>{post.date}</time>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNIPPET ===== */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">About RepDex</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            RepDex is an independent tech and AI tools review publication,
            founded to help creators and professionals cut through the noise
            and find tools that genuinely improve their workflow. We review and
            compare AI writing assistants, productivity apps, content creation
            tools, and emerging tech — always based on hands-on testing, never
            on paid placements. Our editorial team is based online, serving
            readers in the US, UK and Dubai. We believe that honest, unbiased
            reviews are the most valuable resource in a market flooded with
            sponsored recommendations. No sponsored content. No affiliate bias.
            Just honest, independent reviews written by people who actually use
            the tools.
          </p>
          <Link
            href="/about"
            className="text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-hover)] hover:no-underline"
          >
            Learn more about us &rarr;
          </Link>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQSection />

      {/* ===== NEWSLETTER ===== */}
      <section style={{ background: "linear-gradient(135deg, #1e40af 0%, #4f46e5 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Get Weekly Tool Recommendations
            </h2>
            <p className="text-sm text-blue-100 mb-8">
              Join thousands of creators who get our best tool reviews
              delivered to their inbox every week.
            </p>
            <NewsletterForm />
            <p className="text-xs text-blue-200 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
