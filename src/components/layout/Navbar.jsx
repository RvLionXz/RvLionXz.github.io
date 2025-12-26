import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { navLinks } from "../../data/content";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const lenis = useLenis();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleLinkClick = (e, href) => {
		e.preventDefault();
		setMobileMenuOpen(false);
		if (href.startsWith("#")) {
			lenis?.scrollTo(href);
		}
	};

	return (
		<>
			<nav
				className={`fixed top-0 z-50 w-full border-b transition-all duration-500 ${
					scrolled
						? "border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20"
						: "border-transparent bg-transparent backdrop-blur-none"
				}`}
			>
				<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
					<a
						href="#"
						onClick={(e) => handleLinkClick(e, "#")}
						className="text-xl font-bold tracking-tighter text-white z-50 relative"
					>
						rvlionxz<span className="text-white/40">.github.io</span>
					</a>

					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={(e) => handleLinkClick(e, link.href)}
								className="text-sm font-medium text-white/60 transition-colors hover:text-white"
							>
								{link.name}
							</a>
						))}
					</div>

					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="md:hidden relative z-50 p-2 text-white/80 hover:text-white"
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</nav>

			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-3xl md:hidden"
					>
						<div className="flex flex-col items-center space-y-8">
							{navLinks.map((link, i) => (
								<motion.a
									key={link.name}
									href={link.href}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 + i * 0.1 }}
									onClick={(e) => handleLinkClick(e, link.href)}
									className="text-3xl font-light tracking-tight text-white/80 hover:text-white"
								>
									{link.name}
								</motion.a>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
