const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function EmptyState({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("border-[1.5px] border-dashed border-sumi bg-paper p-6 text-center", className)} {...props}>
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-sumi font-display text-[20px]">
        空
      </div>
      <div className="font-display text-[17px] font-bold">Your folio is empty</div>
      <p className="mx-auto mt-1 max-w-[26ch] font-sans text-[13px] text-sumi/70">
        {children ?? "Save proofs as you browse. They will wait here like paper on a rack."}
      </p>
      <div className="mx-auto mt-4 inline-block border-[1.5px] border-sumi px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em]">
        Browse posters
      </div>
    </div>
  );
}

export default EmptyState;
