import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = getDb();

    const stmt = db.prepare(`
      INSERT INTO contacts (name, email, message)
      VALUES (?, ?, ?)
    `);

    stmt.run(body.name, body.email, body.message);

    return NextResponse.json({ success: true, message: "Nachricht erfolgreich gesendet" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
