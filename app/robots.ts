import type { MetadataRoute } from "next";
import { resolveSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = resolveSiteUrl();

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", baseUrl).toString(),
  };
}
