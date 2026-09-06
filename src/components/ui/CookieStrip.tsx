const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function CookieStrip({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 border-[1.5px] border-sumi bg-sumi px-4 py-3 text-paper", className)} {...props}>
      <span className="font-mono text-[11px] uppercase tracking-[0.16em]">● Cookies</span>
      <span className="font-sans text-[13px] text-paper/80">{children ?? "We use one cookie. It remembers your folio, nothing else."}</span>
      <span className="ml-auto flex gap-2"><button className="border border-paper px-3 py-1 font-mono text-[11px] uppercase">Decline</button><button className="bg-shu px-3 py-1 font-mono text-[11px] uppercase text-paper">Accept</button></span>
    </div>
  );
}

export default CookieStrip;
