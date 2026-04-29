import "@/styles/globals.css";

import { Manrope } from "next/font/google";
import { type Metadata, type Viewport } from "next";
import { Toaster } from "sonner";

import { APP_NAME, APP_DESCRIPTION } from "@/config/config";
import LandingPageHeader from "@/components/landing/LandingPageHeader";
import LandingFooter from "@/components/landing/LandingFooter";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="theme-color" content="transparent" />
      </head>
      <body className="vertical min-h-dvh">
        <div className="bg-background flex min-h-screen flex-col">
          <LandingPageHeader />
          <main className="flex-1">{children}</main>
          <LandingFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
