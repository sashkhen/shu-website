import type { Metadata } from "next";
import "./globals.scss";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";

import { Layout } from "./_components/Layout";
import { ThemeMode } from "./_contexts/ThemeProvider";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const parkinsans = localFont({
  src: "./_fonts/Parkinsans[wght].woff2",
  variable: "--font-parkinsans",
  weight: "300 800",
});
const geistMono = localFont({
  src: "./_fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sasha Diachenko",
  description: "Front-end Web Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieThemeMode = cookieStore.get("theme-mode")?.value as
    | ThemeMode
    | undefined;

  return (
    <html lang="en" data-theme-source="auto" data-theme-mode={cookieThemeMode}>
      <body
        className={`${parkinsans.variable} ${inter.variable} ${geistMono.variable}`}
      >
        <Providers theme={{ mode: cookieThemeMode }}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
