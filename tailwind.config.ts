import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        show: "show 0.3s forwards",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // ~14px
        mini: ["0.9375rem", { lineHeight: "1.35rem" }], // custom ~15px
        base: ["1rem", { lineHeight: "1.5rem" }], // ~ 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),

    // Custom class utility
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".text-gradient": {
          background: "var(--gradient-bg)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".centered": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".full-bleed": {
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          "margin-left": "-50vw",
          "margin-right": "-50vw",
        },
        ".no-scrollbar": {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "&::-webkit-scrollbar-track": {
            display: "none",
          },
        },
        ".smooth-scrollbar": {
          "&::-webkit-scrollbar": {
            height: "6px",
            width: "7px",

            "@media (min-width: 1024px)": {
              width: "8px",
            },
          },
          "&::-webkit-scrollbar-track": {
            "background-color": "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            "border-radius": "8px",
            "border-left": "0px",
            "border-right": "0px",
            "background-color": "#dfdfdf",

            "&:hover": {
              " background-color": "#d8d5d5",
            },
          },
          "&::-webkit-scrollbar-button": {
            width: "0px",
            height: "0px",
            display: "none",
          },
          "&::-webkit-scrollbar-corner": {
            "background-color": "transparent",
          },
        },
      });
    }),
  ],
} satisfies Config;

export default config;
