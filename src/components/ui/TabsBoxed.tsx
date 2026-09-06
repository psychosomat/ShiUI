import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function TabsBoxed({ className }: { className?: string }) {
  const [active, setActive] = useState(1);
  return (
    <div className={cn("grid grid-cols-3 border-[1.5px] border-sumi", className)}>
      {["Day", "Week", "Season"].map((l, i) => (
        <button key={l} type="button" onClick={() => setActive(i)} className={i === active ? "cursor-pointer bg-sumi py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-paper" : "cursor-pointer bg-paper py-2 font-mono text-[12px] uppercase tracking-[0.16em] text-sumi transition-colors hover:bg-paper-deep"}>{l}</button>
      ))}
    </div>
  );
}
export default TabsBoxed;
