"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-4 py-3 rounded-xl text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
        aria-label="Email address for newsletter"
      />
      <button
        type="submit"
        className="bg-white text-blue-700 px-7 py-3 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors shadow-lg"
      >
        Subscribe
      </button>
    </form>
  );
}
