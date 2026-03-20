import { NextResponse } from 'next/server';

/**
 * POST /api/validate-token
 * Called by app.yieldstream.ai to validate a signup token.
 *
 * Body: { token: string, peek?: boolean }
 * Returns: { valid, email, plan, interval, stripe_customer_id, stripe_subscription_id }
 *
 * When peek is true, validates without marking the token as used (read-only).
 * When peek is false/absent, marks the token as used after validation (legacy behavior).
 *
 * Recommended flow: call with peek:true on page load, then call POST /api/consume-token
 * after the user account is successfully created.
 */
export async function POST(request) {
  try {
    const { token, peek } = await request.json();

    if (!token) {
      return NextResponse.json({ valid: false, error: 'Missing token' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ valid: false, error: 'Server misconfigured' }, { status: 500 });
    }

    // Look up token
    const res = await fetch(
      `${supabaseUrl}/rest/v1/signup_tokens?token=eq.${token}&used=eq.false&select=*`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      }
    );

    const rows = await res.json();

    if (!rows.length) {
      return NextResponse.json({ valid: false, error: 'Invalid or already used token' });
    }

    const row = rows[0];

    // Check expiry
    if (new Date(row.expires_at) < new Date()) {
      return NextResponse.json({ valid: false, error: 'Token expired' });
    }

    // Mark as used only if not peeking (legacy behavior)
    if (!peek) {
      await fetch(
        `${supabaseUrl}/rest/v1/signup_tokens?token=eq.${token}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({ used: true, used_at: new Date().toISOString() }),
        }
      );
    }

    return NextResponse.json({
      valid: true,
      email: row.email,
      plan: row.plan,
      interval: row.interval,
      stripe_customer_id: row.stripe_customer_id,
      stripe_subscription_id: row.stripe_subscription_id,
    });
  } catch (error) {
    console.error('Token validation error:', error);
    return NextResponse.json({ valid: false, error: 'Internal error' }, { status: 500 });
  }
}
