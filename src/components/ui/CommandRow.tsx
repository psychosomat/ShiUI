import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const ROWS: Array<[string, string]> = [["Go to Hinomaru 04", "Poster"], ["Open folio", "Page"], ["Checkout", "Action"], ["Find stockist", "Page"]];

export function CommandRow({ className }: { className?: string }) {
  const [q, setQ] = useState("");
  const hits = ROWS.filter(([t]) => t.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className={cn("border-[1.5px] border-sumi bg-paper", className)}>
      <div className="flex items-center gap-2 border-b-[1.5px] border-sumi px-3.5 py-2.5"><span className="text-sumi/50">⌕</span><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type a command…" className="w-full bg-transparent font-sans text-[13px] placeholder:text-sumi/50 focus:outline-none" /><span className="ml-auto font-mono text-[10px] text-sumi/50">ESC</span></div>
      {hits.length ? hits.map((r) => (
        <div key={r[0]} className="flex cursor-pointer items-center justify-between px-3.5 py-2 font-sans text-[13px] first:bg-paper-deep hover:bg-paper-deep"><span className="font-bold">{r[0]}</span><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sumi/50">{r[1]}</span></div>
      )) : <div className="px-3.5 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-sumi/50">No match — try “folio”</div>}
    </div>
  );
}
export default CommandRow;
