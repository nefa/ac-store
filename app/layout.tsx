import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aerconditionatservice.ro"),
  title: {
    default: "AC Store — Aparate de Aer Condiționat și Piese",
    template: "%s | AC Store",
  },
  description:
    "Cumpără aparate de aer condiționat, piese și accesorii. Livrare rapidă în toată România.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://aerconditionatservice.ro",
    siteName: "AC Store",
    title: "AC Store — Aparate de Aer Condiționat și Piese",
    description:
      "Cumpără aparate de aer condiționat, piese și accesorii. Livrare rapidă în toată România.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
