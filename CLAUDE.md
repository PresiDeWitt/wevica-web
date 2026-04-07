# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wévica Web** is the public marketing/landing site for the Wévica ecosystem (Stock Sync Pro plugin + Sync Engine SaaS). Built with Next.js App Router, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Commands

```bash
pnpm install        # install dependencies
pnpm dev            # local dev server
pnpm build          # production build
pnpm start          # start production server
pnpm lint           # ESLint
```

## Architecture

### App Router Structure

```
app/
  layout.tsx            # Root layout — loads GA4, Crisp Chat, CookieBanner, Navbar, Footer
  page.tsx              # Landing page (assembles section components)
  pricing/page.tsx      # Pricing page
  sync-engine/          # Sync Engine product page
  blog/                 # 8 static blog articles
  docs/                 # Documentation pages
  changelog/            # Release history
  contacto/             # Contact page
  api/subscribe/route.ts # Newsletter subscription endpoint

middleware.ts           # CSP headers, security headers (only active in production)
```

### Key Design Decisions

**CSP via Middleware:** `middleware.ts` generates a per-request nonce and sets strict Content-Security-Policy headers in production. In development, security headers are intentionally skipped to avoid breaking HMR. Scripts that need to run inline must receive the `nonce` forwarded via the `x-nonce` request header.

**Newsletter API (`/api/subscribe`):** Rate-limited via Upstash Redis (5 req/IP/hour). Falls back gracefully if `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN` are not set. CORS restricted to `stocksync.es` and verified Vercel preview URLs only.

**Lemon Squeezy Checkout:** Checkout URLs are purely `NEXT_PUBLIC_LS_*` env vars — no server-side Lemon Squeezy SDK. Clicking a pricing CTA opens the Lemon Squeezy overlay directly.

**No CMS:** All blog and docs content is static TypeScript/TSX — no headless CMS, no MDX compilation at runtime.

## Environment Variables

Copy `.env.example` → `.env.local`. Required for full local functionality:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID |
| `NEXT_PUBLIC_LS_*` | Lemon Squeezy checkout URLs per plan |
| `RESEND_API_KEY` | Resend — newsletter confirmation emails |
| `NOTIFY_EMAIL` | Destination for newsletter signup notifications |
| `CRISP_WEBSITE_ID` | Crisp live chat widget |
| `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` | Rate limiting on `/api/subscribe` |

## Commit Convention

Every commit must end with:

```
Co-Authored-By: PresiDeWitt <alexchaconortega@gmail.com>
```
