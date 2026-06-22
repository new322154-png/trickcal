import type { TestimonyLine, EvidenceId } from "./types";

export interface PresentResult {
  correct: boolean;
  line: TestimonyLine;
}

/** 심문 중 증거 제시 판정 */
export function presentEvidence(line: TestimonyLine, evidenceId: EvidenceId): PresentResult {
  return { correct: line.counterEvidenceId === evidenceId, line };
}
