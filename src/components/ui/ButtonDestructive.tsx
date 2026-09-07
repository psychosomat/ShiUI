const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ButtonDestructive({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex select-none items-center justify-center gap-2 border-[1.5px] border-sumi bg-shu-deep font-sans font-bold uppercase cursor-pointer transition-colors duration-200 hover:bg-shu active:translate-y-[1px]",
        "h-11 px-5 text-[13px] tracking-[0.14em] text-paper",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="flex h-4 w-4 items-center justify-center border border-paper text-[11px] leading-none"
      >
        !
      </span>
      <span>{children ?? "Close the edition"}</span>
    </button>
  );
}
export default ButtonDestructive;
