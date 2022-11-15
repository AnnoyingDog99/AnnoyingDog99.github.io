import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['..']
		}
	},
	resolve: {
		alias: {
			$components: path.resolve('./src/components'),
			$stores: path.resolve('./src/stores'),
			$types: path.resolve('./src/types'),
			$utils: path.resolve('./src/utils'),
			$classes: path.resolve('./src/classes')
		}
	}
};

export default config;
