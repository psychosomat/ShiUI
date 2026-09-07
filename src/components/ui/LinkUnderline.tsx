const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function LinkUnderline({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("font-sans text-[14px]", className)} {...props}>
      <p>
        Printed in Kyoto — {/* biome-ignore lint/a11y/useValidAnchor: showcase placeholder link */}
        <a href="#" className="link-brush font-bold text-shu">
          read our colophon
        </a>{" "}
        before you order.
      </p>
    </div>
  );
}

export default LinkUnderline;
