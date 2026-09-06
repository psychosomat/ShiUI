import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function QuantityStepper({ className }: { className?: string }) {
  const [qty, setQty] = useState(2);
  return (
    <div className={cn("inline-flex items-stretch border-[1.5px] border-sumi", className)}>
      <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="cursor-pointer px-3.5 py-2 font-mono text-[15px] hover:bg-sumi hover:text-paper" aria-label="Decrease">−</button>
      <span className="flex w-12 items-center justify-center border-x-[1.5px] border-sumi font-display text-[16px] font-bold" aria-live="polite">{qty}</span>
      <button type="button" onClick={() => setQty((q) => Math.min(99, q + 1))} className="cursor-pointer bg-shu px-3.5 py-2 font-mono text-[15px] text-paper hover:bg-sumi" aria-label="Increase">＋</button>
    </div>
  );
}
export default QuantityStepper;
