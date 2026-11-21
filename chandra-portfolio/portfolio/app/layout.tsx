import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://cpupadhyay-portfolio.vercel.app"),
  title: {
    default: "Chandra Prakash Upadhyay — Founder, Lychee AI · Aspiring APM",
    template: "%s — Chandra Prakash Upadhyay",
  },
  description:
    "Founder of Lychee AI, a live multi-model AI assistant I designed, built and launched. Former data analyst at Soroco. Product case studies on Claude, Groww, Zomato, Snapmint and more. Open to Associate PM roles.",
  openGraph: {
    title: "Chandra Prakash Upadhyay — Product builder who ships",
    description:
      "Founder of Lychee AI (live). Product case studies, decisions and metrics from an aspiring Associate Product Manager.",
    images: [{ url: "/profile.jpg", width: 800, height: 800, alt: "Chandra Prakash Upadhyay" }],
    type: "website",
    locale: "en_IN",
  },
  keywords: [
    "Associate Product Manager", "AI Product Builder", "Lychee AI", "Product Case Study",
    "Chandra Prakash Upadhyay", "APM Portfolio", "Product Management India",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chandra Prakash Upadhyay",
    jobTitle: "Founder & Product Builder",
    worksFor: { "@type": "Organization", name: "Lychee AI", url: "https://getlychee-ai.online" },
    email: "mailto:chandraprakashupadhyay2001@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    sameAs: [
      "https://www.linkedin.com/in/cpupadhyay",
      "https://github.com/cpupadhyay",
      "https://getlychee-ai.online",
    ],
    knowsAbout: ["Product Analysis", "Funnel Analysis", "SQL", "User Behaviour Analysis", "KPI Tracking"],
  };
  return (
    <html lang="en" className="scroll-pt-20">
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
