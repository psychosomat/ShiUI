const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function InfoRow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3 border-b border-sumi/30 py-2.5", className)} {...props}>
      <span className="w-24 shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-sumi/55">Material</span>
      <span className="font-sans text-[13px] font-bold">{children ?? "Kozo washi — 250 gsm, deckle edge"}</span>
      <span className="ml-auto font-mono text-[12px] text-shu">●</span>
    </div>
  );
}

export default InfoRow;
