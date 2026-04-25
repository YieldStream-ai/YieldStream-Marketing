# YieldStream Marketing — Claude Instructions

This is the YieldStream marketing site (Next.js). For all design decisions — colors, typography, components, spacing, tokens, marketing surface rules — refer to **[DESIGN.md](./DESIGN.md)**.

---

## Stack

- **Next.js** (App Router), TypeScript, SCSS modules
- **Styling**: BEM + SCSS for all feature components. Tailwind is installed only for `shadcn/ui` primitives inside `src/components/ui/` — never use Tailwind in feature components.
- **Fonts**: Inter Variable, Source Serif 4, JetBrains Mono — loaded via `next/font/google` in `app/layout.tsx`

## Token Source of Truth

| File | Purpose |
|------|---------|
| `app/_variables.scss` | SCSS variables (`$ds-canvas`, `$ds-accent`, etc.) |
| `app/globals.css` | Tailwind directives + CSS custom properties for shadcn |

Tokens use the `$ds-` prefix (e.g. `$ds-canvas`, `$ds-ink-primary`, `$ds-accent`). Feature SCSS files reference these directly as hardcoded hex/rgba values that match the tokens — no `@use` import needed since the values are stable.

## Critical Guardrails

- **No Tailwind in feature components** — BEM + SCSS only. Tailwind is for `src/components/ui/` only.
- **Weight ceiling: 620** — never set `font-weight` above 620. No bold (700+).
- **Serif isolation** — Source Serif 4 only inside `.memo` BEM blocks. Never in chrome, tables, or labels.
- **Tabular nums everywhere** — every number (amounts, IDs, dates, ratios) must have `font-variant-numeric: tabular-nums`.
- **Status colors encode meaning** — `$ds-status-advance/caution/decline` are never decorative. A green element means "advance." Period.
- **No shadows outside overlays** — elevation is tone-based. Shadows only on popovers and modals.
- **Canvas is `#fefefe`** — never hardcode `#ffffff` as the page background. Use `$ds-canvas`.
- **Accent is `#1f2937`** — never use teal (`#047987`), legacy navy (`#1b3a5f`), or any legacy green as the UI accent color.

## File Conventions

- Feature component files: `.tsx` extension (never `.jsx`)
- SCSS: one `styles.scss` per component directory, BEM-namespaced
- Animations: framer-motion, `AnimatePresence` with `mode="wait"` for step transitions
