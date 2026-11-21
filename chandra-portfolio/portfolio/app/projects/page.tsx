import type { Metadata } from "next";
import { caseStudies } from "@/content/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import LycheeMock from "@/components/LycheeMock";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Lychee AI, a live AI product I built and launched, plus product case studies on Claude, Groww, Zomato, Snapmint and DreamJob.",
};

export default function ProjectsPage() {
  const live = caseStudies.filter((c) => c.live);
  const studies = caseStudies.filter((c) => !c.live);
  return (
    <div className="mx-auto max-w-shell px-5 py-16 sm:py-20">
      <Reveal>
        <p className="eyebrow">Work</p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Projects</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          One product I&apos;m building and shipping, and five case studies on products I use: the research, the
          prioritisation, the metrics, and the trade-offs behind every decision.
        </p>
      </Reveal>

      <h2 className="mt-14 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">Building now</h2>
      {live.map((cs) => (
        <Reveal key={cs.slug}>
          <Link
            href={`/projects/${cs.slug}`}
            className="focus-ring glow-border group mt-4 grid grid-cols-1 items-center gap-10 rounded-[1.75rem] bg-[linear-gradient(160deg,#120D16_0%,#0B0E15_50%,#07090E_100%)] p-6 sm:p-10 lg:grid-cols-2"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-live/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-live">
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-live" /> Live product
                </span>
                <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-body">
                  {cs.role} · {cs.date}
                </span>
              </div>
              <h3 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-ink transition-colors group-hover:text-lychee-dim">
                {cs.company}
              </h3>
              <p className="mt-1 font-serif text-2xl italic text-lychee-dim">Many minds, one answer.</p>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-body">{cs.summary}</p>
              <dl className="mt-6 grid max-w-lg grid-cols-3 gap-3">
                {cs.stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-line bg-surface/60 p-3">
                    <dd className="text-xl font-bold text-ink">{s.value}</dd>
                    <dt className="mt-1 text-[11px] leading-snug text-muted">{s.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="mt-7 text-sm font-semibold text-accent">Read the product story →</p>
            </div>
            <LycheeMock />
          </Link>
        </Reveal>
      ))}

      <h2 className="mt-14 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted">Case studies</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {studies.map((cs, i) => (
          <Reveal key={cs.slug} delay={i * 0.05}>
            <CaseStudyCard cs={cs} index={i + 1} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
