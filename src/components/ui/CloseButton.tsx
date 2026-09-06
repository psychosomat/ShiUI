const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function CloseButton({ className, onClose }: { className?: string; onClose?: () => void }) {
  return (
    <button type="button" onClick={onClose} aria-label="Close" className={cn("inline-flex h-9 w-9 cursor-pointer items-center justify-center border-[1.5px] border-sumi bg-paper text-sumi transition-colors duration-200 hover:bg-sumi hover:text-paper", className)}>
      <span aria-hidden="true" className="text-[15px] leading-none">×</span>
    </button>
  );
}
export default CloseButton;
