const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function LiveDot({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("inline-flex items-center gap-2 border-[1.5px] border-sumi px-3 py-1.5", className)} {...props}>
      <span className="h-2 w-2 animate-pulse bg-shu" />
      <span className="font-mono text-[11px] uppercase tracking-[0.16em]">{children ?? "2,140 viewing"}</span>
    </div>
  );
}

export default LiveDot;
