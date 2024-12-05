import type { Metadata } from "next";
import "./globals.scss";

import { i18n, Locale } from "i18n-config";
import localFont from "next/font/local";

import AppProviders from "@/contexts/AppProviders";
import { getDictionary } from "@/utils/get-dictionary";

import data from "../../constants/data.json";
import { AppLayout } from "../../layouts/AppLayout";

const iosevka = localFont({
  variable: "--font-iosevka",
  display: "swap",
  src: [
    {
      path: "../../assets/fonts/Iosevka-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Iosevka-ExtraLightOblique.woff2",
      weight: "200",
      style: "oblique",
    },
    {
      path: "../../assets/fonts/Iosevka-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Iosevka-LightOblique.woff2",
      weight: "300",
      style: "oblique",
    },

    {
      path: "../../assets/fonts/Iosevka-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Iosevka-Oblique.woff2",
      weight: "400",
      style: "oblique",
    },
    {
      path: "../../assets/fonts/Iosevka-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Iosevka-MediumOblique.woff2",
      weight: "500",
      style: "oblique",
    },
    {
      path: "../../assets/fonts/Iosevka-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Iosevka-SemiBoldOblique.woff2",
      weight: "600",
      style: "oblique",
    },
    {
      path: "../../assets/fonts/Iosevka-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Iosevka-BoldOblique.woff2",
      weight: "700",
      style: "oblique",
    },
    {
      path: "../../assets/fonts/Iosevka-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Iosevka-ExtraBoldOblique.woff2",
      weight: "800",
      style: "oblique",
    },
    {
      path: "../../assets/fonts/Iosevka-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Iosevka-HeavyOblique.woff2",
      weight: "900",
      style: "oblique",
    },
  ],
});

export const metadata: Metadata = {
  title: data.contact.username,
  description: data.position,
  applicationName: data.contact.username,
  authors: [{ name: data.contact.email }],
  openGraph: {
    type: "website",
    title: data.name,
    description: data.position,
    url: data.contact.website,
    siteName: data.contact.shortname,
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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} data-theme-source="auto">
      <body className={`${iosevka.variable}`}>
        <AppProviders>
          <AppLayout dictionary={dictionary.layout}>{children}</AppLayout>
        </AppProviders>
      </body>
    </html>
  );
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
