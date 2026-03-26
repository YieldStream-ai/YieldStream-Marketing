import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, volume, notes } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Store in Supabase
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/marketing_leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          type: 'enterprise_interest',
          data: { email, volume, notes },
        }),
      });
    }

    // Send notification email via Resend
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'YieldStream <noreply@updates.yieldstream.ai>',
          to: ['support@yieldstream.ai'],
          subject: `Enterprise Interest: ${email}`,
          text: `New enterprise interest submission:\n\nEmail: ${email}\nMonthly Deal Volume: ${volume || 'Not specified'}\nNotes: ${notes || 'None'}`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Enterprise interest error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
