const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function BackToTop({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex h-11 w-11 cursor-pointer items-center justify-center border-[1.5px] border-sumi bg-paper text-[16px] transition-colors hover:bg-sumi hover:text-paper" aria-label="Back to top">↑</button>
      <span className="vertical-rl font-mono text-[10px] uppercase tracking-[0.24em] text-sumi/60">Back to top</span>
    </div>
  );
}
export default BackToTop;
