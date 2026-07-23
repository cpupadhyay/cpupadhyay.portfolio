import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "The story of Chandra Prakash Upadhyay's journey toward Product Management.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-prose px-5 py-16">
      <Reveal>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">About</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
          From data points to product decisions
        </h1>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="prose prose-neutral mt-8">
          <p>
            I break down complex product and business problems using data, then translate them into
            decisions teams can actually act on.
          </p>
          <p>
            At <strong>Soroco</strong>, I worked directly with Product, Engineering, and Customer
            Success to track product health across <strong>500K+ data points</strong>. I built Power
            BI dashboards that surfaced KPI trends, mapped user behavior patterns, and flagged
            drop-offs in workflows — helping teams prioritize fixes and validate feature releases. I
            collaborated with product teams to identify and prioritize features based on user
            behavior data.
          </p>
          <h2>My approach to product work</h2>
          <ul>
            <li>Start with the user problem, not the data</li>
            <li>Use metrics to validate hypotheses, not just describe what happened</li>
            <li>Communicate findings in the language of decisions, not dashboards</li>
          </ul>
          <p>
            I think in terms of activation, retention, and funnel efficiency. I write product
            teardowns. I run structured analyses. I've studied how companies like Notion, Swiggy,
            and Zepto make product decisions — and I build my own frameworks to do the same.
          </p>
          <h2>Where AI fits in</h2>
          <p>
            Most of my recent case studies — Groww Copilot, Chorus, and the Claude Voice Mode
            teardown — sit at the intersection of AI and product. I'm less interested in "adding
            AI" than in the unglamorous questions that decide whether an AI feature survives:
            guardrail metrics, hallucination rates, kill criteria, and where education ends and
            advice begins.
          </p>
          <h2>Where I'm headed</h2>
          <p>
            <strong>Currently targeting:</strong> APM, Product Analyst, and Product Intern roles at
            product-first companies. Longer term, I'm working toward an MBA at a top institution —
            and eventually building and leading products at the highest level.
          </p>
          <p>
            📩 Open to connect, collaborate, or grab a 15-minute call —{" "}
            <a href="mailto:chandraprakashupadhyay2001@gmail.com">email me</a> or find me on{" "}
            <a href="https://www.linkedin.com/in/cpupadhyay" target="_blank" rel="noreferrer">LinkedIn</a>.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
