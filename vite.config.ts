import { sveltekit } from '@sveltejs/kit/vite';

import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig ({
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
	},
	test: {
		include: ['tests/unit/**/*.{test,spec}.{js,ts}']
	},
});
