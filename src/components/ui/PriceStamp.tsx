const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function PriceStamp({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("stamp-in inline-flex -rotate-3 items-baseline gap-1 border-[2px] border-shu px-3 py-1.5 text-shu", className)} {...props}>
      <span className="font-mono text-[10px] tracking-[0.2em]">¥</span>
      <span className="font-display text-[22px] font-bold leading-none">{children ?? "4,800"}</span>
    </div>
  );
}

export default PriceStamp;
