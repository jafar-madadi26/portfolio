"use client";

import { Check, Copy, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/portfolio";

type CopyState = "idle" | "copied" | "error";

export default function ContactCta() {
  const pathname = usePathname();
  const [copyState, setCopyState] = useState<CopyState>("idle");

  if (pathname === "/contact") return null;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    window.setTimeout(() => setCopyState("idle"), 2000);
  };

  return (
    <section className="contact-panel" aria-labelledby="contact-cta-title">
      <div>
        <p className="eyebrow">Open to senior engineering opportunities</p>
        <h2 id="contact-cta-title" className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s build something dependable.</h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          Have a role, system, or product challenge that fits my experience? I&apos;d be glad to hear about it.
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 lg:items-end">
        <a href={`mailto:${profile.email}`} className="primary-button"><Mail aria-hidden="true" size={17} /> Contact me</a>
        <button type="button" className="copy-button" onClick={copyEmail}>
          {copyState === "copied" ? <Check aria-hidden="true" size={15} /> : <Copy aria-hidden="true" size={15} />}
          {copyState === "copied" ? "Email copied" : copyState === "error" ? "Copy unavailable" : "Copy email"}
        </button>
        <p className="sr-only" aria-live="polite">{copyState === "copied" ? "Email address copied to clipboard." : copyState === "error" ? "Could not copy the email address." : ""}</p>
      </div>
    </section>
  );
}
