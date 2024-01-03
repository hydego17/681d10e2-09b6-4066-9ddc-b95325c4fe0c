import "@/styles/globals.css";

import type { Metadata } from "next";

import { siteConfig } from "@/config";
import { ClientProviders } from "@/lib/client-providers";
import { DayJsProvider } from "@/lib/dayjs";
import { fontInter } from "@/lib/fonts";
import { ReactQueryProvider } from "@/lib/react-query-client";
import { ThemeProvider } from "@/lib/theme-provider";
import { cn } from "@/lib/utils";
import { AppLayout } from "@/components/app-layout";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [""],
  authors: [{ name: "", url: "" }],
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // fetch global data here if necessary
  const globalData = {};

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
      </head>
      <body className={cn(fontInter.className)}>
        <ReactQueryProvider dehydratedState={globalData}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <AppLayout>{children}</AppLayout>
          </ThemeProvider>
        </ReactQueryProvider>
        <DayJsProvider />
        <ClientProviders />
      </body>
    </html>
  );
}
