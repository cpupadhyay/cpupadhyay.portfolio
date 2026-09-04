import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import ProgressBar from "@/components/ProgressBar";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudy(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — ${cs.company} Case Study`,
    description: cs.summary,
    openGraph: { title: cs.title, description: cs.summary, type: "article" },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const resources = [
    cs.pdfUrl && { label: "Download PDF", href: cs.pdfUrl },
    cs.githubUrl && { label: "GitHub", href: cs.githubUrl },
    cs.figmaUrl && { label: "Figma", href: cs.figmaUrl },
    cs.deckUrl && { label: "Presentation", href: cs.deckUrl },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article>
      <ProgressBar />

      {/* Hero */}
      <header className="border-b border-line bg-[linear-gradient(180deg,#FAFBFF_0%,#FFFFFF_100%)]">
        <div className="mx-auto max-w-shell px-5 py-16 sm:py-20">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              {cs.company} · {cs.role} · {cs.date}
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{cs.title}</h1>
            <p className="mt-3 max-w-2xl text-lg font-medium text-muted">{cs.tagline}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {cs.stats.map((s) => (
                <div key={s.label} className="bg-white p-5">
                  <dt className="order-2 mt-1 block text-[12px] font-medium leading-snug text-muted">{s.label}</dt>
                  <dd className="text-2xl font-bold tracking-tight text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-line bg-white px-3 py-1.5 text-[12px] font-semibold text-ink">
                North Star: <span className="text-accent">{cs.nsm}</span>
              </span>
              {resources.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring rounded-full bg-accent px-4 py-1.5 text-[12px] font-semibold text-[#0B1220] transition-colors hover:bg-accent"
                >
                  {r.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-prose px-5 py-14">
        <div className="prose prose-neutral prose-headings:scroll-mt-24 prose-h2:mt-12 prose-h2:border-t prose-h2:border-line prose-h2:pt-10 prose-h2:text-2xl prose-h3:text-lg prose-table:text-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{cs.body}</ReactMarkdown>
        </div>

        {/* Wireframes */}
        {(cs.wireframes?.length || cs.figmaUrl) && (
          <section className="mt-16 border-t border-line pt-10" aria-labelledby="wireframes">
            <h2 id="wireframes" className="text-2xl font-bold tracking-tight">Wireframes</h2>
            {cs.wireframes && (
              <div className="mt-8 space-y-10">
                {cs.wireframes.map((w) => (
                  <figure key={w.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.src}
                      alt={w.caption}
                      className="w-full rounded-2xl border border-line"
                      loading="lazy"
                    />
                    <figcaption className="mt-2 text-sm text-muted">{w.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
            {cs.figmaUrl && (
              <div className="mt-8">
                <iframe
                  title={`${cs.title} — Figma wireframes`}
                  className="aspect-[16/10] w-full rounded-2xl border border-line"
                  src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(cs.figmaUrl)}`}
                  allowFullScreen
                  loading="lazy"
                />
                <p className="mt-2 text-sm text-muted">
                  Live Figma file — explore the editable wireframes directly.
                </p>
              </div>
            )}
          </section>
        )}

        {/* Footer nav */}
        <nav className="mt-16 flex items-center justify-between border-t border-line pt-8" aria-label="Case study">
          <Link href="/projects" className="focus-ring rounded text-sm font-semibold text-accent">
            ← All projects
          </Link>
          <a href="#main" className="focus-ring rounded text-sm font-medium text-muted hover:text-ink">
            Back to top ↑
          </a>
        </nav>
      </div>
    </article>
  );
}
