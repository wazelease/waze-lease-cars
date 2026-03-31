import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waze Lease Cars | ליסינג רכב פרימיום בישראל",
  description:
    "חברת הליסינג המובילה בישראל. מבחר רכבים חדשים במחירים הטובים ביותר, שירות אישי ומקצועי. ליסינג פרטי, תפעולי ומימוני.",
  keywords:
    "ליסינג, ליסינג רכב, ליסינג פרטי, ליסינג תפעולי, השכרת רכב, רכב חדש, ישראל",
  openGraph: {
    title: "Waze Lease Cars | ליסינג רכב פרימיום",
    description:
      "חברת הליסינג המובילה בישראל. שירות פרימיום, מחירים תחרותיים, מבחר ענק של רכבים.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&family=Rubik:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-heebo antialiased bg-black-pure text-white-pure">
        {children}
      </body>
    </html>
  );
}
