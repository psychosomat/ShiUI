const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function MarqueeStrip({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("overflow-hidden border-y-[1.5px] border-sumi bg-sumi py-2 text-paper", className)} {...props}>
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.22em]">
        {[0, 1].map((k) => (<span key={k} className="flex gap-8"><span>Hinomaru edition — 300 numbered</span><span className="text-shu">●</span><span>Washi · Sumi · Shu</span><span className="text-shu">●</span><span>Kyoto press since 1987</span><span className="text-shu">●</span></span>))}
      </div>
    </div>
  );
}

export default MarqueeStrip;
