import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: "700",
  subsets: ["latin"],
})

const workSans = Work_Sans({
  variable: "--font-work-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "NFT-marketplace",
  description: "One stop destination for NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-work bg-[#2B2B2B]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
