import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { company } from "@/data/company";
import { contact } from "@/data/contact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.3dalarmes.com.br"),
  title: {
    default: "3D ALARMES — Segurança Eletrônica e Monitoramento 24h em Manaus",
    template: "%s | 3D ALARMES Manaus",
  },
  description:
    "Mais de 20 anos protegendo Manaus com sistemas de alarme, monitoramento 24 horas, CFTV, cercas elétricas, controle de acesso e rastreamento veicular. Solicite seu orçamento.",
  keywords: [
    "segurança eletrônica em Manaus",
    "alarme em Manaus",
    "câmeras de segurança em Manaus",
    "CFTV Manaus",
    "rastreamento veicular Manaus",
    "monitoramento 24 horas Manaus",
    "cerca elétrica Manaus",
    "controle de acesso Manaus",
    "3D Alarmes",
  ],
  authors: [{ name: "3D ALARMES" }],
  creator: "3D ALARMES",
  publisher: "3D ALARMES",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "3D ALARMES — Segurança Eletrônica e Monitoramento 24h em Manaus",
    description:
      "Proteção real para o que mais importa. Soluções completas de segurança para residências, condomínios e empresas em Manaus.",
    url: "https://www.3dalarmes.com.br",
    siteName: "3D ALARMES",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logos/logo-frontal.png",
        width: 1200,
        height: 1200,
        alt: "3D ALARMES — Segurança Eletrônica em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D ALARMES — Segurança Eletrônica e Monitoramento 24h",
    description:
      "Mais de 20 anos de tradição em segurança eletrônica e monitoramento 24h em Manaus.",
    images: ["/logos/logo-frontal.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: company.name,
    description: company.shortDescription,
    image: "https://www.3dalarmes.com.br/logos/logo-frontal.png",
    url: "https://www.3dalarmes.com.br",
    telephone: [contact.phones.primary, contact.phones.secondary],
    email: contact.email.primary,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contact.address.street}, ${contact.address.number}, ${contact.address.complement}`,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Manaus",
    },
    openingHoursSpecification: {
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
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-800 antialiased selection:bg-yellow-400 selection:text-navy-950">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
