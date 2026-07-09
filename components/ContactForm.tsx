"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Quiet editorial form: hairline-underlined fields, tiny caps labels.
 * Composes an email in the visitor's own mail app; no message ever touches a
 * server. A post-submit fallback covers machines with no mail client set up.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${name || "your website"}`;
    const body = `${message}\n\n– ${name}${email ? ` (${email})` : ""}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setAttempted(true);
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard unavailable; the address is visible as text regardless
    }
  };

  const field =
    "w-full border-0 border-b border-line-strong bg-transparent px-0 py-2.5 text-[0.9375rem] text-ink placeholder:text-ink-faint/60 focus:border-ink transition-colors";

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-8">
        <div>
          <label htmlFor="contact-name" className="caps block text-ink-faint">
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
            className={field}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="caps block text-ink-faint">
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
            className={field}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="caps block text-ink-faint">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${field} resize-y leading-relaxed`}
          />
        </div>
      </div>

      <button type="submit" className="caps btn-line mt-10 cursor-pointer">
        Send message
      </button>

      {attempted ? (
        <div className="mt-6 border border-line bg-bone-deep px-4 py-3" role="status">
          <p className="text-sm leading-relaxed text-ink-mid">
            Your email app should have opened with the message ready. If it
            didn&rsquo;t, write to{" "}
            <a href={`mailto:${site.email}`} className="link-quiet">
              {site.email}
            </a>{" "}
            <button
              type="button"
              onClick={copyAddress}
              className="caps ml-1 cursor-pointer border border-line-strong px-2 py-1 text-[0.6rem] text-ink-faint transition-colors hover:border-ink hover:text-ink"
            >
              {copied ? "Copied" : "Copy address"}
            </button>{" "}
            or call{" "}
            <a href={site.phoneHref} className="link-quiet">
              {site.phone}
            </a>
            .
          </p>
        </div>
      ) : (
        <p className="caption mt-6">
          This opens your email app with the message ready to send to{" "}
          {site.email}. Prefer the phone? Call{" "}
          <a href={site.phoneHref} className="link-quiet">
            {site.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
