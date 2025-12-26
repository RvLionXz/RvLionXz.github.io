import { motion } from "framer-motion";
import { heroData } from "../../data/content";
import Button from "../ui/Button";
import { Download } from "lucide-react";

const Hero = () => {
	return (
		<section className="relative flex min-h-screen w-full flex-col items-center justify-center pt-20 text-center overflow-hidden bg-black">
			<div className="absolute inset-0 z-0">
				<img
					src="/images/hero-bg.jpg"
					alt="Background Texture"
					className="h-full w-full object-cover grayscale opacity-40 mix-blend-soft-light"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
			</div>

			<div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent blur-3xl opacity-30 pointer-events-none z-10"></div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
				className="relative z-20 max-w-5xl flex flex-col items-center px-4"
			>
				<h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 pb-2 select-none">
					{heroData.name}
				</h1>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="space-y-8 mt-2"
				>
					<div className="space-y-4">
						<h2 className="text-2xl md:text-3xl font-light tracking-tight text-white/90">
							{heroData.title}
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-white/50 font-light leading-relaxed tracking-wide">
							{heroData.subTitle}
							<span className="block mt-2 text-white/30 text-base">
								{heroData.description}
							</span>
						</p>
					</div>

					<div className="pt-6 flex flex-col items-center gap-4">
						<Button
							href={heroData.cvLink}
							variant="primary"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="flex items-center gap-2">
								<Download size={18} />
								{heroData.cta}
							</span>
						</Button>

						<a
							href="#projects"
							className="text-sm text-white/40 hover:text-white transition-colors border-b border-white/10 hover:border-white"
						>
							or view selected works
						</a>
					</div>
				</motion.div>
			</motion.div>

			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw] h-[300px] bg-white/[0.03] blur-[80px] rounded-[100%] pointer-events-none translate-y-1/2 z-10"></div>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[150px] bg-white/[0.08] blur-[50px] rounded-[100%] pointer-events-none translate-y-[60%] z-10"></div>
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-50 z-10"></div>
		</section>
	);
};

export default Hero;
