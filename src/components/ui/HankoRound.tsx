const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function HankoRound({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full border-[2px] border-shu text-shu",
        className,
      )}
      {...props}
    >
      <div className="font-display text-[12px] font-bold leading-tight text-center">{children ?? "丸印"}</div>
    </div>
  );
}

export default HankoRound;
