import Script from "next/script";
import fs from "fs";
import path from "path";

export default function HomePage() {
  const bodyPath = path.join(process.cwd(), "public", "body.html");
  const bodyHtml = fs.readFileSync(bodyPath, "utf-8");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script src="/scripts.js" strategy="afterInteractive" />
    </>
  );
}
