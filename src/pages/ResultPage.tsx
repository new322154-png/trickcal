import Stub from "@/components/Stub";
import { useGame } from "@/store/gameStore";

export default function ResultPage() {
  const phase = useGame((s) => s.phase);
  const label =
    phase === "comingSoon" ? "업데이트 예정"
    : phase === "reconstruction" ? "사건 재구성"
    : "결과 · 클리어 랭크";
  return <Stub title={label} />;
}
