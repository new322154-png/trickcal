import { useEffect } from "react";
import { useGame } from "@/store/gameStore";
import TitlePage from "@/pages/TitlePage";
import AlbumPage from "@/pages/AlbumPage";
import DailyPage from "@/pages/DailyPage";
import InvestigationPage from "@/pages/InvestigationPage";
import InterrogationPage from "@/pages/InterrogationPage";
import TrialPage from "@/pages/TrialPage";
import ResultPage from "@/pages/ResultPage";

/** phase 기반 화면 전환. 게임 흐름은 store의 phase 상태머신으로 관리(라우터 미사용). */
export default function App() {
  const phase = useGame((s) => s.phase);
  const init = useGame((s) => s.init);

  useEffect(() => { init(); }, [init]);

  return (
    <div className="min-h-full bg-slate-50 text-slate-800">
      {phase === "title" && <TitlePage />}
      {phase === "album" && <AlbumPage />}
      {phase === "daily" && <DailyPage />}
      {phase === "investigation" && <InvestigationPage />}
      {phase === "interrogation" && <InterrogationPage />}
      {phase === "trial" && <TrialPage />}
      {(phase === "reconstruction" || phase === "result" || phase === "comingSoon") && <ResultPage />}
    </div>
  );
}
