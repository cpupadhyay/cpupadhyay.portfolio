import type { Metadata } from "next";
import { caseStudies } from "@/content/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Six end-to-end product case studies: Groww, Claude Voice Mode, Zomato, Snapmint, DreamJob, and Chorus.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-shell px-5 py-16">
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Case studies</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Projects</h1>
        <p className="mt-3 max-w-2xl text-base text-muted">
          End-to-end product thinking: user research, prioritization, metrics, wireframes, and the
          trade-offs behind every decision. Click any card to read the full study.
        </p>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((cs, i) => (
          <Reveal key={cs.slug} delay={i * 0.05}>
            <CaseStudyCard cs={cs} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
