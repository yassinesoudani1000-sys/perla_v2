import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

const protectedPaths = [
  "/api/orders",
  "/api/newsletter",
  "/api/contact",
  "/api/b2b",
  "/api/reviews",
  "/api/stripe/create-payment-intent",
  "/api/paypal/create-order",
  "/api/paypal/capture-order",
];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (protectedPaths.some((p) => pathname.startsWith(p))) {
    const ip = getClientIp(request);
    const allowed = rateLimit(ip, 20, 60000);

    if (!allowed) {
      return NextResponse.json(
        { error: "Trop de requêtes. Veuillez réessayer dans une minute." },
        { status: 429 }
      );
    }
  }

  if (pathname.startsWith("/api/")) {
    const response = NextResponse.next();
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
