import type { Metadata } from "next";
import { Barlow_Condensed, Red_Hat_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-redhat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bonVivant = localFont({
  src: "../../public/fonts/bon-vivant.ttf",
  variable: "--font-bonvivant",
  display: "swap",
});

const siteUrl = "https://fundamentalsportslabs.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fundamental Sports Labs — Empowering Future Leaders",
    template: "%s | Fundamental Sports Labs",
  },
  description:
    "Empowering urban youth through basketball, football, soccer, golf, track & field, and baseball — plus mental wellness, financial responsibility, and VR/AR technology. Developing fundamentals that last a lifetime.",
  keywords: [
    "youth sports", "urban youth", "basketball", "football", "soccer", "golf",
    "track and field", "baseball", "financial responsibility", "mental wellness", "VR sports",
    "youth mentorship", "sports coaching", "after school programs",
    "Los Angeles youth sports", "nonprofit sports organization",
  ],
  authors: [{ name: "Fundamental Sports Labs" }],
  creator: "Fundamental Sports Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Fundamental Sports Labs",
    title: "Fundamental Sports Labs — Leaders of Tomorrow",
    description:
      "Empowering urban youth through sports, wellness, financial responsibility, and cutting-edge technology. Basketball, football, soccer, golf, track & field, and baseball — building fundamental skills and life structure.",
    images: [{ url: "/images/ft-logo.png", width: 512, height: 512, alt: "Fundamental Sports Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundamental Sports Labs — Leaders of Tomorrow",
    description: "Empowering urban youth through sports, wellness, and technology.",
    images: ["/images/ft-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/images/ft-logo.png",
    apple: "/images/ft-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${redHatDisplay.variable} ${bonVivant.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-redhat">{children}</body>
    </html>
  );
}
