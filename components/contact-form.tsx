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

  if (!endpoint) {
    return (
      <div className="soft-card p-7 md:p-8" role="status">
        <h2 className="text-2xl font-semibold">Send a message</h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          The message form is temporarily unavailable. You can still contact me directly by email.
        </p>
        <a href={`mailto:${profile.email}`} className="primary-button mt-6">Email me</a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="soft-card p-7 md:p-8" aria-busy={status === "submitting"}>
      <h2 className="text-2xl font-semibold">Send a message</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">Tell me about the role, project, or system you are working on.</p>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company-website">Leave this field empty</label>
        <input id="company-website" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="form-label" htmlFor="contact-name">Name
          <input id="contact-name" name="name" required autoComplete="name" className="form-input" placeholder="Your name" />
        </label>
        <label className="form-label" htmlFor="contact-email">Email
          <input id="contact-email" name="email" type="email" required autoComplete="email" className="form-input" placeholder="you@example.com" />
        </label>
      </div>
      <label className="form-label mt-5" htmlFor="contact-subject">Subject
        <input id="contact-subject" name="subject" required className="form-input" placeholder="How can I help?" />
      </label>
      <label className="form-label mt-5" htmlFor="contact-message">Message
        <textarea id="contact-message" name="message" required rows={6} className="form-input resize-y" placeholder="Tell me a little about your opportunity or project." />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="primary-button" disabled={status === "submitting"}>
          {status === "submitting" ? <LoaderCircle className="animate-spin" aria-hidden="true" size={17} /> : <Send aria-hidden="true" size={17} />}
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
        <div className="min-h-6 text-sm" aria-live="polite">
          {status === "success" && <p className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400"><CheckCircle2 aria-hidden="true" size={17} /> Message sent. I&apos;ll respond as soon as I can.</p>}
          {status === "error" && <p className="flex items-center gap-2 text-red-700 dark:text-red-400"><AlertCircle aria-hidden="true" size={17} /> Message not sent. Please email me directly.</p>}
        </div>
      </div>
    </form>
  );
}
