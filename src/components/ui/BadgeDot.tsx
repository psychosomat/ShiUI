const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function BadgeDot({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn("inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]", className)}
      {...props}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute h-full w-full animate-ping bg-shu opacity-60" />
        <span className="h-2.5 w-2.5 bg-shu" />
      </span>
      <span>{children ?? "Press is live"}</span>
    </div>
  );
}

export default BadgeDot;
