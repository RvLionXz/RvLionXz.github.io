import { motion } from "framer-motion";
import { awardsData } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

const Awards = () => {
	return (
		<section
			id="awards"
			className="w-full py-32 px-6 md:px-12 border-t border-white/5"
		>
			<div className="mx-auto max-w-7xl">
				<SectionHeading title="Moments & Recognition" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{awardsData.map((award, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 transition-colors hover:bg-zinc-900/50"
						>
							<div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
								<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-overlay"></div>

								<img
									src={award.image}
									alt={award.title}
									className="h-full w-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
								/>

								<div className="absolute top-4 left-4 z-20">
									<span className="inline-block rounded-md bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-mono font-medium text-white/90 shadow-lg">
										{award.year}
									</span>
								</div>
							</div>

							<div className="flex flex-1 flex-col justify-between p-6 md:p-8">
								<div>
									<div className="mb-2 text-xs font-medium uppercase tracking-widest text-white/40">
										{award.organizer}
									</div>
									<h3 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-white group-hover:text-white transition-colors">
										{award.title}
									</h3>
									<p className="text-base font-light leading-relaxed text-white/60">
										{award.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Awards;
