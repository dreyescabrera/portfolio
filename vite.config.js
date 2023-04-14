import { defineConfig } from "vite";
import path from "path";
import alias from "@rollup/plugin-alias";
import react from "@vitejs/plugin-react";

export default defineConfig({
	server: { host: "0.0.0.0", port: 3500, strictPort: true },
	plugins: [
		react(),
		alias({
			entries: {
				"@assets": path.resolve(__dirname, "src/assets/"),
				"@components": path.resolve(__dirname, "src/components"),
				"@common": path.resolve(__dirname, "src/components/common/"),
				"@data": path.resolve(__dirname, "src/data/"),
				"@features": path.resolve(__dirname, "src/features/"),
				"@hooks": path.resolve(__dirname, "src/hooks/"),
			},
		}),
	],
});
