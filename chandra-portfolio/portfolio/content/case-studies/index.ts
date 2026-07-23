import { claudeVoice } from "./claude-voice";
import { groww } from "./groww";
import { chorus } from "./chorus";
import { zomato } from "./zomato";
import { snapmint } from "./snapmint";
import { dreamjob } from "./dreamjob";
import { CaseStudy } from "./types";

// Order controls display order on /projects and the homepage (newest first).
export const caseStudies: CaseStudy[] = [claudeVoice, groww, chorus, zomato, snapmint, dreamjob];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
export * from "./types";
