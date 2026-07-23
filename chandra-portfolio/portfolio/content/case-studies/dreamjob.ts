import { CaseStudy } from "./types";

export const dreamjob: CaseStudy = {
  slug: "dreamjob",
  title: "DreamJob — Fresher Job Marketplace",
  tagline: "An execution layer on top of every job board, built for opportunities not lost",
  company: "DreamJob (0→1 Concept)",
  role: "Founder & Product Owner · 2-Month Design Project",
  date: "February 2026",
  tags: ["Marketplace", "0→1 Concept", "User Research", "HR Tech"],
  nsm: "Interview Conversion Rate",
  stats: [
    { value: "<5%", label: "Interview callbacks freshers get today" },
    { value: "60+", label: "Avg. applications per candidate surveyed" },
    { value: "8/10", label: "Freshers preferring a fresher-only platform" },
  ],
  summary:
    "Job platforms make money when you apply more — not when you get hired. DreamJob is a fresher-exclusive marketplace prototype that improves candidate visibility and recruiter filtering, measured by the metric that actually matters: Interview Conversion Rate.",
  featured: true,
  body: `
## 1. Executive Summary

DreamJob is a marketplace prototype designed to solve structural inefficiencies in entry-level job discovery for freshers (0–2 years experience).

Existing job platforms aggregate all experience levels, resulting in experienced candidates applying to fresher roles, low visibility for entry-level candidates, and high application volume with low interview conversion.

DreamJob proposes a niche, fresher-exclusive hiring ecosystem that improves candidate visibility and recruiter filtering efficiency. The project was executed as a structured product design exercise over 2 months, including research, feature definition, marketplace strategy, and prototype design.

## 2. Problem Definition

### Core Problem

Freshers face disproportionately high competition on general job platforms due to overlapping experience-level listings, lack of filtering transparency, resume optimization challenges, and fragmented job tracking.

**Impact:** high application fatigue, low response rates (<5% interview callbacks in early research), reduced confidence, and inefficient job-search cycles.

**Key insight:** this is not just a discovery issue — it is a **marketplace imbalance** issue.

## 3. User Research

**Research type:** qualitative survey of 10 freshers (0–2 years experience).

**Key findings:**

- Average applications per candidate: 60+
- Average interview callbacks: <5%
- 7/10 felt experienced candidates dominate fresher listings
- 8/10 preferred a fresher-only platform
- Most rely on multiple job platforms + email notifications

**Limitation:** sample size is small; further quantitative validation is required for statistical confidence.

## 4. Target Users

**Primary (supply side):** final-year students, 0–2 year candidates, internship seekers.
**Secondary (demand side):** startup recruiters hiring entry-level talent; HR teams seeking junior-level hiring efficiency.

## 5. Product Vision

Build a verticalized, entry-level job marketplace that improves fairness in fresher hiring, reduces filtering friction for recruiters, increases interview conversion rates, and centralizes application tracking.

## 6. Core Hypothesis

**If** job listings are restricted to verified 0–2 year roles, candidates are ranked using skill-based scoring, and recruiters access a fresher-exclusive candidate pool — **then** recruiter filtering efficiency improves, candidate visibility increases, and interview conversion rates improve.

## 7. Product Architecture

**Supply side (freshers):** profile creation, skill tagging, resume upload, fresher score generation, job application tracker.

**Demand side (recruiters):** fresher-exclusive candidate pool, score-based filtering, in-app messaging, shortlisting dashboard.

## 8. Key Features (MVP Scope)

1. Fresher-Only Job Feed
2. Skill-Based Candidate Score System
3. Smart Resume Tailoring (ATS Optimization)
4. Integrated Job Application Tracker
5. In-App Recruiter Messaging

Feature prioritization focused on marketplace fairness and visibility improvement. The hardest call: everyone expected an ATS resume scanner first — I didn't build it, because freshers aren't losing jobs due to weak resumes; they're losing jobs because they forgot to reply to an email. Fix the bleeding, then build the intelligence.

## 9. Competitive Landscape

| Platform | Strength | Limitation for Freshers |
| --- | --- | --- |
| LinkedIn | Large professional network & recruiter reach | Mixed experience pool; freshers compete with experienced candidates |
| Naukri | High job volume across industries | Limited visibility control for entry-level candidates |
| Indeed | Aggregated listings from multiple sources | High application competition; minimal experience filtering |

These platforms mix all experience levels, optimize for volume, and do not isolate entry-level hiring. DreamJob differentiates by vertical focus and candidate-scoring transparency.

## 10. Marketplace Risk Analysis

DreamJob operates as a two-sided marketplace. The primary risk is the **cold start problem**: without recruiters there is no user value; without users there is no recruiter incentive. The initial strategy must focus on early-stage startup hiring rather than enterprise competition.

## 11. North Star Metric

**Interview Conversion Rate** (Interviews Received / Applications Submitted) — it measures actual hiring impact instead of vanity engagement metrics.

## 12. Key Metrics

**Supply:** profile completion rate, resume optimization usage, monthly active users.
**Demand:** recruiter activation rate, shortlist rate, recruiter response rate.
**Marketplace health:** application-to-interview ratio, time-to-shortlist, candidate satisfaction score.

## 13. Monetization Strategy

Freemium for candidates; revenue primarily from recruiters via a pay-per-shortlist model, startup hiring subscriptions, and featured candidate visibility. Entry-level candidates have low willingness to pay; recruiters pay for efficiency.

## 14. Product Development Status

**Current stage:** research & prototype.

**Completed:** user research (10 freshers), marketplace strategy, feature prioritization, North Star metric identification, high-fidelity Figma prototype, pitch deck.

**Not yet completed:** live MVP, recruiter onboarding, real user acquisition, backend development.

## 15. Validation Status

Qualitative validation from an early fresher sample; problem awareness confirmed; prototype feedback collected informally. **Limitations:** small sample size, no recruiter-side interviews yet, no action-based validation (signups / beta test).

## 16. Planned Validation Roadmap

1. Expand survey to 50+ freshers
2. Structured interviews with 5–10 recruiters
3. Launch a landing-page waitlist
4. Run a manual no-code beta experiment
5. Measure improvement in interview conversion

**Goal:** move from opinion validation to behavior-based validation.

## 17. Founder Responsibilities

Problem identification · user research · hypothesis framing · feature prioritization · marketplace modeling · metric definition · prototype design (Figma) · product documentation.

## 18. Key Learnings

- Marketplace products require supply-demand balance
- Distribution is harder than feature design
- Narrow vertical focus increases clarity
- Early validation must move beyond surveys
- Honest positioning is critical in product building

## 19. Future Scope

AI-based resume scoring engine · candidate verification system · recruiter onboarding pipeline · basic matching algorithm · college partnership integrations.

## 20. Conclusion

DreamJob is a structured marketplace design experiment addressing inefficiencies in entry-level job discovery. While currently at prototype stage, the project demonstrates product thinking, marketplace awareness, a metric-driven approach, and realistic risk analysis — a systematic approach to solving the hiring imbalance for freshers.
`,
};
