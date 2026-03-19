import { NextResponse } from 'next/server';

/**
 * POST /api/form
 * Handles contact, feature request, bug report, and newsletter submissions.
 * 
 * Wire up your Supabase and Resend credentials in .env.local:
 * SUPABASE_URL=https://your-project.supabase.co
 * SUPABASE_SERVICE_KEY=your-service-role-key
 * RESEND_API_KEY=re_xxxxx
 */

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json({ error: 'Missing type or data' }, { status: 400 });
    }

    // 1. Store in Supabase
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
        body: JSON.stringify({ type, data }),
      });
    }

    // 2. Send notification email via Resend
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const subject = {
        contact: `New Contact: ${data.company || 'Unknown'}`,
        feature_request: `Feature Request: ${data.title || 'Untitled'}`,
        bug_report: `Bug Report: ${data.summary || 'Untitled'}`,
        newsletter: `Newsletter Signup: ${data.email}`,
      }[type] || `Marketing Form: ${type}`;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'YieldStream <noreply@yieldstream.ai>',
          to: ['hello@yieldstream.ai'],
          subject,
          text: JSON.stringify(data, null, 2),
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form API error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
