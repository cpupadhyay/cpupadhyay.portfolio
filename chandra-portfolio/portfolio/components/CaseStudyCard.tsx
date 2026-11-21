import Link from "next/link";
import { CaseStudyMeta } from "@/content/case-studies/types";

export default function CaseStudyCard({ cs, index }: { cs: CaseStudyMeta; index: number }) {
  return (
    <Link
      href={`/projects/${cs.slug}`}
      className="focus-ring group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-2 hover:shadow-[0_24px_60px_-30px_rgba(125,162,255,0.35)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-12 select-none font-serif text-[7rem] italic leading-none text-white/[0.03] transition-colors group-hover:text-accent/10"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{cs.company}</span>
          {cs.live ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-live/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-live">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-live" /> Live
            </span>
          ) : (
            <span className="text-[11px] font-medium text-muted">{cs.date}</span>
          )}
        </div>
        <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent-dim">
          {cs.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-muted">{cs.tagline}</p>
        <p className="mt-4 text-[13px] leading-relaxed text-body">
          <span className="text-muted">North Star · </span>
          {cs.nsm}
        </p>
      </div>
      <div className="relative mt-6 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {cs.tags.slice(0, 3).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <span
          className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-sm text-muted transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-paper"
          aria-hidden="true"
        >
          →
        </span>
      </div>
    </Link>
  );
}
