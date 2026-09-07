const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function FieldHint({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex items-start gap-2 font-mono text-[11px] leading-relaxed tracking-wide text-sumi/70",
        className,
      )}
      {...props}
    >
      <span className="mt-px inline-block h-3 w-3 shrink-0 border border-sumi text-center text-[9px] leading-[10px]">
        i
      </span>
      <span>{children ?? "We ship flat, never folded. Every poster travels in a kraft tube."}</span>
    </div>
  );
}

export default FieldHint;
