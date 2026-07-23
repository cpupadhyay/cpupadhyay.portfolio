import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import { certifications } from "@/content/certifications";

const skills = [
  "Product Analysis", "Funnel Analysis", "SQL", "User Behaviour Analysis", "KPI Tracking",
  "Python (Pandas, NumPy)", "Power BI", "Tableau", "Advanced Excel", "RICE / MoSCoW",
  "PRD Writing", "A/B Thinking",
];

const achievements = [
  { value: "6", label: "End-to-end product case studies published" },
  { value: "500K+", label: "Data points tracked for product health at Soroco" },
  { value: "150+", label: "User reviews mined for the Claude Voice Mode teardown" },
  { value: "9", label: "Product & analytics certifications" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-[linear-gradient(180deg,#FAFBFF_0%,#FFFFFF_100%)]">
        <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-10 px-5 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">
              Aspiring Associate Product Manager · Bengaluru, India
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
              I turn user data into{" "}
              <span className="text-accent">product decisions.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              I'm Chandra Prakash Upadhyay — AI product builder, ex-Soroco data analyst, and the
              author of six end-to-end product case studies. I start with the user problem, validate
              with metrics, and communicate in the language of decisions, not dashboards.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="focus-ring rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent">
                Read the case studies
              </Link>
              <a href="/resume.pdf" className="focus-ring rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent" download>
                Download resume
              </a>
            </div>
            <div className="mt-6 flex gap-5 text-sm font-medium text-muted">
              <a className="focus-ring rounded hover:text-ink" href="https://www.linkedin.com/in/cpupadhyay" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="focus-ring rounded hover:text-ink" href="https://github.com/cpupadhyay" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="aspect-[4/5] w-full rounded-3xl border border-line bg-accent-soft" aria-hidden="true">
                {/* Profile image: drop /public/profile.jpg and replace this div with <Image>. */}
                <div className="flex h-full items-center justify-center text-6xl font-extrabold text-accent/30">CP</div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Currently targeting</p>
                <p className="text-sm font-bold text-ink">APM · Product Analyst roles</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-shell px-5 py-16" aria-labelledby="featured">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Featured work</p>
              <h2 id="featured" className="mt-2 text-3xl font-extrabold tracking-tight">Product case studies</h2>
            </div>
            <Link href="/projects" className="focus-ring hidden rounded text-sm font-semibold text-accent sm:block">
              View all →
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 6).map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.05}>
              <CaseStudyCard cs={cs} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Internship timeline */}
      <section className="border-y border-line bg-[#FAFAFA]" aria-labelledby="experience">
        <div className="mx-auto max-w-shell px-5 py-16">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Experience</p>
            <h2 id="experience" className="mt-2 text-3xl font-extrabold tracking-tight">Where I've worked with data & product</h2>
          </Reveal>
          <ol className="mt-10 space-y-0 border-l border-line pl-6">
            {[
              {
                period: "Apr – May 2025",
                title: "Data Analyst Intern · Soroco",
                body: "Worked directly with Product, Engineering, and Customer Success to track product health across 500K+ data points. Built Power BI dashboards that surfaced KPI trends, mapped user behavior patterns, and flagged workflow drop-offs — helping teams prioritize fixes and validate feature releases.",
              },
              {
                period: "2025 – Present",
                title: "Independent Product Case Studies",
                body: "Researched, wrote, and published six end-to-end case studies (Groww, Claude, Zomato, Snapmint, DreamJob, Chorus) covering user research, RICE/MoSCoW prioritization, metrics design, wireframing, and rollout planning.",
              },
              {
                period: "2019 – 2023",
                title: "B.Tech, Computer Science · SRMU Lucknow",
                body: "Built the technical foundation — programming, databases, and systems — that now underpins my analytics and product work.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <li className="relative pb-10">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-accent" aria-hidden="true" />
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">{item.period}</p>
                  <h3 className="mt-1 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#4B5563]">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-shell px-5 py-16" aria-labelledby="certs">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Verified learning</p>
              <h2 id="certs" className="mt-2 text-3xl font-extrabold tracking-tight">Certifications</h2>
            </div>
            <Link href="/certifications" className="focus-ring hidden rounded text-sm font-semibold text-accent sm:block">
              View all →
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.slice(0, 3).map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                href={`/certifications/${c.slug}`}
                className="focus-ring group block rounded-2xl border border-line p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_12px_40px_-12px_rgba(37,99,235,0.18)]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">{c.issuer}</p>
                <h3 className="mt-2 font-bold leading-snug text-ink group-hover:text-accent">{c.title}</h3>
                <p className="mt-1 text-[12px] font-medium text-muted">{c.status}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-line bg-[#FAFAFA]" aria-labelledby="skills">
        <div className="mx-auto max-w-shell px-5 py-16">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Toolkit</p>
            <h2 id="skills" className="mt-2 text-3xl font-extrabold tracking-tight">Skills</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-8 flex max-w-3xl flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-ink">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Achievements */}
      <section className="mx-auto max-w-shell px-5 py-16" aria-labelledby="achievements">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-accent">Proof of work</p>
          <h2 id="achievements" className="mt-2 text-3xl font-extrabold tracking-tight">By the numbers</h2>
        </Reveal>
        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {achievements.map((a, i) => (
            <div key={a.label} className="bg-white p-6">
              <dd className="text-3xl font-extrabold tracking-tight text-ink">{a.value}</dd>
              <dt className="mt-1 text-[13px] font-medium leading-snug text-muted">{a.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-line bg-[linear-gradient(180deg,#FFFFFF_0%,#FAFBFF_100%)]" aria-labelledby="contact-cta">
        <div className="mx-auto max-w-shell px-5 py-20 text-center">
          <Reveal>
            <h2 id="contact-cta" className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Hiring for APM or Product Analyst roles?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted">
              I'm open to connect, collaborate, or grab a 15-minute call. The fastest way to see how
              I think is a case study; the fastest way to reach me is below.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="focus-ring rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dim">
                Get in touch
              </Link>
              <a href="mailto:chandraprakashupadhyay2001@gmail.com" className="focus-ring rounded-full border border-line bg-white px-6 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent">
                chandraprakashupadhyay2001@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
