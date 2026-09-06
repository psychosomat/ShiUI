const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function BreadcrumbTrail({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em]", className)} {...props}>
      <a href="#" className="link-brush text-sumi/60">Index</a><span className="text-shu">/</span>
      <a href="#" className="link-brush text-sumi/60">Posters</a><span className="text-shu">/</span>
      <span className="border-b-[1.5px] border-sumi font-semibold">Hinomaru № 4</span>
    </nav>
  );
}

export default BreadcrumbTrail;
