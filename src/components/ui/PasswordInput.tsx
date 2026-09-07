import { useId, useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function PasswordInput({ className }: { className?: string }) {
  const [show, setShow] = useState(false);
  const id = useId();
  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={id} className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em]">
        Password
      </label>
      <div className="flex items-stretch border-[1.5px] border-sumi bg-paper focus-within:border-shu">
        <input
          id={id}
          type={show ? "text" : "password"}
          defaultValue="hinomaru-1868"
          className="w-full bg-transparent px-3.5 py-2.5 font-sans text-[14px] tracking-[0.2em] focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          className="shrink-0 cursor-pointer border-l-[1.5px] border-sumi px-3 font-mono text-[11px] uppercase tracking-[0.14em] hover:bg-sumi hover:text-paper"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
export default PasswordInput;
