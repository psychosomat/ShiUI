import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function DrawerPanel({ className }: { className?: string }) {
  const [open, setOpen] = useState(true);
  if (!open) {
    return (
      <div className={cn("w-full", className)}>
        <button type="button" onClick={() => setOpen(true)} className="cursor-pointer border-[1.5px] border-sumi px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] hover:bg-sumi hover:text-paper">Open folio (2) →</button>
      </div>
    );
  }
  return (
    <div className={cn("w-full max-w-xs border-[1.5px] border-sumi bg-paper", className)}>
      <div className="flex items-center justify-between border-b-[1.5px] border-sumi bg-sumi px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper"><span>Folio (2)</span><button type="button" onClick={() => setOpen(false)} aria-label="Close folio" className="cursor-pointer hover:text-shu">×</button></div>
      {[["Hinomaru 04 — A2", "¥4,800"], ["Wave study — B3", "¥3,200"]].map((r) => (
        <div key={r[0]} className="flex items-center justify-between border-b border-sumi/30 px-4 py-2.5 font-sans text-[13px]"><span className="font-bold">{r[0]}</span><span className="font-mono">{r[1]}</span></div>
      ))}
      <div className="p-4"><div className="flex justify-between font-mono text-[12px]"><span>Subtotal</span><span className="font-bold">¥8,000</span></div>
      <button type="button" className="mt-3 w-full cursor-pointer bg-shu py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-paper hover:bg-sumi">Checkout →</button></div>
    </div>
  );
}
export default DrawerPanel;
