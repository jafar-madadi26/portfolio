"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/portfolio";

export default function ContactCta() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="py-20 text-center md:py-28">
      <h2 className="text-3xl font-bold md:text-4xl">Like what you see?</h2>
      <h3 className="mt-3 text-2xl font-semibold text-blue-600 dark:text-blue-400 md:text-3xl">Get in touch</h3>
      <p className="mt-8 text-sm text-muted-foreground">Email</p>
      <div className="mt-2 flex items-center justify-center gap-2">
        <a href={`mailto:${profile.email}`} className="text-lg font-medium hover:text-blue-600">{profile.email}</a>
        <button type="button" className="icon-button" onClick={copyEmail} aria-label="Copy email address">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">Connect with me on</p>
      <div className="mt-2 flex justify-center gap-5 text-lg font-medium">
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
      </div>
    </section>
  );
}
