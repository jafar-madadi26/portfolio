import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/data/portfolio";
import { getContactFormEndpoint, resolveSiteUrl, toTelephoneHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jafar Madadi about senior software engineering, backend, full-stack, and software architecture opportunities.",
  alternates: { canonical: new URL("contact", resolveSiteUrl()).toString() },
};

export default function ContactPage() {
  const contactMethods = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: toTelephoneHref(profile.phone) },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jafar-madadi", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "github.com/madadi-dev", href: profile.github },
  ] as const;

  return (
    <section className="site-container page-section">
      <div className="mx-auto max-w-5xl">
        <div className="badge"><Mail aria-hidden="true" size={14} /> Start a conversation</div>
        <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s build a <span className="gradient-text">dependable system.</span></h1>
        <p className="section-copy text-lg">I am open to senior software engineering, backend, full-stack, and architecture opportunities, including relocation and remote collaboration.</p>

        <div className="mt-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-4">
            {contactMethods.map(({ icon: Icon, ...item }) => {
              const external = item.href.startsWith("http");
              return (
                <a key={item.label} href={item.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="soft-card flex min-w-0 items-center gap-4 p-5">
                  <span className="rounded-lg bg-blue-500/10 p-3 text-blue-500"><Icon aria-hidden="true" size={20} /></span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</span>
                    <span className="mt-1 block break-words text-sm font-medium">{item.value}</span>
                  </span>
                </a>
              );
            })}
            <div className="soft-card flex items-start gap-4 p-5">
              <span className="rounded-lg bg-purple-500/10 p-3 text-purple-500"><MapPin aria-hidden="true" size={20} /></span>
              <div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Location</p><p className="mt-1 text-sm font-medium">{profile.location}</p><p className="mt-1 text-sm text-muted-foreground">{profile.availability}</p></div>
            </div>
          </div>

          <ContactForm endpoint={getContactFormEndpoint()} />
        </div>
      </div>
    </section>
  );
}
