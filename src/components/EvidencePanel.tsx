import { useGame } from "@/store/gameStore";

/** 증거 파일 패널 (스텁). 현재 보유 증거 id만 나열. */
export default function EvidencePanel() {
  const evidences = useGame((s) => s.evidences);
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-3 text-xs">
      <div className="mb-2 font-semibold">증거 파일</div>
      {evidences.length === 0 ? (
        <div className="text-slate-400">아직 없음</div>
      ) : (
        <ul className="space-y-1">
          {evidences.map((e) => (
            <li key={e.id}>{e.id}{e.updated ? " (갱신)" : ""}</li>
          ))}
        </ul>
      )}
    </aside>
  );
}
