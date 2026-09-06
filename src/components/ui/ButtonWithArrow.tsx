const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ButtonWithArrow({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button type="button" className={cn("group inline-flex cursor-pointer select-none items-center gap-3 border-y-[1.5px] border-sumi py-2", className)}>
      <span className="font-display text-[17px] font-bold text-sumi">{children ?? "See the process"}</span>
      <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center border-[1.5px] border-sumi text-[13px] text-sumi transition-all duration-200 group-hover:bg-shu group-hover:text-paper">↗</span>
    </button>
  );
}
export default ButtonWithArrow;
