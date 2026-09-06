const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function QuoteCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <figure className={cn("border-[1.5px] border-sumi bg-paper p-5", className)} {...props}>
      <div className="font-display text-[44px] font-bold leading-[0.6] text-shu">“</div>
      <blockquote className="mt-2 font-display text-[18px] font-bold leading-snug">{children ?? "White space is not empty. It is where the sun rests."}</blockquote>
      <figcaption className="mt-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-sumi/60"><span className="h-px w-6 bg-shu" /> Press master, Kyoto</figcaption>
    </figure>
  );
}

export default QuoteCard;
