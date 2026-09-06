const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ListRow({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3 border-[1.5px] border-sumi bg-paper px-3.5 py-3 transition-colors hover:bg-paper-deep", className)} {...props}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-sumi font-display text-[15px] font-bold text-paper">日</span>
      <span className="min-w-0"><span className="block truncate font-sans text-[13px] font-bold">Hinomaru morning edition</span><span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-sumi/60">A2 · 300 run · Kyoto</span></span>
      <span className="ml-auto font-mono text-[12px]">→</span>
    </div>
  );
}

export default ListRow;
