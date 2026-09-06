const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ProgressBar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="mb-1.5 flex justify-between font-mono text-[11px] uppercase tracking-[0.16em]"><span>Drying</span><span>3 / 5</span></div>
      <div className="flex gap-1">{[1, 1, 1, 0, 0].map((f, i) => (<span key={i} className={f ? "h-2.5 flex-1 bg-shu" : "h-2.5 flex-1 border-[1.5px] border-sumi"} />))}</div>
    </div>
  );
}

export default ProgressBar;
