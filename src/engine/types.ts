// 코어 도메인 타입. 실제 사건(콘텐츠)은 이 형태에 끼워 넣는다.

export type FlagId = string;
export type CharacterId = string;
export type EvidenceId = string;
export type LocationId = string;
export type TestimonyId = string;
export type DebateTopicId = string;
export type EndingId = string;
export type CaseId = string;

export type EvidenceCategory =
  | "object" | "testimony" | "record" | "photo"
  | "chatlog" | "board" | "location" | "magic" | "derived";

export interface Evidence {
  id: EvidenceId;
  name: string;
  category: EvidenceCategory;
  description: string;
  /** 조사 심화 시 갱신되는 설명 (있으면 갱신 가능 증거) */
  updatedDescription?: string;
  relatedCharacters?: CharacterId[];
  relatedLocations?: LocationId[];
  /** 조합으로만 생기는 파생 증거의 재료 */
  combinesFrom?: [EvidenceId, EvidenceId];
  tags?: string[];
}

export type RoleSlot =
  | "culprit" | "trickster" | "host" | "explainer"
  | "judge" | "suspect" | "witness" | "support" | "boss";

export interface Character {
  id: CharacterId;
  name: string;
  species: string;
  /** A안 사건 내 역할 슬롯 (배치 초안, 사건별로 달라질 수 있음) */
  slot?: RoleSlot;
  note?: string;
}

export interface LocationDef {
  id: LocationId;
  name: string;
  evidenceIds?: EvidenceId[];
  background?: string; // 에셋 경로, 예) bg_warehouse_normal.webp
}

export interface TestimonyLine {
  id: TestimonyId;
  characterId: CharacterId;
  text: string;
  /** 모순을 찌르는 정답 증거. 없으면 추궁 전용 라인 */
  counterEvidenceId?: EvidenceId;
  onCorrect?: string;
  onWrong?: string;
  unlockFlag?: FlagId;
  unlockEvidenceId?: EvidenceId;
  pressureGain?: number;
}

export interface DebateStatement {
  id: string;
  characterId: CharacterId;
  text: string;
  weakPoint?: boolean;
  counterEvidenceId?: EvidenceId;
}

export interface DebateTopic {
  id: DebateTopicId;
  title: string;
  statements: DebateStatement[];
  successFlag: FlagId;
}

export interface ReconstructionCard {
  id: string;
  text: string;
}

export interface Reconstruction {
  cards: ReconstructionCard[];
  correctOrder: string[]; // card id 순서
}

export interface FinalAccusation {
  culpritId: CharacterId;
  keyEvidenceId: EvidenceId;
  motiveId: string;
  motiveOptions: { id: string; text: string }[];
}

export interface CaseDefinition {
  id: CaseId;
  act: number;
  title: string;
  subtitle?: string;
  characters: CharacterId[];
  locations: LocationDef[];
  evidences: Evidence[];
  testimonies: TestimonyLine[];
  debate: DebateTopic[];
  reconstruction: Reconstruction;
  accusation?: FinalAccusation;
  /** 콘텐츠 채워졌는지 — false면 "준비 중" 처리 */
  implemented: boolean;
}

export type EndingKind = "true" | "good" | "bad" | "fail" | "secret";

export interface Ending {
  id: EndingId;
  caseId: CaseId;
  kind: EndingKind;
  title: string;
  /** 해금 전 앨범에 보일 힌트 (없으면 ??? 만) */
  lockedHint?: string;
  blurb?: string;
  thumbnail?: string;
}

export type GamePhase =
  | "title" | "daily" | "investigation" | "interrogation"
  | "trial" | "reconstruction" | "result" | "album" | "comingSoon";
