import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET() {
  const db = getDb();
  const reviews = db.prepare("SELECT * FROM reviews ORDER BY id ASC").all();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = getDb();

    const stmt = db.prepare(`
      INSERT INTO reviews (lang, stars, text, author, location, avatar_color)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run(body.lang || "de", body.stars || 5, body.text, body.author, body.location, body.avatar_color || "");

    return NextResponse.json({ success: true, message: "Review ajoutée" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
