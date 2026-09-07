const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function InputIcon({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn("flex w-full items-center gap-2 border-[1.5px] border-sumi bg-paper px-3.5 py-2.5", className)}
      {...props}
    >
      <span className="flex h-5 w-5 items-center justify-center bg-shu font-mono text-[11px] text-paper">@</span>
      <input
        defaultValue="studio@shiui.jp"
        aria-label="Email"
        className="w-full bg-transparent font-sans text-[14px] focus:outline-none"
      />
      <span className="font-mono text-[11px] text-shu">✓ verified</span>
    </div>
  );
}

export default InputIcon;
