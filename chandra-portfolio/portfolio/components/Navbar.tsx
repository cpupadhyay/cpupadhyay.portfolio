"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/projects/lychee-ai", label: "Lychee AI" },
  { href: "/projects", label: "Case studies", exact: true },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-shell items-center justify-between px-5" aria-label="Primary">
        <Link href="/" className="focus-ring group flex items-center gap-2.5 rounded-full">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-paper transition-transform group-hover:rotate-[-8deg]">
            CP
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">Chandra Prakash</span>
        </Link>

        <div className="hidden items-center gap-0.5 rounded-full border border-line bg-surface/70 p-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`focus-ring rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                isActive(l.href, l.exact) ? "bg-surface-3 text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {l.href === "/projects/lychee-ai" && (
                <span className="mr-1.5 inline-block h-1.5 w-1.5 -translate-y-px animate-pulseDot rounded-full bg-live" aria-hidden="true" />
              )}
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link href="/resume" className="btn-primary hidden !px-4 !py-2 !text-[13px] sm:inline-flex">
            Resume
          </Link>
          <button
            className="focus-ring rounded-full border border-line p-2.5 lg:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2 6h14M2 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-line px-5 pb-5 pt-2 lg:hidden">
          {[{ href: "/", label: "Home" }, ...links, { href: "/resume", label: "Resume" }].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="focus-ring block rounded-lg px-2 py-2.5 text-base font-medium text-ink hover:bg-surface"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
