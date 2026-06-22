import { useGame } from "@/store/gameStore";

/** 미구현 화면 공통 플레이스홀더. 엔진은 연결돼 있고 콘텐츠/UI만 추후 구현. */
export default function Stub({ title, note }: { title: string; note?: string }) {
  const setPhase = useGame((s) => s.setPhase);
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-4 p-8 text-center">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-slate-500">{note ?? "준비 중 (TODO) — 엔진 연결됨, 콘텐츠/화면 구현 예정"}</p>
      <button className="btn" onClick={() => setPhase("title")}>타이틀로</button>
    </main>
  );
}
