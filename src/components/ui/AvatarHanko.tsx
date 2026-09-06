const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function AvatarHanko({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...props}>
      <span className="flex h-11 w-11 items-center justify-center border-[1.5px] border-shu bg-shu font-display text-[15px] font-bold text-paper">京</span>
      <span><span className="block font-sans text-[13px] font-bold">Kyo Atelier</span><span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-shu">Verified studio</span></span>
    </div>
  );
}

export default AvatarHanko;
