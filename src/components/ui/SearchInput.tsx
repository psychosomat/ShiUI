import { useState } from "react";
const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function SearchInput({ className }: { className?: string }) {
  const [q, setQ] = useState("");
  return (
    <div className={cn("flex w-full items-stretch border-[1.5px] border-sumi bg-paper focus-within:border-shu", className)}>
      <span className="flex items-center pl-3.5 text-sumi" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5.2" stroke="currentColor" strokeWidth="1.6" /><path d="M11 11l3.2 3.2" stroke="currentColor" strokeWidth="1.6" /></svg></span>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search prints, poets, plates…" className="w-full bg-transparent px-3 py-2.5 font-sans text-[14px] placeholder:text-sumi/40 focus:outline-none" />
      {q ? <button type="button" onClick={() => setQ("")} aria-label="Clear" className="cursor-pointer px-3 font-mono text-[13px] hover:text-shu">×</button> : <span className="m-1 hidden items-center border border-sumi px-2 font-mono text-[10px] tracking-widest text-sumi/70 sm:flex">⌘K</span>}
    </div>
  );
}
export default SearchInput;
