const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function StepsBar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      {[["Cart", true, true], ["Wrap", true, true], ["Post", false, false]].map(([l, done, cur], i) => (
        <div key={l as string} className="flex flex-1 items-center last:flex-none">
          <div className="flex items-center gap-2">
            <span className={done ? "flex h-6 w-6 items-center justify-center bg-sumi font-mono text-[11px] text-paper" : "flex h-6 w-6 items-center justify-center border-[1.5px] border-sumi font-mono text-[11px]"}>{done && !cur ? "✓" : `0${i + 1}`}</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em]">{l as string}</span>
          </div>
          {i < 2 ? <span className="mx-3 h-px flex-1 bg-sumi/40" /> : null}
        </div>
      ))}
    </div>
  );
}

export default StepsBar;
