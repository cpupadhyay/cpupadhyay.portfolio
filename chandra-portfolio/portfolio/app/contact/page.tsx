import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Chandra Prakash Upadhyay.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-shell px-5 py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Contact</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Let's talk product.</h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
            Whether it's an APM role, a product analyst opening, feedback on a case study, or a
            15-minute call — my inbox is open.
          </p>
          <ul className="mt-8 space-y-3 text-sm font-medium">
            <li>
              <a className="focus-ring rounded text-ink hover:text-accent" href="mailto:chandraprakashupadhyay2001@gmail.com">
                ✉️ chandraprakashupadhyay2001@gmail.com
              </a>
            </li>
            <li>
              <a className="focus-ring rounded text-ink hover:text-accent" href="https://www.linkedin.com/in/cpupadhyay" target="_blank" rel="noreferrer">
                💼 linkedin.com/in/cpupadhyay
              </a>
            </li>
            <li>
              <a className="focus-ring rounded text-ink hover:text-accent" href="https://github.com/cpupadhyay" target="_blank" rel="noreferrer">
                🐙 github.com/cpupadhyay
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
