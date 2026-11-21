import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#EEF1F7",
        paper: "#07090E",
        surface: { DEFAULT: "#0D1119", 2: "#121722", 3: "#181E2B" },
        line: "#1F2635",
        muted: "#8E98AB",
        body: "#B7C0D0",
        accent: { DEFAULT: "#7DA2FF", soft: "#16203A", dim: "#A9C1FF" },
        lychee: { DEFAULT: "#FF4F7B", soft: "#2A1220", dim: "#FF8AA8" },
        live: "#34D399",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      maxWidth: { prose: "46rem", shell: "74rem" },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.8)" },
        },
        blink: { "0%, 80%, 100%": { opacity: "0.2" }, "40%": { opacity: "1" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: {
        pulseDot: "pulseDot 1.8s ease-in-out infinite",
        blink: "blink 1.4s infinite both",
        marquee: "marquee 38s linear infinite",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#B7C0D0",
            "--tw-prose-headings": "#EEF1F7",
            "--tw-prose-links": "#7DA2FF",
            "--tw-prose-bold": "#EEF1F7",
            "--tw-prose-counters": "#8E98AB",
            "--tw-prose-bullets": "#3A4357",
            "--tw-prose-hr": "#1F2635",
            "--tw-prose-quotes": "#D5DBE6",
            "--tw-prose-quote-borders": "#7DA2FF",
            "--tw-prose-code": "#EEF1F7",
            "--tw-prose-th-borders": "#2A3244",
            "--tw-prose-td-borders": "#1F2635",
            maxWidth: "none",
            a: { textDecoration: "none", fontWeight: "500", "&:hover": { textDecoration: "underline" } },
            "h1, h2, h3": { letterSpacing: "-0.02em" },
            blockquote: {
              fontStyle: "normal",
              background: "#0D1119",
              borderRadius: "0.75rem",
              padding: "0.75rem 1.25rem",
            },
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:last-of-type::after": { content: "none" },
            table: { display: "block", overflowX: "auto" },
            "thead th": { color: "#EEF1F7" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
