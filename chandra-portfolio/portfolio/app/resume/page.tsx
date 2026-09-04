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
            <p className="mt-1 text-sm font-semibold text-ink">Associate Product Manager · Product Analyst</p>
            <p className="mt-1 text-sm font-medium text-muted">
              Bengaluru, India · +91 8303042121 · chandraprakashupadhyay2001@gmail.com
            </p>
            <p className="mt-0.5 text-sm font-medium text-muted">
              linkedin.com/in/cpupadhyay · github.com/cpupadhyay
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="focus-ring rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0B1220] hover:bg-accent"
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
              Computer Science graduate who turns messy data into product decisions. At Soroco, analysed
              500K+ rows of process data and shipped 3 Power BI dashboards used in weekly product reviews.
              Since then, built three end-to-end product cases covering PRDs, funnel diagnosis, RICE
              prioritisation and live Figma prototypes. Comfortable owning a metric, writing the spec and
              defending the trade-offs.
            </p>
          </section>

          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Experience</h2>
            <div className="mt-3">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold">Data Analyst Intern · Soroco</h3>
                <span className="text-[12px] font-medium text-muted">Apr–May 2025 · Bengaluru</span>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#374151]">
                <li>Analysed 500K+ rows of workflow data in SQL and Python (Pandas, NumPy) to find where teams lost the most time, and turned it into a prioritised fix list for the product team.</li>
                <li>Built 3 Power BI dashboards on task throughput, feature adoption and error frequency that became the reference view in weekly product reviews.</li>
                <li>Automated the data pull and refresh in Python, cutting a recurring 3-hour reporting cycle to 30 minutes.</li>
                <li>Caught 2 data inconsistencies before a client-facing launch by cross-checking pipeline output against source logs, stopping wrong adoption numbers from reaching the customer.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Product Projects</h2>
            <div className="mt-3 space-y-6">
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-bold">Chorus · AI Multi-Model Deliberation Platform</h3>
                  <span className="text-[12px] font-medium text-muted">Feb–Mar 2026</span>
                </div>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#374151]">
                  <li>Shipped a live AI product that routes one query to GPT, Gemini and Claude and synthesises a single reasoned answer, published with the full PRD and Figma flows.</li>
                  <li>Set Weekly Active Queries as the North Star Metric, with answer acceptance and repeat query rate as supporting engagement measures.</li>
                  <li>Scoped v1 to three high-intent use cases after a competitive scan, with guardrails on cost per query and response latency.</li>
                  <li>Ran a red-teaming pass on model disagreement cases to shape the answer-confidence display, and submitted the product to an AI safety fellowship.</li>
                </ul>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-bold">DreamJob · Two-Sided Hiring Marketplace</h3>
                  <span className="text-[12px] font-medium text-muted">Jan–Feb 2026</span>
                </div>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#374151]">
                  <li>Mapped the fresher funnel from search to interview and defined Interview Conversion Rate as the North Star Metric instead of vanity application counts.</li>
                  <li>Prioritised the backlog with RICE and JTBD personas, cutting v1 to verified listings, recruiter response SLA and profile strength scoring.</li>
                  <li>Delivered a full PRD with success metrics, edge cases and a clickable Figma prototype for both sides of the marketplace.</li>
                  <li>Set activation, recruiter reply time and repeat posting as the supporting metric tree under the North Star.</li>
                </ul>
              </div>
              <div>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-base font-bold">Snapmint · BNPL Trust &amp; Checkout Case Study</h3>
                  <span className="text-[12px] font-medium text-muted">Mar 2026</span>
                </div>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#374151]">
                  <li>Traced a 35% BNPL checkout drop-off to a trust gap using funnel analysis and three research-backed personas.</li>
                  <li>Ranked 7 features by RICE with reviews and in-flow support as P1, and set Monthly Purchase Completion Rate as the North Star Metric, targeting 3–5% up to 12–15% in two quarters.</li>
                  <li>Designed 4 Figma wireframes surfacing repayment terms, trust signals and support at the exact points where users abandoned.</li>
                  <li>Benchmarked the flow against three BNPL apps to separate real differentiators from table-stakes fixes.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Education</h2>
            <div className="mt-3 flex items-baseline justify-between">
              <p className="text-sm font-medium">B.Tech, Computer Science &amp; Engineering · SRMU Lucknow · CGPA 7.54</p>
              <span className="text-[12px] font-medium text-muted">2019–2023</span>
            </div>
          </section>

          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Skills</h2>
            <dl className="mt-3 space-y-2 text-sm leading-relaxed text-[#374151]">
              <div>
                <dt className="inline font-semibold text-ink">Product: </dt>
                <dd className="inline">PRD Writing, Funnel Analysis, A/B Testing, Retention &amp; Cohort Metrics, North Star Metric, RICE, MoSCoW, AARRR, JTBD, User Research, Competitive Analysis, Roadmapping</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-ink">Technical: </dt>
                <dd className="inline">SQL, Python (Pandas, NumPy), Power BI, Tableau, Advanced Excel, AWS, Data Modelling, Dashboarding</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-ink">Tools: </dt>
                <dd className="inline">Figma, Notion, Jira, GitHub, Google Analytics, MS Office</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-ink">Strengths: </dt>
                <dd className="inline">Metric ownership, data storytelling, writing clear specs, working across engineering and business teams</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="border-b border-line pb-2 text-sm font-bold uppercase tracking-wider">Certifications</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#374151]">
              <li>IBM AI Product Manager Professional Certificate, Coursera · In Progress, expected Aug 2026</li>
              <li>Aha! Product Management Professional, LinkedIn Learning · Jan 2026</li>
              <li>Data Analytics Professional, PW Skills · Oct 2025</li>
            </ul>
          </section>
        </div>
      </Reveal>
    </div>
  );
}
