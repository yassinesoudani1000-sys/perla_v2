import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = getDb();

    const { company, contact_name, email, phone, country, message, interest } = body;

    const stmt = db.prepare(`
      INSERT INTO b2b_inquiries (company, contact_name, email, phone, country, message, interest)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(company, contact_name, email, phone || "", country || "", message || "", interest || "general");

    return NextResponse.json({ success: true, message: "Anfrage erfolgreich gesendet" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
