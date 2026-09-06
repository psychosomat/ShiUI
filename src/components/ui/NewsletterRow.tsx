import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function NewsletterRow({ className }: { className?: string }) {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div className={cn("flex items-center gap-3 border-[1.5px] border-sumi bg-sumi p-4 text-paper", className)}>
        <span className="flex h-6 w-6 items-center justify-center bg-shu text-[13px]">✓</span>
        <span className="font-sans text-[13px] font-bold">First pressing list — you are № 1,204. See you at full moon.</span>
      </div>
    );
  }
  return (
    <div className={cn("flex flex-col gap-2 border-[1.5px] border-sumi bg-paper p-4 sm:flex-row sm:items-stretch", className)}>
      <input placeholder="your@address.jp" aria-label="Email" className="w-full border-[1.5px] border-sumi bg-paper px-3.5 py-2.5 font-sans text-[14px] placeholder:text-sumi/40 focus:border-shu focus:outline-none" />
      <button type="button" onClick={() => setDone(true)} className="ink-wipe shrink-0 cursor-pointer border-[1.5px] border-sumi bg-shu px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-paper">Join →</button>
    </div>
  );
}
export default NewsletterRow;
