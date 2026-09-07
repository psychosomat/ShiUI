import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function SplitButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState("Buy print");
  return (
    <div className={cn("relative inline-flex", className)}>
      <button
        type="button"
        className="inline-flex h-11 select-none items-center bg-shu px-5 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-paper"
      >
        ＋ {choice}
      </button>
      <button
        type="button"
        aria-label="More actions"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 cursor-pointer select-none items-center justify-center border-[1.5px] border-l-0 border-sumi bg-shu text-paper transition-colors hover:bg-sumi"
      >
        ▾
      </button>
      {open ? (
        <div className="absolute right-0 top-full z-20 w-48 border-[1.5px] border-sumi bg-paper">
          {["Buy print", "Gift wrap", "Reserve"].map((o) => (
            <button
              key={o}
              type="button"
              onClick={() => {
                setChoice(o);
                setOpen(false);
              }}
              className={
                o === choice
                  ? "block w-full bg-sumi px-3.5 py-2 text-left font-sans text-[13px] font-bold text-paper"
                  : "block w-full px-3.5 py-2 text-left font-sans text-[13px] transition-colors hover:bg-paper-deep"
              }
            >
              {o}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default SplitButton;
