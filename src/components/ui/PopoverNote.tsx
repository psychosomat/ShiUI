import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function PopoverNote({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className={cn("relative inline-block", className)}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer border-[1.5px] border-sumi px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] hover:bg-sumi hover:text-paper"
      >
        Paper note ⓘ
      </button>
      {open ? (
        <div className="absolute left-0 top-full z-20 mt-2 w-60 border-[1.5px] border-sumi bg-paper p-3.5">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-shu">Paper note</div>
          <div className="mt-1 font-sans text-[13px] leading-snug">
            {children ?? "Kozo fibres stay visible under raking light — that is the point."}
          </div>
        </div>
      ) : null}
    </div>
  );
}
export default PopoverNote;
