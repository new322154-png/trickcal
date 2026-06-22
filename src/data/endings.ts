import type { Ending } from "@/engine/types";

/**
 * 엔딩 레지스트리. 미구현 막은 lockedHint="업데이트 예정"인 ??? 자리로 두어
 * 앨범 화면이 곧 "업데이트 예고" 역할을 겸한다.
 */
export const ENDINGS: Ending[] = [
  { id: "case01_true",      caseId: "case01", kind: "true",   title: "사라진 간식 창고 — 진상", lockedHint: "제1막 클리어로 해금" },
  { id: "case01_secret",    caseId: "case01", kind: "secret", title: "숨겨진 진실",            lockedHint: "숨겨진 진실 3개 모두 해금" },
  { id: "case01_bad_erpin", caseId: "case01", kind: "bad",    title: "오답: 에르핀 봉인",       lockedHint: "범인을 잘못 지목" },
  { id: "case01_fail",      caseId: "case01", kind: "fail",   title: "심문회 실패",            lockedHint: "교주 멘탈 소진" },

  // ── 미구현 막 (업데이트 예정) ──
  { id: "act2_locked", caseId: "case02", kind: "true", title: "???", lockedHint: "업데이트 예정" },
  { id: "act3_locked", caseId: "case03", kind: "true", title: "???", lockedHint: "업데이트 예정" },
];
