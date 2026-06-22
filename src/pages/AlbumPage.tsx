import { useGame } from "@/store/gameStore";
import { ENDINGS } from "@/data/endings";

export default function AlbumPage() {
  const unlocked = useGame((s) => s.unlockedEndings);
  const setPhase = useGame((s) => s.setPhase);

  return (
    <main className="mx-auto max-w-3xl p-6">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">사건 기록 · 엔딩 앨범</h2>
        <button className="btn" onClick={() => setPhase("title")}>뒤로</button>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {ENDINGS.map((e) => {
          const got = unlocked.includes(e.id);
          return (
            <div
              key={e.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="text-sm font-semibold">{got ? e.title : "???"}</div>
              <div className="mt-1 text-xs text-slate-500">
                {got ? (e.blurb ?? "해금됨") : (e.lockedHint ?? "미해금")}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        ??? 칸은 추후 업데이트로 해금됩니다.
      </p>
    </main>
  );
}
