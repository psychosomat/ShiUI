import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const PAGES = ["1", "2", "3", "12"];

export function PaginationInk({ className }: { className?: string }) {
  const [page, setPage] = useState(0);
  const btn = "border-[1.5px] border-sumi px-3 py-1.5 font-mono text-[12px] cursor-pointer transition-colors hover:bg-sumi hover:text-paper";
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <button type="button" aria-label="Previous" onClick={() => setPage((p) => Math.max(0, p - 1))} className="border-[1.5px] border-sumi px-2.5 py-1.5 font-mono text-[12px] hover:bg-sumi hover:text-paper">←</button>
      {PAGES.slice(0, 3).map((p, i) => (
        <button key={p} type="button" aria-current={i === page ? "page" : undefined} onClick={() => setPage(i)} className={i === page ? "border-[1.5px] border-sumi bg-shu px-3 py-1.5 font-mono text-[12px] font-semibold text-paper" : btn}>{p}</button>
      ))}
      <span className="px-1 font-mono text-[12px]">…</span>
      <button type="button" onClick={() => setPage(3)} className={page === 3 ? "border-[1.5px] border-sumi bg-shu px-3 py-1.5 font-mono text-[12px] font-semibold text-paper" : btn}>12</button>
      <button type="button" aria-label="Next" onClick={() => setPage((p) => Math.min(3, p + 1))} className="border-[1.5px] border-sumi px-2.5 py-1.5 font-mono text-[12px] hover:bg-sumi hover:text-paper">→</button>
    </div>
  );
}
export default PaginationInk;
