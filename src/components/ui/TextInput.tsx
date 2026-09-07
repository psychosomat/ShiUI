import { useId } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function TextInput({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  const id = useId();
  return (
    <div className={cn("w-full", className)} {...props}>
      <label htmlFor={id} className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em]">
        Name <span className="text-shu">＊</span>
      </label>
      <input
        id={id}
        placeholder="Yohaku Yorozuya"
        aria-label="Name"
        className="w-full border-[1.5px] border-sumi bg-paper px-3.5 py-2.5 font-sans text-[14px] text-sumi placeholder:text-sumi/40 focus:border-shu focus:outline-none"
      />
    </div>
  );
}

export default TextInput;
