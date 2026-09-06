const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function NoticeCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className={cn("flex gap-3 border-l-[5px] border-shu border-y-[1.5px] border-r-[1.5px] border-sumi bg-paper p-3.5", className)} {...props}>
      <div><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-shu">Just pulled</div><div className="font-sans text-[13px] font-bold">{children ?? "Edition № 212 — Wave study is on the drying rack."}</div></div>
    </div>
  );
}

export default NoticeCard;
