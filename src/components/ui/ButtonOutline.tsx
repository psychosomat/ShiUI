const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ButtonOutline({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex select-none items-center justify-center gap-2 border-[1.5px] border-shu bg-transparent font-sans font-bold uppercase cursor-pointer transition-colors duration-200 hover:bg-shu hover:text-paper active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-45",
        "h-11 px-5 text-[13px] tracking-[0.14em] text-shu",
        className,
      )}
    >
      <span className="inline-block h-2 w-2 bg-current" />
      <span>{children ?? "Limited edition"}</span>
    </button>
  );
}
export default ButtonOutline;
