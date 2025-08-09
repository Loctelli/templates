import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skyline Roofing Solutions - Expert Roofing Services",
  description: "Protect your home with roofing solutions built to last. Expert craftsmanship, transparent service, and peace of mind. Licensed & insured roofing contractors.",
  keywords: "roofing, roof repair, roof replacement, storm damage, emergency roofing, licensed roofer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
