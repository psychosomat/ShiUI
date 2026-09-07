const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function TicketStub({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-stretch border-[1.5px] border-sumi bg-paper", className)} {...props}>
      <div className="flex-1 p-3.5">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-shu">Evening viewing</div>
        <div className="font-display text-[17px] font-bold">Kiln & Paper — Talk 04</div>
        <div className="mt-1 font-mono text-[11px] text-sumi/60">APR 18 · 18:00 · NAKAGYO</div>
      </div>
      <div className="flex w-16 flex-col items-center justify-center gap-1 border-l-[1.5px] border-dashed border-sumi bg-paper-deep">
        <span className="vertical-rl font-mono text-[10px] tracking-[0.3em]">№ 0482</span>
      </div>
    </div>
  );
}

export default TicketStub;
