import type { Metadata } from "next";
import { Barlow_Condensed, Red_Hat_Display } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundamental Sports Labs — Leaders of Tomorrow",
    description: "Empowering urban youth through sports, wellness, and technology.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "theme-color": "#F4767C",
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
      className={`${barlowCondensed.variable} ${redHatDisplay.variable} ${bonVivant.variable} antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col font-redhat">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-fsl-coral focus:text-white focus:px-4 focus:py-2 focus:rounded-md">
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
