import "@/styles/main.css";

import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { Inter } from "next/font/google";
import Script from "next/script";

export const metadata: Metadata = {
  ...OpenGraph,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={clsx(inter.className)} suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col text-[0.9375rem] leading-loose antialiased md:text-base/[1.75]">
        <Providers>
          <Script src="https://embed.bsky.app/static/embed.js" />
          <Script src="https://platform.twitter.com/widgets.js" />
          <Header />
          <main className="mx-auto w-full max-w-7xl">
            <article className="article">{children}</article>
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
