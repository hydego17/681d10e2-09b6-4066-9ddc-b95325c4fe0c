import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        black: "#1e1e20",
        theme: {
          main: "rgb(var(--theme-main) / <alpha-value>)",
          light: "rgb(var(--theme-light) / <alpha-value>)",
          dark: "rgb(var(--theme-dark) / <alpha-value>)",
          gradient: "rgb(var(--theme-gradient) / <alpha-value>)",
          black: "rgb(var(--theme-black) / <alpha-value>)",
        },
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
      animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        show: "show 0.4s forwards",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),

    // Custom class utility
    plugin(({ addUtilities }) => {
      addUtilities({
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
            width: "8px",

            "@media (min-width: 1024px)": {
              width: "10px",
            },
          },
          "&::-webkit-scrollbar-track": {
            "background-color": "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            "border-radius": "8px",
            "border-left": "0",
            "border-right": "0",
            "background-color": "#dfdfdf",

            "&:hover": {
              " background-color": "#d8d5d5",
            },
          },
          "&::-webkit-scrollbar-button": {
            width: "0",
            height: "0",
            display: "none",
          },
          "&::-webkit-scrollbar-corner": {
            "background-color": "transparent",
          },
        },
      });
    }),
  ],
};
export default config;
