const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function SkeletonLines({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div aria-hidden="true" className={cn("w-full animate-pulse space-y-2", className)} {...props}>
      <div className="h-4 w-2/3 bg-sumi/15" /><div className="h-4 w-full bg-sumi/10" /><div className="h-4 w-5/6 bg-sumi/10" />
      <div className="flex gap-2 pt-1"><div className="h-7 w-20 border-[1.5px] border-sumi/20" /><div className="h-7 w-20 bg-shu/20" /></div>
    </div>
  );
}

export default SkeletonLines;
