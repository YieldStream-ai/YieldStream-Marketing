import { NextResponse } from 'next/server';

/**
 * POST /api/consume-token
 * Called by app.yieldstream.ai after successful Supabase account creation.
 *
 * Body: { token: string }
 * Returns: { success: true } or { success: false, error: string }
 *
 * Atomically marks the token as used. Safe against race conditions —
 * only the first call succeeds; subsequent calls return an error.
 */
export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, error: 'Missing token' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ success: false, error: 'Server misconfigured' }, { status: 500 });
    }

    // Atomically mark token as used WHERE used=false
    // Using Prefer: return=representation to get the updated row back
    const res = await fetch(
      `${supabaseUrl}/rest/v1/signup_tokens?token=eq.${token}&used=eq.false`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: 'return=representation',
        },
        body: JSON.stringify({ used: true, used_at: new Date().toISOString() }),
      }
    );

    const rows = await res.json();

    if (!rows.length) {
      return NextResponse.json({
        success: false,
        error: 'Token already consumed or invalid',
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Token consumption error:', error);
    return NextResponse.json({ success: false, error: 'Internal error' }, { status: 500 });
  }
}
