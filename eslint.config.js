// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import globals from 'globals';

export default [
	// 0️⃣ Ignore generated files
	{
		ignores: ['.svelte-kit/**', 'node_modules/**', 'dist/**', 'build/**']
	},

	// 1️⃣ Base JS rules
	js.configs.recommended,

	// 2️⃣ TypeScript rules (only for .ts)
	...tseslint.configs.recommended,

	// 3️⃣ Svelte files (IMPORTANT PART)
	{
		files: ['**/*.svelte'],
		languageOptions: {
			globals: {
				...globals.browser
			},
			parser: svelteParser,
			parserOptions: {
				parser: tseslint.parser, // TS *inside* <script>
				ecmaVersion: 2023,
				sourceType: 'module'
			}
		},
		plugins: {
			svelte
		},
		rules: {
			'svelte/no-at-html-tags': 'error',
			'svelte/valid-compile': 'error'
		}
	},

	// 4️⃣ TypeScript files
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
				ecmaVersion: 2023,
				sourceType: 'module'
			}
		},
		rules: {
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/explicit-function-return-type': 'off'
		}
	},

	// 5️⃣ JavaScript files
	{
		files: ['**/*.js'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		rules: {
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'no-console': 'warn'
		}
	}
];
