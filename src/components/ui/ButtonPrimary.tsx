const cn = (...parts: Array<string | false | null | undefined>): string => parts.filter(Boolean).join(" ");

export function ButtonPrimary({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<button
			type="button"
			className={cn(
				"group inline-flex select-none items-center justify-center gap-2 border-[1.5px] border-sumi bg-shu font-sans font-bold uppercase cursor-pointer transition-all duration-200 hover:bg-sumi active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-45",
				"h-11 px-5 text-[13px] tracking-[0.14em] text-paper",
				className,
			)}
		>
			<span>{children ?? "Reserve a seat"}</span>
			<span
				aria-hidden="true"
				className="inline-block transition-transform duration-200 group-hover:translate-x-1"
			>
				→
			</span>
		</button>
	);
}
export default ButtonPrimary;
