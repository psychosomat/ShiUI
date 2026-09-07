const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function TimelineRail({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("relative space-y-4 border-l-[1.5px] border-sumi pl-5", className)} {...props}>
      {[
        ["Sketch", "Pencil on hanshi", true],
        ["Carve", "Cherry block, 3 days", true],
        ["Pull", "Vermilion pass today", false],
      ].map(([t, d, done]) => (
        <div key={t as string} className="relative">
          <span
            className={
              done
                ? "absolute -left-[27px] top-0.5 h-3 w-3 bg-shu"
                : "absolute -left-[27px] top-0.5 h-3 w-3 border-[1.5px] border-sumi bg-paper"
            }
          />
          <div className="font-sans text-[13px] font-bold">{t as string}</div>
          <div className="font-mono text-[11px] text-sumi/60">{d as string}</div>
        </div>
      ))}
    </div>
  );
}

export default TimelineRail;
