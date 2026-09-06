import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function RangeSlider({ className }: { className?: string }) {
  const [v, setV] = useState(72);
  return (
    <div className={cn("w-full", className)}>
      <div className="mb-1.5 flex justify-between font-mono text-[11px] uppercase tracking-[0.18em]"><span>Ink density</span><span className="text-shu">{v}%</span></div>
      <input type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} className="ink-range w-full" aria-label="Ink density" />
      <div className="mt-1 flex justify-between font-mono text-[10px] text-sumi/50"><span>薄 thin</span><span>濃 thick</span></div>
    </div>
  );
}
export default RangeSlider;
