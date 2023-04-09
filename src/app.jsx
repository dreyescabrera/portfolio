import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import "./assets/css/index.css";

(async function () {
	if (!("scrollBehavior" in document.documentElement.style)) {
		await import("scroll-behavior-polyfill");
	}
})();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
