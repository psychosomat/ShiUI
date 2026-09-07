import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ConfirmStrip({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [done, setDone] = useState<string | null>(null);
  return (
    <div className={cn("flex flex-wrap items-center gap-3 border-[1.5px] border-sumi bg-paper p-3", className)}>
      <span className="font-sans text-[13px] font-bold">{done ?? children ?? "Discard this proof?"}</span>
      {!done ? (
        <span className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={() => setDone("Kept on the rack ✓")}
            className="cursor-pointer border-[1.5px] border-sumi px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] hover:bg-sumi hover:text-paper"
          >
            Keep
          </button>
          <button
            type="button"
            onClick={() => setDone("Proof discarded")}
            className="cursor-pointer border-[1.5px] border-shu bg-shu px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-paper"
          >
            Discard
          </button>
        </span>
      ) : null}
    </div>
  );
}
export default ConfirmStrip;
