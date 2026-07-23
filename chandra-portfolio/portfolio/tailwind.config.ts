import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        accent: { DEFAULT: "#2563EB", soft: "#EFF4FF", dim: "#1D4ED8" },
        line: "#E8E8E6",
        paper: "#FFFFFF",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: { prose: "44rem", shell: "72rem" },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#333333",
            "--tw-prose-headings": "#0A0A0A",
            "--tw-prose-links": "#2563EB",
            "--tw-prose-bold": "#0A0A0A",
            "--tw-prose-th-borders": "#E8E8E6",
            "--tw-prose-td-borders": "#E8E8E6",
            maxWidth: "none",
            a: { textDecoration: "none", fontWeight: "500", "&:hover": { textDecoration: "underline" } },
            "h1, h2, h3": { letterSpacing: "-0.02em" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
