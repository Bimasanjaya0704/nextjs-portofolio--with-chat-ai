import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import SplashCursor from "@/components/SplashCursor";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Bima Sanjaya | IT System & Software Engineer",
    template: "%s | Bima Sanjaya",
  },
  description:
    "Portfolio of Bima Sanjaya, an IT System Engineer specializing in Smart Factory systems and Software Engineer crafting modern web interfaces.",
  keywords: [
    "Bima Sanjaya",
    "IT System Engineer",
    "Software Engineer",
    "Smart Factory",
    "Logistics Systems",
    "React Developer",
    "Next.js Portfolio",
    "Industrial IT",
    "CIM",
    "MCS",
  ],
  authors: [{ name: "Bima Sanjaya" }],
  creator: "Bima Sanjaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bimasanjayaweb.vercel.app/", // Replace with actual domain if different
    title: "Bima Sanjaya | IT System & Software Engineer",
    description:
      "IT System Engineer specializing in Smart Factory systems and Software Engineer crafting modern web interfaces.",
    siteName: "Bima Sanjaya Portfolio",
    images: [
      {
        url: "/photo.png",
        width: 1200,
        height: 630,
        alt: "Bima Sanjaya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bima Sanjaya | IT System & Software Engineer",
    description:
      "IT System Engineer specializing in Smart Factory systems and Software Engineer crafting modern web interfaces.",
    images: ["/photo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashCursor />
          <Navbar />
          <main className="grow">{children}</main>
          <footer className="border-t py-8 text-center text-sm text-muted-foreground">
            <div className="container mx-auto px-4">
              © {new Date().getFullYear()} AI Portfolio. Built with Next.js &
              OpenAI.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
