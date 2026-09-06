const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function DefinitionList({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <dl className={cn("border-[1.5px] border-sumi", className)} {...props}>
      {[["Stock", "Kozo washi, 250 gsm"], ["Ink", "Sumi + vermilion"], ["Run", "300 numbered"]].map(([k, v]) => (
        <div key={k} className="grid grid-cols-[110px_1fr] border-b border-sumi last:border-0"><dt className="bg-sumi px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-paper">{k}</dt><dd className="px-3 py-2 font-sans text-[13px]">{v}</dd></div>
      ))}
    </dl>
  );
}

export default DefinitionList;
