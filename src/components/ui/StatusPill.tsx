const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function StatusPill({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn("inline-flex items-center gap-2 border-[1.5px] border-sumi bg-paper py-1 pl-2 pr-3", className)}
      {...props}
    >
      <span className="h-2 w-2 bg-shu" />
      <span className="font-mono text-[11px] uppercase tracking-[0.16em]">{children ?? "In print"}</span>
    </div>
  );
}

export default StatusPill;
