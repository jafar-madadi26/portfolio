const rawBaseUrl = import.meta.env.BASE_URL || '/';

export const appBaseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl : `${rawBaseUrl}/`;

export const routerBasename =
  appBaseUrl === '/' ? '/' : appBaseUrl.replace(/\/$/, '');
