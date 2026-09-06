const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function TagOutline({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("inline-flex items-center border-[1.5px] border-sumi bg-paper px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-sumi", className)} {...props}>
      <span>{children ?? "First pressing"}</span>
    </div>
  );
}

export default TagOutline;
