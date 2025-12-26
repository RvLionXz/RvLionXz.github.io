import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full py-24 md:py-32 px-4 md:px-12 border-t border-white/5"
		>
			<div className="mx-auto max-w-7xl">
				<SectionHeading title="Selected Works" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projectsData.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-colors duration-500 ${
								index === 0
									? "md:col-span-2 aspect-[4/3] md:aspect-[21/9]"
									: "aspect-[4/3]"
							}`}
						>
							<div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-20">
								<div className="flex justify-between items-start gap-4">
									<div className="space-y-3">
										<div className="flex flex-wrap items-center gap-2">
											<Badge
												variant="default"
												className="text-[10px] md:text-xs px-2 py-0.5"
											>
												{project.category}
											</Badge>
											{project.status && (
												<Badge
													variant="success"
													className="text-[10px] md:text-xs px-2 py-0.5"
												>
													{project.status}
												</Badge>
											)}
										</div>
										<h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter leading-tight">
											{project.title}
										</h3>
									</div>

									<div className="h-8 w-8 md:h-10 md:w-10 flex-shrink-0 rounded-full border border-white/20 flex items-center justify-center text-white/50 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
										<ArrowUpRight size={16} className="md:w-5 md:h-5" />
									</div>
								</div>

								<div className="max-w-2xl mt-auto">
									<p className="text-white/70 text-sm md:text-lg font-light leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-x-3 gap-y-1">
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-wider"
											>
												{tech}{" "}
												{i < project.tech.length - 1 && (
													<span className="text-white/10">•</span>
												)}
											</span>
										))}
									</div>
								</div>
							</div>

							<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10 pointer-events-none"></div>

							<div className="absolute inset-0 h-full w-full z-0">
								<img
									src={project.image}
									alt={project.title}
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
								/>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
