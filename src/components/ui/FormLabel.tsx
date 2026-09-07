const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function FormLabel({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn("flex items-baseline justify-between border-b-[1.5px] border-sumi pb-1.5", className)}
      {...props}
    >
      <span className="font-display text-[15px] font-bold">{children ?? "Shipping address"}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-shu">Step 02 / 04</span>
    </div>
  );
}

export default FormLabel;
