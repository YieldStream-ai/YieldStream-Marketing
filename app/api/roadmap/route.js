import { NextResponse } from 'next/server';

/**
 * GET /api/roadmap
 * Fetches roadmap items from Supabase, grouped by status.
 * Returns empty array if Supabase is not configured (frontend falls back to hardcoded data).
 */
export async function GET() {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ items: [] });
    }

    const res = await fetch(
      `${supabaseUrl}/rest/v1/roadmap_items?select=*&order=sort_order.asc`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      console.error('Supabase roadmap fetch failed:', res.status);
      return NextResponse.json({ items: [] });
    }

    const rows = await res.json();

    const statusMeta = {
      considering: { label: 'Under Review' },
      planned: { label: 'Planned' },
      building: { label: 'In Progress' },
      shipped: { label: 'Shipped' },
    };

    const grouped = {};
    for (const row of rows) {
      if (!grouped[row.status]) {
        grouped[row.status] = {
          status: row.status,
          label: statusMeta[row.status]?.label || row.status,
          items: [],
        };
      }
      grouped[row.status].items.push({
        id: row.id,
        title: row.title,
        desc: row.description,
        votes: row.votes,
      });
    }

    // Return in consistent column order
    const order = ['considering', 'planned', 'building', 'shipped'];
    const columns = order
      .filter((s) => grouped[s])
      .map((s) => grouped[s]);

    return NextResponse.json({ items: columns });
  } catch (error) {
    console.error('Roadmap API error:', error);
    return NextResponse.json({ items: [] });
  }
}
