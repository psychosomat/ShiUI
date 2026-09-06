const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function DataTable({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("w-full overflow-x-auto border-[1.5px] border-sumi", className)} {...props}>
      <table className="w-full border-collapse text-left">
        <thead><tr className="border-b-[1.5px] border-sumi bg-sumi text-paper">{["Plate", "Stock", "Qty", "¥"].map((h) => (<th key={h} className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em]">{h}</th>))}</tr></thead>
        <tbody>
          {[["Hinomaru 04", "Kozo", "120", "4,800"], ["Wave study", "Kraft", "80", "3,200"]].map((r) => (
            <tr key={r[0]} className="border-b border-sumi/30 transition-colors last:border-0 hover:bg-paper-deep">{r.map((c) => (<td key={c} className="px-3 py-2 font-sans text-[13px]">{c}</td>))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
