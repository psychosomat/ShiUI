const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function PricingCell({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("border-[1.5px] border-sumi bg-paper p-5 text-center", className)} {...props}>
      <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-sumi/60">Collector</div>
      <div className="mt-1 font-display text-[36px] font-bold leading-none">¥9,600</div>
      <div className="font-mono text-[11px] text-sumi/60">three prints · signed</div>
      <div className="my-4 h-px bg-sumi/25" />
      <ul className="space-y-1.5 font-sans text-[13px]"><li>✓ Numbered edition</li><li>✓ Washi wrapping</li><li className="opacity-40">× Framing</li></ul>
      <button className="mt-4 w-full border-[1.5px] border-sumi bg-sumi py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper hover:bg-shu">Choose</button>
    </div>
  );
}

export default PricingCell;
