const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function DateInput({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("grid grid-cols-3 gap-2", className)} {...props}>
      {[["Year", "2026"], ["Month", "04"], ["Day", "18"]].map(([l, v]) => (
        <label key={l} className="block"><span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-sumi/70">{l}</span>
        <input defaultValue={v} className="w-full border-[1.5px] border-sumi bg-paper px-2.5 py-2 text-center font-mono text-[13px] focus:border-shu focus:outline-none" /></label>
      ))}
    </div>
  );
}

export default DateInput;
