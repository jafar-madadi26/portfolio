import type { MetadataRoute } from "next";
import { resolveSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = resolveSiteUrl();

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", baseUrl).toString(),
  };
}
