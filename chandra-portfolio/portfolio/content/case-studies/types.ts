export type CaseStudyMeta = {
  slug: string;
  title: string;
  tagline: string;
  company: string;
  role: string;
  date: string;
  tags: string[];
  nsm: string;
  stats: { value: string; label: string }[];
  summary: string;
  figmaUrl?: string;
  deckUrl?: string;
  pdfUrl?: string;
  githubUrl?: string;
  /** Link to a live, shipped product. */
  liveUrl?: string;
  /** True when this is a live product rather than a case study. */
  live?: boolean;
  featured?: boolean;
};

export type CaseStudy = CaseStudyMeta & {
  /** Full long-form case study in Markdown (GFM tables supported). */
  body: string;
  /** Wireframe images bundled in /public/wireframes. */
  wireframes?: { src: string; caption: string }[];
};
