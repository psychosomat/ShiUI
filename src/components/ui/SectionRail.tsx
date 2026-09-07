const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function SectionRail({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3 border-y-[1.5px] border-sumi py-2", className)} {...props}>
      <span className="bg-shu px-2 py-0.5 font-mono text-[11px] font-semibold text-paper">04</span>
      <span className="font-display text-[15px] font-bold">{children ?? "Buttons — primary ink"}</span>
      <span className="mx-1 h-px flex-1 bg-sumi/30" />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sumi/60">Shiui / Kit</span>
    </div>
  );
}

export default SectionRail;
