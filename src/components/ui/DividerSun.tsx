const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function DividerSun({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div aria-hidden="true" className={cn("flex items-center gap-4", className)} {...props}>
      <span className="h-[1.5px] flex-1 bg-sumi/50" />
      <span className="h-8 w-8 rounded-full bg-shu" />
      <span className="h-[1.5px] flex-1 bg-sumi/50" />
    </div>
  );
}

export default DividerSun;
