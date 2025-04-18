import type { Config } from "tailwindcss";

import fluid, { extract } from "fluid-tailwind";
import plugin from "tailwindcss/plugin";

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  important: true,
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./markdown/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./mdx-components.tsx",
    ],
    extract,
  },
  theme: {
    screens: {
      xs: "25rem", // 400px
      sm: "40rem", // 640px
      md: "48rem", // 768px
      lg: "64rem", // 1024px
      xl: "80rem", // 1280px
      "2xl": "96rem", // 1536px
    },
    extend: {
      colors: {
        mauve: {
          1: "var(--mauve-1)",
          2: "var(--mauve-2)",
          3: "var(--mauve-3)",
          4: "var(--mauve-4)",
          5: "var(--mauve-5)",
          6: "var(--mauve-6)",
          7: "var(--mauve-7)",
          8: "var(--mauve-8)",
          9: "var(--mauve-9)",
          10: "var(--mauve-10)",
          11: "var(--mauve-11)",
          12: "var(--mauve-12)",
          a1: "var(--mauve-a1)",
          a2: "var(--mauve-a2)",
          a3: "var(--mauve-a3)",
          a4: "var(--mauve-a4)",
          a5: "var(--mauve-a5)",
          a6: "var(--mauve-a6)",
          a7: "var(--mauve-a7)",
          a8: "var(--mauve-a8)",
          a9: "var(--mauve-a9)",
          a10: "var(--mauve-a10)",
          a11: "var(--mauve-a11)",
          a12: "var(--mauve-a12)",
        },
        black: {
          a1: "var(--black-a1)",
          a2: "var(--black-a2)",
          a3: "var(--black-a3)",
          a4: "var(--black-a4)",
          a5: "var(--black-a5)",
          a6: "var(--black-a6)",
          a7: "var(--black-a7)",
          a8: "var(--black-a8)",
          a9: "var(--black-a9)",
          a10: "var(--black-a10)",
          a11: "var(--black-a11)",
          a12: "var(--black-a12)",
        },
        white: {
          DEFAULT: "var(--white)",
          a1: "var(--white-a1)",
          a2: "var(--white-a2)",
          a3: "var(--white-a3)",
          a4: "var(--white-a4)",
          a5: "var(--white-a5)",
          a6: "var(--white-a6)",
          a7: "var(--white-a7)",
          a8: "var(--white-a8)",
          a9: "var(--white-a9)",
          a10: "var(--white-a10)",
          a11: "var(--white-a11)",
          a12: "var(--white-a12)",
        },
        purple: {
          1: "var(--purple-1)",
          2: "var(--purple-2)",
          3: "var(--purple-3)",
          4: "var(--purple-4)",
          5: "var(--purple-5)",
          6: "var(--purple-6)",
          7: "var(--purple-7)",
          8: "var(--purple-8)",
          9: "var(--purple-9)",
          10: "var(--purple-10)",
          11: "var(--purple-11)",
          12: "var(--purple-12)",
          a1: "var(--purple-a1)",
          a2: "var(--purple-a2)",
          a3: "var(--purple-a3)",
          a4: "var(--purple-a4)",
          a5: "var(--purple-a5)",
          a6: "var(--purple-a6)",
          a7: "var(--purple-a7)",
          a8: "var(--purple-a8)",
          a9: "var(--purple-a9)",
          a10: "var(--purple-a10)",
          a11: "var(--purple-a11)",
          a12: "var(--purple-a12)",
        },
        pink: {
          1: "var(--pink-1)",
          2: "var(--pink-2)",
          3: "var(--pink-3)",
          4: "var(--pink-4)",
          5: "var(--pink-5)",
          6: "var(--pink-6)",
          7: "var(--pink-7)",
          8: "var(--pink-8)",
          9: "var(--pink-9)",
          10: "var(--pink-10)",
          11: "var(--pink-11)",
          12: "var(--pink-12)",
          a1: "var(--pink-a1)",
          a2: "var(--pink-a2)",
          a3: "var(--pink-a3)",
          a4: "var(--pink-a4)",
          a5: "var(--pink-a5)",
          a6: "var(--pink-a6)",
          a7: "var(--pink-a7)",
          a8: "var(--pink-a8)",
          a9: "var(--pink-a9)",
          a10: "var(--pink-a10)",
          a11: "var(--pink-a11)",
          a12: "var(--pink-a12)",
        },
        iris: {
          1: "var(--iris-1)",
          2: "var(--iris-2)",
          3: "var(--iris-3)",
          4: "var(--iris-4)",
          5: "var(--iris-5)",
          6: "var(--iris-6)",
          7: "var(--iris-7)",
          8: "var(--iris-8)",
          9: "var(--iris-9)",
          10: "var(--iris-10)",
          11: "var(--iris-11)",
          12: "var(--iris-12)",
          a1: "var(--iris-a1)",
          a2: "var(--iris-a2)",
          a3: "var(--iris-a3)",
          a4: "var(--iris-a4)",
          a5: "var(--iris-a5)",
          a6: "var(--iris-a6)",
          a7: "var(--iris-a7)",
          a8: "var(--iris-a8)",
          a9: "var(--iris-a9)",
          a10: "var(--iris-a10)",
          a11: "var(--iris-a11)",
          a12: "var(--iris-a12)",
        },
        background: "var(--bg)",
        foreground: "var(--fg)",
        muted: "var(--muted)",
        hover: "var(--hover)",
        border: "var(--border)",
        scrollbar: {
          thumb: "var(--scrollbar-thumb)",
          track: "var(--scrollbar-track)",
        },
        selection: {
          background: "var(--selection-background)",
          foreground: "var(--selection-foreground)",
        },
        highlight: {
          background: "var(--highlight-background)",
          foreground: "var(--highlight-foreground)",
        },
        kbd: {
          background: "var(--kbd-background)",
          foreground: "var(--kbd-foreground)",
          border: "var(--kbd-border)",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        apple: ["var(--font-apple)"],
      },
      borderRadius: {
        small: "var(--radius-small)",
        base: "var(--radius-base)",
        large: "var(--radius-large)",
      },
      animation: {
        "move-background": "move-background 20s linear infinite",
        wave: "wave 0.8s ease-in-out 1.25s",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "spin-slow": "spin 60s linear infinite",
      },
      keyframes: {
        "move-background": {
          "0%, 100%": { backgroundPosition: "left center" },
          "50%": { backgroundPosition: "right center" },
        },
        wave: {
          "0%, 100%": { rotate: "0deg" },
          "20%": { rotate: "-12deg" },
          "50%": { rotate: "12deg" },
          "80%": { rotate: "-4deg" },
        },
      },
    },
  },
  plugins: [
    fluid({
      checkSC144: false,
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-small": {
          fontSize: "13px",
          letterSpacing: "0.01px",
        },
        ".text-default": {
          fontSize: "16px",
          lineHeight: "28px",
        },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".gradient-card": {
          background:
            "radial-gradient(50% 60% at 50% 10%, var(--gradient-from, theme(colors.iris.2)) 0%, var(--gradient-to, theme(colors.iris.3)) 100%)",
          boxShadow:
            "0px 0px 12px var(--shadow-accent-color, theme(colors.iris.a4)), 0px 0px 36px var(--shadow-base-color, theme(colors.iris.a2)), inset 0px 1px 0px rgba(255, 255, 255, 0.1), inset 0px 0px 1px rgba(255, 255, 255, 0.4)",
          borderRadius: "12px",
        },
      });
    }),
  ],
  darkMode: "class",
};

export default config;
