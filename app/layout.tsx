import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/clinic/Footer";
import { Header } from "@/components/clinic/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clinicaquintadorio.com"),
  title: "Clínica Quinta do Rio — Medicina Dentária em Seixal",
  description:
    "Clínica dentária multidisciplinar na Torre da Marinha, Seixal. " +
    "Implantologia, Ortodontia, Branqueamento e muito mais. 17 anos de experiência.",
  openGraph: {
    locale: "pt_PT",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://clinicaquintadorio.com/#clinic",
      name: "Clínica Quinta do Rio",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Casal do Marco 67C, Torre da Marinha",
        addressLocality: "Seixal",
        postalCode: "2840-731",
        addressCountry: "PT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "38.65",
        longitude: "-9.08",
      },
      telephone: ["+351212228440", "+351929033712"],
      email: "geral@clinicaquintadorio.com",
      medicalSpecialty: ["Dentistry", "Orthodontics", "Dental Implants"],
    },
    {
      "@type": "WebSite",
      "@id": "https://clinicaquintadorio.com/#website",
      url: "https://clinicaquintadorio.com",
      name: "Clínica Quinta do Rio",
      publisher: {
        "@id": "https://clinicaquintadorio.com/#clinic",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
