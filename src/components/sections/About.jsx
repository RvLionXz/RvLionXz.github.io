import { motion } from "framer-motion";
import { aboutData } from "../../data/content";

const About = () => {
	return (
		<section
			id="about"
			className="relative w-full py-32 px-6 md:px-12 bg-background overflow-hidden"
		>
			<div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="relative"
				>
					<div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl bg-zinc-900 mx-auto md:mx-0">
						<div className="absolute inset-0 bg-white/5 z-10 mix-blend-overlay"></div>
						<img
							src={aboutData.image}
							alt="Profile"
							className="h-full w-full object-cover grayscale contrast-125 opacity-80 transition-all duration-700 hover:scale-105 hover:grayscale-0 hover:opacity-100"
						/>
					</div>
					<div className="mt-6 text-center md:text-left">
						<p className="text-sm font-mono text-white/40 uppercase tracking-widest">
							&mdash; {aboutData.quote}
						</p>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="space-y-8"
				>
					<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
						{aboutData.sectionTitle}
					</h2>

					<div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-white/60">
						{aboutData.paragraphs.map((para, index) => (
							<p key={index} className="transition-colors hover:text-white/90">
								{para}
							</p>
						))}
					</div>

					<div className="pt-4 border-t border-white/10">
						<div className="grid grid-cols-3 gap-8">
							<div>
								<h3 className="text-3xl font-bold text-white tracking-tighter">
									1+
								</h3>
								<p className="text-xs text-white/40 uppercase tracking-wide mt-1">
									Years Exp
								</p>
							</div>
							<div>
								<h3 className="text-3xl font-bold text-white tracking-tighter">
									2
								</h3>
								<p className="text-xs text-white/40 uppercase tracking-wide mt-1">
									Hackathons
								</p>
							</div>
							<div>
								<h3 className="text-3xl font-bold text-white tracking-tighter">
									5+
								</h3>
								<p className="text-xs text-white/40 uppercase tracking-wide mt-1">
									Real Project
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
