import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function MenuList({ className }: { className?: string }) {
  const [at, setAt] = useState(0);
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {["Overview", "Process", "Stockists", "Contact"].map((l, i) => (
        <button
          key={l}
          type="button"
          onClick={() => setAt(i)}
          className={
            i === at
              ? "cursor-pointer border-[1.5px] border-sumi bg-shu px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-paper"
              : "ink-wipe cursor-pointer border-[1.5px] border-sumi px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em]"
          }
        >
          {l}
        </button>
      ))}
    </div>
  );
}
export default MenuList;
