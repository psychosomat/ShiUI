import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function PageDots({ className }: { className?: string }) {
  const [at, setAt] = useState(1);
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {[0, 1, 2, 3].map((i) => (
        <button key={i} type="button" aria-label={`Slide ${i + 1}`} onClick={() => setAt(i)} className={i === at ? "h-2.5 w-6 cursor-pointer bg-shu" : "h-2.5 w-2.5 cursor-pointer border-[1.5px] border-sumi hover:bg-paper-deep"} />
      ))}
      <span className="ml-2 font-mono text-[11px] tracking-[0.16em]">0{at + 1} / 04</span>
    </div>
  );
}
export default PageDots;
