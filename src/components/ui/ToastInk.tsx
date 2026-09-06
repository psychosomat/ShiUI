import { useEffect, useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ToastInk({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [show, setShow] = useState(true);
  const [undone, setUndone] = useState(false);
  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setShow(false), 6000);
    return () => clearTimeout(t);
  }, [show]);
  if (!show) {
    return (
      <div className={cn("w-full", className)}>
        <button type="button" onClick={() => { setShow(true); setUndone(false); }} className="cursor-pointer border-[1.5px] border-sumi px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] hover:bg-sumi hover:text-paper">Show toast →</button>
        {undone ? <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.14em] text-shu">Undone ✓</span> : null}
      </div>
    );
  }
  return (
    <div role="status" className={cn("flex items-center gap-3 border-[1.5px] border-sumi bg-sumi px-4 py-3 text-paper", className)}>
      <span className="flex h-5 w-5 items-center justify-center bg-shu text-[12px]">✓</span>
      <span className="font-sans text-[13px] font-bold">{children ?? "Added to your folio"}</span>
      <button type="button" onClick={() => { setShow(false); setUndone(true); }} className="ml-auto cursor-pointer font-mono text-[11px] uppercase tracking-[0.14em] underline underline-offset-4">Undo</button>
    </div>
  );
}
export default ToastInk;
