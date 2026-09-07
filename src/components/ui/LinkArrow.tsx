const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function LinkArrow({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("group inline-flex cursor-pointer items-center gap-2", className)} {...props}>
      <span className="font-display text-[16px] font-bold underline decoration-shu decoration-2 underline-offset-4">
        {children ?? "See the process"}
      </span>
      <span className="flex h-6 w-6 items-center justify-center border-[1.5px] border-sumi text-[12px] transition-colors duration-300 group-hover:bg-shu group-hover:text-paper">
        ↗
      </span>
    </div>
  );
}

export default LinkArrow;
