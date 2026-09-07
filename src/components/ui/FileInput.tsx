const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function FileInput({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "w-full border-[1.5px] border-dashed border-sumi bg-paper p-5 text-center transition-colors hover:border-shu",
        className,
      )}
      {...props}
    >
      <div className="font-display text-[16px] font-bold">Drop artwork here</div>
      <div className="mt-1 font-mono text-[11px] tracking-[0.14em] text-sumi/60">PDF · PNG · UP TO 24 MB</div>
      <div className="mx-auto mt-3 inline-block border-[1.5px] border-sumi px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em]">
        Browse files
      </div>
    </div>
  );
}

export default FileInput;
