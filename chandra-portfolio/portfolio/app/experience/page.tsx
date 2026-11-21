import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { timeline } from "@/content/profile";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Founder & Product Builder at Lychee AI (Mar 2026 – Present), product case studies, Data Analyst Intern at Soroco, and B.Tech CSE.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-shell px-5 py-16 sm:py-20">
      <Reveal>
        <p className="eyebrow">Background</p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Experience</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Data analyst first, then product case studies, now building my own AI product.
        </p>
      </Reveal>

      <ol className="relative mt-14 max-w-3xl border-l border-line pl-8">
        {timeline.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <li className="relative pb-14">
              <span
                className={`absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-paper ${
                  item.current ? "bg-live" : "bg-surface-3"
                }`}
                aria-hidden="true"
              >
                {item.current && <span className="absolute h-4 w-4 animate-ping rounded-full bg-live/40" />}
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">{item.period}</p>
                {item.current && (
                  <span className="rounded-full bg-live/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-live">
                    Current
                  </span>
                )}
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">{item.title}</h2>
              <p className={`text-sm font-medium ${item.current ? "text-lychee-dim" : "text-accent-dim"}`}>{item.org}</p>
              <ul className="mt-4 space-y-2.5">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-body">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              {item.href && (
                <Link href={item.href} className="focus-ring mt-4 inline-block rounded text-sm font-semibold text-accent">
                  {item.current ? "Read the Lychee AI story →" : "See the case studies →"}
                </Link>
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
