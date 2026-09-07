const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function TestimonialMini({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <figure className={cn("border-[1.5px] border-sumi bg-paper p-4", className)} {...props}>
      <div className="flex gap-1 text-shu text-[13px]">★★★★★</div>
      <blockquote className="mt-2 font-sans text-[13px] leading-snug">
        {children ?? "The vermilion hits like a temple bell. My wall finally has a pulse."}
      </blockquote>
      <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-sumi/60">
        — R. Tanaka, Osaka
      </figcaption>
    </figure>
  );
}

export default TestimonialMini;
