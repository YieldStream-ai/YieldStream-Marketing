import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json({ error: 'Missing type or data' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const subject = {
        contact: `New Contact: ${data.company || 'Unknown'}`,
        feature_request: `Feature Request: ${data.title || 'Untitled'}`,
        bug_report: `Bug Report: ${data.summary || 'Untitled'}`,
        newsletter: `Newsletter Signup: ${data.email}`,
      }[type] || `Marketing Form: ${type}`;

      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'YieldStream <noreply@updates.yieldstream.ai>',
          to: ['support@yieldstream.ai'],
          subject,
          text: JSON.stringify(data, null, 2),
        }),
      });

      if (!emailRes.ok) {
        const err = await emailRes.json();
        console.error('Resend error:', err);
      }
    } else {
      console.warn('RESEND_API_KEY missing — skipping email notification');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Form API error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
