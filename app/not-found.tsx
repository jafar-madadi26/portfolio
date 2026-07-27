import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-container flex min-h-[65vh] items-center justify-center py-20 text-center">
      <div className="max-w-xl">
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">This route doesn&apos;t exist.</h1>
        <p className="mt-5 leading-7 text-muted-foreground">The page may have moved, or the address may be incorrect. Return home to continue exploring my work.</p>
        <Link href="/" className="primary-button mt-8"><ArrowLeft aria-hidden="true" size={17} /> Back to home</Link>
      </div>
    </section>
  );
}
