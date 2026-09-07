const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function DividerLine({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div aria-hidden="true" className={cn("flex items-center gap-3", className)} {...props}>
      <span className="h-[1.5px] flex-1 bg-sumi" />
      <span className="h-2 w-2 rotate-45 bg-shu" />
      <span className="h-[1.5px] flex-1 bg-sumi" />
    </div>
  );
}

export default DividerLine;
