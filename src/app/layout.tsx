'use client';

import { Raleway, Montserrat } from "next/font/google";
import { LayoutProvider, useLayout } from "@/lib/context";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${raleway.variable} ${montserrat.variable} antialiased`}>
        <LayoutProvider>
          <LayoutContent>{children}</LayoutContent>
        </LayoutProvider>
      </body>
    </html>
  );
}
