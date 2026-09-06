const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ButtonLoading({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button type="button" disabled aria-busy="true" className={cn("inline-flex h-11 cursor-wait select-none items-center justify-center gap-2.5 border-[1.5px] border-sumi bg-paper-deep px-5 font-mono text-[12px] uppercase tracking-[0.18em] text-sumi", className)}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="enso-spin" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="56" strokeDashoffset="14" /></svg>
      <span>{children ?? "Brushing ink…"}</span>
    </button>
  );
}
export default ButtonLoading;
