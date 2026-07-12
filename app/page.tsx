import fs from "fs";
import path from "path";
import Script from "next/script";

const criticalCss = `
*,:root{--cream:#F6F1E4;--cream-deep:#EDE4CF;--ivory:#FBF8F0;--ink:#16140F;--ink-soft:#46412F;--gold:#B8912F;--gold-bright:#D4AF52;--gold-deep:#8C6A1E;--gold-pale:#F2E2A8;--olive:#5C6B33;--olive-deep:#3a4220;--royal:#0E3B2E;--serif:'Cormorant Garamond',Georgia,serif;--sans:'Jost',system-ui,sans-serif;--display:'Cinzel',Georgia,serif;--script:'Great Vibes',cursive}
body{font-family:var(--sans);background:var(--cream);color:var(--ink);margin:0;overflow-x:hidden;line-height:1.6}
img{max-width:100%;display:block;height:auto}
.wrap{max-width:1280px;margin:0 auto;padding:0 32px}
`;

export default function HomePage() {
  const bodyPath = path.join(process.cwd(), "public", "body.html");
  const bodyHtml = fs.readFileSync(bodyPath, "utf-8");

  const cleanedHtml = bodyHtml.replace(
    /<script[\s\S]*?<\/script>/gi,
    ""
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: cleanedHtml }}
      />
      <Script src="/scripts.js" strategy="afterInteractive" />
    </>
  );
}
