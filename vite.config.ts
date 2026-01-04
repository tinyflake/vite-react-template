import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ mode }) => {
	// 尝试加载环境变量，如果失败则使用默认值
	let framework = 'react';
	try {
		const env = loadEnv(mode, process.cwd(), '');
		framework = env.FRAMEWORK || 'react';
	} catch (error) {
		console.log('No .env file found, using default framework: react');
	}

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
