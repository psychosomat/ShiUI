const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function HoverCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex w-64 gap-3 border-[1.5px] border-sumi bg-paper p-3.5", className)} {...props}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-shu font-display text-[16px] font-bold text-paper">京</span>
      <span><span className="block font-sans text-[13px] font-bold">Kyo Atelier</span><span className="block font-sans text-[12px] text-sumi/70">Woodblock studio since 1987. 300 editions, zero reprints.</span><span className="link-brush mt-1 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-shu">Follow →</span></span>
    </div>
  );
}

export default HoverCard;
