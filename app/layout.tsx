import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAPERLA · Premium Olive Oil · Édition Prestige",
  description: "LAPERLA Premium Olive Oil – Édition Prestige. Prämiertes, ECO-CERT & TN-BIO-001 zertifiziertes tunesisches Olivenöl. Best Olive Oil in the World – Swiss Genf 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Jost:wght@300;400;500;600&family=Cinzel:wght@400;500;600;700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
