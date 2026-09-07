import { useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");
async function copyText(value: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

export function CouponEdge({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [copied, setCopied] = useState(false);
  const code = "HINOMARU-10";
  const copy = async () => {
    await copyText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-[1.5px] border-dashed border-sumi bg-paper-deep px-4 py-3",
        className,
      )}
    >
      <span className="bg-sumi px-2 py-1 font-mono text-[11px] tracking-[0.14em] text-paper">{code}</span>
      <span className="font-sans text-[13px]">{children ?? "10% off your first folio — ends Sunday."}</span>
      <button
        type="button"
        onClick={copy}
        className={
          copied
            ? "ml-auto cursor-pointer border-[1.5px] border-shu bg-shu px-2.5 py-1 font-mono text-[11px] uppercase text-paper"
            : "ml-auto cursor-pointer border-[1.5px] border-sumi px-2.5 py-1 font-mono text-[11px] uppercase hover:bg-sumi hover:text-paper"
        }
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
    </div>
  );
}
export default CouponEdge;
