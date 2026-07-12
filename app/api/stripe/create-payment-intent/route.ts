import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY non configurée");
  return new Stripe(key, {
    apiVersion: "2025-02-24.acacia" as any,
  });
}

const cartItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number().positive(),
  qty: z.number().int().positive(),
  vol: z.string().optional(),
});

const checkoutSchema = z.object({
  items: z.array(cartItemSchema).min(1),
  email: z.string().email().optional(),
  shipping: z.object({
    name: z.string().min(1),
    address: z.object({
      line1: z.string().min(1),
      city: z.string().min(1),
      postal_code: z.string().min(1),
      country: z.string().length(2),
    }),
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = checkoutSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { items, email, shipping } = parsed.data;

    const stripe = getStripe();
    const totalCents = Math.round(items.reduce((sum, item) => sum + item.price * item.qty, 0) * 100);

    if (totalCents < 50) {
      return NextResponse.json({ error: "Montant minimum : 0,50 €" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalCents,
      currency: "eur",
      receipt_email: email,
      shipping: {
        name: shipping.name,
        address: {
          line1: shipping.address.line1,
          city: shipping.address.city,
          postal_code: shipping.address.postal_code,
          country: shipping.address.country,
        },
      },
      metadata: {
        items: JSON.stringify(items.map(i => ({ id: i.id, name: i.name, qty: i.qty }))),
      },
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe payment intent error:", error);
    return NextResponse.json(
      { error: "Erreur de paiement. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
