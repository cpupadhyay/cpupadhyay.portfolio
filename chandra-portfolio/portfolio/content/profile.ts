export const profile = {
  name: "Chandra Prakash Upadhyay",
  headline: "Founder at Lychee AI · Building AI products",
  location: "Bengaluru, India",
  email: "chandraprakashupadhyay2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/cpupadhyay",
  github: "https://github.com/cpupadhyay",
  lychee: "https://getlychee-ai.online",
  site: "https://cpupadhyay-portfolio.vercel.app",
  lookingFor: "APM & Product roles",
};

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  current?: boolean;
  href?: string;
  summary: string;
  points: string[];
};

/** Single source of truth for the home-page timeline and the /experience page. */
export const timeline: TimelineItem[] = [
  {
    period: "Mar 2026 – Present",
    title: "Founder & Product Builder",
    org: "Lychee AI",
    current: true,
    href: "/projects/lychee-ai",
    summary:
      "Building and running Lychee AI, a live AI assistant where frontier models debate or judge each other to produce one answer you can trust.",
    points: [
      "Took Lychee AI from a PRD and Figma prototype to a live web app at getlychee-ai.online, owning UX, prioritisation, build and deployment (Vercel + GitHub workflows).",
      "Shipped Debate and Judge modes, single-model chat with an Auto picker, Google sign-in, bring-your-own-key access, an open demo mode and an installable app.",
      "Set Weekly Active Queries as the North Star; chose BYOK-first to learn who the users are before taking on inference costs.",
      "Grew to ~300 visitors through organic launch videos on X; next up are hosted Standard and Pro plans, live web search and image generation.",
    ],
  },
  {
    period: "2025 – Jul 2026",
    title: "Independent Product Case Studies",
    org: "Claude · Groww · Zomato · Snapmint · DreamJob",
    href: "/projects",
    summary:
      "Five published product case studies, from review mining and user research to RICE / MoSCoW prioritisation, metric design and wireframes.",
    points: [
      "Claude Voice Mode (Jul 2026): mined 150+ one-star reviews, RICE-scored 7 pain points and set a ≥20% completion-rate gate for rollout.",
      "Groww Copilot (Jun 2026): designed an AI investing assistant for first-time investors with guardrails on where education ends and advice begins.",
      "Zomato, Snapmint and DreamJob (Feb – Mar 2026): retention, BNPL trust and a fresher job marketplace, each with a North Star and metric tree.",
    ],
  },
  {
    period: "Apr 2025 – May 2025",
    title: "Data Analyst Intern",
    org: "Soroco · Bengaluru",
    summary:
      "Worked with Product, Engineering and Customer Success to track product health across 500K+ data points.",
    points: [
      "Analysed 500K+ rows of workflow data in SQL and Python (Pandas, NumPy) to find where teams lost the most time.",
      "Built Power BI dashboards on KPI trends, user behaviour and workflow drop-offs that helped teams prioritise fixes and validate releases.",
      "Worked in an Agile environment alongside product and engineering teams.",
    ],
  },
  {
    period: "Jul 2019 – Jun 2023",
    title: "B.Tech, Computer Science & Engineering",
    org: "SRMU Lucknow · CGPA 7.54",
    summary: "The technical foundation (programming, databases, systems) behind everything I build.",
    points: ["Programming, databases and systems: the foundation that lets me build products, not just spec them."],
  },
];

export const skillGroups = [
  {
    title: "Product",
    items: ["PRD writing", "User research", "JTBD & personas", "RICE / MoSCoW", "North Star & metric trees", "Roadmapping", "Competitive analysis"],
  },
  {
    title: "Data",
    items: ["SQL", "Python (Pandas, NumPy)", "Funnel & cohort analysis", "Power BI", "Tableau", "Advanced Excel", "A/B test design"],
  },
  {
    title: "Build & ship",
    items: ["LLM products", "Prompt design", "Figma", "Vercel", "GitHub", "AWS", "Rapid prototyping"],
  },
];
