const scrollPolyfill = async function () {
	if (!("scrollBehavior" in document.documentElement.style)) {
		await import("scroll-behavior-polyfill");
	}
};
export default scrollPolyfill;
