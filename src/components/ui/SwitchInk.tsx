import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function SwitchInk({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [on, setOn] = useState(true);
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 border-[1.5px] border-sumi bg-paper px-3.5 py-2.5",
        className,
      )}
    >
      <span className="font-sans text-[13px] font-bold">{children ?? "Night printing"}</span>
      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => setOn((v) => !v)}
        className={
          on
            ? "relative h-6 w-11 cursor-pointer border-[1.5px] border-sumi bg-sumi transition-colors"
            : "relative h-6 w-11 cursor-pointer border-[1.5px] border-sumi bg-paper transition-colors"
        }
      >
        <span
          className={
            on
              ? "absolute right-0.5 top-0.5 h-4 w-4 bg-paper transition-colors"
              : "absolute left-0.5 top-0.5 h-4 w-4 bg-sumi transition-colors"
          }
        />
      </button>
    </div>
  );
}
export default SwitchInk;
