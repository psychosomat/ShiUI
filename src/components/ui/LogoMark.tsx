const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function LogoMark({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <span className="h-9 w-9 rounded-full bg-shu" />
      <span>
        <span className="block font-display text-[19px] font-bold leading-none tracking-wide">SHIUI 詩</span>
        <span className="block font-mono text-[9px] uppercase tracking-[0.3em] text-sumi/60">Ink UI Kit</span>
      </span>
    </div>
  );
}

export default LogoMark;
