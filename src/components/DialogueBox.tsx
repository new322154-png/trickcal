// 대사창 (스텁). 실제 연출/타이핑 효과는 추후.
export interface DialogueBoxProps { speaker?: string; text: string; }

export default function DialogueBox({ speaker, text }: DialogueBoxProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
      {speaker && <div className="mb-1 text-xs font-semibold text-slate-500">{speaker}</div>}
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
}
