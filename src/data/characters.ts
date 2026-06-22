import type { Character } from "@/engine/types";

/** 신규 캐스트 14 + 교주(플레이어). 슬롯은 A안 배치 초안 (사건별로 달라질 수 있음). */
export const CHARACTERS: Character[] = [
  { id: "guju",        name: "교주",          species: "교단",  note: "플레이어 / 1인칭 무얼굴 / 탐정" },
  { id: "erpin",       name: "에르핀",        species: "요정",  slot: "suspect",   note: "먹보·허당, 한계 오면 명석" },
  { id: "ner",         name: "네르",          species: "요정",  slot: "support",   note: "깐깐한 상식인·관리자" },
  { id: "joan",        name: "죠안",          species: "엘다인", slot: "host",      note: "광신 심판자 / 게임 마스터" },
  { id: "mayo",        name: "마요",          species: "요정",  slot: "support",   note: "음슴체·수집벽 전당포" },
  { id: "spiki",       name: "스피키",        species: "유령",  slot: "trickster", note: "정체성 변장 트릭" },
  { id: "amelia_r41",  name: "R-41 아멜리아", species: "엘프",  slot: "culprit",   note: "고압 권력자·정체 떡밥" },
  { id: "shady",       name: "셰이디",        species: "유령",  slot: "witness",   note: "교주 동경·관찰자" },
  { id: "uros",        name: "우로스",        species: "수인",  slot: "boss",      note: "비극의 폭군 / 후반 보스" },
  { id: "daya",        name: "다야",          species: "용족",  slot: "judge",     note: "자존심의 1인자" },
  { id: "makasha",     name: "마카샤",        species: "마녀",  slot: "explainer", note: "이야기를 짓는 자" },
  { id: "sherum",      name: "셰럼",          species: "마녀",  slot: "explainer", note: "사관·서사 조작" },
  { id: "naia",        name: "나이아",        species: "정령",  slot: "suspect",   note: "사교성 사고뭉치" },
  { id: "diana_prime", name: "디아나(왕년)",  species: "수인",  slot: "judge",     note: "최강 전사·군기반장" },
  { id: "mute",        name: "뮤트",          species: "정령",  slot: "culprit",   note: "정보의 정령 / 막후 흑막" },
];

export const CHARACTER_BY_ID: Record<string, Character> = Object.fromEntries(
  CHARACTERS.map((c) => [c.id, c]),
);
