const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function AvatarCircle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <span className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-sumi bg-paper-deep font-display text-[16px] font-bold">
        素
      </span>
      <span>
        <span className="block font-sans text-[13px] font-bold">Soko Suzuki</span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-sumi/60">Printer — 12 yrs</span>
      </span>
    </div>
  );
}

export default AvatarCircle;
