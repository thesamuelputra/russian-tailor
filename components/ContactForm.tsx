"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * The billhead form: styled after a Victorian trade billhead, inputs sitting on
 * ledger rules. Composes an email in the visitor's own mail app; no message
 * ever touches a server. A post-submit fallback covers machines with no mail
 * client configured.
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
    "w-full border-0 border-b-2 border-ink-soft/50 bg-transparent px-1 py-2 font-serif text-ink placeholder:text-ink-soft/50 focus:border-ledger-red focus:outline-none focus:ring-0";

  return (
    <form onSubmit={handleSubmit} className="on-paper">
      {/* billhead header */}
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-ink/60 pb-3">
        <p className="tape text-ink">To: The Russian Tailor · I. Sitonin</p>
        <p className="font-serif text-sm italic text-ink-soft">
          Victoria, B.C., ______ 20__
        </p>
      </div>

      <div className="mt-8 space-y-7">
        <div>
          <label htmlFor="contact-name" className="tape block text-ink-soft">
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
          <label htmlFor="contact-email" className="tape block text-ink-soft">
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
          <label htmlFor="contact-message" className="tape block text-ink-soft">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${field} resize-y leading-[2.4rem]`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="tape mt-9 bg-ledger-red px-7 py-3.5 text-sm text-paper transition-colors hover:bg-ink active:scale-[0.97]"
      >
        Send message
      </button>

      {attempted ? (
        <div
          className="mt-5 border border-ink/20 bg-paper-deep px-4 py-3"
          role="status"
        >
          <p className="font-serif text-sm text-ink">
            Your email app should have opened with the message ready. If it
            didn&rsquo;t, write to{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium underline decoration-ledger-red/40 underline-offset-4"
            >
              {site.email}
            </a>{" "}
            <button
              type="button"
              onClick={copyAddress}
              className="tape ml-1 border border-ink/30 px-2 py-1 text-[0.7rem] text-ink-soft hover:border-ink hover:text-ink"
            >
              {copied ? "Copied" : "Copy address"}
            </button>{" "}
            or call{" "}
            <a
              href={site.phoneHref}
              className="font-medium underline decoration-ledger-red/40 underline-offset-4"
            >
              {site.phone}
            </a>
            .
          </p>
        </div>
      ) : (
        <p className="mt-5 font-serif text-sm italic text-ink-soft">
          This opens your email app with the message ready to send to{" "}
          {site.email}. Prefer the phone? Call{" "}
          <a
            href={site.phoneHref}
            className="font-medium not-italic text-ink underline decoration-ledger-red/40 underline-offset-4"
          >
            {site.phone}
          </a>
          .
        </p>
      )}
    </form>
  );
}
