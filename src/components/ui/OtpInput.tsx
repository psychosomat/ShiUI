import { useRef, useState } from "react";

const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function OtpInput({ className }: { className?: string }) {
  const [digits, setDigits] = useState(["4", "2", "", ""]);
  const refs = useRef<Array<HTMLInputElement | null>>([]);
  const set = (i: number, v: string) => {
    const d = v.replace(/\D/g, "").slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[i] = d;
      return next;
    });
    if (d && i < 3) refs.current[i + 1]?.focus();
  };
  const back = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus();
  };
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {["otp-0", "otp-1", "otp-2", "otp-3"].map((id, i) => (
        <input
          key={id}
          ref={(el) => {
            refs.current[i] = el;
          }}
          value={digits[i] ?? ""}
          onChange={(e) => set(i, e.target.value)}
          onKeyDown={(e) => back(i, e)}
          inputMode="numeric"
          maxLength={1}
          aria-label={`Digit ${i + 1}`}
          className="h-12 w-10 border-[1.5px] border-sumi bg-paper text-center font-display text-[20px] font-bold focus:border-shu focus:outline-none"
        />
      ))}
      <span className="ml-2 font-mono text-[10px] uppercase leading-tight tracking-[0.14em] text-sumi/60">
        Check
        <br />
        your
        <br />
        inbox
      </span>
    </div>
  );
}
export default OtpInput;
