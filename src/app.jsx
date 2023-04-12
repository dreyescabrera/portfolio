import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import scrollPolyfill from "./features/scrollBehaviorPolyfill";
import "./assets/css/index.css";
scrollPolyfill();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
