const Badge = ({ children, variant = "default", className = "" }) => {
	const variants = {
		default: "bg-white/10 border-white/10 text-white/80",
		success: "bg-teal-500/10 border-teal-500/20 text-teal-200",
		outline: "bg-transparent border-white/20 text-white/60",
	};

	return (
		<span
			className={`inline-block rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase ${variants[variant]} ${className}`}
		>
			{children}
		</span>
	);
};

export default Badge;
