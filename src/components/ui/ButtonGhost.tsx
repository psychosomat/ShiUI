const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ButtonGhost({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button
      type="button"
      className={cn(
        "link-brush inline-flex select-none items-center gap-2 bg-transparent px-1 py-2 font-mono uppercase cursor-pointer active:translate-y-[1px]",
        "text-[12px] tracking-[0.18em] text-sumi",
        className,
      )}
    >
      <span>{children ?? "Skip for now"}</span>
    </button>
  );
}
export default ButtonGhost;
