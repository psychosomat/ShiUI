const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const PTS = [42, 58, 51, 74, 69, 92, 110, 104, 128, 142, 138, 156];
const W = 320;
const H = 120;
const MAX = 160;

const xy = (i: number, v: number): [number, number] => [
  8 + (i * (W - 16)) / (PTS.length - 1),
  H - 12 - (v / MAX) * (H - 28),
];

const line = PTS.map((v, i) => `${i === 0 ? "M" : "L"}${xy(i, v)[0].toFixed(1)} ${xy(i, v)[1].toFixed(1)}`).join(" ");
const area = `${line} L${xy(PTS.length - 1, 0)[0].toFixed(1)} ${(H - 12).toFixed(1)} L${xy(0, 0)[0].toFixed(1)} ${(H - 12).toFixed(1)} Z`;
const last = xy(PTS.length - 1, PTS[PTS.length - 1]);

export function ChartTrend({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("border-[1.5px] border-sumi bg-paper p-4", className)} {...props}>
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-display text-[17px] font-bold leading-tight">Pulls climb into summer</h3>
        <span className="shrink-0 bg-shu px-1.5 py-0.5 font-mono text-[10px] font-semibold text-paper">+18</span>
      </div>
      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-sumi/60">
        Impressions · per week · 12 weeks
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full" role="img" aria-label="Weekly impressions trend, rising">
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            x1="8"
            x2={W - 8}
            y1={H - 12 - f * (H - 28)}
            y2={H - 12 - f * (H - 28)}
            stroke="#2a2926"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
        ))}
        <line x1="8" x2={W - 8} y1={H - 12} y2={H - 12} stroke="#2a2926" strokeWidth="1.5" />
        <path d={area} fill="#e14d2a" fillOpacity="0.12" />
        <path d={line} fill="none" stroke="#e14d2a" strokeWidth="2" strokeLinejoin="miter" />
        {PTS.map((v, i) => {
          const [cx, cy] = xy(i, v);
          const isLast = i === PTS.length - 1;
          return (
            <circle
              key={`trend-${v}`}
              cx={cx}
              cy={cy}
              r={isLast ? 4 : 2}
              fill={isLast ? "#e14d2a" : "#2a2926"}
              stroke="#e5e3dc"
              strokeWidth="1"
            />
          );
        })}
        <circle cx={last[0]} cy={last[1]} r="7" fill="none" stroke="#e14d2a" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
      <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-sumi/50">
        <span>W01 · 42</span>
        <span>W12 · 156</span>
      </div>
      <div className="mt-2 border-t border-sumi/25 pt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-sumi/50">
        F2 Hairline · Press ledger · 2026
      </div>
    </div>
  );
}

export default ChartTrend;
