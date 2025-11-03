import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		scss: {
			prependData: `@use 'src/lib/styles/global-styles.scss' as *;`
		}
	}),

	kit: {
		appDir: '_app',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'build/index.html'
		})
	}
};

export default config;
