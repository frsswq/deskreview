import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    backgroundImage: {},
    extend: {
      fontFamily: {
        sans: ["AreaNormal", "Inter", ...defaultTheme.fontFamily.sans],
        AreaInktrap: ["AreaInktrap", ...defaultTheme.fontFamily.sans],
        AreaNormal: ["AreaNormal", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "desk-gray": {
          300: "#eaecec",
          500: "#bbbdbf",
          700: "#343535",
        },
        "desk-blue": "#2e59a9",
        "desk-brown": "#574a43",
        "desk-orange": "#e36c2a",
        "desk-white": "#ffffff",
        "desk-black": "#050505",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(15px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein:
          "slidein 1.5s cubic-bezier(0.16, 1, 0.3, 1) calc(var(--delay, 0ms)) forwards",
        slideinFast:
          "slidein 0.5s cubic-bezier(0.16, 1, 0.3, 1) calc(var(--delay, 0ms)) forwards",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function spicyGradients({ addUtilities }) {
      addUtilities({
        ".bg-none": { "background-image": "none" },
        ".bg-gradient-to-t": {
          "background-image":
            "linear-gradient(to top, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to top, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to top, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-b": {
          "background-image":
            "linear-gradient(to bottom, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to bottom, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to bottom, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-l": {
          "background-image":
            "linear-gradient(to left, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to left, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to left, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-r": {
          "background-image":
            "linear-gradient(to right, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to right, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to right, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-tl": {
          "background-image":
            "linear-gradient(to top left, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to top left, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to top left, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-tr": {
          "background-image":
            "linear-gradient(to top right, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to top right, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to top right, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-bl": {
          "background-image":
            "linear-gradient(to bottom left, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to bottom left, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to bottom left, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-br": {
          "background-image":
            "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to bottom right, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to bottom right, var(--tw-gradient-stops))",
            },
        },
      });
    }),
  ],
};
