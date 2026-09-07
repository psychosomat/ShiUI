import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const TABS = ["All works", "Woodblock", "Type"];

export function TabsUnderline({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  return (
    <div role="tablist" aria-label="Works" className={cn("flex gap-6 border-b-[1.5px] border-sumi", className)}>
      {TABS.map((l, i) => (
        <button
          key={l}
          type="button"
          role="tab"
          aria-selected={i === active}
          onClick={() => setActive(i)}
          className={
            i === active
              ? "border-b-[3px] border-shu pb-2 font-sans text-[13px] font-bold uppercase tracking-[0.12em]"
              : "link-brush cursor-pointer pb-2 font-sans text-[13px] uppercase tracking-[0.12em] text-sumi/60"
          }
        >
          {l}
        </button>
      ))}
    </div>
  );
}
export default TabsUnderline;
