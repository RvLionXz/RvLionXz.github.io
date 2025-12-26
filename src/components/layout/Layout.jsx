import { ReactLenis } from "lenis/react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<ReactLenis root>
			<div className="relative min-h-screen w-full bg-background font-sans text-white selection:bg-primary selection:text-black">
				<Navbar />

				<main className="relative z-10 flex flex-col items-center px-4 md:px-0">
					{children}
				</main>
			</div>
		</ReactLenis>
	);
};

export default Layout;
