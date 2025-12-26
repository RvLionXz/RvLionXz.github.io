import { motion } from "framer-motion";
import { experienceData } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

const Experience = () => {
	return (
		<section id="experience" className="w-full py-24 px-6 md:px-12 border-t border-white/5">
			<div className="mx-auto max-w-7xl">
				<SectionHeading title="Professional Journey" />

				<div className="space-y-0">
					{experienceData.map((job, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="group relative border-b border-white/10 py-12 transition-colors hover:bg-white/[0.02]"
						>
							<div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 md:gap-12">
								<div className="md:w-1/4">
									<span className="text-sm font-mono text-white/40 group-hover:text-white/70 transition-colors">
										{job.period}
									</span>
									<h3 className="mt-2 text-xl font-medium text-white group-hover:text-white transition-colors">
										{job.company}
									</h3>
								</div>

								<div className="md:w-3/4">
									<h4 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 group-hover:text-white transition-colors">
										{job.role}
									</h4>
									<p className="text-lg text-white/50 font-light leading-relaxed group-hover:text-white/80 transition-colors max-w-3xl">
										{job.description}
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

export default Experience;
