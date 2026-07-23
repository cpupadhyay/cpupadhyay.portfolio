import Link from "next/link";
import { CaseStudyMeta } from "@/content/case-studies/types";

export default function CaseStudyCard({ cs, index }: { cs: CaseStudyMeta; index: number }) {
  return (
    <Link
      href={`/projects/${cs.slug}`}
      className="focus-ring group flex flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.18)]"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{cs.company}</span>
          <span className="text-[11px] font-medium text-muted">{cs.date}</span>
        </div>
        <h3 className="mt-3 text-lg font-bold tracking-tight text-ink group-hover:text-accent">
          {cs.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-muted">{cs.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#4B5563]">{cs.summary}</p>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {cs.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent-dim">
              {t}
            </span>
          ))}
        </div>
        <span className="text-sm font-semibold text-accent transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
