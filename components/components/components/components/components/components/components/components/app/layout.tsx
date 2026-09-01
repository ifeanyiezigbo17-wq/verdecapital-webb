import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Asset Management`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Verde Capital is a premier Brazilian asset management firm focused on capital preservation, disciplined risk management and long-term institutional growth.",
  keywords: [
    "asset management",
    "investment funds",
    "Brazil",
    "gestão de recursos",
    "Verde Capital",
  ],
  openGraph: {
    title: `${SITE.name} — Asset Management`,
    description:
      "Premier Brazilian asset management focused on capital preservation.",
    type: "website",
    url: `https://${SITE.domain}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
