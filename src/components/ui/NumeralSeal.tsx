const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function NumeralSeal({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-sumi font-display text-[18px] font-bold">
        {children ?? "三"}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-sumi-soft">Plate three</span>
    </div>
  );
}

export default NumeralSeal;
