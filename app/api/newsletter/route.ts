import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { newsletterSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "E-Mail invalide", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email, lang } = parsed.data;
    const db = getDb();

    db.prepare("INSERT INTO newsletter_subscribers (email, lang) VALUES (?, ?)").run(email, lang);

    return NextResponse.json({ success: true, message: "Abonnement réussi" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    if (message.includes("UNIQUE")) {
      return NextResponse.json({ success: false, message: "Cet email est déjà abonné" }, { status: 409 });
    }
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
