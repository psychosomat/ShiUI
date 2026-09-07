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

const TOKENS = [
  ["Paper", "#e5e3dc", "text-sumi"],
  ["Sumi", "#2a2926", "text-paper"],
  ["Shu", "#e14d2a", "text-paper"],
];

export function TokenSwatch({ className }: { className?: string }) {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (hex: string) => {
    await copyText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 1200);
  };
  return (
    <div className={cn("grid grid-cols-3 border-[1.5px] border-sumi", className)}>
      {TOKENS.map(([name, hex]) => (
        <button
          key={hex}
          type="button"
          onClick={() => copy(hex)}
          title="Click to copy"
          className="cursor-pointer border-r-[1.5px] border-sumi p-3 text-left transition-transform last:border-0 hover:-translate-y-0.5 active:translate-y-0"
          style={{ background: hex }}
        >
          <span
            className="block font-mono text-[10px] uppercase tracking-[0.18em]"
            style={{ color: hex === "#e5e3dc" ? "#2a2926" : "#e5e3dc" }}
          >
            {name}
          </span>
          <span
            className="block font-mono text-[12px] font-semibold"
            style={{ color: hex === "#e5e3dc" ? "#2a2926" : "#e5e3dc" }}
          >
            {copied === hex ? "✓ copied" : hex}
          </span>
        </button>
      ))}
    </div>
  );
}
export default TokenSwatch;
