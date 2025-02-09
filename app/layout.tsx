import Head from "next/head"
import "./globals.css"
import { GrowatHeader } from "@/components/Navbar/header"
import { GrowatFooter } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import Backdrop from "@/public/assets/backdrop.png"
import Hero from "./hero"

export const metadata: Metadata = {
  title: "Growat PPI Jerman",
  description: "Growat PPI Jerman",
  icons: {
    icon: "@/public/assets/logogrowat.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // useEffect(() => {
  //   // Scroll to 10 pixels on load
  //   window.scrollTo(0, 0)

  //   const handleScroll = () => {
  //     if (window.scrollY < 10) {
  //       window.scrollTo(0, 10)
  //     }
  //   }

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll)

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

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
      <body className="font-akzidenz-grotesk">
        <Hero />
        <GrowatHeader heroHeight={Backdrop.height} />
        {children}
        <GrowatFooter />
        <Analytics />
      </body>
    </html>
  )
}
