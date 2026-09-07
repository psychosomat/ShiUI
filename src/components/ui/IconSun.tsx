const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function IconSun({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex h-14 w-14 items-center justify-center border-[1.5px] border-sumi", className)} {...props}>
      <span className="h-8 w-8 rounded-full bg-shu" />
    </div>
  );
}

export default IconSun;
