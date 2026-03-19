# YieldStream Marketing Site

Premium multi-page marketing website for YieldStream.ai — the submission intelligence platform for MCA brokers.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Global CSS with design tokens (IBM Plex Sans/Mono + Newsreader)
- **Forms:** Supabase + Resend (optional, graceful fallback)
- **Deployment:** Vercel

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage — hero, problem, features, how it works, testimonials |
| `/features` | Deep-dive on all 6 core features + 8 additional capabilities |
| `/underwriting` | AI underwriting — 2-minute audit, risk signals, Underwriter's Note |
| `/intelligence` | Three-layer scoring engine, learning loop, time-decay |
| `/pricing` | 3 tiers, monthly/annual toggle, ROI calculator, FAQ |
| `/security` | RLS, RBAC, audit trail, GDPR/CCPA, document vault |
| `/about` | Founder story, principles, credibility |
| `/contact` | Qualified lead form (volume + team size fields) |
| `/feedback` | Public roadmap board, feature requests, bug reports |
| `/resources` | Blog/thought leadership hub, newsletter signup |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/cookies` | Cookie policy |

## Forms Setup

1. Copy `.env.example` to `.env.local`
2. Add your Supabase credentials
3. Create the `marketing_leads` table:

```sql
CREATE TABLE marketing_leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  type text NOT NULL,
  data jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Allow anonymous inserts (marketing site uses anon key)
ALTER TABLE marketing_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON marketing_leads
  FOR INSERT WITH CHECK (true);
```

4. (Optional) Add Resend API key for email notifications

## Deployment

```bash
vercel
```

Recommended: deploy to root domain (`yieldstream.ai`) with the app at `app.yieldstream.ai`.

## Design System

- **Primary:** Teal (#047987)
- **Accent:** Emerald (#10b981) — CTAs and success states only
- **Display font:** Newsreader (serif, editorial)
- **Body font:** IBM Plex Sans (matches the app)
- **Mono font:** IBM Plex Mono (data, labels, code)

All design tokens are in `app/globals.css` as CSS variables.

## Images

Product screenshots are in `public/images/`. Replace with updated screenshots as the product evolves.
