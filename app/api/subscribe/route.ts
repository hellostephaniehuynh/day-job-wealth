import { NextResponse } from "next/server";

const KIT_API_BASE = "https://api.kit.com/v4";

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

  const headers = {
    "Content-Type": "application/json",
    "X-Kit-Api-Key": apiKey,
  };

  // Kit's v4 API requires the subscriber to exist before they can be added
  // to a form, so this is a two-step upsert-then-enroll.
  const createRes = await fetch(`${KIT_API_BASE}/subscribers`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email_address: email }),
  });

  if (!createRes.ok) {
    const detail = await createRes.json().catch(() => null);
    console.error("[subscribe] Kit create-subscriber error:", detail);
    return NextResponse.json(
      { error: "Something went wrong signing you up. Please try again." },
      { status: 502 }
    );
  }

  const formRes = await fetch(`${KIT_API_BASE}/forms/${formId}/subscribers`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email_address: email }),
  });

  if (!formRes.ok) {
    const detail = await formRes.json().catch(() => null);
    console.error("[subscribe] Kit add-to-form error:", detail);
    return NextResponse.json(
      { error: "Something went wrong signing you up. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, subscribed: true });
}
