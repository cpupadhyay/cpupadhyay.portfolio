export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  status: string;
  credentialUrl?: string;
  skills: string[];
  about: string;
};

export const certifications: Certification[] = [
  {
    slug: "ibm-ai-product-manager",
    title: "IBM AI Product Manager Professional Certificate",
    issuer: "Coursera · IBM",
    status: "In Progress — expected Sep 2026",
    skills: ["AI Product Management", "Product Lifecycle", "Agile", "Prompt Engineering"],
    about:
      "A multi-course professional certificate covering the full AI product lifecycle — from opportunity discovery and requirements to responsible AI, delivery, and stakeholder communication.",
  },
  {
    slug: "aha-product-management-professional",
    title: "Aha! Product Management Professional Certificate",
    issuer: "Aha! · LinkedIn Learning",
    status: "Completed · Feb 2026",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/f553b9bedf86137b4dc3689b39dd11dbeff6432fbdf8136d1f5ada3b1b7b3070/",
    skills: ["Product Strategy", "Roadmapping", "Prioritization", "Product Requirements"],
    about:
      "Aha!'s professional learning path on the craft of product management: strategy, roadmaps, prioritization frameworks, and shipping with cross-functional teams.",
  },
  {
    slug: "pw-skills-data-analytics",
    title: "Data Analytics Course",
    issuer: "PW Skills",
    status: "Completed",
    credentialUrl:
      "https://pwskills.com/learn/certificate/f26791d8-51a5-404e-921b-d8ee87ceafa2/?isCareerPath=true",
    skills: ["SQL", "Python", "Data Visualization", "Excel", "Statistics"],
    about:
      "A career-path program in data analytics covering SQL, Python, statistics, visualization, and insight-driven decision making — the analytical backbone of my product work.",
  },
  {
    slug: "google-analytics-quick-start",
    title: "Google Analytics Quick Start",
    issuer: "LinkedIn Learning",
    status: "Completed · Mar 2026",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/9705d842c9f800630930bf25ae72cca843ad1c205ec90e604ba3213b7bbb631e/",
    skills: ["Google Analytics", "Web Analytics", "Funnel Tracking"],
    about:
      "Hands-on foundations of Google Analytics: instrumenting a property, reading acquisition and behavior reports, and turning traffic data into funnel insights.",
  },
  {
    slug: "technical-product-management",
    title: "Technical Product Management",
    issuer: "LinkedIn Learning",
    status: "Completed",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/4f3e198e31f82ee6742059a05809f9a866a31246a15412a85dcaac0b03cebe08/",
    skills: ["Technical Fluency", "APIs", "Working with Engineers", "System Thinking"],
    about:
      "How PMs work credibly with engineering: understanding architectures, APIs, and technical trade-offs well enough to make informed product decisions.",
  },
  {
    slug: "pm-building-a-product-strategy",
    title: "Product Management: Building a Product Strategy",
    issuer: "LinkedIn Learning",
    status: "Completed",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/8bda585510b5efe0bb084b0f1c5344737fe822b7040d75bf762ba4dbc4c405b0/",
    skills: ["Product Strategy", "Market Analysis", "Positioning"],
    about:
      "Framing a product strategy from market and user insight: defining the problem space, positioning, and the bets that connect vision to roadmap.",
  },
  {
    slug: "pm-building-a-product-roadmap",
    title: "Product Management: Building a Product Roadmap",
    issuer: "LinkedIn Learning",
    status: "Completed",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/280ec0302b9937d3d0291d991a9d03dc379d9f8d254dbec8957b28409ee7799a/",
    skills: ["Roadmapping", "Prioritization", "Stakeholder Communication"],
    about:
      "Turning strategy into a sequenced, defensible roadmap — prioritization, timeboxing, and communicating trade-offs to stakeholders.",
  },
  {
    slug: "pm-customer-development",
    title: "Product Management: Customer Development",
    issuer: "LinkedIn Learning",
    status: "Completed",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/d785dcc1a3b10727f7521a7d0e1dc7a87c8ed80faec290f226d80c61c031b1c7/",
    skills: ["User Research", "Customer Interviews", "Problem Validation"],
    about:
      "The discipline of talking to users: structuring interviews, avoiding leading questions, and validating problems before building solutions.",
  },
  {
    slug: "pm-first-steps",
    title: "Product Management First Steps",
    issuer: "LinkedIn Learning",
    status: "Completed",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/898a5ef80cb19e0bb79056130819741b8e929a62b9e78f9ce298f3ecadf45a5c/",
    skills: ["PM Fundamentals", "Product Lifecycle", "Agile Basics"],
    about:
      "The foundations of the PM role: the product lifecycle, working with design and engineering, and the core responsibilities of product managers.",
  },
];

export function getCertification(slug: string) {
  return certifications.find((c) => c.slug === slug);
}
