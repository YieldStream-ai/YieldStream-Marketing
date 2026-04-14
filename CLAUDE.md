# YieldStream Design System Reference

Read this file in full before creating or editing any component, page, or style. These are hard constraints, not suggestions.

---

## 1. Theme & Atmosphere

YieldStream is **light-mode-primary with a first-class dark mode**. The atmosphere is **paper-precise**: warm off-white canvas (`#FAFAF7`), generous internal whitespace, almost no chrome. Borders are hairline and nearly absent. Shadows are forbidden except on true overlays (popovers, modals). Elevation is communicated through background tone, not depth.

Color is rationed. The interface is achromatic — warm grays and off-white — with **one chromatic accent** (`#1B3A5F`, deep ink blue). Status colors appear *only* on data and only when they encode underwriting meaning.

**Key characteristics:**
- Light-primary, dark-peer. Neither is "the" mode.
- Warm neutrals: `#FAFAF7` canvas, `#1A1A1A` ink
- Inter Variable with `cv11, ss01, ss03` enabled globally
- Tabular numerals (`font-variant-numeric: tabular-nums`) on **every number, everywhere** — non-negotiable
- Source Serif 4 for memo prose only — never in chrome, tables, or buttons
- JetBrains Mono for IDs, hashes, structured data
- One accent: `#1B3A5F`. Hover: `#264F7E`. That is the entire chromatic palette outside of status.
- Status: `#2F7D4F` (advance), `#B8860B` (caution), `#A8321E` (decline) — muted, never neon
- Borders: `rgba(0,0,0,0.06)` light / `rgba(255,255,255,0.07)` dark. Hairline. Often absent.

---

## 2. Color Palette & Roles

### Light Mode (Primary)

**Surfaces**
- `--canvas`: `#FAFAF7`
- `--surface`: `#FFFFFF`
- `--surface-sunken`: `#F4F3EF`
- `--surface-raised`: `#FFFFFF` + `0 1px 2px rgba(20,20,20,0.04)`

**Ink**
- `--ink-primary`: `#1A1A1A`
- `--ink-secondary`: `#3D3D3A`
- `--ink-tertiary`: `#6B6B66`
- `--ink-quaternary`: `#9A9A93`

**Accent**
- `--accent`: `#1B3A5F`
- `--accent-hover`: `#264F7E`
- `--accent-wash`: `#1B3A5F0D` (5% alpha)

**Status (data semantics only — never decoration)**
- `--status-advance`: `#2F7D4F` / wash: `#2F7D4F12`
- `--status-caution`: `#B8860B` / wash: `#B8860B14`
- `--status-decline`: `#A8321E` / wash: `#A8321E10`
- `--status-neutral`: `#6B6B66`

**Borders**
- `--border-hairline`: `rgba(20,20,20,0.06)`
- `--border-standard`: `rgba(20,20,20,0.10)`
- `--border-strong`: `rgba(20,20,20,0.16)`

### Dark Mode (Peer)

- `--canvas`: `#0E0F11`
- `--surface`: `#16181B`
- `--surface-sunken`: `#101113`
- `--surface-raised`: `#1C1E22`
- `--ink-primary`: `#F2F1ED`
- `--ink-secondary`: `#C8C7C2`
- `--ink-tertiary`: `#8A8A84`
- `--ink-quaternary`: `#5E5E58`
- `--accent`: `#6FA3D9`
- `--accent-wash`: `#6FA3D914`
- Status colors lift ~15% in luminance; identical semantics
- `--border-hairline`: `rgba(255,255,255,0.07)`

---

## 3. Typography

### Families
- **UI & Data**: `Inter Variable` — `font-feature-settings: "cv11", "ss01", "ss03", "calt"` always on
- **Editorial**: `Source Serif 4` — **only** in memo body, analyst commentary, deal narrative, and permitted marketing editorial blocks. Never in chrome, tables, or buttons.
- **Mono**: `JetBrains Mono` — IDs, hashes, structured codes

### Weights
Inter at three weights only: **400** (read), **520** (UI emphasis, labels, table headers), **620** (KPIs, deal names, section headings). **700+ is forbidden.** 620 is the ceiling.

### Type Scale (App)

| Role | Family | Size | Weight | Line | Tracking |
|---|---|---|---|---|---|
| KPI Display | Inter | 36px | 620 | 1.05 | -0.72px |
| Deal Name | Inter | 24px | 620 | 1.20 | -0.36px |
| Section Heading | Inter | 18px | 620 | 1.30 | -0.18px |
| Memo H1 | Source Serif | 28px | 600 | 1.25 | -0.28px |
| Memo H2 | Source Serif | 20px | 600 | 1.35 | -0.10px |
| Memo Body | Source Serif | 16px | 400 | 1.65 | 0 |
| Body | Inter | 14px | 400 | 1.55 | 0 |
| Body Emphasis | Inter | 14px | 520 | 1.55 | 0 |
| Table Cell | Inter | 13px | 400 | 1.45 | 0 |
| Table Cell Numeric | Inter (tabular) | 13px | 520 | 1.45 | 0 |
| Table Header | Inter | 11px | 520 | 1.40 | 0.4px (uppercase) |
| Label / Field | Inter | 12px | 520 | 1.40 | 0 |
| Caption / Meta | Inter | 12px | 400 | 1.45 | 0 |
| Mono ID | JetBrains Mono | 12px | 400 | 1.40 | 0 |

### Type Scale (Marketing Only)

| Role | Family | Size | Weight | Line | Tracking |
|---|---|---|---|---|---|
| Marketing Display XL | Inter | 80px | 620 | 1.00 | -2.00px |
| Marketing Display | Inter | 64px | 620 | 1.02 | -1.50px |
| Marketing Section | Inter | 40px | 620 | 1.15 | -0.80px |
| Marketing Subsection | Inter | 28px | 620 | 1.25 | -0.42px |
| Marketing Lead (serif) | Source Serif | 22px | 400 | 1.55 | -0.22px |
| Marketing Body | Inter | 18px | 400 | 1.60 | 0 |
| Marketing Caption | Inter | 14px | 520 | 1.50 | 0 |

---

## 4. Components

### Pills
- Padding: `2px 8px`, radius: `4px` (not full-pill)
- Font: 12px / 520 / tabular if numeric
- Background: `--status-*-wash`; text: `--status-*`; no border, no shadow, no gradient
- Optional 6px leading dot for status pills

### Buttons
- **Primary**: `--accent` bg, white text, `6px` radius, `8px 14px` padding, 13px/520. Hover: `--accent-hover`. No shadow.
- **Secondary**: transparent, `1px solid --border-standard`, `--ink-primary` text. Hover: `rgba(20,20,20,0.04)`.
- **Ghost**: transparent, no border, `--ink-secondary` text. Hover: `rgba(20,20,20,0.04)`.
- **Destructive**: `--status-decline` bg, white text. Confirmation dialogs only. Never inline.
- Marketing may use `lg` size (14px / 10px 18px padding) for hero CTAs only.

### Inputs
- Background `--surface`, `1px solid --border-standard`, `5px` radius, `8px 12px`, 13px/400
- Focus: `border-color --accent`, `box-shadow: 0 0 0 3px --accent-wash`. No animation >120ms.
- Label above: 12px/520/`--ink-tertiary`, 6px gap

### Tables
- Row height: 36px (dense) or 44px (comfortable)
- Header: `--ink-tertiary`, 11px/520/uppercase/0.4px tracking
- Row borders: `1px solid --border-hairline`
- Hover: `--surface-sunken`; selected: `--accent-wash` + 2px left bar
- Numeric columns: right-aligned, tabular-nums, 520 weight

### KPI Card
- `--surface` bg, no border, 16px padding, 8px radius
- Label: 11px/520/uppercase/`--ink-tertiary`
- Value: 36px/620/tabular-nums/`--ink-primary`
- Delta: 12px/520, status color + arrow glyph

### Side Rail
- 240px, `--surface-sunken` bg, no border-right
- Nav items: 13px/520, 8px vertical/12px horizontal padding
- Active: `--accent-wash` bg, `--accent` text, 2px left bar
- Hover: `rgba(20,20,20,0.03)`

### Risk Flag
- Triangle glyph in `--status-caution` or `--status-decline`, 12px
- Hover/click: popover with rule, threshold, and "dismiss with reason"
- Never blocks interaction

### Memo Block
- Max-width: 680px
- Source Serif 4 throughout
- 16px/1.65 body; H2: 20px/600, 32px top margin
- Pull quotes: 4px left border in `--accent` or `--status-caution`, 16px left padding, italic
- Inline numbers still use Inter tabular-nums

---

## 5. Layout

- Base unit: **4px**. Scale: 4, 8, 12, 16, 20, 24, 32, 48, 64
- Side rail: 240px fixed
- Detail rail: 360px collapsible
- Max content width inside record panel: 1080px
- Section rhythm: 32px between sections, 16px between subsections, 8px between related fields

---

## 6. Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 Canvas | `--canvas`, no border | Page background |
| 1 Sunken | `--surface-sunken` | Side rail, table alternates |
| 2 Surface | `--surface` | Record panel, KPI card |
| 3 Raised | `--surface` + `0 1px 2px rgba(20,20,20,0.04), 0 0 0 1px var(--border-hairline)` | Popovers, dropdowns |
| 4 Overlay | `--surface` + `0 12px 32px rgba(20,20,20,0.12), 0 0 0 1px var(--border-standard)` | Modals, command palette |

---

## 7. Marketing Surface

Marketing and app share one design system, one set of tokens, and one set of primitive components. A prospect who sees the marketing site then logs in should feel zero seam.

### What stays locked (do not diverge)
- All tokens — canvas, surface, ink, accent, status, border
- Type families: Inter, Source Serif 4, JetBrains Mono — no marketing-exclusive display faces
- Font features and tabular-nums — apply everywhere including hero headlines
- Weight ceiling: 620. No 700+ for marketing headlines.
- Primitive components (`<Button>`, `<Pill>`, `<Status>`, `<DataCell>`, `<Input>`) — imported from shared package; never forked
- No drop shadows on buttons. Ever.

### What marketing may compose differently

**Vertical rhythm**
- App: 32px between major sections
- Marketing: 96px mobile / 128px desktop between sections; hero: 160px vertical padding

**Container widths**
- Hero and feature grid: `max-width: 1200px`
- Prose sections: `max-width: 680px`
- Product screenshot sections: up to `max-width: 1440px`
- Nav and footer: full-width, content in 1200px container

**Serif permissions (expanded on marketing)**
- `<Manifesto>` — "why we built this" editorial block
- `<PullQuote>` — 28–36px serif quotes as section transitions
- `<TestimonialBody>` — customer quote bodies (attribution stays Inter)
- `<MarketingLead>` — 22px serif paragraph after a section heading, used sparingly
- Everything else (nav, buttons, feature cards, CTAs, footer, pricing, forms) is still Inter

**Surface**
- Same `--canvas` as app — no warmer or brighter marketing canvas
- Alternating `--canvas` / `--surface` section bands for scroll rhythm (app never does this)

**Product screenshots**
- No fake browser chrome, device frames, or gradient halos
- `1px solid var(--border-standard)` border + 8px radius only
- Data must be plausible, not stylized

### Marketing-only components (do not add to shared package)
`<Hero>`, `<FeatureGrid>`, `<PricingTable>`, `<TestimonialBlock>`, `<Manifesto>`, `<CtaBanner>`, `<MarketingNav>`, `<MarketingFooter>` — these compose shared primitives into marketing layouts; they never reinvent primitives.

### Navigation
- Marketing: horizontal top nav, 64px height
- `--canvas` at rest; `--surface` + `border-bottom: 1px solid var(--border-hairline)` on scroll
- Nav links: 14px/520/`--ink-secondary`, hover to `--ink-primary`
- Primary CTA uses shared `<Button variant="primary">`

### Marketing responsive

| Name | Width | Hero | Section padding |
|---|---|---|---|
| Mobile | <640px | 48px | 72px |
| Tablet | 640–1024px | 64px | 96px |
| Desktop | 1024–1440px | 80px | 128px |
| Wide | >1440px | 80px | content max-width caps |

---

## 8. Tailwind Config (extend, don't replace)

```js
colors: {
  canvas: 'var(--canvas)',
  surface: { DEFAULT: 'var(--surface)', sunken: 'var(--surface-sunken)', raised: 'var(--surface-raised)' },
  ink: { 1: 'var(--ink-primary)', 2: 'var(--ink-secondary)', 3: 'var(--ink-tertiary)', 4: 'var(--ink-quaternary)' },
  accent: { DEFAULT: 'var(--accent)', hover: 'var(--accent-hover)', wash: 'var(--accent-wash)' },
  advance: { DEFAULT: 'var(--status-advance)', wash: 'var(--status-advance-wash)' },
  caution: { DEFAULT: 'var(--status-caution)', wash: 'var(--status-caution-wash)' },
  decline: { DEFAULT: 'var(--status-decline)', wash: 'var(--status-decline-wash)' },
},
fontFamily: {
  sans: ['Inter Variable', 'system-ui', 'sans-serif'],
  serif: ['Source Serif 4', 'Charter', 'Georgia', 'serif'],
  mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
},
```

## 9. Global CSS Requirements

```css
html { font-feature-settings: "cv11","ss01","ss03","calt"; }
.tabular { font-variant-numeric: tabular-nums; }
```

Apply `.tabular` (or `font-variant-numeric: tabular-nums`) to every numeric element by default in `<DataCell>`.

---

## 10. Component Build Order

Build in this sequence; each unlocks the next:
1. Tokens + dark mode toggle
2. `<Pill>`
3. `<DataCell>` with built-in tabular-nums and right-align
4. `<Table>` using `<DataCell>`
5. `<KpiCard>`
6. `<RecordPanel>` with tab strip
7. `<SideRail>` + `<DetailRail>`
8. `<Memo>` (serif scope, isolated from UI chrome)
9. `<RiskFlag>`
10. `<CommandPalette>`

---

## 11. Critical Guardrails

- **Never** use `#FFFFFF` as the page canvas. `#FAFAF7` is mandatory.
- **Never** use Linear's indigo-violet. The accent is `#1B3A5F`.
- **Never** use full-pill (`border-radius: 9999px`) for status badges. Use `4px`.
- **Never** use font weight 700+. 620 is the ceiling.
- **Never** use serif outside of `<Memo>` (app) or the permitted marketing editorial blocks.
- **Never** use status colors as decoration. Green means "advance." Always.
- **Never** use shadows for elevation outside of true overlays (level 3+).
- **Never** use icons larger than 16px in tables.
- **Never** use pure black shadows — use `rgba(20,20,20,...)`.
- **Always** use `.tsx` extensions, never `.jsx`.
- **Always** apply `tabular-nums` to every number — dates, IDs, percentages, ratios, amounts.
- **Always** right-align numeric table columns.
- **Always** test every component in both light and dark mode before marking done.
- **Always** route status color usage through a `<Status kind="advance|caution|decline">` component, not raw color classes.
- Wrap Source Serif in a `<Memo>` component that scopes the family — never let serif leak into anything else.
- Build `<DataCell numeric>` so it is impossible to render a number without tabular-nums.
- Marketing composes shared primitives — it never reinvents them. If marketing needs a variant, add a prop to the shared primitive.
