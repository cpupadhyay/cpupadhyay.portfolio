import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import CaseStudyCard from "@/components/CaseStudyCard";
import Reveal from "@/components/Reveal";
import LycheeMock from "@/components/LycheeMock";
import { certifications } from "@/content/certifications";
import { profile, timeline, skillGroups } from "@/content/profile";

const proof = [
  { value: "1", unit: "live", label: "AI product designed, built and launched: Lychee AI" },
  { value: "~300", unit: "", label: "Organic visitors to Lychee AI, no paid ads" },
  { value: "5", unit: "", label: "Product case studies: Claude, Groww, Zomato and more" },
  { value: "500K+", unit: "", label: "Data points analysed as a data analyst at Soroco" },
];

const models = ["ChatGPT", "Claude", "Gemini", "Grok", "DeepSeek", "Llama", "Mistral", "+ more"];

const decisions = [
  { what: "Bring-your-own-key before paid plans", why: "Learn who the users are with zero inference burn." },
  { what: "Open demo, sign-in only for real use", why: "Show the value before asking for anything." },
  { what: "Installable web app before app stores", why: "Mobile reach now; store fees only after revenue." },
];

const shippingLog = [
  { when: "Mar 2026", what: "PRD + Figma prototype" },
  { when: "Launch", what: "Debate & Judge modes live on Vercel" },
  { when: "Nov 2026", what: "Google sign-in + open demo" },
  { when: "Nov 2026", what: "Installable app" },
  { when: "Nov 2026", what: "Single-model chat with Auto" },
  { when: "Next", what: "Hosted plans · web search · images", next: true },
];

const principles = [
  {
    n: "01",
    title: "Problem before solution",
    body: "Every project starts with a pain I can point to: mined app reviews, forum threads, funnel drop-offs. If I can't name the user and the moment, I don't build.",
  },
  {
    n: "02",
    title: "One metric that matters",
    body: "A North Star plus guardrails, defined before anything is designed. Weekly Active Queries for Lychee AI; completion rate for Claude Voice; Orders per MAU for Zomato.",
  },
  {
    n: "03",
    title: "Ship, then learn",
    body: "I'd rather learn from real users than polish a doc. Lychee AI went from PRD to a live product, and it changes every week based on what people actually do.",
  },
];

export default function HomePage() {
  const lychee = caseStudies.find((c) => c.slug === "lychee-ai")!;
  const studies = caseStudies.filter((c) => !c.live);

  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-shell grid-cols-1 items-center gap-14 px-5 pb-20 pt-12 sm:pt-16 md:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-20">
          <Reveal>
            <a
              href={profile.lychee}
              target="_blank"
              rel="noreferrer"
              className="focus-ring group inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 py-1 pl-1 pr-3 text-[12px] font-medium text-body backdrop-blur transition-colors hover:border-lychee/50"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-live/10 px-2 py-0.5 text-[11px] font-semibold text-live">
                <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-live" /> Live
              </span>
              Now building Lychee AI
              <span className="text-muted transition-transform group-hover:translate-x-0.5">↗</span>
            </a>

            <h1 className="mt-7 text-[2.75rem] font-bold leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.6rem]">
              Product builder
              <br />
              who <span className="font-serif font-normal italic tracking-[-0.02em] text-lychee-dim">ships.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-body">
              I&apos;m Chandra. I designed, built and launched{" "}
              <Link href="/projects/lychee-ai" className="font-semibold text-ink underline decoration-lychee/50 underline-offset-4 hover:decoration-lychee">
                Lychee AI
              </Link>
              , a live AI assistant where frontier models debate to give one answer you can trust. Before that, I
              turned 500K+ data points into product decisions at Soroco.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/projects/lychee-ai" className="btn-primary">
                Explore Lychee AI <span aria-hidden="true">→</span>
              </Link>
              <Link href="#work" className="btn-ghost">
                Case studies
              </Link>
              <a href="/resume.pdf" download className="focus-ring rounded px-2 text-sm font-semibold text-muted transition-colors hover:text-ink">
                Resume.pdf ↓
              </a>
            </div>

            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-live" /> Open to {profile.lookingFor}
              </span>
              <span className="text-line">/</span>
              <span>{profile.location}</span>
              <span className="text-line">/</span>
              <a className="focus-ring rounded hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="focus-ring rounded hover:text-ink" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-[22rem] md:ml-auto md:mr-0">
              <div className="absolute -inset-6 rounded-full bg-[conic-gradient(from_180deg,rgba(255,79,123,0.35),rgba(125,162,255,0.35),rgba(52,211,153,0.2),rgba(255,79,123,0.35))] opacity-60 blur-3xl" aria-hidden="true" />
              <div className="relative aspect-square rounded-full bg-[conic-gradient(from_140deg,#FF4F7B,#7DA2FF,#34D399,#FF4F7B)] p-[3px]">
                <div className="h-full w-full overflow-hidden rounded-full border-[6px] border-paper bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/profile.jpg"
                    alt="Portrait of Chandra Prakash Upadhyay"
                    className="h-full w-full object-cover"
                    width={800}
                    height={800}
                  />
                </div>
              </div>

              <div className="absolute -right-2 top-6 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-2xl backdrop-blur sm:-right-8">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Founder</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-ink">
                  <span className="h-2 w-2 rounded-full bg-lychee" /> Lychee AI
                </p>
              </div>
              <div className="absolute -left-2 bottom-8 rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-2xl backdrop-blur sm:-left-10">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Previously</p>
                <p className="mt-0.5 text-sm font-semibold text-ink">Data Analyst · Soroco</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Proof strip */}
        <div className="relative border-y border-line bg-surface/50">
          <dl className="mx-auto grid max-w-shell grid-cols-2 lg:grid-cols-4">
            {proof.map((p, i) => (
              <div
                key={p.label}
                className={`px-5 py-7 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
              >
                <dd className="flex items-baseline gap-1.5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {p.value}
                  {p.unit && <span className="font-serif text-2xl font-normal italic text-lychee-dim">{p.unit}</span>}
                </dd>
                <dt className="mt-2 max-w-[15rem] text-[13px] leading-snug text-muted">{p.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────────────── Lychee AI ───────────────── */}
      <section className="mx-auto max-w-shell px-5 py-24 sm:py-28" aria-labelledby="lychee">
        <div className="glow-border rounded-[2rem] bg-[linear-gradient(160deg,#120D16_0%,#0B0E15_45%,#07090E_100%)] p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
            <Reveal className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-live/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-live">
                  <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-live" /> Live product
                </span>
                <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-body">
                  {lychee.role} · {lychee.date}
                </span>
              </div>
              <h2 id="lychee" className="mt-6 text-5xl font-bold tracking-[-0.04em] text-ink sm:text-6xl">
                Lychee AI
              </h2>
              <p className="mt-2 font-serif text-2xl italic text-lychee-dim sm:text-3xl">Many minds, one answer.</p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-body">
                Ask three AI models the same question and you get three confident, different answers. Lychee AI lets
                models <strong className="font-semibold text-ink">debate</strong> each other, or has a{" "}
                <strong className="font-semibold text-ink">judge</strong> model pick the best answer, so you get one
                answer you can trust. I took it from a PRD to a live product, and I own everything from
                prioritisation to deployment.
              </p>

              <div className="mt-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Decisions I made, and why</p>
                <ul className="mt-3 divide-y divide-line rounded-2xl border border-line bg-surface/60">
                  {decisions.map((d) => (
                    <li key={d.what} className="px-4 py-3.5">
                      <p className="text-sm font-semibold text-ink">{d.what}</p>
                      <p className="mt-0.5 text-[13px] text-muted">{d.why}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={profile.lychee} target="_blank" rel="noreferrer" className="btn-primary !bg-lychee !text-white hover:!bg-[#ff6a90]">
                  Try it live <span aria-hidden="true">↗</span>
                </a>
                <Link href="/projects/lychee-ai" className="btn-ghost">
                  Read the product story →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="min-w-0">
              <div className="flex h-full min-w-0 flex-col justify-center gap-5">
                <LycheeMock />
                <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" aria-label="Models supported">
                  <div className="flex w-max animate-marquee gap-2">
                    {[...models, ...models].map((m, i) => (
                      <span key={`${m}-${i}`} className="chip whitespace-nowrap !px-3 !py-1 !text-[12px]" aria-hidden={i >= models.length}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Shipping log */}
          <Reveal delay={0.1}>
            <div className="mt-14 border-t border-line pt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">Shipping log</p>
              <ol className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
                {shippingLog.map((s, i) => (
                  <li key={s.what} className="relative">
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${s.next ? "border border-dashed border-muted" : "bg-lychee"}`}
                        aria-hidden="true"
                      />
                      {i < shippingLog.length - 1 && <span className="hidden h-px flex-1 bg-line lg:block" aria-hidden="true" />}
                    </div>
                    <p className={`mt-3 text-[11px] font-semibold uppercase tracking-wider ${s.next ? "text-muted" : "text-lychee-dim"}`}>{s.when}</p>
                    <p className="mt-1 text-[13px] leading-snug text-body">{s.what}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── How I work ───────────────── */}
      <section className="mx-auto max-w-shell px-5 pb-24" aria-labelledby="approach">
        <Reveal>
          <p className="eyebrow">How I work</p>
          <h2 id="approach" className="section-title max-w-2xl">
            Start from the user. Pick the metric. <span className="font-serif font-normal italic">Ship.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06}>
              <div className="card h-full p-6 transition-colors hover:border-accent/30">
                <p className="font-serif text-3xl italic text-accent">{p.n}</p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────── Case studies ───────────────── */}
      <section id="work" className="scroll-mt-20 border-t border-line bg-surface/30" aria-labelledby="studies">
        <div className="mx-auto max-w-shell px-5 py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Product case studies</p>
                <h2 id="studies" className="section-title">How I think through real products</h2>
                <p className="mt-3 max-w-xl text-base text-muted">
                  Research, prioritisation, metrics and wireframes for products I use. Each one ends in a decision, not a
                  description.
                </p>
              </div>
              <Link href="/projects" className="btn-ghost">
                All projects →
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {studies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.05} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
                <CaseStudyCard cs={cs} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Experience ───────────────── */}
      <section className="mx-auto max-w-shell px-5 py-24" aria-labelledby="experience">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Experience</p>
              <h2 id="experience" className="section-title">From data to decisions to a shipped product</h2>
              <p className="mt-4 max-w-sm text-base text-muted">
                Data analyst first, then product case studies, now building my own AI product.
              </p>
              <Link href="/experience" className="btn-ghost mt-8">
                Full experience →
              </Link>
            </div>
          </Reveal>
          <ol className="relative space-y-4">
            {timeline.map((item, i) => {
              const inner = (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">{item.period}</p>
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-live/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-live">
                        <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-live" /> Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                  <p className={`text-sm font-medium ${item.current ? "text-lychee-dim" : "text-accent-dim"}`}>{item.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-body">{item.summary}</p>
                </>
              );
              const cls = `block rounded-2xl border p-6 transition-colors ${
                item.current ? "glow-border border-transparent bg-surface-2" : "border-line bg-surface"
              }`;
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <li>
                    {item.href ? (
                      <Link href={item.href} className={`focus-ring ${cls} hover:border-accent/30`}>
                        {inner}
                      </Link>
                    ) : (
                      <div className={cls}>{inner}</div>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ───────────────── Toolkit + certifications ───────────────── */}
      <section className="border-t border-line" aria-labelledby="toolkit">
        <div className="mx-auto grid max-w-shell grid-cols-1 gap-12 px-5 py-24 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Toolkit</p>
            <h2 id="toolkit" className="section-title">What I bring to a team</h2>
            <div className="mt-8 space-y-6">
              {skillGroups.map((g) => (
                <div key={g.title}>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-muted">{g.title}</p>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-body">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">Verified learning</p>
            <h2 className="section-title">Certifications</h2>
            <ul className="mt-8 divide-y divide-line rounded-2xl border border-line bg-surface">
              {certifications.slice(0, 4).map((c) => (
                <li key={c.slug}>
                  <Link href={`/certifications/${c.slug}`} className="focus-ring group flex items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-ink group-hover:text-accent-dim">{c.title}</p>
                      <p className="mt-0.5 text-[12px] text-muted">
                        {c.issuer} · {c.status}
                      </p>
                    </div>
                    <span className="text-muted transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/certifications" className="focus-ring mt-4 inline-block rounded text-sm font-semibold text-accent">
              All {certifications.length} certifications →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section className="relative overflow-hidden border-t border-line" aria-labelledby="contact-cta">
        <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-shell px-5 py-28 text-center">
          <Reveal>
            <p className="eyebrow">Open to APM & product roles</p>
            <h2 id="contact-cta" className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-ink sm:text-6xl">
              Let&apos;s build something people <span className="font-serif font-normal italic text-lychee-dim">trust.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-muted">
              Hiring for an Associate PM or product role? I&apos;d love a 15-minute call. The quickest way to see how I
              think is Lychee AI; the quickest way to reach me is below.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                Email me <span aria-hidden="true">→</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                Connect on LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
