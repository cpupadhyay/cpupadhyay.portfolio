import type { Metadata } from "next";
import Link from "next/link";
import { certifications } from "@/content/certifications";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Verified product management and data analytics certifications with credential links.",
};

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-shell px-5 py-16">
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Verified learning</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Certifications</h1>
        <p className="mt-3 max-w-2xl text-base text-muted">
          Every completed certificate links to its public credential so you can verify it in one click.
        </p>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.04}>
            <Link
              href={`/certifications/${c.slug}`}
              className="focus-ring group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.18)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">{c.issuer}</p>
              <h2 className="mt-2 text-lg font-bold leading-snug text-ink group-hover:text-accent">{c.title}</h2>
              <p className="mt-1 text-[12px] font-medium text-muted">{c.status}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.skills.slice(0, 3).map((s) => (
                  <span key={s} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent-dim">{s}</span>
                ))}
              </div>
              <span className="mt-auto pt-4 text-sm font-semibold text-accent">View details →</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
