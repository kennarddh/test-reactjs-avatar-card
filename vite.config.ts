import { defineConfig, loadEnv } from 'vite'

// Plugin
import eslintPlugin from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
	const envPrefix = ['APP_']

	const { PORT = 3000, OPEN_BROWSER = 'true' } = {
		...loadEnv(mode, process.cwd(), ''),
	}

	const appEnv = loadEnv(mode, process.cwd(), envPrefix)

	return defineConfig({
		plugins: [react(), eslintPlugin(), svgr()],
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		server: {
			port: PORT,
			open: !!OPEN_BROWSER,
		},
		envPrefix,
		build: {
			outDir: 'build',
		},
		define: {
			env: { ...appEnv },
		},
	})
}
