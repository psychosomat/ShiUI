const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ButtonLarge({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button type="button" className={cn("group inline-flex w-full select-none items-center justify-between gap-2 border-[1.5px] border-sumi bg-shu font-sans font-bold uppercase cursor-pointer transition-colors duration-200 hover:bg-sumi active:translate-y-[1px]", "h-12 px-6 text-[14px] tracking-[0.14em] text-paper", className)}>
      <span className="font-mono text-[11px] opacity-70">№ 04</span>
      <span>{children ?? "Checkout — ¥8,000"}</span>
      <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">⟶</span>
    </button>
  );
}
export default ButtonLarge;
