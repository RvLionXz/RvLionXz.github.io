import { motion } from "framer-motion";
import { footerData } from "../../data/content";
import Button from "../ui/Button";

const Footer = () => {
	return (
		<footer
			id="contact"
			className="w-full py-24 px-6 md:px-12 border-t border-white/10 bg-black"
		>
			<div className="mx-auto max-w-7xl flex flex-col items-center text-center">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-12"
				>
					{footerData.headline}
				</motion.h2>

				<div className="mb-16">
					<Button href={`mailto:${footerData.email}`} variant="primary">
						Send an Email
					</Button>
				</div>

				<div className="flex space-x-8 mb-12">
					{footerData.socials.map((social, index) => (
						<a
							key={index}
							href={social.href}
							className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest"
						>
							{social.name}
						</a>
					))}
				</div>

				<p className="text-xs text-white/20 font-mono">
					© {new Date().getFullYear()} Reval Maulidan
				</p>
			</div>
		</footer>
	);
};

export default Footer;
