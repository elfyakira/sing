import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { seo, company } from "@/lib/site";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: seo.siteUrl ? new URL(seo.siteUrl) : undefined,
  title: {
    default: seo.defaultTitle || company.name || "会社名",
    template: `%s${seo.titleSuffix || ""}`,
  },
  description: seo.defaultDescription,

  // canonical URL
  alternates: {
    canonical: "/",
  },

  // robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // OGP
  openGraph: {
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    locale: "ja_JP",
    type: "website",
    url: seo.siteUrl,
    siteName: company.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle || company.name,
    description: seo.defaultDescription,
    images: ["/opengraph-image"],
  },
};

// Viewport
export const viewport: Viewport = {
  themeColor: "#1A2E44",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-56Y20GMKP2"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-56Y20GMKP2');
          `}
        </Script>
        <StructuredData
          data={[
            generateOrganizationSchema(),
            generateWebSiteSchema(),
            generateLocalBusinessSchema(),
          ]}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
