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

export function CopyActions({ name, className }: { name: string; className?: string }) {
  const [done, setDone] = useState<string | null>(null);
  const flash = (k: string) => { setDone(k); setTimeout(() => setDone(null), 1400); };
  const copyImport = async () => {
    await copyText(`import { ${name} } from "@/components/ui/${name}";`);
    flash("import");
  };
  const copySource = async () => {
    try {
      const r = await fetch(`/api/code/${name}.txt`);
      await copyText(await r.text());
    } catch { /* noop */ }
    flash("source");
  };
  const btn = "cursor-pointer border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-150";
  return (
    <span className={cn("inline-flex gap-1.5", className)}>
      <button type="button" onClick={copyImport} className={cn(btn, done === "import" ? "border-shu bg-shu text-paper" : "border-sumi/40 text-sumi/70 hover:border-sumi hover:text-sumi")}>{done === "import" ? "✓ import" : "Copy import"}</button>
      <button type="button" onClick={copySource} className={cn(btn, done === "source" ? "border-shu bg-shu text-paper" : "border-sumi/40 text-sumi/70 hover:border-sumi hover:text-sumi")}>{done === "source" ? "✓ source" : "Copy source"}</button>
    </span>
  );
}
export default CopyActions;
