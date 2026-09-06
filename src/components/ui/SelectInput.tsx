const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function SelectInput({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em]">Paper stock</label>
      <div className="relative">
        <select className="w-full appearance-none border-[1.5px] border-sumi bg-paper px-3.5 py-2.5 pr-10 font-sans text-[14px] focus:border-shu focus:outline-none">
          <option>Washi — kozo</option><option>Washi — mitsumata</option><option>Recycled kraft</option>
        </select>
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sumi">▾</span>
      </div>
    </div>
  );
}

export default SelectInput;
