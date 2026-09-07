import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ToggleButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => setOn((v) => !v)}
      className={cn(
        "inline-flex cursor-pointer select-none items-center gap-2 border-[1.5px] px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200",
        on ? "border-sumi bg-sumi text-paper" : "border-sumi bg-paper text-sumi hover:bg-paper-deep",
        className,
      )}
    >
      <span className={on ? "h-2 w-2 bg-shu" : "h-2 w-2 border border-sumi"} />
      <span>{children ?? "Washi wrap"}</span>
    </button>
  );
}
export default ToggleButton;
