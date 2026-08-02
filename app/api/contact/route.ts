import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.trim() ||
    !body.message.trim()
  ) {
    return NextResponse.json(
      { error: "Please fill out every field before sending." },
      { status: 400 }
    );
  }

  const { name, email, message } = body as {
    name: string;
    email: string;
    message: string;
  };

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.log("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set — logging instead of sending:", {
      name,
      email,
      message,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Day Job Wealth <contact@dayjobwealth.com>",
    to: toEmail,
    replyTo: email,
    subject: `New message from ${name} via Day Job Wealth`,
    text: message,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
