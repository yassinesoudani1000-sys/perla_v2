import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { orderSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = orderSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { customer_name, customer_email, customer_phone, items, total, type, notes } = parsed.data;
    const db = getDb();

    const id = "LP-" + Date.now().toString(36).toUpperCase();

    db.prepare(`
      INSERT INTO orders (id, customer_name, customer_email, customer_phone, items, total, type, notes)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, customer_name, customer_email, customer_phone || "", JSON.stringify(items), total, type || "retail", notes || "");

    return NextResponse.json({ success: true, orderId: id });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = getDb();
    const orders = db.prepare("SELECT * FROM orders ORDER BY created_at DESC LIMIT 50").all();
    return NextResponse.json(orders);
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
