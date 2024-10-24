import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar";
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Iboytech Portifolio",
  description: "Owolabi Destiny Oluwanifemi Portifoio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={nunito.className}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
