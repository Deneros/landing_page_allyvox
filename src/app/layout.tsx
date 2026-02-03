'use client';

import { Geist, Geist_Mono } from "next/font/google";
import { LayoutProvider, useLayout } from "@/lib/context";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { bgColor, textColor } = useLayout();

  return (
    <div
      className="flex flex-col w-full transition-colors duration-300"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutProvider>
          <LayoutContent>{children}</LayoutContent>
        </LayoutProvider>
      </body>
    </html>
  );
}
