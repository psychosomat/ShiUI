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

export function CodeBlock({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const code = "--paper: #e5e3dc;\n--sumi: #2a2926;\n--shu: #e14d2a;";
  const copy = async () => {
    await copyText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div className={cn("border-[1.5px] border-sumi", className)}>
      <div className="flex items-center justify-between border-b-[1.5px] border-sumi bg-sumi px-3 py-1.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper">tokens.css</span>
        <button
          type="button"
          onClick={copy}
          className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.16em] text-paper/80 hover:text-paper"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto bg-paper p-3.5 font-mono text-[12px] leading-relaxed">
        <code>
          <span className="text-sumi/50">--paper:</span> #e5e3dc;{"\n"}
          <span className="text-sumi/50">--sumi:</span> #2a2926;{"\n"}
          <span className="text-shu">--shu:</span> #e14d2a;
        </code>
      </pre>
    </div>
  );
}
export default CodeBlock;
