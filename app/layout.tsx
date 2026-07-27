import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContactCta from "@/components/contact-cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Jafar Madadi | Senior Software Engineer", template: "%s | Jafar Madadi" },
  description: "Portfolio of Jafar Madadi, a senior full-stack and systems development specialist building enterprise software for telecom, banking, and business operations.",
  keywords: ["Jafar Madadi", "Software Engineer", "Laravel", "Node.js", "React", "Enterprise Systems", "REST APIs", "Microservices"],
  authors: [{ name: "Jafar Madadi" }],
  openGraph: {
    title: "Jafar Madadi | Senior Software Engineer",
    description: "Enterprise software, scalable APIs, and workflow automation across telecom and banking.",
    type: "website",
    images: [{ url: "/jafar-madadi-headshot.jpg", width: 900, height: 1200, alt: "Jafar Madadi" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="site-grid min-h-screen">
            <Header />
            <main className="pt-24">{children}</main>
            <div className="site-container"><ContactCta /></div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
