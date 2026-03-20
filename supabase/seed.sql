-- Roadmap items table
create table if not exists roadmap_items (
  id text primary key,
  title text not null,
  description text not null,
  status text not null check (status in ('considering', 'planned', 'building', 'shipped')),
  votes integer not null default 0,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- RPC function to atomically increment/decrement votes
create or replace function vote_roadmap_item(item_id text, delta integer)
returns void as $$
begin
  update roadmap_items
  set votes = greatest(votes + delta, 0)
  where id = item_id;
end;
$$ language plpgsql;

-- Enable row-level security (allow read for everyone, write via service key)
alter table roadmap_items enable row level security;

create policy "Public read access" on roadmap_items
  for select using (true);

-- Seed initial roadmap data
insert into roadmap_items (id, title, description, status, votes, sort_order) values
  -- Shipped
  ('bank-statement',   'AI Bank Statement Analysis',        'Automated extraction and risk signal detection from bank PDFs',           'shipped',      52, 1),
  ('lender-scoring',   'Three-Layer Lender Scoring',        'Relationship + attribute + global signal matching',                       'shipped',      48, 2),
  ('kanban-table',     'Deal Pipeline (Kanban + Table)',    'Full pipeline visibility with stage tracking and commission estimates',    'shipped',      41, 3),
  ('offer-comparison', 'Offer Comparison & Scoring',        'Side-by-side lender offer analysis with automated scoring',               'shipped',      39, 4),

  -- In Progress
  ('prediction-dash',  'Prediction Accuracy Dashboard',     'Track and display AI match accuracy over time',                           'building',     67, 5),
  ('mobile-views',     'Mobile Responsive Views',           'Field rep access on phone and tablet',                                    'building',     45, 6),

  -- Planned
  ('lender-portal',    'Lender Portal (Self-Service)',      'Lenders update their own buybox criteria and respond to deals in-platform','planned',      54, 7),
  ('lender-submit-api','Direct Lender Submission API',      'Submit deal packages directly to lender networks via API',                'planned',      42, 8),
  ('dialer',           'Dialer Integration',                'Click-to-call from merchant records',                                     'planned',      38, 9),
  ('accuracy-report',  'AI Accuracy Reporting',             'Prove match accuracy with historical outcome data',                       'planned',      35, 10),
  ('commission-track', 'Broker Commission Tracking',        'Automated commission reconciliation per lender',                          'planned',      33, 11),

  -- Under Review
  ('sms-drip',         'SMS/Email Drip for Renewals',       'Automated merchant outreach at paydown milestones',                       'considering',  22, 12),
  ('analytics-export', 'Advanced Analytics Export',          'Custom date range reports for ISO owners',                                'considering',  19, 13),
  ('white-label',      'White-Label Option',                'Custom branding for large ISOs',                                          'considering',  18, 14),
  ('ucc-scraping',     'UCC Scraping Integration',          'Automated lien search via state filing databases',                        'considering',  15, 15)
on conflict (id) do nothing;
