import type { Reconstruction } from "./types";

/** 사건 재구성 카드 순서 정답 판정 */
export function checkOrder(recon: Reconstruction, order: string[]): boolean {
  if (order.length !== recon.correctOrder.length) return false;
  return order.every((id, i) => id === recon.correctOrder[i]);
}
