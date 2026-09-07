const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function IconButton({
  className,
  children,
  label,
}: {
  className?: string;
  children?: React.ReactNode;
  label?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label ?? "Add"}
      className={cn(
        "ink-wipe inline-flex h-10 w-10 select-none items-center justify-center border-[1.5px] border-sumi bg-paper text-sumi transition-colors duration-200 cursor-pointer active:translate-y-[1px]",
        className,
      )}
    >
      <span aria-hidden="true" className="text-[17px] font-medium leading-none">
        {children ?? "+"}
      </span>
    </button>
  );
}
export default IconButton;
