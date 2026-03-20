import { NextResponse } from 'next/server';

/**
 * POST /api/vote
 * Records an upvote or unvote on a roadmap item.
 *
 * Body: { itemId: string, action: 'vote' | 'unvote' }
 *
 * When Supabase is configured, this stores votes in a `roadmap_votes` table.
 * Without Supabase, it returns success (votes are tracked client-side via localStorage).
 */
export async function POST(request) {
  try {
    const { itemId, action } = await request.json();

    if (!itemId || !['vote', 'unvote'].includes(action)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/roadmap_votes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          item_id: itemId,
          action,
          voted_at: new Date().toISOString(),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Vote API error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
