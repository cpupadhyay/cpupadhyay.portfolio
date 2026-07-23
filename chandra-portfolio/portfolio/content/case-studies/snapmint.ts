import { CaseStudy } from "./types";

export const snapmint: CaseStudy = {
  slug: "snapmint-trust",
  title: "Snapmint — Losing Users at the Moment of Purchase",
  tagline: "Building trust in a BNPL shopping experience",
  company: "Snapmint",
  role: "Product Case Study",
  date: "March 2026",
  tags: ["BNPL", "Fintech", "Trust Design", "RICE"],
  nsm: "Monthly Successful Purchase Completion Rate",
  stats: [
    { value: "3–5% → 12–15%", label: "Target purchase conversion in 6 months" },
    { value: "3", label: "Personas built from app + review research" },
    { value: "7", label: "Features recommended and RICE-scored" },
  ],
  summary:
    "Snapmint serves first-time credit users who want to buy — and can afford EMI — yet drop off right before payment. The reason isn't pricing, it's trust: no reviews, no warranty visibility, no support access. This study maps the drop-off journey across three personas and proposes trust-first fixes.",
  figmaUrl:
    "https://www.figma.com/design/pTZBCDl9BPkZyslVdhfwF7/Snapmint-Product-Case-Study?node-id=0-1&p=f&t=LqBLfPTtmbzY8eIP-0",
  featured: true,
  body: `
> **Case Study at a Glance:** Snapmint is a BNPL (Buy Now Pay Later) shopping platform targeting first-time credit users in India. Despite offering a genuinely useful service for people who have no credit card access, the app struggles to convert interested users into paying customers. This case study explores why that gap exists, who is most affected, and what product decisions can close it.

## 01. Problem Framing

Snapmint sits in an interesting position. It serves a real need for millions of young Indians who cannot access traditional credit. The demand is there. The intent is there. But something breaks between the moment a user lands on the app and the moment they complete a purchase.

After personally installing and using the app, and going through hundreds of user reviews on the Play Store and online forums, one pattern became impossible to ignore. Users are not leaving because the idea of BNPL does not appeal to them. They are leaving because the app does not give them enough confidence to trust it with their money.

No product reviews. No visible warranty. No easy way to reach support. No order confirmation after payment. These are not minor UX problems. For a first-time buyer spending thousands of rupees on a phone or gadget, these are deal-breakers.

> **Official Problem Statement:** Snapmint users show strong purchase intent but drop off at the point of buying, due to a lack of trust signals, poor product discovery, an absent cart system, and inaccessible customer support. This results in low purchase conversion and poor user retention on the platform.

## 02. User Personas

Three distinct user groups were identified through app research and Play Store review analysis.

> **Common thread:** Rahul, Priya, and Suresh come from different backgrounds — but they are all first-time or early-stage credit users who need maximum reassurance before committing money on an unfamiliar platform. **Trust is the universal unlock for all three.**

### Persona 1 — Struggling Rahul 🎓

19–25, college student or fresh graduate in any Indian city, earning nothing or ₹5,000–10,000 from part-time work. He wants a phone or earphones but has no credit card, no credit history, and asking his parents feels uncomfortable. Snapmint is not just convenient for Rahul — it is his only realistic option.

**Core job:** "When I want something I cannot afford right now, I want a safe and simple way to split the payment into installments, so I can buy it without asking my parents or waiting months to save up."

**Biggest fear:** "If something goes wrong with my order, no one will help me and I will lose my money." He is likely making one of his first major financial commitments without a safety net. Trust is not a nice-to-have; it is the entire reason he will or will not complete the purchase.

### Persona 2 — Working Priya 💼

24–28, first job in a Tier-2 city (Indore, Nagpur, Jaipur), earning ₹18,000–30,000/month. Debit card, no credit card yet. She wants home decor, festival wear, or the skincare routine she saw on Instagram — affordable in installments, not in one shot.

**Core job:** "When I find something I love online, I want to buy it immediately in affordable installments without a complicated credit application."

**Biggest fear:** buying the wrong size or product and not being able to return it. Her drop-off moment: no gender-specific categories and no visible 7-day return option. If the app feels risky, she orders from Myntra or Meesho instead.

### Persona 3 — Small Town Suresh 🏪

30–38, kirana shop owner or daily-wage earner in semi-urban UP, Bihar, or Rajasthan, earning ₹12,000–20,000/month with no formal banking credit relationship. Wants a smartphone for his shop's UPI payments, or a fan and cooler before summer.

**Core job:** "When I need a big-ticket item for my home or business, I want a trustworthy way to pay in small monthly amounts, so I do not have to drain my savings or borrow from someone I know."

**Biggest fear:** getting cheated — losing money to a fake app or receiving a fake product. Suresh reads every review, asks around before installing, and abandons the purchase if he cannot find a customer support number.

## 03. Root Cause Analysis

### Rahul's Drop-off Journey

| Stage | What Happens |
| --- | --- |
| Opens the app | Curious and motivated — he has heard about BNPL and wants to try it |
| Browses products | Finds a phone or earphones he likes |
| Looks for reviews | No user ratings, no buyer feedback — is the product genuine? |
| Checks EMI options | Only 3-month EMI: ₹4,000/month for a ₹12,000 phone — too high |
| Tries to add two items | No cart — he must buy one at a time |
| Looks for warranty info | Nothing visible |
| Contacts support | No live chat, no visible phone number |
| Exits the app | Opens Flipkart instead — more expensive, but he trusts it |

### Root Causes Bucketed

| Root Cause | Impact on Users |
| --- | --- |
| No product reviews or ratings | Cannot judge quality or authenticity before buying |
| No warranty or product assurance | Too risky for big purchases |
| No cart system | Cannot combine items into one purchase or EMI |
| Limited EMI tenure options | 3-month EMI feels unaffordable; 6 or 12 months changes the math |
| No gender or category filters | Slow, frustrating discovery — especially for Priya |
| No user profile section | App feels anonymous; no history or personalization |
| Poor customer support access | No safety net — critical blocker for Suresh |

> **The one core finding:** Snapmint was built for transactions. It was not built for trust. The payment mechanics work, but the product forgot that its users are first-time buyers who need maximum hand-holding and assurance before, during, and after every purchase.

### A Psychological Insight on EMI Tenure

| EMI Tenure | Monthly Amount on a ₹12,000 Phone |
| --- | --- |
| 3 months | ₹4,000/month — feels unaffordable |
| 6 months | ₹2,000/month — manageable |
| 12 months | ₹1,000/month — comfortable |

Same product. Same total cost. But the 12-month option makes it feel four times more affordable. For Rahul and Suresh, this is the difference between walking away and completing the purchase.

## 04. North Star Metric

> **Monthly Successful Purchase Completion Rate** — the percentage of users who viewed a product and completed the purchase within 7 days.

| Why This NSM | Explanation |
| --- | --- |
| Measures trust | If users trust the platform, they complete purchases — the NSM goes up |
| Measures UX quality | If cart, EMI options, and filters work well, conversion improves directly |
| Measures business health | Snapmint only earns when a purchase happens — the NSM tracks the real revenue signal |

## 05. Feature Recommendations

1. **Verified Buyer Review & Rating System** — only confirmed purchasers can rate; immediate social proof at the most critical moment of the journey.
2. **In-App Support Center** — live chat, callback option, and searchable FAQ. The most common review complaint is unreachable support.
3. **Multi-Product Cart with Combined EMI Calculation** — one purchase flow, one combined EMI across flexible 3/6/12-month tenures; less friction, higher AOV.
4. **User Profile & Purchase History Dashboard** — past orders, ongoing EMI schedules, account details; makes the app feel legitimate and reduces support queries.
5. **7-Day Hassle-Free Return Policy with in-app initiation** — removes Priya's biggest psychological barrier before purchase.
6. **Real-Time Order Tracking** — confirmed → shipped → out for delivery; eliminates post-purchase anxiety.
7. **Gender & Category-Based Product Discovery** — filters for men, women, electronics, fashion; directly solves Priya's drop-off moment.

## 06. RICE Prioritization

| Feature | Reach | Impact | Confidence | Effort | RICE Score | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Verified Buyer Reviews | 9 | 9 | 8 | 4 | 162 | P1 |
| In-App Support Center | 9 | 9 | 9 | 5 | 145 | P1 |
| Multi-Product Cart | 8 | 8 | 8 | 6 | 85 | P2 |
| User Profile Dashboard | 7 | 7 | 7 | 5 | 69 | P2 |
| 7-Day Return Policy | 8 | 8 | 7 | 7 | 64 | P2 |
| Real-Time Order Tracking | 6 | 7 | 7 | 8 | 37 | P3 |
| Gender & Category Filters | 7 | 6 | 8 | 3 | 112 | P3 |

> **Note on prioritization:** Gender & Category Filters scored 112 on RICE but were placed in P3 — trust-building features directly drive purchase conversion, which is the core problem. Filters improve discovery but do not solve the underlying fear of transacting. The return policy, despite a lower RICE score, was moved to P2 because it directly removes a pre-purchase psychological barrier — most critical for Priya.

## 07. Success Metrics

| Metric | Current State | Target (6 Months) |
| --- | --- | --- |
| Monthly Purchase Conversion Rate (NSM) | 3–5% estimated | 12–15% |
| Monthly Active Users (MAU) | Baseline | +25% growth |
| Cart Abandonment Rate | High | −30% |
| Support Resolution Time | 48–72 hours | Under 4 hours |
| Review Submission Rate | Near 0% | 20% of buyers |
| Repeat Purchase Rate | Low | +40% in 6 months |
| Return Rate | Unknown | Under 8% |

> **Industry benchmark context:** Amazon and Flipkart convert at 8–12%. Average Indian e-commerce sits at 2–4%. A BNPL platform with strong trust signals should realistically target 10–15%. The 12–15% goal is ambitious but grounded in real benchmarks.

## 08. Wireframes

Four critical screens, each mapping directly to a root cause and its feature recommendation:

1. **Product Detail Page** — with Verified Reviews and Warranty Badge
2. **Multi-Product Cart** — with Combined EMI Calculator (3/6/12-month options)
3. **In-App Support Center** — Live Chat, Call, and FAQ tabs
4. **User Profile Dashboard** — Orders, EMI Schedule, Account Details

The live Figma file is embedded below.

## Final Thought

> Snapmint does not have a product problem. It has a trust problem. The BNPL concept works. The demand is real. Rahul needs confidence before he buys. Priya needs assurance she can return. Suresh needs proof that someone will pick up the phone. Fix the trust across all three users, and the conversions will follow.
`,
};
