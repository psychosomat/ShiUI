const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function FeatureCell({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "border-[1.5px] border-sumi bg-paper p-4 transition-colors hover:bg-sumi hover:text-paper group",
        className,
      )}
      {...props}
    >
      <div className="font-mono text-[11px] tracking-[0.2em] text-shu">壱 — 01</div>
      <div className="mt-2 font-display text-[17px] font-bold">{children ?? "Flat ink, zero shadow"}</div>
      <p className="mt-1 font-sans text-[13px] opacity-70">
        Two-dimensional poster logic. Borders do the talking, light stays out of it.
      </p>
    </div>
  );
}

export default FeatureCell;
