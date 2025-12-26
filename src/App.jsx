import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Awards from "./components/sections/Awards";
import Footer from "./components/sections/Footer";
import ScrollToTop from "./components/utils/ScrollToTop";
import Experience from "./components/sections/Experience";

function App() {
	return (
		<>
			<ScrollToTop />
			<Layout>
				<Hero />
				<About />
				<Services />
				<Experience />
				<Projects />
				<Awards />
				<Footer />
			</Layout>
		</>
	);
}

export default App;
