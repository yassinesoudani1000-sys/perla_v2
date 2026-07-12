"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  vol?: string;
  img?: string;
}

interface CartData {
  items: CartItem[];
  total: number;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartData | null>(null);
  const [step, setStep] = useState<"form" | "payment" | "confirm">("form");
  const [method, setMethod] = useState<"stripe" | "paypal" | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    country: "DE",
    notes: "",
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("laperlaCheckoutCart");
      if (saved) {
        const parsed = JSON.parse(saved) as CartData;
        if (parsed.items?.length > 0) setCart(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  const updateForm = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const totalFormatted = cart
    ? cart.total.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    : "0,00 €";

  const handleProceedToPayment = () => {
    if (!form.name || !form.email || !form.address || !form.city || !form.postal) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    setError("");
    setStep("payment");
  };

  const handleStripePayment = async () => {
    if (!method) { setError("Bitte wählen Sie eine Zahlungsmethode."); return; }
    if (method === "stripe") await initStripePayment();
    else await initPayPalPayment();
  };

  const initStripePayment = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart!.items,
          email: form.email,
          shipping: {
            name: form.name,
            address: {
              line1: form.address,
              city: form.city,
              postal_code: form.postal,
              country: form.country,
            },
          },
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur serveur");

      const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
      const stripe = (window as unknown as Record<string, unknown>).Stripe;
      if (typeof stripe !== "function") throw new Error("Stripe nicht geladen");

      const stripeInstance = stripe(stripePublishableKey);
      const { error: stripeError } = await stripeInstance.confirmCardPayment(
        data.clientSecret
      );

      if (stripeError) {
        throw new Error(stripeError.message || "Paiement refusé");
      }

      setStep("confirm");
      setOrderId("LP-" + Date.now().toString(36).toUpperCase());
      localStorage.removeItem("laperlaCheckoutCart");
      saveOrderLocally("stripe");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fehler bei der Zahlung");
    } finally {
      setLoading(false);
    }
  };

  const initPayPalPayment = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart!.items }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur PayPal");

      const paypalOrderId = data.id;

      const paypal = (window as unknown as Record<string, unknown>).paypal;
      if (!paypal || typeof paypal !== "object") throw new Error("PayPal nicht geladen");

      const paypalObj = paypal as {
        Buttons?: (config: { createOrder: () => string; onApprove: (data: { orderID: string }, actions: { order: { capture: () => Promise<unknown> } }) => Promise<void>; onError: (err: unknown) => void }) => { render: (el: string) => void };
      };

      if (paypalObj.Buttons) {
        paypalObj.Buttons({
          createOrder: () => paypalOrderId,
          onApprove: async (data, actions) => {
            const captureRes = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderId: data.orderID }),
            });
            const captureData = await captureRes.json();
            if (captureData.success) {
              setStep("confirm");
              setOrderId(captureData.orderId);
              localStorage.removeItem("laperlaCheckoutCart");
            } else {
              setError("Zahlung nicht abgeschlossen");
            }
          },
          onError: (err) => {
            setError(err instanceof Error ? err.message : "PayPal Fehler");
            setLoading(false);
          },
        }).render("#paypal-button-container");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "PayPal Fehler");
      setLoading(false);
    }
  };

  const saveOrderLocally = (paymentMethod: string) => {
    try {
      const orders = JSON.parse(localStorage.getItem("laperlaOrders") || "[]");
      orders.push({
        id: orderId,
        date: new Date().toISOString(),
        items: cart?.items || [],
        total: cart?.total || 0,
        payment: paymentMethod,
        customer: form,
      });
      localStorage.setItem("laperlaOrders", JSON.stringify(orders));
    } catch {
      // ignore
    }
  };

  if (!cart || cart.items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="wrap" style={{ paddingTop: 120, textAlign: "center", minHeight: "60vh" }}>
          <h1>Zur Kasse</h1>
          <p style={{ margin: "2rem 0", color: "var(--ink-soft)" }}>Ihr Warenkorb ist leer.</p>
          <a href="/" className="btn btn-gold">Zum Shop</a>
        </div>
        <style>{checkoutStyles}</style>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://js.stripe.com/v3/"
        strategy="lazyOnload"
      />
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || ""}&currency=EUR`}
        strategy="lazyOnload"
      />

      <div className="checkout-page">
        <div className="wrap checkout-wrap">
          <div className="checkout-header">
            <a href="/" className="checkout-logo">LAPERLA</a>
            <span className="checkout-title">Sicher bezahlen</span>
            <div className="checkout-steps">
              <span className={step === "form" ? "active" : "done"}>
                {step !== "form" ? "✓" : "1"} Versand
              </span>
              <span className={step === "payment" ? "active" : step === "confirm" ? "done" : ""}>
                {step === "confirm" ? "✓" : "2"} Zahlung
              </span>
              <span className={step === "confirm" ? "active" : ""}>3 Bestätigung</span>
            </div>
          </div>

          {step === "form" && (
            <div className="checkout-grid">
              <div className="checkout-form">
                <h2>Versandadresse</h2>
                <div className="form-group">
                  <label>Name *</label>
                  <input value={form.name} onChange={(e) => updateForm("name", e.target.value)} placeholder="Vor- und Nachname" />
                </div>
                <div className="form-group">
                  <label>E-Mail *</label>
                  <input type="email" value={form.email} onChange={(e) => updateForm("email", e.target.value)} placeholder="email@example.com" />
                </div>
                <div className="form-group">
                  <label>Telefon</label>
                  <input value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} placeholder="+49 176 ..." />
                </div>
                <div className="form-group">
                  <label>Straße & Hausnummer *</label>
                  <input value={form.address} onChange={(e) => updateForm("address", e.target.value)} placeholder="Musterstraße 123" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>PLZ *</label>
                    <input value={form.postal} onChange={(e) => updateForm("postal", e.target.value)} placeholder="12345" />
                  </div>
                  <div className="form-group">
                    <label>Stadt *</label>
                    <input value={form.city} onChange={(e) => updateForm("city", e.target.value)} placeholder="Berlin" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Land</label>
                  <select value={form.country} onChange={(e) => updateForm("country", e.target.value)}>
                    <option value="DE">Deutschland</option>
                    <option value="AT">Österreich</option>
                    <option value="CH">Schweiz</option>
                    <option value="FR">Frankreich</option>
                    <option value="IT">Italien</option>
                    <option value="ES">Spanien</option>
                    <option value="NL">Niederlande</option>
                    <option value="BE">Belgien</option>
                    <option value="LU">Luxemburg</option>
                    <option value="DK">Dänemark</option>
                  </select>
                </div>
                {error && <div className="checkout-error">{error}</div>}
                <button className="btn btn-gold" onClick={handleProceedToPayment} style={{ width: "100%", marginTop: 20 }}>
                  Weiter zur Zahlung — {totalFormatted}
                </button>
                <div className="checkout-secure-badge">
                  🔒 Sichere SSL-Verbindung · Geschützte Zahlung
                </div>
              </div>

              <div className="checkout-summary">
                <h3>Ihre Bestellung</h3>
                {cart.items.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <div className="checkout-item-info">
                      <span className="checkout-item-name">{item.name}</span>
                      <span className="checkout-item-qty">× {item.qty}</span>
                    </div>
                    <span className="checkout-item-price">
                      {(item.price * item.qty).toLocaleString("de-DE", { style: "currency", currency: "EUR" })}
                    </span>
                  </div>
                ))}
                <div className="checkout-total">
                  <span>Gesamtsumme</span>
                  <strong>{totalFormatted}</strong>
                </div>
                <div className="checkout-trust">
                  <span>✓ ECO-CERT zertifiziert</span>
                  <span>✓ Premium Qualität</span>
                  <span>✓ Versand aus Deutschland</span>
                </div>
              </div>
            </div>
          )}

          {step === "payment" && (
            <div className="checkout-payment">
              <h2>Zahlungsmethode wählen</h2>
              <div className="payment-methods">
                <button
                  className={`payment-method ${method === "stripe" ? "selected" : ""}`}
                  onClick={() => setMethod("stripe")}
                >
                  <span className="pm-icon">💳</span>
                  <span className="pm-label">Kreditkarte</span>
                  <span className="pm-sub">Visa · Mastercard · American Express</span>
                </button>
                <button
                  className={`payment-method ${method === "paypal" ? "selected" : ""}`}
                  onClick={() => setMethod("paypal")}
                >
                  <span className="pm-icon">
                    <span style={{ color: "#003087", fontWeight: 700 }}>Pay</span>
                    <span style={{ color: "#009cde", fontWeight: 700 }}>Pal</span>
                  </span>
                  <span className="pm-label">PayPal</span>
                  <span className="pm-sub">Schnell und sicher bezahlen</span>
                </button>
              </div>

              {error && <div className="checkout-error">{error}</div>}

              {method === "stripe" && (
                <div className="stripe-section">
                  <div className="stripe-card-wrapper">
                    <div id="stripe-card-element" className="stripe-card-element">
                      <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem", textAlign: "center", padding: "2rem" }}>
                        Klicken Sie auf &quot;Zahlen&quot;, um mit Stripe zu bezahlen. Ihre Kreditkartendaten werden sicher von Stripe verarbeitet.
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn btn-gold"
                    onClick={initStripePayment}
                    disabled={loading}
                    style={{ width: "100%", marginTop: 16 }}
                  >
                    {loading ? "Wird bearbeitet..." : `${totalFormatted} sicher zahlen`}
                  </button>
                </div>
              )}

              {method === "paypal" && (
                <div className="paypal-section">
                  <div id="paypal-button-container" style={{ marginTop: 16 }}></div>
                  <button
                    className="btn btn-gold"
                    onClick={initPayPalPayment}
                    disabled={loading}
                    style={{ width: "100%", marginTop: 16, display: "none" }}
                    id="paypal-fallback-btn"
                  >
                    {loading ? "Wird bearbeitet..." : `Mit PayPal zahlen (${totalFormatted})`}
                  </button>
                </div>
              )}

              <button
                className="btn btn-ghost"
                onClick={() => setStep("form")}
                style={{ marginTop: 20 }}
              >
                ← Zurück zur Adresse
              </button>
            </div>
          )}

          {step === "confirm" && (
            <div className="checkout-confirm">
              <div className="confirm-icon">✓</div>
              <h2>Vielen Dank für Ihre Bestellung!</h2>
              <p>Ihre Bestellnummer: <strong>{orderId}</strong></p>
              <p style={{ color: "var(--ink-soft)" }}>
                Sie erhalten in Kürze eine Bestätigung per E-Mail an <strong>{form.email}</strong>.
              </p>
              <a href="/" className="btn btn-gold" style={{ marginTop: 24 }}>
                Zurück zum Shop
              </a>
            </div>
          )}
        </div>
      </div>
      <style>{checkoutStyles}</style>
    </>
  );
}

const checkoutStyles = `
.checkout-page{background:var(--cream);min-height:100vh;font-family:var(--sans);color:var(--ink)}
.checkout-wrap{max-width:1100px;margin:0 auto;padding:100px 24px 60px}
.checkout-header{display:flex;flex-direction:column;align-items:center;gap:16px;margin-bottom:40px}
.checkout-logo{font-family:var(--script);font-size:2rem;color:var(--gold-deep)}
.checkout-title{font-family:var(--display);font-size:.85rem;letter-spacing:.3em;text-transform:uppercase;color:var(--ink-soft)}
.checkout-steps{display:flex;gap:8px;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase}
.checkout-steps span{padding:6px 14px;border:1px solid var(--line);color:var(--ink-soft)}
.checkout-steps span.active{border-color:var(--gold);color:var(--gold-deep);font-weight:600}
.checkout-steps span.done{border-color:var(--olive);color:var(--olive)}
.checkout-grid{display:grid;grid-template-columns:1.3fr 1fr;gap:40px}
.checkout-form h2,.checkout-payment h2,.checkout-summary h3{font-family:var(--serif);font-size:1.6rem;margin-bottom:24px}
.form-group{margin-bottom:16px}
.form-group label{display:block;font-size:.78rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-soft);margin-bottom:4px}
.form-group input,.form-group select{width:100%;padding:12px 14px;border:1px solid var(--line);background:var(--ivory);font-family:var(--sans);font-size:.95rem;color:var(--ink);transition:border-color .3s}
.form-group input:focus,.form-group select:focus{outline:none;border-color:var(--gold)}
.form-row{display:grid;grid-template-columns:1fr 2fr;gap:12px}
.checkout-error{background:#fef2f2;color:#991b1b;padding:12px 16px;border:1px solid #fecaca;font-size:.85rem;margin-top:12px}
.checkout-secure-badge{text-align:center;font-size:.72rem;color:var(--ink-soft);margin-top:12px;letter-spacing:.1em}
.checkout-summary{background:var(--ivory);border:1px solid var(--line);padding:28px;height:fit-content;position:sticky;top:100px}
.checkout-item{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--line);font-size:.9rem}
.checkout-item-name{font-weight:500}
.checkout-item-qty{color:var(--ink-soft);margin-left:6px}
.checkout-item-price{font-weight:600}
.checkout-total{display:flex;justify-content:space-between;padding:16px 0;font-size:1.2rem;border-top:2px solid var(--gold)}
.checkout-total strong{color:var(--gold-deep)}
.checkout-trust{display:flex;flex-direction:column;gap:8px;margin-top:16px;font-size:.78rem;color:var(--olive)}
.checkout-payment{max-width:600px;margin:0 auto}
.payment-methods{display:grid;gap:12px}
.payment-method{display:flex;flex-direction:column;align-items:center;padding:24px;border:2px solid var(--line);background:var(--ivory);cursor:pointer;transition:all .3s;text-align:center;gap:6px}
.payment-method.selected{border-color:var(--gold);background:rgba(212,175,82,.08)}
.payment-method:hover{border-color:var(--gold)}
.pm-icon{font-size:2rem;line-height:1}
.pm-label{font-family:var(--serif);font-size:1.2rem;font-weight:600}
.pm-sub{font-size:.78rem;color:var(--ink-soft)}
.stripe-section,.paypal-section{margin-top:24px;padding:24px;background:var(--ivory);border:1px solid var(--line)}
.stripe-card-element{min-height:120px}
.checkout-confirm{text-align:center;padding:60px 24px;max-width:500px;margin:0 auto}
.checkout-confirm .confirm-icon{width:72px;height:72px;border-radius:50%;background:var(--olive);color:#fff;font-size:2rem;display:flex;align-items:center;justify-content:center;margin:0 auto 24px}
.checkout-confirm h2{font-family:var(--serif);font-size:2rem;margin-bottom:12px}
@media(max-width:768px){
  .checkout-grid{grid-template-columns:1fr}
  .checkout-summary{position:static}
}
`;
