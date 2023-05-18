import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$routes: resolve('./src/routes'),
			$constants: resolve('./src/constants.ts'),
			$lib: resolve('./src/lib'),
			$api: resolve('./src/api'),
			$models: resolve('./src/models')
		}
	}
};

export default config;
