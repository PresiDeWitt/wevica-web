import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function generateNonce(): string {
  return btoa(crypto.randomUUID());
}

export function middleware(request: NextRequest) {
  const nonce = generateNonce();
  const isProduction = process.env.NODE_ENV === "production";

  const cspDirectives = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}'${!isProduction ? " 'unsafe-eval'" : ""} https://app.lemonsqueezy.com https://client.crisp.chat https://www.googletagmanager.com`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://app.lemonsqueezy.com https://*.lemonsqueezy.com https://*.crisp.chat wss://*.crisp.chat https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://region1.analytics.google.com",
    "frame-src https://*.lemonsqueezy.com https://client.crisp.chat",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ];

  if (isProduction) {
    cspDirectives.push("upgrade-insecure-requests");
  }

  const csp = cspDirectives.join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  // In local development (especially via LAN IP), strict security headers can
  // break HMR, third-party embeds, or mixed-origin script behavior.
  if (!isProduction) {
    return response;
  }

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon|opengraph-image|sitemap|robots|og-image|\\.well-known).*)",
  ],
};
