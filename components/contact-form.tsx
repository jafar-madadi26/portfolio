"use client";

import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { profile } from "@/data/portfolio";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ endpoint }: { endpoint: string | null }) {
  const [status, setStatus] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) return;

    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Message submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="interactive-card rounded-2xl border border-transparent bg-blue-500/5 p-6 backdrop-blur-sm sm:p-8" aria-labelledby="send-message-title">
      <h2 id="send-message-title" className="text-2xl font-semibold">Send a Message</h2>

      {!endpoint ? (
        <div className="mt-6" role="status">
          <p className="leading-7 text-foreground/60">
            The message form is temporarily unavailable. You can still contact me directly by email.
          </p>
          <a href={`mailto:${profile.email}`} className="primary-button mt-6 w-full">Email me</a>
        </div>
      ) : (
        <form id="contact-form" onSubmit={handleSubmit} className="mt-7 grid gap-4" aria-busy={status === "submitting"}>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company-website">Leave this field empty</label>
            <input id="company-website" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="block text-sm font-medium text-foreground/80" htmlFor="contact-name">
            Your Name
            <input
              id="contact-name"
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              className="form-input h-10 border-blue-500/25 bg-background/40 px-3 py-2 text-base focus:border-blue-500/60"
              placeholder="John Doe"
            />
          </label>

          <label className="block text-sm font-medium text-foreground/80" htmlFor="contact-email">
            Your Email
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="form-input h-10 border-blue-500/25 bg-background/40 px-3 py-2 text-base focus:border-blue-500/60"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm font-medium text-foreground/80" htmlFor="contact-message">
            Your Message
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={5000}
              rows={6}
              className="form-input h-[150px] resize-none border-blue-500/25 bg-background/40 px-3 py-2 text-base focus:border-blue-500/60"
              placeholder="Tell me about your project..."
            />
          </label>

          {status === "success" && <p className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400" aria-live="polite"><CheckCircle2 aria-hidden="true" size={17} /> Message sent! I&apos;ll respond as soon as possible.</p>}
          {status === "error" && <p className="flex items-center gap-2 text-sm text-red-700 dark:text-red-400" aria-live="polite"><AlertCircle aria-hidden="true" size={17} /> Message not sent. Please email me directly.</p>}

          <button type="submit" className="primary-button h-12 w-full text-base" disabled={status === "submitting"}>
            {status === "submitting" ? <><LoaderCircle className="animate-spin" aria-hidden="true" size={17} /> Sending...</> : <>Send Message <Send aria-hidden="true" size={17} /></>}
          </button>
        </form>
      )}
    </section>
  );
}
