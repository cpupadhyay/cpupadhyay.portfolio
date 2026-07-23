import { CaseStudy } from "./types";

export const zomato: CaseStudy = {
  slug: "zomato-retention",
  title: "Zomato — Improving Retention",
  tagline: "Retention is not a pricing problem. It's a trust + behavior design problem.",
  company: "Zomato",
  role: "APM Case Study",
  date: "March 2026",
  tags: ["Retention", "Trust Design", "MoSCoW", "Food Delivery"],
  nsm: "Orders per MAU",
  stats: [
    { value: "+25%", label: "Target lift in Orders per MAU" },
    { value: "25%→40%", label: "Target 30-day retention improvement" },
    { value: "3", label: "Trust-first features: ETA, Refunds, Loyalty" },
  ],
  summary:
    "Zomato loses users after their first order — not because of food quality, but because a bad delivery experience breaks trust. This study proposes winning on reliability and habit formation instead of discounts: an ETA Confidence System, an Intelligent Refund Engine, and an AI Loyalty Engine.",
  featured: true,
  body: `
## Executive Summary

### The Problem

Zomato struggles to convert first-time users into repeat users. Users churn after initial orders due to **inconsistent delivery experience and lack of habit formation**.

### Unique Insight

> Retention drop is highest after a poor first experience, not due to lack of discounts. Users are more sensitive to trust (delivery reliability and refunds) than pricing.

### Product POV

Zomato should stop competing on discounts and instead win on **reliability + habit formation**. Discount-driven growth leads to weak long-term retention.

### Goal

- Increase **Orders per MAU** by +25%
- Improve **30-day retention (25% → 40%)**

### Root Causes

1. **Trust deficit** — unreliable delivery times and poor refund experience
2. **No habit loop** — no trigger → action → reward system

## User Personas

### Working Professional

Orders during lunch / late evening. Needs fast and reliable service. Low tolerance for delays.

### Student / Budget User

Highly discount-driven. Low loyalty. Switches platforms easily.

## User Journey

1. App install
2. First order (discount-driven)
3. Delivery experience
4. No strong re-engagement
5. Drop-off

**The major drop-off occurs after the first order.**

## Key Pain Points

- **Delivery issues** — late delivery, wrong ETA, cold food
- **Refund & support issues** — slow refunds, poor support
- **Food quality issues** — spillage, wrong items
- **Pricing issues** — hidden fees, surge pricing
- **UX issues** — app crashes, checkout friction

## Root Cause Analysis

1. **Trust deficit.** Users do not trust delivery reliability and support resolution.
2. **Lack of habit formation.** No trigger → action → reward loop.
3. **Decision fatigue.** Too many options, weak recommendations.

## Prioritization

| Feature | Impact | Effort | Priority |
| --- | --- | --- | --- |
| ETA System | High | Low | P0 |
| Refund System | High | Medium | P0 |
| Loyalty Engine | High | High | P1 |
| Reliability Score | Medium | Medium | P1 |
| Fraud Detection | Medium | High | P2 |

## Solutions

### ETA Confidence System

**Problem:** delivery uncertainty.
**Solution:** show delivery time as a range instead of a fake exact time, add a confidence score, and send real-time delay alerts — with a proactive credit before the user even opens the app.
**Expected impact:** reduce late-delivery complaints by ~30% and rebuild trust at the most fragile moment.

### Intelligent Refund Engine

**Problem:** poor resolution experience — a wrong order becomes a 3-day customer support battle.
**Solution:** instant refunds for clear issues using risk-based AI fraud scoring; wallet credit in 60 seconds, no CS ticket.
**Expected impact:** reduce complaint-driven churn by ~20% and restore trust at the exact moment it breaks.

### AI Loyalty Engine

**Problem:** loyalty that feels like a copy-paste job — the same 10% off for everyone.
**Solution:** contextual, behavior-based nudges — personalized offers, predictive reorder, smart reward timing. "Rainy evening in Bengaluru? Your favourite biryani — 20% off tonight."
**Expected impact:** increase repeat orders by ~25%; roughly 3× higher conversion vs. generic discount pushes.

### AI Image Fraud Detection

**Problem:** fake refund complaints. **Solution:** detect AI-generated complaint images and match against order data. **Impact:** reduced fraud and cost savings — protecting the instant-refund system from abuse.

### Reliability Score System

**Problem:** poor decision-making under too many options. **Solution:** show a restaurant reliability score and a "Safe Choice" badge. **Impact:** better decisions, fewer bad first experiences.

## Metrics Framework

**North Star:** Orders per MAU

**Input metrics:** first → second order conversion, offer conversion rate
**Output metrics:** 30-day retention, repeat order rate
**Guardrail metrics:** refund abuse rate, delivery delays, support load

*Impact estimates are based on industry benchmarks and comparable product improvements.*

## Experimentation Plan & Roadmap

- **Phase 1 (0–1 month):** ETA Confidence System + Intelligent Refund Engine
- **Phase 2 (1–2 months):** Reliability Score + Fraud Detection
- **Phase 3 (2–3 months):** AI Loyalty Engine

Each phase measures incremental impact before the next ships.

## Risks & Mitigation

| Risk | Mitigation |
| --- | --- |
| AI errors | Human fallback |
| Fraud abuse | Risk-based system |
| Over-personalization | User control |

## Product Thinking

**Why these features?** Focused on solving **trust first**, then **habit formation**, instead of adding random features.

**What I chose NOT to build:** heavy discount systems and complex UI changes — they do not solve the core retention problem.

**Trade-offs:** faster refunds vs. fraud risk · personalization vs. privacy · accuracy vs. system complexity.

### My Thought Process

> I initially considered focusing on discounts to improve retention. However, I rejected this approach — it drives short-term growth but fails to build long-term user habits. Instead, I focused on trust and behavioral design as the core levers.

## Future Scope

Advanced AI personalization · deeper fraud-detection models · voice-based ordering · predictive delivery optimization.

## Closing Note

Zomato's retention problem is not about acquiring users — it is about **keeping them through trust, consistency, and intelligent engagement**. You don't buy retention with coupons. You earn it by showing up for the user when things go wrong.
`,
};
