import type { Metadata } from "next";

import About from "@/components/screens/about";
import { OpenGraph } from "@/lib/og";

const title = "About";

export const metadata: Metadata = {
  ...OpenGraph,
  title,
  openGraph: {
    title,
  },
};

export default function Page() {
  return <About />;
}
