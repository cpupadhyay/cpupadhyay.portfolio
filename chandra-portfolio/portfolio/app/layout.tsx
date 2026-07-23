import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cpupadhyay.vercel.app"),
  title: {
    default: "Chandra Prakash Upadhyay — Aspiring Associate Product Manager",
    template: "%s — Chandra Prakash Upadhyay",
  },
  description:
    "AI product builder and product analyst. I break down complex product problems using data, then translate them into decisions teams can act on. APM case studies on Groww, Zomato, Snapmint, Claude, and more.",
  openGraph: {
    title: "Chandra Prakash Upadhyay — Product Portfolio",
    description:
      "Product case studies, teardowns, and frameworks by an aspiring Associate Product Manager.",
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "Associate Product Manager", "Product Analyst", "Product Case Study",
    "Chandra Prakash Upadhyay", "APM Portfolio", "Product Management India",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chandra Prakash Upadhyay",
    jobTitle: "Aspiring Associate Product Manager",
    email: "mailto:chandraprakashupadhyay2001@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    sameAs: [
      "https://www.linkedin.com/in/cpupadhyay",
      "https://github.com/cpupadhyay",
    ],
    knowsAbout: ["Product Analysis", "Funnel Analysis", "SQL", "User Behaviour Analysis", "KPI Tracking"],
  };
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
