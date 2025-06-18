import Head from "next/head"
import "./globals.css"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Grow at PPI Jerman",
  description: "Grow at PPI Jerman",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="min-h-dvh py-0 flex flex-col  scroll-smooth font-akzidenz-grotesk text-ga-dark bg-ga-light">
        <div className="grow">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
