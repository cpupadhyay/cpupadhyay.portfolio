import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F3F7FF",
        accent: { DEFAULT: "#60A5FA", soft: "#152B48", dim: "#93C5FD" },
        line: "#253550",
        paper: "#0B1220",
        muted: "#98A7BD",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: { prose: "44rem", shell: "72rem" },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#C9D5E6",
            "--tw-prose-headings": "#F3F7FF",
            "--tw-prose-links": "#60A5FA",
            "--tw-prose-bold": "#F3F7FF",
            "--tw-prose-th-borders": "#253550",
            "--tw-prose-td-borders": "#253550",
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
