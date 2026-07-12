import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getDb } from "@/lib/db";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY non configurée");
  return new Stripe(key, {
    apiVersion: "2025-02-24.acacia" as any,
  });
}

export async function POST(request: Request) {
  const body = await request.text();
  const stripe = getStripe();
  const signature = request.headers.get("stripe-signature") || "";

  let event: Stripe.Event;

  try {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      event = JSON.parse(body);
    }
  } catch {
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        const db = getDb();

        const items = paymentIntent.metadata.items
          ? JSON.parse(paymentIntent.metadata.items)
          : [];

        const id = "LP-" + Date.now().toString(36).toUpperCase();

        db.prepare(`
          INSERT OR IGNORE INTO orders (id, customer_name, customer_email, customer_phone, items, total, currency, status, type, notes)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
          id,
          paymentIntent.shipping?.name || "Unknown",
          paymentIntent.receipt_email || "",
          "",
          JSON.stringify(items),
          paymentIntent.amount / 100,
          paymentIntent.currency.toUpperCase(),
          "paid",
          "retail",
          `Stripe PI: ${paymentIntent.id}`
        );

        console.log(`Commande ${id} enregistrée après paiement Stripe réussi`);
        break;
      }

      case "payment_intent.payment_failed": {
        const pi = event.data.object as Stripe.PaymentIntent;
        console.warn(`Paiement échoué pour PI: ${pi.id}`, pi.last_payment_error?.message);
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
