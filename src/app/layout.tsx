import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

import GdgLogo from "@public/icon.ico";
import config from "@/config";

import thumbnail from "@public/devfest-social-meta.png";

const appName = config.appName;
const appUrl = config.appUrl;
const appMetaTitle = `${appName} - Ogbomoso's Biggest Tech Conference`;
const imageAlt = "Google Developer Group Ogbomoso";
const appMetaDescription =
  "📢 The official DevFest Ogbomoso 2024 📢 Mark your calendars for November 30, 2024. Don’t miss out on three incredible days of innovation, networking, Exclusive hangout and learning. Get your FREE TICKET now: https://bit.ly/devfest-ogbomoso-24 #devfestogbomoso24 #DevFest2024 #devfest";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: appMetaTitle,
  description: appMetaDescription,
  authors: {
    url: appUrl,
    name: appName,
  },
  openGraph: {
    type: "website",
    url: appUrl,
    title: appMetaTitle,
    description: appMetaDescription,
    images: [
      {
        url: `${appUrl}devfest-social-meta.png` || thumbnail.src,
        alt: imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appMetaTitle,
    description: appMetaDescription,
    images: [
      {
        url: `${appUrl}devfest-social-meta.png` || thumbnail.src,
        alt: imageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      url: `${appUrl}icon.ico` || GdgLogo.src,
      type: "image/png",
      sizes: "32x32",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={GdgLogo.src} type="image/png" sizes="32x32" />
      </head>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
