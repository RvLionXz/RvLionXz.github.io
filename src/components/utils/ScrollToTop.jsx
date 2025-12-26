import { useEffect } from "react";

const ScrollToTop = () => {
	useEffect(() => {
		window.history.scrollRestoration = "manual";
		window.scrollTo(0, 0);
	}, []);

	return null;
};

export default ScrollToTop;
