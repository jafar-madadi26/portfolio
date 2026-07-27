const formIdPattern = /^[a-zA-Z0-9_-]+$/;
export const defaultContactFormId = "xbdqwvwy";

export function isSafeSiteUrl(candidate: string): boolean {
  try {
    const url = new URL(candidate);
    return url.protocol === "https:" || url.hostname === "localhost";
  } catch {
    return false;
  }
}

export function buildContactFormEndpoint(formId?: string): string | null {
  if (!formId || !formIdPattern.test(formId)) return null;
  return `https://formspree.io/f/${formId}`;
}

export function resolveContactFormEndpoint(formId?: string): string {
  return buildContactFormEndpoint(formId) ?? `https://formspree.io/f/${defaultContactFormId}`;
}

export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export function normalizeBasePath(candidate?: string): string {
  if (!candidate || candidate === "/") return "";
  const normalized = `/${candidate}`.replace(/\/{2,}/g, "/").replace(/\/$/, "");
  return normalized === "/" || normalized.includes("..") ? "" : normalized;
}

export function withBasePath(path: string, candidate?: string): string {
  const basePath = normalizeBasePath(candidate);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
