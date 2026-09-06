const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function TooltipBubble({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("relative inline-block border-[1.5px] border-sumi bg-sumi px-3 py-1.5 font-mono text-[11px] tracking-wide text-paper", className)} {...props}>
      <span>{children ?? "B7 washi — 250 gsm"}</span>
      <span className="absolute -bottom-[7px] left-4 h-3 w-3 rotate-45 border-b-[1.5px] border-r-[1.5px] border-sumi bg-sumi" />
    </div>
  );
}

export default TooltipBubble;
