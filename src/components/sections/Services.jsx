import { motion } from "framer-motion";
import { Smartphone, Globe, Palette } from "lucide-react";
import { servicesData } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";

const iconMap = {
	Smartphone: Smartphone,
	Globe: Globe,
	Palette: Palette,
};

const Services = () => {
	return (
		<section className="w-full py-32 px-6 md:px-12 border-t border-white/5">
			<div className="mx-auto max-w-7xl">
				<SectionHeading title="Capabilities" />

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{servicesData.map((service, index) => {
						const Icon = iconMap[service.icon];

						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group relative p-8 h-full border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500"
							>
								<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white group-hover:scale-110 transition-transform duration-500">
									<Icon size={24} strokeWidth={1.5} />
								</div>

								<h3 className="text-xl font-medium text-white tracking-tight mb-4">
									{service.title}
								</h3>

								<p className="text-base text-white/50 font-light leading-relaxed">
									{service.description}
								</p>

								<div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none"></div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
