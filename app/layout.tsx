import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GTM";
import { MetaPixel, MetaPixelNoScript } from "@/components/PIXEL";
import { MetaPixelPageView } from "@/components/PIXEL-page-view";
import content from "@/content.json";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const getSiteUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (
    envUrl &&
    (envUrl.startsWith("http://") || envUrl.startsWith("https://"))
  ) {
    return envUrl;
  }
  return "https://auto-prime-lp.vercel.app";
};

const siteUrl = getSiteUrl();
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const siteTitle = "Auto Prime | Mecânica Automotiva em Belém - PA";

const siteDescription =
  "Revisão, suspensão, troca de óleo, freios, alinhamento e balanceamento em Belém-PA. Diagnóstico preciso, atendimento transparente e serviços automotivos com foco em segurança e desempenho.";

const ogImageAlt = "Auto Prime - Mecânica Automotiva em Belém do Pará";

const ogImageUrl = `${siteUrl}/og-image.png`;

const logoUrl = `${siteUrl}/auto-prime-logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  applicationName: content.site.name,

  title: siteTitle,

  description: siteDescription,

  keywords: [
    "Auto Prime",
    "mecânica automotiva Belém",
    "oficina mecânica Belém",
    "revisão automotiva Belém",
    "troca de óleo Belém",
    "suspensão automotiva",
    "troca de pastilhas de freio",
    "freios automotivos",
    "alinhamento e balanceamento",
    "diagnóstico automotivo",
    "oficina na Pedreira",
    "mecânica em Belém PA",
    "revisão completa automóvel",
    "manutenção preventiva",
    "manutenção corretiva",
  ],

  publisher: content.site.name,
  creator: content.site.name,

  category: "Automotive",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: content.site.name,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },

  icons: {
    icon: [
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon-96x96.png"],
  },

  generator: "Next.js",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F20707",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: content.site.name,
    url: siteUrl,
    logo: logoUrl,
    image: ogImageUrl,
    sameAs: [content.contact.instagram],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: content.site.name,
    url: siteUrl,
    image: ogImageUrl,
    telephone: `+${content.contact.whatsapp.number}`,
    ...(content.contact.email ? { email: content.contact.email } : {}),
    sameAs: [content.contact.instagram],
    areaServed: content.site.location,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: content.site.city,
      addressRegion: content.site.state,
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <GoogleTagManager gtmId={gtmId} />
        <MetaPixel pixelId={metaPixelId} />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <GoogleTagManagerNoScript gtmId={gtmId} />
        <MetaPixelNoScript pixelId={metaPixelId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <Suspense fallback={null}>
          <MetaPixelPageView pixelId={metaPixelId} />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
