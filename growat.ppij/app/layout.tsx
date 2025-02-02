"use client";

import Head from "next/head";
import "./globals.css";
import { GrowatHeader } from "@/components/Navbar/header";
import { GrowatFooter } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import metadata from "./metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Scroll to 10 pixels on load
    window.scrollTo(0, 10);

    const handleScroll = () => {
      if (window.scrollY < 10) {
        window.scrollTo(0, 10);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
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