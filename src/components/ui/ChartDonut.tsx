const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const SEGS = [
  { label: "Kozo", share: 52, color: "#2a2926" },
  { label: "Kraft", share: 31, color: "#e14d2a" },
  { label: "Mitsumata", share: 17, color: "#d9d6cc" },
];

const R = 54;
const C = 2 * Math.PI * R;
let acc = 0;
const arcs = SEGS.map((s) => {
  const start = acc;
  acc += s.share;
  return {
    ...s,
    dash: `${(s.share / 100) * C} ${C}`,
    offset: -((start / 100) * C),
  };
});

export function ChartDonut({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("border-[1.5px] border-sumi bg-paper p-4", className)} {...props}>
      <h3 className="font-display text-[17px] font-bold leading-tight">Kozo takes half the run</h3>
      <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-sumi/60">
        Stock share · % of 300 · Spring
      </div>
      <div className="mt-3 flex items-center gap-4">
        <svg
          width="132"
          height="132"
          viewBox="0 0 132 132"
          role="img"
          aria-label="Stock shares: Kozo 52, Kraft 31, Mitsumata 17 percent"
        >
          <circle cx="66" cy="66" r={R} fill="none" stroke="#2a2926" strokeOpacity="0.12" strokeWidth="16" />
          {arcs.map((a) => {
            const isFill = a.label === "Mitsumata";
            return (
              <circle
                key={a.label}
                cx="66"
                cy="66"
                r={R}
                fill="none"
                stroke={isFill ? "#d9d6cc" : a.color}
                strokeWidth={isFill ? 12 : 16}
                strokeDasharray={a.dash}
                strokeDashoffset={a.offset}
                transform="rotate(-90 66 66)"
                strokeLinecap="butt"
              />
            );
          })}
          <text
            x="66"
            y="62"
            textAnchor="middle"
            fontFamily="Shippori Mincho B1, serif"
            fontWeight="700"
            fontSize="22"
            fill="#2a2926"
          >
            300
          </text>
          <text
            x="66"
            y="78"
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace"
            fontSize="8.5"
            letterSpacing="1.5"
            fill="#2a2926"
            opacity="0.6"
          >
            NUMBERED RUN
          </text>
        </svg>
        <ul className="flex-1 space-y-2">
          {SEGS.map((s) => (
            <li key={s.label} className="flex items-center gap-2 border-b border-sumi/15 pb-2 last:border-0 last:pb-0">
              <span className="h-3 w-3 shrink-0 border-[1.5px] border-sumi" style={{ background: s.color }} />
              <span className="font-sans text-[13px] font-bold">{s.label}</span>
              <span className="ml-auto font-mono text-[12px] font-semibold">{s.share}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 border-t border-sumi/25 pt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-sumi/50">
        F4 Tick donut · Stock ledger · 2026
      </div>
    </div>
  );
}

export default ChartDonut;
