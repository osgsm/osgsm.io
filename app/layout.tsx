import "@/styles/main.css";

import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";

import clsx from "clsx";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  ...OpenGraph,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const Spacer = () => <div style={{ marginTop: "48px" }} />;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.className)} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <main className="mx-auto w-full max-w-screen-md overflow-x-hidden px-6 py-24 md:overflow-x-visible">
            <article className="article">{children}</article>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
