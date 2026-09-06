const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function StatCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("border-[1.5px] border-sumi bg-paper p-4", className)} {...props}>
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-sumi/60">Impressions today</div>
      <div className="mt-1 flex items-baseline gap-2"><span className="font-display text-[34px] font-bold leading-none">312</span><span className="bg-shu px-1.5 py-0.5 font-mono text-[11px] font-semibold text-paper">+18</span></div>
      <div className="mt-2 h-[3px] w-full bg-sumi/15"><div className="h-full w-2/3 bg-sumi" /></div>
    </div>
  );
}

export default StatCard;
