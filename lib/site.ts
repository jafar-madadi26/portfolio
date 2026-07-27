import { siteConfig } from "@/data/portfolio";
import { buildContactFormEndpoint, isSafeSiteUrl, normalizePhoneNumber } from "@/lib/site-values";

export function resolveSiteUrl(candidate = process.env.NEXT_PUBLIC_SITE_URL): URL {
  return new URL(candidate && isSafeSiteUrl(candidate) ? candidate : siteConfig.url);
}

export function getContactFormEndpoint(
  formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID,
): string | null {
  return buildContactFormEndpoint(formId);
}

export function toTelephoneHref(phone: string): string {
  return `tel:${normalizePhoneNumber(phone)}`;
}
