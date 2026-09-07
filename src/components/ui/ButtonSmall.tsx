const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ButtonSmall({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex select-none items-center justify-center gap-1.5 border-[1.5px] border-sumi bg-paper font-sans font-bold uppercase cursor-pointer transition-colors duration-200 hover:bg-sumi hover:text-paper active:translate-y-[1px]",
        "h-8 px-3 text-[11px] tracking-[0.12em] text-sumi",
        className,
      )}
    >
      <span>{children ?? "Filter"}</span>
    </button>
  );
}
export default ButtonSmall;
