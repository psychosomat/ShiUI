import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const OPTIONS = ["Newest first", "Price — low", "Price — high", "Edition size"];

export function DropdownMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(0);
  return (
    <div className={cn("w-52", className)}>
      <button type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex w-full cursor-pointer items-center justify-between border-[1.5px] border-sumi bg-paper px-3.5 py-2.5 font-sans text-[13px] font-bold">
        <span className="truncate">{OPTIONS[value]} ✓</span><span aria-hidden="true">▾</span>
      </button>
      {open ? (
        <div className="border-[1.5px] border-t-0 border-sumi bg-paper">
          <div className="border-b border-sumi/30 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-sumi/60">Sort catalogue</div>
          {OPTIONS.map((o, i) => (
            <button key={o} type="button" onClick={() => { setValue(i); setOpen(false); }} className={i === value ? "block w-full cursor-pointer bg-sumi px-3.5 py-2 text-left font-sans text-[13px] font-bold text-paper" : "block w-full cursor-pointer px-3.5 py-2 text-left font-sans text-[13px] transition-colors hover:bg-paper-deep"}>{o}</button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default DropdownMenu;
