const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function InputAddon({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex w-full items-stretch border-[1.5px] border-sumi bg-paper", className)} {...props}>
      <span className="flex items-center border-r-[1.5px] border-sumi bg-sumi px-3 font-mono text-[12px] text-paper">
        ¥
      </span>
      <input
        defaultValue="4,800"
        aria-label="Amount in JPY"
        className="w-full bg-transparent px-3.5 py-2.5 font-mono text-[14px] focus:outline-none"
      />
      <span className="flex items-center border-l-[1.5px] border-sumi px-3 font-mono text-[11px] text-sumi/60">
        JPY
      </span>
    </div>
  );
}

export default InputAddon;
