import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$root: 'src',
			'$root/*': 'src/*',
			$api: 'src/api',
			'$api/*': 'src/api/*',
			$models: 'src/models',
			'$models/*': 'src/models/*'
		}
	}
};

export default config;
