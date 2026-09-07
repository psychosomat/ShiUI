const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function FieldError({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-start gap-2 border-[1.5px] border-shu bg-paper px-3 py-2", className)} {...props}>
      <span className="flex h-4 w-4 shrink-0 items-center justify-center bg-shu text-[11px] font-bold text-paper">
        !
      </span>
      <span className="font-sans text-[13px] font-bold text-shu">
        {children ?? "Postal code looks short — Japan uses 7 digits."}
      </span>
    </div>
  );
}

export default FieldError;
