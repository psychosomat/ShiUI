import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function DialogConfirm({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [answered, setAnswered] = useState<string | null>(null);
  return (
    <div className={cn("flex w-full max-w-xs items-center gap-3 border-[1.5px] border-shu bg-paper p-3.5", className)}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-shu font-bold text-paper">?</span>
      {answered ? (
        <span className="font-sans text-[13px] font-bold">{answered === "yes" ? "Discarded. The rack is clear." : "Kept. Still on the rack."}</span>
      ) : (
        <span className="font-sans text-[13px] font-bold">{children ?? "Leave without saving?"}
          <span className="mt-2 flex gap-2"><button type="button" onClick={() => setAnswered("no")} className="cursor-pointer border border-sumi px-2.5 py-1 font-mono text-[10px] uppercase hover:bg-sumi hover:text-paper">Keep</button><button type="button" onClick={() => setAnswered("yes")} className="cursor-pointer bg-shu px-2.5 py-1 font-mono text-[10px] uppercase text-paper">Discard</button></span>
        </span>
      )}
    </div>
  );
}
export default DialogConfirm;
