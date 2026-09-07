const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ProgressBar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="mb-1.5 flex justify-between font-mono text-[11px] uppercase tracking-[0.16em]">
        <span>Drying</span>
        <span>3 / 5</span>
      </div>
      <div className="flex gap-1">
        {["seg-0", "seg-1", "seg-2", "seg-3", "seg-4"].map((id, i) => (
          <span key={id} className={i < 3 ? "h-2.5 flex-1 bg-shu" : "h-2.5 flex-1 border-[1.5px] border-sumi"} />
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;
