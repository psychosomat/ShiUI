import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function RatingStars({ className }: { className?: string }) {
  const [value, setValue] = useState(4);
  const [hover, setHover] = useState(0);
  const lit = hover || value;
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <button key={i} type="button" aria-label={`${i} stars`} onClick={() => setValue(i)} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(0)} className={i <= lit ? "flex h-7 w-7 cursor-pointer items-center justify-center bg-sumi text-[14px] text-paper" : "flex h-7 w-7 cursor-pointer items-center justify-center border-[1.5px] border-sumi text-[14px] text-sumi/40"}>★</button>
      ))}
      <span className="ml-2 font-mono text-[11px] tracking-[0.14em]">{value}.0 — your note</span>
    </div>
  );
}
export default RatingStars;
