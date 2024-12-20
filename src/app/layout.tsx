import type { Metadata } from "next";
import "./globals.scss";

import { i18n } from "i18n-config";
import localFont from "next/font/local";

import { METADATA } from "@/constants/metadata";
import { DEFAULT_THEME_MODE, DEFAULT_THEME_VARIANT } from "@/constants/theme";
import AppProviders from "@/contexts/AppProviders";
import { getDictionary } from "@/utils/get-dictionary";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { AppLayout } from "../layouts/AppLayout";

const iosevka = localFont({
  variable: "--font-iosevka",
  display: "swap",
  src: [
    // {
    //   path: "../assets/fonts/Iosevka-ExtraLight.woff2",
    //   weight: "200",
    //   style: "normal",
    // },
    // {
    //   path: "../assets/fonts/Iosevka-ExtraLightOblique.woff2",
    //   weight: "200",
    //   style: "oblique",
    // },
    // {
    //   path: "../assets/fonts/Iosevka-Light.woff2",
    //   weight: "300",
    //   style: "normal",
    // },
    // {
    //   path: "../assets/fonts/Iosevka-LightOblique.woff2",
    //   weight: "300",
    //   style: "oblique",
    // },

    {
      path: "../assets/fonts/Iosevka-Regular.woff2",
      weight: "400",
      style: "normal",
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
    // {
    //   path: "../assets/fonts/Iosevka-MediumOblique.woff2",
    //   weight: "500",
    //   style: "oblique",
    // },
    {
      path: "../assets/fonts/Iosevka-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    // {
    //   path: "../assets/fonts/Iosevka-SemiBoldOblique.woff2",
    //   weight: "600",
    //   style: "oblique",
    // },
    {
      path: "../assets/fonts/Iosevka-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: "../assets/fonts/Iosevka-BoldOblique.woff2",
    //   weight: "700",
    //   style: "oblique",
    // },
    // {
    //   path: "../assets/fonts/Iosevka-ExtraBold.woff2",
    //   weight: "800",
    //   style: "normal",
    // },
    // {
    //   path: "../assets/fonts/Iosevka-ExtraBoldOblique.woff2",
    //   weight: "800",
    //   style: "oblique",
    // },
    // {
    //   path: "../assets/fonts/Iosevka-Heavy.woff2",
    //   weight: "900",
    //   style: "normal",
    // },
    // {
    //   path: "../assets/fonts/Iosevka-HeavyOblique.woff2",
    //   weight: "900",
    //   style: "oblique",
    // },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: METADATA.title,
  applicationName: METADATA.shortName,
  description: METADATA.description,
  authors: METADATA.authors,
  generator: METADATA.generator,
  openGraph: {
    type: "website",
    title: METADATA.title,
    siteName: METADATA.shortName,
    description: METADATA.description,
    url: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    images: [
      {
        url: "/shu.svg",
        type: "image/svg+xml",
      },
    ],
  },
  icons: [
    {
      rel: "apple-touch-startup-image",
      url: "/shu.svg",
      type: "image/svg+xml",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "apple-icon",
      url: "/apple-icon.png",
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
  const lang = "en";
  const messages = await getDictionary(lang);

  return (
    <html
      lang={lang}
      data-theme-source="auto"
      data-theme-mode={DEFAULT_THEME_MODE}
      data-theme-variant={DEFAULT_THEME_VARIANT}
    >
      <body className={`${iosevka.variable}`}>
        <AppProviders intl={{ locale: lang, messages: messages }}>
          <AppLayout>{children}</AppLayout>
        </AppProviders>
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
