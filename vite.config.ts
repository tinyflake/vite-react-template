import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => {
	// 从环境变量读取框架类型，默认为 vue（用于部署）
	const framework = process.env.FRAMEWORK || 'vue';
	
	console.log(`Building with framework: ${framework} (mode: ${mode})`);

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
