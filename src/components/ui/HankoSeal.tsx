const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function HankoSeal({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex h-16 w-16 items-center justify-center border-[2px] border-shu bg-paper p-1", className)} {...props}>
      <div className="flex h-full w-full items-center justify-center border border-shu font-display text-[13px] font-bold leading-[1.15] text-shu" style={{ writingMode: "vertical-rl" }}>{children ?? "詩印"}</div>
    </div>
  );
}

export default HankoSeal;
