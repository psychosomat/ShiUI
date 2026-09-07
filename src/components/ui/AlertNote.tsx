import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function AlertNote({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  if (!open) return <div className={cn("w-full", className)} {...{}} />;
  return (
    <div role="alert" className={cn("flex gap-3 border-[1.5px] border-sumi bg-paper p-3.5", className)}>
      <span className="flex h-6 w-6 shrink-0 items-center justify-center border-[1.5px] border-sumi font-mono text-[12px] font-bold">
        i
      </span>
      <div>
        <div className="font-sans text-[13px] font-bold">Proofs ready Thursday</div>
        <div className="font-sans text-[13px] text-sumi/70">
          {children ?? "Two posters passed inspection. One needs a second pass of vermilion."}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss"
        className="ml-auto cursor-pointer self-start text-[15px] leading-none hover:text-shu"
      >
        ×
      </button>
    </div>
  );
}
export default AlertNote;
