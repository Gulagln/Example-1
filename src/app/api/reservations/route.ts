import { NextResponse } from "next/server";

type ReservationPayload = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  occasion?: string;
  message?: string;
};

function isValid(payload: Partial<ReservationPayload>): payload is ReservationPayload {
  return Boolean(
    payload.name?.trim() &&
      payload.email?.trim() &&
      payload.phone?.trim() &&
      payload.date &&
      payload.time &&
      payload.partySize
  );
}

export async function POST(request: Request) {
  let payload: Partial<ReservationPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValid(payload)) {
    return NextResponse.json(
      { error: "Please fill in name, email, phone, date, time, and party size." },
      { status: 400 }
    );
  }

  // TODO: wire this up to an email/CRM provider (e.g. Resend, SendGrid) or a
  // reservations database once one is chosen. For now the inquiry is logged
  // server-side so the request path is fully exercised end to end.
  console.log("[reservation inquiry]", payload);

  return NextResponse.json({ ok: true });
}
