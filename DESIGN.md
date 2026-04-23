# YieldStream Design System

> Build instructions and guardrails are in [CLAUDE.md](./CLAUDE.md).

A data-dense underwriting environment for credit and lending professionals. Synthesized from three references: **Linear** (information architecture, density, dark-surface discipline), **Attio** (record-as-object hierarchy, restrained pill system, progressive disclosure), and **Mercury** (financial tone, warmth without softness, calm under density).

The point of YieldStream is judgment, not lookup. Every design decision is evaluated against one question: _does this help an underwriter form an opinion on a deal faster and with more confidence?_

---

## 1. Theme & Atmosphere

YieldStream is **light-mode-primary with a first-class dark mode** — this is the most important departure from Linear. Linear's near-black canvas reads as engineering tooling; an underwriter at a credit desk reading a memo at 9am needs the calm authority of paper, not the focus-mode aesthetic of an IDE. Mercury proves a financial tool can be light, dense, and trustworthy at the same time. Dark mode exists for late-night review sessions and is a peer, not an afterthought.

The atmosphere is **paper-precise**: a near-white canvas (`#fefefe`), generous internal whitespace inside record panels, and almost no chrome. Borders are hairline and nearly absent. Shadows are forbidden except on true overlays (popovers, modals). Elevation is communicated through background tone, not depth.

Color is rationed. The interface is achromatic — warm grays and off-white — with **one chromatic accent** (a deep ink blue, not Linear's indigo-violet, which reads too consumer). Status colors (green, amber, red) appear _only_ on data and only when they encode underwriting meaning. A green pill on a YieldStream screen means something specific about a deal; it is never decoration.

**Key characteristics:**

- Light-primary, dark-peer. Neither is "the" mode.
- Cool neutrals: `#fefefe` canvas, `#111827` ink — clean, crisp, Bloomberg/Linear feel without warmth
- Inter Variable with `cv11, ss01, ss03` enabled globally — `cv11` gives the single-story `a` that reads as financial-document-modern
- Tabular numerals (`font-variant-numeric: tabular-nums`) on **every number, everywhere** — this is non-negotiable for an underwriting tool
- Source Serif 4 for memo prose and long-form narrative sections (the "editorial layer" Attio lacks) — used sparingly, only inside deal memos and analyst notes
- JetBrains Mono for IDs, hashes, and structured data
- One accent: `#1B3A5F` (deep ink blue). Hover `#264F7E`. That is the entire chromatic palette outside of status.
- Status semantics: `#2F7D4F` (advance), `#B8860B` (caution), `#A8321E` (decline) — muted, never neon
- Borders are `rgba(15,23,42,0.06)` light / `rgba(255,255,255,0.07)` dark. Hairline. Often absent in favor of spacing.

---

## 2. Color Palette & Roles

### Light Mode (Primary)

**Surfaces**

- `--canvas`: `#fefefe` — page background. Near-white (not pure white, not cool-tinted).
- `--surface`: `#FFFFFF` — record panels, the "card" that holds a deal
- `--surface-sunken`: `#F3F4F6` — page-level left content rails, table row alternates, recessed section backgrounds
- `--surface-sunken-subtle`: `#F6F7F9` — drop zone hover, input section backgrounds (between surface and sunken)
- `--surface-raised`: `#FFFFFF` + `0 1px 2px rgba(15,23,42,0.04)` — popovers, dropdowns

**Ink (Text)**

- `--ink-primary`: `#111827` — headings, key figures, deal names
- `--ink-secondary`: `#374151` — body text, table cell content
- `--ink-tertiary`: `#6B7280` — labels, metadata, column headers
- `--ink-quaternary`: `#9CA3AF` — placeholders, timestamps, disabled

**Accent (the only chromatic UI color)**

- `--accent`: `#1B3A5F` — primary CTAs, active tab underline, focused field ring, link text
- `--accent-hover`: `#264F7E`
- `--accent-wash`: `#1B3A5F0D` (5% alpha) — selected row background, active nav item

**Status (data semantics only — never decoration)**

- `--status-advance`: `#2F7D4F` — approved, performing, in-bounds
- `--status-advance-wash`: `#2F7D4F12`
- `--status-caution`: `#B8860B` — review, watchlist, marginal
- `--status-caution-wash`: `#B8860B14`
- `--status-decline`: `#A8321E` — declined, default, out-of-bounds
- `--status-decline-wash`: `#A8321E10`
- `--status-neutral`: `#6B7280` — draft, archived, inactive

**Borders & Lines**

- `--border-hairline`: `rgba(15,23,42,0.06)` — default; nearly invisible
- `--border-standard`: `rgba(15,23,42,0.10)` — inputs, prominent containers
- `--border-strong`: `rgba(15,23,42,0.16)` — focused inputs, table headers

### Dark Mode (Peer)

- `--canvas`: `#0E0F11` — slightly warmer than Linear's `#08090A`
- `--surface`: `#16181B`
- `--surface-sunken`: `#101113`
- `--surface-raised`: `#1C1E22`
- `--ink-primary`: `#F2F1ED` (warm white, not Linear's cool `#F7F8F8`)
- `--ink-secondary`: `#C8C7C2`
- `--ink-tertiary`: `#8A8A84`
- `--ink-quaternary`: `#5E5E58`
- `--accent`: `#6FA3D9` (lifted for contrast)
- `--accent-wash`: `#6FA3D914`
- Status colors lift ~15% in luminance; otherwise identical semantics
- `--border-hairline`: `rgba(255,255,255,0.07)`

---

## 3. Typography

### Families

- **UI & Data**: `Inter Variable`, fallback `-apple-system, system-ui, Segoe UI, sans-serif`
  - `font-feature-settings: "cv11", "ss01", "ss03", "calt"`
  - `font-variant-numeric: tabular-nums` on **all numeric content** (table cells, KPIs, IDs, ratios, dates)
- **Editorial**: `Source Serif 4`, fallback `Charter, Georgia, serif` — used **only** in memo body content, analyst commentary, and the deal narrative panel. Never in chrome, never in tables. This is the single most important departure from Linear: the prose layer needs a serif because underwriting memos are documents, not UI.
- **Mono**: `JetBrains Mono`, fallback `ui-monospace, SF Mono, Menlo` — IDs, deal hashes, structured codes, raw payload viewers

### Weights

Inter at three weights only: **400** (read), **520** (UI emphasis, default for labels and table headers), **620** (announce — KPIs, deal names, section headings). Source Serif at **400** body and **600** for memo headings. No bold (700+); 620 is the ceiling.

### Hierarchy

| Role               | Family          | Size | Weight | Line | Tracking          |
| ------------------ | --------------- | ---- | ------ | ---- | ----------------- |
| KPI Display        | Inter           | 36px | 620    | 1.05 | -0.72px           |
| Deal Name          | Inter           | 24px | 620    | 1.20 | -0.36px           |
| Section Heading    | Inter           | 18px | 620    | 1.30 | -0.18px           |
| Memo H1 (serif)    | Source Serif    | 28px | 600    | 1.25 | -0.28px           |
| Memo H2 (serif)    | Source Serif    | 20px | 600    | 1.35 | -0.10px           |
| Memo Body (serif)  | Source Serif    | 16px | 400    | 1.65 | 0                 |
| Body               | Inter           | 14px | 400    | 1.55 | 0                 |
| Body Emphasis      | Inter           | 14px | 520    | 1.55 | 0                 |
| Table Cell         | Inter           | 13px | 400    | 1.45 | 0                 |
| Table Cell Numeric | Inter (tabular) | 13px | 520    | 1.45 | 0                 |
| Table Header       | Inter           | 11px | 520    | 1.40 | 0.4px (uppercase) |
| Label / Field      | Inter           | 12px | 520    | 1.40 | 0                 |
| Caption / Meta     | Inter           | 12px | 400    | 1.45 | 0                 |
| Mono ID            | JetBrains Mono  | 12px | 400    | 1.40 | 0                 |

**Principles**

- 520 is the workhorse weight (analogous to Linear's 510)
- Numbers are _always_ tabular — columns of figures must align on the decimal without effort
- The serif appears only in editorial contexts; mixing it with UI chrome is the cardinal sin
- Table headers are the only place uppercase is permitted, and only at 11px with 0.4px tracking — this is the underwriting-document convention and signals "column label" instantly

---

## 4. Components

### The Record Panel (the central object)

This is the YieldStream equivalent of Attio's company record. A deal is an object; everything you do is in service of evaluating one. The record panel is the main canvas.

- Background `--surface`, no border, sits on `--canvas`
- Top: deal name (24px/620) + status pill + ID (mono) + last-updated meta — single row, baseline-aligned
- Tab strip below: Overview · Financials · Collateral · Memo · Activity. Tab labels 13px/520, active tab underlined `2px solid --accent`, inactive `--ink-tertiary`
- Generous internal padding: 32px horizontal, 24px vertical
- Sections separated by 32px vertical space and a hairline `border-top` — never a heavy divider

### Pills — Three Semantic Types

Pills are the workhorse of state communication and must be quiet. Type does the work; background is barely there. No pill ever has a drop shadow, a gradient, or animates on hover unless interactive.

All pill types share the same physical dimensions: `2px 8px` padding, `4px` radius (not full-pill — full-pill reads consumer; 4px reads document), 12px / 520 font.

#### `<Tag>` — Non-semantic classifier

For facts about the deal that carry no judgment: industry ("Technology"), pipeline stage ("Offers Received"), lien position ("1st position"), role labels ("Primary").

- Background: `rgba(20, 20, 20, 0.05)` — flat gray wash
- Text: `--ink-secondary`
- No dot, no color encoding
- The quietest element on the page. Should be invisible in peripheral vision.

**Test:** if you can say "this is just stating what it is, not whether it's good or bad," use Tag.

#### `<Pill>` — Status judgment

For values that encode underwriting judgment: "Funded," "Low Risk," "Excellent" (FICO band), "OVERDUE," lifecycle status, submission status.

- Background: `--status-*-wash` (8–12% alpha)
- Text: `--status-*` at full saturation
- Optional 6px leading dot — use the dot when the pill appears in a scanning context (lists, grids)
- Tones: `advance` (green), `caution` (amber), `decline` (red), `neutral` (gray), `accent` (blue)

**Test:** if the color encodes a judgment the user needs to act on, use Pill.

#### `<Metric>` — Number + band

For the pattern where a raw number sits next to its qualitative band: "760 ● Excellent," "42% ● Above Average." The number is data (not state) and must not be wrapped in a pill.

- Number: `--ink-primary`, tabular-nums, `620` weight — rendered as bare text
- Band: a small `<Pill>` with the appropriate status tone and dot
- Gap: `6px` between number and pill

**Test:** if you have a number AND a qualitative label, use Metric. Don't pillify the number.

### Side Rail (Linear-derived)

There are two distinct rail elements — they use different surface tokens intentionally:

**App nav sidebar** (collapsed: 48px / expanded: 240px): `--canvas` background (`#fefefe`) — intentionally merges with the shell. The visual boundary comes from the page-level content shift, not a tone step. Nav items 13px/520, 8px vertical padding, 12px horizontal. Active item: `--accent-wash` background, `--accent` text, `2px` left bar in `--accent`. Hover: background lifts to `rgba(20,20,20,0.03)`.

**Page-level left content rail** (`LeftRailAccordion`): `--surface-sunken` background (`#f3f4f6`) — the visually distinct gray panel in merchant/submission detail views. No border-right; the tone shift from `#f3f4f6` to `#fefefe` is the boundary. Used for merchant profile, lender buy-box, deal intelligence sidebar panels.

### Tables (the heart of the product)

- Row height: 36px (dense) or 44px (comfortable) — user toggleable
- Header: `--ink-tertiary`, 11px/520/uppercase, 0.4px tracking, `border-bottom: 1px solid --border-standard`
- Row borders: `border-bottom: 1px solid --border-hairline` — barely visible, just enough to track across
- Hover: row background lifts to `--surface-sunken`
- Selected: `--accent-wash` background, `2px` left bar in `--accent`
- Numeric columns right-aligned, tabular-nums, 520 weight
- Sort indicator: 10px chevron in `--ink-tertiary`, only on the active sort column
- Sticky header on scroll, with a `1px` shadow `0 1px 0 var(--border-standard)` only when scrolled

### Buttons

**Primary**: `--accent` background, white text, `6px` radius, `8px 14px` padding, 13px/520. Hover: `--accent-hover`. No shadow.

**Secondary**: transparent background, `1px solid --border-standard`, `--ink-primary` text, same dimensions. Hover: background `rgba(20,20,20,0.04)`.

**Ghost**: transparent, no border, `--ink-secondary` text. Hover: background `rgba(20,20,20,0.04)`. For toolbar and contextual actions.

**Destructive**: only used in confirmation dialogs. `--status-decline` background, white text. Never used inline.

### Inputs

- Background `--surface`, `1px solid --border-standard`, `5px` radius, `8px 12px` padding, 13px/400
- Focus: `border-color --accent`, `box-shadow: 0 0 0 3px --accent-wash`. No glow, no animation longer than 120ms.
- Label above, 12px/520/`--ink-tertiary`, 6px gap

### Drop Zone

- Empty: `2px dashed --border-standard`, `--surface` background, centered icon + label. Hover: `--border-strong`, `--surface-sunken-subtle` background.
- Extracting: `1px solid --border-standard`, `--accent-wash` background, spinner in `--accent`.
- Complete: `1px solid --border-standard`, `--surface-sunken-subtle` background, checkmark in `--status-advance`. No colored borders.
- Error: `1px solid` status-decline at 30% alpha, `--status-decline-wash` background.
- **Never use colored borders on drop zones** — borders are always neutral gray (`--border-*`). Status feedback is conveyed through background wash and icon color, not border color.

### KPI Card

- `--surface` background, no border (sits on `--surface-sunken` section bg), 16px padding
- Label 11px/520/uppercase/`--ink-tertiary`
- Value 36px/620/tabular-nums/`--ink-primary`
- Delta below: 12px/520, status color + small arrow glyph
- 8px radius

### Memo Block (the editorial layer)

This is the component Attio doesn't have and Linear doesn't need. The memo block is where underwriters write narrative.

- Max-width: 680px (reading measure)
- Source Serif 4 throughout
- 16px / 1.65 line-height body
- H2s are 20px/600 with 32px top margin
- Pull quotes and risk callouts: 4px left border in `--accent` or `--status-caution`, 16px left padding, italic
- Inline numbers inside memo prose still use Inter tabular-nums (the one place we mix families inline) — keeps figures legible inside serif text

### Risk Flag

A specialized component YieldStream needs that none of the references have. Inline annotation on a row or field that surfaces an underwriting concern.

- Small triangle glyph in `--status-caution` or `--status-decline`, 12px
- On hover/click: popover with the rule that triggered it, the threshold, and a "dismiss with reason" action
- Never blocks interaction; underwriters override flags with a logged reason

---

## 5. Layout

- Base unit: **4px**. Common scale: 4, 8, 12, 16, 20, 24, 32, 48, 64
- Max content width inside record panel: 1080px
- Side rail: 240px fixed
- Detail rail (right side, contextual): 360px, collapsible
- Main canvas: fluid between rails
- Section vertical rhythm: 32px between sections, 16px between subsections, 8px between related fields
- Tables can break out of the 1080px constraint to full panel width

---

## 6. Elevation

Five levels, mostly tone-based. Shadows only on true overlays.

| Level     | Treatment                                                                         | Use                                        |
| --------- | --------------------------------------------------------------------------------- | ------------------------------------------ |
| 0 Canvas  | `--canvas`, no border                                                             | Page background                            |
| 1 Sunken  | `--surface-sunken`                                                                | Side rail, table row alternate, section bg |
| 2 Surface | `--surface`                                                                       | Record panel, KPI card                     |
| 3 Raised  | `--surface` + `0 1px 2px rgba(20,20,20,0.04), 0 0 0 1px var(--border-hairline)`   | Popovers, dropdowns                        |
| 4 Overlay | `--surface` + `0 12px 32px rgba(20,20,20,0.12), 0 0 0 1px var(--border-standard)` | Modals, command palette                    |

Linear uses background-luminance stepping on dark; YieldStream uses **tone stepping with warmth** on light. Shadows in light mode are warm-gray (`rgba(20,20,20,...)`), never pure black.

---

## 7. Do's and Don'ts

**Do**

- Use tabular-nums on every number, including dates, IDs, percentages, and ratios
- Reserve color for data semantics. If a color isn't carrying underwriting meaning, remove it.
- Use Source Serif only inside memos. Mixing it into UI chrome breaks the system.
- Lead with the near-white canvas — it's what makes YieldStream feel like a financial document, not a developer tool
- Use 4px-radius pills with washes, not full-pills with solid fills
- Right-align all numeric table columns
- Keep borders hairline; prefer spacing and tone shifts over visible lines

**Don't**

- Don't use Linear's indigo-violet — `#1B3A5F` ink blue is the YieldStream accent
- Don't use full-pill (9999px) badges for status — too consumer
- Don't use shadows for elevation outside of true overlays
- Don't use bold (700+); 620 is the ceiling
- Don't use serif in tables, labels, buttons, or any chrome
- Don't decorate with status colors. A green pill must mean "advance."
- Don't use pure white `#FFFFFF` as the page canvas — use `$ds-canvas` (`#fefefe`). The near-white tone is intentional; hardcoding `#FFFFFF` bypasses the token.
- Don't use icons larger than 16px in tables; underwriters scan, they don't browse

---

## 8. Responsive

YieldStream is desktop-first; underwriters work on 1440px+ screens. Mobile is review-only.

| Breakpoint | Width     | Behavior                                                                       |
| ---------- | --------- | ------------------------------------------------------------------------------ |
| Desktop XL | 1440+     | Full three-column: rail / canvas / detail rail                                 |
| Desktop    | 1200–1440 | Detail rail collapses to icon strip, expands on hover                          |
| Laptop     | 1024–1200 | Detail rail hidden, accessible via toolbar button                              |
| Tablet     | 768–1024  | Side rail collapses to icon-only                                               |
| Mobile     | <768      | Read-only deal view, no editing, no tables wider than viewport (cards instead) |

---

## 9. Build Notes for Claude Code

### Stack & Styling Architecture

YieldStream uses **BEM + SCSS as the primary styling approach**, not Tailwind. Tailwind is installed only for `shadcn/ui` primitives inside `src/components/ui/`. Feature components never use Tailwind utility classes.

**Source of truth for tokens:**

- `src/styles/_variables.scss` — SCSS variables (consumed by all feature SCSS files)
- `src/styles/_mixins.scss` — Reusable SCSS mixins
- `src/styles/design-system.scss` — Exports SCSS variables as CSS custom properties at `:root`, plus base styles and utility classes
- `src/app/globals.css` — Tailwind directives + CSS custom properties for `shadcn/ui` components + global overrides

**How feature components consume tokens:**

```scss
// Every feature SCSS file imports from the shared system
@use "../../../../../styles/variables" as *;
@use "../../../../../styles/mixins" as *;

.my-component {
  background: $canvas; // SCSS variable
  color: $ink-primary; // SCSS variable
  border: 1px solid $border-hairline; // SCSS variable
  @include text-body(base, read); // Mixin
}
```

**How `shadcn/ui` components consume tokens (Tailwind OK here only):**

```tsx
// src/components/ui/ — Tailwind classes reference CSS custom properties
<div className="bg-canvas text-ink-1 border-border-hairline" />
```

### Font Loading

Fonts are loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables:

| Font           | CSS Variable            | Purpose                      |
| -------------- | ----------------------- | ---------------------------- |
| Inter          | `--font-inter`          | UI & data (primary sans)     |
| Source Serif 4 | `--font-source-serif`   | Editorial / memo prose only  |
| JetBrains Mono | `--font-jetbrains-mono` | IDs, hashes, structured data |

### SCSS Token Naming Convention

New design system tokens follow this naming pattern in `_variables.scss`:

```scss
// Surfaces (DS2 — use $ds- prefix)
$ds-canvas: #fefefe; // Near-white page background
$ds-surface: #ffffff; // Record panels, cards
$ds-surface-sunken: #f3f4f6; // Page-level left rails, table row alternates
$ds-surface-sunken-subtle: #f6f7f9; // Drop zone hover, input section backgrounds
$ds-surface-raised: #ffffff; // Popovers, dropdowns (+ shadow)

// Ink (text hierarchy)
$ink-primary: #111827;
$ink-secondary: #374151;
$ink-tertiary: #6b7280;
$ink-quaternary: #9ca3af;

// Accent (single chromatic color)
$accent: #1b3a5f;
$accent-hover: #264f7e;
$accent-wash: rgba(27, 58, 95, 0.05);

// Status (data semantics only)
$status-advance: #2f7d4f;
$status-advance-wash: rgba(47, 125, 79, 0.07);
$status-caution: #b8860b;
$status-caution-wash: rgba(184, 134, 11, 0.08);
$status-decline: #a8321e;
$status-decline-wash: rgba(168, 50, 30, 0.06);
$status-neutral: #6b7280;

// Borders
$border-hairline: rgba(15, 23, 42, 0.06);
$border-standard: rgba(15, 23, 42, 0.1);
$border-strong: rgba(15, 23, 42, 0.16);

// Typography
$font-sans: var(--font-inter), "Inter Variable", system-ui, sans-serif;
$font-editorial:
  var(--font-source-serif), "Source Serif 4", Charter, Georgia, serif;
$font-mono:
  var(--font-jetbrains-mono), "JetBrains Mono", ui-monospace, monospace;

// Weight ceiling: 620 (never bold/700+)
$font-weight-read: 400;
$font-weight-ui: 520; // Workhorse — labels, table headers, emphasis
$font-weight-announce: 620; // KPIs, deal names, section headings
```

### CSS Custom Properties (exported in `design-system.scss`)

```scss
:root {
  // Surfaces
  --canvas: #{$canvas};
  --surface: #{$surface};
  --surface-sunken: #{$surface-sunken};
  --surface-raised: #{$surface-raised};

  // Ink
  --ink-primary: #{$ink-primary};
  --ink-secondary: #{$ink-secondary};
  --ink-tertiary: #{$ink-tertiary};
  --ink-quaternary: #{$ink-quaternary};

  // Accent
  --accent: #{$accent};
  --accent-hover: #{$accent-hover};
  --accent-wash: #{$accent-wash};

  // Status
  --status-advance: #{$status-advance};
  --status-advance-wash: #{$status-advance-wash};
  --status-caution: #{$status-caution};
  --status-caution-wash: #{$status-caution-wash};
  --status-decline: #{$status-decline};
  --status-decline-wash: #{$status-decline-wash};

  // Borders
  --border-hairline: #{$border-hairline};
  --border-standard: #{$border-standard};
  --border-strong: #{$border-strong};
}
```

### Key Mixins to Add (in `_mixins.scss`)

```scss
// Typography — coordinated font stack + size + weight + line-height
@mixin text-kpi-display {
  font-family: $font-sans;
  font-size: 36px;
  font-weight: 620;
  line-height: 1.05;
  letter-spacing: -0.72px;
  font-variant-numeric: tabular-nums;
}

@mixin text-deal-name {
  font-family: $font-sans;
  font-size: 24px;
  font-weight: 620;
  line-height: 1.2;
  letter-spacing: -0.36px;
}

@mixin text-section-heading {
  font-family: $font-sans;
  font-size: 18px;
  font-weight: 620;
  line-height: 1.3;
  letter-spacing: -0.18px;
}

@mixin text-table-header {
  font-family: $font-sans;
  font-size: 11px;
  font-weight: 520;
  line-height: 1.4;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: $ink-tertiary;
}

@mixin text-table-cell-numeric {
  font-family: $font-sans;
  font-size: 13px;
  font-weight: 520;
  line-height: 1.45;
  font-variant-numeric: tabular-nums;
  text-align: right;
}

@mixin text-label {
  font-family: $font-sans;
  font-size: 12px;
  font-weight: 520;
  line-height: 1.4;
  color: $ink-tertiary;
}

// Editorial — scoped to memo/narrative contexts
@mixin text-memo-body {
  font-family: $font-editorial;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.65;
}

@mixin text-memo-heading {
  font-family: $font-editorial;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.1px;
}

// Elevation — tone-based, shadows only for overlays
@mixin elevation-sunken {
  background: $surface-sunken;
}

@mixin elevation-surface {
  background: $surface;
}

@mixin elevation-raised {
  background: $surface;
  box-shadow:
    0 1px 2px rgba(20, 20, 20, 0.04),
    0 0 0 1px $border-hairline;
}

@mixin elevation-overlay {
  background: $surface;
  box-shadow:
    0 12px 32px rgba(20, 20, 20, 0.12),
    0 0 0 1px $border-standard;
}

// Pill — 4px radius, wash background, status-colored text
@mixin pill($tone: neutral) {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: $font-sans;
  font-size: 12px;
  font-weight: 520;
  border: none;
  // Tone colors applied via BEM modifier or argument
}

// Button variants
@mixin btn-primary {
  @include btn-base;
  background: $accent;
  color: #ffffff;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 520;

  &:hover:not(:disabled) {
    background: $accent-hover;
  }
}

@mixin btn-secondary {
  @include btn-base;
  background: transparent;
  border: 1px solid $border-standard;
  color: $ink-primary;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 520;

  &:hover:not(:disabled) {
    background: rgba(20, 20, 20, 0.04);
  }
}

@mixin btn-ghost {
  @include btn-base;
  background: transparent;
  border: none;
  color: $ink-secondary;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 520;

  &:hover:not(:disabled) {
    background: rgba(20, 20, 20, 0.04);
  }
}
```

### Component Build Order

Build in this sequence — each unlocks the next:

1. **Tokens** — Add new SCSS variables to `_variables.scss`, export as CSS custom properties in `design-system.scss`. Keep old tokens alive (dual-token period).
2. **Fonts** — Load Inter, Source Serif 4, JetBrains Mono in `layout.tsx`. Update `$font-sans`, `$font-editorial`, `$font-mono`.
3. **Mixins** — Add typography, elevation, pill, and button mixins to `_mixins.scss`.
4. **`<Pill>`** — BEM component with SCSS, 4px radius, wash backgrounds. The smallest brick — get this right and everything downstream is easier.
5. **`<DataCell>`** — BEM component with built-in tabular-nums and right-align for numerics.
6. **`<Table>`** — BEM component using `<DataCell>`, following the table spec (36px/44px rows, sticky header).
7. **`<KpiCard>`** — BEM component, 36px/620 value, 11px uppercase label.
8. **`<RecordPanel>`** — BEM component with tab strip (13px/520 labels, 2px accent underline).
9. **`<Memo>`** — BEM component that scopes Source Serif 4. Never let serif leak outside this component.
10. **`<RiskFlag>`** — Inline annotation with popover (triangle glyph, dismiss-with-reason).

### Critical Guardrails

- **Serif isolation**: Source Serif 4 is only used inside a `.memo` BEM block. The `@mixin text-memo-body` and `@mixin text-memo-heading` mixins enforce this. Never apply `$font-editorial` in a non-memo context.
- **Numeric formatting**: The `@mixin text-table-cell-numeric` bakes in `tabular-nums`. Every number in a table or KPI must go through a numeric-aware mixin or the `<DataCell numeric>` component.
- **Status color enforcement**: Status colors (`$status-advance`, `$status-caution`, `$status-decline`) are consumed through pill/badge mixins or the `<Pill>` component — never as raw color values in feature SCSS.
- **Weight ceiling**: No SCSS variable or mixin may set `font-weight` above 620. The old `$font-weight-bold: 700` is deprecated.
- **Feature components use BEM + SCSS only**: Tailwind classes are forbidden in feature component SCSS/TSX. Tailwind is permitted only inside `src/components/ui/` for shadcn primitives.
- **Dark mode is a peer**: Every new component must define dark-mode token overrides. Use a `[data-theme="dark"]` or `.dark` selector scope in `design-system.scss`.

---

## 10. Status Indicators & Visual Emphasis

YieldStream uses a **two-tier visual indicator system**. Each element on a page has a job (state, emphasis, or fact), and each job has a correct container. Never mix them.

### Three Visual Tiers

| Job                     | Container                                    | Example                                                                         |
| ----------------------- | -------------------------------------------- | ------------------------------------------------------------------------------- |
| **Enumerated state**    | Pill (`StatusPillFilled` or `StatusPillDot`) | Funded, Approved, Low Risk, Clean, Technology                                   |
| **Narrative emphasis**  | Highlighter wash (no border, no radius)      | Key phrases in Underwriter's Notes, active comparison column, best-in-row cells |
| **Facts & identifiers** | Plain text (no container)                    | Merchant name, EIN, dollar amounts in tables, dates                             |

### Pill Variants — When to Use Each

**Colored pill** (`StatusPillFilled`) — use when the state is the focal element the user came to see:

- 1–3 pills in a hero/focal position (e.g., `CLEAN` on underwriting score, risk level on profile, `4 expiring soon` alert)
- The user is **reading** this pill, not scanning across many

**White pill + colored dot** (`StatusPillDot`) — use when the state is supplementary metadata in a scanning context:

- 4+ pills in lists, grids, tables, or Kanban cards (e.g., `APPROVED` / `SUBMITTED` across lender columns, deal status on Kanban cards)
- The user is **scanning** across multiple pills to compare

**Decision rule:** scan vs read. Scanning = dot pill. Reading = colored pill.

### Pill Styling Rules

- **4px radius** — `rounded-[4px]`, not full-pill (`rounded-full`). Full-pill reads consumer; 4px reads document
- **Low saturation** — background at the 50-stop, text at the 800-stop from the same color ramp. The text leads; the background is a faint wash defining the container
- **6 tones:** `neutral`, `info`, `success`, `warning`, `danger`, `accent` — defined as CSS custom properties (`--status-{tone}-bg/dot/text`)
- **No bright/saturated pills** — the difference between tasteful and fatigued is entirely in saturation, not shape

### Highlighter Usage

- Reserved for **narrative emphasis on prose content** — Underwriter's Notes, AI-generated summaries
- Also used for **region emphasis** — active comparison column wash, best-in-row cell highlights in tables
- Zero radius, no border — pure text emphasis. The moment you add a border, it becomes a container and should be a pill instead
- **Never use highlighters for enumerated states**

### What NOT to Do

- **Don't border highlighters** — collapses the two-tier system into one ambiguous thing
- **Don't use full-pill radius (`rounded-full`)** — reads consumer; 4px radius is the correct document-grade treatment
- **Don't use saturated/bright pill backgrounds** — emerald-on-white is the single most fatigued SaaS element
- **Don't pillify continuous values** — computed deltas (`+$117`, `-0.04x`), deal rank bars, and numeric scores stay as plain text with color encoding

### Status Pill Components

| Component          | File                                              | Purpose                                                              |
| ------------------ | ------------------------------------------------- | -------------------------------------------------------------------- |
| `StatusPillFilled` | `src/components/ui/status/status-pill-filled.tsx` | Colored background pill for focal states                             |
| `StatusPillDot`    | `src/components/ui/status/status-pill-dot.tsx`    | White pill with colored dot for scanning                             |
| `StatusDot`        | `src/components/ui/status/status-dot.tsx`         | Standalone dot indicator                                             |
| `StatusTone` type  | `src/components/ui/status/types.ts`               | `neutral \| info \| success \| warning \| danger \| accent`          |
| Tone mappers       | `src/features/merchants/utils/statusTones.ts`     | `lifecycleTone()`, `riskTone()`, `ficoTone()` — domain status → tone |

## 9. Marketing Surface

YieldStream's marketing site and the app share one design system, one set of tokens, and one set of primitive components. They are not two products — they are two compositions of the same vocabulary. A prospect who sees the marketing site and then logs into the app should feel zero seam. This section defines the handful of places where the marketing surface is _permitted_ to compose the system differently from the app, and what stays locked.

### What stays locked (do not diverge)

- **Tokens.** Canvas, surface, ink, accent, status, border — all identical. If you find yourself wanting a "marketing blue" or a "warmer canvas for the landing page," stop. Mercury and Linear both run one palette across their entire surface area and it is a huge part of why they read as serious products.
- **Type families.** Inter Variable for UI, Source Serif 4 for editorial, JetBrains Mono for IDs and structured data. No marketing-exclusive display faces. Using a separate face on marketing is the most common way a product stops feeling like itself.
- **Type features.** `font-feature-settings: "cv11", "ss01", "ss03", "calt"` and `font-variant-numeric: tabular-nums` on numbers still apply everywhere, including inside hero headlines. A stat quoted in a marketing hero is still tabular.
- **Weight ceiling.** Still 620. No 700+ for marketing headlines, no matter how much the designer wants to.
- **Primitive components.** `<Button>`, `<Pill>`, `<Tag>`, `<Status>`, `<DataCell>`, `<Input>` are imported from the same shared package as the app. Marketing does not fork primitives. If marketing needs a variant, it gets added to the shared primitive with a prop, not copied.
- **Color discipline.** One accent, status colors only encode data semantics. A green pill on a marketing page still means "advance." If you want warmth on marketing, earn it from photography, generous whitespace, and the serif — not from breaking the palette.
- **No shadows on buttons.** Ever. Same rule as the app.

### What the marketing surface is permitted to compose differently

#### Scale

Marketing is spacious; the app is dense. Same tokens, different rhythm. The marketing display scale extends beyond the app's ceiling:

| Role                   | Family       | Size | Weight | Line | Tracking |
| ---------------------- | ------------ | ---- | ------ | ---- | -------- |
| Marketing Display XL   | Inter        | 80px | 620    | 1.00 | -2.00px  |
| Marketing Display      | Inter        | 64px | 620    | 1.02 | -1.50px  |
| Marketing Section      | Inter        | 40px | 620    | 1.15 | -0.80px  |
| Marketing Subsection   | Inter        | 28px | 620    | 1.25 | -0.42px  |
| Marketing Lead (serif) | Source Serif | 22px | 400    | 1.55 | -0.22px  |
| Marketing Body         | Inter        | 18px | 400    | 1.60 | 0        |
| Marketing Caption      | Inter        | 14px | 520    | 1.50 | 0        |

Negative letter-spacing still scales with size, same rule as the app. The 80px ceiling is deliberate — bigger reads as consumer SaaS and YieldStream shouldn't.

#### Vertical rhythm

- App sections: 32px between major sections, 16px between subsections.
- Marketing sections: **96px** between major sections on mobile, **128px** on desktop. Hero sections get 160px of vertical padding below the fold.
- This is the biggest rhythmic difference between the two surfaces and the most common place drift happens. Pin it.

#### Container widths

- Hero and feature grid: `max-width: 1200px`
- Prose sections (manifesto, about, blog body): `max-width: 680px` — matching the `<Memo>` reading measure, because long-form marketing copy is editorial content and needs the same reading measure as an underwriting memo
- Product screenshot sections: can break to `max-width: 1440px` when showing full-bleed app captures
- Navigation and footer: full-width, content inside a 1200px container

#### Serif permissions (expanded)

Inside the app, Source Serif 4 is locked to `<Memo>`. On the marketing surface, the serif earns more real estate because marketing is partly an editorial act. The following marketing-specific components use serif:

- `<Manifesto>` — the "why we built this" statement, typically one block of 3–5 paragraphs
- `<PullQuote>` — large serif quotes (28–36px) used as section transitions
- `<TestimonialBody>` — customer quotes in the testimonials section; attribution stays Inter
- `<MarketingLead>` — the 22px serif paragraph that follows a section heading, used sparingly

Everything else on the marketing site is still Inter: navigation, buttons, feature card titles, CTAs, footer, pricing tables, forms. The rule is the same as the app: **serif never touches chrome**. It lives only inside editorial blocks.

#### Surface and elevation

The marketing surface uses the same canvas (`#F8FAFC`) as the app. It does not get a brighter or warmer background to feel "inviting." The restraint _is_ the pitch.

Marketing may use one elevation pattern the app does not: **full-bleed section bands**. Alternating sections can swap between `--canvas` and `--surface` (white) to create rhythm at scroll. The app never does this because it would fight with record panels, but marketing pages benefit from the tonal breathing it provides. Never more than two tones in rotation — no third background color.

#### Product screenshots

Product screenshots are the bridge between marketing and app. Because the design system is shared, screenshots sit on the marketing page without needing a fake browser chrome, a stylized device frame, or a gradient background behind them. Show the real app UI with real-looking deal data. The rules:

- Screenshots sit directly on the marketing canvas with no frame
- A single hairline border (`1px solid var(--border-standard)`) and an 8px radius, nothing else
- No drop shadows, no glow, no perspective tilts, no floating
- Data in screenshots should be plausible, not stylized — real-seeming deal names, realistic FICO scores, believable amounts. Fake-obvious data ("ACME CORP / $999,999,999") undermines the credibility the rest of the system is working to build.
- Annotations on screenshots use the same `<Pill>` and `<Status>` components as the app, not marketing-only callout shapes

#### Marketing-only components

These components exist only on the marketing surface and do not ship in the shared primitive package:

- `<Hero>` — full-width hero section with display headline, lead paragraph, and CTA cluster
- `<FeatureGrid>` — 2 or 3 column grid of feature cards
- `<PricingTable>` — pricing tiers with feature comparison
- `<TestimonialBlock>` — customer quotes with attribution
- `<Manifesto>` — serif-led "why we exist" block
- `<CtaBanner>` — secondary conversion block, typically "Book a demo"
- `<MarketingNav>` — horizontal top navigation (marketing uses top nav; app uses left rail)
- `<MarketingFooter>` — multi-column footer

These components _consume_ the shared primitives. A `<FeatureGrid>` card uses `<Button>` from the shared package for its CTA, not a marketing-only button. The rule: marketing composes primitives into marketing layouts; it never reinvents primitives.

#### Navigation

Marketing uses a horizontal top nav; the app uses the full-height left rail shell. This is the one structural difference between the two surfaces and it's correct — marketing visitors are navigating between contexts (Home, Product, Pricing, Docs, Blog), which is what top nav is for. App users are living inside one deal, which is what a left rail is for. Don't try to unify these.

The marketing top nav uses:

- Height: 64px
- Background: `--canvas` at rest, `--surface` when scrolled (with `border-bottom: 1px solid var(--border-hairline)` on scroll only)
- Logo left, nav links center or right, CTA cluster far right
- Nav links: 14px Inter / 520 / `--ink-secondary`, hover to `--ink-primary`
- Primary CTA ("Book a demo") uses the shared `<Button variant="primary">` — not a marketing-specific button

#### Buttons on marketing

Same three variants as the app (Primary, Secondary, Ghost), same tokens, same radius. The only difference is that marketing is permitted to use the `lg` size (14px / 10px 18px padding) for hero CTAs, where the app almost never does. One primary CTA per marketing page section, same discipline as the app.

### Responsive

Marketing is mobile-first in a way the app is not. The app assumes desktop-class displays; marketing has to work on phones because that's where a lot of prospect discovery happens. Breakpoints for marketing:

| Name    | Width       | Behavior                                                                                      |
| ------- | ----------- | --------------------------------------------------------------------------------------------- |
| Mobile  | <640px      | Single column, hero display drops from 80px to 48px, section padding drops from 128px to 72px |
| Tablet  | 640–1024px  | Two-column feature grids, hero at 64px                                                        |
| Desktop | 1024–1440px | Full three-column feature grids where applicable, hero at 80px                                |
| Wide    | >1440px     | Content max-widths cap; additional breathing room in margins                                  |

### Build notes

- Marketing and app should share a `packages/ui` (or equivalent) that exports tokens and primitive components
- Marketing-only components live in the marketing app and import from `packages/ui`
- The CSS variables file is shared. If marketing needs a new token, it gets added to the shared file with clear naming (`--marketing-display-xl`) so it doesn't pollute the app namespace
- The design doc has exactly one source of truth. There is no `marketing-design-system.md`. This file is it.

### Do's and don'ts (marketing-specific)

**Do**

- Use the same accent color (`#1B3A5F`) for marketing CTAs as for app CTAs
- Let the serif carry more weight in editorial blocks — this is where marketing earns its distinct feel
- Show real app screenshots without frames or device mockups
- Use tabular-nums on every stat quoted in a headline, hero, or testimonial
- Leave 96–128px of vertical rhythm between sections; marketing should breathe
- Treat restraint as the pitch — a calm, credible marketing page is what sells a credit desk

**Don't**

- Don't introduce a "marketing palette" with warmer or brighter variants. One palette.
- Don't use display faces other than Inter. One sans, one serif, one mono.
- Don't put product screenshots inside fake browser chrome, device frames, or gradient halos
- Don't use drop shadows or glows on buttons, cards, or CTAs on marketing, even though "everyone does"
- Don't fork primitive components into marketing-only variants. Add a prop to the shared primitive instead.
- Don't write a second design doc. This section is the marketing doc.
