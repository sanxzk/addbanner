import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ad Banner Application",
  description: "Ad Banner Application | User can edit , delete and add can banners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
