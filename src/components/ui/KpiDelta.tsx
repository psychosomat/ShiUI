const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function KpiDelta({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      <span className="border-[1.5px] border-sumi px-2 py-1 font-mono text-[11px] font-semibold">+12.4%</span>
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-sumi/60">
        {children ?? "vs last moon"}
      </span>
      <svg width="40" height="16" viewBox="0 0 40 16" fill="none" aria-hidden="true">
        <path d="M1 13 L10 10 L18 11 L26 5 L39 2" stroke="#e14d2a" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default KpiDelta;
