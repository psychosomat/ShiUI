import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function CheckboxInk({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [on, setOn] = useState(true);
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <button type="button" role="checkbox" aria-checked={on} onClick={() => setOn((v) => !v)} className={on ? "mt-0.5 flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center border-[1.5px] border-sumi bg-sumi text-paper transition-colors hover:border-shu" : "mt-0.5 flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center border-[1.5px] border-sumi bg-paper transition-colors hover:border-shu"}>{on ? "✓" : ""}</button>
      <div><div className="font-sans text-[14px] font-bold">{children ?? "Wrap in washi"}</div><div className="font-mono text-[11px] tracking-wide text-sumi/60">Free, always</div></div>
    </div>
  );
}
export default CheckboxInk;
