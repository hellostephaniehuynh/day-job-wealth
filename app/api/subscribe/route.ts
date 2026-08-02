import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    console.log("[subscribe] CONVERTKIT_API_KEY / CONVERTKIT_FORM_ID not set — logging instead of subscribing:", {
      email,
    });
    return NextResponse.json({ ok: true, subscribed: false });
  }

  const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: apiKey, email }),
  });

  if (!res.ok) {
    const detail = await res.json().catch(() => null);
    console.error("[subscribe] ConvertKit error:", detail);
    return NextResponse.json(
      { error: "Something went wrong signing you up. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, subscribed: true });
}
