import { create } from "zustand";
import type { CaseId, EndingId, FlagId, GamePhase } from "@/engine/types";
import {
  saveGame, loadGame, hasSave as hasSaveStorage,
  loadAlbum, unlockEndingPersist,
} from "@/engine/save";

interface EvidenceState { id: string; updated: boolean; }

interface GameState {
  phase: GamePhase;
  caseId: CaseId | null;
  flags: Set<FlagId>;
  evidences: EvidenceState[];
  mental: number;
  maxMental: number;
  affinity: Record<string, number>;
  sealed: string[];
  hintsUsed: number;
  wrongCount: number;
  unlockedEndings: EndingId[];

  // lifecycle
  init: () => void;
  setPhase: (p: GamePhase) => void;
  newGame: (caseId: CaseId) => void;
  continueGame: () => boolean;
  save: () => boolean;
  hasSave: () => boolean;

  // gameplay
  addFlag: (f: FlagId) => void;
  hasFlag: (f: FlagId) => boolean;
  acquireEvidence: (id: string) => void;
  updateEvidence: (id: string) => void;
  hasEvidence: (id: string) => boolean;
  loseMental: (n?: number) => void;
  useHint: () => void;
  addWrong: () => void;
  sealCharacter: (id: string) => void;
  unlockEnding: (id: EndingId) => void;
}

const START_MENTAL = 5;

export const useGame = create<GameState>((set, get) => ({
  phase: "title",
  caseId: null,
  flags: new Set(),
  evidences: [],
  mental: START_MENTAL,
  maxMental: START_MENTAL,
  affinity: {},
  sealed: [],
  hintsUsed: 0,
  wrongCount: 0,
  unlockedEndings: [],

  init: () => set({ unlockedEndings: loadAlbum().unlocked }),

  setPhase: (p) => set({ phase: p }),

  newGame: (caseId) =>
    set({
      caseId,
      phase: "daily",
      flags: new Set(),
      evidences: [],
      mental: START_MENTAL,
      affinity: {},
      sealed: [],
      hintsUsed: 0,
      wrongCount: 0,
    }),

  continueGame: () => {
    const s = loadGame();
    if (!s) return false;
    set({
      caseId: s.caseId,
      phase: s.phase as GamePhase,
      flags: new Set(s.flags),
      evidences: s.evidences,
      mental: s.mental,
      affinity: s.affinity,
      sealed: s.sealed,
      hintsUsed: s.hintsUsed,
      wrongCount: s.wrongCount,
    });
    return true;
  },

  save: () => {
    const g = get();
    if (!g.caseId) return false;
    return saveGame({
      caseId: g.caseId,
      phase: g.phase,
      flags: [...g.flags],
      evidences: g.evidences,
      mental: g.mental,
      affinity: g.affinity,
      sealed: g.sealed,
      hintsUsed: g.hintsUsed,
      wrongCount: g.wrongCount,
    });
  },

  hasSave: () => hasSaveStorage(),

  addFlag: (f) => set((s) => ({ flags: new Set(s.flags).add(f) })),
  hasFlag: (f) => get().flags.has(f),

  acquireEvidence: (id) =>
    set((s) =>
      s.evidences.some((e) => e.id === id)
        ? s
        : { evidences: [...s.evidences, { id, updated: false }] },
    ),

  updateEvidence: (id) =>
    set((s) => ({
      evidences: s.evidences.map((e) => (e.id === id ? { ...e, updated: true } : e)),
    })),

  hasEvidence: (id) => get().evidences.some((e) => e.id === id),

  loseMental: (n = 1) => set((s) => ({ mental: Math.max(0, s.mental - n) })),
  useHint: () => set((s) => ({ hintsUsed: s.hintsUsed + 1 })),
  addWrong: () => set((s) => ({ wrongCount: s.wrongCount + 1 })),
  sealCharacter: (id) =>
    set((s) => (s.sealed.includes(id) ? s : { sealed: [...s.sealed, id] })),

  unlockEnding: (id) => set({ unlockedEndings: unlockEndingPersist(id) }),
}));
