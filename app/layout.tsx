import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-4cb54053.vercel.app"),
  title: {
    default: "Prompt Real Estates | Nairobi Property Agency",
    template: "%s | Prompt Real Estates",
  },
  description:
    "Find your dream home with Prompt Real Estates. Trusted agents and prime properties across Kenya.",
  openGraph: {
    title: "Prompt Real Estates | Nairobi Property Agency",
    description:
      "Find your dream home with Prompt Real Estates. Trusted agents and prime properties across Kenya.",
    url: "/",
    siteName: "Prompt Real Estates",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt Real Estates",
    description:
      "Find your dream home with Prompt Real Estates. Trusted agents and prime properties across Kenya.",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0b1d39",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
