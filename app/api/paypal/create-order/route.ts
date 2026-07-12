import { NextResponse } from "next/server";
import { z } from "zod";

const PAYPAL_API = process.env.PAYPAL_API_URL || "https://api-m.sandbox.paypal.com";
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "";

const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  qty: z.number().int().positive(),
});

const orderSchema = z.object({
  items: z.array(itemSchema).min(1),
});

async function getAccessToken(): Promise<string> {
  if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
    throw new Error("PayPal non configuré - clés API manquantes");
  }
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
  const res = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    throw new Error(`PayPal auth failed: ${res.status}`);
  }

  const data = await res.json();
  return data.access_token;
}

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

    const { items } = parsed.data;

    const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

    if (total < 0.5) {
      return NextResponse.json({ error: "Montant minimum : 0,50 €" }, { status: 400 });
    }

    const accessToken = await getAccessToken();

    const paypalOrder = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: total.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: "EUR",
                value: total.toFixed(2),
              },
            },
          },
          items: items.map((item) => ({
            name: item.name,
            unit_amount: {
              currency_code: "EUR",
              value: item.price.toFixed(2),
            },
            quantity: item.qty.toString(),
            category: "PHYSICAL_GOODS",
          })),
          description: "Laperla Olive Oil - Édition Prestige",
        },
      ],
      application_context: {
        brand_name: "Laperla Olive Oil",
        landing_page: "BILLING",
        user_action: "PAY_NOW",
        shipping_preference: "GET_FROM_FILE",
      },
    };

    const res = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paypalOrder),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("PayPal create order error:", errorData);
      return NextResponse.json(
        { error: "Erreur lors de la création de la commande PayPal" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error("PayPal create order error:", error);
    return NextResponse.json(
      { error: "Erreur de paiement. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
