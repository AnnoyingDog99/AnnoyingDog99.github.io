import svelte from 'eslint-plugin-svelte';

export default [
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelte.parsers.svelte
		},
		plugins: {
			svelte
		},
		rules: {
			// Add any specific Svelte rules or TypeScript rules here
			'svelte/no-at-html-tags': 'error',
			'svelte/no-unused-vars': 'warn'
		}
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.json'
			}
		},
		plugins: {
			'@typescript-eslint': require('@typescript-eslint/eslint-plugin')
		},
		rules: {
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/explicit-function-return-type': 'off'
		}
	},
	{
		files: ['**/*.js'],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest'
			}
		},
		rules: {
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'no-console': 'warn'
		}
	}
];
