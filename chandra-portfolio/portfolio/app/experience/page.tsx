import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and education of Chandra Prakash Upadhyay.",
};

const items = [
  {
    period: "Apr 2025 – May 2025",
    title: "Data Analyst Intern",
    org: "Soroco · Bengaluru",
    points: [
      "Tracked product health across 500K+ data points, partnering with Product, Engineering, and Customer Success.",
      "Built Power BI dashboards surfacing KPI trends, user behavior patterns, and workflow drop-offs.",
      "Helped teams prioritize fixes and validate feature releases; collaborated on feature prioritization from user behavior data.",
      "Worked with SQL and Python in an Agile environment.",
    ],
  },
  {
    period: "2025 – Present",
    title: "Independent Product Work",
    org: "Case studies, teardowns & PRDs",
    points: [
      "Published six end-to-end product case studies: Groww Copilot, Claude Voice Mode, Zomato Retention, Snapmint Trust, DreamJob, and Chorus.",
      "Practiced the full PM toolkit: user research, personas, JTBD, RICE/MoSCoW, north-star metric design, guardrails, wireframing, and rollout planning.",
      "Mined 150+ user reviews for the Claude Voice Mode teardown; designed MVP experiments with explicit kill criteria.",
    ],
  },
  {
    period: "Jul 2019 – Jun 2023",
    title: "B.Tech, Computer Science & Engineering",
    org: "SRMU Lucknow · CGPA 7.54",
    points: [
      "Foundation in programming, databases, and systems that underpins my analytics and product work.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-shell px-5 py-16">
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Background</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Experience</h1>
      </Reveal>
      <ol className="mt-12 max-w-3xl space-y-0 border-l border-line pl-6">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <li className="relative pb-12">
              <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent" aria-hidden="true" />
              <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">{item.period}</p>
              <h2 className="mt-1 text-xl font-bold text-ink">{item.title}</h2>
              <p className="text-sm font-medium text-accent">{item.org}</p>
              <ul className="mt-3 space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-relaxed text-[#4B5563]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
