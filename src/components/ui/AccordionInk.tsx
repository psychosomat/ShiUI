import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

const ROWS: Array<[string, string]> = [
  [
    "How long does shipping take?",
    "Domestic orders leave in 48 hours, flat in a kraft tube. International in 5–9 days, tracked.",
  ],
  ["Is the ink lightfast?", "Sumi + vermilion, rated 100+ years behind glass. Keep it out of direct sun."],
  ["Can I return a print?", "14 days, unhung and flat. Seconds are resold clearly marked."],
];

export function AccordionInk({ className }: { className?: string }) {
  const [open, setOpen] = useState(0);
  return (
    <div className={cn("border-[1.5px] border-sumi", className)}>
      {ROWS.map(([q, a], i) => (
        <div key={q} className="border-b border-sumi last:border-0">
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left font-sans text-[13px] font-bold"
          >
            {q}
            <span
              className={
                open === i
                  ? "flex h-6 w-6 shrink-0 items-center justify-center bg-sumi text-paper"
                  : "flex h-6 w-6 shrink-0 items-center justify-center border-[1.5px] border-sumi"
              }
            >
              {open === i ? "−" : "＋"}
            </span>
          </button>
          {open === i ? (
            <p className="border-t border-sumi bg-paper-deep px-4 py-3 font-sans text-[13px] text-sumi/75">{a}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
export default AccordionInk;
