import type { Metadata } from "next";
import "./globals.scss";

import localFont from "next/font/local";

import { Layout } from "../components/Layout";
import Providers from "./providers";

const iosevka = localFont({
  variable: "--font-iosevka",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/Iosevka-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtraLightOblique.woff2",
      weight: "200",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-LightOblique.woff2",
      weight: "300",
      style: "oblique",
    },

    {
      path: "../assets/fonts/Iosevka-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-Oblique.woff2",
      weight: "400",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-MediumOblique.woff2",
      weight: "500",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-SemiBoldOblique.woff2",
      weight: "600",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-BoldOblique.woff2",
      weight: "700",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtraBoldOblique.woff2",
      weight: "800",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-HeavyItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-HeavyOblique.woff2",
      weight: "900",
      style: "oblique",
    },
  ],
});

const iosevkaExt = localFont({
  variable: "--font-iosevka-ext",
  display: "swap",
  src: [
    {
      path: "../assets/fonts/Iosevka-ExtendedExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedExtraLightOblique.woff2",
      weight: "200",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedLightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedLightOblique.woff2",
      weight: "300",
      style: "oblique",
    },

    {
      path: "../assets/fonts/Iosevka-Extended.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedOblique.woff2",
      weight: "400",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedMediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedMediumOblique.woff2",
      weight: "500",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedSemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedSemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedSemiBoldOblique.woff2",
      weight: "600",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedBoldOblique.woff2",
      weight: "700",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedExtraBoldOblique.woff2",
      weight: "800",
      style: "oblique",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedHeavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedHeavyItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "../assets/fonts/Iosevka-ExtendedHeavyOblique.woff2",
      weight: "900",
      style: "oblique",
    },
  ],
});

export const metadata: Metadata = {
  title: "Sasha Diachenko",
  description: "Front-end Web Developer",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    // url: "https://example.com", // todo: update
    title: "Sasha Diachenko",
    description: "Front-end Web Developer",
    siteName: "shu", // ???
    images: [
      {
        url: "/shu.svg",
        type: "image/svg+xml",
      },
    ],
  },
  icons: [
    // {
    //   rel: "apple-touch-startup-image",
    //   url: "/shu.svg",
    //   type: "image/svg+xml",
    // },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "mask-icon",
      url: "/shu.svg",
      type: "image/svg+xml",
      color: "#000",
    },
    {
      rel: "icon",
      url: "/shu.svg",
      type: "image/svg+xml",
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme-source="auto">
      <body className={`${iosevka.variable} ${iosevkaExt.variable}`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
