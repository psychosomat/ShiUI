const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function InlineBanner({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 border-y-[1.5px] border-sumi bg-paper-deep px-4 py-2.5",
        className,
      )}
      {...props}
    >
      <span className="bg-sumi px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper">Notice</span>
      <span className="font-sans text-[13px]">
        {children ?? "The press pauses Aug 13–16 for Obon. Orders ship after."}
      </span>
      {/* biome-ignore lint/a11y/useValidAnchor: showcase placeholder link */}
      <a href="#" className="link-brush ml-auto font-mono text-[11px] uppercase tracking-[0.14em]">
        Details
      </a>
    </div>
  );
}

export default InlineBanner;
