import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { GrowatHeader } from "@/components/Navbar/header";
import { GrowatFooter } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Growat PPI Jerman",
  description: "Growat PPI Jerman",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-akzidenz-grotesk">
        <GrowatHeader />
        {children}
        <GrowatFooter />
        <Analytics />
      </body>
    </html>
  );
}