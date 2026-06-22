import type { CaseId, EndingId, FlagId } from "./types";

// 세이브 스키마 버전. 막/구조가 바뀌면 올리고 migrate()에 변환 추가.
export const SAVE_VERSION = 1;
const SAVE_KEY = "tknd:save";
// 메타 진행(엔딩 해금)은 세이브와 분리 저장 → 새 게임/세이브 삭제해도 컬렉션 유지
const ALBUM_KEY = "tknd:album";

export interface SaveData {
  version: number;
  caseId: CaseId;
  phase: string;
  flags: FlagId[];
  evidences: { id: string; updated: boolean }[];
  mental: number;
  affinity: Record<string, number>;
  sealed: string[];
  hintsUsed: number;
  wrongCount: number;
  savedAt: number;
}

export interface AlbumData {
  version: number;
  unlocked: EndingId[];
}

/** 구버전 세이브 마이그레이션 자리. 버전 안 맞으면 변환하거나 null(무효화). */
function migrate(raw: unknown): SaveData | null {
  if (!raw || typeof raw !== "object") return null;
  const data = raw as Partial<SaveData>;
  if (data.version === SAVE_VERSION) return data as SaveData;
  // TODO: 버전 올라가면 단계별 변환 추가. 변환 불가하면 null.
  return null;
}

export function saveGame(data: Omit<SaveData, "version" | "savedAt">): boolean {
  try {
    const payload: SaveData = { ...data, version: SAVE_VERSION, savedAt: Date.now() };
    localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
    return true;
  } catch (e) {
    console.error("saveGame failed", e);
    return false;
  }
}

export function loadGame(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    return migrate(JSON.parse(raw));
  } catch (e) {
    console.error("loadGame failed", e);
    return null;
  }
}

export function hasSave(): boolean {
  try { return localStorage.getItem(SAVE_KEY) != null; } catch { return false; }
}

export function clearSave(): void {
  try { localStorage.removeItem(SAVE_KEY); } catch { /* noop */ }
}

export function loadAlbum(): AlbumData {
  try {
    const raw = localStorage.getItem(ALBUM_KEY);
    if (!raw) return { version: SAVE_VERSION, unlocked: [] };
    const parsed = JSON.parse(raw) as Partial<AlbumData>;
    if (Array.isArray(parsed.unlocked)) {
      return { version: SAVE_VERSION, unlocked: parsed.unlocked };
    }
    return { version: SAVE_VERSION, unlocked: [] };
  } catch {
    return { version: SAVE_VERSION, unlocked: [] };
  }
}

export function unlockEndingPersist(id: EndingId): EndingId[] {
  const album = loadAlbum();
  if (!album.unlocked.includes(id)) album.unlocked.push(id);
  try { localStorage.setItem(ALBUM_KEY, JSON.stringify(album)); } catch { /* noop */ }
  return album.unlocked;
}
