import { useGame } from "@/store/gameStore";
import { CASE_ORDER } from "@/data/cases";

export default function TitlePage() {
  const newGame = useGame((s) => s.newGame);
  const continueGame = useGame((s) => s.continueGame);
  const hasSave = useGame((s) => s.hasSave);
  const setPhase = useGame((s) => s.setPhase);

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 p-8 text-center">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">트릭컬: 아무도 안 했습니다</h1>
        <p className="mt-2 text-sm text-slate-500">싱글 추리 어드벤처 · 제1막</p>
      </div>
      <nav className="flex w-full max-w-xs flex-col gap-3">
        <button className="btn" onClick={() => newGame(CASE_ORDER[0])}>새 게임</button>
        <button className="btn" disabled={!hasSave()} onClick={() => continueGame()}>이어하기</button>
        <button className="btn" onClick={() => setPhase("album")}>사건 기록</button>
        <button className="btn" onClick={() => setPhase("comingSoon")}>설정</button>
      </nav>
      <p className="text-xs text-slate-400">트릭컬 2차 창작 · 비공식 팬게임 · 비영리</p>
    </main>
  );
}
