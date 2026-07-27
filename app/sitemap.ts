import type { MetadataRoute } from "next";
import { navigation } from "@/data/portfolio";
import { resolveSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = resolveSiteUrl();

  return navigation.map((item) => ({
    url: new URL(item.href === "/" ? "" : item.href.slice(1), baseUrl).toString(),
    lastModified: new Date("2026-07-27"),
    changeFrequency: item.href === "/" ? "monthly" : "yearly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
