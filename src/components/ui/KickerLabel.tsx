const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function KickerLabel({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <span className="h-[1.5px] w-8 bg-shu" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-sumi">
        {children ?? "Catalogue — Spring"}
      </span>
    </div>
  );
}

export default KickerLabel;
