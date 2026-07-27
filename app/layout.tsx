import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import ContactCta from "@/components/contact-cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { profile, siteConfig, skillGroups } from "@/data/portfolio";
import { resolveSiteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const siteUrl = resolveSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: siteConfig.title, template: `%s | ${profile.name}` },
  description: siteConfig.description,
  applicationName: `${profile.name} Portfolio`,
  keywords: ["Jafar Madadi", "Senior Software Engineer", "Software Architect", "Full-Stack Developer", "Laravel", "Node.js", "React", "Enterprise Systems", "REST APIs", "Microservices"],
  authors: [{ name: profile.name, url: siteUrl.toString() }],
  creator: profile.name,
  alternates: { canonical: siteUrl.toString() },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl.toString(),
    siteName: `${profile.name} Portfolio`,
    type: "profile",
    locale: siteConfig.locale,
    images: [{ url: new URL("og.png", siteUrl).toString(), width: 1732, height: 909, alt: `${profile.name} - ${profile.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [new URL("og.png", siteUrl).toString()],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070b17" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl.toString(),
    image: new URL("jafar-madadi-headshot.jpg", siteUrl).toString(),
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: { "@type": "PostalAddress", addressLocality: "Kabul", addressCountry: "AF" },
    sameAs: [profile.linkedin, profile.github, profile.youtube],
    knowsAbout: skillGroups.flatMap((group) => group.skills),
    worksFor: { "@type": "Organization", name: "Afghan Telecom Corporation" },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <ThemeProvider>
          <div className="site-grid min-h-screen">
            <Header />
            <main id="main-content" className="pt-20" tabIndex={-1}>{children}</main>
            <div className="site-container"><ContactCta /></div>
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
