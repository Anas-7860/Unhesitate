import type { Metadata, Viewport } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ClerkProvider} from "@clerk/nextjs";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Unhesitate",
  description: "Futuristic Glassmorphism UI",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable} dark`} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden min-h-screen bg-background text-foreground">
        <ClerkProvider appearance={{
          elements: {
            formButtonPrimary: 
              "bg-primary text-primary-foreground hover:opacity-90 rounded-full px-6 py-2",
            card: "shadow-xl rounded-2xl",
            headerTitle: "text-2xl font-bold text-gray-900",
          },
        }}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ClerkProvider>
       
      </body>
    </html>
  );
}
