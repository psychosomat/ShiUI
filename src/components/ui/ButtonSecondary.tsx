const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ButtonSecondary({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button
      type="button"
      className={cn(
        "ink-wipe inline-flex select-none items-center justify-center gap-2 border-[1.5px] border-sumi bg-paper font-sans font-bold uppercase cursor-pointer transition-colors duration-200 active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-45",
        "h-11 px-5 text-[13px] tracking-[0.14em] text-sumi",
        className,
      )}
    >
      <span>{children ?? "View catalogue"}</span>
    </button>
  );
}
export default ButtonSecondary;
