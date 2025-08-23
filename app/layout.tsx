import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import FooterCta from "@/components/FooterCta"
import { user } from "@/data/user"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: `${user.name} - Portfolio`,
  description: `${user.name} | Full-Stack Developer, DevOps Engineer & AI Enthusiast building scalable solutions.`,
  metadataBase: new URL("https://kaushalkrishnax.pages.dev"),
  openGraph: {
    title: `${user.name} - Portfolio`,
    description: `Explore ${user.name}'s work: Full-Stack, DevOps & AI.`,
    url: "https://kaushalkrishnax.pages.dev",
    siteName: `${user.name} - Portfolio`,
    images: [
      {
        url: user.avatarUrl,
        width: 400,
        height: 400,
        alt: `${user.name} - Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${user.name} - Portfolio`,
    description: `Explore ${user.name}'s work: Full-Stack, DevOps & AI.`,
    images: [user.avatarUrl],
    creator: "@kaushalkrishnax",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">
        <Navigation />
        <main className="pt-16">{children}</main>
        <FooterCta />
      </body>
    </html>
  )
}
