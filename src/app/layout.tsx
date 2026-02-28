import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import SplashCursor from "@/components/SplashCursor";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Portfolio | Interactive Confidant",
  description:
    "A personal portfolio with an interactive AI confidant to explain experiences and projects.",
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
          <main className="grow container mx-auto px-4 sm:px-6 lg:px-8 md:py-8">
            {children}
          </main>
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
