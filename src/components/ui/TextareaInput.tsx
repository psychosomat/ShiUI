const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function TextareaInput({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("w-full", className)} {...props}>
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em]">Message</label>
      <textarea rows={3} placeholder="Write like ink on washi…" className="w-full resize-none border-[1.5px] border-sumi bg-paper px-3.5 py-2.5 font-sans text-[14px] placeholder:text-sumi/40 focus:border-shu focus:outline-none" />
      <div className="mt-1 text-right font-mono text-[10px] tracking-[0.14em] text-sumi/60">0 / 240</div>
    </div>
  );
}

export default TextareaInput;
