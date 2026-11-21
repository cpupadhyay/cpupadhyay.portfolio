import { CaseStudy } from "./types";

export const lycheeAI: CaseStudy = {
  slug: "lychee-ai",
  title: "Lychee AI — Many Minds, One Answer",
  tagline: "A live AI assistant where frontier models debate and judge each other, so you get one answer you can trust",
  company: "Lychee AI",
  role: "Founder & Product Builder",
  date: "Mar 2026 – Present",
  tags: ["Live product", "AI", "0→1", "Founder"],
  nsm: "Weekly Active Queries (WAQ)",
  stats: [
    { value: "Live", label: "Shipped web app at getlychee-ai.online" },
    { value: "2", label: "Answer modes: Debate and Judge" },
    { value: "~300", label: "Visitors in the first weeks, fully organic" },
  ],
  summary:
    "Ask ChatGPT, Claude and Gemini the same question and you get three confident, different answers. I designed, built and launched Lychee AI so models can debate each other or be judged by another model, and you get one answer you can trust. Started as a PRD in March 2026; now a live product I keep shipping every week.",
  liveUrl: "https://getlychee-ai.online",
  figmaUrl: "https://www.figma.com/make/PObaaCOJSgt2QEdt2blsj0/Dark-Mode-AI-App-UI",
  featured: true,
  live: true,
  body: `
> **Status:** Live at [getlychee-ai.online](https://getlychee-ai.online) · **Role:** Founder & Product Builder · **Timeline:** March 2026 – Present

## Where Lychee AI is today

Lychee AI started in March 2026 as a PRD and a Figma prototype. I then built and launched it myself, and I keep shipping it week after week. This page has two parts: what is live today and the product decisions behind it, followed by the original PRD that started it all.

### What's live

| Area | What shipped |
| --- | --- |
| **Debate mode** | Several models answer, critique each other, and converge on one answer |
| **Judge mode** | Each model answers on its own; a judge model picks the best answer |
| **Single-model chat** | A model picker next to Send, with an Auto option, for quick questions that don't need a debate |
| **Model coverage** | ChatGPT, Claude, Gemini, Grok, DeepSeek, Llama, Mistral and more |
| **Access** | Google sign-in, bring-your-own-key (BYOK), and an open "Try demo" mode with no sign-in |
| **Installable app** | Installs to the phone or desktop home screen as an app (PWA), straight from the website |
| **Stack & delivery** | Deployed on Vercel with GitHub-based workflows; I own everything from prioritisation to deployment |

### Key product decisions

| Decision | Why I made it |
| --- | --- |
| **Launch with BYOK, not paid plans** | Learn who the real users are and what they ask before taking on inference costs. Zero burn while validating demand |
| **Keep "Try demo" open without sign-in** | Sign-in is friction before the "aha" moment; the demo shows the value first |
| **Require Google sign-in for BYOK use** | Ties usage to a real account so I can measure retention and Weekly Active Queries properly |
| **Ship an installable web app before app stores** | Same mobile experience without store fees or review cycles; store apps only after the paid plans earn revenue |
| **Add single-model chat next to Debate** | Not every question needs a panel of models. A fast path keeps quick queries quick and protects the core metric |
| **North Star = Weekly Active Queries** | Repeat questions mean people trust the answers, which is the whole point of the product |

### Traction so far

- Around **300 visitors** in the first weeks, all organic (self-made launch videos on X, no paid ads)
- Launch film and product walkthrough produced in-house
- Planning a Product Hunt launch

### What's next

- **Hosted Standard and Pro plans**, so users don't need their own API key (payments via a merchant-of-record provider)
- **Live web search**, so Lychee AI can answer questions about trending topics
- **Image generation**
- **Creator partnerships** on X, paid on commission for paying users rather than upfront

---

## The original PRD (March 2026)

*Everything below is the plan that started Lychee AI. Scope and pricing have since evolved (see above), but the problem, personas and metrics still guide the roadmap.*

## 1. Executive Summary

Most AI power users today run the same query across multiple models — ChatGPT, Claude, Gemini, Perplexity — and manually compare answers. This costs time, creates confusion, and leaves users unsure which answer to trust.

**Lychee AI** solves this by routing a user's question to six frontier AI models simultaneously, facilitating a structured internal debate among them, and synthesizing a single high-confidence, verified answer.

Lychee AI is not another AI chatbot. It is an **AI orchestration layer** — a trust layer on top of existing models.

**One query. Six minds. One answer.**

## 2. Problem Statement

> *"I asked ChatGPT and Claude the same question. I got two different answers. Now I don't know who to trust."* — observed behavior across AI power-user communities

**Problem 1 — Fragmented experience:** users switch between 4–6 AI tools per day. Each has strengths. None has complete accuracy. Switching is slow, repetitive, and cognitively expensive.

**Problem 2 — No verification mechanism:** when models disagree, users have no structured way to determine which answer is more accurate. They rely on gut instinct or prior knowledge — defeating the purpose of using AI.

**Problem 3 — Confidence gap:** even when a model gives a correct answer, users can't quantify how confident they should be. There's no trust signal, no consensus indicator, no citation of agreement across models.

### Why Now?

- Frontier models are now reliable enough to use as deliberation participants
- API access to multiple models is affordable at scale
- Users are becoming more AI-literate and increasingly skeptical of single-model outputs
- No direct competitor solves cross-model deliberation + synthesis today

### Market Opportunity

| Segment | Size |
| --- | --- |
| AI productivity tools TAM (2027) | ~$8B |
| Power AI users globally | ~120M+ |
| Users running queries on 2+ models | ~67% of power users |
| Frontier models now available | 6+ |

## 3. User Research & Personas

**Methodology:** observed behavior in r/ChatGPT, r/ClaudeAI, and X AI communities; analyzed 50+ forum threads where users cross-checked AI answers; reviewed AI adoption surveys (Statista, a16z AI report 2024).

### Persona 1 — "The Careful Professional"

**Arjun, 28, MBA student / analyst.** Uses AI for case study research, financial analysis, report writing. Stakes are high — wrong data means credibility loss. *"ChatGPT gave me a statistic that was completely made up."* Lychee AI gives him one synthesized answer with a confidence score and source consensus — ready to cite.

### Persona 2 — "The Decisive PM"

**Priya, 31, Product Manager.** Makes build-vs-buy calls and competitor analyses with AI; wrong advice can cost weeks of engineering time. *"Confident-sounding wrong answers are the worst kind."* Lychee AI surfaces where models agree vs. disagree so she decides faster with more confidence.

### Persona 3 — "The Power Researcher"

**Sunil, 35, independent researcher.** Runs every query on 3–4 models manually. *"I have 6 tabs open just to answer one question. Why can't they just talk to each other?"* Lychee AI eliminates manual triangulation entirely.

## 4. Goals & Success Metrics

### North Star Metric

> **Weekly Active Queries (WAQ)** — queries run through Lychee AI per week per active user. A user who runs Lychee AI regularly is experiencing its accuracy benefit.

### Primary KPIs

| Metric | Definition | Target (Month 6) |
| --- | --- | --- |
| Weekly Active Queries | Queries/user/week | 15+ |
| Synthesis Satisfaction Rate | % rating synthesis "useful" (4–5 stars) | >80% |
| Time-to-Answer | Query submission → synthesis delivery | <30 seconds |
| Retention (Day 30) | % still active after 30 days | >45% |
| Model Agreement Rate | % of queries where 3+ models reach consensus | Benchmark & track |

### Guardrail Metrics (must NOT worsen)

| Metric | Threshold |
| --- | --- |
| Synthesis accuracy (user-reported errors) | <5% |
| API cost per query | <$0.08 |
| App response time (P95) | <45 seconds |

## 5. User Stories

**Core Query & Synthesis:** type a question once; see each model's individual answer; get a synthesized final answer; see a confidence score.

**Debate Transparency:** see where models agreed; see where they disagreed; understand which position was most supported.

**User Control:** choose the model panel; save queries and syntheses; export as a document.

**Trust & Attribution:** see sources cited; flag wrong syntheses to improve the product.

## 6. Feature Prioritization (MoSCoW)

### Must Have (V1 — Launch)

| Feature | Rationale |
| --- | --- |
| Multi-model query routing | Core product — without this, Lychee AI doesn't exist |
| Individual model response display | Transparency — users must see what each model said |
| Synthesized answer generation | Core value delivery — the "one answer" |
| Confidence / consensus indicator | Trust signal — critical differentiator |
| Query history | Basic utility |

### Should Have (V1.5 — 60 days post-launch)

Debate round display · model selection · export synthesis as document · response rating (feedback loop).

### Could Have (V2)

Custom model weighting · domain-specific model panels (e.g., a "medical panel") · team workspace · developer API.

### Won't Have (V1)

Training custom models (Lychee AI orchestrates, not trains) · real-time web search (Perplexity already handles this) · voice input.

## 7. Product Flow & UX

**Core journey:** user types a query in a single input bar → selects the model panel → Lychee AI routes the query to all models simultaneously → individual responses appear in a parallel view → the deliberation engine identifies agreements, surfaces disagreements, and runs a refinement round → synthesis is generated with a confidence score → user can save, export, rate, or ask a follow-up.

**Key screens:**

1. **Query Input** — prominent search bar, model panel selector, recent queries
2. **Deliberation View** — live progress ("GPT-4o responded ✓", "Claude deliberating…", "Synthesizing…")
3. **Results View** — tabs for individual answers, debate summary (agreements green, disagreements orange), and the synthesis with a confidence pill
4. **Synthesis Detail** — full answer, High/Medium/Low confidence with % breakdown, "X of 6 models agreed" indicator, sources, export/save/share

## 8. Go-to-Market Strategy

**Phase 1 — Closed Beta (Months 1–2):** 200 power users via LinkedIn outreach, a ProductHunt waitlist, and Reddit; validate the core value prop and synthesis satisfaction.

**Phase 2 — Public Launch (Month 3):** ProductHunt launch + a LinkedIn content series ("I asked 4 AIs the same question. Here's what happened."); target 2,000 registered users and 500 WAU.

**Phase 3 — Growth (Months 4–6):** SEO comparison content, a referral program (share a synthesis → 50 free queries), and a B2B pilot with 5 research/consulting companies.

### Pricing

| Plan | Price | Includes |
| --- | --- | --- |
| Free | ₹0 | 10 queries/month, 2 models |
| Pro | ₹499/month | 200 queries/month, all models, export |
| Team | ₹1,999/month | 5 users, 1,000 queries, shared workspace |

### Positioning

**Category:** AI Productivity / Accuracy Layer. **Tagline:** "Many minds, one answer."

| Tool | What it does | What Lychee AI does differently |
| --- | --- | --- |
| ChatGPT / Claude / Gemini | Single model | Multi-model deliberation + consensus score |
| Perplexity | Web search + single model | Cross-model verification |
| Poe | Multi-model access | Adds deliberation + synthesis, not just access |

## 9. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| API costs make unit economics negative | Medium | High | Optimize routing; cache repeated queries; tiered plans |
| Models frequently disagree with no consensus | Medium | High | Robust synthesis algorithm; show "Low confidence" clearly rather than hallucinate consensus |
| Providers restrict APIs for aggregators | Low | Critical | Diversify model partners; open-source fallbacks |
| Users don't trust AI-synthesized synthesis | Medium | Medium | Full transparency — always show individual answers + debate |
| Latency too high | Medium | Medium | Parallel API calls; aggressive loading states; P95 <45s |
| Competitor launches similar product | Low (today) | High | Move fast; community moat; UX differentiation |

## 10. Open Questions

- What is the right deliberation algorithm — rule-based, LLM-as-judge, or voting?
- How do we handle real-time queries where models have different knowledge cutoffs?
- Should users be able to add custom or local models to the panel?
- What's the right confidence-scoring methodology?

---

*Lychee AI is an independent product. It is not affiliated with any of the AI companies mentioned.*
`,
};
