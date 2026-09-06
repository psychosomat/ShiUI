const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function BadgeCount({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("inline-flex items-center gap-2 border-[1.5px] border-sumi bg-paper px-3 py-1", className)} {...props}>
      <span className="flex h-5 w-5 items-center justify-center bg-shu font-mono text-[11px] font-semibold text-paper">{children ?? "3"}</span>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em]">New proofs</span>
    </div>
  );
}

export default BadgeCount;
