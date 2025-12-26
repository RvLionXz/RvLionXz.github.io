import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

const Button = ({
	children,
	onClick,
	href,
	variant = "primary",
	className = "",
	...props
}) => {
	const isPrimary = variant === "primary";
	const lenis = useLenis();

	const baseStyles =
		"group relative inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300";

	const variants = {
		primary: "bg-white text-black hover:bg-zinc-200 px-8 py-3.5",
		outline:
			"bg-white/5 border border-white/10 text-white hover:bg-white/10 px-6 py-2.5",
	};

	const Component = href ? motion.a : motion.button;

	const handleClick = (e) => {
		if (onClick) onClick(e);

		if (href && href.startsWith("#")) {
			e.preventDefault();
			lenis?.scrollTo(href);
		}
	};

	return (
		<Component
			href={href}
			onClick={handleClick}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.98 }}
			className={`${baseStyles} ${variants[variant]} ${className}`}
			{...props}
		>
			<span className="relative z-10">{children}</span>

			{isPrimary && (
				<div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
			)}
		</Component>
	);
};

export default Button;
