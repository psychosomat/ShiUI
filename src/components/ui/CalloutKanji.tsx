const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function CalloutKanji({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex gap-4 border-[1.5px] border-sumi bg-sumi p-4 text-paper", className)} {...props}>
      <span className="font-display text-[38px] font-bold leading-none text-shu">印</span>
      <span>
        <span className="block font-display text-[16px] font-bold">
          {children ?? "Print like a poster, not a page."}
        </span>
        <span className="mt-1 block font-sans text-[13px] text-paper/70">
          One sun, two inks, generous margins. Everything else is noise.
        </span>
      </span>
    </div>
  );
}

export default CalloutKanji;
