const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const PULLED = 68;
const FRESH = 6;
const TOTAL = 100;
const CELLS: Array<string> = Array.from({ length: TOTAL }, (_, i) => `cell-${i}`);

export function ChartWaffle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("border-[1.5px] border-sumi bg-paper p-4", className)} {...props}>
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-display text-[17px] font-bold leading-tight">Three quarters pulled</h3>
        <span className="shrink-0 font-display text-[22px] font-bold leading-none">
          68
          <span className="font-mono text-[11px] font-normal text-sumi/60">/100</span>
        </span>
      </div>
      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-sumi/60">
        1 cell = 1% · numbered run · Spring
      </div>
      <div
        className="mt-3 grid grid-cols-10 gap-1"
        role="img"
        aria-label="68 of 100 prints pulled, 6 of them fresh this week"
      >
        {CELLS.map((id, i) => {
          const fresh = i >= PULLED - FRESH && i < PULLED;
          const filled = i < PULLED;
          return (
            <span
              key={id}
              className={cn(
                "aspect-square border-[1.5px]",
                fresh ? "border-sumi bg-shu" : filled ? "border-sumi bg-sumi" : "border-sumi/30 bg-transparent",
              )}
            />
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9px] uppercase tracking-[0.16em] text-sumi/60">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 border border-sumi bg-sumi" />
          Pulled · 62
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 border border-sumi bg-shu" />
          Fresh · 6
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 border border-sumi/30" />
          Left · 32
        </span>
      </div>
      <div className="mt-2 border-t border-sumi/25 pt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-sumi/50">
        G4 Waffle · Press ledger · 2026
      </div>
    </div>
  );
}

export default ChartWaffle;
