import { claudeVoice } from "./claude-voice";
import { groww } from "./groww";
import { lycheeAI } from "./lychee-ai";
import { zomato } from "./zomato";
import { snapmint } from "./snapmint";
import { dreamjob } from "./dreamjob";
import { CaseStudy } from "./types";

// Order controls display order on /projects and the homepage.
// Lychee AI is the live product I'm building now, so it leads; case studies follow newest first.
export const caseStudies: CaseStudy[] = [lycheeAI, claudeVoice, groww, zomato, snapmint, dreamjob];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
export * from "./types";
