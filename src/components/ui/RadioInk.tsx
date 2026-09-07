// biome-ignore-all lint/a11y/useSemanticElements: custom ink radio, valid ARIA radiogroup pattern
import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function RadioInk({ className }: { className?: string }) {
  const [value, setValue] = useState("Sumi");
  return (
    <div className={cn("flex items-center gap-6", className)} role="radiogroup">
      {["Sumi", "Shu"].map((label) => (
        <button
          key={label}
          type="button"
          role="radio"
          aria-checked={value === label}
          onClick={() => setValue(label)}
          className="flex cursor-pointer items-center gap-2"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-sumi">
            {value === label ? <span className="h-2.5 w-2.5 rounded-full bg-shu" /> : null}
          </span>
          <span className="font-sans text-[13px] font-bold">{label}</span>
        </button>
      ))}
    </div>
  );
}
export default RadioInk;
