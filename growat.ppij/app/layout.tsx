import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { IconicHeader } from "@/components/Navbar/header";
import { IconicFooter } from "@/components/footer";
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
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-roboto">
        <IconicHeader />
        {children}
        <IconicFooter />
        <Analytics />
      </body>
    </html>
  );
}