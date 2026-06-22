import type { DebateTopic, DebateStatement, EvidenceId } from "./types";

export function findWeakPoint(topic: DebateTopic): DebateStatement | undefined {
  return topic.statements.find((s) => s.weakPoint);
}

/** 심문회 논점에서 모순 발언에 정답 증거를 제시했는지 */
export function checkRebuttal(statement: DebateStatement, evidenceId: EvidenceId): boolean {
  return statement.weakPoint === true && statement.counterEvidenceId === evidenceId;
}
