import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Mae's Childcare | Trusted Bilingual Childcare in San Francisco, CA",
  description:
    "Mae's Childcare is a licensed bilingual childcare home in San Francisco offering art-based learning, nurturing care, and early education for ages 8 months to 5 years. Licensed #384005044.",
  keywords:
    "childcare San Francisco, daycare San Francisco, bilingual childcare, licensed daycare, infant care, toddler program, preschool, Hayes Valley childcare, Filipino childcare",
  metadataBase: new URL("https://www.maeschildcare.com"),
  alternates: {
    canonical: "https://www.maeschildcare.com",
  },
  openGraph: {
    title: "Mae's Childcare | Licensed Childcare in San Francisco",
    description:
      "Trusted bilingual childcare in San Francisco, CA — nurturing art-based learning and early education for children 8 months to 5 years.",
    url: "https://www.maeschildcare.com",
    siteName: "Mae's Childcare",
    images: [
      {
        url: "/public/name.png",
        width: 1200,
        height: 630,
        alt: "Mae's Childcare - San Francisco",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "Mae’s Childcare",
              image: "https://www.maeschildcare.com/logo.png",
              url: "https://www.maeschildcare.com",
              telephone: "+1-415-555-1234",
              address: {
                "@type": "PostalAddress",
                streetAddress: "949 Grove St",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94117",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.7769,
                longitude: -122.4363,
              },
              openingHours: "Mo-Fr 08:30-18:30",
              priceRange: "$$",
              sameAs: [
                "https://www.facebook.com/maeschildcare",
                "https://www.instagram.com/maeschildcare",
              ],
              description:
                "Mae’s Childcare provides nurturing, art-based early education and bilingual daycare services for families in San Francisco, CA.",
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
