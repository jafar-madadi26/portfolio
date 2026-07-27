import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="site-container page-section">
      <div className="mx-auto max-w-5xl">
        <div className="badge"><Mail size={14} /> Start a conversation</div>
        <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">Let&apos;s build a <span className="gradient-text">dependable system</span></h1>
        <p className="section-copy text-lg">I am open to senior full-stack, backend, and systems engineering opportunities, including relocation and remote collaboration.</p>

        <div className="mt-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/jafar-madadi", href: profile.linkedin },
              { icon: Github, label: "GitHub", value: "github.com/madadi-dev", href: profile.github },
            ].map(({ icon: Icon, ...item }) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="soft-card flex items-center gap-4 p-5">
                <span className="rounded-lg bg-blue-500/10 p-3 text-blue-500"><Icon size={20} /></span><span><span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.label}</span><span className="mt-1 block text-sm font-medium">{item.value}</span></span>
              </a>
            ))}
            <div className="soft-card flex items-start gap-4 p-5"><span className="rounded-lg bg-purple-500/10 p-3 text-purple-500"><MapPin size={20} /></span><div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Location</p><p className="mt-1 text-sm font-medium">{profile.location}</p></div></div>
          </div>

          <form action="https://formspree.io/f/xbdqwvwy" method="POST" className="soft-card p-7 md:p-8">
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">Tell me about the role, project, or system you are working on.</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">Name<input name="name" required className="form-input" placeholder="Your name" /></label>
              <label className="text-sm font-medium">Email<input name="email" type="email" required className="form-input" placeholder="you@example.com" /></label>
            </div>
            <label className="mt-5 block text-sm font-medium">Subject<input name="subject" required className="form-input" placeholder="How can I help?" /></label>
            <label className="mt-5 block text-sm font-medium">Message<textarea name="message" required rows={6} className="form-input resize-y" placeholder="Tell me a little about your opportunity or project." /></label>
            <button type="submit" className="primary-button mt-6">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
