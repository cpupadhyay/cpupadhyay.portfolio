import { CaseStudy } from "./types";

export const groww: CaseStudy = {
  slug: "groww-copilot",
  title: "Groww Copilot",
  tagline: "Helping first-time investors invest with confidence",
  company: "Groww",
  role: "APM Case Study",
  date: "June 2026",
  tags: ["AI", "Fintech", "RICE", "0→1 Concept"],
  nsm: "Confident Investment Actions per User",
  stats: [
    { value: "1,500", label: "Top RICE score — AI Support Assistant" },
    { value: "−30%", label: "Projected support tickets in 12 months" },
    { value: "+15%", label: "Projected first-investment conversion" },
  ],
  summary:
    "~1 lakh new demat accounts open in India every day, but most first-time investors don't know what to do after buying. Groww Copilot is an AI investing assistant that explains companies, coaches portfolios, and resolves support issues in plain language — education-first, not advice-first.",
  figmaUrl: "https://www.figma.com/design/5PwUMcmU45WRbjN6RwteZ8",
  featured: true,
  wireframes: [
    { src: "/wireframes/groww-copilot-2-support-assistant.svg", caption: "Phase 1 · AI Support Assistant — a withdrawal-status query answered with a live timeline instead of a ticket." },
    { src: "/wireframes/groww-copilot-1-explain-mode.svg", caption: "Phase 2 · Explain Like I'm a Beginner — card-based answers with an education-first disclaimer." },
    { src: "/wireframes/groww-copilot-3-portfolio-coach.svg", caption: "Phase 3 · Portfolio Coach — proactive insight cards that inform without pushing panic actions." },
    { src: "/wireframes/groww-copilot-4-investment-discovery.svg", caption: "Phase 4 · Smart Investment Discovery — educational fund examples with risk badges; the decision stays with the user." },
  ],
  body: `
## TL;DR — Case Study at a Glance

**Problem:** ~1 lakh new demat accounts open in India every day, but most first-time investors don't know what to do after buying — jargon, decision paralysis, and unreadable portfolios push them out of the app and toward YouTube influencers.

**Solution:** Groww Copilot: an AI investing assistant embedded across the app that explains companies, coaches portfolios, and resolves support issues in plain language.

**Why now:** Zerodha (Kite MCP) and Angel One are already shipping AI; SEBI's 2025 consultation paper is defining the rules. The beginner-first platform that nails *understanding* wins the next decade of retail investors.

**Expected impact:** −30% support tickets, +15% first-investment conversion, +10% retention within 12 months.

## Executive Summary

Groww has successfully simplified investing for millions of Indians. However, as the platform has expanded from mutual funds into stocks, ETFs, F&O, IPOs, and fixed deposits, the investing journey has become more complex for new users.

Many first-time investors struggle to understand financial terminology, evaluate investment options, interpret portfolio performance, and resolve issues when something goes wrong.

This case study proposes **Groww Copilot**, an AI-powered investing assistant that helps users understand, learn, and invest more confidently inside the Groww ecosystem. The idea isn't to make decisions for the user — it's to make the investing journey easier to follow, so the user still pulls the trigger, just with better information in hand.

## Why This Problem Matters

India is witnessing rapid growth in retail investing. The numbers tell the story:

- India crossed **21 crore demat accounts** by late 2025, up from ~2.5 crore in 2016 — with roughly **1 lakh new accounts opening every day**
- **13.6 crore unique investors** now participate in Indian markets (SEBI)
- Groww leads the market with **1.3 crore+ NSE active clients and ~28.5% market share** (April 2026)
- Yet NSE active clients **declined ~7% in FY26** — acquisition is slowing, so **retention and depth of engagement** are the new battleground

While opening a demat account has become easier than ever, understanding what to do after opening that account remains difficult.

Most users can buy a stock. Far fewer users understand:

- Whether that stock is fundamentally strong
- What financial metrics mean
- How diversified their portfolio is
- Whether they are taking excessive risk
- What actions they should consider next

As a result, users often feel overwhelmed, depend on YouTube influencers, invest without conviction, and lose trust in the platform during confusion.

Groww is well positioned to fix this — not by adding another feature, but by becoming the platform users actually trust to explain what's happening with their money.

## Understanding Groww

Groww started as a mutual fund investment platform and later expanded into stocks, ETFs, IPOs, gold, fixed deposits, and F&O trading. Its primary strength is simplicity.

Unlike traditional brokerages that target experienced traders, Groww focuses heavily on beginner investors. Because Groww already owns the beginner segment, it has a natural right to solve the financial-literacy problem inside the product itself, instead of leaving users to figure it out on YouTube.

## Competitive Landscape: The AI Race Has Already Started

| Player | AI Move | Gap |
| --- | --- | --- |
| Zerodha | Kite MCP: lets users connect their portfolio to AI assistants | Built for power users who already know what to ask |
| Angel One | AI-powered research tools, multilingual AI content | Full-service positioning; beginners underserved |
| INDmoney & others | AI-driven insights and nudges | Fragmented, not conversation-first |
| **Groww** | Largest beginner base + strong brand, but no flagship AI assistant yet | **The opportunity** |

Zerodha's MCP approach assumes users already know what questions to ask. Groww's beginner base needs the opposite: an assistant that meets them at zero.

**SEBI's July 2025 consultation paper on responsible AI** means the compliance playbook is being written right now — early movers who build education-first (not advice-first) AI will help shape the standard.

## User Research

After reviewing public reviews, user discussions, and common complaints, several recurring themes emerged.

### Theme 1: Financial Jargon Creates Anxiety

Many users encounter terms like PE Ratio, ROE, EBITDA, Debt-to-Equity, and CAGR. While these metrics are useful, they often create confusion for first-time investors. Users are forced to leave the app and search elsewhere for explanations.

### Theme 2: Investment Decision Paralysis

Users frequently know they want to invest but don't know which stock to choose, which mutual fund suits them, whether an investment is risky, or whether they should hold or sell. The abundance of choices creates friction.

### Theme 3: Portfolio Performance Is Hard to Interpret

Users can see returns. They often cannot understand why returns are changing, whether their portfolio is diversified, or which holdings are driving gains and losses.

### Theme 4: Customer Support Dependency

Common support questions — KYC status, IPO allotment, fund withdrawal, order execution, account verification — are repetitive and can be automated.

## User Personas

### Persona 1: Rahul — First-Time Investor

**Age:** 24 · **Occupation:** Software Engineer

**Goals:** Start investing; build wealth.
**Challenges:** Limited financial knowledge; unsure where to invest; relies on YouTube recommendations.

### Persona 2: Priya — Busy Professional

**Age:** 31 · **Occupation:** Marketing Manager

**Goals:** Long-term wealth creation; passive investing.
**Challenges:** Limited time for research; wants simplified insights.

## Jobs To Be Done

**Functional job:** When I want to invest my money, I want clear explanations and guidance so I can make informed decisions.

**Emotional job:** When investing, I want to feel confident rather than confused.

**Social job:** I want to feel financially informed without spending hours learning finance.

## Root Cause Analysis

At first glance, the problem appears to be a lack of financial knowledge. However, digging deeper reveals multiple root causes.

Users aren't confused because they're careless — they're confused because the products themselves are genuinely complex, and that complexity gets expressed through technical terms most people were never taught. The explanations for those terms do exist, but they're scattered across blogs, YouTube, and forums, not inside the app itself. So right at the moment someone is trying to decide, they leave the platform to go figure it out — and Groww is absent at exactly the moment it should be most useful.

That's the real root cause: not a lack of financial literacy, but a lack of financial literacy built into the product.

## Product Opportunity

Instead of forcing users to search externally, Groww can bring investing guidance directly into the app. This leads to the central idea:

**Groww Copilot** — an AI-powered investing assistant that helps users understand investments, analyze opportunities, learn financial concepts, navigate the platform, and resolve support issues. All through natural conversation.

## Solution Overview

Groww Copilot acts as a financial guide embedded across the platform, supporting users throughout the investing journey.

### Feature 1: Explain Like I'm a Beginner

A user opens a stock page and instead of scrolling through PE ratio, ROE, and EBITDA with no context, they tap "Explain This Company." Copilot breaks it down in plain language — what the company actually does, how it makes money, whether revenue and profit are trending up or down, the key risks, and how it stacks up against competitors. No jargon, no separate Google search.

### Feature 2: Smart Investment Discovery

Say a user types "I have ₹5000 and want something low-risk." Copilot doesn't just throw a list of funds at them — it explains the risk profile and historical performance behind each suggestion, and flags what to watch out for. That's the difference between spending an evening comparing five funds and getting a shortlist with the reasoning already attached.

### Feature 3: Portfolio Coach

This one runs in the background. Copilot keeps an eye on portfolio health and surfaces things the user probably wouldn't catch on their own — "your portfolio is heavily concentrated in banking stocks," or "risk level has gone up this month." It's meant to nudge, not alarm.

### Feature 4: AI Support Assistant

The most straightforward win. KYC status, IPO allotment, withdrawal timelines, order status — all of these are questions the support team answers dozens of times a day. Copilot resolves them instantly instead of making the user wait in a ticket queue.

## Why AI Instead of Traditional Solutions?

I considered a few lower-effort alternatives before landing on Copilot. More educational blog content is cheap to produce, but users rarely read it mid-decision — by the time they're stuck on a specific stock, they've already left the app. Video tutorials have the same problem: fine for general concepts, too generic to answer "should I buy this specific stock right now." Improving onboarding helps first-time users get started, but does nothing for the confusion that shows up weeks later when someone's actually staring at a portfolio.

An AI Copilot is the only option that's personalized, available in the exact moment of confusion, and scales to crores of users without a linear increase in support headcount. That's why it's the core bet here, not the alternatives above.

## Prioritization Framework (RICE)

| Feature | Reach (users/qtr) | Impact (0.25–3) | Confidence | Effort (person-months) | RICE Score |
| --- | --- | --- | --- | --- | --- |
| AI Support Assistant | 5M | 2 | 90% | 6 | **1,500** |
| Explain Mode | 3M | 2.5 | 80% | 8 | **750** |
| Portfolio Coach | 2M | 2 | 70% | 10 | **280** |
| Investment Discovery | 2.5M | 3 | 50% | 16 | **234** |

*Reach estimates assume ~1.3 Cr active clients. Effort includes model evaluation, guardrails, and compliance review.*

**Phase 1 — AI Support Assistant:** highest reach and quickest business impact.
**Phase 2 — Explain Mode:** directly addresses financial literacy.
**Phase 3 — Portfolio Coach:** improves engagement and retention.
**Phase 4 — Investment Discovery:** highest complexity and regulatory considerations.

## Rollout Roadmap

| Quarter | Launch | Goal |
| --- | --- | --- |
| Q1 | AI Support Assistant | Reduce support tickets |
| Q2 | Explain Mode | Increase research engagement |
| Q3 | Portfolio Coach | Increase retention |
| Q4 | Guided Investing | Increase investment conversion |

## Success Metrics

### North Star Metric

**Confident Investment Actions per User** — investments completed after interacting with Groww Copilot.

### User Metrics

Monthly Active Users · Copilot Usage Rate · Research Completion Rate

### Business Metrics

Investment Conversion Rate · User Retention · Revenue Per Active User

### Support Metrics

Ticket Volume · Resolution Time · Customer Satisfaction Score

### Guardrail Metrics (what must NOT get worse)

- **Advice-escalation rate** — % of conversations crossing from education into regulated investment advice (target: <0.5%)
- **Factual-error / hallucination rate** — via sampled human review of Copilot answers (target: <1%)
- **Panic-action rate** — users selling within 24h of a Copilot risk insight (Copilot should inform, not scare)
- **Ticket re-open rate** — AI deflection shouldn't just delay tickets
- **Beginner F&O activity** — Copilot must not inadvertently push new users toward risky derivatives

## Estimated Impact

Within 12 months: a 30% reduction in support tickets, 15% increase in first-investment conversion, 10% increase in retention, 20% increase in product engagement, and improved customer trust and satisfaction.

*Assumptions: based on published AI support-deflection benchmarks (25–40%) and conversion lift from in-context education features in comparable fintech products. Directional estimates, to be validated by the MVP experiment below.*

## Risks and Mitigation

**Incorrect financial advice** — Copilot educates rather than directly recommends.

**Hallucinations** — use verified Groww data and retrieval systems.

**Regulatory concerns** — provide insights, explanations, and educational content instead of investment advice.

## MVP & Experiment Design

Rather than building all of Phase 1 at once, I'd validate with a 6-week experiment.

**Hypothesis:** If beginner investors get instant plain-language answers to support and product questions, ticket volume drops and session depth increases.

**Test:** Ship Copilot to 5% of users (randomized), limited to the top 20 support intents + "Explain This Company" on the 100 most-viewed stocks.

**Success criteria:** ≥25% ticket deflection, CSAT ≥4.2/5 on Copilot answers, no rise in advice-escalation flags.

**Kill criteria:** Hallucination rate >2% after retrieval iteration, or a compliance red flag.

## What the Experience Looks Like

**Entry points:**

1. "Ask Copilot" chip on every stock and fund page
2. Contextual prompt on the portfolio page ("Why is my portfolio down today?")
3. Default responder in support chat

**Explain Mode flow:** Stock page → "Explain this company" → card-based answer: what it does → how it earns → 3 key numbers translated into plain language → risks → "Ask a follow-up." Every card ends with a disclaimer and a "Learn more" link to Groww's education content — education-first by design.

## Open Questions & What I'd Do Differently

- **Vernacular first?** A large share of new investors come from Tier 2/3 cities. Hindi + regional-language support may matter more than feature breadth — I'd test this in the MVP.
- **Build vs. partner** on the LLM layer: cost per conversation at 1.3 Cr-user scale is a real unit-economics question.
- **Where education ends and advice begins** needs a formal compliance policy before a single user sees this — SEBI's AI framework is still evolving.
- I'd want **real user interviews** (not just app reviews) to validate that confusion — not fees or returns — is the true churn driver.

## Final Recommendation

Groww already has the products and the user base. What it's missing is the layer that helps people actually understand what they're doing with their money — and that gap is Copilot's opportunity.

I'd start small: ship the Support Assistant first since it's the lowest-risk, fastest win, prove out the guardrails (hallucination rate, advice-escalation rate), and only then expand into Explain Mode and Portfolio Coach. If it works, Groww stops being just the easiest place to buy a stock and becomes the platform that actually teaches you how to invest — which, for a beginner-first product, might end up being the bigger moat.
`,
};
