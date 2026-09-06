import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const ITEMS = ["Index 作品", "Posters", "Type specimens", "About the press"];

export function SidebarItem({ className }: { className?: string }) {
  const [at, setAt] = useState(0);
  return (
    <div className={cn("w-full border-[1.5px] border-sumi bg-paper", className)}>
      {ITEMS.map((l, i) => (
        <button key={l} type="button" onClick={() => setAt(i)} className={i === at ? "flex w-full cursor-pointer items-center justify-between border-b border-sumi bg-sumi px-3.5 py-2.5 font-sans text-[13px] font-bold text-paper last:border-0" : "flex w-full cursor-pointer items-center justify-between border-b border-sumi px-3.5 py-2.5 font-sans text-[13px] transition-colors last:border-0 hover:bg-paper-deep"}><span>{l}</span><span className="font-mono text-[11px] opacity-60">→</span></button>
      ))}
    </div>
  );
}
export default SidebarItem;
