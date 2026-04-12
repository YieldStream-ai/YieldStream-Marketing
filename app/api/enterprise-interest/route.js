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
      const sbRes = await fetch(`${supabaseUrl}/rest/v1/marketing_leads`, {
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
      if (!sbRes.ok) {
        const sbBody = await sbRes.text();
        console.error('Supabase insert failed:', sbRes.status, sbBody);
      }
    } else {
      console.warn('Supabase credentials missing — skipping lead storage');
    }

    // Send notification email via Resend
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const emailRes = await fetch('https://api.resend.com/emails', {
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
      if (!emailRes.ok) {
        const emailBody = await emailRes.text();
        console.error('Resend email failed:', emailRes.status, emailBody);
      }
    } else {
      console.warn('RESEND_API_KEY missing — skipping email notification');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Enterprise interest error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
