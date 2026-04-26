# YieldStream Marketing

> Marketing surface for [YieldStream.ai](https://yieldstream.ai) — submission intelligence for MCA brokers.

Built with **Next.js 15 (App Router)**, **TypeScript**, **SCSS Modules (BEM)**, and a custom design-token system. Deployed on Vercel.

---

## Architecture

```
app/
├── layout.tsx              # Root layout — font loading, global providers
├── page.tsx                # Homepage
├── (routes)/               # Feature pages (pricing, intelligence, etc.)
├── api/                    # Edge API routes (lead capture, checkout)
├── _variables.scss         # Design tokens ($ds-* namespace)
├── _mixins.scss            # Shared SCSS mixins
└── globals.css             # Tailwind base (shadcn only)

components/                 # Feature components (BEM + SCSS)
src/components/ui/          # shadcn/ui primitives (Tailwind-scoped)
```

**Key decisions:**

| Decision | Rationale |
|----------|-----------|
| BEM + SCSS over Tailwind for features | Maintainable at scale; Tailwind confined to `ui/` primitives |
| Design tokens as SCSS variables | Single source of truth, compile-time resolution, no runtime cost |
| Framer Motion for animation | Declarative, layout-aware, `AnimatePresence` for route transitions |
| No global state library | Server Components + local state; no hydration tax |
| MDX for content pages | Non-technical contributors can edit without touching components |

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15, React 19, TypeScript |
| Styling | SCSS Modules (BEM) + design tokens, Tailwind (shadcn only) |
| Animation | Framer Motion 12 |
| 3D | React Three Fiber + Three.js |
| Data Viz | D3.js |
| Payments | Stripe (Elements + server SDK) |
| Content | MDX via `next-mdx-remote` |
| UI Primitives | Radix UI + shadcn/ui |
| Fonts | Inter Variable, Source Serif 4, JetBrains Mono |
| Deploy | Vercel (Edge Runtime) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open **http://localhost:3000**

### Environment Variables

Copy `.env.example` → `.env.local` and provide:

```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

# Supabase (optional — graceful fallback if absent)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Scripts

```bash
npm run dev       # Next.js dev server (Turbopack)
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # ESLint (flat config)
```

## Design System

Tokens live in `app/_variables.scss` under the `$ds-` namespace:

```scss
$ds-canvas:       #fefefe;
$ds-ink-primary:  #1f2937;
$ds-accent:       #1f2937;
```

**Constraints enforced:**
- `font-weight` ceiling at **620** — no bold
- Source Serif 4 restricted to `.memo` blocks
- `tabular-nums` on all numeric data
- Status colors (`advance` / `caution` / `decline`) are semantic, never decorative
- No box-shadows outside overlays — elevation is tone-based

Full spec: [`DESIGN.md`](./DESIGN.md)

## Project Structure

```
.
├── app/                    # Next.js App Router pages + layouts
├── components/             # Feature components (BEM + SCSS)
├── content/                # MDX content files
├── lib/                    # Shared utilities
├── public/                 # Static assets
├── supabase/               # Migration files
└── DESIGN.md               # Design system specification
```

## Deployment

```bash
vercel --prod
```

Production: `yieldstream.ai`
App: `app.yieldstream.ai`

---

## License

Proprietary. All rights reserved.
