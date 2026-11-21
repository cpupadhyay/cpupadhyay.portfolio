import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Chandra Prakash Upadhyay: founder of Lychee AI, former data analyst at Soroco, aiming for Associate PM roles.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-shell px-5 py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto aspect-square max-w-[18rem] rounded-full bg-[conic-gradient(from_140deg,#FF4F7B,#7DA2FF,#34D399,#FF4F7B)] p-[3px] lg:mx-0">
              <div className="h-full w-full overflow-hidden rounded-full border-[6px] border-paper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/profile.jpg" alt="Portrait of Chandra Prakash Upadhyay" className="h-full w-full object-cover" />
              </div>
            </div>
            <dl className="mt-8 space-y-3 text-sm">
              {[
                ["Now", "Founder, Lychee AI"],
                ["Before", "Data Analyst Intern, Soroco"],
                ["Education", "B.Tech CSE, SRMU Lucknow"],
                ["Based in", profile.location],
                ["Looking for", profile.lookingFor],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-line pb-3">
                  <dt className="text-muted">{k}</dt>
                  <dd className="text-right font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="eyebrow">About</p>
          <h1 className="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            From data points to a <span className="font-serif font-normal italic text-lychee-dim">shipped product.</span>
          </h1>
          <div className="prose mt-8 text-[17px]">
            <p>
              I like problems where the answer isn&apos;t obvious and the data has an opinion. I break them down,
              find the user underneath, and turn what I learn into decisions a team can act on.
            </p>
            <p>
              At <strong>Soroco</strong>, I worked with Product, Engineering and Customer Success to track product
              health across <strong>500K+ data points</strong>. I built Power BI dashboards that surfaced KPI
              trends, user behaviour and workflow drop-offs, and helped teams decide what to fix first.
            </p>
            <p>
              Then I wrote product case studies on products I use: Claude, Groww, Zomato, Snapmint and a 0→1
              job marketplace. Each one forced a decision: what to build, what to cut, and how we&apos;d know it
              worked.
            </p>
            <h2>Why I built Lychee AI</h2>
            <p>
              I kept asking ChatGPT, Claude and Gemini the same question and getting three confident, different
              answers. So in March 2026 I wrote a PRD for a fix, and then I built it.{" "}
              <Link href="/projects/lychee-ai">Lychee AI</Link> is now live: models debate each other, or a judge
              model picks the best answer, and you get one answer you can trust. I own everything from
              prioritisation to deployment, and I ship changes every week based on how people use it.
            </p>
            <h2>How I work</h2>
            <ul>
              <li>Start with the user problem, not the data</li>
              <li>Define the North Star and guardrails before designing anything</li>
              <li>Ship small, measure, and let real usage settle arguments</li>
              <li>Communicate in the language of decisions, not dashboards</li>
            </ul>
            <h2>Where I&apos;m headed</h2>
            <p>
              I&apos;m looking for <strong>Associate Product Manager and product roles</strong> at product-first
              companies, ideally where AI is part of the product. Longer term, I want to build and lead AI products
              used by millions.
            </p>
            <p>
              Open to connect or grab a 15-minute call:{" "}
              <a href={`mailto:${profile.email}`}>email me</a> or find me on{" "}
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
