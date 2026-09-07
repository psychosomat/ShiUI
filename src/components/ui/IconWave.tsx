const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function IconWave({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex h-14 w-20 items-center justify-center overflow-hidden border-[1.5px] border-sumi bg-paper",
        className,
      )}
      {...props}
    >
      <svg width="64" height="28" viewBox="0 0 64 28" fill="none" aria-hidden="true">
        <path d="M0 20 Q8 6 16 20 T32 20 T48 20 T64 20" stroke="#2a2926" strokeWidth="1.8" />
        <path d="M0 26 Q8 12 16 26 T32 26 T48 26 T64 26" stroke="#e14d2a" strokeWidth="1.8" />
      </svg>
    </div>
  );
}

export default IconWave;
