import type { Metadata } from "next";
import "./globals.scss";

import localFont from "next/font/local";
import { cookies } from "next/headers";

import { Layout } from "./_components/Layout";
import { ThemeMode } from "./_contexts/ThemeProvider/ThemeProvider";
import Providers from "./providers";

const geistSans = localFont({
  src: "./_fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers theme={{ mode: cookieThemeMode }}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
