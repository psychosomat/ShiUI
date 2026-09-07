const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function SpinnerEnso({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="enso-spin" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="#2a2926"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeDasharray="56"
          strokeDashoffset="14"
        />
      </svg>
      <span className="font-mono text-[11px] uppercase tracking-[0.2em]">{children ?? "Grinding ink"}</span>
    </div>
  );
}

export default SpinnerEnso;
