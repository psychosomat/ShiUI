import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ModalDialog({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("w-full", className)}>
      {!open ? (
        <button type="button" onClick={() => setOpen(true)} className="cursor-pointer border-[1.5px] border-sumi bg-sumi px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-paper hover:bg-shu">Open dialog →</button>
      ) : (
        <div role="dialog" aria-modal="true" className="w-full max-w-sm border-[1.5px] border-sumi bg-paper">
          <div className="flex items-center justify-between border-b-[1.5px] border-sumi px-4 py-2.5"><span className="font-mono text-[11px] uppercase tracking-[0.2em]">Confirm order</span><button type="button" onClick={() => setOpen(false)} className="cursor-pointer text-[16px] leading-none hover:text-shu" aria-label="Close">×</button></div>
          <div className="p-4"><div className="font-display text-[19px] font-bold">Two prints, wrapped in washi?</div><p className="mt-1 font-sans text-[13px] text-sumi/70">Ships flat in 48 hours. No reprints once the edition closes.</p>
          <div className="mt-4 grid grid-cols-2 gap-2"><button type="button" onClick={() => setOpen(false)} className="cursor-pointer border-[1.5px] border-sumi py-2 font-mono text-[11px] uppercase tracking-[0.14em] hover:bg-sumi hover:text-paper">Cancel</button><button type="button" onClick={() => setOpen(false)} className="cursor-pointer border-[1.5px] border-sumi bg-shu py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper">Confirm ✓</button></div></div>
        </div>
      )}
    </div>
  );
}
export default ModalDialog;
