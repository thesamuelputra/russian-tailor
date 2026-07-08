"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Composes an email in the visitor's own mail app — no message ever touches a
 * server, and the shop keeps receiving inquiries at the same address it always has.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${name || "your website"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClasses =
    "w-full border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-thread";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClasses}
        />
      </div>
      <button
        type="submit"
        className="bg-ink px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-thread-deep"
      >
        Send message
      </button>
      <p className="text-sm text-ink-soft">
        This opens your email app with the message ready to send to {site.email}.
        Prefer the phone? Call{" "}
        <a href={site.phoneHref} className="stitch-link font-medium text-ink">
          {site.phone}
        </a>
        .
      </p>
    </form>
  );
}
