import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resume",
  description: "Interactive resume of Chandra Prakash Upadhyay with PDF download.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-prose px-5 py-16">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Resume</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Chandra Prakash Upadhyay</h1>
            <p className="mt-1 text-sm font-medium text-muted">Bengaluru, India · chandraprakashupadhyay2001@gmail.com</p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="focus-ring rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent"
          >
            Download PDF
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 space-y-10">
          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Summary</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#374151]">
              AI product builder and data analyst. Ex-Soroco. I turn user data into product decisions —
              funnel analysis, retention metrics, user behavior. Author of six end-to-end product case
              studies. Open to APM and Product Analyst roles.
            </p>
          </section>
          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Experience</h2>
            <div className="mt-3">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold">Data Analyst Intern · Soroco</h3>
                <span className="text-[12px] font-medium text-muted">Apr–May 2025</span>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#374151]">
                <li>Tracked product health across 500K+ data points with Product, Engineering & CS teams.</li>
                <li>Built Power BI dashboards surfacing KPI trends, user behavior, and workflow drop-offs.</li>
                <li>Helped prioritize fixes and validate releases; SQL & Python in an Agile environment.</li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Selected Projects</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#374151]">
              <li><strong>Groww Copilot</strong> — AI investing assistant concept; RICE-prioritized, guardrail metrics, 6-week MVP with kill criteria.</li>
              <li><strong>Chorus</strong> — multi-model AI deliberation platform; full PRD; NSM: Weekly Active Queries.</li>
              <li><strong>Claude Voice Mode teardown</strong> — 150+ reviews mined; designed graceful-failure transcription UX.</li>
            </ul>
          </section>
          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Education</h2>
            <div className="mt-3 flex items-baseline justify-between">
              <p className="text-sm font-medium">B.Tech CSE · SRMU Lucknow · CGPA 7.54</p>
              <span className="text-[12px] font-medium text-muted">2019–2023</span>
            </div>
          </section>
          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Skills</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#374151]">
              Product Analysis · Funnel Analysis · SQL · User Behaviour Analysis · KPI Tracking ·
              Python (Pandas, NumPy) · Power BI · Tableau · Advanced Excel · RICE / MoSCoW · PRD Writing
            </p>
          </section>
        </div>
      </Reveal>
    </div>
  );
}
