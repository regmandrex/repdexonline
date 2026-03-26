import Link from "next/link";
import { posts, SITE_URL } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";

const remainingPosts = posts.slice(1, 5);

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RepDex",
  url: SITE_URL,
  description:
    "Honest reviews, practical guides, and hands-on comparisons of AI and tech tools for content creators.",
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
          <p className="text-blue-200 text-sm font-medium uppercase tracking-widest mb-4">
            Your Guide to the Best AI &amp; Tech Tools
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            Discover the Best AI &amp; Tech
            <br className="hidden md:block" /> Tools for Creators
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Honest reviews, practical guides, and hands-on comparisons to help
            you find the right tools for your work.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-white text-blue-700 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-blue-50 hover:no-underline transition-colors shadow-lg"
          >
            Browse Articles
          </Link>
        </div>
      </section>

      {/* Featured Full Article — Post 1 */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <div className="mb-6">
          <Link
            href="/category/ai-tools"
            className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wide"
          >
            AI Tools
          </Link>
          <span className="text-xs text-[var(--muted)] ml-3">Featured Article</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
          <Link
            href="/best-free-ai-tools-for-content-creators"
            className="text-[var(--foreground)] hover:text-blue-600"
          >
            Best Free AI Tools for Content Creators in 2026
          </Link>
        </h2>
        <div className="flex items-center gap-3 text-sm text-[var(--muted)] mb-8">
          <time>March 20, 2026</time>
          <span>·</span>
          <span>8 min read</span>
        </div>

        <div className="[&>p]:mb-4 [&>p]:leading-relaxed [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4 [&>ul]:mb-4 [&>ul]:pl-6 [&>ul>li]:mb-2 [&_a]:text-blue-600 [&_a:hover]:text-blue-800">
          <p>
            The AI tool landscape has changed dramatically over the past two years.
            What used to cost hundreds of dollars a month is now available for free
            — or close to it. For content creators working on tight budgets, that
            shift matters. Whether you run a blog, manage social media accounts, or
            produce video content, there are genuinely useful tools you can start
            using today without paying anything upfront.
          </p>

          <p>
            I spent the last few weeks testing dozens of tools that market
            themselves as &quot;free&quot; and narrowed the list down to the ones
            that actually deliver. Some have generous free tiers. Others are fully
            free with optional upgrades. A couple are open source. What they share
            is that they solve real problems for people who create content for a
            living.
          </p>

          <h3>Writing and Text Generation</h3>

          <p>
            Let&apos;s start with the most obvious category. If you write blog
            posts, newsletters, or social content, an{" "}
            <a
              href="https://openai.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI writing assistant
            </a>{" "}
            can save you hours every week. ChatGPT remains the most popular option
            here, and its free tier is surprisingly capable for drafting outlines,
            rewriting paragraphs, and brainstorming headlines.
          </p>

          <p>
            Google&apos;s Gemini has caught up fast, especially for research-heavy
            writing. It pulls from recent web data, which is genuinely helpful when
            you&apos;re writing about current events or trending topics. Claude by
            Anthropic deserves a mention too — its free tier handles longer
            documents well, and many writers prefer its more natural tone. You can
            read our detailed{" "}
            <Link href="/chatgpt-vs-gemini-vs-claude-best-ai-writing">
              comparison of ChatGPT, Gemini, and Claude
            </Link>{" "}
            for a closer look.
          </p>

          <p>
            Beyond the big three, tools like Rytr and Copy.ai still offer free
            plans that work well enough for shorter content. They won&apos;t
            replace a dedicated writing workflow, but they&apos;re handy for
            knocking out product descriptions or social captions in a hurry.
          </p>

          <h3>Image Generation and Design</h3>

          <p>
            Visual content is non-negotiable for most creators. Canva&apos;s free
            plan now includes a basic AI image generator, which is enough for blog
            headers and social graphics. It won&apos;t produce photo-realistic
            results, but for illustrations and simple compositions, it does the
            job.
          </p>

          <p>
            Microsoft Designer (formerly Bing Image Creator) runs on DALL-E and
            gives you a daily allotment of free generations. The quality is
            consistently good, and you can use the images commercially. For
            creators who need custom visuals but can&apos;t justify a Midjourney
            subscription, this is the one I recommend most.
          </p>

          <p>
            Leonardo.ai is another solid pick. The free plan gives you around 150
            credits per day, which is enough for 15-30 images depending on the
            settings. The community models on Leonardo produce some genuinely
            impressive results, and the UI is intuitive even if you&apos;ve never
            used an image generator before.
          </p>

          <h3>Content Cleanup and Editing</h3>

          <p>
            This is a category that a lot of creators overlook, and it&apos;s
            actually one of the most useful. If you use AI to draft content — and
            most of us do at this point — the output usually needs cleanup before
            it&apos;s ready to publish. There are{" "}
            <a
              href="https://gptcleanuptools.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              free AI tools
            </a>{" "}
            specifically built for stripping out the hidden formatting artifacts
            and odd characters that AI-generated text tends to carry. It&apos;s a
            small step that makes a noticeable difference in the quality of your
            final output.
          </p>

          <p>
            Grammarly&apos;s free tier handles basic grammar and spelling, but
            it&apos;s their tone detection that I find most useful for editorial
            work. Hemingway Editor is completely free and does one thing well: it
            highlights overly complex sentences and passive voice. Running AI
            drafts through Hemingway is a habit worth building. You might also
            want to read our guide on{" "}
            <Link href="/how-to-clean-chatgpt-text-before-publishing">
              cleaning ChatGPT text before publishing
            </Link>{" "}
            for more specific tips.
          </p>

          <h3>Video and Audio Tools</h3>

          <p>
            CapCut remains the best free video editor for short-form content. Its
            AI-powered captions are nearly perfect for English, and auto-editing
            features make it possible to produce polished videos with minimal
            experience. The desktop version is more full-featured, but even the
            mobile app is capable enough for TikTok and Reels.
          </p>

          <p>
            For audio, Descript&apos;s free plan lets you transcribe and edit up to
            an hour of audio per month. The transcription quality is excellent, and
            the ability to edit audio by editing text is genuinely transformative
            if you produce podcasts or voiceovers. ElevenLabs offers a small free
            tier for text-to-speech that sounds remarkably natural.
          </p>

          <h3>Research and Organization</h3>

          <p>
            Perplexity AI has quickly become one of my favorite research tools.
            The free version gives you a solid number of &quot;Pro&quot; searches per day
            and unlimited basic searches. For content research — finding stats,
            checking facts, exploring topics — it&apos;s faster and more useful
            than traditional search. The citations make it easy to verify what
            you find.
          </p>

          <p>
            Notion&apos;s free tier includes their AI assistant, which is useful
            for summarizing notes, generating outlines, and organizing content
            calendars. If you already use Notion for project management, the AI
            features slot right into your existing workflow.
          </p>

          <h3>What to Keep in Mind</h3>

          <p>
            Free tools always come with trade-offs. Usage limits, watermarks,
            fewer features, slower processing — you&apos;ll hit walls eventually.
            The key is knowing which tools give you enough free capacity to be
            genuinely useful and which ones are just glorified demos. Everything on
            this list falls into the first camp.
          </p>

          <p>
            The space is also moving fast. Tools that were paid-only six months ago
            now have free tiers. Features that were premium are becoming standard.
            If you tried a tool last year and dismissed it, it&apos;s worth
            checking again. For the latest developments in how these{" "}
            <a
              href="https://www.forbes.com/ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI content tools
            </a>{" "}
            are evolving, it&apos;s worth following industry coverage to stay
            current.
          </p>

          <p>
            Start with one or two tools that address your biggest bottleneck.
            Don&apos;t try to adopt everything at once. A writing assistant plus a
            cleanup tool plus an image generator covers most content needs, and all
            three can be had for free. That&apos;s a solid foundation to build on.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <hr className="border-[var(--border)]" />
      </div>

      {/* More Articles — remaining 4 posts as cards */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold mb-8">More Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {remainingPosts.map((post) => (
            <article
              key={post.slug}
              className="border border-[var(--border)] rounded-xl p-6 hover:shadow-lg transition-shadow bg-white"
            >
              <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wide">
                {post.category}
              </span>
              <h3 className="text-lg font-semibold mt-3 mb-2">
                <Link
                  href={`/${post.slug}`}
                  className="text-[var(--foreground)] hover:text-blue-600"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-[var(--muted)] pt-3 border-t border-[var(--border)]">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "AI Tools",
                href: "/category/ai-tools",
                desc: "Reviews and roundups of the best AI-powered tools",
                icon: "🤖",
              },
              {
                name: "ChatGPT Tips",
                href: "/category/chatgpt-tips",
                desc: "Prompts, techniques, and guides for ChatGPT",
                icon: "💬",
              },
              {
                name: "Content Creation",
                href: "/category/content-creation",
                desc: "Guides for creating better content faster",
                icon: "✍️",
              },
              {
                name: "Tech",
                href: "/category/tech",
                desc: "Tech reviews, tools, and software guides",
                icon: "💻",
              },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="border border-[var(--border)] rounded-xl p-6 text-center hover:shadow-lg hover:no-underline transition-shadow bg-white group"
              >
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-blue-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-[var(--muted)]">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">About RepDex</h2>
          <p className="text-[var(--muted)] mb-5 leading-relaxed">
            RepDex is an independent resource for creators and professionals
            looking for honest reviews of AI and tech tools. We test tools
            ourselves, write practical guides, and share what actually works —
            no sponsored rankings, no affiliate pressure.
          </p>
          <Link
            href="/about"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Learn more about us &rarr;
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Stay in the Loop</h2>
            <p className="text-sm text-blue-100 mb-6">
              Get our latest reviews and guides delivered to your inbox. No
              spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
