const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ProgressRing({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="21" stroke="currentColor" strokeWidth="2" opacity="0.25"/><circle cx="26" cy="26" r="21" stroke="#e14d2a" strokeWidth="3" strokeLinecap="butt" strokeDasharray="132" strokeDashoffset="34" transform="rotate(-90 26 26)"/></svg>
      <div><div className="font-display text-[20px] font-bold leading-none">74%</div><div className="font-mono text-[10px] uppercase tracking-[0.16em] text-sumi/60">Edition pulled</div></div>
    </div>
  );
}

export default ProgressRing;
