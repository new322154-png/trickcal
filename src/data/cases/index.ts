import type { CaseDefinition, CaseId } from "@/engine/types";
import { case01 } from "./case01";

export const CASES: Record<CaseId, CaseDefinition> = {
  [case01.id]: case01,
};

/** 진행 순서. 막 추가 시 여기에 id 추가. */
export const CASE_ORDER: CaseId[] = ["case01"];
