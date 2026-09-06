const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function IconTorii({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex h-14 w-20 items-center justify-center border-[1.5px] border-sumi", className)} {...props}>
      <svg width="46" height="30" viewBox="0 0 46 30" fill="none"><path d="M3 6 H43 M8 12 H38 M14 12 V27 M32 12 V27 M11 27 H35" stroke="#2a2926" strokeWidth="2.4"/><rect x="20" y="1" width="6" height="5" fill="#e14d2a"/></svg>
    </div>
  );
}

export default IconTorii;
