import { motion } from "framer-motion";

const SectionHeading = ({ title, className = "" }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className={`mb-16 ${className}`}
		>
			<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
				{title}
			</h2>
			<div className="h-1 w-24 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
		</motion.div>
	);
};

export default SectionHeading;
