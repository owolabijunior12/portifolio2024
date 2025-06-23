 import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar";
import { Nunito } from '@next/font/google';
import Head from "next/head";

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Owolabi Destiny | Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Owolabi Destiny, a Full Stack Software Engineer specializing in React, Node.js, MongoDB, IoT, and more. Let's build something amazing together.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "IoT Developer",
    "Frontend Developer",
    "Backend Developer",
    "Owolabi Destiny",
    "Iboytech",
    "website Developer",
    "Tech Portfolio",
    "Mobile App Developer",
    "Software Engineer",
    "Web Developer",    
    "Software Engineer in Nigeria",
    "NFC Payment System Nigeria",
    "ESP32 NFC Tutorial",
    "AES encrypted NFC",
    "Node.js tap to pay",
    "Secure payment IoT system",
    "Build NFC with ESP32",
    "NFC card authentication",
    "React Native contactless payment",
    "IoT developer Nigeria",
    "Hire payment system developer"
  ],
  authors: [{ name: "Owolabi Destiny", url: "https://iboytech123.vercel.app" }],
  creator: "Owolabi Destiny",
  publisher: "Iboytech",
  openGraph: {
    title: "Owolabi Destiny | Full Stack Developer Portfolio",
    description:
      "Discover professional projects by Owolabi Destiny — a passionate Full Stack Developer with expertise in web, mobile, and IoT solutions.",
    url: "https://iboytech123.vercel.app",
    siteName: "Iboytech Portfolio",
    images: [
      {
        url: "https://iboytech123.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Owolabi Destiny Portfolio Screenshot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owolabi Destiny | Full Stack Developer Portfolio",
    description:
      "Explore the tech projects and skills of Owolabi Destiny. Let's work together to build great things.",
    creator: "@iboytech123",
    images: ["https://iboytech123.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://iboytech123.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Structured Data for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Owolabi Destiny Oluwanifemi",
              url: "https://iboytech123.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/owolabi-destiny-oluwanifemi-231222265",
                "https://twitter.com/iboytech123",
              ],
              jobTitle: "Full Stack Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Iboytech",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Portfolio Contact",
                email: "owolabijunior12@gmail.com",
                availableLanguage: ["English"],
              },
              knowsAbout: [
                "React",
                "Node.js",
                "MongoDB",
                "IoT",
                "NFC",
                "Embedded Systems",
                "Next.js",
                "TypeScript",
              ],
            }),
          }}
        />
      </Head>
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
