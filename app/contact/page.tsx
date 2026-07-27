import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/data/portfolio";
import { getContactFormEndpoint, resolveSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jafar Madadi about senior software engineering, backend, full-stack, and software architecture opportunities.",
  alternates: { canonical: new URL("contact", resolveSiteUrl()).toString() },
};

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Github, label: "GitHub", href: profile.github },
] as const;

export default function ContactPage() {
  return (
    <section className="site-container py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Let&apos;s Work Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-foreground/60">
            Have a project or role in mind? I&apos;m always open to discussing dependable systems, creative ideas, and opportunities where I can contribute.
          </p>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <section className="rounded-2xl bg-blue-500/5 p-6 backdrop-blur-sm sm:p-8" aria-labelledby="get-in-touch-title">
              <h2 id="get-in-touch-title" className="text-2xl font-semibold">Get in Touch</h2>
              <a href="#contact-form" className="group mt-6 flex min-h-20 items-center gap-4 rounded-xl bg-background/50 p-4 hover:bg-background/80">
                <span className="rounded-lg bg-blue-500/10 p-3 text-blue-500 transition-transform group-hover:scale-110">
                  <Mail aria-hidden="true" size={20} />
                </span>
                <span>
                  <span className="block text-sm text-foreground/60">Let&apos;s Connect</span>
                  <span className="block font-medium transition-colors group-hover:text-blue-500">Ready to discuss your next project?</span>
                </span>
              </a>
              <p className="mt-6 text-sm leading-6 text-foreground/60">
                Whether you have a project in mind or want to discuss software architecture, full-stack engineering, APIs, or enterprise systems, I&apos;d be glad to hear from you.
              </p>
            </section>

            <section className="rounded-2xl bg-blue-500/5 p-6 backdrop-blur-sm sm:p-8" aria-labelledby="social-links-title">
              <h2 id="social-links-title" className="text-2xl font-semibold">Connect with Me</h2>
              <div className="mt-6 flex gap-4">
                {socialLinks.map(({ icon: Icon, ...social }) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-28 flex-1 flex-col items-center justify-center gap-2 rounded-xl bg-background/50 p-4 text-blue-500 hover:scale-[1.02] hover:bg-background/80 active:scale-[0.98]"
                  >
                    <span className="rounded-lg bg-blue-500/10 p-3 transition-transform group-hover:scale-110">
                      <Icon aria-hidden="true" size={20} />
                    </span>
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </section>
          </div>

          <ContactForm endpoint={getContactFormEndpoint()} />
        </div>
      </div>
    </section>
  );
}
