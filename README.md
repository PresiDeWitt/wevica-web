# Wévica Web

Web pública y landing page de Wévica — Plugin WordPress + Sync Engine para sincronización automática de stock WooCommerce.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Analytics:** Google Analytics 4
- **Chat:** Crisp
- **Pagos:** Lemon Squeezy

## Setup

```bash
pnpm install
```

Copiar variables de entorno:

```bash
cp .env.example .env.local
```

Editar `.env.local` con tus credenciales.

## Desarrollo

```bash
pnpm dev
```

## Producción

```bash
pnpm build
pnpm start
```

## Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID |
| `NEXT_PUBLIC_LS_SE_STARTER` | Checkout Lemon Squeezy para Sync Engine Starter |
| `NEXT_PUBLIC_LS_SE_PRO` | Checkout Lemon Squeezy para Sync Engine Pro |
| `NEXT_PUBLIC_LS_SE_BUSINESS` | Checkout Lemon Squeezy para Sync Engine Business |
| `NEXT_PUBLIC_LS_PLUGIN_BUSINESS_ANNUAL` | Checkout Lemon Squeezy para Plugin Business Anual |
| `NEXT_PUBLIC_LS_PLUGIN_BUSINESS_MONTHLY` | Checkout Lemon Squeezy para Plugin Business Mensual |
| `NEXT_PUBLIC_LS_PLUGIN_AGENCY_ANNUAL` | Checkout Lemon Squeezy para Plugin Agency Anual |
| `NEXT_PUBLIC_LS_PLUGIN_AGENCY_MONTHLY` | Checkout Lemon Squeezy para Plugin Agency Mensual |
| `RESEND_API_KEY` | API key de Resend para notificaciones de newsletter |
| `NOTIFY_EMAIL` | Email de destino para notificaciones |
| `CRISP_WEBSITE_ID` | ID del widget de Crisp Chat |

## Estructura

```
app/
  page.tsx              # Landing page
  pricing/              # Página de precios
  sync-engine/          # Servicio Sync Engine
  blog/                 # Blog (8 artículos)
  docs/                 # Documentación
  contacto/             # Página de contacto
  privacidad/           # Política de privacidad
  terminos/             # Términos y condiciones
  changelog/            # Historial de cambios
  api/subscribe/        # API de newsletter

components/
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  Features.tsx
  PricingTeaser.tsx
  CTABanner.tsx
  NewsletterSection.tsx
  pricing/              # Componentes de precios
```

## Linting

```bash
pnpm lint
```
