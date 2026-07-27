const formIdPattern = /^[a-zA-Z0-9_-]+$/;

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

export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}
