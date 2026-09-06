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

export function CopyButton({ className, text, label }: { className?: string; text?: string; label?: string }) {
  const [done, setDone] = useState(false);
  const value = text ?? "HINOMARU-10";
  const copy = async () => {
    await copyText(value);
    setDone(true);
    setTimeout(() => setDone(false), 1400);
  };
  return (
    <button type="button" onClick={copy} className={cn("inline-flex cursor-pointer select-none items-center gap-2 border-[1.5px] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200", done ? "border-shu bg-shu text-paper" : "border-sumi bg-paper text-sumi hover:bg-sumi hover:text-paper", className)}>
      <span aria-hidden="true">{done ? "✓" : "⧉"}</span>
      <span>{done ? "Copied" : (label ?? "Copy")}</span>
    </button>
  );
}
export default CopyButton;
