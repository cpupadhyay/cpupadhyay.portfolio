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
    cs.liveUrl && { label: "Try it live ↗", href: cs.liveUrl, primary: true },
    cs.pdfUrl && { label: "Download PDF", href: cs.pdfUrl },
    cs.githubUrl && { label: "GitHub", href: cs.githubUrl },
    cs.figmaUrl && { label: "Figma", href: cs.figmaUrl },
    cs.deckUrl && { label: "Presentation", href: cs.deckUrl },
  ].filter(Boolean) as { label: string; href: string; primary?: boolean }[];

  return (
    <article>
      <ProgressBar />

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-line">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-shell px-5 py-14 sm:py-20">
          <Reveal>
            <Link href="/projects" className="focus-ring rounded text-[13px] font-medium text-muted hover:text-ink">
              ← All projects
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {cs.live && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-live/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-live">
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-live" /> Live product
                </span>
              )}
              <span className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-body">
                {cs.company}
              </span>
              <span className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-body">
                {cs.role}
              </span>
              <span className="rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-body">
                {cs.date}
              </span>
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-[-0.04em] text-ink sm:text-6xl">{cs.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-body">{cs.tagline}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
              {cs.stats.map((s) => (
                <div key={s.label} className="card p-5">
                  <dd className="text-3xl font-bold tracking-tight text-ink">{s.value}</dd>
                  <dt className="mt-1.5 text-[13px] leading-snug text-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-line bg-surface px-3.5 py-2 text-[13px] font-medium text-body">
                North Star: <span className="font-semibold text-accent-dim">{cs.nsm}</span>
              </span>
              {resources.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className={r.primary ? "btn-primary !bg-lychee !py-2 !text-white hover:!bg-[#ff6a90]" : "btn-ghost !py-2"}
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
        <div className="prose prose-headings:scroll-mt-24 prose-h2:font-semibold prose-h2:mt-12 prose-h2:border-t prose-h2:border-line prose-th:text-left prose-blockquote:border-l-accent prose-h2:pt-10 prose-h2:text-2xl prose-h3:text-lg prose-table:text-sm">
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
