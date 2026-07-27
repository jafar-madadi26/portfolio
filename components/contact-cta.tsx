"use client";

import { Check, Copy, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, profile } from "@/data/portfolio";

type CopyState = "idle" | "copied" | "error";

export default function ContactCta() {
  const pathname = usePathname();
  const [copyState, setCopyState] = useState<CopyState>("idle");

  const isKnownRoute = navigation.some((item) => item.href === pathname);
  if (pathname === "/contact" || !isKnownRoute) return null;

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
      <div className="mx-auto max-w-2xl">
        <p className="eyebrow">Open to senior engineering opportunities</p>
        <h2 id="contact-cta-title" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Like what you see?</h2>
        <h3 className="mt-3 text-2xl font-semibold text-blue-600 dark:text-blue-400">Get in touch</h3>
        <p className="mt-5 leading-7 text-muted-foreground">
          Have a role, system, or product challenge that fits my experience? I&apos;d be glad to hear about it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`mailto:${profile.email}`} className="primary-button"><Mail aria-hidden="true" size={17} /> Contact me</a>
          <button type="button" className="copy-button" onClick={copyEmail}>
            {copyState === "copied" ? <Check aria-hidden="true" size={15} /> : <Copy aria-hidden="true" size={15} />}
            {copyState === "copied" ? "Email copied" : copyState === "error" ? "Copy unavailable" : "Copy email"}
          </button>
        </div>
        <p className="sr-only" aria-live="polite">{copyState === "copied" ? "Email address copied to clipboard." : copyState === "error" ? "Could not copy the email address." : ""}</p>
      </div>
    </section>
  );
}
