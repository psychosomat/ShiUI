const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function TagChip({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("inline-flex items-center gap-2 border-[1.5px] border-sumi bg-sumi px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper", className)} {...props}>
      <span>{children ?? "Woodblock"}</span>
    </div>
  );
}

export default TagChip;
