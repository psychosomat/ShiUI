const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function CardInk({
  className,
  title,
  meta,
  footer,
  children,
}: {
  className?: string;
  title?: string;
  meta?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("border-[1.5px] border-sumi bg-paper", className)}>
      <div className="flex items-center justify-between gap-2 border-b-[1.5px] border-sumi px-4 py-2.5">
        <span className="font-display text-[15px] font-bold">{title ?? "Plate record"}</span>
        {meta ? <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-shu">{meta}</span> : null}
      </div>
      <div className="p-4 font-sans text-[13px] leading-relaxed">
        {children ??
          "A generic ink container: any record, notice or preview lives here. Header carries the title, footer carries the action."}
      </div>
      {footer ? <div className="border-t-[1.5px] border-sumi px-4 py-2.5">{footer}</div> : null}
    </div>
  );
}
export default CardInk;
