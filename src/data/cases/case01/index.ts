import type { CaseDefinition } from "@/engine/types";

/**
 * 제1막 〈사라진 간식 창고 — 기절 사건〉
 *
 * 콘텐츠(증거/심문/논점/재구성/대사)는 docs/case01_evidence_matrix.md 를
 * 기준으로 이 객체에 채운다. 지금은 스키마만 잡힌 빈 껍데기.
 * implemented=false 인 동안 화면은 "준비 중"으로 처리된다.
 */
export const case01: CaseDefinition = {
  id: "case01",
  act: 1,
  title: "사라진 간식 창고",
  subtitle: "기절 사건",
  implemented: false,

  // 1막 등장 인원 (6~8명). matrix의 슬롯 배치 기준 초안.
  characters: ["guju", "erpin", "ner", "spiki", "mute", "makasha", "joan"],

  locations: [
    // TODO: { id: "warehouse", name: "간식 창고", background: "bg_warehouse_normal.webp", evidenceIds: [...] },
  ],

  evidences: [
    // TODO: docs/case01_evidence_matrix.md §4 증거 마스터 리스트
  ],

  testimonies: [
    // TODO: docs/case01_evidence_matrix.md §5 개별 심문 매트릭스
  ],

  debate: [
    // TODO: docs/case01_evidence_matrix.md §6 교단 심문회 논점
  ],

  reconstruction: { cards: [], correctOrder: [] }, // TODO: §7

  // accusation: { culpritId: "...", keyEvidenceId: "...", motiveId: "...", motiveOptions: [...] }, // TODO: §7
};
