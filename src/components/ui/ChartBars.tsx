const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const ROWS = [
  { label: "Hinomaru 04", value: 312 },
  { label: "Wave study", value: 208 },
  { label: "Crane", value: 164 },
  { label: "Pine", value: 96 },
  { label: "Plum", value: 54 },
];

const MAX = 312;

export function ChartBars({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("border-[1.5px] border-sumi bg-paper p-4", className)} {...props}>
      <h3 className="font-display text-[17px] font-bold leading-tight">Press run leads the season</h3>
      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-sumi/60">
        Impressions · per plate · Spring run
      </div>
      <div className="mt-3 space-y-2">
        {ROWS.map((r, i) => (
          <div key={r.label} className="flex items-center gap-2">
            <span className="w-24 shrink-0 truncate font-mono text-[10px] uppercase tracking-[0.12em]">{r.label}</span>
            <span className="h-3.5 flex-1 border border-sumi/25 bg-paper-deep">
              <span
                className={cn("block h-full", i === 0 ? "bg-shu" : "bg-sumi")}
                style={{ width: `${Math.round((r.value / MAX) * 100)}%` }}
              />
            </span>
            <span className="w-8 shrink-0 text-right font-mono text-[11px] font-semibold">{r.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 border-t border-sumi/25 pt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-sumi/50">
        F1 Rung bars · Press ledger · 2026
      </div>
    </div>
  );
}

export default ChartBars;
