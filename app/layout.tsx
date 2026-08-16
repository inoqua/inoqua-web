import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/seo/site";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import PageViewTracker from "@/components/analytics/PageViewTracker";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  // Todas las URLs relativas de "alternates.canonical" y OG en cada página se resuelven contra esto.
  metadataBase: new URL(site.siteUrl),
  // "%s" se reemplaza por el title de cada página (ver lib/seo/metadata.ts).
  title: {
    default: `${site.name} | Habilitaciones y Representación Técnica en Uruguay`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "consultoría alimentaria Uruguay",
    "habilitación bromatológica",
    "representación técnica alimentos",
    "consultoría bromatológica Montevideo",
  ],
  authors: [{ name: site.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.siteUrl,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  icons: {
    icon: "/img/logoS.png",
    apple: "/img/logoS.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={montserrat.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        <OrganizationJsonLd />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
