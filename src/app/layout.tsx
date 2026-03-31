import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waze Lease Cars | ליסינג רכב פרימיום בישראל",
  description:
    "חברת הליסינג המובילה בישראל. מבחר רכבים חדשים במחירים הטובים ביותר, שירות אישי ומקצועי. ליסינג פרטי ומימוני. ראשון לציון.",
  keywords:
    "ליסינג, ליסינג רכב, ליסינג פרטי, ליסינג מימוני, השכרת רכב, רכב חדש, ישראל, ראשון לציון, ליסינג ראשון לציון, Waze Lease Cars",
  openGraph: {
    title: "Waze Lease Cars | ליסינג רכב פרימיום בישראל",
    description:
      "חברת הליסינג המובילה בישראל. שירות פרימיום, מחירים תחרותיים, ליסינג פרטי ומימוני.",
    locale: "he_IL",
    type: "website",
    siteName: "Waze Lease Cars",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://wazelease.github.io/waze-lease-cars",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Waze Lease Cars",
  description:
    "חברת ליסינג רכב פרימיום בישראל. ליסינג פרטי ומימוני במחירים הטובים ביותר.",
  url: "https://wazelease.github.io/waze-lease-cars",
  telephone: "+972-53-301-8838",
  address: {
    "@type": "PostalAddress",
    streetAddress: "הרצל 21",
    addressLocality: "ראשון לציון",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.9647,
    longitude: 34.7925,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "₪₪",
  image: "https://wazelease.github.io/waze-lease-cars/og-image.png",
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-heebo antialiased bg-black-pure text-white-pure">
        {children}
      </body>
    </html>
  );
}
