import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function FilterSheet({ className }: { className?: string }) {
  const [tags, setTags] = useState(["A2", "B3", "Washi", "Under ¥5k"]);
  return (
    <div className={cn("border-[1.5px] border-sumi bg-paper", className)}>
      <div className="mx-auto mt-2 h-1 w-12 bg-sumi/40" />
      <div className="p-4"><div className="font-mono text-[11px] uppercase tracking-[0.2em]">Filter — {tags.length * 3} results</div>
      <div className="mt-3 flex flex-wrap gap-2">{tags.map((t) => (<button key={t} type="button" onClick={() => setTags((prev) => prev.filter((x) => x !== t))} title="Remove" className="cursor-pointer border-[1.5px] border-sumi px-2.5 py-1 font-mono text-[11px] hover:border-shu hover:text-shu">{t} ×</button>))}{!tags.length ? <span className="font-mono text-[11px] uppercase text-sumi/50">All filters cleared</span> : null}</div>
      <button type="button" className="mt-4 w-full cursor-pointer bg-sumi py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-paper hover:bg-shu">Show results</button></div>
    </div>
  );
}
export default FilterSheet;
