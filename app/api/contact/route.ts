import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Only initialize if key exists to prevent build crashes in UI-only tests
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    if (!resend) {
       console.warn('RESEND_API_KEY not found. Dev mode fallback active.');
       return NextResponse.json({ ok: true, devMode: true });
    }

    const { error } = await resend.emails.send({
      from: 'no-reply@yusufalthani.com',
      to: 'shabbir@yusufalthani.com',
      subject: `New Private Office Enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
       return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
