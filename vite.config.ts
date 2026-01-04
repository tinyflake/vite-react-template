import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const framework = env.FRAMEWORK || 'react';

	return {
		plugins: [
			framework === 'vue' ? vue() : react(),
			cloudflare()
		],
		define: {
			__FRAMEWORK__: JSON.stringify(framework)
		}
	};
});
