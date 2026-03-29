"use client";

export default function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you soon.");
      }}
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          className="w-full px-4 py-2.5 border border-[var(--border)] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          className="w-full px-4 py-2.5 border border-[var(--border)] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium mb-1.5">
          Subject
        </label>
        <input
          type="text"
          id="contact-subject"
          name="subject"
          className="w-full px-4 py-2.5 border border-[var(--border)] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-shadow"
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          className="w-full px-4 py-2.5 border border-[var(--border)] rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent resize-y transition-shadow"
          placeholder="Tell us what's on your mind..."
        />
      </div>

      <button
        type="submit"
        className="bg-[var(--accent)] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors shadow-sm hover:shadow-md"
      >
        Send Message
      </button>
    </form>
  );
}
