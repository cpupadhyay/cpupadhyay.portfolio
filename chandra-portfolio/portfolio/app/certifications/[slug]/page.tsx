import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { certifications, getCertification } from "@/content/certifications";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = getCertification(params.slug);
  if (!c) return {};
  return { title: c.title, description: c.about };
}

export default function CertificationPage({ params }: { params: { slug: string } }) {
  const c = getCertification(params.slug);
  if (!c) notFound();
  return (
    <div className="mx-auto max-w-prose px-5 py-16">
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">{c.issuer}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{c.title}</h1>
        <p className="mt-2 text-sm font-medium text-muted">{c.status}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-6 text-base leading-relaxed text-[#374151]">{c.about}</p>
        <h2 className="mt-8 text-sm font-bold uppercase tracking-wider text-ink">Skills gained</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {c.skills.map((s) => (
            <li key={s} className="rounded-full border border-line px-3.5 py-1 text-sm font-medium">{s}</li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          {c.credentialUrl ? (
            <a
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dim"
            >
              View credential ↗
            </a>
          ) : (
            <span className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-muted">
              Credential available on completion
            </span>
          )}
          <Link href="/certifications" className="focus-ring rounded-full border border-line px-5 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent">
            ← All certifications
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
