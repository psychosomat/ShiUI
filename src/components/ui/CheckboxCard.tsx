import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function CheckboxCard({ className }: { className?: string }) {
  const [on, setOn] = useState(true);
  return (
    <button type="button" role="checkbox" aria-checked={on} onClick={() => setOn((v) => !v)} className={cn("flex w-full cursor-pointer items-center gap-3 border-[1.5px] p-3.5 text-left transition-colors duration-200", on ? "border-sumi bg-sumi text-paper" : "border-sumi bg-paper text-sumi hover:bg-paper-deep", className)}>
      <span className={on ? "flex h-5 w-5 shrink-0 items-center justify-center bg-shu text-[13px] text-paper" : "flex h-5 w-5 shrink-0 items-center justify-center border-[1.5px] border-sumi"}>{on ? "✓" : ""}</span>
      <span><span className="block font-sans text-[13px] font-bold">Collector tier — ¥9,600</span><span className={on ? "block font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60" : "block font-mono text-[10px] uppercase tracking-[0.14em] opacity-60"}>Three prints · signed · washi wrap</span></span>
    </button>
  );
}
export default CheckboxCard;
