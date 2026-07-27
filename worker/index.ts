import handler from "vinext/server/app-router-entry";

type HandlerEnvironment = Parameters<typeof handler.fetch>[1];
type HandlerContext = Parameters<typeof handler.fetch>[2];

const securityHeaders = {
  "Cross-Origin-Opener-Policy": "same-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
} as const;

const worker = {
  async fetch(request: Request, env: HandlerEnvironment, context: HandlerContext) {
    const response = await handler.fetch(request, env, context);
    const headers = new Headers(response.headers);

    for (const [name, value] of Object.entries(securityHeaders)) headers.set(name, value);

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
