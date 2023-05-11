import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		// alias: {
		// 	$root: resolve('src'),
		// 	'$root/*': resolve('src/*'),
		// 	$lib: resolve('src/lib'),
		// 	'$lib/*': resolve('src/lib/*'),
		// 	$api: resolve('src/api'),
		// 	'$api/*': resolve('src/api/*'),
		// 	$models: resolve('src/models'),
		// 	'$models/*': resolve('src/models/*')
		// }
	}
};

export default config;
