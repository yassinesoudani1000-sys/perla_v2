import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

const PAYPAL_API = process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "";

async function getAccessToken(): Promise<string> {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) throw new Error(`PayPal auth failed: ${res.status}`);
  const data = await res.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const { orderId } = await request.json();

    if (!orderId || typeof orderId !== "string") {
      return NextResponse.json({ error: "Order ID requis" }, { status: 400 });
    }

    const accessToken = await getAccessToken();

    const res = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("PayPal capture error:", data);
      return NextResponse.json(
        { error: "Erreur lors de la validation du paiement PayPal" },
        { status: 500 }
      );
    }

    if (data.status === "COMPLETED") {
      const db = getDb();
      const purchaseUnit = data.purchase_units?.[0];
      const amount = parseFloat(purchaseUnit?.amount?.value || "0");
      const payerName = data.payer?.name?.given_name
        ? `${data.payer.name.given_name} ${data.payer.name.surname || ""}`
        : data.payer?.email_address || "PayPal Customer";
      const payerEmail = data.payer?.email_address || "";

      const id = "LP-" + Date.now().toString(36).toUpperCase();

      const items = purchaseUnit?.items
        ? purchaseUnit.items.map((i: { name: string; quantity: string }) => ({
            name: i.name,
            qty: parseInt(i.quantity),
          }))
        : [];

      db.prepare(`
        INSERT INTO orders (id, customer_name, customer_email, customer_phone, items, total, currency, status, type, notes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        id,
        payerName,
        payerEmail,
        "",
        JSON.stringify(items),
        amount,
        "EUR",
        "paid",
        "retail",
        `PayPal Order: ${orderId}`
      );

      return NextResponse.json({
        success: true,
        orderId: id,
        paypalOrderId: orderId,
      });
    }

    return NextResponse.json({
      success: false,
      status: data.status,
      message: "Le paiement n'a pas été complété",
    });
  } catch (error) {
    console.error("PayPal capture error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la validation du paiement" },
      { status: 500 }
    );
  }
}
