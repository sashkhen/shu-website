import type { Metadata } from "next";
import "./globals.scss";

import localFont from "next/font/local";

import { Layout } from "./_components/Layout";
import Providers from "./providers";

const iosevka = localFont({
  variable: "--font-iosevka",
  display: "swap",
  src: [
    {
      path: "./_fonts/Iosevka-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtraLightOblique.woff2",
      weight: "200",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-LightOblique.woff2",
      weight: "300",
      style: "oblique",
    },

    {
      path: "./_fonts/Iosevka-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-Oblique.woff2",
      weight: "400",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-MediumOblique.woff2",
      weight: "500",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-SemiBoldOblique.woff2",
      weight: "600",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-BoldOblique.woff2",
      weight: "700",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtraBoldOblique.woff2",
      weight: "800",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-HeavyItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-HeavyOblique.woff2",
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
      path: "./_fonts/Iosevka-ExtendedExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtendedExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtendedExtraLightOblique.woff2",
      weight: "200",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-ExtendedLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtendedLightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtendedLightOblique.woff2",
      weight: "300",
      style: "oblique",
    },

    {
      path: "./_fonts/Iosevka-Extended.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtendedItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtendedOblique.woff2",
      weight: "400",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-ExtendedMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtendedMediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtendedMediumOblique.woff2",
      weight: "500",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-ExtendedSemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtendedSemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtendedSemiBoldOblique.woff2",
      weight: "600",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-ExtendedBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtendedBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtendedBoldOblique.woff2",
      weight: "700",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-ExtendedExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtendedExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtendedExtraBoldOblique.woff2",
      weight: "800",
      style: "oblique",
    },
    {
      path: "./_fonts/Iosevka-ExtendedHeavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./_fonts/Iosevka-ExtendedHeavyItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./_fonts/Iosevka-ExtendedHeavyOblique.woff2",
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
