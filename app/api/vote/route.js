import { NextResponse } from 'next/server';

/**
 * POST /api/vote
 * Increments or decrements a roadmap item's vote count.
 *
 * Body: { itemId: string, action: 'vote' | 'unvote' }
 *
 * Uses a Supabase RPC function for atomic updates.
 * Without Supabase, returns success (votes tracked client-side only).
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
      const delta = action === 'vote' ? 1 : -1;

      const res = await fetch(`${supabaseUrl}/rest/v1/rpc/vote_roadmap_item`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({ item_id: itemId, delta }),
      });

      if (!res.ok) {
        console.error('Supabase vote RPC failed:', res.status);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Vote API error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
